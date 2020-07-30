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
  }

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let {name, company, phone, email, message} = this.state;
    let nameS = document.getElementById('name');
    let emailS = document.getElementById('email');
    let messageS = document.getElementById('message');
    let formMess = document.querySelector('.form-message');

    const isEmail = () => {
      let isMail = document.getElementById('not-mail')
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if(email.match(regex)) {
        isMail.style.display = 'none';
        return true;
      } else {
        isMail.style.display = 'block';
        isMail.style.animation = 'dongle 1s';
        setTimeout(() => {
          isMail.style.animation = 'none';
        }, 1000);
        return false;
      }
    }

    if (name && isEmail() && message){
      const templateId = "template_aofmtvBG";

      nameS.classList.remove('red');
      emailS.classList.remove('red');
      messageS.classList.remove('red');

      this.sendFeedback(templateId, {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = 'rgb(253, 87, 87)';
      formMess.style.opacity = '1';

      if (!name) {
        nameS.classList.add('error');
      }
      if (!email) {
        emailS.classList.add('error');
      }
      if (!message) {
        messageS.classList.add('error');
      }
    }
  }

  sendFeedback(templateId, variables) {
    let formMess = document.querySelector('.form-message');

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        formMess.innerHTML = "Message envoyé ! Nous vous recontacterons dès que possible.";
        formMess.style.background = '#00c1ec';
        formMess.style.opacity = '1';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        this.setState({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          formMess.style.opacity = '0';
        }, 5000);
      })
      .catch((err) =>
        formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer."
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
            onChange={this.handleChange.bind(this)}
            placeholder="nom *"
            value={this.state.name}
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={this.handleChange.bind(this)}
            placeholder="société"
            value={this.state.company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={this.handleChange.bind(this)}
            placeholder="téléphone"
            value={this.state.phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              required
              onChange={this.handleChange.bind(this)}
              placeholder="email *"
              value={this.state.email}
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={this.handleChange.bind(this)}
            placeholder="message *"
            required
            value={this.state.message}
          />
        </div>
        <input className="button" type="button" value="envoyer" onClick={this.handleSubmit.bind(this)} />
        <div className="form-message"></div>
      </form>
    );
  }
}
