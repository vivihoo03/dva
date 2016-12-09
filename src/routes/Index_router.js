import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'dva/router';

import cjindexPage from '../pages/cjindex/cjindexPage' ;
import rulePage from '../pages/rule/rulePage';
import userInfoPage from '../pages/userInfo/userInfoPage.js';
import myAwardPage from '../pages/myAward/myAwardPage.js'

export default function ({history}) {
    return (
        <Router history={history}>
            <Route path="/cjindex" component={cjindexPage}/>
            <Route path="/rule" component={rulePage}/>
            <Route path="/userInfo" component={userInfoPage}/>
            <Route path="/award" component={myAwardPage}/>
        </Router>
    );
};
