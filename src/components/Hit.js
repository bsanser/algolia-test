import React from 'react';
import { Highlight } from 'react-instantsearch-hooks-web';

function Hit({ hit }) {
    let categoriesList=[];
    hit.categories.forEach((category,index)=>{
      categoriesList.push( <li key={index}>{category}</li>)
    })
    return (
      <article>
        <img src={hit.image} alt={hit.name} />
        <h1>
          <Highlight attribute="name" hit={hit}/>
        </h1>
        <p><strong>💰 Price:</strong> ${hit.price}</p>
        <p><strong>🗂️ Categories :</strong></p>
          <ul>
          {categoriesList}
          </ul>
        <p><strong>🚀 Popularity:</strong> {hit.popularity}</p>
      </article>
    );
  }

  export default Hit;