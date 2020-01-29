const person =
  //: { name: string; age: number } //If I put generic type in this object, typescript become strict and require me to add more information about whether the keys and properties are exist or not.
  // So, to fix this problem, add {} which means it is the type of object. Then in the {}, I can determine each type of keys. but if there is previously determined type, intentionally add types can be ineffecient.
  {
    name: "max",
    age: 30,
    hobbies: ["sports", "cooking"] //shows string[]
  };

for (const things of person.hobbies) {
  console.log(things.toUpperCase()); // already typescript knows things are string. So object.toUpperCase() could be run.
  //console.log(things.map()); // it makes an error because .map() can be run in accordance an array not strings.
}

/*
1.
let favoriteActivities: string[];
favoriteActivities ='sports' makes an error because it is string. to fix it, I should write ['sports']

2. let favoritesActivities: string[];
favoriteActivities = ['sports',1]; makes an error because types are mixed. to fix it, I could write "let favoriteActivities : any[]"  but it decrease the benefits of typescript so not recommendable.
*/

//tuple
const person2: { role: [number, string] } = {
  //tuple is the thing that exist in typescript distinctively compared to vanilla javascript. By setting the exact arry properties'type, I can restrict any kind of variables.
  role: [2, "author"] //in this case, role is detected as "string or number"
};

//person2.role[1] = 10; //therefore, it makes an error because the second element should be string.
//person2.role.push("admin"); unfortunately, it works though I declare that role should have only two elements. It it exceptional. but,
//person2.role = [0,'test','test2'] makes an error because the whole number of elemnets is three. If it type ->person2.role = [0, "test"]; then, overlap the previous one.
console.log(person2);

//Enum = it is life the extension of type literal. I can declare specific cumtomized type in typescript by using "type" For exmaple,
//type codeName = 'a' |'b'| 'c'
//const personA : codeName = 'a';  -> it means "const personA" should be 'a' or 'b' or 'c' according to the type codeName I declared previously.
// but What if I forget the inplicit meaning of 'a','b','c'?
// For this inconvenience, I could add details with Enum in a short and effective codes.

enum codeName {
  anderson = "a",
  brunel = "b",
  corlin = "c"
}
const whoIsIt: codeName = codeName.anderson;
console.log(whoIsIt);
//it is similar to object like

const codeName2 = {
  anderson: "a",
  brunel: "b",
  corlin: "c"
};
let anderson = codeName2.anderson;
console.log(anderson);
anderson = "A";
console.log(anderson);
//But, although object can change the valuse that it have, enum cannot change them because they are read-only properties.
// In addition, enum only allow "string | number" properties.

enum Identify {
  No,
  Yes
}

function respond(recipient: string, response: Identify) {
  console.log(recipient, response);
}

respond("anderson", Identify.Yes);
//As I can see, if i did not assign any specific values, enum autometically assigns "number values" which is start from 0 in the first key.
