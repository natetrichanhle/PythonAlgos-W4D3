/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {

}

module.exports = { binarySearch };

/*****************************************************************************/
function binarySearch(sortedNums, searchNum, high=sortedNums.length-1,low=0){ 
  console.log(high);
  console.log(low);
  if( low>high){
    return false
  }
  middle=Math.floor((high+low)/2);

  if (sortedNums[middle]==searchNum || searchNum==sortedNums[high] || searchNum==sortedNums[low]){
      return true;
  }

  else if (sortedNums[middle] < searchNum){
      high=middle-1;
      return binarySearch(sortedNums, searchNum, high,low);
  }

  else if (sortedNums[middle] > searchNum) {
      
      low=middle+1;
      return binarySearch(sortedNums, searchNum, high,low);
  }


}

/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */

function reverseStr(str) {
  
}

module.exports = { reverseStr };

/*****************************************************************************/