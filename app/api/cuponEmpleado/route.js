import { google } from 'googleapis';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    const { Codigo_Interesado, Nombre_Empleado, Nro_Empleado, Empresa_Empleado, Nro_Telefono, Empresa_Cupon, Producto, Promocion, Tipo, Codigo_Cupon, Marca } = await req.json();

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkqGj7VTr2osho\nPqd03QRHRJL020l1Z8O4aHlMFHpAiWqdIkwFjedat44eiWcmEFn1hp/PW9JeJtMI\nUl6e1H2K9EUm4pe5aoQexJHGyQDqQt/1qg0rUeqfhGx5esfjV8OMFBuHbT6MKuMQ\nAl8mDIVIT31tK1TQtPmNhMIyLuNjxXojrAErRI7B/l7Hr6Kyt2I0vn1vxSGBre+n\nTyZvNViyP8xlNbkXDbgW3r077ZhwmB8oqm64frdAWd4K5qSv9b6N1QKAgkaqmYCH\nQ9smODQKdEgIRQKZRVrROsCYZLOF8CDegSiyCj5+BvpgMiKwlltjBqmCWCUwPZPP\n6kFGt7C1AgMBAAECgf8F4Rl4IRsZSqZmkCnvMgMP3CxHNyuFZkCOqgu9VsFV3gtD\nHwx+QjSdrLFZm0+LaqX6NHYg7dPJfTVT91J+ijq5fcUtinxXGmLE4F4zlHnGgdb4\ns0cbNcAgcgGXcMURzpPs5rOgkytBAjkNsuK+fuAsLKpvl2XOJT0TBzmiFb23Wl+I\n8khKM57dUAGWzdnZAt+aTLwO3j0WbIfqG6Q0oFnI7xq1VwtKWaGWdEaDaKK88dCo\nH9eVJjayz9t09fud3PnN3euagGLN842DOC60h06k92eXDCreXgBVIEkX0QbhPL/Z\n1mHWliRPNGwPvBN9JofNEl/bRn9mRVIkBJIMYbECgYEA06SILWpGZ5I7Cvhd4omh\npPJO94YreNZ4tYq9DVz5ifzFIvlyKu4mnusm43JXtZToyjXqvY1coIWFV1pUovlZ\nKk1Kz1/ddO9d8vInEd9OnmiLBiCpaxpHWGyqMABof6+PfrcatFGwyP7BC60iROjq\n+T9e7blFrNdoeMl4kOcUfXECgYEAxyr0ftj9m1dRUr8eN+YqZ/WpKafWWJCBN0DH\nx7qpfa9qKO9LsnqJTxrQbt/MBCxPAWcDs8XqkBwBryc3JZrX25AuHMm5GZ1q1P0h\nQQMixuQ1iWTPUgwWqCUqWM8tKiNAXwO+IMkafqaTmBAOLVHOvX8e75ExSVArOgT6\nWZwsVYUCgYEAm0cEzmVBoG2OOh89Kp8V5KIOw9ZBgNfCGlffGrXTM6UrsdxYIh02\nYrRehNN4fHXzUaC7SDU192PfD9brb+MHw1yP/ZP1M/0G7d8yQQ+Ya+qBzY4bHsRa\nAgs/1hYGlV/mJO8Mfa3Nybn3QqzVDr/g3dvbtwiOkSA9uxj+BzozM1ECgYEAlxNO\nQqn2NU8WsN2n3l8I67K8joxxWtzCJ1dMM4Sz7FKTBFn/4XJxlT+Ru4inCMNTaozp\nkgQe2RFldacZfbzm3/WOBOg/L97omocoIlhumM+ijIWbfXEN/p2ycYs1hzEWMvxz\nzAq/vjI84qvLFTVozPUQUkigSiw1nd0IydBdEMECgYBt5JlaBRBh9YMHmckvgSIC\nUbS6b3Eu6STR98Ued1JaPm12BkzV000taqKuR043S2SSLRc9yI+GfLkp6jAb9qhx\nH2CDHpr5+hv6cKjLkms/Uh2CeEbzaAlpgw97DMGh8erbFkr9GucFWH660gwZhzGp\n6ybUQTMsStwpF9s8A6b/+Q==\n-----END PRIVATE KEY-----\n"
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
