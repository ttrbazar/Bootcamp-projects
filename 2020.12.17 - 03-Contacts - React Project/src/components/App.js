import React from "react";
import contacts from "../contacts";
import Card from "./Card";
import Avatar from "./Avatar";
import Details from "./Details";

export default function App() {
    console.log(contacts);
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(item => <Card
                key={item.id}
                name={item.name}
                email={item.email}
                phone={item.phone}
                imgURL={item.imgURL} />)}
        </div>
    );
}