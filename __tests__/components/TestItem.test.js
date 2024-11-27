import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import TestItem from '../../src/components/test-file';
describe('TestItem Component', () => {
    it('should render TestItem text', () => {
      // Render the TestItem component
      render(<TestItem />);
  
      // Find the element by its text content
      const testItemElement = screen.getByText(/TestItem/i);
  
      // Check that the element is in the document
      expect(testItemElement).toBeInTheDocument();
    });
  });