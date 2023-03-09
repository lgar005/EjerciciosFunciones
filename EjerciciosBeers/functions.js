const listBeer=beers;
const idFilas=document.getElementById("filas");

function beersNotExceedEthylLevel(beers, alcoholValue){
    let validBeers=[];
    beers.forEach(element => {
        if(element.abv<alcoholValue){
            validBeers.push({name: element.name,
                        abv: element.abv,
                        ibu: element.ibu});      
        }
    });
    return validBeers;
}
console.log("1___________________");
let retul= beersNotExceedEthylLevel(listBeer, 5);
console.log(retul);

//2
function tenMostAlcoholicBeers(beers){
    beers.sort((x,y)=>y.abv-x.abv);
    let validBeers= beers.slice(0,10);
    return validBeers;
}
console.log("2___________________");
let teenMost=tenMostAlcoholicBeers(listBeer);
console.log(teenMost);

//3
function tenLessAlcoholicBeers(beers){
    let beersFil=beers.filter(beer =>beer.ibu!=null);
    beersFil.sort((x,y)=>x.ibu-y.ibu);
    let validBeers= beersFil.slice(0,10);
    return validBeers;
}
console.log("3___________________");
let teenLess=tenLessAlcoholicBeers(listBeer);
console.log(teenLess);

//4
function sortByPropertyBoolean(beers, propierty, booleanValue){
    let validBeers;
    let beersFil=beers.filter(beer => beer[propierty]!=null);
    if(booleanValue){
        beersFil.sort((x,y)=>x[propierty]-y[propierty]);
        validBeers= beersFil.slice(0,10);
        return validBeers;
    }else{
        beersFil.sort((x,y)=>y[propierty]-x[propierty]);
        validBeers= beersFil.slice(0,10);
        return validBeers;
    }
}
console.log("4___________________");
let attenuation_levelTrue=sortByPropertyBoolean(listBeer,"attenuation_level",true);
console.log(attenuation_levelTrue)
let attenuation_levelFalse=sortByPropertyBoolean(listBeer,"attenuation_level",false);
console.log(attenuation_levelFalse)

//5
function tableInFO(beers, index){
    const filaInfo= beers.reduce((acc, beer, index)=>  acc += `<tr>
                                                            <th scope="row">${index}</th>
                                                            <td>${beer.name}</td>
                                                            <td>${beer.abv}</td>
                                                            <td>${beer.ibu ?  beer.ibu: "No IBU"} </td>
                                                            </tr>`
                                                    ,'');
                                                        idFilas.innerHTML+=filaInfo;
}

tableInFO(beers, 0);