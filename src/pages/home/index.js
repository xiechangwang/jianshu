import React,{Component} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommed from './components/Recommed';

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Topic/>
                    <List/>
                </HomeLeft>    
                <HomeRight>
                    <Recommed/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;