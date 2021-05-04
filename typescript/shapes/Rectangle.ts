class Rectangle extends BaseShape{
  animations:RectangleAnimations;
  constructor(name) {
    super(name);
    
//    this.animations = new RectangleAnimations();
  }
draw(metal) {
  const ans = metal.drawRectangle(this.attributes);
} //draw ends
   
  
 
  //////////////////////////classsss-----------------
}