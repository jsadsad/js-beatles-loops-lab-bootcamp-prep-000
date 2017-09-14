function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var array = [];

  for (var i = 0; i < arrayMusicians.length; i++) {
    var person = arrayMusicians[i];
    array.push(`${arrayMusicians[i]} plays ${arrayInstruments}`);
  }
  return array;
}
