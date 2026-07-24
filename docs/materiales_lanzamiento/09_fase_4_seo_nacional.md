# FASE 4 — ENTREGABLE 4.1: ESTRATEGIA SEO NACIONAL
## HURVANT Certification & Technical Validation

**Fecha de emisión:** Julio 2026  
**Autor:** Especialista SEO Senior & Arquitecto de Contenidos  
**Proyecto:** Lanzamiento Nacional Hurvant en España — Fase 4: Estrategia Digital  
**Objetivo:** Dominio orgánico B2B en Google España para intenciones de compra técnica e inspección  

---

## 1. OBJETIVOS SEO NACIONALES (12 MESES)

1. **Top 3 Orgánico en Google España** para términos transaccionales clave: *evaluación de competencias operativas*, *inspección maquinaria RD 1215/97*, *ensayos no destructivos grúas*, *certificación carretilleros ISO 17024*.
2. **Generación de Tráfico B2B Cualificado:** Alcanzar 5.000 visitas mensuales de perfiles profesionales (Directores HSE, Directores de Planta, Directores de Compras y Abogados Laboralistas) en los primeros 6 meses.
3. **Conversión Orgánica (Lead Capture):** Mantener una tasa de conversión a solicitud de reunión o piloto > 3,8% sobre el tráfico orgánico total.
4. **Dominio de Autoridad (DR / DA):** Construir una autoridad de dominio (Domain Rating en Ahrefs > 35) mediante enlaces en medios económicos, portales de ingeniería e instituciones industriales en España.

---

## 2. KEYWORD RESEARCH B2B Y MATRIZ DE INTENCIÓN DE BÚSQUEDA

### 2.1. Keywords Transaccionales (Alta Intención de Compra B2B)

| Palabras Clave (Google España) | Vol. Est. | Dificultad (KD) | Intención de Búsqueda | URL Objetivo |
| :--- | :--- | :--- | :--- | :--- |
| `inspeccion maquinaria rd 1215 97` | 1.400/mes | Media (28) | Transaccional / Compra | `/servicios/inspeccion-equipos` |
| `evaluacion de competencias operativas` | 880/mes | Baja (14) | Transaccional / Compra | `/servicios/evaluacion-operativa` |
| `certificacion operarios maquinaria` | 1.100/mes | Media (22) | Transaccional / Compra | `/servicios/evaluacion-operativa` |
| `ensayos no destructivos gruas barcelona` | 450/mes | Baja (12) | Local / Transaccional | `/servicios/ensayos-no-destructivos` |
| `adecuacion tecnica equipos de trabajo` | 720/mes | Baja (18) | Transaccional / Compra | `/servicios/inspeccion-equipos` |
| `auditoria cumplimiento prl empresas` | 600/mes | Media (25) | Transaccional | `/servicios/evaluacion-operativa` |

---

### 2.2. Keywords Comerciales / Comparativas (Investigación B2B)

| Palabras Clave | Vol. Est. | Intención | URL Objetivo |
| :--- | :--- | :--- | :--- |
| `diferencia formacion prl y evaluacion ISO 17024` | 320/mes | Investigación | `/blog/diferencia-formacion-y-evaluacion-17024` |
| `responsabilidad penal accidentes maquinaria alquilada` | 480/mes | Investigación Legal | `/blog/responsabilidad-penal-maquinaria-alquilada` |
| `placa marcado rd 1215 obligatoria` | 390/mes | Normativa | `/servicios/inspeccion-equipos` |
| `metodos ensayos NDT ultrasonidos soldaduras` | 510/mes | Técnica | `/servicios/ensayos-no-destructivos` |

---

### 2.3. Keywords Informacionales / Top of Funnel (Captación de Tráfico Orgánico)

- `check list inspeccion carretillas elevadoras` (Descarga Lead Magnet)
- `como superar inspeccion de trabajo prl` (Artículo Blog)
- `norma ISO 17024 requisitos certificacion personas` (Artículo Técnico)
- `ensayos ultrasonidos vs particulas magneticas` (Guía Comparativa)

---

## 3. ARQUITECTURA SEO Y SITEMAP DE LANDING PAGES

