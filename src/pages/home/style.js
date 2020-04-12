import styled from 'styled-components';

export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;
    background:#f00;
`

export const HomeLeft=styled.div`
    float:left;
    width:625px;
`

export const HomeRight=styled.div`
    float:right;
    width:280px;
`
// Topic
export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
`
export const TopicItem=styled.div`
    float:left;
    margin-left:18px;
    margin-bottom:18px;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    padding-right:10px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`

//List
export const ListWrapper=styled.ul`
    width:100%;
    border-top: 1px solid #f0f0f0;
    padding-top:15px;
`

export const ListItem=styled.li`
    position: relative; 
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .list_img{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        width: 150px;
        height: 100px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
`
export const ListInfo=styled.div`
    padding-right: 165px;
    h3{
        color: #333;
        line-height: 1.5;
        font-size: 18px;
        font-weight: 700;
        margin: -7px 0 4px;
        cursor: pointer;
    }
    p{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

export const ListMeta=styled.div`
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    span{
        color: #b4b4b4;
    }
`

//recommed
export const RecommedWrapper=styled.div`
    padding: 30px 0 0;
`
export const RecommedItem=styled.a`
    .recommed_pic{
        display:block;
        width:100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`
//writer
export const WriterWrapper=styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    margin-top:30px;
`
export const WriterTitleWrapper=styled.div`
    text-align: left;
    span{
        font-size: 14px;
        color: #969696;
    };
    .page-change{
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
        cursor:pointer;
        .spin{
            display:block;
            float:left;
            margin-right:2px;
            font-size:12px;
            transition:all 0.2s ease-in;
            transform-origin:center center;
        }
    }
`

export const WriterListWrapper=styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none
`

export const WriterListItem=styled.li`
    margin-top: 15px;
    line-height:20px;
    .avatar{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;
        .a_pic{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    };
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        font-weight: 400;
        line-height: normal;
    };
    .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }

`