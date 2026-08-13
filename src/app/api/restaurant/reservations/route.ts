import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const RESTAURANT_CLIENT_ID = "restaurant-demo-client-id";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerName, customerPhone, guestCount, date, time, specialRequests } = body;
    
    if (!customerName || !customerPhone || !date || !time) {
      return NextResponse.json({ error: "Eksik bilgi girdiniz" }, { status: 400 });
    }

    // Combine date and time into a single DateTime object
    const reservationDate = new Date(`${date}T${time}:00`);

    const reservation = await prisma.tableReservation.create({
      data: {
        clientId: RESTAURANT_CLIENT_ID,
        customerName,
        customerPhone,
        guestCount: parseInt(guestCount) || 2,
        date: reservationDate,
        status: "PENDING",
        specialRequests
      }
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error("Create Reservation Error:", error);
    return NextResponse.json({ error: "Rezervasyon oluşturulamadı" }, { status: 500 });
  }
}
