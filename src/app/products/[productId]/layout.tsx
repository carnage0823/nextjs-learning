export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
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