import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renderiza correctamente', () => {
    render(<Home />);
    
    // Ajustar según el contenido real de la página
    expect(document.body).toBeInTheDocument();
  });
});
