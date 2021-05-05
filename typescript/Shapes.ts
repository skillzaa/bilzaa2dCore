import BaseShape from "./BaseShape.js";
import Arc from "./shapes/Arc.js";
import Text from "./shapes/Text.js";
import Rectangle from "./shapes/Rectangle.js";

export default class Shapes {
    data:BaseShape[];
   
constructor() {
        this.data = [];
}

// addShape(shapeDataName="quad"):Shape {
//        const shape = new Shape(this.shapesData[shapeDataName]);
//         this.data.push(shape);
//         return shape;
//     }
/** we need this methos so that we can piece together the Base shape */
private getBaseShape(name) {
    const baseShape = new BaseShape(name);
    this.data.push(baseShape);
    return baseShape;
}
addArc(name):Arc {
    const arc = new Arc(name);
    this.data.push(arc);
    return arc;
}
addRectangle(name):Rectangle {
    const rec = new Rectangle(name);
    this.data.push(rec);
    return rec;
}
addText(name):Text {
    const text = new Text(name);
    this.data.push(text);
    return text;
}
   
   
}
