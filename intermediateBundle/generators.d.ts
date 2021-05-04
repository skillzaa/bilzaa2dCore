import ArrayOfObjects from "./arrayOfObjects.js";
import BaseGenerator from "./baseGenerator.js";
export default class Generators {
    data: InstanceType<typeof ArrayOfObjects>;
    constructor();
    addCounter(attributeToAnimateName: string, fromSecond: number, toSecond: number, from: number, to: number, readOnlyElementAttrNames?: never[]): Counter;
    addVibrate(attributeToAnimateName: string, fromSecond: number, toSecond: number, timeGap: number, deviation: number, readOnlyElementAttrNames?: never[]): Vibrate;
    addRandomColors(attributeToAnimateName: string, fromSecond: number, toSecond: number, readOnlyElementAttrNames?: never[]): RandomColors;
}
declare class Counter extends BaseGenerator {
    private milliPerPixConst;
    constructor(aniData: any, argsForAlgo?: {});
    animate(attributeToAnimateData: number, currentSecondMilli: number, readOnlyElementData?: {}): number;
    milliPerPix(): number;
    currentTimeDifferenceInMilli(currentSecondMilli: number): number;
    isTimeValid(currentSecondMilli: number): boolean;
}
declare class RandomColors extends BaseGenerator {
    constructor(aniData: any, argsForAlgo?: {});
    animate(attributeToAnimateData: string | number | boolean, currentSecond: number, readOnlyElementData?: {}): string | number | boolean;
    isWaitOver(): boolean;
    returnColor(): string;
}
declare class Vibrate extends BaseGenerator {
    constructor(aniData: any, argsForAlgo?: {});
    animate(attributeToAnimateData: string | number | boolean, currentSecond: number, readOnlyElementData?: {}): string | number | boolean;
    isWaitOver(): boolean;
    manipulate(incomming: any): number;
}
export {};
