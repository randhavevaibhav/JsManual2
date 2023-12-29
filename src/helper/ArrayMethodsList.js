export const ArrayMethodsList = [
  {
    topicName: "Array Length",
    syntax: `const arr = [1,2,3,4,5,6];
let arrLength = arr.length;
console.log("Array lenght is ==> "+arrLength);
//Output - Array lenght is ==> 6`,
    explanation: "self Explain",
    videoTitle: "",
    videoLink: "",
  },

  {
    topicName: "Array indexOf",
    syntax: `const arr = [1,2,3,4,5,6];
let arrIndex = arr.indexOf(4);
console.log("index of 4 is ==> "+arrIndex);
//Output - index of 4 is ==> 3`,
    explanation: "self Explain",
    videoTitle: "",
    videoLink: "",
  },

  {
    topicName: "Array toString",
    syntax: `const arr = [1,2,3,4,5,6];
let stringArray = arr.toString();
console.log("string array ==> "+stringArray);
//Output - string array ==> 1,2,3,4,5,6`,
    explanation:
      "arr.toString() method convert array element to comma seperated values",
    videoTitle: "",
    videoLink: "",
  },

  {
    topicName: "Array slice(start,end)",
    syntax: `const arr = [1,2,3,4,5,6];
let slicedArr = arr.slice(2,5);
console.log("array after slice ==> "+slicedArr);
//Output - array after slice ==> [3,4,5]`,
    explanation: `arr.slice method slice an array with the starting position and a ending position.`,
    IMPPoints: [
      "index started from 0",
      "ending postion is excluded from the operation i.e.,5",
    ],

    videoTitle: "",
    videoLink: "",
  },

  {
    topicName: "Array splice(start,how_many_to_delete,what_to_insert)",
    syntax: `const arr = [1,2,3,4,5,6];
arr.splice(2,2,33,44);
console.log("array after splice ==> "+arr);
//Output - array after slice ==> [ 1, 2, 33, 44, 5, 6 ]`,
    explanation: `splice method used to either
    remove or for adding element to the array.`,
    IMPPoints: [
      "arr.splice() actually modifies original array."
    ],

    videoTitle: "",
    videoLink: "",
  },
];
