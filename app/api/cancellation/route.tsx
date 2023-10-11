import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create data
export async function POST(request: NextRequest) {
  const body = await request.json();

  // Create data
  const newData = await prisma.cancellation_history.create({
    data: {
      bookingref: body.bookingref,
      startsAt: body.startsAt,
      endsAt: body.endsAt,
      firstName: body.firstName,
      email: body.email,
    },
  });

  return NextResponse.json(newData, { status: 201 });
}
