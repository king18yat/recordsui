import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from '../actions/index';
import { API_RECORDS } from '../actions/index';


class UserRecord extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            record: "",
        };
        
        this.handleRecord = this.handleRecord.bind(this);
    }

    handleRecord(event) {
        this.setState({ record: event.target.value
                      });
    }

    addToView = event => {
        event.preventDefault();
        this.setState({
            record: event.target.value
        });
        
        axios.post(`${ROOT_URL}${API_RECORDS}`, {
            record: this.state.record
        })
            .then(response => {
            console.log(response, 'Record added!');
        })
            .catch(err => {
            console.log(err, 'Record not added, try again');
        });

        this.setState({
            record: ""
        });
    };

    render() {
        return (
            <div>
                <input
                    onChange={this.handleRecord}
                    name="UserRecord"
                    value={this.state.Records}
                    placeholder="Enter the record"
                />
                <button
                type="submit"
                onClick={this.addToView}
                >
                Submit Record<i aria-hidden="true" />
                </button>
            </div>
        );
    }
        
}

export default UserRecord;