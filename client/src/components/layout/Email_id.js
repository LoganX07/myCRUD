import React, { Component } from "react";
import axios from "axios";
import Show from "./Show";
class Email_id extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      contact: "",
      address: "",
      age: "",
      errors: {},
      response: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    axios
      .get(`/api/profile/email/${this.state.email}`)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .then(response => this.setState({ response }))
      .catch(err => console.log({ errors: err.response.data }));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Record</h1>
              <p className="lead text-center">Enter User Record</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
              <p></p>
              <Show response={this.state.response} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Email_id;
