"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from "@/components/ui/video"

export default function DemoPage() {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
        const video = document.querySelector("video")
        if (video) {
            if (isPlaying) {
                video.pause()
            } else {
                video.play()
            }
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-16">
            <Card className="w-full mx-auto">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">Demostración de RestaurantOS</CardTitle>
                    <CardDescription>
                        Descubre cómo nuestra plataforma puede transformar la gestión de tu restaurante
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="relative">
                        <Video src="/demo.mp4" />
                    </div>
                    <div className="flex justify-center space-x-4">
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

