const Bilzaa2d = require('../dist/Bilzaa2dCjs');
const bilzaa2d = new Bilzaa2d();

const outer = bilzaa2d.shapes.addArc("outer");
outer.widen(1,5,100,500);
const counterObject = outer.animations[0];

test('check counter animation obj in detail using widen ', () => {
expect(outer.animations.length).toBe(1);//bs
});

test('from second', () => {
expect(counterObject.fromSecond).toBe(1000);//millis
});
test('toSecond', () => {
expect(counterObject.toSecond).toBe(5000);//milli sec
});
test('counterObject.argsForAlgo.from ', () => {
expect(counterObject.argsForAlgo.from).toBe(100);//bs
});
test('counterObject.argsForAlgo.to ', () => {
expect(counterObject.argsForAlgo.to).toBe(500);//bs
});

