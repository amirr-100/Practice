"use client";
import { useRouter } from "next/navigation";

export default function OrderProductPage() {
    const router = useRouter();
 const handleClick = () => {
    console.log("Order placed successfully!");

 };
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}