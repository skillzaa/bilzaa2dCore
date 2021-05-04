import ArrayOfObjects from "./arrayOfObjects.js";
import BaseGenerator from "./baseGenerator.js";
f:BaseGenerator;
export default  class Generators {
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
class Counter extends BaseGenerator{
private milliPerPixConst:number;

constructor(aniData,argsForAlgo={}){
    super(aniData,argsForAlgo);
this.milliPerPixConst = this.milliPerPix();    
}

animate(attributeToAnimateData:number,
    currentSecondMilli:number,
    readOnlyElementData:{}={}):number{
//--------------------------------
/**chq if time is valid */
if (this.isTimeValid(currentSecondMilli)===false){
 throw new Error("The current Time is before than the starting time OR after the finish point of the animation");
}
//--------------------------------
       
const timeDifferenceInMilli = this.currentTimeDifferenceInMilli(currentSecondMilli);

const preAns = (timeDifferenceInMilli / this.milliPerPixConst );
let ans = "";

if(this.argsForAlgo.from < this.argsForAlgo.to ){
    ans = (timeDifferenceInMilli / this.milliPerPixConst ) + this.argsForAlgo.from;

}else{
    ans = (timeDifferenceInMilli / this.milliPerPixConst ) - this.argsForAlgo.from;
}
return Math.abs((Number(ans.toFixed(0)))); 
//if (ans < 1){return 1;}else {return ans;}
//--------------------------------
}

milliPerPix(){
    const timeDiff = (this.toSecond - this.fromSecond);
const totalValueDiff = Math.abs((this.argsForAlgo.to - this.argsForAlgo.from));
//consider using Math.ceil here
const ans = Number((timeDiff/totalValueDiff).toFixed(0));  
if (ans < 1){return 1;}else {return ans;}

}

currentTimeDifferenceInMilli(currentSecondMilli:number){
return Math.abs(Number(currentSecondMilli - this.fromSecond));   
}
//-------------------------------------------------------------    

isTimeValid(currentSecondMilli:number){
    if( (currentSecondMilli > this.toSecond)
    || 
    (currentSecondMilli < this.fromSecond)){
        return false;
    }else{
        return true;
    }
}
//-------------------------------------------------------------    
}
//module.exports = Linear;
class RandomColors extends BaseGenerator{
constructor(aniData,argsForAlgo={}){
    super(aniData,argsForAlgo);
    this.state.previous = 0;

}

animate(attributeToAnimateData:string|number|boolean,
    currentSecond:number,
    readOnlyElementData:{}={}):string|number|boolean{

      if (this.state.previous == 0){
        this.state.previous = Date.now();
    }

    if(this.isWaitOver() == true){
      this.state.previous = Date.now();
      return this.returnColor();
    }
  else{
      return attributeToAnimateData;
   }
  
}

//-------------------------------------------------------------    
isWaitOver(){
  const lapsedTime = Math.abs(Date.now() - this.state.previous);
  if(lapsedTime > this.argsForAlgo.timeGap){
      return true;
  }else{
      return false;
  }
}

//-------------------------------------------------------------   
returnColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} 
//-------------------------------------------------------------    
//-------------------------------------------------------------    
//-------------------------------------------------------------    
}
class Vibrate extends BaseGenerator{
constructor(aniData,argsForAlgo={}){
    super(aniData,argsForAlgo);
    this.state.previous = 0;
    //this.state.previous = 0;
}

animate(attributeToAnimateData:string|number|boolean,
    currentSecond:number,
    readOnlyElementData:{}={}):string|number|boolean{
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
if (this.state.previous == 0){
    this.state.previous = Date.now();
}

const timeGap = this.argsForAlgo.timeGap; 
const deviation = this.argsForAlgo.deviation; 

 if(this.isWaitOver() == true){
    this.state.previous = Date.now();
return this.manipulate(attributeToAnimateData);
}
else{
    return attributeToAnimateData;
 }
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
}
//-------------------------------------------------------------    
isWaitOver(){
    const lapsedTime = Math.abs(Date.now() - this.state.previous);
    if(lapsedTime > this.argsForAlgo.timeGap){
        return true;
    }else{
        return false;
    }
}
//-------------------------------------------------------------    
manipulate(incomming){
    const min = incomming - this.argsForAlgo.deviation;
    const max = incomming + this.argsForAlgo.deviation;
    return Math.abs(Math.random() * (max - min+1) + min);
}
//-------------------------------------------------------------    
}