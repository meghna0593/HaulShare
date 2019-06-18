import React, { Component } from "react";
import Image from "material-ui-image";
import "../App.css";
import { Link } from "react-router-dom";
import Rating from "material-ui-rating";

class DetailDesc extends Component {
  render() {
    const style = {
      margin: 30
    };
    return (
      <div>
        <h1 id="title">Transport Vehicle</h1>

        <div className="DetailDesc">
          <Image
            src={
              "https://www.dropbox.com/s/vd8hp4krg7zy01i/undraw_off_road_9oae.png?dl=1"
            }
          />
        </div>

        <div id="title">
          <p> Customer Rating</p>
          <Rating
            value={4}
            max={5}
            onChange={i => console.log("onChange " + i)}
          />
        </div>
        <div className="detaildescmargin">
          <h2>Detail Description</h2>

          <hr />
          <p>
            Proin porttitor aliquet odio non mollis. Pellentesque eget augue id
            augue facilisis facilisis non eu lectus. Nullam orci turpis, rutrum
            quis tellus scelerisque, faucibus vestibulum purus.roin porttitor
            aliquet odio non mollis. Pellentesque eget augue id augue facilisis
            facilisis non eu lect
          </p>
          <hr />
          <h3>Address:</h3>
          <p>
            Current Address: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Maecenas{" "}
            <p>
              Travel Address: blandit lorem tortor, nec vehicula ipsum fermentum
              ut.
            </p>
          </p>
          <hr />
          <h3>Luggage:</h3>
          <p>
            <p> Luggage Dimension: 25 x 45 x 100 inch </p>
            <p>
              Luggage Weight: 200Kg
              <hr />
              <h3>Contact:</h3>
              <p>
                Mobile: +1 7236526354 <p>Date of Travel: 21 Dec 2019 </p>
              </p>
              Email: test@gmail.com
            </p>
            Time: 8.30 AM
          </p>
          <div style={style}>
            <Link to="/dummy">
              <button type="submit" className="FormField__Button">
                Notify Requestor
              </button>{" "}
            </Link>
            <Link to="/home-page">
              <button type="submit" className="FormField__Button">
                Back To List View
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailDesc;
