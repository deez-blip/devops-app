import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('affiche le texte et déclenche onClick', () => {
    const handle = jest.fn();
    render(<Button onClick={handle}>Clique-moi</Button>);

    const btn = screen.getByRole('button', { name: /clique-moi/i });
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(handle).toHaveBeenCalledTimes(1);
});