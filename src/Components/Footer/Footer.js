import React from "react";
import "./Footer.css";
import Twitter from "../../Resources/Twitter fav.png";
import LinkedIn from "../../Resources/LinkedIn fav.png";
import Instagram from "../../Resources/Instagram fav.png";
import Github from "../../Resources/Github fav.png";
function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/your_twitter_handle/">
        <img src={Twitter} alt="" />
      </a>
      <a href="https://linkedin.com/in/your_linkedin_handle/">
        <img src={LinkedIn} alt="" />
      </a>
      <a href="https://instagram.com/your_instagram_handle/">
        <img src={Instagram} alt="" />
      </a>
      <a href="https://github.com/your_github_handle">
        <img src={Github} alt="" />
      </a>
    </div>
  );
}

export default Footer;
