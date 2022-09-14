import React from 'react';
import './Footer.css';
const Footer = ({}) => {
  return (
    <section className="footer_div">
      <span>
        Questions? Call <a href="tel:8553535302"> 8553535302</a>
      </span>
      <br />
      <br />
      <div className="footer">
        <div className="one">
          <ul className="items">
            <li>
              <a href="https://help.netflix.com/support/412">FAQ</a>
            </li>
            <li>
              <a href="http://ir.netflix.com/">Investor Relations</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/privacy">Privacy</a>
            </li>
            <li>
              <a href="https://fast.com/">Speed Test</a>
            </li>
          </ul>
          <ul className="items">
            <li>
              <a href="https://help.netflix.com/">Help Centre</a>
            </li>
            <li>
              <a href="https://jobs.netflix.com/jobs">Jobs</a>
            </li>
            <li>
              <a href="https://www.netflix.com/in/#">Cookie Preferences</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
            </li>
          </ul>
          <ul className="items">
            <li>
              <a href="https://www.netflix.com/youraccount">Account</a>
            </li>
            <li>
              <a href="https://www.netflix.com/watch">Ways to Watch</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/corpinfo">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="https://www.netflix.com/in/browse/genre/839338">
                Only on Netflix
              </a>
            </li>
          </ul>
          <ul className="items">
            <li>
              <a href="https://media.netflix.com/">Media Centre</a>
            </li>
            <li>
              <a href="https://help.netflix.com/legal/termsofuse">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="https://help.netflix.com/contactus">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <span>Netflix India</span>
    </section>
  );
};

export default Footer;
