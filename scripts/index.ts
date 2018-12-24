// Here goes your awesome TypeScript
import * as Subtitle from 'subtitle'
import { parse, resync, stringify, toSrtTime, toVttTime } from 'subtitle'
// https://github.com/gsantiago/subtitle.js#readme

async function Main() {
    const data = await fetch("carol.srt");
    const content = await data.text();
    const subtitles = parse(content)
    let i = 0;
    await wait(parseInt(subtitles[0].start.toString(), 10));
    while (true) {
        const subtitle = subtitles[i];
        const nextSubtitle = subtitles[i + 1];
        // tslint:disable-next-line:no-console
        console.log(subtitle.text);

        const end: number = parseInt(subtitle.end.toString(), 10);
        const start: number = parseInt(subtitle.start.toString(), 10);
        const duration = end - start;
        await wait(duration);
        // tslint:disable-next-line:no-console
        console.clear();

        const nextStart: number = parseInt(nextSubtitle.start.toString(), 10);
        const duration2 = nextStart - end;
        await wait(duration2);

        i++;
    }
}

Main();

async function wait(delay: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}