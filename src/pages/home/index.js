import React,{Component} from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="//upload-images.jianshu.io/upload_images/6126137-b875c763bdaa0006?imageMogr2/auto-orient/strip|imageView2/2/w/994/format/webp"/>
                </HomeLeft>    
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;