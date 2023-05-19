function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let finRes = 0.0;
    let price = 0.0;

    if (town === "Sofia") {
         switch (product) {
            case 'coffee': price = 0.5; break;
            case 'water': price = 0.8; break;
            case 'beer': price = 1.2; break;
            case 'sweets': price = 1.45; break;
            case 'peanuts': price = 1.6; break;
            }
    } else if (town === 'Plovdiv') {
        switch (product) {
            case 'coffee': price = 0.4; break;
            case 'water': price = 0.7; break;
            case 'beer': price = 1.15; break;
            case 'sweets': price = 1.30; break;
            case 'peanuts': price = 1.5; break;
        }   
    }
    finRes = price * quantity;
        console.log(finRes);
} 
smallShop(["beer", "Sofia", "5"]);