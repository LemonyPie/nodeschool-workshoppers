var pets = ['cat', 'dog', 'rat'];

/* pets = pets.map((pet) => {
  return pet + 's';
}) */

for(var i = 0; i < pets.length; i++){
  pets[i] = pets[i] + 's';
}

console.log(pets);