function pcShop(arg) {
    let index = 0;
    let gameCount = arg[index];
    index++;
    // let n = arg[index];
    // index++;
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 0; i < gameCount; i++) {
        let curentGame = arg[index];
        index++;
        if (curentGame === "Hearthstone") {
            hearthstone++;
        } else if (curentGame === "Overwatch") {
            overwatch++;
        } else if (curentGame === "Fornite") {
            fornite++;
        } else {
            others++;
        }
    }
    let percentOverwatch = overwatch * 100 / gameCount;
    let percentFornite = fornite * 100 / gameCount;
    let percentHearthstone = hearthstone * 100 / gameCount;
    let percentOthers = others * 100 / gameCount;
    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);
}
pcShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

