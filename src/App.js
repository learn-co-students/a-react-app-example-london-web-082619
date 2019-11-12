import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          Now {moment().format('MMMM Do YYYY, hh:mm:ss a')}
        </header>
        <center><h1>！CEOから褒められてよかったね！</h1></center>
        <p className="App-intro">
          ！今日は良い一日でしたね。お疲れ様でした！
          {/* In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX. */}
        </p>
        <ExampleComponent /> こちらをご覧ください！
        <TestComponent /> こちらをご覧ください！
      </div>
    );
  }
}

export default App;
