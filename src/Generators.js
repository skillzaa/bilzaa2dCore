// import BaseGenerator from "./BaseGenerator.js";
import Counter from "./generators/Counter.js";
import RandomColors from "./generators/RandomColors.js";
import Vibrate from "./generators/Vibrate.js";
export default class Generators {
    constructor() {
        this.data = [];
    }
    addCounter(attributeToAnimateName, fromSecond, toSecond, from, to, readOnlyElementAttrNames = []) {
        if (fromSecond > toSecond) {
            throw new Error("From second can not be bigger than to second.");
        }
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { from: from, to: to };
        const a = new Counter(aniData, argsForAlgo);
        this.data.push(a);
        return a;
    }
    addVibrate(attributeToAnimateName, fromSecond, toSecond, timeGap, deviation, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { timeGap: timeGap, deviation: deviation };
        const a = new Vibrate(aniData, argsForAlgo);
        this.data.push(a);
        return a;
    }
    addRandomColors(attributeToAnimateName, fromSecond, toSecond, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const a = new RandomColors(aniData, {});
        this.data.push(a);
        return a;
    }
}
