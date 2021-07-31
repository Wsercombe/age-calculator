import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from './js/age-calculator';

let ageCalculator = new AgeCalculator("mercury");



$(document).ready(function() {
  $('#age-calculator').submit(function(event) {
    event.preventDefault();

  });
});