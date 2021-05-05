
const ArrayOfObjects = require("./arrayOfObjects.js");
const import = require("../intermediateBundle/baseGenerator.js");
// const baseGenerator = new BaseGenerator();
const bilzaa2d = new Bilzaa2d();
bilzaa2d.shapes.addArc("rect01");
const aoo = new ArrayOfObjects();
bilzaa2d.play();
console.log(aoo);
console.log(bilzaa2d);
// console.log(baseGenerator);