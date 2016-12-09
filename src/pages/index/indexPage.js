import React, {Component, PropTypes} from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import styles from './indexPage.less';


const dataList = ({index, dispatch})=> {
    return (
        <div className="normal" id="main">
            <h1>Welcome to dva!</h1>
            <p>dataservice测试数据</p>
            <div id="box">
               {
                    index.dpList.map(function (item, index) {
                        return (
                            <li key={index}>
                                <p>{item.DPItemName}</p>
                                <img src="//pic4.40017.cn/index/slide/2016/10/20/18/k8yzyX.png" alt=""/>
                            </li>
                        )
                    })
                }
                <div className={index.loadClass}>
                    <p>{index.loadingText}</p>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {index: state.index};
}
const IndexPage = connect(mapStateToProps)(dataList);
export default connect()(IndexPage);
