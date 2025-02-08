"use server"

import { revalidatePath } from "next/cache"
import clientPromise from "@/lib/mongodb"

type FormState = {
    success: boolean;
    message: string;
} | null;

export async function submitForm(prevState: FormState, formData: FormData): Promise<{ success: boolean; message: string }> {
    try {
        const client = await clientPromise
        const db = client.db("restaurantOS")

        const data = {
            businessName: formData.get("businessName"),
            businessType: formData.get("businessType"),
            location: formData.get("location"),
            numLocations: formData.get("numLocations"),
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            currentOrderMethod: formData.get("currentOrderMethod"),
            paymentMethods: formData.getAll("paymentMethods"),
            improvementAreas: formData.getAll("improvementAreas"),
            wantsBranding: formData.get("wantsBranding"),
            wantsIntegration: formData.get("wantsIntegration"),
            wantsDemo: formData.get("wantsDemo"),
            comments: formData.get("comments"),
            submittedAt: new Date(),
        }

        await db.collection("contactForms").insertOne(data)

        revalidatePath('/contacto')
        return { success: true, message: 'Formulario enviado con éxito' }
    } catch (e) {
        console.error(e)
        return { success: false, message: 'Error al enviar el formulario' }
    }
}
