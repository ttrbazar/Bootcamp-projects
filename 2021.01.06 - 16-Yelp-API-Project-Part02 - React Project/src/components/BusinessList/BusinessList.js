import "./BusinessList.css";
import React, { Component } from "react";
import Business from "../Business/Business"

class BusinessList extends Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business => <Business key={business.id} business={business} />)}
            </div>

        )
    }
}

export default BusinessList;