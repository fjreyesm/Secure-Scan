"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Home() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!email) {
      setError('Por favor, ingrese un correo electrónico');
      return;
    }
    
    if (!consent) {
      setError('Debe aceptar los términos de consentimiento para continuar');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      // Llamada a la API del backend usando la URL pública
      const response = await fetch('http://localhost:3001/api/hibp/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, consent }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al verificar el correo electrónico');
      }
      
      setResult(data.data);
    } catch (error) {
      setError(error.message || 'Error al verificar el correo electrónico');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Plataforma de Servicios de Seguridad Digital</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto border border-blue-100">
          <h2 className="text-2xl font-semibold mb-4 text-center">Verifique si su correo electrónico ha sido comprometido</h2>
          <p className="mb-6 text-gray-600">
            Nuestra herramienta gratuita le permite verificar si su correo electrónico ha sido expuesto en filtraciones de datos conocidas.
          </p>
          
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {result ? (
            <div className="mb-6">
              <Alert className={result.isCompromised ? "bg-red-50 border-red-200 text-red-800" : "bg-green-50 border-green-200 text-green-800"}>
                <AlertTitle className="text-lg font-semibold">
                  {result.isCompromised 
                    ? `¡Su correo ha sido comprometido en ${result.breachCount} filtraciones!` 
                    : '¡Buenas noticias! Su correo no aparece en filtraciones conocidas'}
                </AlertTitle>
                <AlertDescription>
                  {result.isCompromised 
                    ? 'Recomendamos cambiar sus contraseñas y considerar nuestro informe detallado para más información.' 
                    : 'Sin embargo, siempre es recomendable mantener buenas prácticas de seguridad.'}
                </AlertDescription>
              </Alert>
              
              {result.isCompromised && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Filtraciones detectadas:</h3>
                  <ul className="space-y-2">
                    {result.breaches.map((breach, index) => (
                      <li key={index} className="p-3 bg-red-50 border border-red-100 rounded-md">
                        <p className="font-medium">{breach.Title || breach.Name}</p>
                        <p className="text-sm text-gray-600">Fecha: {new Date(breach.BreachDate).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-600">Datos comprometidos: {breach.DataClasses.join(', ')}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex justify-center">
                    <Link href="/services/detailed-report">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Obtener Informe Detallado
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setEmail('');
                    setConsent(false);
                    setResult(null);
                  }}
                >
                  Verificar otro correo
                </Button>
              </div>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <Input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-start space-x-2 mt-4">
                <Checkbox 
                  id="consent" 
                  className="mt-1"
                  checked={consent}
                  onCheckedChange={setConsent}
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Acepto que mi correo sea guardado solo para enviarme información de seguridad de mi cuenta. No será cedido a terceros.
                </label>
              </div>
              
              <div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? 'Verificando...' : 'Verificar Ahora'}
                </Button>
              </div>
            </form>
          )}
          
          <div className="mt-6 text-sm text-gray-500">
            <p>
              Realizamos esta verificación de forma segura y confidencial. 
              <Link href="/privacy" className="text-blue-600 hover:underline ml-1">
                Política de Privacidad
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-blue-500">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Informe Detallado de Filtraciones</h3>
            <p className="text-gray-600 mb-4">
              Obtenga un análisis completo de las filtraciones que afectan su correo electrónico, incluyendo qué datos fueron expuestos y recomendaciones personalizadas.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">$19.99</span>
              <Link 
                href="/services/detailed-report" 
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Más Información
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-l-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Análisis de Huella Digital</h3>
            <p className="text-gray-600 mb-4">
              Descubra qué información personal está disponible públicamente en internet y cómo puede proteger mejor su identidad digital.
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">$39.99</span>
              <Link 
                href="/services/digital-footprint" 
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
              >
                Más Información
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">¿Por qué es importante proteger su información?</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <p className="text-gray-600 mb-4">
              Las filtraciones de datos pueden exponer información sensible como contraseñas, datos financieros y personales. 
              Esto puede llevar a robo de identidad, fraudes financieros y otros problemas de seguridad.
            </p>
            <p className="text-gray-600">
              Nuestros servicios le ayudan a identificar riesgos y tomar medidas preventivas para proteger su información digital.
            </p>
            <div className="mt-4 text-center">
              <Link 
                href="/blog" 
                className="text-blue-600 hover:underline flex items-center justify-center"
              >
                <span>Visite nuestro blog para aprender más sobre seguridad digital</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
