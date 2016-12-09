import React, {Component, PropTypes} from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import base from '../../styles/base.1.0.0.scss';
import styles from './myTestPage.scss';
import Dialog from '../../components/dialog/'
import Back from '../../components/back2top/';
const backObj = {
    distance: 50,
    onClick:function () {
        console.log("顺利回到顶部~ ！");
    }
}
class my extends React.Component {
    constructor(props) {
        super(props);
        const me = this;
        this.state = {
            title: "弹窗标题",
            content: "弹窗内容文本",
            visible: false,
            onClose (){
                me.setState({...me.state.dialogObj, visible: false});
            },
            btnList: [
                {
                    text: "按钮1",
                    action(e){
                        console.log("按钮1")
                        console.log(e)
                        me.setState({...me.state.dialogObj, visible: false});
                    }
                }, {
                    text: "按钮2",
                    action(e){
                        console.log("按钮2")
                        console.log(e)
                        me.setState({...me.state.dialogObj, visible: false});
                    }
                }, {
                    text: "按钮3",
                    action(e){
                        console.log("按钮3")
                        console.log(e)
                        me.setState({...me.state.dialogObj, visible: false});
                    }
                }, {
                    text: "按钮4",
                    action(e){
                        console.log("按钮4")
                        console.log(e)
                        me.setState({...me.state.dialogObj, visible: false});
                    }
                }]
        }
    }

    dialog = ()=> {
        this.setState({...this.state.dialogObj, visible: true});
    }

    render() {
        return (
            <section className="wrap">
                <Link  className="item" href="/#/back2top">返回顶部测试页</Link>
                <Link  className="item" href="/#/calendar">日历测试页</Link>
                <Link  className="item" href="/#/toast">Toast测试页</Link>
                <Link  className="item" href="javascript:void(0);" onClick={this.dialog}>Dialog测试</Link>
                <Dialog {...this.state}></Dialog>
                <Back {...backObj} />
            </section>
        );
    }
}


function mapStateToProps(state) {
    return {my: state.index};
}

export default connect(mapStateToProps)(my);
