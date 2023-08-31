//         1     with call method

function myBind1(func, obj) {
    return function (...arg) {
        return func.call(obj, ...arg)
    }
}

function foo1(text1, text2) {
    return text1 + "My name is " + this.name + text2 + this.age + " years old";
}

const obj1 = {
    name: "Karen",
    age: 20,
}

const func1 = myBind1(foo1, obj1);

console.log(func1("Hello, ", " I am "));

//        2     without  call (with my own)

function myCall(func, obj, ...arg) {
    let object = {
        ...obj,
        fun: func
    };
    return object.fun(...arg);
}

function myBind2(func, obj) {
    return function (...arg) {
        return myCall(func, obj, ...arg)
    }
}

function foo2(text1, text2) {
    return text1 + "My name is " + this.name + text2 + this.age + " years old";
}

const obj2 = {
    name: "Karen",
    age: 20,
}

const func2 = myBind2(foo2, obj2);

console.log(func2("Hello, ", " I am "));