function generateExcuse() {
  // Who Generator //

  let noun = ["the", "our", "we"];

  let shuffle = Math.random();
  let totalNoun = noun.length;
  let shuffleIndex = Math.floor(shuffle * totalNoun);
  let randomNoun = noun[shuffleIndex];

  // ACTION GENERATOR //

  let adj = ["wonderful", "fantastic", "silly"];

  let shuffleAdj = Math.random();
  let totalAdj = adj.length;
  let shuffleAdjIndex = Math.floor(shuffleAdj * totalAdj);
  let randomAdj = adj[shuffleAdjIndex];

  // WHAT GENERATOR //

  let obj = ["apples", "balloons", "turtles"];

  let shuffleObj = Math.random();
  let totalObj = obj.length;
  let shuffleObjIndex = Math.floor(shuffleObj * totalObj);
  let randomObj = obj[shuffleObjIndex];

  // WHEN GENERATOR //

  let ext = [".com", ".net", ".io"];
  let shuffleExt = Math.random();
  let totalExt = ext.length;
  let shuffleExtIndex = Math.floor(shuffleExt * totalExt);
  let randomExt = ext[shuffleExtIndex];
  let excuseElement = document.querySelector(".domain");

  excuseElement.innerHTML = randomNoun + randomAdj + randomObj + randomExt;
  console.log(excuseElement.innerHTML);
}

window.onload = generateExcuse();
