import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import Nav from './Nav';
import Footer from './Footer'
import Content from './content';
import News from './news';

function Final(){
  return(
    <div>
      <Nav/>
      <Content/>
      <News/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<Final/>, document.getElementById('root'));
