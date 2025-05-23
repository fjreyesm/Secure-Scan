import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function DetailedReport() {
  return (
    <div className="container py-10 max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Informe Detallado de Filtraciones</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Análisis completo de filtraciones</p>
                <p className="text-sm text-gray-600 mt-1">Identificamos todas las filtraciones de datos donde su correo electrónico ha sido expuesto.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Detalles de datos expuestos</p>
                <p className="text-sm text-gray-600 mt-1">Revelamos qué tipo de información personal fue comprometida en cada filtración (contraseñas, nombres, teléfonos, etc.).</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Cronología de incidentes</p>
                <p className="text-sm text-gray-600 mt-1">Proporcionamos fechas de cada filtración para entender cuándo ocurrieron los incidentes.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Recomendaciones personalizadas</p>
                <p className="text-sm text-gray-600 mt-1">Ofrecemos pasos específicos para proteger su información basados en los datos comprometidos.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <Card className="h-fit">
          <CardHeader className="bg-blue-50 rounded-t-lg">
            <CardTitle>Informe Detallado de Filtraciones</CardTitle>
            <CardDescription>
              Análisis completo de las filtraciones que afectan su correo electrónico
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-3xl font-bold mb-2 text-blue-600">$19.99</p>
              <p className="text-sm text-gray-600">Pago único, sin suscripciones</p>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico a Verificar
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Comprar Ahora
              </Button>
            </form>
            
            <div className="mt-4 text-xs text-center text-gray-500">
              <p>Pago seguro mediante Stripe/PayPal</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-12 border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">¿Por qué es importante este informe?</h2>
        <p className="mb-4">
          Las filtraciones de datos pueden exponer información sensible que los ciberdelincuentes utilizan para:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Robo de identidad y fraude financiero</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Acceso no autorizado a sus cuentas personales</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Ataques de phishing dirigidos con información personal</span>
          </li>
        </ul>
        <p>
          Conocer exactamente qué información suya ha sido comprometida es el primer paso para protegerse efectivamente.
        </p>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2 text-blue-600">¿Cómo se genera el informe?</h3>
            <p className="text-sm text-gray-600">
              Utilizamos bases de datos de filtraciones conocidas y verificadas para analizar dónde aparece su correo electrónico y qué información fue expuesta.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2 text-blue-600">¿Cuánto tiempo tarda en generarse?</h3>
            <p className="text-sm text-gray-600">
              El informe se genera automáticamente y estará disponible para su descarga inmediatamente después del pago.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2 text-blue-600">¿Es un servicio de suscripción?</h3>
            <p className="text-sm text-gray-600">
              No, es un pago único por informe. No hay cargos recurrentes ni suscripciones ocultas.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2 text-blue-600">¿Qué hago después de recibir el informe?</h3>
            <p className="text-sm text-gray-600">
              El informe incluye recomendaciones personalizadas que debe seguir para proteger su información. También puede contactarnos para asesoramiento adicional.
            </p>
          </div>
        </div>
        
        <Link href="/">
          <Button variant="outline" className="hover:text-blue-600">Volver a la página principal</Button>
        </Link>
      </div>
    </div>
  );
}
