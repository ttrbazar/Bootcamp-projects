# NODE SERVER EXAMPLE
In this Project we will implement a simple Node Server. Let’s get started!

## 1.
Create a file with name server.js. Import Node.js core module first.

## 2.
Create web server (within function) and assign it to a variable server

## 3.
Inside createServer function, write a message to the DOM.

## 4.
At the end of the page, listen server for any incoming requests. 

## 5.
Console a message for server running port.

Run your server with “node server.js” and open your browser on runnig port.
```
localhost:5000
```
## 6.
Inside createServer function, change your DOM message with an if else statement to write simple messages to the DOM according to the url.
 
## 7.
Inside createServer function, add another url for sending a json response 

So, this way you can create a simple web server that serves different responses.


## HINT:
In this example, req.url is used to check the url of the current request and based on that it sends the response. To send a response, first it sets the response header using writeHead() method and then writes a string as a response body using write() method. Finally, Node.js web server sends the response using end() method
