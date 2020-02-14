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
    "Answer 1\n\n",
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
    "Answer 2\n\n",
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
    "Answer 3\n\n",
    `Total Villains Count: ${characterCount}`,
    "\n\n---------------------------------------------------------\n"
);

// Question 4
const inventory = [
    { item: 'Sony PS4 Pro', price: 399.99, stock: 3 },
    { item: 'Atari', price: 125.0, stock: 0 },
    { item: 'Microsoft Xbox One X', price: 499.99, stock: 1 },
    { item: 'Nintendo Switch', price: 299.99, stock: 4 },
    { item: 'Sony PS2 Console', price: 299.99, stock: 1 },
    { item: 'Nintendo 64', price: 199.999, stock: 2 },
    { item: 'Sega Genesis', price: 104.0, stock: 0 }
];

function iterateInventory(inv, evalInv) {
    inv.forEach(item => evalInv(item));

    return inv;
}

function evaluateInventory(item) {
    if (item.stock >= 3) {
        item.status = "OK";
    } else if (item.stock === 0) {
        item.status = "OUT OF STOCK"
    } else {
        item.status = "LOW"
    }
}

console.log(
    "Answer 4\n\n",
    iterateInventory(inventory, evaluateInventory),
    "\n\n---------------------------------------------------------\n"
);


// Question 5
const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];



// EXPECTED OUTPUT (array of objects):
// [
//     {
//         item: 'PS4 Pro',
//         stock: 3,
//         original: 399.99,
//         total: 1199.97,
//         sale: 399.99
//     },
//     {
//         item: 'Xbox One X',
//         stock: 1,
//         original: 499.99,
//         discount: 0.1,
//         total: 449.99100000000004,
//         sale: 449.99100000000004
//     },
//     {
//         item: 'Nintendo Switch',
//         stock: 4,
//         original: 299.99,
//         total: 1199.96,
//         sale: 299.99
//     },
//     {
//         item: 'PS2 Console',
//         stock: 1,
//         original: 299.99,
//         discount: 0.8,
//         total: 59.99799999999999,
//         sale: 59.99799999999999
//     },
//     {
//         item: 'Nintendo 64',
//         stock: 2,
//         original: 199.99,
//         discount: 0.65,
//         total: 139.993,
//         sale: 69.9965
//     }
// ]