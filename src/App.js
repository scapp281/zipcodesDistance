import React from 'react';
import MainComponent from './MainComponent';
import DisplayComponent from './DisplayComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  passProps(zipcode) {
    this.setState({ data: zipcode })
  }

  render() {
    return (
      <div>
        <MainComponent passProps={this.passProps.bind(this)} />
        <DisplayComponent data={this.state.data} />
      </div>
    );
  }
}

export default App;