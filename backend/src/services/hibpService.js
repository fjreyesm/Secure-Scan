const axios = require('axios');
const crypto = require('crypto');

// Servicio para interactuar con la API de Have I Been Pwned (HIBP)
exports.checkEmailBreaches = async (email) => {
  try {
    // Configuración para la API de HIBP
    const hibpApiKey = process.env.HIBP_API_KEY || 'DEMO_API_KEY'; // En producción, usar una clave API real
    const baseUrl = 'https://haveibeenpwned.com/api/v3';
    
    // Crear un hash SHA-1 del correo para mayor privacidad en las solicitudes
    // Esto es opcional pero recomendado para proteger la privacidad del usuario
    const emailHash = crypto.createHash('sha1').update(email).digest('hex');
    
    // Configuración de la solicitud
    const config = {
      headers: {
        'User-Agent': 'SecureCheck-Platform',
        'hibp-api-key': hibpApiKey
      }
    };

    // Realizar la solicitud a la API de HIBP
    // En un entorno de producción, usaríamos la API real con autenticación
    // Para desarrollo/demo, simulamos la respuesta
    
    // Simulación de respuesta para desarrollo
    // En producción, descomentar la línea de abajo y usar la API real
    // const response = await axios.get(`${baseUrl}/breachedaccount/${encodeURIComponent(email)}`, config);
    
    // Simulación de respuesta para desarrollo/demo
    let simulatedResponse;
    
    // Simular diferentes respuestas basadas en el correo
    if (email.includes('breach')) {
      // Simular correo comprometido en múltiples filtraciones
      simulatedResponse = [
        {
          Name: "Adobe",
          Title: "Adobe",
          Domain: "adobe.com",
          BreachDate: "2013-10-04",
          AddedDate: "2013-12-04",
          ModifiedDate: "2022-05-15",
          PwnCount: 152445165,
          Description: "En octubre de 2013, 153 millones de cuentas de Adobe fueron expuestas...",
          DataClasses: ["Email addresses", "Password hints", "Passwords", "Usernames"],
          IsVerified: true,
          IsSensitive: false,
          IsRetired: false,
          IsSpamList: false,
          IsMalware: false,
          IsSubscriptionFree: false
        },
        {
          Name: "LinkedIn",
          Title: "LinkedIn",
          Domain: "linkedin.com",
          BreachDate: "2012-05-05",
          AddedDate: "2016-05-21",
          ModifiedDate: "2022-05-15",
          PwnCount: 164611595,
          Description: "En mayo de 2016, LinkedIn tuvo una filtración de más de 164 millones de direcciones de correo...",
          DataClasses: ["Email addresses", "Passwords"],
          IsVerified: true,
          IsSensitive: false,
          IsRetired: false,
          IsSpamList: false,
          IsMalware: false,
          IsSubscriptionFree: false
        }
      ];
    } else if (email.includes('test')) {
      // Simular correo comprometido en una filtración
      simulatedResponse = [
        {
          Name: "Canva",
          Title: "Canva",
          Domain: "canva.com",
          BreachDate: "2019-05-24",
          AddedDate: "2019-08-09",
          ModifiedDate: "2022-05-15",
          PwnCount: 137272116,
          Description: "En mayo de 2019, la plataforma de diseño gráfico online Canva sufrió un ataque...",
          DataClasses: ["Email addresses", "Geographic locations", "Names", "Passwords", "Usernames"],
          IsVerified: true,
          IsSensitive: false,
          IsRetired: false,
          IsSpamList: false,
          IsMalware: false,
          IsSubscriptionFree: false
        }
      ];
    } else {
      // Simular correo no comprometido
      simulatedResponse = [];
    }

    // Procesar y devolver los resultados
    return {
      success: true,
      data: {
        email,
        breaches: simulatedResponse,
        breachCount: simulatedResponse.length,
        isCompromised: simulatedResponse.length > 0,
        checkedAt: new Date().toISOString()
      }
    };

  } catch (error) {
    console.error('Error en hibpService.checkEmailBreaches:', error);
    
    // Si es un error 404, significa que el correo no se encontró en ninguna filtración
    if (error.response && error.response.status === 404) {
      return {
        success: true,
        data: {
          email,
          breaches: [],
          breachCount: 0,
          isCompromised: false,
          checkedAt: new Date().toISOString()
        }
      };
    }
    
    // Para otros errores, devolver un mensaje de error
    return {
      success: false,
      statusCode: error.response ? error.response.status : 500,
      message: 'Error al verificar el correo electrónico en la base de datos de filtraciones'
    };
  }
};
