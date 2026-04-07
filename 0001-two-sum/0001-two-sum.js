/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}; // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if complement exists
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        // Store current number with index
        map[nums[i]] = i;
    }
};