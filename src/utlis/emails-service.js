import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY

export const sendEmail = async (formData) => {
    try {
        if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)
            return await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formData, {
                publicKey: PUBLIC_KEY,
            })
        return { status: 500 }
    } catch (error) {
        return { status: error.status ?? 500 }
    }
}
