const greetings = require("./greeting.js");
const math = require("./math.js");

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Hola"
greetings.greetingSpanish();

// "Hallo"
greetings.greetingIcelandic();

// "true"
console.log(math.isEven(4));

// "11"
console.log(math.add(5,6));