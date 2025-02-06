// JSON string
const jsonString = '{"name": "John", "age": 30, "hobbies": ["reading", "gaming", "drawing"]}';
// Parse JSON string into a JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); 
console.log(jsonObject.age); 
console.log(jsonObject.hobbies);
// Convert JavaScript object back to JSON string
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); 