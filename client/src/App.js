import React from 'react';

// ! Components
import Form from './components/Form';
import IngredientList from './components/IngredientList';
import Results from './components/Results';

import { connect } from 'react-redux';

function App({results, loading}) {
  return (
      <div className="app">
        <Form />
        <IngredientList />
        {(results.length > 0 && !loading) && <Results />}
        {loading && <h1>Loading...</h1>}
      </div>
  );
}

export default connect(({results, loading}) => ({results, loading}), {})(App);
