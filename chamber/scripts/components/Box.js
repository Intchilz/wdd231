export function Box(
  { title, imageSrc, body },
  { classToAdd } = { classToAdd: '' },
) {
  return `
    <div class="box ${classToAdd}">
      <div class="box__header">
        <h1 class="box__title">${title}</h1>
      </div>
      <div class="box__body">
        ${
          imageSrc
            ? `<img src="${imageSrc}" alt="${title}" class="box__image">`
            : ''
        }
        ${body}
      </div>
    </div>
  `;
}
