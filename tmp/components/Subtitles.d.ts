import * as React from 'react';
import { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { subTitleType } from 'subtitle';
import '../../styles/sample.css';
interface ISubtitlesState {
    text: string;
    subtitles: subTitleType[];
    start: number | Range;
    end: number;
}
export declare class Subtitles extends React.Component<{}, ISubtitlesState> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
