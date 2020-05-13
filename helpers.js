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

// Function for finding the mean of a list of numbers
function mean(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  let value = total / nums.length;

  return value;
}

function median(nums) {
  // get the middle index of the array
  let middle = Math.floor(nums.length / 2);
  // then sort from greatest to least value
  let sortedNums = [...nums].sort((a, b) => a - b);

  // if our nums array is odd, return the middle value of our sorted array
  // else take calculate the middle value & divide by 2
  return nums.length % 2 !== 0 ? sortedNums[middle] : (sortedNums[middle - 1] + sortedNums[middle]) / 2;
}
console.log(median([1, 2, 3]));

module.exports = { helpNumsArray, mean, median };
