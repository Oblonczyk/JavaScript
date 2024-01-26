const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// concat
const a3 = a1.concat(a2, [7, 8, 9, 'Vinycius']); // para concatenar arrays
console.log(a3);

// rest
const b3 = [...a1, 'Vinycius', ...a2]; // para concatenar arrays
console.log(b3)
