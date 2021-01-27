# React-Context Article Add

In this Project we're going to manage our state with React context.

Let’s get started!

If you have a working React path already (or you just created a new one):

Change your original “src” folder with the Project’s “src” and run your application: npm start

## STEPS:

## 1.
In containers folder in the src, you have Articles.js file, Articles function should return a map of “articles” and send each article to the \<Article/> component.

## 2.
In components folder, in Article/Article.js; return your article* title inside \<h1> and article body inside \<p>. ( *received as props). Now, you can see your article title and body in DOM.

## 3.
In components folder, in AddArticle/AddArticle.js; create hanleArticleData()  method that sets input values to article title and body. 

Hint:
```
const handleSomeData = e => {
    setSomeData({
      ...someData,
      [e.target.id]: e.target.value
    });
  };
```

## 4.
Create another method named addNewArticle() for submitting the form; use preventDefault() method inside it.

So, if you've done with all the instructions above, we can move on and start implementing the context API.

## 5.
A context helps us to handle state without passing down props on every component. Only the needed component will consume the context. To implement it, we need to add this code below to context/articleContext.js.  
```
export const ArticleContext = createContext()
const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    { id:1000, title:"post-1", body:"It is just an example" },
    { id:1001, title:"post-2", body:" It is just an example" },
  ])
  const saveArticle = article => {
    const newArticle = {
      id: Math.floor(Math.random()*1000),
      title: article.title,
      body: article.body,
    }
    setArticles([...articles, newArticle])
  }
  return (
    <ArticleContext.Provider value={{ articles, saveArticle }}>      	{children}
    </ArticleContext.Provider>  )
}
export default ArticleProvider
```

## 6.
Now we've a context, however, we need to provide the context in order to consume it. To do that, we need to wrap our higher component with \<ArticleProvider/>. 
In App.js first import our context provider ArticleProvider and wrap components (instead of div).

## 7.
We're going to consume the context in two components: Articles.js and  AddArticle.js.

In Articles.js ; delete useState variable and add this 
```
const { articles } = useContext(ArticleContext)
```

Do not forget to import our context ArticleContext from relevant file. And also useContext from react. 

## 8.
In AddArticle.js ; add saveArticle by this line of code:
```
const { saveArticle } = useContext(ArticleContext) 
```
inside your addNewArticle method send “article” as a parameter of saveArticle() method.

Add your addNewArticle method to form submit.

You can add new article in DOM now.

## 9.
We now manage our whole application's state through the React Context. However, we can still improve it through another hook named useReducer.

The useReducer hook is an alternative to useState. It's mostly use for the more complex state. useReducer accepts a reducer function with the initial state of our React app, and returns the current state, then dispatches a function.

This will be much more clear, when we start implementing it. Now, in our context folder add this code block below to reducer.js :
```
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
      	id: Math.floor(Math.random()*1000),
          	title: action.article.title,
          	body: action.article.body,
        },
      ]
    default:
     return state
  }
}
```
As you can see, the function reducer receives two parameters: state and action. Then, we check if the type of action is equal to “ADD_ARTICLE”, if it's the case add a new article to our state.

## 10.
Now, the logic to add a new article is handled by the reducer. We've not done yet, let's add it to our context file (ArticleContext.js). Change your useState with this:
```
  const [articles, dispatch] = useReducer(reducer, [ 
    { id:1000, title:"post-1", body:"It is just an example" },
    { id:1001, title:"post-2", body:" It is just an example" },
	])
```

Delete saveArticle method and do not forget to import reducer.

## 11.
Here, we start by importing the useReducer hook and our function reducer. You know that, useReducer takes a function. Therefore, we've to pass our reducer function to it and as second argument the initial state of our application. useReducer gives us access to our articles and a dispatch function (you can name it whatever you like).

Now update a little bit AddArticle.js file. Change saveArticle constant with this:
```
const { dispatch } = useContext(ArticleContext) 
```
and also inside addNewArticle method add this:
```
dispatch({ type: "ADD_ARTICLE", article })
```

## Conclusion:
At the end; instead of pulling out saveArticle, now we get the dispatch function. It expects a type of action ADD_ARTICLE and a value article which will be the new article. With that, our project is now managed through the context API and React Hooks.