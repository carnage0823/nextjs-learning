import { notFound } from "next/navigation";

export default function ProductDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (Number(params.reviewId) > 10) {
    notFound();
  }
  return (
    <div>
      <h1>
        Details About product {params.productId} and its review{" "}
        {params.reviewId}
      </h1>
    </div>
  );
}
