const { PropTypes, Component } = React;

class HelloWorld extends Component {
  render() {
    return (
      <h1>Hallo wereld!</h1>
    )
  }
}

ReactDOMFiber.render(
  <HelloWorld />,
  document.querySelector('.react-mount')
);
