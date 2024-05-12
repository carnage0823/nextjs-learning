import Link from "next/link";
import { CSSProperties } from "react";

export default function Docs({ params }: { params: { slug: string[] } }) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  };

  const navigationPages = [
    {
      title: "Blog",
      page: "/blog",
    },
    {
      title: "productDetail",
      page: "/products/",
      id: "1",
    },
    {
      title: "products",
      page: "/products",
    },
  ];

  return (
    <div>
      <h1>Default Home Page</h1>
      {navigationPages.map((item, key) => (
        <p key={key} style={containerStyle}>
          go to
          <Link href={item.page + (item.id !== undefined ? item.id : "")}>
            {item.title}
          </Link>
        </p>
      ))}
    </div>
  );
}
