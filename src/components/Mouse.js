import React, { useEffect } from "react";

const Mouse = () => {

  useEffect(() => {
    const handleCursor = (e) => {
      document.querySelector(".cursor").style.top = e.pageY + "px";
      document.querySelector(".cursor").style.left = e.pageX + "px";
    };
    window.addEventListener("mousemove", handleCursor);

    // circle smaller
    const handleHover = () => {
      document.querySelector(".cursor").classList.add("hovered");
    };
    const handleLeave = () => {
      document.querySelector(".cursor").style.transition = ".3s ease-out";
      document.querySelector(".cursor").classList.remove("hovered");
    };
    
    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });

  }, []);

  return <span className="cursor"></span>;
};

export default Mouse;
