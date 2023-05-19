function animalType(arg){
    let animalType = arg[0];
    
    switch(animalType){
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
    }
}
animalType(["snake"]);