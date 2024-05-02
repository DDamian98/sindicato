import { google } from 'googleapis';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    const { codigo, Codigo_Cupon, Nombre_Empleado, empleado, Empresa_Empleado, empresa, Tipo, Producto, Promocion, todayString } = await req.json();

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY,
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'],
        });



        const sheets = google.sheets({ version: 'v4', auth });
        const { data } = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "CuponVendido!A:I",
        });

        const numRows = data.values ? data.values.length : 0;

        const nextCode = numRows;
        console.log('filas:', nextCode);
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "CuponVendido!A:I",
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[numRows, Codigo_Cupon, Nombre_Empleado, empleado, Empresa_Empleado, empresa, Tipo, Producto, Promocion, todayString, codigo]],
            },
        });
        // Cambiar el estado del cuponEmpeado
        const { data: dataInteresado } = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "CuponEmpleado!A:I",
        });

        const rowIndex = dataInteresado.values.findIndex(row => row[0] === codigo);

        if (rowIndex !== -1) {
            await sheets.spreadsheets.values.batchUpdate({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                resource: {
                    valueInputOption: 'USER_ENTERED',
                    data: [{
                        range: `CuponEmpleado!I${rowIndex + 1}`,
                        values: [['Inactivo']],
                    }],
                },
            });
        }
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
