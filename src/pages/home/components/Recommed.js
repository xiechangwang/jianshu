import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
    RecommedWrapper,
    RecommedItem
} from '../style';
class Recommed extends Component{
    render(){
        const {recommedList}= this.props;
        return(
            <RecommedWrapper>
                {recommedList.map((item)=>{
                    return(
                        <RecommedItem key={item.get('id')} href={item.get('url')} >
                            <img className="recommed_pic" src={item.get('imgSrc')} alt=""/>
                        </RecommedItem>
                    )
                })}
            </RecommedWrapper>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        recommedList:state.getIn(['home','recommedList'])
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Recommed);