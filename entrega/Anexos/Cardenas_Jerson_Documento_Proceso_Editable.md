# AppSalón

Jerson Cárdenas

Documento de proceso · 7 de noviembre de 2026

Testing humano pendiente.

---

## Página 2: 01 / Introducción - Reservar también debe sentirse bien.

AppSalón es un prototipo de una aplicación web para descubrir servicios de salón, elegir un profesional y gestionar una cita. El problema de diseño es la fragmentación de información que aparece cuando precio, duración y horarios se consultan por separado. Este proyecto convierte esa coordinación en una secuencia visible y reversible.

El escenario plantea un salón ficticio en Bogotá. El catálogo tiene doce servicios en cabello, barbería, uñas y bienestar. Los valores se expresan en pesos colombianos y el pago se realiza conceptualmente en el salón. El equipo, los precios y la oferta no representan un negocio real.

La pregunta que guía el trabajo es: ¿cómo permitir que una persona elija y gestione una cita comprendiendo sus consecuencias antes de confirmar? La respuesta combina información comparable, una decisión principal por paso, cálculo automático de disponibilidad y recuperación del borrador.

La consigna académica es la fuente primaria de requerimientos. La investigación realizada es documental y la caracterización de usuarios es hipotética. No se han realizado entrevistas ni sesiones con participantes al cierre de esta versión. Esta distinción evita presentar supuestos como evidencia empírica.

Nota: Resultado construido: prototipo navegable en HTML/CSS/JS, documentación, flujos, anexos y una herramienta para registrar dos sesiones reales.

---

## Página 3: 01 / Introducción - Objetivos, alcance y proceso.

Objetivo general: diseñar y materializar una experiencia de reserva comprensible, consistente y accesible, desde la selección del servicio hasta la gestión posterior de la cita.

Objetivos específicos: hacer visibles precio y duración; reducir la comparación mediante categorías; evitar horarios incompatibles; prevenir cancelaciones involuntarias; permitir cambios conservando el código de reserva; y verificar el comportamiento en escritorio y móvil.

Alcance implementado: dieciocho pantallas de cliente y nueve vistas administrativas. El administrador gestiona trabajadores con foto, servicios y precios, agenda completa, estados de citas, horarios y datos del salón. La herramienta de testing es un recurso auxiliar.

La versión ampliada incorpora un servidor local Node.js con sesión de administrador, persistencia JSON y agenda compartida. La demostración de cliente sigue disponible sin servidor. No incluye despliegue público, pagos ni correos. La cuenta de cliente continúa siendo un perfil local; no autentica identidad personal.

Actividad | Trabajo realizado | Evidencia
Identificar necesidades | Descomponer consigna y formular supuestos | Personas y requerimientos
Diseñar alternativas | Definir estructura, wireframes y reglas | Sitemap, flujos y baja fidelidad
Prototipar | Construir interfaz y estados locales | HTML, CSS, JS y capturas
Evaluar | Pruebas técnicas; preparar sesiones humanas | Registro técnico y plan de testing

Nota: Metas de evaluación con personas, aún sin medir: completar T1 sin ayuda, comprender total y duración, y gestionar cambios sin duplicados.

---

## Página 4: 02 / Usuario y HCI - Laura: encontrar un momento.

Laura representa a alguien que necesita coordinar su visita entre otras actividades. La hipótesis de diseño es que consultar información clave en una sola tarjeta evita abrir y cerrar varias conversaciones. No se atribuyen hábitos o frases a una participante real.

Contexto de uso: dispositivo móvil, interrupciones, atención parcial y posible conectividad variable. Los assets locales facilitan la demostración sin red; guardar el borrador reduce el costo de retomar. La sesión de prueba deberá comprobar si el orden servicio-profesional-fecha-hora coincide con su expectativa.

Nota: Validación pendiente: observar si puede elegir un servicio y explicar su precio y duración sin ayuda del facilitador.

---

## Página 5: 02 / Usuario y HCI - Carlos: claridad para cambiar planes.

Carlos reúne necesidades de lectura explícita, previsibilidad y control. Su objetivo al reagendar es conservar lo ya conseguido mientras decide un horario nuevo. Por eso el sistema no elimina la reserva original al entrar al flujo de cambio.

