import test from 'ava';
import { bamboo } from './';

test('automate plugin has build', t => {
    t.true(bamboo.hasOwnProperty('build'));
});