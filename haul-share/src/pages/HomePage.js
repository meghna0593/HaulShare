import React, { Component } from "react";
import SearchPage from "./Search";
import { Link } from "react-router-dom";
import "../App.css";
import Image from "material-ui-image";
import Rating from "material-ui-rating";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewpost: [
        {
          id: 1,
          Name: "Ujski",
          Location: "Halifax NS",
          Request_Date: "21 Jun 2019",
          Amount: "$200",
          Request_Type: "Luggage",
          Email: "Ujski@email.com"
        },
        {
          id: 2,
          Name: "Yusn",
          Location: "Sydney CB",
          Request_Date: "15 Jul 2019",
          Amount: "$100",
          Request_Type: "Luggage",
          Email: "Yusn@email.com"
        },
        {
          id: 3,
          Name: "Apleux",
          Location: "Belfast PI",
          Request_Date: "15 Aug 2019",
          Amount: "$250",
          Request_Type: "Transport",
          Email: "Apleux@email.com"
        },
        {
          id: 4,
          Name: "Jusinm",
          Location: "Wallace NS",
          Request_Date: "12 Sep 2019",
          Amount: "$500",
          Request_Type: "Transport",
          Email: "Jusinm@email.com"
        },
        {
          id: 5,
          Name: "Jshsy",
          Location: "Halifax NS",
          Request_Date: "02 Jun 2019",
          Amount: "$200",
          Request_Type: "Luggage",
          Email: "Ujski@email.com"
        },
        {
          id: 6,
          Name: "Jxmix",
          Location: "Sydney CB",
          Request_Date: "01 Jul 2019",
          Amount: "$100",
          Request_Type: "Luggage",
          Email: "Yusn@email.com"
        },
        {
          id: 7,
          Name: "Plaodmey",
          Location: "Belfast PI",
          Request_Date: "10 Aug 2019",
          Amount: "$250",
          Request_Type: "Transport",
          Email: "Apleux@email.com"
        },
        {
          id: 8,
          Name: "Nhsgebdj",
          Location: "Wallace NS",
          Request_Date: "11 Sep 2019",
          Amount: "$500",
          Request_Type: "Transport",
          Email: "Jusinm@email.com"
        }
      ]
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.viewpost[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.viewpost.map((listpost, index) => {
      const {
        id,
        Name,
        Location,
        Request_Date,
        Amount,
        Request_Type,
        Email
      } = listpost;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <Link to="/detail-desc">{Name}</Link>
          </td>
          <td>
            <Link to="/detail-desc">{Location}</Link>
          </td>
          <td>{Request_Date}</td>
          <td>{Amount}</td>
          <td>{Request_Type}</td>
          <td>{Email}</td>
        </tr>
      );
    });
  }

  render() {
    const style = {
      margin: 20
    };
    return (
      <div>
        <h3 id="title">Welcome Sam,</h3>
        <div className="profile">
          <Image
            src={
              "https://www.dropbox.com/s/qckbzi6876f3sb9/undraw_profile_pic_ic5t.png?dl=1"
            }
          />
          <div>
            <Rating
              value={4}
              max={5}
              onChange={i => console.log("onChange " + i)}
            />
          </div>
        </div>

        <div className="recentpost">
          <h3>Recent Posts</h3>
        </div>

        <div className="searchbox">
          <SearchPage />
        </div>
        <table id="viewpost">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
        <h4 id="title">Post Request</h4>
        <div id="title">
          <div style={style}>
            <Link to="/dummy">
              <button type="submit" className="FormField__Button">
                Request Transport
              </button>{" "}
              <button type="submit" className="FormField__Button">
                Provide Transport
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
