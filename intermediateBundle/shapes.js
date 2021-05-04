import BaseShape from "./baseShape.js";
export default class Shapes {
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
    getBaseShape(name) {
        const baseShape = new BS(name);
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
        const text = new Text2(name);
        this.data.push(text);
        return text;
    }
}
class Arc extends BaseShape {
    constructor(name) {
        super(name);
        this.attributes.add("openingAngle", 0);
        this.attributes.add("closingAngle", 360);
        // this.attributes.add("filled", true); 
    }
    draw(metal) {
        const ans = metal.drawArc(this.attributes);
    } //draw ends
}
class Rectangle extends BaseShape {
    constructor(name) {
        super(name);
        //    this.animations = new RectangleAnimations();
    }
    draw(metal) {
        const ans = metal.drawRectangle(this.attributes);
    } //draw ends
}
class Text extends BaseShape {
    // #hidden:string;
    constructor(name) {
        super(name);
        // this.#hidden = "its hidden";
        this.attributes.add("title", "Text");
        // this.attributes.add("color", "red");  
        this.attributes.add("fontSize", 22);
        this.attributes.add("fontFamily", "Arial");
    }
    draw(metal) {
        const ans = metal.drawText(this.attributes);
    } //draw ends
    widen(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.addCounter("fontSize", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.push(w);
        return w;
    }
    heighten(fromSecond = 1, toSecond = 10, fromWidth = 100, toWidth = 200) {
        const w = this.generators.addCounter("fontSize", fromSecond, toSecond, fromWidth, toWidth, []);
        this.animations.push(w);
        return w;
    }
}
