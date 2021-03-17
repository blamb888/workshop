import '../assets/stylesheets/application.scss';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);

// // For super simple components
// // const Hello = (props) => {
// //   const { name } = props;
// //   return <h1>Hello { name }!</h1>;
// // };

// // eslint-disable-next-line react/prefer-stateless-function
// class Hello extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       // eslint-disable-next-line react/jsx-one-expression-per-line
//       <h1>Hello {name}!</h1>
//     );
//   }
// }
