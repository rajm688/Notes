let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ];
// let img = countriesInfo.map(({flag})=>flag);
// let name = countriesInfo.map(({name})=>name);
// let population = countriesInfo.map(({region})=>region)
// let capital = countriesInfo.map(({capital})=>capital)
for(let i =0;i<countriesInfo.length; i++){
let maindiv = document.createElement("div")

    let img = countriesInfo[i].flag;
    let name = countriesInfo[i].name;
    let population = countriesInfo[i].population;
    let capital = countriesInfo[i].capital;
    maindiv.innerHTML=`<div>
    <img src=${img} alt="country flag">
    <h5>Name: ${name}</h5>
    <h5>Population: ${population}</h5>
    <h5>capital: ${capital}</h5>
    </div>`
    document.body.append(maindiv)
}

