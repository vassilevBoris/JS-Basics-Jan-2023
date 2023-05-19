function footballTournament(arg){
    let index = 0;
    let nameTeam = (arg[index]);
    index++;
    let gamesPlayed = Number(arg[index]);
    index++;
    let n = (arg[index]);
    // index++;

    let tempPoints = 0;
    let winnGames = 0;
    let remiGames = 0;
    let lostGames = 0;

    for (let i = 0; i < gamesPlayed; i++){
        let result = arg[index];
        index++;
        if(result === "W"){
            winnGames ++;
            tempPoints += 3;
        } else if (result === "D"){
            remiGames ++;
            tempPoints += 1;
        } else if (result === "L"){
            lostGames ++;
        }

    }
    let winInPersent =   winnGames * 100 / gamesPlayed;

    if(gamesPlayed < 1){
        console.log(`${nameTeam} hasn't played any games during this season.`);
    } else {
        console.log(`${nameTeam} has won ${tempPoints} points during this season.`);
        console.log(`Total stats: 
 ## W: ${winnGames} 
 ## D: ${remiGames}  
 ## L: ${lostGames} 
 Win rate: ${winInPersent.toFixed(2)}%`);}

}

footballTournament(["Chelsea",
"0"])

;
