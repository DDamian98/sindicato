import { createCanvas, loadImage } from 'canvas';
import QRCode from 'qrcode';

export default async function handler(req, res) {
    // Obtener parámetros del empleado desde la petición
    const { nroEmpleado, nombre_Apellidos } = req.query;

    try {
        // Generar datos QR
        const qrData = `http://www.ctmseccion1.com/Dashboard/Usuarios/${nroEmpleado}`;
        const qrDataURL = await QRCode.toDataURL(qrData, { margin: 1 });

        // Cargar la imagen de fondo
        const backgroundImage = await loadImage('./public/images/QR_CTM.jpg');
        const canvas = createCanvas(backgroundImage.width, backgroundImage.height);
        const ctx = canvas.getContext('2d');

        // Dibujar la imagen de fondo
        ctx.drawImage(backgroundImage, 0, 0);

        // Cargar y dibujar el código QR
        const qrImage = await loadImage(qrDataURL);
        const x = (canvas.width - qrImage.width) / 2;
        const y = (canvas.height - qrImage.height) / 2;
        ctx.drawImage(qrImage, x, y);

        // Convertir el canvas a imagen y enviar como respuesta
        const buffer = canvas.toBuffer('image/png');
        res.setHeader('Content-Type', 'image/png');
        res.send(buffer);
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).send('Error generating QR code');
    }
}
