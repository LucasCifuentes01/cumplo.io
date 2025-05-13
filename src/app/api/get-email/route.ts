import { supabase } from "@/config/supabse";
import { EmailSchema } from "@/schemas/email.schema";
import { NextResponse } from "next/server";
import * as v from "valibot";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "El email es requerido" },
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

  const { data, error } = await supabase
    .from("emails")
    .select("email")
    .eq("email", email)
    .single();

  if (error) {
    return NextResponse.json(
      { error: "Error al obtener el email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ exists: !!data });
}
