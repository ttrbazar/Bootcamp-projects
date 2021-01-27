import React, { useState, useContext } from "react";
import "./AddArticle.css";
import { ArticleContext } from "../../context/articleContext";

const AddArticle = () => {

    const { saveArticle } = useContext(ArticleContext);

    const [article, setArticle] = useState({ title: "", body: "" });

    const hanleArticleData = e => {
        setArticle({ ...article, [e.target.id]: e.target.value });
    }

    const addNewArticle = e => {
        e.preventDefault();
        if (article.title.trim() !== "" || article.body.trim() !== "") {
            saveArticle(article);
        }
        setArticle({ ...article, title: "", body: "" });
    }

    return (
        <form className="add-article" onSubmit={addNewArticle}>
            <input
                type="text"
                id="title"
                placeholder="Title"
                value={article.title}
                onChange={hanleArticleData}
                required
            />
            <input
                type="text"
                id="body"
                placeholder="Body"
                value={article.body}
                onChange={hanleArticleData}
                required
            />
            <button>Add article</button>
        </form>
    );
};
export default AddArticle;
