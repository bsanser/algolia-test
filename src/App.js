import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits,  Highlight, RefinementList } from 'react-instantsearch-hooks-web';
import './App.css';

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY);

function Hit({ hit }) {
  return (
    <article>
      <img src={hit.image} alt={hit.name} />
      <p>{hit.categories[0]}</p>
      <h1>
        <Highlight attribute="name" hit={hit}/>
      </h1>
      <p>${hit.price}</p>
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
