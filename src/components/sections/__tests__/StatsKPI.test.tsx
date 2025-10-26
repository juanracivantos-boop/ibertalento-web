import { render, screen } from '@testing-library/react'
import { StatsKPI } from '../StatsKPI'

describe('StatsKPI', () => {
  it('renders the main heading', () => {
    render(<StatsKPI />)
    
    expect(screen.getByText('Resultados que hablan por sí solos')).toBeInTheDocument()
  })

  it('renders all key statistics', () => {
    render(<StatsKPI />)
    
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('Tasa de éxito en colocaciones')).toBeInTheDocument()
    
    expect(screen.getByText('4 meses')).toBeInTheDocument()
    expect(screen.getByText('Tiempo promedio del proceso')).toBeInTheDocument()
    
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Cumplimiento legal')).toBeInTheDocument()
    
    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('Empresas satisfechas')).toBeInTheDocument()
  })

  it('renders additional trust indicators', () => {
    render(<StatsKPI />)
    
    expect(screen.getByText('24/7')).toBeInTheDocument()
    expect(screen.getByText('Soporte durante todo el proceso')).toBeInTheDocument()
    
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Países de origen del talento')).toBeInTheDocument()
    
    expect(screen.getByText('5 años')).toBeInTheDocument()
    expect(screen.getByText('De experiencia en el sector')).toBeInTheDocument()
  })
})