import React from 'react'
import "./Main.css"

function Main({ children } ) {
    
  return <div className='main'>{React.Children.map(children, child => <div>{child}</div>)}</div>;

}

export default Main