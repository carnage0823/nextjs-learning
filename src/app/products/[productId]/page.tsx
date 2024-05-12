export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Details About Products {params.productId}</h1>
    </div>
  );
}
