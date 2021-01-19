import React from 'react';

const Data = ({ wikiPages }) => {
    return (
        <div>
            {wikiPages.length === 0 ? "" : (<h2>Results:</h2>)}
            <ul>
                {wikiPages.map((wikiPage, index) => (<li key={index}><a href={wikiPage.link} target="blank">{wikiPage.name}</a></li>))}
            </ul>
        </div>
    )
}

export default Data;