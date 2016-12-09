import { hashHistory } from 'dva/router';
import query from '../utils/ajax'
import {setTitle} from '../utils/stateobj';




//处理规则页面文字信息
export default {
  namespace: 'cjindex',

  state: {
    roundCirclePro:{      
    },
    loadingPro:{
      show:''
    },
    NoNetWorkPro:{
    },
    alertPro:{
        text:"测试数据是用来测试的数据，测试数据是用来测试的数据测试数据是用来测试的数据",
        btn:[{
            text:'确定',
            click(){
                alert('111')
            }
        },{
            text:'取消',
            click(){
                alert('222')
            }
        }],
        show:false
    },
    SwimTextPro:{

    },
    times:''
  },

  subscriptions: {
    setup({dispatch, history}) {
            history.listen(location=> {
                if (location.pathname === '/cjindex') {
                  setTitle('免费抽大奖');
                    dispatch({
                        type: 'query',
                        payload: {
                        }
                    });
                    // dispatch({
                    //   type:'querySpinInfo',
                    //   payload:{
                    //     url:'http://10.101.68.19:8019/client/CircleLottery/GetSpinInfo',
                    //     param:{
                    //       eventId:11
                    //     }
                    //   }
                    // })
                }
            })
    },
  },

  effects: {
    *query({payload},{put,call,select}){
      yield put({type:'showLoading'});
      yield put({type:'initRoundCirclePro'});
      yield put({type:'initloadingPro'});
      yield put({type:'initTimes'});
      yield put({type:'initSwimTextPro'});


      //const {data}=yield call(query);
      // if(data){
      //   yield put({
        
      //     type:'querySccess',
      //     payload:{
      //       list:data.data
      //     }
      //   });
      yield put({type:'hideLoading'});
    },
    //获取轮播内容
    *querySpinInfo({payload},{put,call,select}){
      yield call(query,payload.url,payload.param);
    },
    //获取抽奖物品id
    *queryLottery({payload},{put,call,select}){
      yield call(query,payload.url,payload.param);
    },    
    *fetchRemote({ payload }, { call, put }) {
      //call
      yield put({
        type:'fetch',
          payload:{
            winCount:Math.floor(8*Math.random())+Math.random()
          }
      })
    },
    
  },

  reducers: {
    initRoundCirclePro(state,action){
      const roundCirclePro={
        winCount:state.roundCirclePro.winCount||0,
        color:['#ffd42d','#EAA605'],
        bigImg:'http://file.40017.cn/appresource/image/haveTicket/rotarytable_01.png',
        smallImg:'src/imgs/rotarytable_02.png',
        imgs:['src/imgs/winning_01.png','src/imgs/winning_02.png','src/imgs/winning_03.png','src/imgs/winning_04.png','src/imgs/winning_05.png','src/imgs/winning_06.png','src/imgs/winning_07.png','src/imgs/winning_08.png'],
           //方法不要写在state中
           // before(){
           // },
           // callback(){
           // }
      }
      console.log(roundCirclePro.bigImg)
      return {...state,roundCirclePro};
    },

    initloadingPro(state){
      const loadingPro={
               show:true
            }
      console.log(state.roundCirclePro.bigImg)
      return {...state,loadingPro}
    },

    initNoNetWorkPro(state){
      const  NoNetWorkPro={
              type:0,
              show:false,
              reload(){}
             };
             console.log(state.roundCirclePro.bigImg)
      return {...state,NoNetWorkPro}
    },

    initTimes(state){
      console.log(state.roundCirclePro.bigImg)
      return {...state,times:'02'}
    },
    initSwimTextPro(state){
      const SwimTextPro={
                text:'123456用户获得了火车票红包;123456用户获得了火车票红包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,123456用户获得了火车票红包,   ;123456用户获得了火车票红包,  ;',
                styles:{
                     color:'#ffd332',
                     height:'40px',
                     lineHeight:'40px',
                     fontSize:'18px'
                     }
                   }
                   console.log(state.roundCirclePro.bigImg)
      return {...state,SwimTextPro};
    },



    showAlert(state,action){

      let alertPro={
        text:(state.roundCirclePro.winCount+'')[0]+"测试数据是用来测试的数据，测试数据是用来测试的数据测试数据是用来测试的数据",
        show:true
    }
    console.log(state.roundCirclePro.bigImg)
      return {...state,alertPro}
    },
    hideAlert(state,action){
      console.log(state.roundCirclePro.bigImg)
      return {...state,alertPro:{show:false}}
    },
    showLoading(state,action){
    const loadingPro={
          show:true
        };
        console.log(state.roundCirclePro.bigImg)
      return {...state,loadingPro};
    },
    hideLoading(state,action){
    const loadingPro={
          show:false
        };
        console.log(state.roundCirclePro.bigImg)
      return {...state,loadingPro};
    },
    fetch(state, action) {
      console.log(state.roundCirclePro.bigImg)
      return { ...state, roundCirclePro:{...state.roundCirclePro,...action.payload} };
    }
  }
}
