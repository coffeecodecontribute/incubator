import React from "react";

function sayHello() {
    alert("Hello, welcome to Pinder");
    return;
}

export const SayHi = () => (
    <input type="submit" value="Say Hello" onclick="alert('Hello')"/>
)