# Documentación del Esquema de Base de Datos MySQL y Configuración Backend

## Resumen del Proyecto

Este proyecto implementa un esquema completo de base de datos MySQL para una Plataforma de Servicios de Seguridad Digital, junto con la configuración del backend utilizando Node.js y Sequelize como ORM. La estructura está diseñada para almacenar y gestionar usuarios, verificaciones de seguridad, filtraciones de datos, artículos de blog, herramientas y notificaciones, entre otros elementos.

## Estructura de Directorios

```
backend/
├── src/
│   ├── config/
│   │   └── database.js       # Configuración de conexión a la base de datos
│   ├── controllers/          # Controladores con funciones CRUD
│   ├── models/               # Modelos Sequelize
│   │   └── index.js          # Archivo de relaciones entre modelos
│   └── migrations/
│       └── schema.sql        # Script SQL para creación de tablas
└── .env.example              # Plantilla de variables de entorno
```

## Entidades Principales

1. **Users**: Almacena información de usuarios con soporte para diferentes tipos de planes (free, premium, admin).
2. **Sources**: Fuentes de datos para verificaciones (APIs, crawlers, partners).
3. **Verifications**: Verificaciones de seguridad realizadas, con soporte para caché y diferentes tipos de informes.
4. **Breaches**: Filtraciones de datos detectadas.
5. **Blog Articles**: Artículos del blog con categorización.
6. **Tools**: Herramientas disponibles en la plataforma.
7. **Notifications**: Sistema de notificaciones para usuarios.
8. **API Logs**: Registro de llamadas a la API para auditoría.
9. **System Settings**: Configuraciones del sistema.
10. **Subscriptions**: Gestión de suscripciones de usuarios.

## Relaciones Principales

- **Users → Verifications**: Un usuario puede tener múltiples verificaciones (1:N)
- **Sources → Verifications**: Una fuente puede estar asociada a múltiples verificaciones (1:N)
- **Verifications ↔ Breaches**: Una verificación puede tener múltiples filtraciones y una filtración puede estar en múltiples verificaciones (N:M)
- **Users → Blog Articles**: Un usuario (autor) puede tener múltiples artículos (1:N)
- **Blog Articles ↔ Categories**: Un artículo puede tener múltiples categorías y una categoría puede estar en múltiples artículos (N:M)
- **Users → Notifications**: Un usuario puede tener múltiples notificaciones (1:N)
- **Users → Subscriptions**: Un usuario puede tener múltiples suscripciones (1:N)

## Configuración de la Base de Datos

La configuración de conexión a la base de datos se encuentra en `backend/src/config/database.js`. Utiliza Sequelize como ORM y requiere las siguientes variables de entorno:

- `DB_HOST`: Host de la base de datos MySQL
- `DB_PORT`: Puerto de la base de datos (por defecto 3306)
- `DB_NAME`: Nombre de la base de datos
- `DB_USER`: Usuario de la base de datos
- `DB_PASSWORD`: Contraseña del usuario

## Modelos y Controladores

Cada entidad tiene su correspondiente:
- **Modelo Sequelize**: Define la estructura, tipos de datos, validaciones y relaciones.
- **Controlador CRUD**: Implementa funciones para crear, leer, actualizar y eliminar registros.

## Características Implementadas

1. **Soporte para Caché**: Campo `is_cached` en verificaciones para indicar si el resultado proviene de caché.
2. **Diferenciación de Planes**: Campo `plan_type` en usuarios para distinguir entre planes gratuitos y premium.
3. **Relaciones N:M Optimizadas**: Tablas intermedias para relaciones muchos a muchos.
4. **Auditoría**: Tabla de logs para registrar todas las operaciones de API.
5. **Índices Optimizados**: Índices en campos de búsqueda frecuente para mejorar el rendimiento.
6. **Integridad Referencial**: Restricciones de clave foránea para mantener la integridad de los datos.

## Instrucciones de Uso

1. **Configuración Inicial**:
   - Copiar `.env.example` a `.env` y configurar las variables de entorno.
   - Crear la base de datos MySQL utilizando el script `schema.sql`.

2. **Instalación de Dependencias**:
   ```bash
   npm install sequelize mysql2 dotenv bcryptjs uuid
   ```

3. **Inicialización de la Base de Datos**:
   - Ejecutar el script SQL de migración para crear las tablas.
   - Alternativamente, usar Sequelize para sincronizar los modelos.

4. **Uso de los Controladores**:
   - Importar los controladores necesarios en las rutas de la API.
   - Utilizar las funciones CRUD proporcionadas para interactuar con la base de datos.

## Consideraciones de Seguridad

- Las contraseñas de usuarios se almacenan hasheadas utilizando bcrypt.
- Se implementan validaciones en los modelos para garantizar la integridad de los datos.
- Se utilizan UUIDs para los identificadores primarios en lugar de IDs incrementales.
- Se registran todas las operaciones de API para auditoría y seguimiento.

## Extensibilidad

El diseño permite fácilmente:
- Añadir nuevas entidades extendiendo los modelos y controladores existentes.
- Modificar las relaciones entre entidades en el archivo `models/index.js`.
- Implementar nuevas funcionalidades específicas en los controladores.
