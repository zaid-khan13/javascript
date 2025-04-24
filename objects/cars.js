let Revo = {
  model:"revo",
  rimscolor: "black",
  seats: "thin and uncomfortable",
  interior: "black",
  horsepower: "201",
  suspension: "hard",
  headlights: "h4led",
  airbags: "2",
  climatecontrol: "manual",
  rearglass: "sliding",
  frontgrill: "silver",
  transmission: "auto",
};

console.log(
  Revo.rimscolor,
  Revo.seats,
  Revo.interior,
  Revo.horsepower,
  Revo.suspension,
  Revo.headlights,
  Revo.airbags,
  Revo.climatecontrol,
  Revo.rearglass,
  Revo.frontgrill,
  Revo.transmission
);

let Fortuner = {
  model:"fortuner",
  rimscolor: "black",
  seats: "comfortable",
  interior: "black",
  horsepower: "164",
  suspension: "hard",
  headlights: "h4led",
  airbags: "2",
  climatecontrol: "manual",
  frontgrill: "silver",
  transmission: "auto",
};
console.log(
  Fortuner.rimscolor,
  Fortuner.seats,
  Fortuner.interior,
  Fortuner.horsepower,
  Fortuner.suspension,
  Fortuner.headlights,
  Fortuner.airbags,
  Fortuner.climatecontrol,
  Fortuner.frontgrill,
  Fortuner.transmission
);

let cars = [Revo,Fortuner]

  for (let i = 0; i < cars.length; i++) {
    console.log(`${cars[i].model} ${cars[i] .horsepower} horsepower`);
}
