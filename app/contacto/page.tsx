"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { submitForm } from "../actions/submitForm"

export default function ContactPage() {
    const [state, formAction] = useActionState(submitForm, null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true)
        setFormStatus(null)
        try {
            await formAction(formData)
            setFormStatus({
                type: "success",
                message: "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
            })
        } catch (error) {
            setFormStatus({
                type: "error",
                message: "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-bold">Digitaliza tu Negocio con PedidOS</CardTitle>
                    <CardDescription>
                        Completa el formulario para solicitar una demo o más información sobre nuestra plataforma
                    </CardDescription>
                </CardHeader>
                {formStatus && (
                    <div
                        className={`p-4 mb-4 ${formStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                        {formStatus.message}
                    </div>
                )}
                <form action={handleSubmit}>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Información del Negocio</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="businessName">Nombre del negocio</Label>
                                    <Input id="businessName" name="businessName" placeholder="Ej: Pizzería Bella Napoli" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="businessType">Tipo de negocio</Label>
                                    <Select name="businessType">
                                        <SelectTrigger id="businessType">
                                            <SelectValue placeholder="Selecciona el tipo de negocio" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="restaurant">Restaurante</SelectItem>
                                            <SelectItem value="bakery">Panadería</SelectItem>
                                            <SelectItem value="catering">Catering</SelectItem>
                                            <SelectItem value="healthy-food">Tienda de comida saludable</SelectItem>
                                            <SelectItem value="other">Otro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="location">Ubicación</Label>
                                    <Input id="location" name="location" placeholder="Dirección o ciudad" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="numLocations">Número de locales</Label>
                                    <Select name="numLocations">
                                        <SelectTrigger id="numLocations">
                                            <SelectValue placeholder="Selecciona el número de locales" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1</SelectItem>
                                            <SelectItem value="2-5">2-5</SelectItem>
                                            <SelectItem value="5+">Más de 5</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Contacto del Responsable</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Nombre completo</Label>
                                    <Input id="fullName" name="fullName" placeholder="Ej: Juan Pérez" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo electrónico</Label>
                                    <Input id="email" name="email" type="email" placeholder="Ej: juan@pizzeria.com" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Teléfono (WhatsApp o contacto principal)</Label>
                                <Input id="phone" name="phone" type="tel" placeholder="Ej: +34 123 456 789" required />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Detalles sobre los Pedidos Online</h3>
                            <div className="space-y-2">
                                <Label>¿Cómo tomas pedidos actualmente?</Label>
                                <RadioGroup name="currentOrderMethod" defaultValue="phone">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="phone" id="order-phone" />
                                        <Label htmlFor="order-phone">Teléfono</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="whatsapp" id="order-whatsapp" />
                                        <Label htmlFor="order-whatsapp">WhatsApp</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="social" id="order-social" />
                                        <Label htmlFor="order-social">Redes Sociales</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="none" id="order-none" />
                                        <Label htmlFor="order-none">Sin pedidos online</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="space-y-2">
                                <Label>¿Qué método de pago usas?</Label>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="payment-cash" name="paymentMethods" value="cash" />
                                        <Label htmlFor="payment-cash">Efectivo</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="payment-card" name="paymentMethods" value="card" />
                                        <Label htmlFor="payment-card">Tarjeta</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="payment-transfer" name="paymentMethods" value="transfer" />
                                        <Label htmlFor="payment-transfer">Transferencia</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="payment-other" name="paymentMethods" value="other" />
                                        <Label htmlFor="payment-other">Otro</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>¿Qué buscas mejorar con la plataforma?</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="improve-errors" name="improvementAreas" value="avoid-errors" />
                                        <Label htmlFor="improve-errors">Evitar errores en pedidos</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="improve-sales" name="improvementAreas" value="increase-sales" />
                                        <Label htmlFor="improve-sales">Aumentar ventas</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="improve-kitchen" name="improvementAreas" value="organize-kitchen" />
                                        <Label htmlFor="improve-kitchen">Organizar mejor la cocina</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="improve-payments" name="improvementAreas" value="automate-payments" />
                                        <Label htmlFor="improve-payments">Automatizar pagos</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="improve-experience" name="improvementAreas" value="improve-experience" />
                                        <Label htmlFor="improve-experience">Mejorar la experiencia del cliente</Label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Personalización de la Plataforma</h3>
                            <div className="space-y-2">
                                <Label>¿Quieres tu logo y colores en la app?</Label>
                                <RadioGroup name="wantsBranding" defaultValue="yes">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="branding-yes" />
                                        <Label htmlFor="branding-yes">Sí</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="branding-no" />
                                        <Label htmlFor="branding-no">No, quiero una solución estándar</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="space-y-2">
                                <Label>¿Te gustaría integrar con WhatsApp o redes sociales?</Label>
                                <RadioGroup name="wantsIntegration" defaultValue="yes">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="integration-yes" />
                                        <Label htmlFor="integration-yes">Sí</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="integration-no" />
                                        <Label htmlFor="integration-no">No</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Plan de Acción</h3>
                            <div className="space-y-2">
                                <Label>¿Te gustaría probar una demo gratuita?</Label>
                                <RadioGroup name="wantsDemo" defaultValue="yes">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="demo-yes" />
                                        <Label htmlFor="demo-yes">Sí, quiero probar 14 días gratis</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="demo-no" />
                                        <Label htmlFor="demo-no">No, prefiero más información primero</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="comments">Comentarios adicionales (opcional)</Label>
                                <Textarea
                                    id="comments"
                                    name="comments"
                                    placeholder="Escribe aquí cualquier necesidad específica o pregunta que tengas"
                                    className="min-h-[100px]"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : "Solicitar Demo Gratis"}
                        </Button>
                        <p className="text-sm text-center text-gray-500">
                            Al enviar este formulario, aceptas nuestra{" "}
                            <Link href="/privacy" className="text-primary hover:underline">
                                Política de privacidad
                            </Link>
                            .
                        </p>
                    </CardFooter>
                </form>
            </Card>
            <div className="mt-8 text-center">
                <Button variant="link" asChild>
                    <Link href="/" className="text-sm text-gray-500 hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver a la página principal
                    </Link>
                </Button>
            </div>
        </div>
    )
}

