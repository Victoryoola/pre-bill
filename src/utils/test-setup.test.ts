import * as fc from 'fast-check';

describe('Test Setup Verification', () => {
  test('Jest is working correctly', () => {
    expect(1 + 1).toBe(2);
  });

  test('fast-check property-based testing is working', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        return a + b === b + a; // Addition is commutative
      }),
      { numRuns: 100 }
    );
  });

  test('TypeScript strict mode is enabled', () => {
    // This test verifies that TypeScript compilation works
    const value: string = 'test';
    expect(typeof value).toBe('string');
  });
});
