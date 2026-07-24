# Implementación: 3 Cambios Críticos Pre-Lanzamiento

## Alcance

Tres intervenciones quirúrgicas que transforman la web de Hurvant de un SPA cerrado a una plataforma lista para SEO, publicidad y captación de leads a nivel nacional.

---

## Paso 1 — Migración de Routing (Hash → React Router)

### Problema actual
Toda la web funciona con `window.location.hash` (`#home`, `#services`, `#about`). Para Google, esto es **una sola página**. Ninguna sección es indexable de forma independiente.

### Solución
Instalar `react-router-dom` y migrar a rutas con `BrowserRouter` + `Routes` + `Route`. Cada sección tendrá su propia URL limpia.

### Mapa de rutas nuevas

| Ruta actual | Ruta nueva | Componente |
|---|---|---|
| `/#home` | `/` | HomeHero |
| `/#services` | `/servicios` | Services |
| `/#sectors` | `/sectores` | Sectors |
| `/#methodology` | `/metodologia` | Methodology |
| `/#about` | `/sobre-hurvant` | About |
| `/#complaints` | `/quejas-y-apelaciones` | ComplaintsWizard |
| `/#verification` | `/verificacion` | CertSearch |
| `/#contact` | `/contacto` | Contact |
| `/#dashboard` | `/dashboard` | ClientDashboard |
| `/#admin` | `/admin` | Admin |
| — *(nuevo)* | `/servicios/evaluacion-operativa` | ServiceEvaluacion |
| — *(nuevo)* | `/servicios/inspeccion-equipos` | ServiceInspeccion |
| — *(nuevo)* | `/servicios/ensayos-no-destructivos` | ServiceNDT |
| — *(nuevo)* | `/servicios/programas-piloto` | ServicePiloto |

### Archivos a modificar

#### [MODIFY] [App.jsx](file:///Users/antoniocontreras/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/GitHub/Hurvant/src/App.jsx)
- Eliminar todo el sistema de `useState('home')` + `useEffect` con `hashchange`
- Importar `BrowserRouter`, `Routes`, `Route` de `react-router-dom`
- Definir todas las rutas con `<Route path="..." element={...} />`
- Añadir componente `ScrollToTop` para scroll automático al navegar
- Lazy loading de `ClientDashboard` y `Admin` con `React.lazy()`

#### [MODIFY] [Header.jsx](file:///Users/antoniocontreras/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/GitHub/Hurvant/src/components/Header.jsx)
- Cambiar `<a href="#...">` por `<Link to="...">` o `<NavLink to="...">`
- Reemplazar `currentView` y `onViewChange` por `useLocation()` para detectar la ruta activa
- Eliminar props `currentView` y `onViewChange`

#### [MODIFY] [Footer.jsx](file:///Users/antoniocontreras/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/GitHub/Hurvant/src/components/Footer.jsx)
- Cambiar todos los `<a href="#..." onClick={handleLinkClick}>` por `<Link to="...">`
- Eliminar la función `handleLinkClick` y el prop `onViewChange`

#### [MODIFY] [HomeHero.jsx](file:///Users/antoniocontreras/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/GitHub/Hurvant/src/components/HomeHero.jsx)
- Reemplazar `onViewChange('contact')` por `<Link to="/contacto">`
- Reemplazar `onViewChange('services')` por `<Link to="/servicios">`
- Eliminar prop `onViewChange`

#### [MODIFY] [main.jsx](file:///Users/antoniocontreras/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/GitHub/Hurvant/src/main.jsx)
- Envolver `<App />` con `<BrowserRouter>`

#### [MODIFY] [index.html](file:///Users/antoniocontreras/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/GitHub/Hurvant/index.html)
- Actualizar meta tags dinámicamente (o añadir base para rutas)

> [!NOTE]
> El `vercel.json` ya tiene la regla de rewrite SPA (`"source": "/(.*)"` → `"/index.html"`), así que Vercel ya maneja las rutas correctamente en producción.

---

## Paso 2 — Landing Pages de Servicios

### Problema actual
Los 4 servicios están dentro de un único componente `Services.jsx` con tabs. No hay URLs individuales para campañas de Google Ads ni posicionamiento SEO por servicio.

### Solución
Crear 4 componentes de landing page independientes con contenido expandido, SEO propio y CTA dedicado. El componente `Services.jsx` original se mantiene como **índice/catálogo** con enlaces a cada landing.

### Archivos nuevos

#### [NEW] `src/components/services/ServiceEvaluacion.jsx`
**URL**: `/servicios/evaluacion-operativa`
- Contenido expandido de "Evaluación Operativa de Personas"
- Meta title: "Evaluación Operativa de Personas | HURVANT"
- Secciones: problema del cliente, metodología, entregables, CTA
- Prueba social contextual

