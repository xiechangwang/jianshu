import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    ListWrapper,
    ListItem,
    ListInfo,
    ListMeta
} from '../style';
class List extends Component{
    render(){
        return(
            <div>
                 {this.listInit()}  
            </div>
        )
    }
    listInit=()=>{
        const {list} = this.props;
            return(
                <ListWrapper>
                    {
                    list.map((item)=>(
                        <ListItem key={item.get('id')}>
                        <img className="list_img" src={item.get('imgSrc')}  alt=""/>
                        <ListInfo>
                            <h3>{item.get('title')}</h3>
                            <p>{item.get('info')}</p>
                            <ListMeta>
                                <span>精读君</span>
                            </ListMeta>
                        </ListInfo>
                        </ListItem>
                    ))
                    }
                </ListWrapper>
            )
       
    }
}

const mapStateToProps=(state)=>{
    return{
        list:state.getIn(['home','homeList'])
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);