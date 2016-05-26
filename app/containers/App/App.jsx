import React from 'react';
import { SearchBar, City } from '../../components'
const App = ({children, history}) => {
  return (
    <div className="main-container">
        <SearchBar history={history}/>
        <City />
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default App
