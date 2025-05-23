import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="container py-10 max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Panel de Control</h1>
          <p className="text-gray-600">Bienvenido de nuevo, Usuario</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-blue-600 hover:bg-blue-700">Nueva Verificación</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="bg-blue-50 pb-2">
            <CardTitle className="text-lg">Verificaciones Recientes</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold text-blue-600">5</div>
            <p className="text-sm text-gray-600">En los últimos 30 días</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="bg-red-50 pb-2">
            <CardTitle className="text-lg">Alertas Activas</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold text-red-600">2</div>
            <p className="text-sm text-gray-600">Requieren su atención</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="bg-green-50 pb-2">
            <CardTitle className="text-lg">Informes Adquiridos</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold text-green-600">1</div>
            <p className="text-sm text-gray-600">Informe Detallado de Filtraciones</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
              <CardDescription>Historial de verificaciones y alertas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start border-b pb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Verificación completada</h3>
                    <p className="text-sm text-gray-600">ejemplo@correo.com</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 2 días</p>
                  </div>
                </div>
                
                <div className="flex items-start border-b pb-4">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Nueva alerta de filtración</h3>
                    <p className="text-sm text-gray-600">Se ha detectado su correo en una nueva filtración</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 3 días</p>
                  </div>
                </div>
                
                <div className="flex items-start border-b pb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Informe adquirido</h3>
                    <p className="text-sm text-gray-600">Informe Detallado de Filtraciones</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 5 días</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Cuenta creada</h3>
                    <p className="text-sm text-gray-600">Bienvenido a SecureCheck</p>
                    <p className="text-xs text-gray-500 mt-1">Hace 1 semana</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Ver todo el historial</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-lg">Alertas de Seguridad</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div className="p-3 bg-red-50 border border-red-100 rounded-md">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-medium text-red-800">Contraseña comprometida</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Su contraseña ha aparecido en una filtración reciente. Recomendamos cambiarla inmediatamente.
                  </p>
                  <Button className="mt-2 bg-red-600 hover:bg-red-700 text-sm py-1 h-auto">Resolver</Button>
                </div>
                
                <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-medium text-yellow-800">Autenticación de dos factores</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    No tiene activada la autenticación de dos factores. Recomendamos activarla para mayor seguridad.
                  </p>
                  <Button className="mt-2 bg-yellow-600 hover:bg-yellow-700 text-sm py-1 h-auto">Activar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg">Servicios Disponibles</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                    <span>Informe Detallado</span>
                  </div>
                  <span className="text-green-600 text-sm">Adquirido</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                      </svg>
                    </div>
                    <span>Huella Digital</span>
                  </div>
                  <Link href="/services/digital-footprint">
                    <Button variant="outline" className="text-sm py-1 h-auto">Adquirir</Button>
                  </Link>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <span>Monitoreo Continuo</span>
                  </div>
                  <span className="text-gray-500 text-sm">Próximamente</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuración de Perfil</CardTitle>
            <CardDescription>Gestione su información personal y preferencias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <h3 className="font-medium">Información Personal</h3>
                  <p className="text-sm text-gray-600">Nombre, correo, contraseña</p>
                </div>
                <Button variant="ghost" className="text-blue-600">Editar</Button>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <h3 className="font-medium">Notificaciones</h3>
                  <p className="text-sm text-gray-600">Alertas y comunicaciones</p>
                </div>
                <Button variant="ghost" className="text-blue-600">Configurar</Button>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Privacidad y Seguridad</h3>
                  <p className="text-sm text-gray-600">Autenticación, permisos</p>
                </div>
                <Button variant="ghost" className="text-blue-600">Gestionar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recursos de Seguridad</CardTitle>
            <CardDescription>Artículos y guías recomendados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div>
                  <Link href="/blog/posts/contrasenas-seguras" className="font-medium text-blue-600 hover:underline">
                    Contraseñas seguras: La primera línea de defensa
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Aprenda a crear contraseñas robustas y a implementar prácticas seguras.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div>
                  <Link href="/blog/posts/autenticacion-dos-factores" className="font-medium text-green-600 hover:underline">
                    La importancia de la autenticación de dos factores
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Descubra cómo añadir una capa adicional de seguridad a sus cuentas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div>
                  <Link href="/blog/posts/datos-filtrados-que-hacer" className="font-medium text-orange-600 hover:underline">
                    ¿Qué hacer si sus datos han sido filtrados?
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Guía paso a paso sobre las acciones inmediatas que debe tomar.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/blog">
              <Button variant="outline" className="w-full">Ver todos los artículos</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
