const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');

  if (reservations[name.toLowerCase()] == undefined) {
      console.log("You have no reservation, but we have open tables");
      reservations[name.toLowerCase()] = { claimed: true };
      console.log(reservations); // Just for checking
  } else if (!reservations[name.toLowerCase()].claimed) {
      console.log(`Welcome, ${name}`)
  } else if (reservations[name.toLowerCase()].claimed) {
      console.log("Hmm, someone already claimed this reservation");
  }
    