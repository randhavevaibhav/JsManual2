


const TopicList =[
    {
    topicName:"Array Length",
    syntax:`const arr = [1,2,3,4,5,6];
let arrLength = arr.length;
console.log("Array lenght is ==> "+arrLength);
//Output - Array lenght is ==> 6`,
    explanation:"self Explain",
    videoLink:""
},
{
    topicName:"Promise in javascript",
    syntax:`//Async code
    const myPromise = new Promise((res, rej) => {
      let a = 10;
    
      if (a >= 10) {
        res("resolved !!");
      } else {
        rej("Error Rejected !!");
      }
    });
    
    myPromise
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
    //Sync code
    console.log("I am a Synchronus code !!!");
    //Output
    /*
    I am a Synchronus code !!!
    resolved !!
    */
    `,
    explanation:"self Explain",
    videoLink:""
},




]


export default TopicList;