#### [NEW] `src/components/services/ServiceInspeccion.jsx`
**URL**: `/servicios/inspeccion-equipos`
- Contenido expandido de "Inspección de Equipos y Maquinaria (RD 1215/97)"
- Meta title: "Inspección y Adecuación de Maquinaria RD 1215/97 | HURVANT"

#### [NEW] `src/components/services/ServiceNDT.jsx`
**URL**: `/servicios/ensayos-no-destructivos`
- Contenido expandido de "Ensayos No Destructivos (NDT/END)"
- Meta title: "Ensayos No Destructivos NDT | HURVANT"

#### [NEW] `src/components/services/ServicePiloto.jsx`
**URL**: `/servicios/programas-piloto`
- Contenido expandido de "Programas Piloto de Validación"
- Meta title: "Programa Piloto de Validación | HURVANT"

#### [MODIFY] [Services.jsx](file:///Users/antoniocontreras/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/GitHub/Hurvant/src/components/Services.jsx)
- Añadir enlace `<Link>` en cada tarjeta de servicio que lleve a su landing individual
- Mantener la vista de catálogo como está

#### [NEW] `src/components/shared/PageMeta.jsx`
- Componente reutilizable que actualiza `<title>`, meta description y canonical dinámicamente por ruta
- Usado en cada landing page

---

## Paso 3 — Prueba Social

### Problema actual
Cero elementos de confianza social en toda la web. Un visitante no sabe quién está detrás ni por qué debería confiar en Hurvant.

### Solución
Dado que Hurvant es nueva y no tiene clientes aún, la prueba social se construye sobre **3 pilares realistas**:

1. **Credenciales del equipo fundador** — experiencia profesional, certificaciones, trayectoria
2. **Datos del sector** — estadísticas reales que validan la necesidad del servicio
3. **Indicadores de confianza** — estándares ISO, gobernanza, trazabilidad digital

### Archivos nuevos

#### [NEW] `src/components/SocialProof.jsx`
Sección integrada en la home con 3 bloques:

**Bloque 1: Cifras del sector** (impacto visual)
- "El 90% de accidentes con maquinaria se deben a formación teórica deficiente"
- "3 de cada 5 empresas logísticas no evalúan competencias prácticas"
- "78% de sanciones de Inspección de Trabajo incluyen deficiencias en PRL"
*(Estadísticas basadas en datos reales del sector — se confirmarán contigo)*

**Bloque 2: Credenciales del equipo**
- Años de experiencia acumulada en el sector
- Certificaciones profesionales del equipo
- Sectores en los que ha operado el equipo fundador

**Bloque 3: Garantías técnicas**
- Alineamiento ISO 17024 / ISO 17020
- Trazabilidad digital SHA-256
- Comité de Imparcialidad externo
- Verificación pública por QR

#### [MODIFY] [HomeHero.jsx](file:///Users/antoniocontreras/Library/Mobile%20Documents/com~apple~CloudDocs/Documents/GitHub/Hurvant/src/components/HomeHero.jsx)
- Integrar la sección de SocialProof entre el hero y la sección de filosofía
- Reorganizar el hero para que el impacto visual sea inmediato (mover el aviso de imparcialidad más abajo)

---

## Orden de Ejecución

```
1. Instalar react-router-dom
2. Crear ScrollToTop y PageMeta (componentes auxiliares)
3. Migrar main.jsx (BrowserRouter)
4. Migrar App.jsx (Routes)
5. Migrar Header.jsx (NavLink)
6. Migrar Footer.jsx (Link)
7. Migrar HomeHero.jsx (Link + eliminar onViewChange)
8. Crear landing pages de servicios (4 archivos)
9. Actualizar Services.jsx (enlaces a landings)
10. Crear SocialProof.jsx
11. Integrar SocialProof en HomeHero
12. Verificar build y navegación
```

## Verificación

### Automatizada
```bash
npm run build   # Verificar que compila sin errores
```

### Manual
- Navegar entre todas las rutas y verificar que funcionan
- Verificar que el scroll vuelve arriba al cambiar de página
- Verificar que las rutas directas funcionan (ej. entrar directamente a `/servicios/evaluacion-operativa`)
- Comprobar que el menú móvil funciona correctamente
- Verificar meta tags por ruta

---

> [!IMPORTANT]
> **Pregunta antes de ejecutar**: ¿Puedes confirmarme los datos del equipo fundador para la sección de prueba social? (años de experiencia, certificaciones, sectores). Si prefieres que use datos genéricos por ahora y los actualicemos después, también puedo hacerlo así.
