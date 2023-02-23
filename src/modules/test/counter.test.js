import getShowCount from '../showCounter.js';

describe('showCounter', () => {
  test('returns the number of child elements in .main-section', () => {
    const mockHtml = `
      <ul class="main-section">
        <li></li>
        <li></li>
      </ul>
    `;
    document.body.innerHTML = mockHtml;
    const expectedCount = 2;
    const actualCount = getShowCount();
    expect(actualCount).toBe(expectedCount);
  });
});