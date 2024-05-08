// pages/api/empleado/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {

}

export async function POST(req) {
    const { email, password } = await req.json();
    const emailAdmin = process.env.EMAIL_ADMIN;
    const passwordAdmin = process.env.PASSWORD_ADMIN;
    if (email === emailAdmin && password === passwordAdmin) {
        const nombre = "Administrador";
        const tipo = "Admin";
        console.log('Administrador', { email, password, tipo });
        return new NextResponse(JSON.stringify({ user: { email, password, tipo, nombre } }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        return new NextResponse(JSON.stringify({ error: "Credenciales no válidas" }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

}
