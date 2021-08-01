export default class AgeCalculator {
  constructor(age, continent, lifeStyle, activityLevel) {
    this.age = age;
    this.continent = continent;
    this.lifeStyle = lifeStyle;
    this.activityLevel = activityLevel;
    this.planetMap = this.parseAge(age);
  }
  parseAge(age) {
    let planetMap = {};
    planetMap["mercury"] = age / .24;
    planetMap["venus"] = age / .62;
    planetMap["mars"] = age / 1.88;
    planetMap["jupiter"] = age / 11.86;
  }
}
