// pages/api/empleado/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {

}

export async function POST(req) {
    const { email, password } = await req.json();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const apiKey = process.env.GOOGLE_API_KEY;
    const range = "Proveedor!A:C";
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    try {
        const sheetResponse = await fetch(url);
        const sheetData = await sheetResponse.json();
        // Buscar las credenciales
        const proveedores = sheetData.values
            .slice(1)
            .map((row) => ({
                Correo: row[0],
                Empresa: row[1],
                Nro_celular: row[2],
            }))
            .filter((proveedores) =>
                proveedores.Correo === email && proveedores.Empresa === password,
            );

        if (proveedores.length > 0) {
            return new NextResponse(JSON.stringify({ user: { proveedores } }), {
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
    } catch (error) {
        // Manejar el error en la solicitud
        return new NextResponse(JSON.stringify({ error: "Error al buscar las credenciales" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }


}
