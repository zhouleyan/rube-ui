import React, { Component } from 'react';
// import Button from '../lib/Button';
// import Scroll from '../lib/Scroll';
// import Select from '../lib/Select';
// import Validator from '../lib/Validator';
// import Input from '../lib/Input';
// import { Button, Scroll, Select, Validator, Input } from '../src';
import { Button, Scroll, Select, Validator, Input } from '../lib';

import '../lib/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
        <Scroll />
        <Select />
        <Validator />
        <Input />
      </div>
    );
  }
}

export default App;
