import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "this is free",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header style={{ backgroundColor: "lightgreen", padding: "20px" }}>
        Secound Header{" "}
      </header>
      {children} <h2>Featured Product</h2>
    </>
  );
}
