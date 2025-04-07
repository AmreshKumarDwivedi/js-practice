//concat array using concat and spread(...) method
const superhero = ['shaktiman','superman','spiderman'];
const new_superhero = ['thor','Iron Man'];

const all_hero = superhero.concat(new_superhero); //concat method
const all_new_hero = [...new_superhero,...superhero]; //Spred Method

console.table([all_hero,all_new_hero]);

const another_array = [1,2,3,4,[5,6],[7,9,8],7,[8,6,4]];
console.log(another_array.flat(Infinity));
console.log(Array.from("Amresh"));
const x = 100;
const y = 200;
const z = 300;
console.log(Array.of(x,y,z))


