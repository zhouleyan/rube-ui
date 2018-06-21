import React, { PureComponent } from 'react';
import { Button, Input, Scroll, Select, Validator } from './components';
// import Button from './lib/button';
// import Input from './lib/input';
// import Scroll from './lib/scroll';
// import Select from './lib/select';
// import Validator from './lib/validator';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Button />
        <Input />
        <Scroll />
        <Select />
        <Validator />
      </div>
    );
  }
}

export default App;
