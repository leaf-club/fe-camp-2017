  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 128 ms
 * Your runtime beats 53.65 % of javascript submissions
 */
var twoSum = function(nums, target) {
    for(var i = 0;i < nums.length;i++){
        for(var j = i + 1;j < nums.length;j++){
            if(nums[i]+nums[j] == target){
                return[i,j];
            }
        }
    }
};