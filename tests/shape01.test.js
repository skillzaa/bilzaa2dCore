const Bilzaa2d = require('../dist/Bilzaa2dCjs');
const bilzaa2d = new Bilzaa2d();

const outer = bilzaa2d.shapes.addArc("outer");

test('shapes--1', () => {
    const arc01 = bilzaa2d.shapes.addArc("arc01");
    expect(bilzaa2d.shapes.data.length).toBe(2);//incl outer attribs
});
test('shapes--2', () => {
    const arc02 = bilzaa2d.shapes.addArc("arc02");
    expect(bilzaa2d.shapes.data.length).toBe(3);//base shape has 20 attribs
});
test('shapes--3-animations =0', () => {
    const arc03 = bilzaa2d.shapes.addArc("arc03");
    expect(arc03.animations.length).toBe(0);//base shape has 20 attribs
});
test('shapes--4-arc04.generators=object', () => {
    const arc04 = bilzaa2d.shapes.addArc("arc04");
// expect(bilzaa2d.shapes.data.length).toBe(4);//bs
expect(typeof arc04.generators).toBe("object");//bs
});

test('shapes-arc05.animation=1', () => {
    const arc05 = bilzaa2d.shapes.addArc("arc05");
    arc05.moveHorizontal();
// expect(bilzaa2d.shapes.data.length).toBe(4);//bs
expect(arc05.animations.length).toBe(1);//bs
});

test('shapes-arc06.animation=7', () => {
    outer.moveHorizontal();
    outer.moveVerticle();
    outer.moveDiagonal(); // 2 animations
    outer.widen();
    outer.heighten();
    outer.scale(); //2 animaitions
    outer.rotate();
// expect(bilzaa2d.shapes.data.length).toBe(4);//bs
expect(outer.animations.length).toBe(9);//bs
});

