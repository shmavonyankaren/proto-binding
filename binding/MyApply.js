function myApply(func, obj, arr) {
    let object = {
        ...obj,
        fun: func
    };
    return object.fun(...arr);
}

function foo(text1, text2) {
    return text1 + "My name is " + this.name + text2 + this.age + " years old";
}

const obj = {
    name: "Karen",
    age: 20,
}

alert(myApply(foo, obj, ["Hello, ", " I am "]));