import { Container, Row, Col } from "react-bootstrap";
import ProductCart from "../components/ProductCart";

const sampleProducts = [
  { _id: "1", name: "Wireless Headphones", image: "https://via.placeholder.com/300", price: 899 },
  { _id: "2", name: "Smartwatch", image: "https://via.placeholder.com/300", price: 1199 },
  { _id: "3", name: "Phone Stand", image: "https://via.placeholder.com/300", price: 149 },
  { _id: "4", name: "Bluetooth Speaker", image: "https://via.placeholder.com/300", price: 699 },
];

const Products = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">All Products</h2>
      <Row>
        {sampleProducts.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <ProductCart product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
