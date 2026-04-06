const nodemailer = require('nodemailer');

const sendContactEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    // SMTP Configuration
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Check if the credentials are still placeholders
    const isPlaceholder = !process.env.SMTP_PASS || process.env.SMTP_PASS === 'your_app_password';

    try {
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_EMAIL_RECEIVER || 'admin@deckplay.com',
            subject: `New Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message}</p>`,
        };

        if (isPlaceholder) {
            console.warn('⚠️ SMTP Error: Detected Placeholder Password. Running in DEMO MODE.');
            console.log('--- EMAIL SIMULATION ---');
            console.log(`To: ${mailOptions.to}`);
            console.log(`From: ${mailOptions.from}`);
            console.log(`Content: ${mailOptions.text}`);
            console.log('------------------------');
            
            // Artificial delay to mimic network latency
            await new Promise(resolve => setTimeout(resolve, 800));
            return res.status(200).json({ 
                message: 'Demo: Message received successfully (Dev Mode)',
                demo: true 
            });
        }

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('❌ SMTP Error:', error.message);
        
        // If it's a 535 error (bad creds), we still return 200 for the frontend demo but log specific guidance
        if (error.responseCode === 535) {
            console.error('💡 GUIDANCE: You need to generate a 16-digit App Password at https://myaccount.google.com/apppasswords');
            return res.status(200).json({ 
                message: 'Demo: Message received, though SMTP auth failed (Check server logs)', 
                demo: true 
            });
        }

        res.status(500).json({ error: 'Failed to send email. Check SMTP settings.' });
    }
};

module.exports = { sendContactEmail };
