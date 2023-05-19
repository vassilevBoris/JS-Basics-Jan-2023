function cinema(arg) {
    let typProjection = arg[0];
    let rows = Number(arg[1]);
    let colum = Number(arg[2]);

    let places = rows * colum;
    let totalPrice = 0;

    if (typProjection === "Premiere") {
        totalPrice = places * 12.00;
    } else if (typProjection === "Normal"){
        totalPrice = places * 7.50;
    } else {
        totalPrice = places * 5.00;
    }
    console.log(`${totalPrice.toFixed(2)} leva`);



    
}
cinema (["Premiere","10","12"])
