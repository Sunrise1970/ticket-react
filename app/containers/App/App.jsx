import React from 'react';
import { SearchBar } from '../../components'
const App = ({children, history}) => {
  return (
    <div className="main-container">
      <SearchBar history={history}/>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default App
