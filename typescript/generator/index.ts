const log = console.log;
const Generator = require("../src/Generators");
const generator = new Generator();

generator.addCounter({
            attributeToAnimateName:"x",
            fromSecond:10,   toSecond:1,
            readOnlyElementAttrNames:[]
        },
        { from:100, to:10} 
        );
