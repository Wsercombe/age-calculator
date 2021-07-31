export default class AgeCalculator {
  constructor(age, continent, lifeStyle, activityLevel) {
    this.age = age;
    this.continent = continent;
    this.lifeStyle = lifeStyle;
    this.activityLevel = activityLevel;
    this.mercuryYears = this.parseAge(this.age);
    this.venusYears = this.parseAge(age);
    this.marsYears = this.parseAge(age);
    this.jupterYears = this.parseAge(age);
  }
}
