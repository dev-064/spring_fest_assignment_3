import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://api.itbook.store/1.0/new`).then((res) => {
      const persons = res.data;
      this.setState({ persons: persons.books });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <div class="card" key={person.isbn13} style={{color:"black"}}>
            <img src={person.image} alt=""/>
              {person.title}
          </div>
        ))}
      </ul>
    );
  }
}