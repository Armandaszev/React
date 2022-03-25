import { render } from "@testing-library/react";
import React, { Component} from "react";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
    }


render() {

  var { isLoaded, items } = this.state;

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  else {

    return(
      <div className="App">
        <ul>
            {items.map(item => (
              <li key={item.id}>
                 Setup: {item.setup} | Delivery: {item.delivery}
              </li>
            ))};
        </ul>
      </div>
    );
  }
