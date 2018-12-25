import classNames from 'classnames'
import * as React from 'react';
import * as ReactDom from 'react-dom'
import Dropzone from 'react-dropzone'
import InputRange, { InputRangeClassNames, InputRangeProps, Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { parse, resync, stringify, subTitleType, toSrtTime, toVttTime } from 'subtitle'
import '../../styles/sample.css';
// https://github.com/gsantiago/subtitle.js#readme

interface ISubtitlesState {
    text: string,
    subtitles: subTitleType[],
    current: number,
    end: number,
    stopped: boolean,
    step: number
}

export class Subtitles extends React.Component<{}, ISubtitlesState> {

    constructor(props) {
        super(props);
        this.state = { text: "Upload .SRT file first", subtitles: [], current: 0, end: 60 * 60 * 1000, stopped: false, step: 100 };
        // this.getSubtitlesFromUrl("carol.srt");
    }

    public componentDidMount() {
        //
    }

    public render() {
        return (
            <React.Fragment>
                <div className='text display-linebreak'>{this.state.text}</div>

                {this.state.subtitles.length === 0 && <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                            <div
                                {...getRootProps()}
                                className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                            >
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Drop files here...</p> :
                                        <p>Try dropping an .SRT file here, or click to select a file to upload.</p>
                                }
                            </div>
                        )
                    }}
                </Dropzone>}

                <InputRange
                    // tslint:disable-next-line:jsx-no-lambda
                    formatLabel={value => `${toSrtTime(value)}`}
                    maxValue={this.state.end}
                    minValue={0}
                    step={1000}
                    value={this.state.current}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={value => { this.setState({ current: parseInt(value.toString(), 10) }); }}
                />

                <button className="pause-button"
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.setState({ stopped: !this.state.stopped })}
                >{this.state.stopped ? "Play" : "Pause"}
                </button>
            </React.Fragment >
        );
    }

    private onDrop = (acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file: Blob) => {
            const reader = new FileReader();
            reader.onload = () => {
                const fileContentAsString = reader.result;
                // tslint:disable-next-line:no-console
                console.log(fileContentAsString);
                this.getSubtitlesFromText(fileContentAsString.toString());
                this.runSteps();
            };
            // tslint:disable-next-line:no-console
            reader.onabort = () => console.log('file reading was aborted');
            // tslint:disable-next-line:no-console
            reader.onerror = () => console.log('file reading has failed');

            reader.readAsBinaryString(file);
        });
    }

    private step() {
        const subtitles: subTitleType[] = this.state.subtitles.filter((sub) => sub.start <= this.state.current && sub.end >= this.state.current);
        if (subtitles && subtitles.length > 0) {
            const subtitle = subtitles[0];
            this.setState({ text: subtitle.text });
        } else {
            this.setState({ text: '' });
        }
    }

    private async wait(delay: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    }

    private async runSteps() {
        while (true) {
            await this.step();
            await this.wait(this.state.step);
            if (!this.state.stopped) {
                if (this.state.current < this.state.end) {
                    this.setState({ current: this.state.current + this.state.step });
                }
            }
        }
    }

    private async getSubtitlesFromURL(srtFileUrl: string) {
        const data = await fetch(srtFileUrl);
        const content = await data.text();
        const subtitles = parse(content)
        const end = parseInt(subtitles[subtitles.length - 1].end.toString(), 10);

        this.setState({ subtitles, end });
    }
    private getSubtitlesFromText(srtContent: string) {
        const subtitles = parse(srtContent);
        const end = parseInt(subtitles[subtitles.length - 1].end.toString(), 10);

        this.setState({ subtitles, end });
    }
}