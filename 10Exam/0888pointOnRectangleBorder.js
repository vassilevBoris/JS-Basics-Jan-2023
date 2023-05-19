function pointOnRectangleBorder(arg) {

    let x1 = Number(arg[0]);
    let y1 = Number(arg[1]);
    let x2 = Number(arg[2]);
    let y2 = Number(arg[3]);
    let x = Number(arg[4]);
    let y = Number(arg[5]);
    if (x == x1 || x == x2) {
        if (y >= y1 && y <= y2) {
            console.log("Border");
        } else {
            console.log("Inside / Outside");
        }
    } else if (y == y1 || y == y2) {
        if (x >= x1 && x <= x2) {
            console.log("Border");
        } else {
            console.log("Inside / Outside");
        }
    }
    else {
        console.log("Inside / Outside");
    }
}
// pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1",])
//  pointOnRectangleBorder(["2", "-3", "12", "3", "12", "-1",])
//  pointOnRectangleBorder(["2", "-3", "12", "3", "2", "-5"])
pointOnRectangleBorder(["2", "-3", "12", "3", "1.43", "-3"])
