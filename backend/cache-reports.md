# Documentación de la Plataforma de Servicios de Seguridad Digital

## Estructura de la Base de Datos y Relaciones

La plataforma implementa las siguientes relaciones clave entre tablas:

1. **Usuarios y Verificaciones**: Relación 1:N
   - Un usuario puede tener múltiples verificaciones
   - Implementado mediante la clave foránea `userId` en la tabla `verifications`

2. **Verificaciones y Filtraciones**: Relación N:M
   - Una verificación puede estar asociada a múltiples filtraciones
   - Una filtración puede estar asociada a múltiples verificaciones
   - Implementado mediante la tabla intermedia `verification_breaches`

3. **Usuarios y Artículos**: Relación 1:N
   - Un usuario (autor) puede crear múltiples artículos
   - Implementado mediante la clave foránea `authorId` en la tabla `blog_articles`

4. **Usuarios y Notificaciones**: Relación 1:N
   - Un usuario puede recibir múltiples notificaciones
   - Implementado mediante la clave foránea `userId` en la tabla `notifications`

## Sistema de Caché e Informes Detallados

La plataforma implementa un sistema de caché para los informes de filtraciones con las siguientes características:

### Tipos de Informes

1. **Revisión Gratuita (Freemium)**
   - Endpoint: `/api/reports/basic`
   - Fuente: `/breachedaccount/{email}?truncateResponse=true`
   - Contenido: Solo nombres de brechas, sin detalles
   - Almacenamiento: Caché temporal en base de datos

2. **Informe Detallado (Pago)**
   - Endpoint: `/api/reports/detailed`
   - Fuentes: 
     - `/breachedaccount/{email}` (sin truncar)
     - `/breach/{name}` para cada brecha encontrada
   - Contenido: 
     - Descripción completa de cada filtración
     - Datos personales expuestos
     - Fechas de filtración
     - Nivel de criticidad
   - Almacenamiento: Caché temporal con token de acceso

3. **Revisión Avanzada (Pro)**
   - Incluye todo lo anterior más datos de pastes
   - Fuente adicional: `/pasteaccount/{email}`
   - Activado mediante el parámetro `includePastes: true`

### Estrategia de Caché

- **Campos de Control**:
  - `is_cached`: Indica si el resultado proviene de caché
  - `cached_at`: Timestamp de cuándo se almacenó en caché
  - `report_type`: Distingue entre informes básicos y detallados

- **Duración del Caché**: 
  - Configurable mediante la variable `CACHE_DURATION` (por defecto 7 días)
  - Verificación automática de validez temporal

- **Acceso a Informes Detallados**:
  - Generación de token único para cada informe
  - El token incluye el ID de verificación y fecha de expiración
  - Firmado criptográficamente para garantizar seguridad
  - Permite consultar el informe sin necesidad de autenticación

## Flujo de Uso

### Generación de Informe Básico (Gratuito)

1. Cliente solicita revisión básica con un email
2. Sistema verifica si existe un informe en caché válido
3. Si existe, devuelve el informe cacheado
4. Si no existe, consulta la API de HIBP (versión truncada)
5. Almacena el resultado en la base de datos con `report_type: 'basic'`
6. Devuelve al cliente la lista de nombres de filtraciones

### Generación de Informe Detallado (Pago)

1. Cliente solicita informe detallado con un email (requiere autenticación)
2. Sistema verifica si existe un informe detallado en caché válido
3. Si existe, devuelve el informe cacheado y un token de acceso
4. Si no existe:
   - Consulta la API de HIBP (versión completa)
   - Para cada filtración, obtiene detalles completos
   - Opcionalmente consulta pastes si se solicita
   - Almacena filtraciones en la tabla `breaches`
   - Crea relaciones en la tabla `verification_breaches`
   - Genera un token de acceso firmado
5. Devuelve al cliente el informe y el token para consultas posteriores

### Consulta de Informe Mediante Token

1. Cliente solicita informe usando el token recibido
2. Sistema verifica la validez y firma del token
3. Si es válido, recupera el informe asociado con todas sus relaciones
4. Devuelve el informe completo al cliente

## Ejemplos de Uso

### Solicitar Informe Básico

```javascript
// Solicitud
POST /api/reports/basic
{
  "email": "usuario@ejemplo.com"
}

// Respuesta
{
  "success": true,
  "data": {
    "verification": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "email": "usuario@ejemplo.com",
      "status": "completed",
      "reportType": "basic",
      "isCached": true,
      "cachedAt": "2025-05-27T12:00:00.000Z",
      "result": {
        "breachNames": ["Adobe", "LinkedIn", "Dropbox"],
        "totalBreaches": 3
      }
    },
    "fromCache": true
  }
}
```

### Solicitar Informe Detallado

```javascript
// Solicitud
POST /api/reports/detailed
{
  "email": "usuario@ejemplo.com",
  "includePastes": true
}

// Respuesta
{
  "success": true,
  "data": {
    "verification": {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "email": "usuario@ejemplo.com",
      "status": "completed",
      "reportType": "detailed",
      "isCached": true,
      "cachedAt": "2025-05-27T12:05:00.000Z",
      "result": {
        "breaches": [...],  // Detalles completos de cada filtración
        "pastes": [...],    // Información de pastes (si se solicitó)
        "totalBreaches": 3,
        "totalPastes": 2,
        "includedPastes": true
      },
      "Breaches": [...]     // Relaciones con entidades de filtraciones
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "fromCache": false
  }
}
```

### Consultar Informe con Token

```javascript
// Solicitud
GET /api/reports/detailed/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Respuesta
{
  "success": true,
  "data": {
    "verification": {
      // Mismo contenido que en la respuesta de generación
    }
  }
}
```

## Consideraciones de Seguridad

- Los tokens de acceso tienen una duración limitada (configurable)
- La información sensible se almacena de forma segura en la base de datos
- Se implementa firma criptográfica para validar la autenticidad de los tokens
- Los informes detallados requieren autenticación para su generación
- La consulta mediante token no requiere autenticación, permitiendo compartir informes
