import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-white text-center py-3 border-top mt-5 shadow-sm">
      <Container>
        <small className="text-muted">© {new Date().getFullYear()} ClickCart. All rights reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;