```mermaid
graph TD
    A[https://www.hurvant.com/] --> B[/servicios]
    A --> C[/sectores]
    A --> D[/metodologia]
    A --> E[/sobre-hurvant]
    A --> F[/blog]
    
    B --> B1[/servicios/evaluacion-operativa]
    B --> B2[/servicios/inspeccion-equipos]
    B --> B3[/servicios/ensayos-no-destructivos]
    B --> B4[/servicios/programas-piloto]
    
    F --> F1[/blog/responsabilidad-penal-maquinaria-alquilada]
    F --> F2[/blog/guia-inspeccion-trabajo-sector-logistico]
    F --> F3[/blog/plan-loto-consignacion-maquinaria]
```

---

## 4. ESTRUCTURA ON-PAGE Y DATOS ESTRUCTURADOS (SCHEMA.ORG JSON-LD)

### 4.1. Estructura de Encabezados (H1 - H3) para Landing de Inspección

- **H1:** Inspección y Validación de Maquinaria según Real Decreto 1215/1997
  - **H2:** ¿Por qué la adecuación técnica RD 1215/97 es obligatoria para el empresario?
    - **H3:** Evite paradas de planta y responsabilidades penales de la dirección
  - **H2:** Metodología de Inspección Física In-Situ de HURVANT
    - **H3:** Pruebas dinámicas de estabilidad y resguardos mecánicos
    - **H3:** Emisión de dictamen firmado por ingeniero colegiado
    - **H3:** Fijación de Placa Metálica / Vinílica con Código QR inalterable

---

### 4.2. Código de Datos Estructurados JSON-LD Homologado (Schema.org)

Este fragmento debe incluirse en la cabecera `<head>` de la web para que Google reconozca a HURVANT como una organización técnica de evaluación de conformidad:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hurvant.com/#organization",
      "name": "HURVANT Certification & Technical Validation",
      "url": "https://www.hurvant.com/",
      "logo": "https://www.hurvant.com/Logo.png",
      "description": "Organismo Técnico Independiente de Tercera Parte especializado en la evaluación observacional de personas (ISO 17024), adecuación de maquinaria (RD 1215/1997) y Ensayos No Destructivos NDT (ISO 9712).",
      "email": "hola@hurvant.com",
      "telephone": "+34611888179",
      "areaServed": {
        "@type": "Country",
        "name": "Spain"
      },
      "sameAs": [
        "https://trace.hurvant.com",
        "https://www.hurvantphoto.com",
        "https://intranet.hurvant.com"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hurvant.com/#website",
      "url": "https://www.hurvant.com/",
      "name": "HURVANT",
      "publisher": {
        "@id": "https://www.hurvant.com/#organization"
      },
      "inLanguage": "es-ES"
    },
    {
      "@type": "Service",
      "name": "Inspección y Adecuación de Maquinaria RD 1215/1997",
      "provider": {
        "@id": "https://www.hurvant.com/#organization"
      },
      "serviceType": "Inspección Técnica Industrial y Validación de Seguridad",
      "areaServed": "España",
      "url": "https://www.hurvant.com/servicios/inspeccion-equipos"
    }
  ]
}
```

---

## 5. ESTRATEGIA DE LINKBUILDING B2B Y AUTORIDAD DE DOMINIO

### 5.1. Pilares de Captación de Enlaces de Alta Autoridad (Backlinks DR > 50)
1. **Publicación de Artículos de Autoridad en Medios Económicos:**
   - *Expansión / El Economista / Cinco Días:* Artículos sobre "El nuevo marco de Compliance en PRL y la Diligencia Debida del Administrador".
2. **Prensa Sectorial Especializada Industrial & Logística:**
   - *Cadena de Suministro / Cuadernos de Logística / Interempresas / Revista de Prevención de Riesgos Laborales:* Notas sobre el lanzamiento del Pasaporte Técnico QR de Hurvant.
3. **Colegios Oficiales de Ingenieros e Instituciones:**
   - Acuerdos de difusión técnica con colegios de ingenieros industriales (COITI / COIIA) en Cataluña y Madrid.

---

## 6. AUDITORÍA TÉCNICA DE CORE WEB VITALS (RENDIMIENTO)

- **LCP (Largest Contentful Paint):** Target < 1.2s (optimización de `Logo.png` y compresión WebP de imágenes de inspección).
- **INP (Interaction to Next Paint):** Target < 50ms (rutas limpias con React Router y desopacamiento de bundle con `React.lazy()`).
- **CLS (Cumulative Layout Shift):** Target 0.00 (dimensiones fijas especificadas en todas las imágenes del hero y tarjetas de servicios).
- **SSR / Prerendering SEO:** Configuración de Vercel Prerender para entregar HTML completo a los rastreadores de Googlebot.

---
