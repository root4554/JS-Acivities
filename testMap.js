// const map = new Map();

map.set("key", 1);

console.log(map.get("key"));
// expected output: 1

map.set("key", 97);

console.log(map.get("key"));
// expected output: 97

const map = new Map();

map.set("key1", 1);
map.set("key2", 2);

console.log(map1.size);
// expected output: 2

const contacts = new Map();
contacts.set("Jessie", "Female");
contacts.has("Jessie"); // true

const adress = new Map();
adress.set("Aitor", "Calle 1");
adress.delete("Aitor"); // true
adress.delete("Mbape"); // false

const car = new Map();
car.set("brand", { name: "Ford", year: 2018 });
