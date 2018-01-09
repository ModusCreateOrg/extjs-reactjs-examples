import React, { Component } from 'react';

class Company extends Component {
  render () {
    const { data } = this.props;

    return (
      <div>
        <h1>{data.name}</h1>
        <div>
          <h2>Address:</h2>
          <div>{data.address.street}</div>
          <div>{data.address.city}, {data.address.state} {data.address.zip}</div>
        </div>
        <div>
          {
            data.people.length > 0 ?
              <div>
                <h2>People ({data.people.length}):</h2>
                <ul>
                  {
                    data.people.map(person => (
                      <li>
                        <div>{person.name}</div>
                        <div>{person.email}</div>
                        <div>Skills</div>
                        <ul>
                          {
                            person.skills.map(skill => <li>{skill}</li>)
                          }
                        </ul>
                      </li>
                    ))
                  }
                </ul>
              </div> :
              <div>No people found</div>
          }
        </div>
      </div>
    );
  }
}

export default Company;

