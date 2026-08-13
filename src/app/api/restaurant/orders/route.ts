import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // In a real scenario, this would write to an `Order` model in Prisma.
    // Since our initial schema didn't have an Order model for Restaurant, we'll mock the success.
    console.log("New Order Received:", body);

    return NextResponse.json({ 
      success: true, 
      orderId: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      message: "Order placed successfully" 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to place order" }, { status: 500 });
  }
}
