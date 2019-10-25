import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div >
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ id, title, authors, description, thumbnail, href, handleBookSave, Booksaved ,handleBookdelete}) {
  return( 
    <li className="list-group-item">
      <div className="img-box">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="right-box">
      {!Booksaved ? ( <button className="btn btn-theme" onClick={event => handleBookSave(event, title, authors, description, href, thumbnail)}>Save</button> ) : (
        <button className="btn btn-danger" onClick={event => handleBookdelete(event, id)}>Delete</button>
      )}
      <a className="btn btn-primary" href={href} target="_blank" rel="noopener noreferrer">View</a>
      <h4>{title}</h4>
      <h6>Written by - {authors}</h6>
      {/* {console.log(authors)} */}
      <p>{description}</p>
      </div>
</li>
);
}
