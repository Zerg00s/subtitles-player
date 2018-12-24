// Here goes your awesome TypeScript
class Barker {
    // tslint:disable-next-line:no-console
    public bark = () => console.log("bark!!"); 
}

const bark = new Barker();
bark.bark();