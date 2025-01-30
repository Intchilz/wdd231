import { Layout } from '../components/Layout.js';
import { MemberList } from '../components/MemberList.js';
import { useState } from '../utils/use-state.js';

const [getListType, setListType] = useState('grid');

async function render() {
  const listType = getListType();

  document.getElementById('root').innerHTML = Layout({
    children: `
    <main class="main" id="main">
      <div class="display:flex flex:justify:center margin:y:base">
        <div class="icon ${listType === 'grid' ? 'is-active' : ''}">
          <img src="images/grid-icon.svg" alt="" data-list-type="grid">
        </div>
        <div class="icon ${listType === 'list' ? 'is-active' : ''}">
          <img src="images/list-icon.svg" alt="" data-list-type="list">
        </div>
      </div>
      ${await MemberList({ type: listType })}
    </main>
  `,
  });

  document.querySelectorAll('.icon img').forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const newListType = e.target.getAttribute('data-list-type');
      setListType(newListType, render);
    });
  });
}

(async () => {
  await render();
})();
