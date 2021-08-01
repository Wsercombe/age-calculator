export default class AgeCalculator {
  constructor(age, continent, lifeStyle, activityLevel) {
    this.age = age  ;
    this.continent = continent;
    this.lifeStyle = lifeStyle;
    this.activityLevel = activityLevel;
    this.mercuryYears = this.age / 0.24;
    this.venusYears = this.age / 0.62;
    this.marsYears = this.age / 1.88;
    this.jupiterYears = this.age / 11.86;
    this.lifeExpectancy = 0;
    this.parseLifeExpectancy();
  }
  parseLifeExpectancy() {
    // **based on made up data**
    const continentMap = {
      "northAmerica": 77,
      "australia": 77,
      "europe": 75,
      "southAmerica": 72,
      "asia": 71,
      "africa": 65,
      "antarctica": 110
    };
    this.lifeExpectancy = continentMap[this.continent];
  }
}