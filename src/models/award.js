import { hashHistory } from 'dva/router';
import query from '../utils/ajax'
import {setTitle} from '../utils/stateobj';



//处理规则页面文字信息
export default {
  namespace: 'award',

  state: {
      loading:false,
      list:[{
        title:'机票1000元立减红包',
        subtitle:'可在“我的-红包”页面查看',
        code:'0',
      },{
        title:'电影票60元观影券',
        subtitle:'观影券号：SWEAWE2323232DSA可在“电影票-观影券”页面兑换',
        code:'1',
      }]
  },

  subscriptions: {
      setup({ dispatch, history }) {
           history.listen(location =>{
              if(location.pathname==='/award'){
                 setTitle('我的物品');
                 var data=dispatch({
                    type:'query',
                    payload:{
                      url:'http://10.101.68.19:8019/client/CircleLottery/GetMyAward',
                      param:{
                        eventId:11,
                        memberId:22
                      }
                    }
                  })
                 var data={
                     State:0,
                     Msg:[{
                       Title:'电影票60元观影券',
                       SubTitle:'观影券号：SWEAWE2323232DSA可在“电影票-观影券”页面兑换',
                       BtnName:"立即获取",
                       BtnStatus:'0',
                       BtnRedirectUrl:"www.baidu.com",
                       RecordId:"1"
                     }]
                 }
                 if(data){
                  var code=data.State;
                  var list=data.Msg;
                  switch(code){
                    case 0:
                    break;
                    case 1:
                    break;
                    case 100:
                    break;
                  }
                 }
               }
            })
         }
    },
  effects: {
    *query({payload},{put,call,select}){
      yield put({type:'showLoading'});
      yield call(query,payload.url,payload.param);
      yield put({type:'hideLoading'});
      },
    *fetchRemote({ payload }, { call, put }) {
    }
  },

  reducers: {
    showLoading(state,action){
      return {...state,loading:true};
    },
    hideLoading(state,action){
      return {...state,loading:false};
    },
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
    goPage(state,action){
      let code=action.payload.code;
      if(code==='0'){

      };
      if(code==='1'){
        window.location.hash='#userInfo'
      };
      return{...state}
    }
  }
}
