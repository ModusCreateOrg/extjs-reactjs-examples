import React, { Component } from 'react';

class Members extends Component {
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
            this.hasPeople(data.people) ?
              <div>
                <h2>People ({data.people.length.toLocaleString('en')}):</h2>
                <ul>
                  {
                    data.people.map(person => (
                      <li>
                        <div>{person.name}</div>
                        <div>
                          <a href={`mailto:${person.email}`}>{person.email}</a>
                        </div>
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
  hasPeople (arr) {
    return arr.length > 0;
  }
}
export default Members;

