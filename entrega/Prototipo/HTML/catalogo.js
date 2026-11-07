/* Catálogo inicial público; no contiene credenciales. */
window.APP_SEED={
  "version": 2,
  "services": [
    {
      "id": "corte",
      "name": "Corte & estilo",
      "cat": "Cabello",
      "price": 45000,
      "min": 45,
      "desc": "Un corte que se adapta a ti. Incluye asesoría, lavado y acabado.",
      "popular": true,
      "img": "corte.jpg",
      "active": true
    },
    {
      "id": "color",
      "name": "Coloración personalizada",
      "cat": "Cabello",
      "price": 135000,
      "min": 120,
      "desc": "Renueva tu color con diagnóstico y acabado profesional.",
      "img": "color.jpg",
      "active": true
    },
    {
      "id": "peinado",
      "name": "Peinado & ondas",
      "cat": "Cabello",
      "price": 60000,
      "min": 60,
      "desc": "Movimiento y textura para acompañar tu próximo plan.",
      "img": "peinado.jpg",
      "active": true
    },
    {
      "id": "tratamiento",
      "name": "Ritual de hidratación",
      "cat": "Cabello",
      "price": 80000,
      "min": 60,
      "desc": "Un cuidado profundo para devolver suavidad y brillo.",
      "img": "tratamiento.jpg",
      "active": true
    },
    {
      "id": "barba",
      "name": "Diseño de barba",
      "cat": "Barbería",
      "price": 30000,
      "min": 30,
      "desc": "Perfilado de barba y acabado con toalla caliente.",
      "img": "barba.jpg",
      "active": true
    },
    {
      "id": "clasico",
      "name": "Corte clásico",
      "cat": "Barbería",
      "price": 35000,
      "min": 30,
      "desc": "Precisión, estilo y un acabado a tu medida.",
      "img": "clasico.jpg",
      "active": true
    },
    {
      "id": "combo",
      "name": "Corte + barba",
      "cat": "Barbería",
      "price": 55000,
      "min": 60,
      "desc": "Tu ritual completo de barbería en una sola visita.",
      "img": "combo.jpg",
      "active": true
    },
    {
      "id": "manicure",
      "name": "Manicure esencial",
      "cat": "Uñas",
      "price": 35000,
      "min": 45,
      "desc": "Cuidado de manos y esmaltado tradicional.",
      "popular": true,
      "img": "unas.jpg",
      "active": true
    },
    {
      "id": "semipermanente",
      "name": "Manicure semipermanente",
      "cat": "Uñas",
      "price": 55000,
      "min": 60,
      "desc": "Color de larga duración y un acabado impecable.",
      "img": "semipermanente.jpg",
      "active": true
    },
    {
      "id": "pedicure",
      "name": "Pedicure spa",
      "cat": "Uñas",
      "price": 45000,
      "min": 60,
      "desc": "Exfoliación, cuidado y color para tus pies.",
      "img": "pedicure.jpg",
      "active": true
    },
    {
      "id": "facial",
      "name": "Limpieza facial",
      "cat": "Bienestar",
      "price": 90000,
      "min": 60,
      "desc": "Una pausa para limpiar, hidratar y cuidar tu piel.",
      "img": "facial.jpg",
      "active": true
    },
    {
      "id": "masaje",
      "name": "Masaje de relajación",
      "cat": "Bienestar",
      "price": 95000,
      "min": 60,
      "desc": "Baja el ritmo y regálate una hora de bienestar.",
      "popular": true,
      "img": "bienestar.jpg",
      "active": true
    }
  ],
  "staff": [
    {
      "id": "valentina",
      "name": "Valentina Ruiz",
      "initials": "VR",
      "role": "Estilista · corte y color",
      "cats": [
        "Cabello",
        "Barbería"
      ],
      "img": "valentina.jpg",
      "active": true
    },
    {
      "id": "mateo",
      "name": "Mateo Torres",
      "initials": "MT",
      "role": "Estilista y barbero",
      "cats": [
        "Cabello",
        "Barbería"
      ],
      "img": "mateo.jpg",
      "active": true
    },
    {
      "id": "camila",
      "name": "Camila López",
      "initials": "CL",
      "role": "Especialista en uñas y bienestar",
      "cats": [
        "Uñas",
        "Bienestar"
      ],
      "img": "camila.jpg",
      "active": true
    },
    {
      "id": "sara",
      "name": "Sara Ríos",
      "initials": "SR",
      "role": "Cuidado integral y bienestar",
      "cats": [
        "Cabello",
        "Barbería",
        "Uñas",
        "Bienestar"
      ],
      "img": "sara.jpg",
      "active": true
    }
  ],
  "settings": {
    "name": "AppSalón",
    "tagline": "Tu momento, a tu manera.",
    "address": "Salón de demostración · Bogotá",
    "phone": "",
    "open": "09:00",
    "close": "18:00",
    "breakStart": "12:30",
    "breakEnd": "13:30",
    "openDays": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "bookingDays": 14,
    "cancellation": "Puedes cambiar o cancelar tu cita desde Mis citas. En esta demostración no hay cobros ni penalizaciones."
  }
};
