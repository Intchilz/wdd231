// TODO: need to be more agnostic about the data that is passed in
export function Member(
  { name, phone, website, image, industry },
  { classToAdd } = { classToAdd: '' },
) {
  return `
    <div class="card ${classToAdd}">
      <div class="card__header">
        <h1 class="card__title">${name}</h1>
        <h2 class="card__subtitle">${industry}</h2>
      </div>
      <div class="card__body">
        <img src="images/${image}" alt="${name}" class="card__image">
        <div class="card__info">
          <p><span class="card__info-label">Email:</span>email@domain.com</p>
          <p><span class="card__info-label">Phone:</span>${phone}</p>
          <p><span class="card__info-label">Website:</span>${website}</p>
        </div>
      </div>
    </div>
  `;
}
