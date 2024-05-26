var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const size = friends.length;
for (let i = 0; i < size; i++) {
  let longName = friends[0];

  if (longName.length < friends[i].length) {
    longName = friends[i];
    console.log(longName);
  }
}