La interfaz muestra botones con verbos, estados escritos y un resumen antes de una acción con consecuencias. Se evita depender solo de un color, un icono o la memoria de una pantalla anterior. El registro local no exige contraseña porque la seguridad de una cuenta real excede el alcance del prototipo.

Nota: Estas dos personas son herramientas de diseño. Deben ajustarse con los hallazgos de P01 y P02; no sustituyen investigación con usuarios.

---

## Página 6: 02 / Usuario y HCI - El triángulo completo de interacción.

Persona: metas, experiencia, atención y capacidades. El diseño considera exploración rápida y uso ocasional. Las necesidades se traducen en legibilidad, botones amplios y decisiones reversibles.

Tarea: reservar, comprender el compromiso, modificar y cancelar. Una reserva se descompone en elegir servicios, profesional, fecha, horario, datos y revisión. La carga principal de la persona es expresar preferencias; el sistema realiza cálculos y aplica restricciones.

Tecnología y contexto: navegador con teclado o pantalla táctil, pantalla estrecha o amplia y un servidor local. El cliente expresa preferencias; el servidor vuelve a validar precio, disponibilidad y propiedad de la cita al guardar. El administrador tiene un acceso separado. El modo sin servidor permite demostrar la interfaz de cliente, con una agenda independiente en ese navegador.

Tarea | Entrada de la persona | Respuesta del sistema
Agendar | Servicios y preferencias | Total, duración y horarios válidos
Reagendar | Nueva fecha y hora | Conservar original hasta confirmar
Cancelar | Decisión explícita | Actualizar estado y liberar horario

Nota: Paradigmas: selección directa en tarjetas, navegación web por enlaces, formularios guiados y divulgación progresiva en ayuda. No se usa interacción conversacional.

---

## Página 7: 03 / Leyes de usabilidad - Fitts: acercar y ampliar la acción.

Se utiliza la formulación de Shannon: T = a + b × log₂(D/W + 1). D es la distancia al centro del objetivo y W su tamaño efectivo en la dirección de movimiento. Para comparar dos escenarios se asumen a = 0,05 s y b = 0,10 s/bit. Estos parámetros son ilustrativos; no se calibraron con participantes [S1].

Escenario inicial conceptual: botón pequeño y distante, D = 600 px y W = 24 px. Índice de dificultad = log₂(600/24 + 1) = log₂(26) = 4,700 bits. T = 0,05 + 0,10 × 4,700 = 0,520 s.

Escenario propuesto: acción próxima al contenido con D = 240 px y W = 48 px. Índice = log₂(240/48 + 1) = log₂(6) = 2,585 bits. T = 0,05 + 0,10 × 2,585 = 0,308 s. La diferencia modelada es 0,212 s, aproximadamente 40,7% respecto al escenario conceptual.

Los botones principales tienen un mínimo de 48 px de alto. Las acciones de selección y las pestañas tienen al menos 44 px. La altura no equivale siempre a W: si el movimiento es horizontal, importa el ancho. Por ello el cálculo compara geometrías declaradas, no afirma una medición universal de la interfaz.

Nota: Aplicación visible: «Confirmar mi cita», bloques de horario y tarjetas de profesional. La reducción calculada es una predicción de movimiento, no del tiempo total de reserva.

---

## Página 8: 03 / Leyes de usabilidad - Hick: hacer comparables las opciones.

La fórmula solicitada es T = a + b × log₂(n + 1). Se utiliza como comparación pedagógica con a = 0,20 s y b = 0,15 s/bit. n representa opciones de una decisión. Los coeficientes no provienen de un experimento del proyecto [S2].

Una exposición plana de doce servicios produce T = 0,20 + 0,15 × log₂(13) = 0,755 s. En una categoría de tres servicios, T = 0,20 + 0,15 × log₂(4) = 0,500 s. Para esa decisión local el modelo sugiere una reducción de 0,255 s (33,8%).

Elegir primero entre cuatro categorías añade otra decisión: 0,20 + 0,15 × log₂(5) = 0,548 s. Si se sumaran ambas decisiones, serían 1,048 s. Por tanto, categorizar no demuestra por sí solo que el recorrido completo sea más rápido. Su valor propuesto es ayudar a reconocer opciones relevantes y comparar atributos.

