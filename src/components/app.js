import 'styles/index';
import reactLogo from 'images/react_logo.svg';

export default class extends React.Component {
  render() {
    return <div className="app">
      <h1>Hello World!</h1>
      <p>Foo to the bar</p>
      <img src={reactLogo}/>
    </div>;
  }
};