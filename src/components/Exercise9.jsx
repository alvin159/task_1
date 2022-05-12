import React from "react";
import '../App.css';

class exercise9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  fetchRandom() {
    fetch("https://random-data-api.com/api/users/random_user?size=10") //fetch data from the url
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data : json }) //set the values of json.name into this.state.city to fetch data by function fetch_weather
        console.log(json)
      })
      .catch((error) => console.error(error))
  }

  render() {
    return (
      <div>
        <div className="base">
          <button className="btn" onClick={() => this.fetchRandom()}>GENERATE RANDOM</button> 
        </div>
        <div className="exercise9">
          
          {this.state.data.map((data, key) => {
            return (            
              <div className="flip-card" key={key}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img 
                      src={data.avatar}
                      alt={data.avatar}
                      />
                    <h6>{data.first_name + " " + data.last_name}</h6> 
                    <p>{data.employment.title}</p>
                  </div>
                  <div className="flip-card-back">
                    <h6>state: {data.address.state}</h6>
                    <p>city: {data.address.city}</p>
                    <p>address: {data.address.street_address}</p>
                    <p>plan: {data.subscription.plan}</p>                
                    <p>status: {data.subscription.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default exercise9;
