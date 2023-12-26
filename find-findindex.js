function findUserByUsername(usersArray, username) {
  return usersArray.find(function (obj) {
    return obj.username === username; //obj has key 'username', we are accessing it using dot notation, could also use obj.['username']
  });
}

function removeUser(usersArray, username) {
  let indexToDelete = usersArray.findIndex(function (obj) {
    return obj.username === username;
  });
  if (indexToDelete === -1) return;

  return usersArray.splice(indexToDelete, 1)[0];
}
