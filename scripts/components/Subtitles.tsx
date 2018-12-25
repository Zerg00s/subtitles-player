import * as React from 'react';
import * as ReactDom from 'react-dom'
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
        this.state = { text: "...", subtitles: [], current: 0, end: 60 * 60 * 1000, stopped: false, step: 100 };
        this.GetSubtitles("carol.srt");
    }

    public componentDidMount() {
        this.runSteps();
    }

    public render() {
        return (
            <React.Fragment>
                <div className='text display-linebreak'>{this.state.text}</div>

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
                    onClick={value => this.setState({ stopped: !this.state.stopped })} >{this.state.stopped ? "Play" : "Pause"}</button>
            </React.Fragment >
        );
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
                if(this.state.current < this.state.end){
                    this.setState({ current: this.state.current + this.state.step });
                }
            }
        }
    }

    private async GetSubtitles(srtFile:string) {
        const data = await fetch(srtFile);
        const content = await data.text();
        const subtitles = parse(content)
        const end = parseInt(subtitles[subtitles.length - 1].end.toString(), 10);

        this.setState({ subtitles, end });
    }
}