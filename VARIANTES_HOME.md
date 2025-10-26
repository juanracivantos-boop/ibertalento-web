# 🏠 Dos Variantes de Home - Ibertalento

## Análisis de Conversión

### VARIANTE A: "Foco Directo" (RECOMENDADA ✅)
**Filosofía:** Todo el diseño empuja hacia un único objetivo: "Solicitar candidatos"

**Ventajas para conversión:**
- Hero con único CTA primario prominente ("Solicitar candidatos")
- CTA secundario discreto para candidatos (no compite)
- Prueba social inmediata (antes de scroll)
- Bloques de sectores con micro-CTAs que refuerzan mensaje principal
- Casos de éxito filtrados dinámicamente (interacción = engagement)
- Proceso visual en 4 pasos (reduce fricción mental)
- FAQs responden objeciones comerciales típicas
- CTA sticky persistente en desktop/mobile

**Estructura:**
```
1. Hero con badge de confianza + H1 directo + 1 CTA primario + 1 secundario
2. Prueba social (logos + métricas en bento-grid)
3. Sectores (4 cards con iconografía clara + micro-CTA)
4. Casos de éxito (rejilla filtrable, 6 casos destacados)
5. Proceso en 4 pasos (timeline horizontal con iconos)
6. Testimonios (3 quotes verificados, diseño minimalista)
7. FAQs (accordion, 6 preguntas clave)
8. CTA final con dos opciones (empresa + candidato)
9. Footer

```

**Por qué convierte mejor:**
- Un solo objetivo principal (no dispersa atención)
- Validación social temprana (reduce escepticismo)
- Filtros en casos = sensación de personalización
- Proceso claro = reduce incertidumbre
- FAQs address objeciones = elimina barreras

---

### VARIANTE B: "Dual Path"
**Filosofía:** Dos públicos con igual peso (empresas + candidatos)

**Ventajas:**
- Atrae más tráfico (SEO para dos keywords)
- Sensación de ecosistema completo
- Candidatos sienten protagonismo

**Desventajas para conversión B2B:**
- Divide atención visual
- CTAs compiten entre sí
- Menor foco en cliente de alto valor (empresa)
- Métricas más difíciles de optimizar

**Estructura:**
```
1. Hero con split (50% empresa | 50% candidato)
2. Dos caminos desde el inicio
3. Secciones intercaladas
4. Footer dual

```

**Por qué NO la recomiendo:**
- Dilución del mensaje principal
- B2B requiere foco (empresa es quien paga)
- Duplica effort de optimización
- Confusión en mobile (dos caminos en pantalla pequeña)

---

## Decisión: VARIANTE A

**Razón estratégica:**
El modelo de negocio es B2B. Las empresas son el cliente de alto valor. Los candidatos son un "beneficio secundario" (se atraen con SEO/blog, no con home).

**Implementación:**
- Home 100% orientada a conversión B2B
- Página separada "Trabaja con nosotros" para candidatos (SEO long-tail)
- Blog con artículos para atraer ambos públicos orgánicamente

---

## Wireframe Variante A (Implementación)

