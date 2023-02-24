import { counter } from '../comments.js';

describe('counter', () => {
  test('returns the number of comments', () => {
    const comments = [{ creation_date: '2023-02-23', username: 'Sohail', comment: 'Perfect' },
      { creation_date: '2023-02-23', username: 'Mert', comment: 'Great Show' },
      { creation_date: '2023-02-24', username: 'Ahmed', comment: 'The best show ever' },
    ];
    const expectedCount = 3;
    const actualCount = counter(comments);
    expect(actualCount).toEqual(expectedCount);
  });

  test('returns 0 when there is an error', () => {
    const error = { error: 'An error occurred' };
    const expectedCount = 0;
    const actualCount = counter(error);
    expect(actualCount).toEqual(expectedCount);
  });
});