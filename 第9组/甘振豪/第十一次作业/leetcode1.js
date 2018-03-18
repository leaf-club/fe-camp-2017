/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++)
    {
        for(j=i+1;j<nums.length;j++)
            if(target==nums[i]+nums[j]){
                return [i,j];
            }
    }
};