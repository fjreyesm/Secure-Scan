import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Tools() {
  return (
    <div className="container py-10 max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🛡️ Herramientas Esenciales de Seguridad</h1>
      
      <div className="mb-10">
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Descubra herramientas recomendadas por nuestros expertos para proteger su información digital y mejorar su seguridad en línea.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="overflow-hidden flex flex-col h-full border-t-4 border-t-purple-500">
            <div className="h-48 bg-purple-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-purple-700">Gestores de Contraseñas</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 mb-4">
                Los gestores de contraseñas le permiten crear, almacenar y gestionar contraseñas únicas y seguras para todas sus cuentas.
              </p>
              <h4 className="font-medium mb-2 text-purple-600">Recomendados:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Bitwarden (Código abierto)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>1Password (Premium)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>LastPass (Freemium)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://bitwarden.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Explorar opciones →
              </a>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full border-t-4 border-t-blue-500">
            <div className="h-48 bg-blue-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-blue-700">VPNs (Redes Privadas Virtuales)</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 mb-4">
                Las VPNs cifran su conexión a internet, protegiendo su privacidad y permitiéndole navegar de forma segura, especialmente en redes Wi-Fi públicas.
              </p>
              <h4 className="font-medium mb-2 text-blue-600">Recomendados:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>ProtonVPN (Freemium, enfocado en privacidad)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>NordVPN (Premium, fácil de usar)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mullvad (Premium, anónimo)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://protonvpn.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                Explorar opciones →
              </a>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full border-t-4 border-t-green-500">
            <div className="h-48 bg-green-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-green-700">Autenticación de Dos Factores (2FA)</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 mb-4">
                La autenticación de dos factores añade una capa adicional de seguridad a sus cuentas, requiriendo un segundo método de verificación además de su contraseña.
              </p>
              <h4 className="font-medium mb-2 text-green-600">Recomendados:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Authy (Multiplataforma)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Google Authenticator (Android/iOS)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>YubiKey (Llave física de seguridad)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://authy.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                Explorar opciones →
              </a>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full border-t-4 border-t-orange-500">
            <div className="h-48 bg-orange-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                <path d="M15 7h6v6"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-orange-700">Extensiones de Navegador</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 mb-4">
                Las extensiones de seguridad para navegadores pueden bloquear rastreadores, publicidad maliciosa y proteger su privacidad mientras navega.
              </p>
              <h4 className="font-medium mb-2 text-orange-600">Recomendados:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>uBlock Origin (Bloqueador de anuncios)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Privacy Badger (Anti-rastreadores)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>HTTPS Everywhere (Fuerza conexiones seguras)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://eff.org/https-everywhere" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 font-medium">
                Explorar opciones →
              </a>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full border-t-4 border-t-red-500">
            <div className="h-48 bg-red-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M8 11h8"></path>
                <path d="M12 15V7"></path>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-red-700">Antivirus y Antimalware</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 mb-4">
                El software antivirus y antimalware protege su dispositivo contra amenazas como virus, ransomware, spyware y otros tipos de software malicioso.
              </p>
              <h4 className="font-medium mb-2 text-red-600">Recomendados:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Bitdefender (Premium, completo)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Malwarebytes (Freemium, especializado)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Microsoft Defender (Incluido en Windows)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://www.malwarebytes.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                Explorar opciones →
              </a>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden flex flex-col h-full border-t-4 border-t-indigo-500">
            <div className="h-48 bg-indigo-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-indigo-700">Navegadores Seguros</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 flex-grow">
              <p className="text-gray-600 mb-4">
                Algunos navegadores están diseñados con un enfoque en la privacidad y seguridad, ofreciendo protección integrada contra rastreadores y otras amenazas.
              </p>
              <h4 className="font-medium mb-2 text-indigo-600">Recomendados:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Firefox (Con configuración de privacidad)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Brave (Bloqueo de rastreadores integrado)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tor Browser (Máxima privacidad)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://www.mozilla.org/firefox/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Explorar opciones →
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-700 text-center">Nota sobre Afiliados</h2>
        <p className="text-gray-600 mb-4 text-center">
          Algunas de las herramientas recomendadas incluyen enlaces de afiliados. Esto significa que podemos recibir una pequeña comisión si decide adquirir un producto a través de nuestros enlaces, sin costo adicional para usted.
        </p>
        <p className="text-gray-600 text-center">
          Todas nuestras recomendaciones se basan en la calidad y eficacia de las herramientas, no en las comisiones que podamos recibir. Su seguridad es nuestra prioridad.
        </p>
      </div>
      
      <div className="text-center">
        <Link href="/blog">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Leer nuestros artículos sobre seguridad
          </Button>
        </Link>
      </div>
    </div>
  );
}
