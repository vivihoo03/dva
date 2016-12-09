import React,{PropTypes} from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './cjindexPage.scss';
import banner from './text_01.png';
import rotarytable_01 from './rotarytable_01.png';
import {RoundCircle,Alert,Loading,NoNetWork,SwimText} from 'tcui';

function Cjindex({location,dispatch,cjindex}){

    const before=()=>{
       // dispatch({
       //    type:'cjindex/queryLottery',
       //    payload:{
       //      url:'http://10.101.68.19:8019/client/CircleLottery/Lottery',
       //      param:{
       //          actId:123
       //      }
       //        }
       //    });
       dispatch({
        type:'cjindex/fetchRemote'
       });

    };
    const callback=(data)=>{
        dispatch({type:'cjindex/showAlert'})
    };

    const goaward=()=>{window.location.hash='/award'};
    const gorule=()=>{window.location.hash='/rule'};
    const data={...cjindex};
    const roundCirclePro={...cjindex.roundCirclePro,
        width:document.body.clientWidth*0.9,
        innerWidth:document.body.clientWidth*0.7,
        top:0,
        left:document.body.clientWidth*0.05,
        before,
        callback
    };

    const loadingPro={...cjindex.loadingPro};
    const smallLoadPro={
        text:'准备抽奖',
        show:false,
        type:'small'
    }
    const NoNetWorkPro={...cjindex.NoNetWorkPro};
    const alertPro={...cjindex.alertPro,
        btn:[{
            text:'确定',
            click(){
                dispatch({type:'cjindex/hideAlert'})
            }
        },{
            text:'取消',
            click(){
                dispatch({type:'cjindex/hideAlert'})
            }
        }],
    };

	return (
    <section id="cjindex">
        <Loading {...loadingPro}/>
        <Loading {...smallLoadPro}/>
        <NoNetWork {...NoNetWorkPro}/>
        <Alert {...alertPro}/>
        
        <div className={styles['cjindex-wrap']}>
            <div className={styles["cjindex-info-wrap"]}>
                <SwimText {...cjindex.SwimTextPro}/>
            </div>
            
            <div className={styles["cjindex-banner-wrap"]}>
                <img className={styles["cjindex-banner-pic"]} src={banner} />
            </div>

            <div className={styles["cjindex-cj-wrap"]}>
                <p className={styles["cjindex-cj-txt"]}>
                    剩余抽奖次数：<span className={styles["cjindex-cj-times"]}>{data.times}</span>
                </p>
            </div>

            <RoundCircle {...roundCirclePro}/>

            <div className={styles["cjindex-footer-wrap"]}>
                <p className={styles["cjindex-footer-text"]} style={{marginRight:"30px"}} onClick={goaward}>我的物品</p>
                <p className={styles["cjindex-footer-text"]} onClick={gorule}>活动规则</p>
            </div>
        </div>
    </section>
		)
}

function mapStateToProps({ cjindex }) {
  return {cjindex};
}
export default connect(mapStateToProps)(Cjindex);

