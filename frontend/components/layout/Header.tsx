import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center mx-auto px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">S</div>
            <span className="font-bold text-xl">SecureCheck</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/services/detailed-report" className="transition-colors hover:text-blue-600">
              Informes Detallados
            </Link>
            <Link href="/services/digital-footprint" className="transition-colors hover:text-blue-600">
              Huella Digital
            </Link>
            <Link href="/tools" className="transition-colors hover:text-blue-600 flex items-center">
              <span className="mr-1">🛡️</span> Herramientas Esenciales
            </Link>
            <Link href="/blog" className="transition-colors hover:text-blue-600">
              Blog
            </Link>
            <Link href="/faq" className="transition-colors hover:text-blue-600">
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex">
            <Link href="/auth/login">
              <Button variant="ghost" className="mr-2 hover:text-blue-600">Iniciar Sesión</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Registrarse</Button>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/services/detailed-report" className="block py-2 text-lg">
                  Informes Detallados
                </Link>
                <Link href="/services/digital-footprint" className="block py-2 text-lg">
                  Huella Digital
                </Link>
                <Link href="/tools" className="block py-2 text-lg flex items-center">
                  <span className="mr-1">🛡️</span> Herramientas Esenciales
                </Link>
                <Link href="/blog" className="block py-2 text-lg">
                  Blog
                </Link>
                <Link href="/faq" className="block py-2 text-lg">
                  FAQ
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/auth/login">
                    <Button variant="outline" className="w-full">Iniciar Sesión</Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Registrarse</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
