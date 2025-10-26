import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../ContactForm'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}))

// Mock the toast hook
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}))

describe('ContactForm', () => {
  it('renders the form with all required fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByText('Solicita información personalizada')).toBeInTheDocument()
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/empresa/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/teléfono/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/sector/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/perfiles que necesitas/i)).toBeInTheDocument()
  })

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByText('Solicitar información')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/el nombre debe tener al menos 2 caracteres/i)).toBeInTheDocument()
      expect(screen.getByText(/el nombre de la empresa es requerido/i)).toBeInTheDocument()
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'invalid-email')
    
    const submitButton = screen.getByText('Solicitar información')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/email inválido/i)).toBeInTheDocument()
    })
  })

  it('requires GDPR consent', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByText('Solicitar información')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/debes aceptar la política de privacidad/i)).toBeInTheDocument()
    })
  })

  it('requires process consent', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const submitButton = screen.getByText('Solicitar información')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/debes aceptar el plazo de 4 meses/i)).toBeInTheDocument()
    })
  })

  it('allows selecting sector from dropdown', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const sectorSelect = screen.getByLabelText(/sector/i)
    await user.selectOptions(sectorSelect, 'Industria')
    
    expect(sectorSelect).toHaveValue('Industria')
  })

  it('allows selecting urgency level', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const urgencySelect = screen.getByLabelText(/nivel de urgencia/i)
    await user.selectOptions(urgencySelect, 'Normal (3-4 meses)')
    
    expect(urgencySelect).toHaveValue('Normal (3-4 meses)')
  })
})