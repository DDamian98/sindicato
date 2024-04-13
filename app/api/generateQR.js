import QRCode from 'qrcode';
import fetch from 'node-fetch';

export default async function handler(req, res) {
    // Generar el código QR
    const empleado = req.body;
    const qrData = 'https://example.com' + empleado.Nro_empleado;
    const qrImage = await QRCode.toDataURL(qrData);

    // Suponiendo que la URL de la imagen del QR ya está disponible
    const imageUrl = '/images/qr.jpg';

    // Usar variables de entorno para los IDs y claves API
    const spreadsheetId = "1ksAELSvZG9g4CPA-BVKF7KB3M-j4ZcWnrrkVu6kj1I0";
    const apiKey = "AIzaSyCOH_ihCt7Q8g3NF_1biASZAs-7cOxoE1E";
    const range = "Registro_empleados!K";
    const valueInputOption = "USER_ENTERED";
    const values = [[`=IMAGE("${imageUrl}")`]];

    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=${valueInputOption}&key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values })
    });

    if (response.ok) {
        res.status(200).json({ message: "Código QR insertado con éxito en Google Sheets" });
    } else {
        res.status(500).json({ message: "Error al actualizar Google Sheets" });
    }
}
