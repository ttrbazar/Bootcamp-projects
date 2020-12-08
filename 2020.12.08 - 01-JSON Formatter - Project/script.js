const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');

const collection = ["Another", "Oooops", "More", "Next", "Continue", "Keep going", "Click me", "A new one", "Try Again", "So Close", "Well Done"];

const url = "https://jsonplaceholder.typicode.com/";


const sendJson = async () => {

    const data = {
        title: "foo",
        body: "bar",
        blabla: "blablabla",
        userId: 1
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json; charset=UTF-8',}
    }

    try {
        const fetchResponse = await fetch("https://jsonplaceholder.typicode.com/posts", options);
        if (fetchResponse.ok) {
            const jsonResponse = await fetchResponse.json();
            console.log(jsonResponse);
        }
    } catch (err) {
        console.log(err);
    }
}


const getJson = async event => {
    const endPointWords = ["todos", "users", "comments", "posts"];
    const endPointWord = endPointWords[Math.floor(Math.random() * endPointWords.length)];
    const urlToFetch = url + endPointWord;

    try {
        const fetchResponse = await fetch(urlToFetch);
        if (fetchResponse.ok) {
            const jsonResponse = await fetchResponse.json();
            renderResponse(jsonResponse);
        } else {
            throw new Error("Request failed!");
        }
    } catch (err) {
        console.log(err);
    };
}



// DO NOT CHANGE BELOW THIS LINE 
const formatJson = resJson => {
    resJson = JSON.stringify(resJson);
    //console.log(resJson);
    let counter = 0;
    return resJson.split('')
        .map(char => {
            switch (char) {
                case ',':
                    return `,\n${' '.repeat(counter * 2)}`;
                case '{':
                    counter += 1;
                    return `{\n${' '.repeat(counter * 2)}`;
                case '}':
                    counter -= 1;
                    return `\n${' '.repeat(counter * 2)}}`;
                default:
                    return char;
            }
        })
        .join('');
}

const renderResponse = jsonResponse => {
    const jsonSelection = Math.floor(Math.random() * 10);
    sendJson();
    jsonButton.innerHTML = `${collection[jsonSelection]}!`;
    display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
}

jsonButton.addEventListener('click', getJson);

