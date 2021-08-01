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
    
  test('should determine life expectancy from continent based on antarctica', () => {
    const antarcticaLifeExpectancy = new AgeCalculator(0, "antarctica", "", "");
    expect (antarcticaLifeExpectancy.lifeExpectancy).toEqual(110);
    });

  test('should determine life expectancy from continent based on north america', () => {
    const northAmericaLifeExpectancy = new AgeCalculator(0, "northAmerica", "", "");
    expect (northAmericaLifeExpectancy.lifeExpectancy).toEqual(77);
    });

  test('should determine life expectancy from continent based on south america', () => {
    const southAmericaLifeExpectancy = new AgeCalculator(0, "southAmerica", "", "");
    expect (southAmericaLifeExpectancy.lifeExpectancy).toEqual(72);
    });

  test('should determine life expectancy from continent based on europe', () => {
    const europeLifeExpectancy = new AgeCalculator(0, "europe", "", "");
    expect (europeLifeExpectancy.lifeExpectancy).toEqual(75);
  });

  test('should determine life expectancy from continent based on asia', () => {
    const asiaLifeExpectancy = new AgeCalculator(0, "asia", "", "");
    expect (asiaLifeExpectancy.lifeExpectancy).toEqual(71);
  });

  test('should determine life expectancy from continent based on africa', () => {
    const africaLifeExpectancy = new AgeCalculator(0, "africa", "", "");
    expect (africaLifeExpectancy.lifeExpectancy).toEqual(65);
  });
});