La distribución real es cabello (4), barbería (3), uñas (3) y bienestar (2). Los filtros y la búsqueda son opcionales; «Todos» mantiene el acceso al catálogo completo. No se impone un camino de categorías. Cada tarjeta usa el mismo orden: nombre, descripción, duración, precio y acción.

Escenario | n | T modelado
Catálogo completo | 12 | 0,755 s
Elegir categoría | 4 | 0,548 s
Dentro de uñas o barbería | 3 | 0,500 s
Categoría + servicio de tres | 4 y 3 | 1,048 s

Nota: La evaluación con personas debe comparar encontrabilidad y comprensión. No se declara una mejora de velocidad observada.

---

## Página 9: 03 / Leyes de usabilidad - Tesler: trasladar cálculo al sistema.

La complejidad necesaria para coordinar servicio, duración, disponibilidad y profesional no desaparece. La propuesta evita exigir que la persona haga esas comprobaciones mentalmente y las representa como reglas internas [S3].

Se construyó un inventario didáctico de diez unidades de responsabilidad con el mismo peso. Antes conceptual: siete a cargo del usuario y tres del sistema. Propuesta: tres del usuario y siete del sistema. La redistribución 70/30 a 30/70 es una estimación de diseño, no una escala empírica de carga cognitiva ni un porcentaje exigido por la ley.

Se trasladan cuatro responsabilidades: sumar precios, sumar duraciones, filtrar profesionales compatibles y comprobar solapamientos con descanso o cierre. La persona conserva decisiones de preferencia: qué necesita, quién le atiende cuando tiene preferencia y cuál horario le sirve. El sistema también conserva estado, registra la decisión y muestra la confirmación.

La versión ampliada resuelve disponibilidad compartida en el servidor local y serializa las escrituras para evitar reservas simultáneas del mismo profesional. El modo de archivo sigue siendo una demostración independiente. No hay pagos, notificaciones ni operación de un negocio real asociado al proyecto.

Nota: Ejemplo: Corte & estilo + Manicure esencial = $80.000 y 90 min. Solo se muestran profesionales compatibles y horas con espacio para el bloque completo.

---

## Página 10: 03 / Leyes de usabilidad - De las leyes a los criterios observables.

Las leyes se traducen en decisiones inspeccionables: tamaño y cercanía de objetivos, exposición gradual de opciones y automatización de reglas. La validación debe revisar si estas decisiones ayudan a una persona concreta; ninguna fórmula reemplaza el testing.

La inspección toma como guía principios de Nielsen [S4]. Hay estado visible mediante el progreso y la confirmación; lenguaje cotidiano como «Mis citas»; control al volver o conservar la reserva; consistencia en tarjetas y botones; prevención de errores antes de confirmar; reconocimiento con resúmenes; y ayuda mediante preguntas frecuentes.

Se añadieron estados de recuperación: búsqueda sin coincidencias, horarios no disponibles, campos inválidos, acceso local sin perfil y cita no encontrada. La cancelación solicita una decisión explícita; la navegación de vuelta conserva la cita activa. Los avisos distinguen el prototipo de una operación comercial.

Decisión | Principio | Comprobación
Total y duración persistentes | Tesler / reconocimiento | T1: explicar compromiso
Foco y etiquetas explícitas | Operabilidad / consistencia | Teclado y lector de pantalla
Reagendar antes de sustituir | Control y prevención | T2: mismo código
Confirmación de cancelación | Prevención / visibilidad | T3: estado final

Nota: Hipótesis clave: la persona comprende lo que confirma. Un clic correcto por sí solo no demuestra comprensión.

---

## Página 11: 04 / Decisiones de diseño - Una identidad tranquila y legible.

La dirección visual combina un fondo cálido con verde profundo, una tipografía de títulos editorial y fotografías de cuidado personal. La intención es comunicar calma sin ocultar información funcional. No se atribuye un efecto psicológico comprobado a estos colores.

