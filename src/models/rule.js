import { hashHistory } from 'dva/router';
import{query} from '../services/rule';
import {setTitle} from '../utils/stateobj';


//处理规则页面文字信息
export default {
  namespace: 'ruletext',

  state: {
    loading:false,
      list:[]
  },

  subscriptions: {
      setup({ dispatch, history }) {
           history.listen(location =>{
              if(location.pathname==='/rule'){
                 setTitle('活动规则');
               }
            })
         }
    },
  effects: {
    *query({payload},{put,call,select}){
      //yield put({type:'showLoading'});
      //const {data}=yield call(query);
      if(data){
        yield put({
          type:'querySccess',
          payload:{
            list:data.data
          }
        });
        yield put({type:'hideLoading'});
      }
    },
    *fetchRemote({ payload }, { call, put }) {
    },
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
    }
  }
}
