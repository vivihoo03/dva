import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Userform from './userform';
import $ from '../../utils/zepto'
import {Alert,Loading,NoNetWork} from 'tcui'

function UserInfo({location,dispatch,userInfo}){
    var form={};
    const alertPro={
        text:userInfo.alerttext,
        btn:[{
            text:'确定',
            click(){
                dispatch({type:'userInfo/alerthide'})
            }
        }],
        show:userInfo.alertshow
    }

   const submit=()=>{
    let name=$('#username').val();
    let phonenum=$('#phonenum').val();
    let region=$('#region').val();
    let address=$('#address').val();
    let data={
        username:name,
        phonenum:phonenum,
        region:region,
        address:address
    }
    if(name===''){
        dispatch({type:'userInfo/alertInfo',payload:{
            alerttext:'请填写收货人姓名',
            alertshow:true
        }});
        return;
    }
    if(phonenum===''&&!userInfo.alertshow){
        dispatch({type:'userInfo/alertInfo',payload:{
            alerttext:'请填写手机号码',
            alertshow:true
        }});
        return;
    }

    if(!(/^1[34578]\d{9}$/.test(phonenum))&&!userInfo.alertshow){
        dispatch({type:'userInfo/alertInfo',payload:{
            alerttext:'请填写正确的手机号码',
            alertshow:true
        }});
        return;
    }

    if(region===''&&!userInfo.alertshow){
      dispatch({type:'userInfo/alertInfo',payload:{
            alerttext:'请填写XX省-XX市-XX区/县',
            alertshow:true
        }});
        return;  
    }

    if(address===''&&!userInfo.alertshow){
      dispatch({type:'userInfo/alertInfo',payload:{
            alerttext:'请填写详细地址',
            alertshow:true
        }});  
        return; 
    }
    alert('信息正确！');
    dispatch({type:'userInfo/submitform',payload:data})
   };

   if(userInfo.complete){
    form= {
     username:userInfo.username,
     phonenum:userInfo.phonenum,
     region:userInfo.region,
     address:userInfo.address
  };
   }

   const userdata={
        ...form,
        complete:userInfo.complete,
        submit:submit,
        changename:(event)=>{dispatch({type:'userInfo/changename',payload:{data:event.target.data}})},
        changephonenum:(event)=>{dispatch({type:'userInfo/changephonenum',payload:{data:event.target.data}})},
        changeregion:(event)=>{dispatch({type:'userInfo/changeregion',payload:{data:event.target.data}})},
        changeaddress:(event)=>{dispatch({type:'userInfo/changeadress',payload:{data:event.target.data}})},
    };

    const smallLoadPro={
        text:'正在提交...',
        show:userInfo.smallLoadshow,
        type:'small'
    }
    return (
        <div>
        <Loading {...smallLoadPro}/>
        <Alert {...alertPro}/>
        <Userform {...userdata}/>
        </div>
        )
}

function mapStateToProps({ userInfo }) {
  return {userInfo};
}
export default connect(mapStateToProps)(UserInfo);