import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriterTitleWrapper,
    WriterListWrapper,
    WriterListItem
} from '../style';
import pic from '../../../statics/images/a_pic.webp';


class Writer extends Component{
    render(){
        const { handelWriterChangePage } = this.props;
        return(
            <WriterWrapper>
                <WriterTitleWrapper>
                    <span>推荐作者</span>
                    <small className="page-change" onClick={()=>handelWriterChangePage(this.spinIcon)}>
                        <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe606;</i>
                        换一批
                    </small>
                </WriterTitleWrapper>
                <WriterListWrapper>
                    <WriterListItem>
                        <span className="avatar">
                            <img className="a_pic" src={pic} alt=""/>
                        </span>
                        <span className="follow">关注</span>
                        <span className="name">王老师八卦美术史</span>
                        <p>写了104.3k字 · 1.3k喜欢</p>
                    </WriterListItem>
                </WriterListWrapper>
            </WriterWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return{

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handelWriterChangePage(spinIcon){
            let originAngle=spinIcon.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spinIcon.style.transform=`rotate(${originAngle + 360 }deg)`;
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Writer);