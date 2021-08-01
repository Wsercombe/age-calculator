import AgeCalculator from '../src/js/age-calculator.js';



describe('ageCalculator', () => {
  test('should initialize mercury years', () => {
    const mercuryAge = new AgeCalculator(0.24, "test", "test", "test");
    expect (mercuryAge.mercuryYears).toEqual(1);
    });
  test('should initialize venus years', () => {
    const venusAge = new AgeCalculator(0.62, "test", "test", "test");
    expect (venusAge.venusYears).toEqual(1);
    });
  test('should initialize mars years', () => {
    const marsAge = new AgeCalculator(1.88, "test", "test", "test");
    expect (marsAge.marsYears).toEqual(1);
    });

  test('should initialize jupiter years', () => {
    const jupiterAge = new AgeCalculator(11.86, "test", "test", "test");
    expect (jupiterAge.jupiterYears).toEqual(1);
    });
        
  });