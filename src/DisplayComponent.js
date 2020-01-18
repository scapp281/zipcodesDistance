import React from 'react';
import zipcodeData from './zipData/data.json'

class DisplayComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            geoCodeArr: []
        };
    }

    lookupLatLong(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < zipcodeData.length; j++) {
                if (arr[i] == zipcodeData[j].Zipcode) {
                    this.state.geoCodeArr.push(zipcodeData[j].Lat);
                    this.state.geoCodeArr.push(zipcodeData[j].Long);
                }
            }
        }
    }

    calculateDistance() {
        let lat1 = this.state.geoCodeArr[0];
        let long1 = this.state.geoCodeArr[1];
        let lat2 = this.state.geoCodeArr[2];
        let long2 = this.state.geoCodeArr[3];

        let costha = (Math.sin(lat1) * Math.sin(lat2)) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long1 - long2);
        let theta = Math.acos(costha);
        let degtoRad = theta * (Math.PI / 180);
        let km = (6378.14) * degtoRad;
        let mi = km * 0.62137;

        return mi;
    }
    render() {
        return (
            <div>
                <p>The distance between {this.props.data[0] || "zipcode 1"}  and {this.props.data[1] || "zipcode 2 "}
                    is {this.calculateDistance()} mile(s).</p>
            </div>
        );
    }
}
export default DisplayComponent;