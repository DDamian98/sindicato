import { google } from 'googleapis';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    const { Codigo_Interesado, Nombre_Empleado, Nro_Empleado, Empresa_Empleado, Nro_Telefono, Empresa_Cupon, Producto, Promocion, Tipo, Codigo_Cupon, Marca } = await req.json();

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
            range: "CuponEmpleado!B:I",
        });

        // Cuenta el número de filas
        const numRows = data.values ? data.values.length : 0;

        // Calcula el próximo código
        const nextCode = numRows;
        console.log('filas:', nextCode);
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "CuponEmpleado!A:L",
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[numRows, 'Cupon', Tipo, Producto, Promocion, Empresa_Cupon, Nro_Empleado, Empresa_Empleado, 'Activo', Marca, Codigo_Cupon, Nombre_Empleado]],
            },
        });

        // Obtén los datos de la hoja "CuponInteresado"
        const { data: dataInteresado } = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "CuponInteresado!A:L",
        });

        // Busca la fila que contiene el `Codigo_Interesado` que quieres actualizar
        const rowIndex = dataInteresado.values.findIndex(row => row[0] === Codigo_Interesado);

        if (rowIndex !== -1) {
            // Usa el método `batchUpdate` para actualizar el estado de esa fila a "Inactivo"
            await sheets.spreadsheets.values.batchUpdate({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                resource: {
                    valueInputOption: 'USER_ENTERED',
                    data: [{
                        range: `CuponInteresado!F${rowIndex + 1}`,
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
