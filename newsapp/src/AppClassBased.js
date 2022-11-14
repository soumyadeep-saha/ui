import "./App.css";
import React, {Component} from 'react';
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0,
    apiKey: process.env.REACT_APP_NEWS_API
  }
  setProgress = (updatedProrgess) => {
    this.setState({progress: updatedProrgess})
  }
  pageSize = 20;
  render(){
    return(
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
          <Route exact path="/" element={<News apiKey={this.state.apiKey} setProgress={this.setProgress} key="home" pageSize={this.pageSize} country="in" category="general"/>}></Route>
            <Route exact path="/business" element={<News apiKey={this.state.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News apiKey={this.state.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News apiKey={this.state.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize0} country="in" category="general"/>}></Route>
            <Route exact path="/health" element={<News apiKey={this.state.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
            <Route exact path="/science" element={<News apiKey={this.state.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
            <Route exact path="/sports" element={<News apiKey={this.state.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News apiKey={this.state.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }

}
