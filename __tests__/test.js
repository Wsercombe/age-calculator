import AgeCalculator from '../src/js/age-calculator.js';



describe('ageCalculator', () => {
  test('should initialize mercury years', () => {
    const mercuryAge = new AgeCalculator(0.24, "test", "test", "test");
    expect (mercuryAge.mercuryYears).toEqual(1);
    });
  });