La paleta se restringe a base, superficie, texto, acción y estados. El verde identifica acciones principales; terracota se reserva para advertencias y cancelación. Los doce servicios y los cuatro trabajadores iniciales tienen fotografía. Las fotos de stock son ilustrativas y pueden sustituirse desde la administración.

Se calcula contraste con luminancia relativa sRGB para las parejas principales. La referencia objetivo es 4,5:1 para texto normal y 3:1 para texto grande. La medición de estos pares no equivale a una auditoría completa de conformidad [S5].

Nota: Los retratos iniciales no identifican a trabajadores reales: acompañan perfiles ficticios. El administrador puede elegir otra foto de la galería o subir JPG, PNG o WebP de hasta 1 MB.

---

## Página 12: 04 / Decisiones de diseño - Un sistema que se puede repetir.

Tipografía: Inter local para interfaz y Georgia como alternativa de sistema para títulos. El cuerpo base es 16 px con interlineado 1,6. Los títulos escalan con el ancho disponible; el título principal varía aproximadamente de 42 a 68 px. Etiquetas y metadatos secundarios se sitúan entre 12 y 14 px sin reducir contraste.

Espaciado: escala de 8, 16, 24, 32 y 48 px; se admiten ajustes de 4 px en detalles. Las tarjetas usan bordes suaves, radios de 8 o 12 px y separación suficiente entre objetivos. El ancho de contenido se limita para mantener la lectura y las columnas se reducen al estrechar la pantalla.

Componentes: botón primario, secundario y de peligro; tarjeta de servicio; filtro; opción de profesional; día; bloque horario; resumen; aviso; campo con etiqueta; estado vacío; acordeón de ayuda. Cada componente tiene estado normal, foco y, cuando corresponde, seleccionado o deshabilitado.

Accesibilidad implementada: HTML semántico, idioma español, etiquetas asociadas, foco visible, enlace de salto, controles nativos, estados escritos, validación de campos, avisos y preferencia de movimiento reducido. Pendientes: revisión con lector de pantalla y diversidad de usuarios.

Elemento | Decisión | Motivo
Botón principal | 48 px de alto mínimo | Objetivo fácil de activar
Filtros y enlaces de navegación | 44 px mínimo | Separación de objetivos
Resumen | Lateral en escritorio; bajo el paso en móvil | Mantener contexto
Grid | 3, 2 o 1 columnas según espacio | Reflujo sin recorte

Nota: No se declara certificación WCAG AA. Los resultados automáticos y límites de la revisión figuran en el informe técnico.

---

## Página 13: 05 / Arquitectura de información - Una estructura centrada en la cita.

La navegación principal tiene cuatro destinos: Inicio, Servicios, Nuestro equipo y Mis citas. El perfil tiene acceso independiente en la cabecera y la ayuda aparece en el pie. La reserva es una secuencia contextual, no un conjunto de destinos principales que compitan con el catálogo.

La jerarquía separa exploración, reserva, gestión y soporte. El catálogo permite entrar directamente por una categoría, abrir detalles o seleccionar un servicio. El equipo ofrece contexto y devuelve al catálogo; no promete horarios sin conocer el servicio. Mis citas reúne acciones asociadas a una reserva específica.

La arquitectura contempla dieciocho pantallas de cliente y nueve vistas administrativas: acceso, resumen, trabajadores, formulario de trabajador, servicios, formulario de servicio, agenda completa, detalle de cita y configuración. El diagrama de esta página resume el cliente; la segunda página del sitemap exportado muestra el panel.

Nota: Archivo independiente: Arquitectura/Cardenas_Jerson_Sitemap.pdf. Incluye cliente y administración. El acceso administrativo verifica la sesión antes de mostrar o modificar datos.

---

## Página 14: 05 / Arquitectura de información - Dos flujos, con alternativas visibles.

Agendar: Inicio → Servicios → Selección → Profesional → Fecha → Horario → Revisión → Confirmación → Mis citas. Si no hay servicio, no se permite continuar; si no hay horario válido, se cambia fecha o profesional; si un campo no es válido, se corrige antes de guardar. Volver conserva el borrador.

Reagendar: Mis citas → Detalle → Cambiar fecha u hora → Fecha → Horario → Revisión → Confirmar cambio. La reserva anterior se conserva hasta el final y el código no cambia. Abandonar el flujo mantiene la cita original. Un horario incompatible devuelve a la selección, sin crear un duplicado.

