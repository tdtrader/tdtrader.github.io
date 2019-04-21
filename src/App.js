import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import React, { Component } from 'react';
import './App.css';
import { Footer } from './sections/footer';
import { MainContent } from './sections/main-content';
class App extends Component {
  render() {
    return (
      <div className="td-trader">
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
