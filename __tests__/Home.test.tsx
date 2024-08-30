import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('should render correctly', () => {
    render(<Home />)
    const title = screen.getByText('Pankys Todos');
    
    expect(title).toBeInTheDocument();
  })
})
