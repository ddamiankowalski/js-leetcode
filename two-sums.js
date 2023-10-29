/**
 * Two sum approach (greedy, i guess)
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i === j) continue;

            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }      
    }

    return [];
}

/**
 * Two sum approach using map, mapping the 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const mapTwoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return [];
};

const arrLength = 1000000;
const inputArr = [];
for (let i = 0; i < arrLength; i++) {
    inputArr.push(Math.floor(Math.random() * arrLength));
}

const target = Math.floor(Math.random() * arrLength);

const startMap = performance.now();
mapTwoSum(inputArr, target)
const endMap = performance.now() - startMap;

const start = performance.now();
twoSum(inputArr, target)
const end = performance.now() - start;

console.log(`Time for simple twoSum: ${end} \nTime for map twoSum: ${endMap}`);

