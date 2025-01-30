import { Members } from '../fetchers/members.js';
import { Member } from './Member.js';

export async function MemberList({ type }) {
  const members = await Members.get();

  if (type === 'grid') {
    return `
    <div class="grid-container">
      ${members.map((member) => Member(member)).join('')}
    </div>
  `;
  }

  if (type === 'list') {
    const tHeadHtmlContent = `
      <tr>
        <th>Company name</th>
        <th>Address</th>
        <th>Phone number</th>
        <th>website</th>
      </tr>
    `;

    const tBodyHtmlContent = members
      .map((member) => {
        const { name, address, phone, website } = member;
        return `
          <tr>
            <td>${name}</td>
            <td>${address}</td>
            <td>${phone}</td>
            <td>${website}</td>
          </tr>
        `;
      })
      .join('');

    return `
      <table>
        <thead>
          ${tHeadHtmlContent}
        </thead>
        <tbody>
          ${tBodyHtmlContent}
        </tbody>
      </table>
    `;
  }
}
