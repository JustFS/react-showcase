import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleCompanyChange(e) {
    this.setState({ company: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const templateId = "template_aofmtvBG";

    this.sendFeedback(templateId, {
      name: this.state.name,
      company: this.state.company,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        this.setState({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    return (
      <form className="contact-form">
        <h2>contactez-nous</h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={this.handleNameChange}
            placeholder="Nom"
            value={this.state.name}
          />
          <input
            type="text"
            id="company"
            name="company"
            required
            onChange={this.handleCompanyChange}
            placeholder="Société"
            value={this.state.company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            required
            onChange={this.handlePhoneChange}
            placeholder="Téléphone"
            value={this.state.phone}
          />
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={this.handleEmailChange}
            placeholder="Email"
            value={this.state.email}
          />
          <textarea
            id="message"
            name="message"
            onChange={this.handleMessageChange}
            placeholder="Post some lorem ipsum here"
            required
            value={this.state.message}
          />
        </div>
        <input type="button" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
