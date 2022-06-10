import React from 'react';
import './App.css';

function App() {
    const  names = ['Dimych', 'Sveta', 'Katya', 'Victor', 'Ignat'];
    const  users = [{name: 'Dimych'}, {name: 'Sveta'}, {name: 'Katya'}, {name: 'Victor'}, {name: 'Ignat'}];
    const  liElements = names.map((n, index) => <li key={index}>{n}</li>)
    const  liElements2 = users.map((u, index) => <li key={index}>{u.name}</li>)
    return (
    <div>
        <ul>
            {liElements}
            {liElements2}
        </ul>
    </div>
  );
}

export default App;
