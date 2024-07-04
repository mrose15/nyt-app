import { render, screen } from '@/test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('renders the welcome message correctly', () => {
    render(<Welcome />);
    // Assuming the Welcome component includes a welcome message
    expect(screen.getByText(/New York Times Article Search/i)).toBeInTheDocument();
  });
});
