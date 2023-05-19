function carToGo (arg) {
    let budget = Number(arg[0]);
    let season = arg[1];
    let type = "";
    let price = 0;

    if(budget <= 100){
        console.log("Economy class");
        switch(season){
            case "Summer": type = "Cabrio";
                        price = budget * 0.35; break;
            case "Winter": type = "Jeep";
                        price = budget * 0.65; break;
        }
    } else if (budget <= 500){
       console.log("Compact class");
       switch(season){
        case "Summer": type = "Cabrio";
                    price = budget * 0.45; break;
        case "Winter": type = "Jeep";
                    price = budget * 0.80; break;
        } 
    } else if (budget > 500){
        console.log("Luxury class");
         type = "Jeep"
         price = budget * 0.9;
        }
    
  console.log(`${type} - ${price.toFixed(2)}`);
    


}
// carToGo(["450" , "Summer"])
// carToGo(["450" , "Winter"])
// carToGo(["1010" , "Summer"])
// carToGo(["99.99" , "Summer"])
// carToGo(["1010" , "Winter"])
carToGo(["70.50" , "Winter"])