"use client"
import { ArrowRight, ShoppingBag, Star, Utensils, CheckCircle, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from "@/components/ui/video"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Utensils className="h-6 w-6" />
            <span>PedidOS</span>
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" className="px-2 py-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden z-50">
              <nav className="flex flex-col p-4">
                <Link
                  href="#features"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                >
                  Características
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                >
                  Cómo Funciona
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                >
                  Precios
                </Link>
              </nav>
            </div>
          )}
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Características
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Precios
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section con diseño asimétrico y elementos visuales */}
        <section className="relative overflow-hidden py-8 md:py-16 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background z-0" />
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 h-[600px] w-[600px] opacity-20 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute left-0 bottom-0 h-[600px] w-[600px] opacity-20 bg-secondary/20 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-24 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="font-heading text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Digitaliza tu Negocio y {" "}
                    <span className="bg-gradient-to-br from-primary to-primary/80 bg-clip-text text-transparent">
                      Aumenta tus Ventas
                    </span>
                  </h1>
                  <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
                    Ofrecemos una solución simple y efectiva para que restaurantes, casas de comida, panaderías y servicios de catering gestionen sus pedidos de manera profesional y sin complicaciones.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="group w-full sm:w-auto py-3 px-6 text-lg sm:text-base" asChild>
                    <Link href="/contacto">
                      Comenzar Prueba Gratis
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto py-3 px-6 text-lg sm:text-base"
                    asChild
                  >
                    <Link href="/demo">Ver Demo</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    <div className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <Image
                        src={`/restaurant.png`}
                        alt={`Usuario`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <Image
                        src={`/restaurant2.png`}
                        alt={`Usuario`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <Image
                        src={`/restaurant3.png`}
                        alt={`Usuario`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <span>+1,000 restaurantes confían en nosotros</span>
                </div>
              </div>
              <div className="relative mx-auto aspect-square max-w-[500px] lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl" />
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/chef.svg"
                    alt="Dashboard Preview"
                    width={600}
                    height={600}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section con diseño de grid y tarjetas destacadas */}
        <section
          id="features"
          className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Características que <span className="text-primary">Potencian tu Negocio</span>
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre cómo nuestra plataforma transforma la gestión de tu restaurante, mejorando la eficiencia y
                aumentando tus ventas.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12 lg:space-y-16">
              {[
                {
                  title: "Diseño Personalizado para tu Marca",
                  description:
                    "Crea una experiencia única para tus clientes con una plataforma web que refleja la identidad de tu negocio. Personaliza colores, logos y estilos para destacar entre la competencia.",
                  image: "/brand.svg",
                  benefits: [
                    "Interfaz intuitiva y fácil de personalizar",
                    "Plantillas profesionales adaptadas a restaurantes",
                    "Actualización en tiempo real de cambios de diseño",
                  ],
                },
                {
                  title: "Pagos Seguros y Sin Comisiones",
                  description:
                    "Ofrece a tus clientes la tranquilidad de pagos seguros y mantén el control total de tus ingresos. Nuestra plataforma elimina intermediarios y comisiones abusivas, maximizando tus ganancias.",
                  image: "/Payment.svg",
                  benefits: [
                    "Integración con múltiples pasarelas de pago",
                    "Transacciones encriptadas y seguras",
                    "Reportes detallados de ventas y transacciones",
                  ],
                },
                {
                  title: "Fácil de Usar y Rápida Implementación",
                  description:
                    "Pon en marcha tu sistema de pedidos online en cuestión de minutos. Nuestra plataforma intuitiva se adapta a cualquier dispositivo, asegurando una experiencia fluida tanto para ti como para tus clientes.",
                  image: "/easy.svg",
                  benefits: [
                    "Configuración guiada paso a paso",
                    "Compatibilidad con móviles, tablets y ordenadores",
                    "Actualizaciones automáticas y sin interrupciones",
                  ],
                },
                {
                  title: "Panel de Control con Análisis en Tiempo Real",
                  description:
                    "Toma decisiones informadas con nuestro potente panel de control. Accede a métricas clave sobre ventas, pedidos y comportamiento de clientes para optimizar tu negocio y aumentar la rentabilidad.",
                  image: "/analytics.svg",
                  benefits: [
                    "Visualización de datos en tiempo real",
                    "Informes personalizables y exportables",
                    "Insights accionables para mejorar el rendimiento",
                  ],
                },
                {
                  title: "Optimiza el Flujo de Trabajo y Aumenta la Eficiencia",
                  description:
                    "Simplifica las operaciones de tu restaurante con un sistema que reduce errores, evita confusiones y mejora la organización en la cocina. Aumenta la satisfacción de tus clientes y empleados.",
                  image: "/Financial-Management.svg",
                  benefits: [
                    "Gestión de pedidos centralizada",
                    "Notificaciones en tiempo real para el personal",
                    "Integración con sistemas de punto de venta (POS)",
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
                >
                  <div className="flex-1 space-y-8">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 relative overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-auto object-cover transition-all duration-300 hover:shadow-lg hover:scale-[1.02] max-w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section con diseño moderno y visual */}
        <section id="how-it-works" className="relative overflow-hidden bg-muted/40 py-8 md:py-16 lg:py-24">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 opacity-20 bg-primary/20 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                ¿Cómo Funciona?
              </h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl">
                Mira este breve video para entender cómo nuestra plataforma simplifica la gestión de pedidos
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Video src="/video.mp4" />
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="group w-full sm:w-auto py-3 px-6 text-lg sm:text-base" asChild>
                <Link href="/contacto">
                  Comienza ahora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section con diseño moderno y mejorado */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 py-8 md:py-16 lg:py-24">
          <div className="absolute inset-0">
            <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Testimonios
              </h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl">
                Lo que dicen nuestros clientes satisfechos
              </p>
            </div>
            <div className="mx-auto grid gap-8 md:max-w-[64rem] md:grid-cols-2">
              {[
                {
                  quote:
                    "Desde que implementamos la plataforma, nuestros pedidos han aumentado un 40%. Ya no perdemos ventas por mensajes o llamadas no respondidas.",
                  author: "Carlos",
                  role: "Dueño de La Casa",
                  image: "/casa.png",
                },
                {
                  quote:
                    "Ahora nuestros clientes pueden programar sus pedidos sin tener que llamarnos. Es fácil, rápido y nos ha permitido atender mejor en la cocina.",
                  author: "Andrea",
                  role: "Fundadora de La Parilla",
                  image: "/parrilla.png",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <blockquote className="text-lg italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section con diseño moderno */}
        <section id="pricing" className="relative overflow-hidden bg-muted/40 py-8 md:py-16 lg:py-24">

          <div className="absolute inset-0">
            <div className="absolute right-0 bottom-0 h-[500px] w-[500px] opacity-20 bg-secondary/20 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Comienza Hoy Mismo
              </h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl">
                Prueba gratis por 14 días. Sin compromiso. Sin comisiones ocultas.
              </p>
            </div>
            <div className="mx-auto grid max-w-full gap-8 md:max-w-5xl md:grid-cols-2">
              <Card className="relative overflow-hidden">
                <div className="absolute right-0 top-0 h-[200px] w-[200px] opacity-20 bg-primary/20 rounded-full blur-3xl" />
                <CardHeader>
                  <CardTitle>Plan Básico</CardTitle>
                  <CardDescription>Ideal para comenzar con los pedidos online</CardDescription>
                  <div className="mt-4 text-4xl font-bold">90€/mes</div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4 text-sm">
                    {[
                      "Menú digital personalizado",
                      "Pagos online",
                      "App Web para gestión",
                      "Soporte técnico",
                      "Estadísticas básicas",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="flex flex-col justify-center gap-4">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/dash.png"
                    alt="Dashboard Preview"
                    width={500}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="group w-full sm:w-auto py-3 px-6 text-lg sm:text-base" asChild>
                    <Link href="/contacto">
                      Comenzar Prueba Gratuita
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto py-3 px-6 text-lg sm:text-base" asChild>
                    <Link href="/demo">Solicitar Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 md:px-12 md:py-24">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
              <div className="absolute right-0 top-0 h-[500px] max-width-[500px] opacity-20 bg-white rounded-full blur-3xl" />
              <div className="absolute left-0 bottom-0 h-[500px] max-width-[500px] opacity-20 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para digitalizar tu restaurante?
              </h2>
              <p className="mt-4 text-lg text-white/90 sm:text-xl">
                Únete a más de 2,000 restaurantes que ya confían en nosotros
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group w-full sm:w-auto py-3 px-6 text-lg sm:text-base"
                  asChild
                >
                  <Link href="/contacto">
                    Comenzar Ahora
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto py-3 px-6 text-lg sm:text-base bg-white hover:bg-white/90"
                  asChild
                >
                  <Link href="/demo">Ver Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Utensils className="h-6 w-6" />
              <span>RestaurantOS</span>
            </Link>
            <p className="text-sm text-muted-foreground">Soluciones digitales para restaurantes modernos</p>
          </div>
          {[
            {
              title: "Producto",
              links: ["Características", "Precios", "Demo", "Guías"],
            },
            {
              title: "Compañía",
              links: ["Acerca de", "Blog", "Carreras", "Contacto"],
            },
            {
              title: "Legal",
              links: ["Términos", "Privacidad", "Cookies"],
            },
          ].map((column, i) => (
            <div key={i} className="space-y-4">
              <h3 className="font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 py-6 md:h-24 md:flex-row md:items-center md:justify-between md:py-0">
          <p className="text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 RestaurantOS. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {["twitter", "github", "facebook"].map((social) => (
              <Link key={social} href={`#${social}`} className="text-muted-foreground hover:text-primary">
                <span className="sr-only">{social}</span>
                {/* Aquí irían los iconos de redes sociales */}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

