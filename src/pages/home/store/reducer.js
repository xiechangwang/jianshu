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
    },
    {
        id:3,
        title:'偷窥65岁董明珠的朋友圈才知道：你的圈子，已经暴露了你的阶层',
        info:'《非你莫属》的一期节目中，来了一位24岁的求职者。 他说自己具有天生的交际能力，认识很多牛人大佬，包括董明珠、俞敏洪。 现场的老板们都表示怀疑，...',
        imgSrc:require('../../../statics/images/list_img3.jpg')
    },
    {
        id:4,
        title:'李嘉欣与8岁儿子共浴，当亲情越过界限，对孩子更多的是“伤害”',
        info:'父母永远都是孩子最亲近的人，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长。 绝大多数情况下，妈妈和孩子都是最...',
        imgSrc:require('../../../statics/images/list_img4.jpg')
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