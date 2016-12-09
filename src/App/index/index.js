import './index.html';
import './index.less';
import dva from 'dva';

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model

app.model(require('../../models/cjindex'));

app.model(require('../../models/rule'));

app.model(require('../../models/userInfo'));

app.model(require('../../models/award'));

// 4. Router
app.router(require('../../routes/Index_router'));

// 5. Start
app.start('#root');
