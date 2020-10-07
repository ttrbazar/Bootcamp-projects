
const calculateCharacter = () =>{
    let tweet = "laksj fdlaksjdf alskjhdf aljkshgl aksjdflksjdfh alksdjfh alkdjfhalkgjh osihisuh gsdfkjg";
    let tweetCount = tweet.length;
    let tweetLeft = 150 - tweetCount;

    console.log(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`);

    tweet = prompt("Enter a tweet:");
    tweetCount = tweet.length;
    tweetLeft = 150 - tweetCount;

    console.log(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`);
    alert(`You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining.`);
}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
