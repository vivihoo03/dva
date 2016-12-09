import React from 'react';
import '../../../styles/base.1.0.0.scss';
import style from './style/dialog.scss';
export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e)=> {
        e.stopPropagation();
        e.preventDefault();
        const {
            btnList = [{
                text: "确定",
                action(e){
                    console.log("确定1111")
                    console.log(e)
                }
            }]
        } = this.props;
        const index = e.target.dataset.index;
        btnList[index].action.call(null, e);
    };

    handleClose = (e)=> {
        e.stopPropagation();
        e.preventDefault();
        this.props.onClose && this.props.onClose(e);
        return false;
    }

    handleTouchMove(e){
        console.log(111)
        e.stopPropagation();
        return false;
    }

    render() {
        const {
            title = "提示", content = "", btnList = [{
            text: "确定",
            action(e){
                console.log("确定1111")
                console.log(e)
            }
        }], visible = false, onClose = noop
        } = this.props;

        console.log(this.props)

        return (
            <setion>{
                visible ? <section className="ui_dialog" onClick={this.handleClose} onTouchMove={this.handleTouchMove}>
                    <div className="body">
                        <h2 className="title">{title}</h2>
                        <div className="content">{content}</div>
                        <div className="btn-wrap">{
                            btnList.map((item, index)=> {
                                return <a data-index={index} key={index} className="btn" href="javascript:void(0);"
                                          onClick={this.handleClick}>{item.text}</a>
                            })
                        }
                        </div>
                    </div>
                </section> : null}
            </setion>
        )
    }
}
Dialog.propTypes = {
    title: React.PropTypes.string,//弹窗标题
    content: React.PropTypes.string,//弹窗内容文本
    btnList: React.PropTypes.arrayOf(React.PropTypes.object)
}
