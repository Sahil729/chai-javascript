
const marvels_heros = ["thor", "Ironman", "spiderman"]
const dc1_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros)

 console.log(marvels_heros);
 console.log(marvels_heros[3][1]);

 const allHeros = marvel_heros.concat(dc1_heros)
 console.log(allHeros);

const all_new_hero = [...marvel_heros, ...dc_heros]

 console.log(all_new_hero);

const anothers_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arrays = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score_0 = 100
let score_1 = 200
let score_2 = 300

console.log(Array.of(score_0, score_1, score_2));

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score0 = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score0, score1, score2));