La cancelación se documenta como flujo complementario: Detalle → Cancelar → Decisión explícita → Estado cancelada. «Conservar mi cita» vuelve al detalle activo. La fricción intencional aparece únicamente antes de una acción que modifica el compromiso.

Decisión | Camino principal | Alternativa
¿Hay servicio? | Elegir profesional | Volver a catálogo
¿Hay horario compatible? | Seleccionar y revisar | Cambiar día o profesional
¿Datos válidos? | Guardar cita | Corregir campo
¿Confirma cambio? | Actualizar mismo código | Conservar cita original

Nota: Los PDF de AgendarCita y ReagendarCita incluyen inicio, decisiones, éxito, error y salida sin cambios.

---

## Página 15: 06 / Prototipado - De estructura simple a detalle visual.

Los wireframes de baja fidelidad representan cinco pantallas clave: inicio, catálogo, elección de profesional, fecha/horario y revisión. Son artefactos conceptuales preparados para explicar la estructura de esta entrega; no se presentan como evidencia de una etapa investigativa realizada antes de esta conversación.

La estructura prioriza el orden de lectura y el lugar de las acciones. Se distingue contenido informativo de selección y se reserva un área para el resumen. A partir de esa base se desarrollaron colores, tipografía, estados, imágenes y reglas de navegación en el prototipo de alta fidelidad.

La evolución explicada es una comparación de artefactos: la baja fidelidad muestra bloques y jerarquía; la alta fidelidad añade contenido realista de demostración y comportamiento. Los cambios de accesibilidad posteriores a la revisión técnica sí corresponden a ajustes observados durante la construcción.

Nota: Anexo: cinco wireframes vectoriales exportados a PDF. No se atribuyen comentarios ni aprobaciones a usuarios inexistentes.

---

## Página 16: 06 / Prototipado - Alta fidelidad que responde.

El inicio presenta una propuesta breve, cuatro categorías y tres servicios destacados. El catálogo mantiene atributos comparables y permite combinar servicios. Las pantallas de reserva separan preferencias sin pedir datos personales al principio.

El resumen se actualiza al cambiar servicios, profesional o horario. La confirmación muestra fecha, duración, profesional, total y código. El listado de citas permite consultar, cambiar o cancelar sin repetir la elección de servicios.

Los controles de cliente consultan la configuración y disponibilidad del servidor local. Las reservas se guardan con una copia de los servicios, el precio y la duración acordados. El administrador consulta la agenda completa. Las fotografías y fuentes son locales; no se solicitan imágenes a terceros al ejecutar la aplicación.

Nota: Capturas de la implementación real. Los datos «Persona de prueba» y prueba@example.com se generaron para verificación técnica, sin participante humano.

---

## Página 17: 06 / Prototipado - Adaptación e iteraciones verificables.

La composición pasa de dos columnas a una en móvil. El catálogo reduce columnas y las acciones conservan su tamaño táctil. Los horarios se muestran como bloques y los días pueden envolver a otra fila; la navegación principal sigue visible.

Durante la primera pasada técnica se detectó una diferencia entre el texto visible de selección y el nombre accesible después de elegir un servicio. Se alinearon las etiquetas para que el control pueda reconocerse por voz y lector de pantalla. También se corrigió el comportamiento del enlace de salto con el enrutamiento por hash.

Se alinearon las etiquetas de fecha con el texto visible y se volvió a revisar el recorrido. En la ampliación se añadieron fotografías para todo el catálogo, retratos del equipo y panel administrativo. Las comprobaciones de administración se registran por separado de las sesiones humanas todavía pendientes.

Nota: Las iteraciones técnicas no prueban facilidad de uso con personas. La siguiente iteración depende de las sesiones P01 y P02.

---

## Página 18: 07 / Testing de usabilidad - Un plan para escuchar a dos personas.

Estado al cierre: cero sesiones humanas realizadas. Se entrega un plan ejecutable y la herramienta testing.html para registrar dos participantes reales. No se crean citas textuales, tiempos ni tasas de éxito atribuidos a personas.

