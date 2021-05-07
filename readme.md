# Bilzaa2d

##### Bilzaa 2d is a simpe Javascript animation library using which you can create shapes and animations programically just by using simple code.
---
##### Keep in mind that Bilzaa2d is in developmental stage and has not yet been released. It has been made available for testing purpose only.
---
# How Bilzaa2d Works
- We create animations by 1::creating shapes and 2:: changing the attributes of these shapes and finally 3:: Attaching animations to these shapes.
- So creating of shapes ;chaging their attributes and then attaching animations to these shapes is the name of the game.
# Getting Started ::
    - 1:: Download Bilzaa2d from npm using "npm install bilzaa2d"
    -   2:: Load Bilzaa2d library and link it to you index.js
    - 3::  Add a canvas element to your webpage. The name of the canvas element  should preferably be "bilzaaCanvas". You can name it something else  as well but that name need to be passed on to the library while  initializing.
    - 4:: Write your own script to create animations
---
# Basics
#### Creating Shapes
We create shapes using *bilzaa2d.shapes* object.  At the moment we just have 3 shapes. We can add Text, Rectangle and Arc. 
```
const arc01 = bilzaa2d.shapes.AddShape("arc01");
const rect01 = bilzaa2d.shapes.AddRectangle("rect01");
const txt01 = bilzaa2d.shapes.AddText("txt01");
```
Each shape needs to have a unique name ie a shape name once used can not be used again. Every time we create a shape it is added into the library and at the same time we are returned a reference of that object which we can use to chage attributes. 
All the objects saved in the library can be directly accessed from *bilzaa2d.shapes.data*.
#### Setting Attributes
After a shape has been created we can change its attributes. Each object has 29 basic attributes which may change in future. In addition to those there are some further attributes specific for each shape.
We change attributes using setAttr( ) and getAttr( ).
Here is the list of all basic attributes:
1. "name" : The name of the shape.
2. "x" : The x location of the shape.
3. "y" : The y location of the shape.
4. "width" : The width of the shape.
5. "height" : The height of the shape.
6. "rotateClockwise" : rotations direction of shape.
7. "currentRotateAngle" : The angle at which the shape is currently rotated.
8. "color" : Color of the shape.
9 "opacity" : The opacity of the shape.
10 "lineWidth" :  The line Width of the shape.
,11 "strokeStyle" : The color of the border.
  12 "shadowColor" : The shadow color of the shape.
  13 "shadowBlur" :  The shadow blur of the shape.
  14 "shadowOffsetX" : The shadow shadowOffsetX of the shape.
  15 "shadowOffsetY" : The shadow shadowOffsetY of the shape.
  16 "filled": if the shape is filled or is just an outline.
  17 "lineDashSize" : specify line dashes.
  18 "lineDashGap" : specify gap dashes.
  19 "drawBoundingRectangle" : The bounding rectangle around the shape.    
  20 "boundingRectangleColor" : The color of bounding rectangle around the shape.     
  21 "boundingRectanglePadding" : The padding of bounding rectangle around the shape.     

##### **Keep in mind**: More attributes may be added some of these attributes may be changed or named differently. Most of these attributes are not yet implemented in code.

# Adding Animations to the Shapes
After a shape has been created we can add animation to it. There are 7 animation methods currently being implemented and almost all of them take the same argumets. 
Almost all animation methods take the following arguments
- fromSecond : The starting second. we can use fractions like 2.3.
-toSecond : The ending second.
-from : the start value.
-to : The ending value.
Lets look at each animation method
```
rec1.widen(1,2,0,200);
rect01.heighten(1,2,0,120);
rect01.moveHorizontal(1,3,100,200);
rect01.moveVertical,200);
arc.moveDiagonal(3,6,200,600,200,600);
rect01.scale(1,2,0,200,0,200);
arc.rotate(6,8,0,180);
```
......code examples coming soon.