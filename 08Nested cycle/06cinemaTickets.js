function cinemaTickets(arg) {
    let index = 0;
    let command = arg[index];
    index++;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish") {
        let movieTitle = command;
        let freeSpaces = Number(arg[index]);
        index++;

        let commend1 = arg[index];
        index++;
        let spacesTaken = 0;

        while (commend1 !== "End") {
            let ticketType = commend1;
            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standartTickets++;
            } else {
                kidTickets++;
            }

            spacesTaken++;
            if (spacesTaken === freeSpaces) {
                break;
            }

            commend1 = arg[index];
            index++;
        }

        let percentFull = (spacesTaken / freeSpaces) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);
        command = arg[index];
        index++;

    }
    let totalTickets = studentTickets + standartTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    let standartTicketsPercent = (standartTickets / totalTickets) * 100;
    let kidTicketsPercent = (kidTickets / totalTickets) * 100;

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}
// cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])

