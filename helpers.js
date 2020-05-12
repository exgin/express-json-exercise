// Making helper functions to help with the validation of the query string
function helpNumsArray(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let turnToNumber = Number(nums[i]);

    if (Number.isNaN(turnToNumber)) {
      return new Error('One or more values is not a number. Please try again');
    }
    result.push(turnToNumber);
  }
  return result;
}
console.log(helpNumsArray('5', '10'));

// Function for finding the mean of a list of numbers
function mean(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  let value = total / nums.length;

  return value;
}
console.log(mean([5, 10, 22]));

module.exports = { helpNumsArray, mean };
