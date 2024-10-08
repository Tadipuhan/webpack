import * as bootstrap from 'bootstrap'
// require('./style.css') // atau
import css from './style.scss';
import { run } from './app/app.js';
import { AlertService } from './app/alerts.service.js';
import { CalculatorService } from './app/calculator.service.js';
import { JokesService } from './app/jokes.service.js';

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);
