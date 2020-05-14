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

// ** Mode **
// going to make 2 functions, one for counting the frequency of the numbers | another to taking the values of the most freq
function mode(nums) {
  let obj = frequency(nums);

  let count = 0;
  let highestFreq;

  for (let key in obj) {
    if (obj[key] > count) {
      highestFreq = key;
      count = obj[key];
    }
  }
  return highestFreq;
}

console.log(mode([5, 5, 6, 6, 12, 14]));

// frequency([2, 3, 4, 5]);

function frequency(nums) {
  // reduce requires you to return something at the end of each loop. was getting werid type underfined error
  return nums.reduce(function (acc, curr) {
    if (!acc[curr]) {
      acc[curr] = 1;
      return acc;
    } else {
      acc[curr] += 1;
      return acc;
    }
  }, {});
}

module.exports = { helpNumsArray, mean, median, mode, frequency };
