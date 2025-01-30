export function Badge({ text = '' }) {
  return `
    <div class="badge">
      <div>${text}</div>
    </div>
  `;
}