Metodología propuesta: prueba moderada de tareas con pensamiento en voz alta, observación directa y pregunta de facilidad de 1 a 7 después de cada tarea. Duración estimada: 20 a 25 minutos por persona. Se permite retirarse sin explicar motivos.

Reclutamiento: dos personas adultas que hayan usado servicios de cuidado personal; preferiblemente una que reserve con frecuencia y otra ocasional, con distinta familiaridad digital. P01 y P02 son códigos previstos, no participantes ya reclutados. Si hay necesidades de accesibilidad, registrar ajustes consentidos.

Preparación: comprobar que el prototipo abre, borrar datos de demostración antes de cada sesión, disponer de pantalla compartida o observación presencial y acordar capturas anónimas. No solicitar información real de contacto. El facilitador no debe explicar el camino de la tarea salvo bloqueo sostenido; cualquier ayuda se registra.

Objetivo | Qué observar | Dato
Comprensión | Explica total y duración | Respuesta y notas
Eficacia | Completa resultado esperado | Sin ayuda / con ayuda / no
Eficiencia | Recorrido, vueltas y tiempo | Segundos y observaciones
Control | Entiende cambiar y cancelar | Acciones y explicación

Nota: La muestra de dos sirve como evaluación formativa del curso. No permite generalizar tasas a toda la población.

---

## Página 19: 07 / Testing de usabilidad - Tareas y guion del facilitador.

Apertura: «Estamos probando el diseño, no tus habilidades. Usa datos ficticios y cuéntame lo que piensas. Puedes detenerte cuando quieras. ¿Aceptas que tome notas anónimas y, si acordamos, capturas sin información personal?». Solo iniciar el registro si hay consentimiento.

Antes de cada tarea, leer el escenario sin nombrar botones. Iniciar el cronómetro cuando la persona comience y detenerlo en el resultado o al abandonar. Registrar retrocesos, dudas y el momento de cualquier ayuda. Si pregunta qué hacer, responder de forma neutral: «¿Qué intentarías?».

Después de cada tarea: «Del 1 al 7, donde 1 es muy difícil y 7 muy fácil, ¿qué tan fácil te resultó? ¿Qué te hizo dudar?». Al cierre: «¿Qué fue lo más claro? ¿Qué cambiarías primero?». No convertir una interpretación del observador en una cita literal.

En testing.html completar los tres resultados, tiempos, facilidad y notas, más perfil anónimo y archivos de evidencia. Guardar P01 y P02, exportar JSON y guardar capturas en Testing/Evidencias. Las capturas técnicas de desarrollo permanecen en su propia subcarpeta.

Nota: Criterio de bloqueo práctico: sin avance durante 60 segundos, preguntar si desea continuar; registrar la intervención. El límite por tarea es orientativo, no una presión sobre la persona.

---

## Página 20: 07 / Testing de usabilidad - Resultados disponibles y límites.

Resultados humanos: no disponibles. Eficacia, tiempos, facilidad, frecuencia de problemas y comentarios por participante permanecen pendientes. El informe de resultados contiene los formatos de P01 y P02 y distingue estos campos de la verificación automatizada.

Resultados técnicos: se verificó reservar, reagendar sin duplicados, cancelar y bloquear solapamientos. Se añadieron pruebas de login administrativo, gestión de trabajadores y servicios, cambio de precios, agenda completa, carga de fotos, configuración, permisos y persistencia al reiniciar.

Se utilizó axe-core para reglas automáticas WCAG 2.1 A/AA sobre pantallas representativas y revisión responsive a 390 px. La validación automática no cubre toda la experiencia de lector de pantalla, comprensión, orden de lectura o adaptación de usuarios. El número exacto y el detalle por regla se conservan en Verificacion_Tecnica.json.

Las capturas muestran momentos reales de la ejecución técnica con datos ficticios. No son evidencia de testing con participantes. Para satisfacer la rúbrica deben añadirse las dos sesiones humanas y actualizar este documento y el informe con sus observaciones reales.

Nota: No se reportan promedios ni porcentajes de éxito de personas porque el denominador actual es cero.

---

## Página 21: 07 / Testing de usabilidad - Priorizar con evidencia, sin inventarla.

