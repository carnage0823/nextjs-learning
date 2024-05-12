import { notFound } from "next/navigation";

export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 4) {
    return (
      <h1>
        viewing docs for {params.slug[0]} {params.slug[1]} and {params.slug[2]}{" "}
        {params.slug[3]}
      </h1>
    );
  } else if (params.slug?.length === 2) {
    console.log(Number(params.slug[1]));
    if (Number(params.slug[1]) > 10 || isNaN(Number(params.slug[1]))) {
      notFound();
    }
    return (
      <h1>
        viewing docs for {params.slug[0]} {params.slug[1]}
      </h1>
    );
  } else {
    return <h1>Docs Home Page</h1>;
  }
}
