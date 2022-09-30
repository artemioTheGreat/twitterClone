import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './home.scss';

const Home = props => (
  <h1>Home page react is working alright baby boys and girls</h1>
)

ReactDOM.render(
    <Layout/>,
    document.body.appendChild(document.createElement('div')),
)