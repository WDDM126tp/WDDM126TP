// src/App.js
import React from 'react';
import MyComponent from './Mycomponent';
// src/App.js
import react from 'react';
import ProfileCard from './Profilecard.js';
import TaskList from './Tasklist.js';
import ProductItem from './Productitem.js';
import MessageBox from './messagebox.js';
import Counter from './Mycomponent.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tanu repository WDDM126TP </h1>
        <MyComponent />
      </header>
      <ProfileCard name="George Ajileye" bio="A passionate developer from Toronto." />
      <TaskList />
      <ProductItem name="Laptop" description="A high performance laptop" price="$1200" />
      <MessageBox />
      <Counter />
    </div>
  );
};

export default App;


export default App;

