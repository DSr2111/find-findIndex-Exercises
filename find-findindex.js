function findUserByUsername(usersArray, username) {
  return usersArray.find(function (obj) {
    return obj.username === username; //obj has key 'username', we are accessing it using dot notation, could also use obj.['username']
  });
}

function removeUser(usersArray, username) {
  let indexToDelete = usersArray.findIndex(function (obj) {
    return obj.username === username; // use previous code to locate matching username
  });
  if (indexToDelete === -1) return; //skipped if username not deleted

  return usersArray.splice(indexToDelete, 1)[0]; //uses index to set first param in splice
}
