const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { helpNumsArray, mean, median, mode } = require('./helpers');

app.get('/mean', function (req, res) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass in a query string of numbers, separated by a comma!', 400);
  }

  const { nums = [] } = req.query;
  // Get rid of the commans
  let numsStr = nums.split(',');
  // Make sure there's nothing wrong with the data being passed in
  let validNums = helpNumsArray(numsStr);
  if (validNums instanceof Error) {
    throw new ExpressError(validNums.message);
  }

  let final = {
    operation: 'mean',
    result: mean(validNums),
  };

  return res.json(final);
});

app.get('/median', function (req, res) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass in a query string of numbers, separated by a comma!', 400);
  }
  const { nums = [] } = req.query;
  let numsStr = nums.split(',');
  let validNums = helpNumsArray(numsStr);
  if (validNums instanceof Error) {
    throw new ExpressError(validNums.message);
  }

  let final = {
    operation: 'median',
    result: median(validNums),
  };

  return res.json(final);
});

app.get('/mode', function (req, res) {
  if (!req.query.nums) {
    throw new ExpressError('You must pass in a query string of numbers, separated by a comma!', 400);
  }
  const { nums = [] } = req.query;
  let numsStr = nums.split(',');
  let validNums = helpNumsArray(numsStr);
  if (validNums instanceof Error) {
    throw new ExpressError(validNums.message);
  }

  let final = {
    operation: 'mode',
    result: mode(validNums),
  };
  return res.json(final);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
