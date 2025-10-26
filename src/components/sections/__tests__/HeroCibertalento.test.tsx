import { render, screen } from '@testing-library/react'
import { HeroCibertalento } from '../HeroCibertalento'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('HeroCibertalento', () => {
  it('renders the main heading', () => {
    render(<HeroCibertalento />)
    
    expect(screen.getByText('Talento Latinoamericano')).toBeInTheDocument()
    expect(screen.getByText('para España')).toBeInTheDocument()
  })

  it('renders the main description', () => {
    render(<HeroCibertalento />)
    
    expect(screen.getByText(/Traemos profesionales cualificados de Latinoamérica/)).toBeInTheDocument()
    expect(screen.getByText(/4 meses/)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<HeroCibertalento />)
    
    expect(screen.getByText('Agenda una consulta')).toBeInTheDocument()
    expect(screen.getByText('Ver proceso completo')).toBeInTheDocument()
  })

  it('renders the key benefits', () => {
    render(<HeroCibertalento />)
    
    expect(screen.getByText('Selección Rigurosa')).toBeInTheDocument()
    expect(screen.getByText('100% Legal')).toBeInTheDocument()
    expect(screen.getByText('4 Meses')).toBeInTheDocument()
  })

  it('renders the sector tags', () => {
    render(<HeroCibertalento />)
    
    expect(screen.getByText('Industria')).toBeInTheDocument()
    expect(screen.getByText('Servicios')).toBeInTheDocument()
    expect(screen.getByText('Hostelería')).toBeInTheDocument()
    expect(screen.getByText('Construcción')).toBeInTheDocument()
  })

  it('renders the floating stats', () => {
    render(<HeroCibertalento />)
    
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('meses promedio')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('tasa de éxito')).toBeInTheDocument()
  })
})
