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
  }
}
