import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hello() {
	let phrase = "world!"
	return (
			<h1> Hello {phrase} </h1>
		)
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
