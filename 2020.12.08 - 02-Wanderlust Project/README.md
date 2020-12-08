# WANDERLUST

Using fetch, async, and await, you’ll request information from the Foursquare API and WeatherStack API to create a travel website.

Before you begin, you’ll need to register for developer accounts for both of the APIs above. They’re both free. 

For Foursquare there are client id and secret in your script.js file, but if you wish you can create your own account. (Once you make an account, create a new app and fill out the form (you can put any link in the “App or Company URL” field). The Foursquare API will then give you a client ID and a client secret.)

For WeatherStack, follow the instructions for the Quick Start Guide. When prompted, sign up. WeatherStack will give you an API Key.

## Add API Information
## 1.
Save the client ID you obtained from the Foursquare API to const clientId. It is already done.

## 2.
Save the client secret you obtained from the Foursquare API to const clientSecret. It is already done.

## 3.
Create a const called url. You can check the Foursquare documentation to see the explore venue API endpoint.

Assign url to 'https://api.foursquare.com/v2/venues/explore?near='.

## 4.
Save the API Key you obtained from WeatherStack to const apiKey.

## 5.
Create a const called weatherUrl, save 'http://api.weatherstack.com/current?access_key=' as the value.

See examples of WeatherStack API on the WeatherStack documentation.

## Get Data from Foursquare
## 6.
Create getVenues() as an asynchronous function that will return a Promise.


## 7.
Inside of that function, add a const called city. Save the value from the user’s input field.

## 8.
Add a const called urlToFetch. This string will contain the combined text of the entire request URL
- the API endpoint URL
- the user’s input city
- a limit parameter with the number of venues you wish to return (use any number)
- the client_id parameter and your client ID clientId
- the client_secret parameter and your client secret clientSecret
- the v (version) parameter and today’s date in this format: YYYYMMDD
Each key-value parameter pair should be joined to the others with &. 

## 9.
Add try/catch statements with empty code blocks.

## 10.
In the catch code block, log the error to the console.

## 11.
In the try code block, use fetch() to send a GET request to urlToFetch. await the response and save it to a variable called response using the const keyword.

## 12.
Create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

## 13.
Copy and paste the URL into a new tab in your browser. It might be difficult to read, so try using an extension such as JSON View to parse the data.

## 14.
Convert the response object to a JSON object. await the resolution of this method and save it to a variable called jsonResponse using the const keyword.

Log jsonResponse to the console.



## 15.
Explore the object in the console. There’s a lot of information in there. Let’s save some of that data to a variable called venues. Specifically, follow this nesting chain from the jsonResponse variable to get an array of venue data:
- the response property (an object)
- the groups property (an array)
- the first element of groups
- the items property (an array of venue data)

## 16.
Log venues to the console and see what the API sent back. There should be an array with the number of objects you selected in the limit parameter.

## 17.
Send venues to the createVenuesHTML helper function as the very last line of the try code block. 

## Get Data from WeatherStack

## 18.
Create getForecast() as an asynchronous function. Add empty try/catch blocks inside. Log the error inside the catch block.

## 19.
Before the try code block, create a const called urlToFetch that includes:
- the base weatherUrl
- your API key as the apiKey variable
- the &query= parameter with a value of the user’s input.
Don’t forget to join parameter key-value pairs after the API key with &.

## 20.
Inside of the try block, await the response of calling fetch() and passing it the URL you created in a previous step. Save the response to a variable response using the const keyword.

## 21.
Create a conditional statement that checks the ok property of the response object. If this evaluates to a truthy value, await the response of calling .json() on the response object. Save the resolution of this Promise to a variable called jsonResponse using the const keyword.


## 22.
Log jsonResponse to the console. 

## 23.
Send jsonResponse to the createWeatherHTML helper function as the very last line of the try code block. 

## Render Data
## 24.
Check the helper functions createVenueHTML() and createWeatherHTML() which is provided in ./helpers.js and linked from index.html.


## Challenges
## 25.
Include additional information about the weather.
