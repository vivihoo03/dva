import React from 'react';
import '../../../styles/base.1.0.0.scss';
import style from './style/back2top.scss';
import Animate from 'rc-animate';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import 'react-fastclick';
// import classNames from 'classnames';
export default class Back2Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    currentScrollTop() {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    };

    easeInOutCubic(t, b, c, d) {
        const cc = c - b;
        t /= d / 2;
        if (t < 1) {
            return cc / 2 * t * t * t + b;
        } else {
            return cc / 2 * ((t -= 2) * t * t + 2) + b;
        }
    };

    noop() {
    }

    getDefaultTarget() {
        return typeof window !== 'undefined' ?
            window : null;
    }

    getRequestAnimationFrame() {
        if (typeof window === 'undefined') {
            return () => {
            };
        }

        if (window.requestAnimationFrame) {
            return window.requestAnimationFrame;
        }
        const prefix = ['moz', 'ms', 'webkit'].filter(key => `${key}RequestAnimationFrame` in window)[0];
        return prefix
            ? window[`${prefix}RequestAnimationFrame`]
            : callback => setTimeout(callback, 1000 / 60);
    }

    scrollToTop = (e) => {
        const scrollTop = this.currentScrollTop();
        const startTime = Date.now();
        const frameFunc = () => {
            const timestamp = Date.now();
            const time = timestamp - startTime;
            this.setScrollTop(this.easeInOutCubic(time, scrollTop, 0, 450));
            if (time < 450) {
                this.getRequestAnimationFrame()(frameFunc);
            }
        };
        this.getRequestAnimationFrame()(frameFunc);
        const {onClick = this.noop} = this.props;
        onClick(e);
    }

    setScrollTop(value) {
        const targetNode = (this.props.target || this.getDefaultTarget)();
        if (targetNode === window) {
            document.body.scrollTop = value;
            document.documentElement.scrollTop = value;
        } else {
            targetNode.scrollTop = value;
        }
    }

    getScroll(target, top) {
        if (typeof window === 'undefined') {
            return 0;
        }
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        const method = top ? 'scrollTop' : 'scrollLeft';
        const isWindow = target === window;
        let ret = isWindow ? target[prop] : target[method];
        // ie6,7,8 standard mode
        if (isWindow && typeof ret !== 'number') {
            ret = window.document.documentElement[method];
        }
        return ret;
    }

    handleScroll = () => {
        const {distance = 100, target = this.getDefaultTarget} = this.props;
        const scrollTop = this.getScroll(target(), true);
        console.log(distance)
        this.setState({
            visible: scrollTop >= distance,
        });
    }

    scrollEvent() {
    }

    componentDidMount() {
        this.handleScroll();
        this.scrollEvent = addEventListener((this.props.target || this.getDefaultTarget)(), 'scroll', this.handleScroll);
    }

    componentWillUnmount() {
        if (this.scrollEvent) {
            this.scrollEvent.remove();
        }
    }

    render() {
        // const {prefixCls = 'ui_back2top', className = ''} = this.props;
        // const classString = classNames({
        //     [prefixCls]: true,
        //     [className]: !!className,
        // });
        // console.log(classString)
        return (<Animate component="" transitionName="fade">{
            this.state.visible ?
                <a className="ui_back2top" onClick={this.scrollToTop} href="javascript:void(0);"></a>
                : null}
        </Animate>)
    }
}

Back2Top.propTypes = {
    distance: React.PropTypes.number,
    onClick: React.PropTypes.func,
    target: () => HTMLElement | Window,
    className: React.PropTypes.string
}


