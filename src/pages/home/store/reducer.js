import { fromJS } from 'immutable';

const defaultState=fromJS({
   topicList:[
       {
           id:1,
           title:'社会热点',
           imgSrc:require('../../../statics/images/01.png')
       },
       {
        id:2,
        title:'社会热点2',
        imgSrc:require('../../../statics/images/01.png')
        },
   ],
   homeList:[
       {
           id:1,
           title:'细读《挪威的森林》',
           info:'《挪威的森林》，村上春树的代表作。因它的名气特别响亮，特定网购了一本，放在书架上放好几个月了，最近才有时间打开阅读。 花了六天时间读完，基本上是...',
           imgSrc:require('../../../statics/images/list_img.png')
       },
       {
        id:2,
        title:'《让岁月变成诗》名人语录',
        info:'梁实秋说：你走，我不送你。你来，无论多大风多大雨，我要去接你。 海明威说：优于别人，并不高贵，真正的高贵应该是优于过去的自己。 顾漫说：一个笑就...',
        imgSrc:require('../../../statics/images/list_img2.jpg')
    }
   ],
   recommedList:[
       {
           id:1,
           url:'www.baidu.com',
           imgSrc:require('../../../statics/images/r_img1.png')
       },
       {
            id:2,
            url:'www.baidu.com',
            imgSrc:require('../../../statics/images/r_img2.png')
        },
        {
            id:3,
            url:'www.baidu.com',
            imgSrc:require('../../../statics/images/r_img3.png')
        },
        {
            id:4,
            url:'www.baidu.com',
            imgSrc:require('../../../statics/images/r_img4.png')
        }
   ]
});

//immutable设置值需要用set('变量名','数据')方法
export default (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state;             
    }
}