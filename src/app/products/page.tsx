import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "products" },
};
export default function ProductList() {
  const products = [1, 2, 3, 4, 5];
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <h1>My Products LIst</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {products.map((item, key) => (
          <Link href={`products/${item}`}>Product {item}</Link>
        ))}
      </div>
    </div>
  );
}
