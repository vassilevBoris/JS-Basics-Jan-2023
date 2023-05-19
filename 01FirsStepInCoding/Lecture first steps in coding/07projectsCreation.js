function projectsCreation(arg) {
    let name = arg[0];
    let projects = Number(arg[1]);
    console.log(`The architect ${name} will need ${projects * 3} hours to complete ${projects} project/s.`);

}

projectsCreation(["Sanya ",
"9 "])
