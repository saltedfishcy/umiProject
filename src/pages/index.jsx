import React, {Component} from 'react';
import StHook from '../components/stHook'
import Example from '../components/example'

import styles from './index.less';
import 'antd-mobile/dist/antd-mobile.css';

// export default function IndexPage() {

  
//   return (
//     <div>
//       <h1 className={styles.title}>Page index111</h1>
//       <StHook />
//       <Example />
//     </div>
//   );
// }

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Page index111</h1>
        <StHook />
        <Example />
      </div>
    )
  }
}

export default IndexPage