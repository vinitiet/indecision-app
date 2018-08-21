
const add = (a,b) => {
  return a + b;
};

console.log(add(55,345, 1001));

const user = {
  name: 'Vinh-Nghi',
  cities: ['Berlin', 'Munich', 'Aachen'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};


console.log(user.printPlacesLived());


const multiplier = {
  numbers: [1,2,3,4,5,6,7,8,9,10],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy );
  }
};

console.log(multiplier.multiply())
