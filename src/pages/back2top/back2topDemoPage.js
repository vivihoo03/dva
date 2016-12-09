import React, {Component, PropTypes} from 'react';
import {connect} from 'dva';
import Back from '../../components/back2top/';
import base from '../../styles/base.1.0.0.scss';
import styles from './back2TopDemo.scss';

const back2TopDemo = ({dispatch})=> {
    const backObj = {
        distance: 50,
        onClick:function () {
            console.log("顺利回到顶部~！");
        }
    }
    return (
        <section>
            这是一个返回顶部的测试页面
            <Back {...backObj} />
        </section>
    );
}

function mapStateToProps(state) {
    return {my: state.index};
}

export default connect(mapStateToProps)(back2TopDemo);
