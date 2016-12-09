import React from 'react';
import {connect} from 'dva';
import base from '../../styles/base.1.0.0.scss';
import styles from './dialogDemo.scss';
import Dialog from '../../components/dialog/'
class dialogDemo extends React.Component {
    constructor(props) {
        super(props);
        const me = this;
        this.state = {
            title: "弹窗标题",
            content: "弹窗内容文本",
            visible: false,
            onClose (){
                debugger;
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

    onClick = ()=> {
        this.setState({...this.state.dialogObj, visible: true});
    }

    render() {
        return (
            <section>
                <button onClick={this.onClick}>点击显示弹窗</button>
                <Dialog {...this.state}></Dialog>
            </section>)
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(dialogDemo);
