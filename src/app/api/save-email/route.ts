import { supabase } from "@/config/supabse";
import { EmailSchema } from "@/schemas/email.schema";
import { NextResponse } from "next/server";
import * as v from "valibot";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json(
      { message: "El email es requerido" },
      { status: 400 }
    );
  }

  const validation = v.safeParse(EmailSchema, email);

  if (!validation.success) {
    return NextResponse.json(
      { message: "Tipo de email inválido" },
      { status: 400 }
    );
  }

  try {
    await supabase.from("emails").insert({ email });
    return NextResponse.json(
      { message: "Email guardado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al guardar el email" },
      { status: 500 }
    );
  }
}
