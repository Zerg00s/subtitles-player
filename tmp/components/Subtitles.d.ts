import * as React from 'react';
import 'react-input-range/lib/css/index.css';
import { subTitleType } from 'subtitle';
import '../../styles/sample.css';
interface ISubtitlesState {
    text: string;
    subtitles: subTitleType[];
    current: number;
    end: number;
    stopped: boolean;
    step: number;
}
export declare class Subtitles extends React.Component<{}, ISubtitlesState> {
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
    private step;
    private wait;
    private runSteps;
    private GetSubtitles;
}
export {};
