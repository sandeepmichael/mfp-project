import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
const mount = (el) => {
    ReactDOM.render(
       <App />,
       el
    )
}

// if we are in development and in isolation
if(process.env.NODE_ENV === 'development'){
  const devRoot = document.getElementById('marketing-dev')

  if(devRoot){
      mount(devRoot)
  }
}

// if we run through the container export mount immediately
export {mount}