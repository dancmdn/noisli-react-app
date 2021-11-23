import React from 'react'
import AudioList from './Components/AudioList'
import Header from './Components/Header';
import Footer from './Components/Footer'
import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <AudioList />
      <Footer />
    </div>
  );
}

export default App;