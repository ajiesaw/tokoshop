import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ProductList = () => {
  return (
    <>
      <Navbar />
      <div className="mt-4">
        <p>This is the List of Product</p>
        <Link key={1} to={`/products/1`} className="link">
          <p className="underline">Go to Product 1</p>
        </Link>
      </div>
    </>
  );
};

export default ProductList;
