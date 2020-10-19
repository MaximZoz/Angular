import { countries } from './countries';
describe('countries', () => {
  it('should contein countries code', () => {
    const result = countries();
    expect(result).toContain('ru');
    expect(result).toContain('ua');
    expect(result).toContain('by');
  });
});
