import { Footer } from './footer.component.js';
import { Header } from './header.component.js';

/** @typedef {{ children: string }} Props */
export function Layout({ children }) {
  return `
    ${Header()}
    ${children}
    ${Footer()}
  `;
}
