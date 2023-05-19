function foodForPets (arg) {
    let days = Number(arg[0]);
    let totalFood = Number(arg[1]);
    let day1Dog = Number(arg[2]);
    let day1Cat = Number(arg[3]);
    let day2Dog = Number(arg[4]);
    let day2Cat = Number(arg[5]);
    let day3Dog = Number(arg[6]);
    let day3Cat = Number(arg[7]);

    let totFoodFirstDay = day1Dog + day1Cat;
    let totFoodSecDay = day2Dog + day2Cat;
    let totFoodThirdDay = day3Dog + day3Cat
    let totalFoodDog = day1Dog + day2Dog + day3Dog;
    let totalFoodCat = day1Cat + day2Cat + day3Cat;
    let eatenFoodTillNow = totalFoodDog + totalFoodCat;
  
    let eatenFoodTillNowInPercent =  (eatenFoodTillNow * 100) / totalFood 
    let totalFoodDogInPercent = (totalFoodDog * 100) / eatenFoodTillNow;
    let totalFoodCatInPercent = (totalFoodCat * 100) / eatenFoodTillNow;
    let day3bonus = totFoodThirdDay * 0.1;

    console.log(`Total eaten biscuits: ${day3bonus}gr.`);
    console.log(`${eatenFoodTillNowInPercent}% of the food has been eaten.`);
    console.log(`${totalFoodDogInPercent}% eaten from the dog.`);
    console.log(`${totalFoodCatInPercent}% eaten from the cat.`);
    
}
foodForPets(["3","1000","300","20","100","30","110","40"]);