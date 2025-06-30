import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  return (
    <Card className="h-100 shadow-sm border-0 rounded-3">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted">{product.price} EGP</Card.Text>
        <Link to={`/products/${product._id}`}>
          <Button variant="outline-primary" size="sm">View</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCart;
