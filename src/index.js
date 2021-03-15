module.exports = function toReadable (number) {
  let numberArray = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numberOfTenthArray = [ '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let readableNumber = '';

  if (number === 0) {
      return readableNumber = 'zero';
  } else if (number < 20) {
      return  readableNumber = numberArray[number];
  } else  if ((number % 10 === 0) && number < 100) {
    return readableNumber = numberOfTenthArray[parseInt(number.toString().charAt(0))];
  } else if ( number % 100 === 0) {
      return readableNumber = numberArray[parseInt(number.toString().charAt(0))] +' ' +'hundred';
  }
}
