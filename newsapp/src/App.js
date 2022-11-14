  import "./App.css";
  import React, {Component, useState} from 'react';
  import NavBar from "./components/NavBar";
  import News from "./components/News";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import LoadingBar from 'react-top-loading-bar'

  const App = () => {

    const apiKey= process.env.REACT_APP_NEWS_API
    const pageSize = 20;
    
    const [progress, setProgrezass] = useState(0)

      return(
        <div>
          <Router>
          <NavBar/>
          <LoadingBar
          height={4}
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
            <Routes>
            <Route exact path="/" element={<News apiKey={state.apiKey} setProgress={setProgress} key="home" pageSize={pageSize} country="in" category="general"/>}></Route>
              <Route exact path="/business" element={<News apiKey={state.apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
              <Route exact path="/entertainment" element={<News apiKey={state.apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
              <Route exact path="/general" element={<News apiKey={state.apiKey} setProgress={setProgress} key="general" pageSize={pageSize0} country="in" category="general"/>}></Route>
              <Route exact path="/health" element={<News apiKey={state.apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
              <Route exact path="/science" element={<News apiKey={state.apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
              <Route exact path="/sports" element={<News apiKey={state.apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
              <Route exact path="/technology" element={<News apiKey={state.apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
            </Routes>
          </Router>
        </div>
      )
  }
export default App;