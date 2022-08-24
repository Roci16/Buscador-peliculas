import "../style/_footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        {/* recordá agregarles aria label a tus links */}
        <a href="https://github.com/Roci16">
          <li>GitHub</li>
        </a>
        <a href="https://www.linkedin.com/in/rociiba%C3%B1ez/">
          <li>Linkedin</li>
        </a>
        <a href="mailto:ibrocio16@gmail.com">
          <li>Mail</li>
        </a>
      </ul>
      <span>Hecho con amor</span>
    </footer>
  );
};
export default Footer;
