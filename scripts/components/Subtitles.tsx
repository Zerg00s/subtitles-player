import classNames from 'classnames'
import * as React from 'react';
import Dropzone from 'react-dropzone'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { parse, subTitleType, toSrtTime, } from 'subtitle'
import * as toastr from 'toastr'
import '../../styles/sample.css';

interface ISubtitlesState {
    text: string,
    subtitles: subTitleType[],
    end, step, current: number,
    stopped: boolean,
}

export class Subtitles extends React.Component<{}, ISubtitlesState> {
    constructor(props) {
        super(props);
        this.state = { text: "Upload .SRT file first", subtitles: [], current: 0, end: 1000, stopped: false, step: 100 };
    }

    public render() {
        return (
            <React.Fragment>
                <div className='text display-linebreak'>{this.state.text}</div>
                {this.state.subtitles.length === 0 && <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                            <div {...getRootProps()}
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
                    formatLabel={value => `${toSrtTime(value)}`}
                    maxValue={this.state.end}
                    minValue={0}
                    step={1000}
                    value={this.state.current}
                    onChange={value => { this.setState({ current: parseInt(value.toString(), 10) }); }}
                />

                <button className="pause-button"
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
                this.getSubtitlesFromText(fileContentAsString.toString());
                this.runSteps();
            };
            reader.onabort = () => toastr.info('file reading was aborted');
            reader.onerror = () => toastr.info('file reading has failed');

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

    private async wait(delay: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    }

    private getSubtitlesFromText(srtContent: string) {
        const subtitles = parse(srtContent);
        const end = parseInt(subtitles[subtitles.length - 1].end.toString(), 10);

        this.setState({ subtitles, end });
    }
}