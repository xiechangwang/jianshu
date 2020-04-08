import React, { Component } from 'react';
// import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    HeaderLimit,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInofList,
    SearchInfoItem,
    Addition,
    Button
} from './style';
//热门搜索模块
// const getListArea = (show) => {
//     if (show) {
//         return(
//             <SearchInfo>
//                             <SearchInfoTitle>
//                                 热门搜索
//                                 <SearchInfoSwitch>
//                                     换一批
//                                 </SearchInfoSwitch>
//                             </SearchInfoTitle>
//                             <SearchInofList>
//                                 <SearchInfoItem>教育</SearchInfoItem>
//                                 <SearchInfoItem>教育</SearchInfoItem>
//                                 <SearchInfoItem>教育</SearchInfoItem>
//                                 <SearchInfoItem>教育</SearchInfoItem>
//                                 <SearchInfoItem>教育</SearchInfoItem>
//                                 <SearchInfoItem>教育</SearchInfoItem>
//                                 <SearchInfoItem>教育</SearchInfoItem>
//                             </SearchInofList>
//                         </SearchInfo >
//         )
//     }else{
//         return null;
//     }
// }
//无状态组件
// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             {/* 安全区域组件 */}
//             <HeaderLimit>
//                 {/* logo组件 */}
//                 <Logo />
//                 {/* nav组件 */}
//                 <Nav>
//                     {/* navItem组件 */}
//                     <NavItem className="left active">首页</NavItem>
//                     <NavItem className="left">下载App</NavItem>
//                     <NavItem className="right">登录</NavItem>
//                     <NavItem className="right">
//                         <i className="iconfont">&#xe636;</i>
//                     </NavItem>
//                     <SearchWrapper>
//                         {/* 搜索组件 */}
//                         <CSSTransition
//                             in={props.focused}
//                             timeout={200}
//                             classNames="slide"
//                         >
//                             <NavSearch
//                                 className={props.focused ? 'focused' : ''}
//                                 onFocus={props.handleInputFocus}
//                                 onBlur={props.handleInputBlur}
//                             ></NavSearch>
//                         </CSSTransition>
//                         <i className={props.focused ? 'focused iconfont' : 'iconfont'}
//                         >&#xe62d;</i>
//                         {/* 调用热门搜索方法 */ }
//                         {getListArea(props.focused)}
//                     </SearchWrapper>
//                     {/* 右侧按钮组件 */}
//                     <Addition>
//                         <Button className="writting"><i className="iconfont">&#xe605;</i>写文章</Button>
//                         <Button className="reg">注册</Button>
//                     </Addition>
//                 </Nav>
//             </HeaderLimit>
//         </HeaderWrapper>
//     )
// };

//有状态组件
class Header extends Component {
    render() {
        const {
            focused,
            handleInputFocus,
            handleInputBlur,
            list
        } = this.props;
        return (
            <HeaderWrapper>
                {/* 安全区域组件 */}
                <HeaderLimit>
                    {/* logo组件 */}
                    <Logo />
                    {/* nav组件 */}
                    <Nav>
                        {/* navItem组件 */}
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            {/* 搜索组件 */}
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={()=>handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                            >&#xe62d;</i>
                            {/* 调用热门搜索方法 */}
                            {this.getListArea(focused)}
                        </SearchWrapper>
                        {/* 右侧按钮组件 */}
                        <Addition>
                            <Button className="writting"><i className="iconfont">&#xe605;</i>写文章</Button>
                            <Button className="reg">注册</Button>
                        </Addition>
                    </Nav>
                </HeaderLimit>
            </HeaderWrapper>
        )
    }

    getListArea = () => {
        const { focused, list, page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
                for (let i = (page - 1) * 10; i < page * 10; i++) {
                    if(newList[i]){
                        pageList.push(
                            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                        )
                    }
                }
            }
        if (focused||mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                            <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe606;</i> 
                                换一批
                            </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInofList>
                        {pageList}
                    </SearchInofList>
                </SearchInfo >
            )
        } else {
            return null;
        }
    }
}


//immutable获取数据需要用get('state对象中的数据变量名')
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        //上下两句代码意思相同
        // focused:state.get('header').get('focused')
        , list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        //聚焦
        handleInputFocus(list) {
            (list.size===0)&&dispatch(actionCreators.getList());
            const action = actionCreators.seachFocus();
            dispatch(action);
        },
        //失焦
        handleInputBlur() {
            const action = actionCreators.seachBlur();
            dispatch(action);
        },
        //移入
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        //移除
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        //换一批
        handleChangePage(page,totalPage,spinIcon){
            //小动画
            let originAngle=spinIcon.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spinIcon.style.transform='rotate('+( originAngle + 360 )+'deg)';

            if(page<totalPage){
                dispatch(actionCreators.chengePage(page+1));
            }else{
                dispatch(actionCreators.chengePage(1));
            }
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);