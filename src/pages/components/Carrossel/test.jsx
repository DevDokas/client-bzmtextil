import { render } from '@testing-library/react';
import { test } from 'vitest';

import tecido from '../../../assets/tecido.jpg';
import renda from '../../../assets/renda.jpg';
import aviamento from '../../../assets/aviamento.jpg';

test('Should render the first image', () => {
  render(<img src={tecido} alt="" />);
});

test('Should render the second image', () => {
  render(<img src={renda} alt="" />);
});

test('Should render the third image', () => {
  render(<img src={aviamento} alt="" />);
});