Severidad propuesta: 0 no es un problema, 1 cosmético, 2 menor, 3 importante y 4 bloqueante. Frecuencia: número de participantes que experimentan el problema dividido por participantes que intentaron la tarea. Con cero sesiones, la frecuencia es «no medida».

Se documentan dos problemas técnicos detectados durante la construcción y resueltos en esta versión. No se afirman dos problemas críticos observados en usuarios. Si las sesiones revelan dificultades, registrar evidencia, severidad y frecuencia antes de decidir; seleccionar como máximo dos problemas críticos para la siguiente iteración.

Las mejoras futuras sugeridas son hipótesis, no resultados: hacer más visible el resumen en pantallas pequeñas si se pierde contexto y aclarar el contraste entre cambiar y cancelar si se confunden. Solo deben priorizarse si la observación las respalda.

ID / origen | Problema | Severidad propuesta | Frecuencia humana | Estado
IT01 / técnica | Texto visible y nombre accesible no coincidían al seleccionar | 2 | No medida | Corregido
IT02 / técnica | Enlace de salto interfería con la ruta por hash | 3 | No medida | Corregido
H01 / hipótesis | Resumen podría quedar lejos en móvil | Por evaluar | No medida | Observar T1
H02 / hipótesis | Cambiar y cancelar podrían confundirse | Por evaluar | No medida | Observar T2-T3

Nota: Cierre de IT01 e IT02: repetir auditoría y navegación por teclado. Cierre de hallazgos humanos: repetir la tarea con una persona y verificar comprensión.

---

## Página 22: 08 / Conclusiones - Lo que el prototipo permite aprender.

La reserva se volvió una secuencia que expone sus decisiones y consecuencias. Automatizar sumas y restricciones evita errores de coordinación que una interfaz puramente visual no resolvería. El resultado integra estructura, contenido, estado y comportamiento en un artefacto que puede evaluarse.

Aplicar Fitts exige declarar la geometría y las unidades; Hick exige distinguir una decisión local del recorrido completo; Tesler exige reconocer que la complejidad cambia de responsable. Los cálculos y porcentajes de esta entrega son modelos ilustrativos y estimaciones de diseño, no mediciones de participantes.

La accesibilidad mejoró al verificar controles en su estado seleccionado y al comprobar el enlace de salto dentro del mecanismo de navegación. Los detalles de implementación pueden afectar el acceso aunque la pantalla parezca clara. La revisión técnica aporta evidencia sobre funcionamiento, con límites distintos a los de una sesión humana.

La conclusión sobre utilidad para usuarios permanece abierta. Las personas hipotéticas orientan decisiones, pero deben ajustarse cuando exista evidencia. La entrega avanza la construcción y deja explícito el requisito pendiente en lugar de declarar una evaluación que no ocurrió.

Pregunta | Respuesta actual
¿El flujo funciona? | Sí, en verificación técnica local documentada.
¿Las personas lo comprenden? | Pendiente de P01 y P02.
¿Está certificado como AA? | No; hay criterios implementados y revisión parcial.
¿Se puede operar un salón real? | Existe servidor local; una operación pública requiere despliegue, HTTPS y validación comercial.

---

## Página 23: 08 / Conclusiones - Próximos pasos y mejora futura.

Paso inmediato: confirmar nombre del estudiante, ejecutar las dos sesiones reales, anonimizar capturas, exportar los registros y actualizar la sección de resultados. No cambiar los campos pendientes por valores estimados. La evidencia debe permitir relacionar una observación con una tarea y una mejora.

Segunda iteración: agrupar problemas por causa, medir severidad y frecuencia con su denominador, elegir hasta dos problemas críticos y ajustar el prototipo. Repetir las tareas afectadas. Comparar observaciones de forma descriptiva, sin generalizar a una población por una muestra pequeña.

La ampliación ya incorpora servidor local, agenda compartida y sesión de administrador. Para evolucionar a producto público faltan despliegue, HTTPS, identidad de clientes, reglas comerciales verificadas y notificaciones consentidas. La persistencia local debe respaldarse; el proyecto sigue siendo académico.

