import { Layout } from '../components/Layout.js';

function getParamsFromUrlOf(keys = []) {
  if (!keys.length) {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  const result = {};
  keys.forEach((key) => {
    if (!key) {
      return;
    }
    result[key] = params.get(key);
  });

  // delete the field which values are null
  Object.keys(result).forEach((key) => {
    if (result[key] === null) {
      delete result[key];
    }
  });
  return result;
}

function buildKey(key = '') {
  return `${key.charAt(0).toUpperCase()}${key.slice(1)}`.replace(/-/g, ' ');
}

const params = getParamsFromUrlOf([
  'firstName',
  'lastName',
  'organizationTitle',
  'email',
  'mobile',
  'businessOrganizationsName',
  'membershipLevel',
  'description',
  'timestamp',
]);

async function render() {
  document.getElementById('root').innerHTML = Layout({
    children: `
    <main class="main" id="main">
      <h1>Thank you</h1>
      <div  class="main bg:primary width:90% margin:x:auto padding:base border:radius:base" id="main">
        <h1 class="font:size:xjumbo margin:y:large text:center">Thank you</h1>
        <p class="font:size:xlarge margin:y:medium text:center">
          Thank you for filling out the form. Here is the information you
          submitted:
        </p>
        <div class="box">
          <div class="line:height:large padding:base">
            ${Object.entries(params)
              .map(([key, value]) => {
                return `
                  <p class="submit-info"><strong>${buildKey(key)}:</strong> ${value}</p>
                `;
              })
              .join('')}
          </div>
        </div>
      </div>
    </main>
  `,
  });
}

(async () => {
  await render();
})();
