--> Javascript :- It is a client side scripting language which is used to apply some dynamic features in our web page like some animations , event handling , validations etc.
  -> With the help of Javascript we can perform run time dom manupulation.
  -> Javascript is known as ECMAScript (ES)
  -> ES 5 (Vanilla Javascript (old Javascript))
  -> ES6 :- Javascript introduced some new features
     -> Normal Javascript (ES 5)
        -> variables , operators , comditions , loop , array , functions
        --> Event Handling , DOM manupulation , Validations , Intervales (setInterval , setTimeout)
        -> Object :- we can store data in the form of key value pair.(properties and method)
            -> Object literal
              var obj={
                 fname:'sumit',
                 lname:'joshi',
             fullname:function(){
                  return fname+" "+lname
             }
              }
              console.log(obj.fname);// sumit
            console.log(obj.fullname());//sumit joshi
        -> ES 6 (ECMAScript 2015/16)
          -> let keyword(blocked scope) :- we can define variables within a scope.
            eg:
              for(i=0; i<=5; i++){
                 console.log(i)
              }
              console.log(i)
              if(){
                let i=10;//local variable
              }
              const x=10;
              const x=20;//cant be redeclare
            -> Const keyword :- We can define constant with const keyword. readonly value
               const CONSTANTNAME=value;
                eg:
               const API_URL="path"
            -> Arrow function (=>) :- code is sort and concise.
              eg:
               let add=(a,b)=> (a+b);//one line expression
               // multiple line
               let mydata=(res)=>{
                  //logic
                  return data;
               }
            -> Template Literal :- within a backtick symbol(``) we can render string as well as variables.
              eg:
                let a=10;
                let b=20;
                let sum=a+b;
                console.log("The sum of "+a+" and "+b+" is "+sum);//old
                //template literal
                console.log(`The sum of ${a} and ${b} is ${sum}`)
            -> let , const , arrow , template literal
            -> Spread Operator and Rest Parameter
              -> Spread Operator (...) :- It is used to spread or copy array or object into other array or object.
                eg:
                  let arr=[2,3,4,5,6];
                  let newArr=[...arr,8,9];// 2 3 4 5 6 8 9

                  let obj={name:'anuj',age:23}
                  let newObj={...obj,name:'amit",city:'delhi'}
                    {name:'amit',age:23,city:'delhi'}
                -> Rest Parameter(...) :- we can pass n number of arguments in a function.Limitation is that rest parameter is the last formal parameter of the function.
                  eg:
                 function myAdd(...args)
                 {
                    let sum=0;
                    args.forEach(val=> sum+=val);
                    return sum;
                 }
                  console.log(myAdd(23,45))
                  console.log(myAdd(23,45,6))
                  console.log(myAdd(23,45,3,4))
            -> Es 6 support some oops features
               -> class and object
                 class Car{
             constructor(){
                 this.speed=50;
             }
             acc(){
                 this.speed+=70;
             }
             checkSpeed(){
                console.log(`The speed is ${this.speed}`)
             }
          }
          const obj=new Car();
          obj.checkSpeed();
          obj.acc();
          obj.checkSpeed();
          -> Getters and Setters :- define the getters and setters for a class using get and set keyword.
           class Person{
             constructor(name){
                this._name=name;
             }
             get name(){
                return this._name;
             }
             set name(new_name){
                this._name=new_name;
             }
          }
          const obj=new Person("Sumit Joshi");
          console.log(obj.name);//getter
          obj.name="amit";//setter
          console.log(obj.name);//getter
        -> static methods and properties :- are called with the class name not from the object of a class
        -> Inheritance :- reusability
             extends and super keyword is used for Inheritance.
            -> spread
            -> rest
            -> class and Object
            -> getter setter
            -> Inheritance
        -> Destructuring :- It allows us to destructure an array or object into individual variables.
           -> Array Destructuring
               let arr=["anuj","anil","sunil"];
               let [a,b,c]=arr;
                 a// anuj
                 b// anil
                 c//sunil
           -> Object Destructuring
             let obj={fname:'anuj', lname:'singh'}
             let {fname,lname}=obj;
              fname// anuj
              lname// singh
        -> Modules : How we export variables, functions and classes from a module and reuse them in other modules
            import and export keywords are used
            let API="http://xyz.com/products";
let add=(a,b)=>{
    return (a+b);
}
class Neosoft{
   xyz(){
    return "sumit";
   }
}
export {API,add,Neosoft}

  -> to use a module
 <!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <script type="module">
        import {API,add} from './mymodule.js';
        console.log(API)
        console.log(add(2,3))
    </script>
</head>
<body>
     <h2> Module Example</h2>
</body>
</html>

--> Important
  Callback
  Promises
  Async Await

-> Typescript

         Task
    Create a registration page with proper validation

    Name : textbox  (Only alphabet allow)
    Email :- textbox (Valid email)
    Password :-   min 8 max 20
    Confirm Password (match with password)
    Gender : Male  Female (required)
    Hobbies : cricket  tt   football (required)
    Remarks : textarea (max 20 characters)
    City :  DropDown
        Submit

        *** Error messages inline of every field with red color

