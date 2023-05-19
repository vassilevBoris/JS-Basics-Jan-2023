function zaplata(arg) {
    let index = 0;
    let openTabs = Number(arg[index]);
    index++;
    let salary = Number(arg[index]);
    index++;

    for (let i = 1; i <= openTabs; i++) {
        let nameTab = arg[index];
        index++;

        switch (nameTab) {
            case "Facebook":
                salary = salary - 150; break;
            case "Instagram":
                salary = salary - 100; break;
            case "Reddit":
                salary = salary - 50; break;
        }
    }
    if(salary <= 0){
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary.toFixed(0));
    }
    
}




zaplata(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])



;