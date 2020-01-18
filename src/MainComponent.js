import React from 'react';
import './MainComponent.css';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip1: '',
            zip2: '',
            errormessage: ''
        };
    }
    submitHandler = (event) => {
        event.preventDefault();

        // alert("You are submitting " + this.state.username);
        this.props.passProps([this.state.zip1, this.state.zip2]);
    }
    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        let err = '';
        if (val != "" && !Number(val)) {
            err = <strong>Your input must be a number</strong>;
        }
        this.setState({ errormessage: err });
        this.setState({ [name]: val });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h5> Note: Please enter data in decimal degree. All zipcodes with their respective lat/lng are at
          <a href='federalgovernmentzipcodes.us'> federalgovernmentzipcodes.us</a> or in data.json file. Thank you.</h5>
                    <label for="zipcode1">Zipcode 1</label>
                    <input
                        type='text'
                        name='zip1'
                        id='zipcode1'
                        onChange={this.changeHandler}
                    /><br />
                    <label for="zipcode1">Zipcode 2</label>
                    <input
                        type='text'
                        name='zip2'
                        id='zipcode2'
                        onChange={this.changeHandler}
                    /><br />

                    <input type='submit' />
                    <p id="error">{this.state.errormessage}</p>
                </form>
            </div>
        );
    }
}

export default MainComponent;