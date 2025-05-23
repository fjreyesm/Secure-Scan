import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQ() {
  return (
    <div className="container py-10 max-w-screen-lg mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h1>
      
      <div className="mb-10">
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Encuentre respuestas a las preguntas más comunes sobre nuestros servicios de seguridad digital y cómo pueden ayudarle a proteger su información personal.
        </p>
        
        <div className="grid grid-cols-1 gap-6">
          <Card className="overflow-hidden border-l-4 border-l-blue-500">
            <CardHeader className="bg-blue-50 pb-2">
              <CardTitle className="text-lg">¿Qué es una filtración de datos?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Una filtración de datos ocurre cuando información confidencial o protegida es accedida, copiada, transmitida, vista o robada por individuos no autorizados. Estas filtraciones pueden exponer información personal como correos electrónicos, contraseñas, números de tarjetas de crédito, direcciones, números de teléfono y más.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-blue-500">
            <CardHeader className="bg-blue-50 pb-2">
              <CardTitle className="text-lg">¿Cómo sé si mi información ha sido comprometida?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Puede utilizar nuestro servicio gratuito de verificación de correo electrónico en la página principal. Si su correo aparece en alguna filtración conocida, le mostraremos un resumen básico. Para detalles completos, recomendamos nuestro Informe Detallado de Filtraciones.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-green-500">
            <CardHeader className="bg-green-50 pb-2">
              <CardTitle className="text-lg">¿Qué debo hacer si mi información ha sido filtrada?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Si su información ha sido comprometida, recomendamos:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Cambiar inmediatamente las contraseñas de las cuentas afectadas</li>
                <li>Activar la autenticación de dos factores donde sea posible</li>
                <li>Monitorear sus cuentas bancarias y reportes crediticios</li>
                <li>Estar alerta a intentos de phishing que utilicen su información personal</li>
              </ul>
              <p className="mt-2 text-gray-600">
                Nuestros informes detallados incluyen recomendaciones personalizadas según los datos específicos que hayan sido comprometidos.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-green-500">
            <CardHeader className="bg-green-50 pb-2">
              <CardTitle className="text-lg">¿Qué es la huella digital y por qué debería preocuparme?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Su huella digital es toda la información sobre usted que existe en internet, tanto la que usted ha compartido voluntariamente como la que otros han publicado. Esto incluye perfiles en redes sociales, comentarios, fotos, registros públicos y más. Esta información puede ser utilizada para crear perfiles detallados sobre usted, lo que representa riesgos para su privacidad y seguridad.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-purple-500">
            <CardHeader className="bg-purple-50 pb-2">
              <CardTitle className="text-lg">¿Cómo funcionan sus servicios de pago?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Ofrecemos dos servicios principales de pago único:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li><span className="font-medium">Informe Detallado de Filtraciones ($19.99)</span>: Análisis completo de las filtraciones que afectan su correo electrónico, incluyendo qué datos específicos fueron expuestos y recomendaciones personalizadas.</li>
                <li><span className="font-medium">Análisis de Huella Digital ($39.99)</span>: Evaluación exhaustiva de su presencia en internet, identificando información personal expuesta y proporcionando estrategias para proteger su identidad digital.</li>
              </ul>
              <p className="mt-2 text-gray-600">
                Ambos son pagos únicos, sin suscripciones ni cargos recurrentes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-purple-500">
            <CardHeader className="bg-purple-50 pb-2">
              <CardTitle className="text-lg">¿Cómo protegen mi información?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                La seguridad de su información es nuestra prioridad. Utilizamos encriptación de extremo a extremo, almacenamiento seguro y seguimos las mejores prácticas de la industria para proteger sus datos. No compartimos su información con terceros y solo la utilizamos para los servicios que usted solicita explícitamente.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-orange-500">
            <CardHeader className="bg-orange-50 pb-2">
              <CardTitle className="text-lg">¿Puedo solicitar la eliminación de mi información personal?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Sí, respetamos su derecho a la privacidad. Puede solicitar la eliminación de su información de nuestra plataforma en cualquier momento. Sin embargo, es importante entender que esto no elimina su información de las filtraciones de datos que ya han ocurrido o de otras fuentes en internet. Nuestro servicio de Análisis de Huella Digital incluye orientación sobre cómo solicitar la eliminación de su información de diversas fuentes en línea.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-l-4 border-l-orange-500">
            <CardHeader className="bg-orange-50 pb-2">
              <CardTitle className="text-lg">¿Ofrecen servicios para empresas?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600">
                Actualmente nos enfocamos en servicios para individuos, pero estamos desarrollando soluciones para pequeñas y medianas empresas. Si representa a una organización interesada en nuestros servicios, por favor contáctenos directamente para discutir opciones personalizadas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 text-center">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">¿No encuentra la respuesta que busca?</h2>
        <p className="mb-6 text-gray-600">
          Estamos aquí para ayudarle con cualquier pregunta adicional sobre nuestros servicios.
        </p>
        <Link href="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700">Contáctenos</Button>
        </Link>
      </div>
    </div>
  );
}
