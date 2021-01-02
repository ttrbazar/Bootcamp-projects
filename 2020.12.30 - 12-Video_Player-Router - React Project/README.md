# React Video Player with Router

In this project, you’ll create a video player from selected videos. You will use state, props and routes.

Let’s get started!

First put this “src” folder to a working react path and run your application.

## 1.
In your App.js file; create a state for video source, give an empty string now.

## 2.
Send this state to the Video component (you will create later) under \<h1> element.

## 3.
In your App.js file; Create a method chooseVideo() for changing the state source with the selected video source. It should take source as a parameter.

## 4.
Send this method to the Menu component (you will create later) between \<h1> element and Video component.

## 5.
Now create a Video component (inside Video.js file) that returns a \<video> element with the source of selected state source (coming from App.js).

## 6.
Now create a Menu component (inside Menu.js file) that returns a \<form> element with four “radio” \<input>; each input has the value one of these: “fast”, “slow”, “cute” and “eek”.

## 7.
In your Menu component; call chooseVideo() method (coming from App) with the value of selected input.

Now your Project is working with the input checkboxes, try with Router now.

You may completely change your file structures.

## 8.
In your Menu.js file create your \<Link> elements and \<Route> . 

Then call Video component from Route. 

Send path to use choosen video type.

## 9.
Inside Video.js file use match object to reach correct type of video.

You may copy VIDEOS object inside Video component to reach video urls easly.
