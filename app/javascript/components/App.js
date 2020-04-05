import React from 'react';
import Layout from './Layout/Layout';
import BurgerBuilder from '../containers/BugerBuilder/BugerBuilder';

function App() {
  return (
    <div>
   <Layout>
     <BurgerBuilder></BurgerBuilder>
   </Layout>
    </div>
  );
}

export default App;
