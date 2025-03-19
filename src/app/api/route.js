import { NextResponse } from 'next/server';

export async function POST(req) {
    const { name, email, message, token } = await req.json();

    // Validar reCAPTCHA
    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
        return NextResponse.json({ success: false, error: "reCAPTCHA failed" });
    }

    // Aquí puedes enviar el email con nodemailer o cualquier servicio
    console.log("Mensaje recibido:", { name, email, message });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
}