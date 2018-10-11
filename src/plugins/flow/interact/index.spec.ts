import test from 'ava';
import { interact } from './';

test('interact has action', t => {
    t.true(interact.hasOwnProperty('action'));
});

test('interact has confirmation', t => {
    t.true(interact.hasOwnProperty('confirmation'));
});