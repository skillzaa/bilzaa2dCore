import ArrayOfObjects from "./arrayOfObjects.js";
// import BaseGenerator from "../intermediateBundle/baseGenerator.js";
// const baseGenerator = new BaseGenerator();
import Bilzaa2d from './bilzaa2d.js';

const bilzaa2d = new Bilzaa2d();
bilzaa2d.shapes.addArc("rect01");
const aoo = new ArrayOfObjects();
bilzaa2d.play();
console.log(aoo);
console.log(bilzaa2d);
// console.log(baseGenerator);