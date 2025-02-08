"use server"

import { revalidatePath } from "next/cache"
import clientPromise from "@/lib/mongodb"

export async function submitForm(prevState: any, formData: FormData): Promise<void> {
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

        revalidatePath("/contacto")
    } catch (e) {
        console.error(e)
        throw new Error("Error al enviar el formulario")
    }
}