Para mejorar accesibilidad: validar a 320 px, con ampliación de texto, navegación por teclado en todo el flujo y lector de pantalla. Incluir personas con necesidades diversas y revisar la comprensión del resumen y de los mensajes. La conformidad debe evaluarse sobre páginas completas y procesos completos.

Nota: Orden de entrega: validar identidad → realizar P01/P02 → actualizar resultados → comprobar PDF y ZIP → subir un solo comprimido a Moodle.

---

## Página 24: 09 / Anexos - Trazabilidad y material entregado.

Los anexos incluyen requerimientos actualizados, personas hipotéticas, casos de uso y cinco wireframes de cliente. La ampliación añade manual de administración, sitemap del panel y registros técnicos de acceso, persistencia y gestión. Los diagramas se exportan en vector y las capturas corresponden al prototipo funcional.

El caso de uso principal CU01 especifica precondiciones, flujo normal, alternativos y postcondiciones. Los requerimientos no se atribuyen a entrevistas: su fuente indica consigna, escenario o decisión de diseño. Cada uno tiene un criterio observable en el prototipo o un límite explícito.

El material de testing contiene un plan, un informe honesto de estado, formatos para dos sesiones y un registro automático. Las notas reales deben incorporarse después de ejecutar las tareas. El formulario local reduce el trabajo de recoger datos, pero no genera participantes ni resultados por sí solo.

Carpeta | Archivos principales
Documento/ | Documento de proceso de 25 páginas
Prototipo/HTML/ | HTML, CSS, JS, fotos, testing y servidor Node.js
Arquitectura/ | Sitemap y dos user flows
Testing/ | Plan, resultados, registros y capturas técnicas
Anexos/ | Personas, journeys, requerimientos, casos y wireframes
Presentacion/ | Diapositivas PDF y guion de 15 minutos

Nota: Admin: admin@appsalon.local. Contraseña inicial: AppSalon2026! El manual explica cómo iniciar, cambiar la contraseña y respaldar la base de datos. Las sesiones humanas siguen pendientes.

---

## Página 25: 09 / Referencias y guion - Fuentes y cierre del registro.

Consulta documental realizada para esta versión: 7 de noviembre de 2026, fecha de referencia del proyecto. Las formulaciones teóricas se resumen con palabras propias; las decisiones de diseño, parámetros de cálculo y estimaciones son del proyecto.

Guion de cierre de sesión: agradecer la participación, confirmar qué capturas pueden conservarse, preguntar si desea retirar alguna nota y recordar que el prototipo no creó una cita real. Registrar observaciones inmediatamente para no depender de la memoria del facilitador.

Registro de sesión: código, dispositivo, tarea, resultado, segundos, ayuda, facilidad, notas y capturas. La ampliación administrativa tiene un manual y pruebas técnicas propios; esas comprobaciones no sustituyen los dos participantes exigidos.

Nota: Autoría por confirmar: se usa Jerson Cárdenas, inferido de la carpeta de trabajo. Revisar antes de subir el ZIP. El nombre del proyecto confirmado es AppSalón.

[S1] MacKenzie, I. S. (1992). Fitts’ law as a research and design tool in human-computer interaction. Human-Computer Interaction, 7, 91-139.
https://www.yorku.ca/mack/hci1992.html

[S2] Hick, W. E. (1952). On the rate of gain of information. Quarterly Journal of Experimental Psychology, 4(1), 11-26.
https://doi.org/10.1080/17470215208416600

[S3] Tesler, L. The Law of Conservation of Complexity. Sitio del autor.
https://www.nomodes.com/larry-tesler-consulting/complexity-law

[S4] Nielsen, J. 10 Usability Heuristics for User Interface Design. NN/g; revisión 2024.
https://www.nngroup.com/articles/ten-usability-heuristics/

[S5] W3C. Web Content Accessibility Guidelines (WCAG) 2.1. Recomendación; versión 2025.
https://www.w3.org/TR/WCAG21/

[S6] Unsplash y Pexels. Fotografías ilustrativas; licencias y créditos de cada archivo en CREDITOS.txt.
https://unsplash.com/license

[S7] Rasmus Andersson. Inter. Licencia SIL Open Font License 1.1.
https://github.com/rsms/inter