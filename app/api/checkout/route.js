import { stripe } from "@/utils/stripe";

export async function POST(request) {
  const { price } = await request.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "DocClean Pro Subscription" },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/pricing`,
  });

  return Response.json({ url: session.url });
}