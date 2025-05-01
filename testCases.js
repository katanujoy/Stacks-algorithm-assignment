const HTMLElements = require('./HTMLElements');

// My test cases - tried to cover edge cases!
const tests = [
  { 
    input: "<div><b><p>hello world</p></b></div>",
    expected: "true",
    note: "Perfectly nested tags" 
  },
  { 
    input: "<div><i>hello</i>world</b>",
    expected: "div",
    note: "Closing </b> doesn't match <div>" 
  },
  { 
    input: "<div><div><b></b></div></p>",
    expected: "div",
    note: "Extra </p> at the end" 
  },
  { 
    input: "<p><div></p></div>",
    expected: "p",
    note: "Wrong order of closing tags" 
  }
];

console.log("Running tests...\n");
tests.forEach((test, i) => {
  const result = HTMLElements(test.input);
  const passed = result === test.expected;
  console.log(`Test ${i + 1}: ${passed ? "PASS" : "FAIL"}`);
  console.log(`Input: ${test.input}`);
  console.log(`Expected: ${test.expected}`);
  console.log(`Got: ${result}`);
  console.log(`Note: ${test.note}\n`);
});