import * as React from 'react'; //ts里，需要这样引入 → * as
import * as ReactDOM from 'react-dom';

import Counter from './components/Counter';

ReactDOM.render(<Counter name='计数器'/>, document.getElementById('root'));
