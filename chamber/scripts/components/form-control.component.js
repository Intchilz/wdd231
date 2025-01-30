const inputType = {
  text: 'text',
  email: 'email',
  selection: 'selection',
  textarea: 'textarea',
  hidden: 'hidden',
};

export function FormControl({
  label = 'label',
  type = 'text',
  required = false,
  name = undefined,
  id = undefined,
  pattern = undefined,
  placeholder = undefined,
  selection = [],
  autocomplete = undefined,
  value,
}) {
  if (type === inputType.selection && !selection.length) {
    throw new Error('Selection input type requires a selection array');
  }

  let input = '';
  if (
    type === inputType.text ||
    type === inputType.hidden ||
    type === inputType.email
  ) {
    input = `
      <input
        class="form-input"
        type="${type}"
        required="${required}"
        name="${name ?? label.toLowerCase().replace(' ', '-').replace('/', '-').replace("'", '')}"
        id="${buildId(id, label)}"
        ${pattern ? `pattern="${pattern}"` : ''}
        ${placeholder ? `placeholder="${placeholder}"` : ''}
        ${autocomplete ? `autocomplete="${autocomplete}"` : ''}
        ${value ? `value="${value}"` : ''} 
      >
    `;
  } else if (type === inputType.selection) {
    input = `
      <select
        class="form-input"
        name=${name ?? label.toLowerCase().replace(' ', '-')}
        id=${buildId(id, label)}
        required=${required}
        value="${value ? value : ''}" 
      >
        <option value="">--</option>
        <option value="default" selected>default</option>
        ${selection.map((option) =>
          option.value === value
            ? `<option value=${option.value} selected>${option.label}</option>`
            : `<option value=${option.value}>${option.label}</option>`,
        )}.join('')
      </select>
    `;
  } else if (type === inputType.textarea) {
    input = `
      <textarea
        class="form-input"
        name="${name ?? label.toLowerCase().replace(' ', '-')}"
        id="${buildId(id, label)}"
        required="${required}"
        ${pattern ? `pattern="${pattern}"` : ''}
        ${placeholder ? `placeholder="${placeholder}"` : ''}
      >${value}</textarea>
    `;
  }

  return `
    <div class="form-control ${type === inputType.hidden ? 'display:none' : ''}">
      <label class="form-label">${label}</label>
      ${input}
    </div>
  `;
}

function buildId(id, label) {
  return (
    id ??
    label.toLowerCase().replace(' ', '-').replace('/', '-').replace("'", '')
  );
}
