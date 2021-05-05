const Generators  = require("../../intermediateReqBundle/generators");
const generators = new Generators();

const l = generators.addCounter("x",1,100,0,1000);
test('expect(typeof l).toBe(object)', () => {
    expect(typeof l).toBe('object');
  });

test('expect(typeof l).toBe(object)', () => {
    const v = generators.addVibrate("x",1,100,100,10);
    expect(typeof v).toBe('object');
  });

test('expect(typeof l).toBe(object)', () => {
    const r = generators.addRandomColors("x",1,100);
    expect(typeof r).toBe('object');
  });

