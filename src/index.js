import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [{id: 1, message: "I'm think that, react it nice framework!", likeCount: '100500'},
    {id: 1, message: "I'm great. What you think about react?", likeCount: '11'},
    {id: 1, message: "I'm fine thanks. And you?", likeCount: '13'},
    {id: 1, message: "How, are you?", likeCount: '10'}];
const dialogsData = [{id: 1, name: 'Vasa'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Galya'},
    {id: 4, name: 'Arnest'}];

const messageData = [{id: 1, message: 'Hi'},
    {id: 2, message: 'hello'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'I am fine thanks!'}];
ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
