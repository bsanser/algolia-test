import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, RefinementList } from 'react-instantsearch-hooks-web';
import Hit from './components/Hit';
import './App.css';

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY);


function App() {
  return (
    <div>
      <h1>Search our flagship phones </h1>
      <InstantSearch searchClient={searchClient} indexName="phones" insights>
        <SearchBox />
        <RefinementList attribute="brand" />
        <Hits hitComponent={ Hit } />
      </InstantSearch>

    </div>
    
      
  );
}


export default App;
