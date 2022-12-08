import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import FormField from './FormField';
import { renderWithProviders } from 'helpers/RenderWithThemeProvider'

describe('Form Field', () => {
  it('Render the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
