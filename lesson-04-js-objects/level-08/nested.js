const car = {
  year: 2026,
  make: "Ford",
  model: "F150",
  features: {
    autoIdle: true,
    antiLock: true,
    bluetooth: true,
    diesel: false,
    seats: 5,
    doors: 4,
  },
};

console.log(car.features.doors);

export default car;
