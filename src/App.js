import React from 'react';
import {Provider} from 'react-redux';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter} from 'react-router-dom';
import {Globalstyle} from './style.js';
import {Iconfont} from './statics/iconfont/iconfont.js';
//header
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

const routers=[
  {
    path:'/',
    exact:true,
    component:Home
  },
  {
    path:'/detail',
    exact:true,
    component:Detail
  }
]

function App() {
  return (
    <Provider store={store}>
      <div>
      <Globalstyle/>
      <Iconfont/>
      <BrowserRouter>
        <div>
          <Header/>
          {/* <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route> */}
          {renderRoutes(routers)}
        </div>
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
