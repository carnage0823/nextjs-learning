import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  //use promise if you want to use api call for dynamic metadeta

  // const title = await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(`iphone ${params.productId}`);
  //   }, 100);
  // });
  const title = `iphone ${params.productId}`;
  return {
    title: `product ${title}`,
  };
};

export default function ProductDetail({ params }: props) {
  const productId = Number(params.productId);
  if (productId > 10) {
    return notFound();
  }
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <h1>Details About Products {productId}</h1>
      {productId > 1 && <Link href={`${productId - 1}`}>previous</Link>}{" "}
      <Link href={`${productId + 1}`}>Next</Link>
    </div>
  );
}
