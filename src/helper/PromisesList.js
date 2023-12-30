export const PromisesList = [
  {
topicName: "Promises in js",
syntax: `//Async code
const myPromise = new Promise((res, rej) => {
let a = 10;
  
if (a >= 10) {
  res("resolved !!");
} else {
  rej("Error Rejected !!");
}
  });
  
  myPromise
//then called when promise is resolved
.then((message) => {
  console.log(message);
})
//if any error accours or the promise rejected then catch method is called.
.catch((err) => {
  console.log(err);
});
  //Sync code
  //Sync code alway run before the Async code (i.e., Promises)
  console.log("I am a Synchronus code !!!");
  //Output
  /*
  I am a Synchronus code !!!
  resolved !!
  */
  `,
explanation: "self Explain",
videoTitle: "",
videoLink: "",
  },
];