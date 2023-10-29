import { measurePerformance } from "./perfmance-utils/performance.mjs";

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

const twoSumTime = measurePerformance(() => twoSum(inputArr, target));
const mapTwoSumTime = measurePerformance(() => mapTwoSum(inputArr, target));

console.log(`Time for simple twoSum: ${twoSumTime} \nTime for map twoSum: ${mapTwoSumTime}`);

