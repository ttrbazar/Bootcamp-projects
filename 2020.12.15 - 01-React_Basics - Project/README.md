# React Basics

In your Project folder, you have js files under build. So, you dont need to create react app and you dont need to load packages. Also any import from react. Keep instructions.

## 1.
Create an index.js file. with react render method; render a “Hello World” in to the DOM element “example”. Use h1 tag. 

## 2.
Create an array consist of four names, choose different names.

## 3.
Render this names under the Hello World section with “p” tag.

## 4.
If you render seperately this names previous step; now map your array (use callback function) and render names with “p” tag.

## 5.
Create an array consist of at least 2 HTML elements. HİNT: write “Congragulations!” and “React is awesome” with the tags h2 and h3.

## 6.
Render this array to the DOM with an HTML element container (div). 

## 7.
In your index.js file create a class component named HelloMessage. 

## 8.
Render a “Hello from Component” message.

## 9.
Render (call)  this component from your main part of index.js.

## 10.
Now cut and copy all DOM manipulates in to HelloMessage component. Just keep HelloMessage component alone.

## 11.
You will see your DOM is same.

## 12.
Then create a function App that returns “Hello from Function” inside div and h2 elements.

## 13.
Render this function to the DOM under the class component. See the result.

## 14.
Now create a second class component named HelloNames. Cut and copy your names.map part from HelloMessage to HelloNames. Render your HelloNames inside HelloMessage component.

## 15.
Now cut your HelloMessage component from ReactDOM.render to the App function. Keep App alone.

## 16.
Remember you created an array and returned it (at step 5). Now delete this array’s returning in your HelloMessage component.

## 17.
Make a property inside your App function and send that array to HelloMessage component.

## 18.
At HelloMessage component use this props end return this array as an HTML element. (like we did in step 6)

## 19.
Inside your HelloMessage component, send names array as a property to the HelloNames component.

## 20.
In HelloNames component; use this props instead of using names array directly.

## 21.
Create a NoteList class component that returns an “ol” tag element.

## 22.
Use this NoteList component in to the HelloNames to wrap the names array mapping, You may change div element with this. HİNT: 
```
<NotesList>
 	……. 
</NotesList>
```
## 23.
Inside NoteList component’s ol element, use map with “React.Children”. Your first parameter of map method should be “this.props.children” (second is as you already know: callback function).

## 24.
Return every item in this callback within a list element (<li>).

## 25.
You will see your names on the DOM got numbered.

## 26.
In your HelloNames component before render, create a static propTypes that require names array’s propType as a string. You will see an error message in the console. Change propType as an array.

## 27.
Add a key attribute to your p element (as value index of callback function) in your HelloNames component.

## 28.
Add a class attribute to your li elements in NoteList component. Decide this classNames according to the key value. If it is “0” class should be first, if it is “1” class should be second, if it is “2” class should be third. HINT: You can use ternary inside(equal to) className attribute.
