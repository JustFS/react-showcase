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

    let {name, company, phone, email, message} = this.state;

    if (name && email && message){
      const templateId = "template_aofmtvBG";

      document.getElementById('name').classList.remove('red');
      document.getElementById('email').classList.remove('red');
      document.getElementById('message').classList.remove('red');

      this.sendFeedback(templateId, {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      console.log('mal rempli');
      document.querySelector('.form-message').innerHTML = "Merci de remplir correctement les champs requis *";
      document.querySelector('.form-message').style.background = 'rgb(253, 87, 87)';
      document.querySelector('.form-message').style.opacity = '1';

      if (!name) {
        document.getElementById('name').classList.add('error');
      }
      if (!email) {
        document.getElementById('email').classList.add('error');
      }
      if (!message) {
        document.getElementById('message').classList.add('error');
      }
    }
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        document.querySelector('.form-message').innerHTML = "Message envoyé ! Nous vous recontacterons dès que possible.";
        document.querySelector('.form-message').style.background = '#00c1ec';
        document.querySelector('.form-message').style.opacity = '1';

        this.setState({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          document.querySelector('.form-message').style.opacity = '0';
        }, 4500);
      })
      .catch((err) =>
        document.querySelector('.form-message').innerHTML = "Une erreur s'est produite, veuillez réessayer."
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
            placeholder="nom *"
            value={this.state.name}
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={this.handleCompanyChange}
            placeholder="société"
            value={this.state.company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={this.handlePhoneChange}
            placeholder="téléphone"
            value={this.state.phone}
          />
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={this.handleEmailChange}
            placeholder="email *"
            value={this.state.email}
          />
          <textarea
            id="message"
            name="message"
            onChange={this.handleMessageChange}
            placeholder="message *"
            required
            value={this.state.message}
          />
        </div>
        <input className="button" type="button" value="envoyer" onClick={this.handleSubmit} />
        <div className="form-message"></div>
      </form>
    );
  }
}
