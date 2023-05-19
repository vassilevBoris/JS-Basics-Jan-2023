function schoolCamp(arg) {
    let season = arg[0];
    let groupType = arg[1];
    let studentsCount = Number(arg[2]);
    let nightCount = Number(arg[3]);

    let priceNightHotel = 0;
    let sportType = "";


    switch (season) {
        case "Winter": 
            if (groupType === "mixed") {
                
                priceNightHotel = studentsCount * 10.00;
            } else {
                priceNightHotel = studentsCount * 9.60;
            } break;
        case "Spring":
            if (groupType === "mixed") {
                priceNightHotel = studentsCount * 9.50;
            } else {
                priceNightHotel = studentsCount * 7.20;
            } break;
        case "Summer":
            if (groupType === "mixed") {
                priceNightHotel = studentsCount * 20;
            } else {
                priceNightHotel = studentsCount * 15;
            } break;
    }

    if (studentsCount >= 10 && studentsCount < 20) {
        priceNightHotel = priceNightHotel * 0.95;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        priceNightHotel = priceNightHotel * 0.85;
    } else if (studentsCount >= 50) {
        priceNightHotel = priceNightHotel * 0.50;
    }
    let nightTotal = priceNightHotel * nightCount;

    switch (groupType) {
        case "mixed":
            if (season === "Winter") {
                sportType = "Ski"
            } else if (season === "Spring") {
                sportType = "Cycling";
            } else if (season === "Summer") {
                sportType = "Swimming";
            } break;
        case "girls":
            if (season === "Winter") {
                sportType = "Gymnastics"
            } else if (season === "Spring") {
                sportType = "Athletics";
            } else if (season === "Summer") {
                sportType = "Volleyball";
            } break;
        case "boys":
            if (season === "Winter") {  
                sportType = "Judo";
            } else if (season === "Spring") {
                sportType = "Tennis";
            } else if (season === "Summer") {
                sportType = "Football";
            } break;
    }
    console.log(`${sportType} ${nightTotal.toFixed(2)} lv.`);


}
// schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
// schoolCamp(["Summer", "boys", "60", "7"]);
// schoolCamp(["Spring", "mixed", "17", "14"]);