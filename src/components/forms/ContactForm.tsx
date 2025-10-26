'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  nombre: string
  empresa: string
  email: string
  telefono: string
  mensaje: string
  privacidad: boolean
}

interface FormErrors {
  nombre?: string
  empresa?: string
  email?: string
  telefono?: string
  mensaje?: string
  privacidad?: string
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: '',
    privacidad: false,
  })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio'
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }

    // Empresa
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'El nombre de la empresa es obligatorio'
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    // Teléfono
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio'
    } else if (!phoneRegex.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'El teléfono no es válido'
    }

    // Mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio'
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }

    // Privacidad
    if (!formData.privacidad) {
      newErrors.privacidad = 'Debes aceptar la política de privacidad'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setStatus('loading')
    setErrors({})

    try {
      // Simular envío (reemplazar con tu endpoint real)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Aquí iría la llamada real a tu API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      
      setStatus('success')
      
      // Reset form
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        mensaje: '',
        privacidad: false,
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-muted-2 mb-2">
          Nombre completo <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          value={formData.nombre}
          onChange={(e) => handleChange('nombre', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
            errors.nombre
              ? 'border-error focus:ring-error/20 bg-error/5'
              : 'border-muted-4 focus:ring-brand-1 focus:border-brand-1'
          }`}
          placeholder="Juan Pérez"
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? 'nombre-error' : undefined}
        />
        {errors.nombre && (
          <p id="nombre-error" className="mt-2 text-sm text-error flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.nombre}
          </p>
        )}
      </div>

      {/* Empresa */}
      <div>
        <label htmlFor="empresa" className="block text-sm font-medium text-muted-2 mb-2">
          Empresa <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="empresa"
          value={formData.empresa}
          onChange={(e) => handleChange('empresa', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
            errors.empresa
              ? 'border-error focus:ring-error/20 bg-error/5'
              : 'border-muted-4 focus:ring-brand-1 focus:border-brand-1'
          }`}
          placeholder="Mi Empresa S.L."
          aria-invalid={!!errors.empresa}
          aria-describedby={errors.empresa ? 'empresa-error' : undefined}
        />
        {errors.empresa && (
          <p id="empresa-error" className="mt-2 text-sm text-error flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.empresa}
          </p>
        )}
      </div>

      {/* Email & Teléfono */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-2 mb-2">
            Email <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-error focus:ring-error/20 bg-error/5'
                : 'border-muted-4 focus:ring-brand-1 focus:border-brand-1'
            }`}
            placeholder="juan@empresa.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-error flex items-center gap-1">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-muted-2 mb-2">
            Teléfono <span className="text-error">*</span>
          </label>
          <input
            type="tel"
            id="telefono"
            value={formData.telefono}
            onChange={(e) => handleChange('telefono', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 ${
              errors.telefono
                ? 'border-error focus:ring-error/20 bg-error/5'
                : 'border-muted-4 focus:ring-brand-1 focus:border-brand-1'
            }`}
            placeholder="+34 600 123 456"
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? 'telefono-error' : undefined}
          />
          {errors.telefono && (
            <p id="telefono-error" className="mt-2 text-sm text-error flex items-center gap-1">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-muted-2 mb-2">
          Mensaje <span className="text-error">*</span>
        </label>
        <textarea
          id="mensaje"
          value={formData.mensaje}
          onChange={(e) => handleChange('mensaje', e.target.value)}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
            errors.mensaje
              ? 'border-error focus:ring-error/20 bg-error/5'
              : 'border-muted-4 focus:ring-brand-1 focus:border-brand-1'
          }`}
          placeholder="Cuéntanos qué necesitas..."
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
        />
        {errors.mensaje && (
          <p id="mensaje-error" className="mt-2 text-sm text-error flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Privacidad */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.privacidad}
            onChange={(e) => handleChange('privacidad', e.target.checked)}
            className={`mt-1 h-5 w-5 rounded border-2 transition-all duration-200 focus:ring-2 focus:ring-offset-2 cursor-pointer ${
              errors.privacidad
                ? 'border-error focus:ring-error/20'
                : 'border-muted-3 focus:ring-brand-1 checked:bg-brand-1 checked:border-brand-1'
            }`}
            aria-invalid={!!errors.privacidad}
            aria-describedby={errors.privacidad ? 'privacidad-error' : undefined}
          />
          <span className="text-sm text-muted-2 group-hover:text-muted-1 transition-colors">
            Acepto la{' '}
            <a href="/legal/privacidad" className="link" target="_blank" rel="noopener noreferrer">
              política de privacidad
            </a>{' '}
            y el tratamiento de mis datos <span className="text-error">*</span>
          </span>
        </label>
        {errors.privacidad && (
          <p id="privacidad-error" className="mt-2 text-sm text-error flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.privacidad}
          </p>
        )}
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 rounded-lg bg-success/10 border border-success/20 flex items-start gap-3" role="alert">
          <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-medium text-success">¡Mensaje enviado con éxito!</p>
            <p className="text-sm text-success/80 mt-1">
              Nos pondremos en contacto contigo en menos de 24 horas.
            </p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-lg bg-error/10 border border-error/20 flex items-start gap-3" role="alert">
          <AlertCircle className="h-5 w-5 text-error shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-medium text-error">Error al enviar el mensaje</p>
            <p className="text-sm text-error/80 mt-1">
              Por favor, inténtalo de nuevo o contáctanos directamente por email.
            </p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Solicitar consulta
          </>
        )}
      </button>

      <p className="text-xs text-muted-3 text-center">
        Los campos marcados con <span className="text-error">*</span> son obligatorios
      </p>
    </form>
  )
}