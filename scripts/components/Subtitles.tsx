import * as React from 'react';
import * as ReactDom from 'react-dom'
import InputRange, { InputRangeClassNames, InputRangeProps, Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { parse, resync, stringify, subTitleType, toSrtTime, toVttTime } from 'subtitle'
import '../../styles/sample.css';
// https://github.com/gsantiago/subtitle.js#readme

async function Main(state: React.Component<{}, ISubtitlesState, any>) {

    const data = await fetch("carol.srt");
    const content = await data.text();
    const subtitles = parse(content)
    state.setState({ subtitles });

    const newSubtitles = subtitles.filter(sub => sub.start > 15 * 60 * 1000)
    state.setState({ text: newSubtitles[0].text });

    // let i = 0;
    // await wait(parseInt(subtitles[0].start.toString(), 10));
    // while (true) {
    //     const subtitle = subtitles[i];
    //     const nextSubtitle = subtitles[i + 1];
    //     // tslint:disable-next-line:no-console
    //     console.log(subtitle.text);
    //     state.setState({ text: subtitle.text });

    //     const end: number = parseInt(subtitle.end.toString(), 10);
    //     const start: number = parseInt(subtitle.start.toString(), 10);
    //     const duration = end - start;
    //     await wait(duration);
    //     // tslint:disable-next-line:no-console
    //     console.clear();
    //     state.setState({ text: "" });

    //     const nextStart: number = parseInt(nextSubtitle.start.toString(), 10);
    //     const duration2 = nextStart - end;
    //     await wait(duration2);
    //     i++;
    // }
}

async function wait(delay: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

interface ISubtitlesState {
    text: string,
    subtitles: subTitleType[],
    start: number | Range,
    end: number
}

export class Subtitles extends React.Component<{}, ISubtitlesState> {
    constructor(props) {
        super(props);
        this.state = { text: "...", subtitles: [], start: 0, end: 60 * 60 * 1000 };

        Main(this);
    }

    public render() {
        return (
            <React.Fragment>
                <h1 className='text'>{this.state.text}</h1>

                <InputRange
                    // tslint:disable-next-line:jsx-no-lambda
                    formatLabel={value => `${value} timespan`}
                    maxValue={this.state.end}
                    minValue={0}
                    step={1000}
                    value={this.state.start}
                    // tslint:disable-next-line:jsx-no-lambda
                    onChange={value => { this.setState({ start: value }); }}
                />
            </React.Fragment>
        );
    }
}
