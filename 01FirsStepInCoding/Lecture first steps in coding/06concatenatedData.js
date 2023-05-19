function concatenatedData(arg) {
  let firstName = arg[0];
  let lastName = arg[1];
  let age = Number(arg[2]);
  let town = arg[3];

  console.log(
    `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`
  );
}

concatenatedData(["Maria", "Ivanova", "20", "Sofia"]);
