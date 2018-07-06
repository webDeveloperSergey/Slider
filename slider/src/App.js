import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import col from 'react-bootstrap/lib/Button';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <SayFulName name="Sergey" surname="Kultyshkin" link="vk.com" />
      <SayFulName name="Lera" surname="Pop" link="facebook.com" />
      <SayFulName name="Dmitry" surname="Lad" link="#" />
    </div>
    );
  }
}


function SayFulName(props) {
  return(
    <div>
      <h1> Моё имя {props.name}, фамилия - {props.surname} </h1>
      <a href={props.link}>Ссылка на мой профиль </a>
    </div>
    )
}

function MetaAll() {
  return(
    <div>
      <SayFulName name="Sergey" surname="Kultyshkin" link="vk.com" />
      <SayFulName name="Lera" surname="Pop" link="facebook.com" />
      <SayFulName name="Dmitry" surname="Lad" link="#" />
    </div>
    )
}

export default App;
