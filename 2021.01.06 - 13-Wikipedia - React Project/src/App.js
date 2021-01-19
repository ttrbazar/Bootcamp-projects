import React, { useState } from "react";
import Form from "./Form";
import Data from "./Data";


function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [wikiPages, setWikiPages] = useState([]);

    const extractWikiPagesFromData = data => {
        const result = [];
        for (let i = 0; i < data[1].length; i++) {
            result.push({name: data[1][i], link: data[3][i]});
        }
        return result;
    }

    const handleData = async inputText => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${inputText}&format=json&origin=*&limit=10`);
            // console.log(response);
            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setWikiPages(extractWikiPagesFromData(data));
            } else {
                throw new Error("Request Failed!");
            }
        } catch (error) {
            console.log("In Catch -------------------> ", error);
        }
        setIsLoading(false);
    }

    return (
        <div className="container">
            <h1>Wikipedia Search with Function Component</h1>
            <Form isLoading={isLoading} handleData={handleData} />
            <Data wikiPages={wikiPages}/>
        </div>
    );
}

export default App;
