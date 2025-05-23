# Plataforma de Servicios de Seguridad Digital

Este proyecto implementa una plataforma web para verificar si correos electrónicos han sido comprometidos en filtraciones de datos, con servicios adicionales como informes detallados y análisis de huella digital.

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

- **frontend**: Interfaz de usuario desarrollada con Next.js, React, TypeScript y Tailwind CSS
- **backend**: API REST desarrollada con Node.js y Express

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## Instrucciones de Instalación

### Para Windows 11

1. Descomprima el archivo ZIP en una carpeta de su elección
2. Abra dos ventanas de Símbolo del sistema (cmd) o PowerShell

#### Configuración del Backend:

```bash
cd ruta\a\la\carpeta\backend
npm install
node src/index.js
```

El backend estará disponible en: http://localhost:3001

#### Configuración del Frontend:

```bash
cd ruta\a\la\carpeta\frontend
npm install
```

Antes de iniciar el frontend, debe modificar la URL del backend en el archivo `src/app/page.tsx`. Busque la línea que contiene:

```javascript
const response = await fetch('https://3001-ilhja1j7kcweu4zxcoupk-6f06528a.manusvm.computer/api/hibp/check-email', {
```

Y cámbiela por:

```javascript
const response = await fetch('http://localhost:3001/api/hibp/check-email', {
```

Luego inicie el servidor de desarrollo:

```bash
npm run dev
```

El frontend estará disponible en: http://localhost:3000

### Para Mac M1

1. Descomprima el archivo ZIP en una carpeta de su elección
2. Abra dos ventanas de Terminal

#### Configuración del Backend:

```bash
cd /ruta/a/la/carpeta/backend
npm install
node src/index.js
```

El backend estará disponible en: http://localhost:3001

#### Configuración del Frontend:

```bash
cd /ruta/a/la/carpeta/frontend
npm install
```

Antes de iniciar el frontend, debe modificar la URL del backend en el archivo `src/app/page.tsx`. Busque la línea que contiene:

```javascript
const response = await fetch('https://3001-ilhja1j7kcweu4zxcoupk-6f06528a.manusvm.computer/api/hibp/check-email', {
```

Y cámbiela por:

```javascript
const response = await fetch('http://localhost:3001/api/hibp/check-email', {
```

Luego inicie el servidor de desarrollo:

```bash
npm run dev
```

El frontend estará disponible en: http://localhost:3000

## Uso de la Aplicación

1. Abra su navegador y vaya a http://localhost:3000
2. En la página principal, encontrará un formulario para verificar si su correo electrónico ha sido comprometido
3. Ingrese un correo electrónico y marque la casilla de consentimiento
4. Haga clic en "Verificar Ahora"

### Para probar diferentes escenarios:

- Use un correo con la palabra "breach" (ej: test.breach@example.com) para simular múltiples filtraciones
- Use un correo con la palabra "test" (ej: test@example.com) para simular una filtración
- Use cualquier otro correo para simular que no hay filtraciones

## Funcionalidades Implementadas

- **Verificación de correos electrónicos**: Comprueba si un correo ha sido comprometido en filtraciones de datos
- **Autenticación de usuarios**: Registro, inicio de sesión y gestión de sesiones
- **Interfaz responsiva**: Diseñada para funcionar en dispositivos móviles y de escritorio
- **Sección de Herramientas Esenciales**: Información sobre herramientas de seguridad
- **Blog**: Artículos sobre seguridad digital
- **FAQ**: Preguntas frecuentes sobre seguridad digital

## Notas Importantes

- Esta es una versión de demostración que simula las respuestas de la API de Have I Been Pwned (HIBP)
- La autenticación utiliza un sistema simulado y no requiere una base de datos real
- Para un entorno de producción, se recomienda configurar servicios reales de autenticación y bases de datos

## Solución de Problemas

Si encuentra algún problema al ejecutar la aplicación, asegúrese de:

1. Tener instalada la versión correcta de Node.js
2. Haber instalado todas las dependencias con `npm install`
3. Tener los puertos 3000 y 3001 disponibles
4. Haber modificado correctamente la URL del backend en el frontend

Si persisten los problemas, puede reiniciar ambos servidores y asegurarse de que se inician en el orden correcto (primero el backend, luego el frontend).
