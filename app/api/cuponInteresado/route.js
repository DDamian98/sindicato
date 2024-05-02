import { google } from 'googleapis';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    const { Nombre_Empleado, nroEmpleado, Empresa_Empleado, Nro_Telefono, Producto, promocion, empresa, codigo, tipo, Marca } = await req.json();

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'],
        });



        const sheets = google.sheets({ version: 'v4', auth });
        const { data } = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "CuponInteresado!B:L",
        });

        // Cuenta el número de filas
        const numRows = data.values ? data.values.length : 0;

        // Calcula el próximo código
        const nextCode = numRows;
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "CuponInteresado!A:L",
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[numRows, Nombre_Empleado, nroEmpleado, Empresa_Empleado, Nro_Telefono, 'Activo', empresa, Producto, promocion, tipo, codigo, Marca]],
            },
        });
        return new NextResponse(JSON.stringify({ data: response.data }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error(error); // Agrega esta línea

        return new NextResponse(JSON.stringify({ error: "Error al buscar las credenciales" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

}
