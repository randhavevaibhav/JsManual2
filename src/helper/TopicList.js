


const TopicList =[
    {
    topicName:"Array Length",
    syntax:`const arr = [1,2,3,4,5,6];
let arrLength = arr.length;
console.log("Array lenght is ==> "+arrLength);
//Output - Array lenght is ==> 6`,
    explanation:"self Explain",
    videoTitle:"",
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
    explanation:"self Explain",
    videoTitle:"JavaScript Promises In 10 Minutes",
    videoLink:"https://youtu.be/DHvZLI7Db8E?si=7935uGMcss3erX3u"
},




]


export default TopicList;