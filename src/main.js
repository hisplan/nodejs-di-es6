"use strict";

import {Injector} from 'di/injector';

import {Grinder} from './grinder';
import {CoffeeMaker} from './coffeeMaker';

var grinder = new Grinder();

var coffeeMaker = new CoffeeMaker(grinder);

coffeeMaker.brew();