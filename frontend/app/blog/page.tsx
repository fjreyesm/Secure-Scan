import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  return (
    <div className="container py-10 max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog de Seguridad Digital</h1>
      
      <div className="mb-10">
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Artículos educativos sobre seguridad digital, protección de datos y mejores prácticas para mantener su información segura en el mundo digital.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-purple-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Contraseñas seguras: La primera línea de defensa</CardTitle>
              <CardDescription>Publicado el 15 de mayo, 2025</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 line-clamp-3">
                Aprenda a crear contraseñas robustas y a implementar prácticas seguras para proteger sus cuentas digitales. Descubra por qué los gestores de contraseñas son esenciales en la era digital actual.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/posts/contrasenas-seguras" className="text-purple-600 hover:text-purple-800 font-medium">
                Leer artículo completo →
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Cómo identificar y evitar ataques de phishing</CardTitle>
              <CardDescription>Publicado el 8 de mayo, 2025</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 line-clamp-3">
                Los ataques de phishing son cada vez más sofisticados. Aprenda a reconocer las señales de advertencia y protegerse contra estos intentos de robo de información personal.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/posts/evitar-phishing" className="text-blue-600 hover:text-blue-800 font-medium">
                Leer artículo completo →
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">La importancia de la autenticación de dos factores</CardTitle>
              <CardDescription>Publicado el 1 de mayo, 2025</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 line-clamp-3">
                Descubra cómo la autenticación de dos factores añade una capa adicional de seguridad a sus cuentas y por qué debería activarla en todos sus servicios importantes.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/posts/autenticacion-dos-factores" className="text-green-600 hover:text-green-800 font-medium">
                Leer artículo completo →
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-orange-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">¿Qué hacer si sus datos han sido filtrados?</CardTitle>
              <CardDescription>Publicado el 25 de abril, 2025</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 line-clamp-3">
                Guía paso a paso sobre las acciones inmediatas que debe tomar si descubre que su información personal ha sido comprometida en una filtración de datos.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/posts/datos-filtrados-que-hacer" className="text-orange-600 hover:text-orange-800 font-medium">
                Leer artículo completo →
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-red-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Riesgos de privacidad en redes sociales</CardTitle>
              <CardDescription>Publicado el 18 de abril, 2025</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 line-clamp-3">
                Las redes sociales pueden exponer más información personal de la que cree. Aprenda a configurar adecuadamente su privacidad y a controlar su huella digital.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/posts/privacidad-redes-sociales" className="text-red-600 hover:text-red-800 font-medium">
                Leer artículo completo →
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Navegación segura: Proteja sus datos mientras navega</CardTitle>
              <CardDescription>Publicado el 10 de abril, 2025</CardDescription>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 line-clamp-3">
                Consejos prácticos para navegar de forma segura, incluyendo el uso de VPNs, navegación privada y extensiones de seguridad que protegen su información.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/blog/posts/navegacion-segura" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Leer artículo completo →
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" className="mr-2">Artículos anteriores</Button>
          <Button variant="outline">Siguiente página</Button>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <h2 className="text-xl font-semibold mb-4 text-blue-700 text-center">Suscríbase a nuestro boletín</h2>
        <p className="mb-6 text-gray-600 text-center">
          Reciba los últimos artículos y consejos de seguridad directamente en su bandeja de entrada.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Su correo electrónico" 
            className="px-4 py-2 border border-gray-300 rounded-md flex-grow"
          />
          <Button className="bg-blue-600 hover:bg-blue-700">Suscribirse</Button>
        </div>
      </div>
    </div>
  );
}
