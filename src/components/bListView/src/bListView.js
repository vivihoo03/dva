import React from 'react';
import {Link} from 'dva/router';
import '../../../styles/base.1.0.0.scss';
import style from './style/blistview.scss';
const bListView = (props) => {
    return (
        <section className="uib_listview">
            {
                props.bListViewProps.map((obj, i)=> {
                    return (
                        <div className="wirelessListbg" key={i}>
                            <div className="wirelessListMoney"><span
                                className="wirelessYen">&yen;</span>{obj.price}</div>
                            <div className="wirelessTitle">{obj.title}</div>
                            <Link href={obj.href}>
                                <div className="wirelessBtn">立即使用</div>
                            </Link>
                        </div>
                    );
                })
            }
        </section>
    )
};

bListView.propTypes = {};

export default bListView;
