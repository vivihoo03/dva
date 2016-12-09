import './demo.html';
import './demo.scss';
import React from 'react';
import dva ,{connect} from 'dva';
import { Router, Route, useRouterHistory} from 'dva/router';
import { createHashHistory } from 'history';
import BListView from '../../components/bListView';
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
});

// 2. Model
app.model({
  namespace: 'count',
  state: {
    title:'业务组件',
  }
});

// 3. View
const App = connect(({ count}) => ({
  title:count.title,

}))(function(props) {

  const bListViewProps = [{
     title:props.title,
     price:'20',
     href:'http://www.baidu.com'
  },
  {
     title:props.title,
     price:'21',
     href:'#/detail'
  },
  {
     title:props.title,
     price:'22',
     href:'http://www.baidu.com'
  }]

  const blistViewObject = {
    bListViewProps
  }
  return (
    <div>
      <h2>{ props.title }</h2>

       <BListView {...blistViewObject} />
      
    </div>

  );
});

const Detail= function() {
  return (
    <div>
      323232323232323232
    </div>

  );
};

// 4. Router
app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
    <Route path="/detail" component={Detail} />
  </Router>
);

// 5. Start
app.start('#root');
