
import BaseShape from "./baseShape.js";

export default class Shapes {
private shapesData:{};
    data:typeof BS[];
   
constructor() {
        this.data = [];
this.shapesData = {};
}

// addShape(shapeDataName="quad"):Shape {
//        const shape = new Shape(this.shapesData[shapeDataName]);
//         this.data.push(shape);
//         return shape;
//     }
/** we need this methos so that we can piece together the Base shape */
private getBaseShape(name) {
    const baseShape = new BS(name);
    this.data.push(baseShape);
    return baseShape;
}
addArc(name):typeof  Arc {
    const arc = new Arc(name);
    this.data.push(arc);
    return arc;
}
addRectangle(name):typeof Rectangle {
    const rec = new Rectangle(name);
    this.data.push(rec);
    return rec;
}
addText(name):Text {
    const text = new Text2(name);
    this.data.push(text);
    return text;
}
   
   
}
