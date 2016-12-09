import React from 'react';
import {Link} from 'dva/router';
import '../../../styles/base.1.0.0.scss';
import style from './style/calendar.scss';
const bListView = (props) => {
    return (
        <section className={style.uib_listview}>
            {
                props.bListViewProps.map((obj, i)=> {
                    return (
                        <div className={style.wirelessListbg} key={i}>
                            <div className={style.wirelessListMoney}><span
                                className={style.wirelessYen}>&yen;</span>{obj.price}</div>
                            <div className={style.wirelessTitle}>{obj.title}</div>
                            <Link href={obj.href}>
                                <div className={style.wirelessBtn}>立即使用</div>
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
