// pages/api/empleado/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
    const { email, password } = await req.json();
    const spreadsheetId = '1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0';
    const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
    const range = "Registro_empleados!A:J"; // Asumiendo que el email está en la columna A y la contraseña en la columna B

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    try {
        // Realizar la solicitud a la API de Google Sheets
        const sheetResponse = await fetch(url);
        const sheetData = await sheetResponse.json();
        console.log('Datos de la hoja de cálculo:', sheetData);
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
                empleados.Correo === email,
            );
        console.log('hola');
        if (empleados) {
            console.log('Usuario autenticado:', sheetData);
            const correo = empleados.Correo;
            return new NextResponse(JSON.stringify({ user: { correo } }), {
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

export async function POST(req) {
    // Ejemplo de manejo de POST
    const { email, password } = await req.json();
    const spreadsheetId = '1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0';
    const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
    const range = "Registro_empleados!A:J"; // Asumiendo que el email está en la columna A y la contraseña en la columna B
    console.log(email);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    try {
        // Realizar la solicitud a la API de Google Sheets
        const sheetResponse = await fetch(url);
        const sheetData = await sheetResponse.json();
        console.log('Datos de la hoja de cálculo:', sheetData);
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
                empleados.Correo === email && empleados.Correo === password,
            );
        console.log('Usuario autenticado123123:', empleados);
        if (empleados) {
            console.log('Usuario autenticado:', empleados);
            const correo = empleados.Correo;
            console.log("Correo del usuario", correo);
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