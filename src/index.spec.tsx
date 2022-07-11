import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Index from './pages';

jest.mock('react-dom');
describe('test index', () => {
  beforeEach(() => {
    render(<Index />);
  });

  it('should testing', () => {
    expect(screen.queryByText('teste')).toBeInTheDocument;
  });
});
