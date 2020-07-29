import React, { Component } from 'react';

class Mouse extends Component {

  componentDidMount() {
    window.addEventListener('mousemove', this.handleCursor);

    // circle smaller
    document.querySelectorAll("body a").forEach(link => {
      link.addEventListener('mouseover', this.handleHover);
      link.addEventListener('mouseleave', this.handleLeave);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleCursor);
  }
  handleCursor(e) {
    document.querySelector(".cursor").style.top = e.pageY + 'px';
    document.querySelector(".cursor").style.left = e.pageX + 'px';
  }
  handleHover() {
    document.querySelector(".cursor").classList.add("hovered");
  }
  handleLeave() {
    document.querySelector(".cursor").style.transition = '.3s ease-out';
    document.querySelector(".cursor").classList.remove("hovered");
  }

  render() {
    return (
      <span className="cursor"></span>
    );
  }
};

export default Mouse;