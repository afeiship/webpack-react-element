import 'styles/index';
import reactLogo from 'images/react_logo.svg';

export default class extends React.Component {

  _onClick = e => {
    console.log('img!');
  };

  render() {
    return <div className="app">
      <h1>Hello World Fei!</h1>
      <p>Foo to the bar</p>
      <img src={reactLogo} onClick={this._onClick}/>
    </div>;
  }
};