class Print {
  message = "This works";

  show() {
    console.log(this.message);
  }
}

const a = new Print();

const button = document.getElementById("first")!;
button.addEventListener("click", a.show.bind(a)); //In this case, if I just set the code like "a.show", it would return undefined because this in this.message would refer to button(caller).
//To avoid this, I have two options. First, to use bind(). a.show.bind(objectName) = means I would supplant "this" in a.show() with objectName.
//Therefore, ("click",a.show.bind(a)) could become a meaning that "Hey, whenever I clik, execute a.show which would run console.log(a.message)"

//Second option is to use method decorator which allows me to bind "this" with surrounding class.
//Because, the method decorator has descriptor which contains descriptor like configurable,enumerable, value(especially value property has original functions)

//"I would replace old method's descriptor with my new customized one"
function AutoBind(_: any, _2: any, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // It means I want to access the target method's function.
  const adjust: PropertyDescriptor = {
    //adjust would contain properties which exists inside descriptor.
    configurable: true,
    enumerable: false,

    //Additional get() function is added.
    get() {
      const bounding = originalMethod.bind(this); //In this case, "bind.(this)" would refer to whatever object is responsible for triggering this getter method.
      return bounding;
    }
  };
  return adjust; // Now, if I connect this AutoBind decorator to the class Print2, automatically decorator is run and return "adjust". and the "caller" who calls the "getter" inside adjust (or another understanding, the boundary of getter's this) is class Print2,
}

//Then, I put this decorator to the method Print2
class Print2 {
  message = "This works...?";

  @AutoBind
  show() {
    console.log(this.message);
  }
}

const b = new Print2();

const button2 = document.getElementById("second")!;
button2.addEventListener("click", b.show); //Then, It works.
