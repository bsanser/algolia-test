import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits,  Highlight, RefinementList } from 'react-instantsearch-hooks-web';
import './App.css';

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY);


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


function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="phones" insights>
      <SearchBox />
      <RefinementList attribute="brand" />
      <Hits hitComponent={Hit} />
    </InstantSearch>
      
  );
}


export default App;
