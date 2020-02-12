// Question 1
const heroes = [
      { name: 'Spider-Man' },
      { name: 'Thor' },
      { name: 'Black Panther' },
      { name: 'Captain Marvel' },
      { name: 'Silver Surfer' }
  ];

let heroObj = heroes.map(function(obj, index) {
  let newObj = {};
  newObj.id = index;
  newObj.hero = obj.name;

  return newObj;
});

console.log(
    "Question 1\n\n",
    heroObj,
    "\n\n---------------------------------------------------------\n"
);

const manufacturer = 'nintendo';
const consoles = [
    { item: 'Sony PS4 Pro', price: 399.99 },
    { item: 'Microsoft Xbox One X', price: 499.99 },
    { item: 'Nintendo Switch', price: 299.99 },
    { item: 'Sony PS2 Console', price: 299.99 },
    { item: 'Nintendo 64', price: 199.999 }
];

function containsNintendo(obj, manu) {
    let nintendoArray = [];

    for (let i = 0; i < obj.length; i++) {
        if (obj[i].item.toLowerCase().includes(manu)) {
            nintendoArray.push(obj[i]);
        }
    }

    return nintendoArray;
}

console.log(
    "Question 2\n\n",
    containsNintendo(consoles, manufacturer),
    "\n\n---------------------------------------------------------\n"
);

// Question 3
const initialValue = 0;
const marvel = [
    { name: 'Spider-Man', hero: true },
    { name: 'Thor', hero: true },
    { name: 'Thanos', hero: false },
    { name: 'Black Panther', hero: true },
    { name: 'Loki', hero: false },
    { name: 'Captain Marvel', hero: true },
    { name: 'Silver Surfer', hero: true },
    { name: 'Magneto', hero: false },
    { name: 'Venom', hero: false }
];

let characterCount = marvel.reduce(function(count, obj) {
    if (!obj.hero) {
        count = (count + 1 || 1);
    }

    return count;
}, initialValue);

console.log(
    "Question 3\n\n",
    `Total Villains Count: ${characterCount}`,
    "\n\n---------------------------------------------------------\n"
);