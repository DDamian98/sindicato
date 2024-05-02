// pages/api/empleado/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {

}

export async function POST(req) {
    // Ejemplo de manejo de POST
    const { email, password } = await req.json();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const apiKey = process.env.GOOGLE_API_KEY;
    const range = "Registro_empleados!A:J"; // Asumiendo que el email está en la columna A y la contraseña en la columna B
    console.log(email);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    try {
        // Realizar la solicitud a la API de Google Sheets
        const sheetResponse = await fetch(url);
        const sheetData = await sheetResponse.json();
        // Buscar las credenciales
        const empleados = sheetData.values
            .slice(1)
            .map((row) => ({
                MarcaTemporal: row[0],
                Nombre_Apellidos: row[1],
                Empresa: row[2],
                Nro_empleado: row[3],
                Nro_contacto: row[4],
                Nro_celular: row[5],
                Correo: row[6],
                Direccion: row[7],
                Red_social: row[8],
                Qr: row[9],
            }))
            .filter((empleados) =>
                empleados.Correo === email && empleados.Nro_empleado === password,
            );
        if (empleados.length > 0) {
            return new NextResponse(JSON.stringify({ user: { empleados } }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } else {
            // Credenciales no válidas
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
