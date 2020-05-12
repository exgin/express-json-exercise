const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { helpNumsArray, mean } = require('./helpers');

app.get('/mean', function mean(req, res) {
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

app.get('/median', function median(req, res) {
  return res.json('Median page!');
});

app.get('/mode', function mode(req, res) {
  return res.json('Mode page!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
