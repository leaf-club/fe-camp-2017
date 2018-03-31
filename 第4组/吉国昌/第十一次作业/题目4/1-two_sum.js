/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime:116ms
 * beats 72.03% of js submissions
 */
var twoSum = function(nums, target) {
  var tag = 0;
  for (var i = 0;i < nums.length;i++) {
      for (var j = i + 1;j < nums.length;j++){
          if (nums[i] + nums[j] == target) {
              tag = 1;
              break;
          }
      }
      if (tag == 1) {
          break;
      }
  }
  return [i, j];
};