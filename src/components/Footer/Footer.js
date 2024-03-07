import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-links">
          <h4>Categories</h4>
          <a href="/">Web Builder</a>
          <a href="/">Hosting</a>
          <a href="/">Data Center</a>
          <a href="/">Robotic-Automation</a>
        </div>
        <div className="footer-links">
          <h4>Contact</h4>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms Of Service</a>
          <a href="/">Categories</a>
          <a href="/">About</a>
        </div>
        <div className="country">
          <select>
            <option value={"United States"}>United States</option>
          </select>
        </div>
      </footer>
    </>
  );
};

export default Footer;
