import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import {Globalstyle} from './style.js';
import {Iconfont} from './statics/iconfont/iconfont.js';
//header
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
      <Globalstyle/>
      <Iconfont/>
      <Header/>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </div>
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
