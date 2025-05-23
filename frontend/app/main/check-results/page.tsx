import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function CheckResults() {
  return (
    <div className="container py-10 max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Resultados de la Verificación</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Resumen de la Verificación</CardTitle>
          <CardDescription>
            Resultados para: <span className="font-medium">ejemplo@correo.com</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Su correo electrónico ha sido encontrado en 3 filtraciones de datos
                </h3>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Hemos encontrado su correo electrónico en varias filtraciones de datos. Esto significa que su información personal podría estar comprometida.
            </p>
            
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">¿Qué significa esto?</h4>
              <p className="text-sm text-gray-600">
                Cuando su correo aparece en filtraciones de datos, significa que los sitios web o servicios donde estaba registrado han sufrido brechas de seguridad. Los atacantes podrían tener acceso a su correo electrónico, contraseñas y otros datos personales.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/services/detailed-report">
            <Button className="w-full md:w-auto">
              Obtener Informe Detallado
            </Button>
          </Link>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Informe Detallado de Filtraciones</CardTitle>
            <CardDescription>
              Análisis completo de las filtraciones que afectan su correo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Detalles completos de cada filtración</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Qué datos específicos fueron expuestos</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Recomendaciones personalizadas</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="w-full flex items-center justify-between">
              <span className="font-bold text-lg">$19.99</span>
              <Link href="/services/detailed-report">
                <Button variant="outline">Más Información</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Análisis de Huella Digital</CardTitle>
            <CardDescription>
              Descubra qué información suya está disponible públicamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Análisis de su presencia en internet</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Identificación de información sensible expuesta</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Estrategias para proteger su identidad digital</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <div className="w-full flex items-center justify-between">
              <span className="font-bold text-lg">$39.99</span>
              <Link href="/services/digital-footprint">
                <Button variant="outline">Más Información</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      
      <div className="text-center">
        <p className="mb-4 text-sm text-gray-600">
          ¿Quiere verificar otro correo electrónico?
        </p>
        <Link href="/">
          <Button variant="ghost">Volver a la página principal</Button>
        </Link>
      </div>
    </div>
  );
}
