import React from 'react';

export default function ViewTitle({text}){
    return(
        <div className="chat-name-container">
        <span className="name">{text}</span>
        {/* <Link
          to="/"
          className="btn btn-primary btn-sm back-button">Back</Link> */}
      </div>
    )
}
