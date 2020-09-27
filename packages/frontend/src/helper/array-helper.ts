/**
 * Fisher-Yates (aka Knuth) Shuffle Algorithm
 */
export function shuffle(array:any[]) {
  var currentIndex:number = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/**
 * Helper function to cast convert a generic array into a string representing
 * an array of strings
 */
export function convertToStringArray(array:any[]):string {
  return "[\"" + array.join("\",\"") + "\"]"; 
}