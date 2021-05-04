const ArrayOfObjects = require('@bilzaa.com/arrayofobjects');
const Vibrate = require('./Vibrate');
const RandomColors = require('./RandomColors');
const Counter = require('./Counter');

module.exports =  class Generators {
data:InstanceType<typeof ArrayOfObjects>;

constructor(){
this.data = new ArrayOfObjects();    
}

addCounter(
    attributeToAnimateName:string,
    fromSecond:number,
    toSecond:number,
    from:number,
    to:number,
    readOnlyElementAttrNames=[]
    )
{
if(fromSecond > toSecond){throw new Error("From second can not be bigger than to second.");
}        
    const aniData = {
        attributeToAnimateName:attributeToAnimateName,
        fromSecond:fromSecond,
        toSecond:toSecond,
        readOnlyElementAttrNames:readOnlyElementAttrNames
    };
    const argsForAlgo = { from: from, to:to};
const a = new Counter(aniData,argsForAlgo);        
this.data.add(a);
return a;
}
addVibrate(
    attributeToAnimateName:string,
    fromSecond:number,
    toSecond:number,
    timeGap:number,
    deviation:number,
    readOnlyElementAttrNames=[]
    ){
    const aniData = {
        attributeToAnimateName:attributeToAnimateName,
        fromSecond:fromSecond,
        toSecond:toSecond,
        readOnlyElementAttrNames:readOnlyElementAttrNames
    };
    const argsForAlgo = { timeGap: timeGap, deviation:deviation};
const a = new Vibrate(aniData,argsForAlgo);        
this.data.add(a);
return a;
}
addRandomColors(
    attributeToAnimateName:string,
    fromSecond:number,
    toSecond:number,
    readOnlyElementAttrNames=[]
    ){
        const aniData = {
        attributeToAnimateName:attributeToAnimateName,
        fromSecond:fromSecond,
        toSecond:toSecond,
        readOnlyElementAttrNames:readOnlyElementAttrNames
    };
const a = new RandomColors(aniData,{});
this.data.add(a);
return a;
}
//////////////////////////////////////////////////

}