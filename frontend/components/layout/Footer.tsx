import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40 mt-16">
      <div className="container flex flex-col md:flex-row py-10 max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col md:w-1/3 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">S</div>
            <h2 className="text-2xl font-bold">SecureCheck</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Protegiendo su información digital con soluciones accesibles y educativas.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/detailed-report" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Informes Detallados
                </Link>
              </li>
              <li>
                <Link href="/services/digital-footprint" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Huella Digital
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground mx-auto">
          <p>© {new Date().getFullYear()} SecureCheck. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
