import { hashHistory } from 'dva/router';
import query from '../utils/ajax';
import {setTitle} from '../utils/stateobj';


//处理规则页面文字信息
export default {
  namespace: 'userInfo',

  state: {
     loading:false,
     complete:false,
     username:'',
     phonenum:'',
     region:'',
     address:'',
     alertshow:false,
     alerttext:'测试数据是用来测试的数据，测试数据是用来测试的数据测试数据是用来测试的数据',
     smallLoadshow:false
  },

  subscriptions: {
      setup({ dispatch, history }) {
           history.listen(location =>{
              if(location.pathname==='/userInfo'){
                 setTitle('个人信息填写');
               }
            })
         }
    },
  effects: {
    *query({payload},{put,call,select}){
      yield put({type:'showLoading'});
      const {data}=yield call(query);
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
    *submitform({payload},{put,call,select}){
      yield put({type:'showSmallLoadshow'});
        let url='http://10.101.68.19:8019/client/CircleLottery/SaveInfo';
        let username=$.trim(payload.username.toString());
        let phonenum=$.trim(payload.phonenum.toString());
        let region=$.trim(payload.region.toString());
        let address=$.trim(payload.address.toString())
        let param={
          awardId:1,
          memberName:username,
          mobile:phonenum,
          localArea:region,
          addressInfo:address
        };
        let data={
           username:username,
           phonenum:phonenum,
           region:region,
           address:address
        }
        //const {data}=yield call(query,url,param);
        yield put({type:'setdata',payload:data});
        yield put({type:'hideSmallLoadshow'});
        window.location.hash='/award';
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
    showSmallLoadshow(state,action){
      return {...state,smallLoadshow:true}
    },
    hideSmallLoadshow(state,action){
      return {...state,smallLoadshow:false}
    },


    getUserInfo(state){
    return {...state};    
    },
    submit(state){
      return{...state,username:'xxxfffkkk'}
    },
    alertInfo(state,action){
      var alertinfo={...action.payload};
      return {...state,...alertinfo};
    },
    alerthide(state){
      return {...state,alertshow:false}
    },
    setdata(state,action){
      alert(JSON.stringify(action.payload));
      return {...state,...action.payload,complete:true}
    },



    changename(state,action){
     const name={
      username:action.payload.data
     } 
      return {...state,...name}
    },
    changephonenum(state,action){
     const phonenum={
      phonenum:action.payload.data
     } 
      return {...state,...phonenum}
    },
    changeregion(state,action){
     const region={
      region:action.payload.data
     } 
      return {...state,...region}
    },
    changeaddress(state,action){
     const address={
      address:action.payload.data
     } 
      return {...state,...address}
    },
  },

}
