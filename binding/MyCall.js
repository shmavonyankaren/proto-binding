function myCall(func, obj, ...arg) {
    let object = {
        ...obj,
        fun: func
    };
    return object.fun(...arg);
}

function foo(text1, text2) {
    return text1 + "My name is " + this.name + text2 + this.age + " years old";
}

const obj = {
    name: "Karen",
    age: 20,
}

alert(myCall(foo, obj, "Hello, ", " I am "));