export function Dialog({ id, children }) {
  return `
    <dialog id="${id}" class="dialog">
      ${children}
    </dialog>
  `;
}
