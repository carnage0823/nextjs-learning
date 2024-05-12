"use client";

import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();

  const handleClick = async () => {
    console.log("order placed");
    router.push("/");
  };
  return (
    <div>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 
        hover:bg-blue-700 text-white 
        font-bold py-2 px-4 rounded-full m-5"
      >
        Place Order
      </button>
    </div>
  );
}
