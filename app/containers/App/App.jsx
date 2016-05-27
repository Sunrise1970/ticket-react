import React from 'react';
const App = ({children, history}) => {
  return (
    <div className="main-container">
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default App
