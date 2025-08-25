function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; 2025 Portfolio. Tous droits réservés.</p>
      <a
        href="https://www.linkedin.com/in/yawozoglo/"
        aria-label="Read my linkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-blue-400 hover:text-blue-600 transition"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>{" "}
      <br />
      <a
        href="https://github.com/HexaNexus28"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-blue-400 hover:text-blue-600 transition"
      >
        <i className="fab fa-github"></i>
      </a>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      ></link>
    </footer>
  );
}
export default Footer;
