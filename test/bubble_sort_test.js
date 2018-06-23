assert = require('chai').assert;
bubbleSort = require('../lib/bubble_sort');

describe ('bubble sort', function() {
  it ('can sort a basic array', function() {
    assert.deepEqual(bubbleSort([3, 1]), [1, 3]);
  });

  it ('can sort a more complex array', function() {
    assert.deepEqual(bubbleSort([2, 4, 1, 5, 3]), [1, 2, 3, 4, 5]);
  });
});
