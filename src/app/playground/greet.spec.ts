import { greet } from './greet';

describe('greet', () => {
  it('should include name in return massage', () => {
    expect(greet('Maxim')).toContain('Maxim');
  });
});
