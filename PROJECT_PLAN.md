# 🚀 Plan de Implementación - Ibertalento B2B

## Estado Actual

✅ **Completado:**
- Sistema de diseño (PALETTE.md)
- Análisis de variantes (VARIANTES_HOME.md)
- Decisión: Variante A "Foco Directo"

## Fase 1: Fundamentos (EN PROGRESO)

### 1.1 Configuración Base
- [ ] Actualizar `tailwind.config.ts` con nueva paleta
- [ ] Crear `globals.css` con variables CSS custom
- [ ] Actualizar `layout.tsx` con nuevos estilos base

### 1.2 Componentes UI Base (shadcn/ui)
- [ ] `Button` (4 variantes por sector)
- [ ] `Card` (con hover states)
- [ ] `Badge` (confianza + sectores)
- [ ] `Input` / `Select` (forms)
- [ ] `Accordion` (FAQs)

## Fase 2: Componentes de Negocio

### 2.1 Hero & Conversión
- [ ] `HeroConversion.tsx` - Hero principal
- [ ] `StickyCTA.tsx` - CTA persistente

### 2.2 Prueba Social
- [ ] `SocialProof.tsx` - Logos + métricas
- [ ] `MetricCard.tsx` - Cards de KPIs

### 2.3 Sectores
- [ ] `SectorCard.tsx` - Card reutilizable
- [ ] `SectorGrid.tsx` - Grid de 4 sectores

### 2.4 Casos de Éxito
- [ ] `CaseStudyCard.tsx` - Card individual
- [ ] `CaseStudyGrid.tsx` - Grid + filtros
- [ ] `CaseFilters.tsx` - Filtros interactivos

### 2.5 Proceso
- [ ] `ProcessTimeline.tsx` - Timeline horizontal
- [ ] `ProcessStep.tsx` - Paso individual con animación

### 2.6 Testimonios & FAQs
- [ ] `Testimonial.tsx` - Quote verificado
- [ ] `TestimonialGrid.tsx` - Grid de testimonios
- [ ] `FAQ.tsx` - Accordion item
- [ ] `FAQSection.tsx` - Sección completa

### 2.7 Formularios
- [ ] `LeadFormCompany.tsx` - Form multi-step empresa
- [ ] `LeadFormCandidate.tsx` - Form candidato
- [ ] `FormField.tsx` - Field reutilizable
- [ ] `FormSuccess.tsx` - Estado de éxito

## Fase 3: Páginas

### 3.1 Home (Prioridad 1)
- [ ] `/src/app/page.tsx` - Variante A completa
- [ ] Schema.org: Organization + Service
- [ ] Meta/OG tags optimizados

### 3.2 Sectores
- [ ] `/sectores/page.tsx` - Vista general
- [ ] `/sectores/construccion/page.tsx`
- [ ] `/sectores/hosteleria/page.tsx`
- [ ] `/sectores/industria/page.tsx`
- [ ] `/sectores/limpieza/page.tsx`

### 3.3 Casos de Éxito
- [ ] `/casos-de-exito/page.tsx` - Rejilla completa filtrable

### 3.4 Proceso
- [ ] `/como-trabajamos/page.tsx` - Proceso detallado

### 3.5 Formularios
- [ ] `/solicitar-candidatos/page.tsx` - Form empresa
- [ ] `/trabaja-con-nosotros/page.tsx` - Form candidato

### 3.6 Blog/Guías (SEO)
- [ ] `/blog/page.tsx` - Índice
- [ ] Plantilla de artículo
- [ ] 3 artículos placeholder

## Fase 4: SEO & Analytics

### 4.1 SEO Técnico
- [ ] sitemap.xml dinámico
- [ ] robots.txt
- [ ] Schema.org por página
- [ ] Meta tags por página
- [ ] Canonical URLs

### 4.2 Analytics
- [ ] Google Analytics 4 setup
- [ ] Eventos personalizados:
  - Click CTA
  - Form submit
  - Scroll 75%
  - Sector card click
  - Case study view
  - FAQ open
- [ ] Consent mode (GDPR)

## Fase 5: Performance & Accesibilidad

### 5.1 Performance
- [ ] Next/Image optimización
- [ ] Font optimization (display=swap)
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Lighthouse audit (90+)

### 5.2 Accesibilidad
- [ ] Contraste AA verificado
- [ ] Focus states
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] ARIA labels
- [ ] `prefers-reduced-motion`

## Fase 6: Testing & QA

### 6.1 Tests Unitarios
- [ ] Componentes críticos
- [ ] Forms validation

### 6.2 Tests E2E
- [ ] Flujo de conversión empresa
- [ ] Flujo de conversión candidato

### 6.3 Cross-browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile (iOS/Android)

## Métricas de Éxito

### Conversión
- [ ] Tasa hero → form: 3-5%
- [ ] Scroll depth 75%+: 40%+
- [ ] Engagement sectores: 25%+
- [ ] Engagement casos: 15%+
- [ ] FAQs abiertas: 30%+

### Performance
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse SEO: 95+

### SEO
- [ ] Indexación completa
- [ ] Rich results activados
- [ ] Core Web Vitals: verde

## Timeline Estimado

| Fase | Duración | Estado |
|------|----------|--------|
| Fase 1: Fundamentos | 2h | 🔵 En progreso |
| Fase 2: Componentes | 4h | ⚪ Pendiente |
| Fase 3: Páginas | 3h | ⚪ Pendiente |
| Fase 4: SEO/Analytics | 1h | ⚪ Pendiente |
| Fase 5: Performance | 1h | ⚪ Pendiente |
| Fase 6: Testing | 1h | ⚪ Pendiente |

**Total estimado:** 12 horas de desarrollo

---

## Nota Importante

Este es un proyecto ambicioso. Dada la limitación de contexto, voy a implementar:

1. **Sistema de diseño completo** ✅
2. **Componentes core** (los más críticos)
3. **Home completa** (Variante A)
4. **1 página de sector** (ejemplo)
5. **SEO básico**

El resto quedará como **plantillas y estructura** para que puedas completar.

---

**Estado:** FASE 1 EN PROGRESO  
**Última actualización:** Octubre 2025





