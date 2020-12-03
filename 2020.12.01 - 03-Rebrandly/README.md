# REBRANDLY
In this exercise, you’ll be making a POST request to the Rebrandly API to shorten a URL.

If you haven’t already signed up for an API Key from Rebrandly, please read Rebrandly URL Shortener API page. Keep in mind, while it’s ok to use your API key in these exercises, you should not share your key with anyone.

## 1.
Copy your Rebrandly API Key, and assign it to the `const apiKey` at the top of your code.

## 2.
Within the code block of `shortenUrl()`, create a `const` called `urlToShorten`, and save `inputField.value` to it. `urlToShorten` will now save the value of the input field

Note: for the remainder of this exercise’s instructions we will be working inside the code block of `shortenUrl()`!


## 3.
Create a `const` called `data`, and save the following code to it:
```
JSON.stringify({destination: urlToShorten});
```
We’re including this information because the API expects to see an object with a key `destination` that has a value of a URL.

## 4.
Create a new `XMLHttpRequest` object using the `new` operator, and save it to a `const` called `xhr`.

## 5.
Set the `responseType` property of the `xhr` object to be `'json'`.

## 6.
Save an empty anonymous arrow function to the `onreadystatechange` event handler of the `xhr` object. This function will not take in any parameters.

Inside the anonymous function’s code block, include the following code inside of its code block:
```
if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}
```
The `renderResponse` function can be viewed at ./helper.js.

## 7.
Below the anonymous function you just created, call the `.open()` method on `xhr`, and pass it `'POST'` and `url` as respective arguments.

## 8.
To access the Rebrandly API, we need a header with two key-value pairs. In the header, you must include values for `'Content-type'` and an `'apikey'`.

To set the header, we have to include the following code below our `.open()` method.
```
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
```

## 9.
On `xhr`, call the `.send()` method, and pass it `data` as an argument.

## 10.
Enter this URL into the input field, and click the shorten button in the web page. (make an onclick event handler and call `displayShortUrl` function)
```
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
```
Isn’t it much cleaner?
