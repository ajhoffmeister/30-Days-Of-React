import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root')

// Header Style and Element

const headerStyles = {
  backgroundColor: '#FF739B',
  color: '#33113B',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const header = (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <p>Student: Aidan 'James' Hoffmeister</p>
      <small>Date: Aug 12, 2025</small>
    </div>
  </header>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// CSS styles
const mainStyles = {
  backgroundColor: '#FF99AC',
}

// JSX element, main
const main = (
  <main style={mainStyles}>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
    </div>
  </main>
)

// footer styles
// CSS styles
const footerStyles = {
  backgroundColor: '#FF99AC',
}

// JSX element, footer
const footer = (
  <footer style={footerStyles}>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// JSX element, app
const appStyles = {
  backgroundColor: '#FFFFFF',
}
const app = (
  <div style={appStyles} className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const root = ReactDOM.createRoot(rootElement)
root.render(app)
