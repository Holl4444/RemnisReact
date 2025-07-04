import MemForm from '../components/memoryForm';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('MemForm testing', () => {
  it('should render the text area and submit button', async () => {
    render(<MemForm />);

    const textArea = screen.getByPlaceholderText(
      'Share your memory here...'
    );
    const subBtn = screen.getByRole('button');

    expect(subBtn).toBeTruthy();
    expect(textArea).toBeTruthy();
  });

  it('should submit text-area input', async () => {
    render(<MemForm />);

    const textArea = screen.getByPlaceholderText<HTMLInputElement>(
      'Share your memory here...'
    );
    const subBtn = screen.getByRole('button');

    await userEvent.type(textArea, 'Can type test.');

    expect(textArea.value).toBe('Can type test.');

    await userEvent.click(subBtn);
    
    expect(screen.getByText('Memory Saved')).toBeTruthy();

  });
});