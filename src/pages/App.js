import React from 'react'
import './App.css'

export default ({ children }) => (
  <div className="App">
    <h1 className="App-header">
    	Welcome to TechSee SMS Task
    </h1>
    <section className="App">
    	{ children }
    </section>
  </div>
)