```html
<!-- HERO SECTION -->
<section class="hero">
  <badge>⚡ 7–14 días de media</badge>
  <h1>Mano de obra profesional, lista en 7–14 días</h1>
  <p>Modelo de éxito: 0 € hasta la incorporación...</p>
  <cta-primario>Solicitar candidatos</cta-primario>
  <cta-secundario-discreto>Quiero postularme</cta-secundario-discreto>
</section>

<!-- PRUEBA SOCIAL -->
<section class="social-proof">
  <h2>Confían en nosotros</h2>
  <logos-grid>8 logos</logos-grid>
  <metricas-bento>
    [300+ colocaciones] [7 días TTR] [92% éxito 1er año]
  </metricas-bento>
</section>

<!-- SECTORES -->
<section class="sectores">
  <h2>Sectores que cubrimos</h2>
  <grid-4-cards>
    <card sector="construccion">
      <icon/>
      <h3>Construcción</h3>
      <bullets>Peones, Oficiales, Electricistas</bullets>
      <micro-cta>Ver roles →</micro-cta>
    </card>
    <!-- x3 más -->
  </grid-4-cards>
</section>

<!-- CASOS DESTACADOS -->
<section class="casos-exito">
  <h2>Casos reales</h2>
  <filtros>Sector | Localidad | Rol</filtros>
  <grid-6-casos>
    <card-caso>
      <tag>Construcción | Madrid</tag>
      <h4>Oficial de 1ª → Obra residencial</h4>
      <metricas>9 días | 3 entrevistas | Incorporado</metricas>
    </card-caso>
    <!-- x5 más -->
  </grid-6-casos>
  <cta-ver-todos>Ver todos los casos →</cta-ver-todos>
</section>

<!-- PROCESO -->
<section class="proceso">
  <h2>Cómo trabajamos</h2>
  <timeline-4-pasos>
    <paso>1. Brief 15' | Definimos perfil</paso>
    <paso>2. Búsqueda activa | 48h primera propuesta</paso>
    <paso>3. Validación técnica | Entrevistas coordinadas</paso>
    <paso>4. Incorporación | 0 € hasta firma contrato</paso>
  </timeline-4-pasos>
</section>

<!-- TESTIMONIOS -->
<section class="testimonios">
  <h2>Qué dicen nuestros clientes</h2>
  <grid-3-testimonios>
    <quote>
      "Necesitábamos 4 oficiales urgente. 12 días después estaban trabajando."
      — Ana L., Constructora ABC
    </quote>
    <!-- x2 más -->
  </grid-3-testimonios>
</section>

<!-- FAQs -->
<section class="faqs">
  <h2>Preguntas frecuentes</h2>
  <accordion-6-items>
    <item>¿Cuánto cuesta? | Solo cobramos si se incorpora...</item>
    <item>¿Qué garantías ofrecen? | Sustitución 90 días...</item>
    <item>¿Cuánto tarda el proceso? | 7–14 días media...</item>
    <!-- x3 más -->
  </accordion-6-items>
</section>

<!-- CTA FINAL -->
<section class="cta-final">
  <h2>¿Hablamos?</h2>
  <cta-primario>Agenda 15' gratis</cta-primario>
  <cta-secundario>O envíanos tu necesidad</cta-secundario>
</section>

<!-- STICKY CTA (fijo en scroll) -->
<sticky-cta-desktop>Solicitar candidatos</sticky-cta-desktop>
<sticky-cta-mobile>Solicitar</sticky-cta-mobile>
```

---

## Análisis de Fricción

### Variante A (Foco Directo)
| Elemento | Fricción | Solución |
|----------|----------|----------|
| ¿Es confiable? | 🔴 Alta | Logos + testimonios early |
| ¿Cuánto cuesta? | 🟡 Media | "0 € hasta incorporación" en hero |
| ¿Cuánto tarda? | 🟡 Media | "7-14 días" en badge hero + proceso visual |
| ¿Funciona en mi sector? | 🔴 Alta | Cards de sectores con roles específicos |
| ¿Y si no funciona? | 🟠 Media-Alta | FAQs con garantías + casos reales |

**Score de fricción:** 6.5/10 → Optimizado con elementos de confianza

---

### Variante B (Dual Path)
| Elemento | Fricción | Solución |
|----------|----------|----------|
| ¿Qué soy: empresa o candidato? | 🔴 Alta | Split hero confuso |
| ¿A quién me dirijo? | 🟡 Media | Dos públicos = mensaje diluido |
| ¿Cuál es el valor principal? | 🟠 Media-Alta | Competing value props |

**Score de fricción:** 8/10 → Más fricción cognitiva

---

## Implementación: Variante A

**Componentes a crear:**
1. `HeroConversion.tsx` - Hero con CTA prominente
2. `SocialProof.tsx` - Logos + métricas bento
3. `SectorCard.tsx` - Card de sector reutilizable
4. `CaseStudyCard.tsx` - Card de caso con filtros
5. `ProcessTimeline.tsx` - Proceso en 4 pasos horizontal
6. `Testimonial.tsx` - Quote minimalista verificado
7. `FAQ.tsx` - Accordion accesible
8. `CTASection.tsx` - CTA final dual-option
9. `StickyCTA.tsx` - CTA persistente responsive

**Métricas de éxito:**
- Tasa de conversión hero → form: objetivo 3-5%
- Scroll depth 75%+: objetivo 40%+
- Clicks en sector cards: objetivo 25%
- Engagement con filtros de casos: objetivo 15%
- FAQ abiertas: objetivo 30%

---

## Next Steps

1. Implementar `tailwind.config.ts` con colores del sistema
2. Crear componentes base con shadcn/ui
3. Desarrollar página `/` completa (Variante A)
4. Añadir schema.org + meta/OG
5. Testing de contraste AA en todos los botones
6. Lighthouse audit (objetivo 90+ todas las métricas)

---

**Decisión final:** VARIANTE A - Foco Directo  
**Razón:** Maximiza conversión B2B sin diluir mensaje principal  
**Fecha:** Octubre 2025


