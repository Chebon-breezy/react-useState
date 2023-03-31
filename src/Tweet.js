import React from "react";

function Tweet({name, message, likes,date}) {
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{likes}</h3>
            <h3>{date}</h3>
        </div>
    )
    
}

export default Tweet;