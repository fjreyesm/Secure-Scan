import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function DigitalFootprint() {
  return (
    <div className="container py-10 max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Análisis de Huella Digital</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">¿Qué incluye este servicio?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Análisis de presencia en internet</p>
                <p className="text-sm text-gray-600 mt-1">Identificamos dónde aparece su información personal en internet, incluyendo redes sociales, directorios y bases de datos públicas.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Evaluación de riesgos</p>
                <p className="text-sm text-gray-600 mt-1">Analizamos qué información podría ser utilizada por ciberdelincuentes y el nivel de exposición de sus datos personales.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Mapa de exposición digital</p>
                <p className="text-sm text-gray-600 mt-1">Creamos una visualización clara de dónde está expuesta su información y cómo está interconectada.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <p className="font-medium">Plan de acción personalizado</p>
                <p className="text-sm text-gray-600 mt-1">Proporcionamos estrategias específicas para reducir su exposición digital y proteger su privacidad.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <Card className="h-fit">
          <CardHeader className="bg-green-50 rounded-t-lg">
            <CardTitle>Análisis de Huella Digital</CardTitle>
            <CardDescription>
              Descubra qué información suya está disponible públicamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-3xl font-bold mb-2 text-green-600">$39.99</p>
              <p className="text-sm text-gray-600">Pago único, sin suscripciones</p>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Juan Pérez"
                  required
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
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
        <h2 className="text-2xl font-semibold mb-4 text-green-700">¿Por qué es importante conocer su huella digital?</h2>
        <p className="mb-4">
          Su información personal disponible en internet puede ser utilizada para:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Crear perfiles detallados sobre usted sin su consentimiento</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Facilitar ataques de ingeniería social y phishing dirigidos</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Afectar su reputación personal y profesional</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Comprometer su privacidad y seguridad personal</span>
          </li>
        </ul>
        <p>
          Conocer y gestionar su huella digital es esencial para proteger su identidad en la era digital.
        </p>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6 text-green-700">Preguntas Frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2 text-green-600">¿Qué información necesitan para el análisis?</h3>
            <p className="text-sm text-gray-600">
              Principalmente su nombre completo y correo electrónico. Opcionalmente, puede proporcionar otros identificadores como perfiles de redes sociales para un análisis más completo.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2 text-green-600">¿Cuánto tiempo tarda en generarse el análisis?</h3>
            <p className="text-sm text-gray-600">
              El análisis completo tarda aproximadamente 24-48 horas, ya que incluye investigación manual además de procesos automatizados.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2 text-green-600">¿Cómo recibo los resultados?</h3>
            <p className="text-sm text-gray-600">
              Los resultados se envían a su correo electrónico en formato PDF y también estarán disponibles en su cuenta de usuario en nuestra plataforma.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium mb-2 text-green-600">¿Pueden ayudarme a eliminar información no deseada?</h3>
            <p className="text-sm text-gray-600">
              El informe incluye instrucciones detalladas sobre cómo solicitar la eliminación de información. Para casos complejos, ofrecemos servicios adicionales de asistencia.
            </p>
          </div>
        </div>
        
        <Link href="/">
          <Button variant="outline" className="hover:text-green-600">Volver a la página principal</Button>
        </Link>
      </div>
    </div>
  );
}
