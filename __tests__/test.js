import AgeCalculator from '../src/js/age-calculator.js';

describe('ageCalculator', () => {
  test('should initialize mercury years', () => {
    const mercuryAge = new AgeCalculator(0.24, "", "", "");
    expect (mercuryAge.mercuryYears).toEqual(1);
    });
  test('should initialize venus years', () => {
    const venusAge = new AgeCalculator(0.62, "", "", "");
    expect (venusAge.venusYears).toEqual(1);
    });
  test('should initialize mars years', () => {
    const marsAge = new AgeCalculator(1.88, "", "", "");
    expect (marsAge.marsYears).toEqual(1);
    });

  test('should initialize jupiter years', () => {
    const jupiterAge = new AgeCalculator(11.86, "", "", "");
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

  test('should reduce 5 years for being a drinker', () => {
    const drinkerLifeExpectancy = new AgeCalculator(0, "antarctica", "drinker", "");
    expect (drinkerLifeExpectancy.lifeExpectancy).toEqual(105);
  });

  test('should reduce 10 years for being a smoker', () => {
    const smokerLifeExpectancy = new AgeCalculator(0, "antarctica", "smoker", "");
    expect (smokerLifeExpectancy.lifeExpectancy).toEqual(100);
  });

  test('should reduce 15 years for being a drug addict', () => {
    const drugAddictLifeExpectancy = new AgeCalculator(0, "antarctica", "drugAddict", "");
    expect (drugAddictLifeExpectancy.lifeExpectancy).toEqual(95);
  });

  test('should add 5 years for being a vegan', () => {
    const veganLifeExpectancy = new AgeCalculator(0, "antarctica", "vegan", "");
    expect (veganLifeExpectancy.lifeExpectancy).toEqual(115);
  });

  test('should add 10 years for being a healthy eater', () => {
    const healthyEaterLifeExpectancy = new AgeCalculator(0, "antarctica", "healthyEater", "");
    expect (healthyEaterLifeExpectancy.lifeExpectancy).toEqual(120);
  });
});