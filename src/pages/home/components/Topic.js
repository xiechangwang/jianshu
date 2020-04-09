import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style';


class Topic extends Component{
    render(){
        const { list } = this.props;
        return(
            <TopicWrapper>
               {list.map((item)=>(
                  <TopicItem key={item.get('id')}>
                  <img className="topic-pic" src={item.get('imgSrc')} alt=""/>
                  {item.get('title')}
                </TopicItem>
                 )
               )}
               
            </TopicWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    list:state.getIn(['home','topicList'])
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);