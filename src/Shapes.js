import BaseShape from "./BaseShape.js";
import Arc from "./shapes/Arc.js";
import Text from "./shapes/Text.js";
import Rectangle from "./shapes/Rectangle.js";
export default class Shapes {
    constructor() {
        this.data = [];
    }
    // addShape(shapeDataName="quad"):Shape {
    //        const shape = new Shape(this.shapesData[shapeDataName]);
    //         this.data.push(shape);
    //         return shape;
    //     }
    /** we need this methos so that we can piece together the Base shape */
    getBaseShape(name) {
        const baseShape = new BaseShape(name);
        this.data.push(baseShape);
        return baseShape;
    }
    addArc(name) {
        const arc = new Arc(name);
        this.data.push(arc);
        return arc;
    }
    addRectangle(name) {
        const rec = new Rectangle(name);
        this.data.push(rec);
        return rec;
    }
    addText(name) {
        const text = new Text(name);
        this.data.push(text);
        return text;
    }
}
