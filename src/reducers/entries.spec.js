import entries from './entries';

describe('entries reducer', () => {
  afterEach(() => {
    jest.unmock();
  });
  it('should handle initial state', () => {
    const now = Date.now();
    Date.now = jest.genMockFunction().mockReturnValue(now);
    expect(entries([], { type: 'ADD_ENTRY', time: Date.now(), place: 'Sup' }))
      .toEqual([
        {
          time: now,
          place: 'Sup',
        },
      ]);
  });
  it('should handle ADD_ENTRY', () => {
    const now = Date.now();
    Date.now = jest.genMockFunction().mockReturnValue(now);
    expect(entries([{ time: Date.now(), place: 'Sup' }], { type: 'ADD_ENTRY', time: Date.now(), place: 'There' }))
      .toEqual([
        {
          time: now,
          place: 'Sup',
        },
        {
          time: now,
          place: 'There',
        },
      ]);
  });
});
