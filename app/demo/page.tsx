"use client"


import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from "@/components/ui/video"

export default function DemoPage() {



    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">Demostración de RestaurantOS</CardTitle>
                    <CardDescription>
                        Descubre cómo nuestra plataforma puede transformar la gestión de tu restaurante
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="relative">
                        <Video src="/demo.mp4" poster="/placeholder.svg?height=400&width=800" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Características destacadas:</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Gestión de pedidos en tiempo real</li>
                            <li>Personalización del menú digital</li>
                            <li>Integración con sistemas de pago</li>
                            <li>Análisis de ventas y tendencias</li>
                            <li>Gestión de inventario y proveedores</li>
                        </ul>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Button asChild>
                            <Link href="/register">Comenzar prueba gratuita</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/contacto">Solicitar más información</Link>
                        </Button>
                    </div>
                </CardContent>
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

