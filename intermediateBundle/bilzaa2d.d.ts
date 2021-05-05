import PlayHead from "./playHead.js";
import Shapes from "./shapes.js";
import Metal from "./metal.js";
export default class Bilzaa2d {
    playHead: PlayHead;
    metal: Metal;
    shapes: Shapes;
    globals: {};
    constructor();
    play(): void;
    gameLoop(): void;
    drawShapes(): void;
}
