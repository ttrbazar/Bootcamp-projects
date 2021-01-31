# React-Context Weather API

In this Project; we’ll make a simple web app that lets users view the current temperature in multiple cities, and shows the average of these temperatures. The user can add multiple cities, and the app will also show an average of all the temperatures listed.

At the end of this project, this is what it will look like:
 
## Let’s get started!

If you have a working React path already (or you just created a new one):

Change your original “src” folder with the Project’s “src” and run your application: npm start

## STEPS:

## 1.
First, let’s create the Context. Create a context folder and WeatherContext.js file inside it. Use createContext method to store initial values of two things:
- A cities array, this initial array is empty.
- An addCity function to add cities to this array. It takes the name and temperature as parameters, leave this a dummy (empty) function for now.
- Assign createContext to a constant WeatherContext.

HINT:
```
const customContext = React.createContext({
  data: [],
  method: (param1, param2) => { },
});
```

## 2.
In App.js file you will do a few things here:
- Use React Hooks (useState) to keep track of the array cities and create a setter setCities.
- Create an addCity function just wraps the setCities; takes name and temperature as parameters and adds to the cities array.
- Provide the root value (wrap your App) in the hierarchy using WeatherContext.Provider.

HINT:
```
    <WeatherContext.Provider value={{cities, addCity }}>
	…….
    </WeatherContext.Provider>
```

- Add child components, such as CityList, AddCityButton and TemperatureAverage under \<h2> element.

## 3.
In CityList.js file CityList component; This is the first consumer of our WeatherContext React Context.

- Grab the list of cities, (use useContext method to take cities context from WeatherContext.)

- Map them into the table (inside \<tbody>), showing both the name and the temperature. 



## 4.
In TemperatureAverage.js file TemperatureAverage component; This is the second consumer of WeatherContext, We add up the average of each city’s temperature, and divide by the length of the array, to get the average.

If there are no cities yet, this would divide by 0, so we show a simple message to the user instead.
- Change cities constant with the context cities. (use useContext)

## 5.
So far, we’ve only used the cities property of our custom React Context. The AddCityButton component is what’s finally going to use the addCity property.
- Grab your addCity method from WeatherContext (use useContext).
- Use React Hooks (useState) to keep track of the array name and create a setter setName. 
- Create a event handler that changes name according to input value.
- Create a submitCity function just sends name and a random temperature (number between 1 and 10) to the addCity method. Assign submitCity function to onclick handler of button.

Our call to addCity is giving a random temperature now but we’ll replace this with real data in later steps.

## 6.
Now that we have a working app, let’s make it use real data. İnstead of sending random temperature make a fetch from “weatherstack.com” or “openweather.com” and send the temperature to the addCity function.

(Remember; we used weatherstack in our javascript “Wanderlust” project)

7.Challenge

Try extending the application to delete cities from the list. Just like we have an addCity function in WeatherContext, this will probably need a deleteCity function.
