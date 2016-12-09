import React,{PropTypes} from 'react';
import styles from './myAwardPage.scss';
import { connect } from 'dva';
import Awardbar from './awardbar';
import {Loading} from 'tcui';


function Award({location,dispatch,award}){
    const goPage=(code)=>{dispatch({type:'award/goPage',payload:{code:code}})};
    const loadingPro={show:award.loading};
	return (
    <section id="myAward">
        <Loading {...loadingPro}/>
        <div className={styles["Mtop-10"]}>
            <ul className={styles["ticket-wrap"]}>
            {award.list.map((child,i)=><Awardbar key={i} goPage={goPage} {...child}/>)}
            </ul>
        </div>
    </section>
		)
}

function mapStateToProps({ award }) {
  return {award};
}
export default connect(mapStateToProps)(Award);

