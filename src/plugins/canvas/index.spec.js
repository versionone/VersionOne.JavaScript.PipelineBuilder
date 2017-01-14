import test from 'ava';
import { canvas } from './';

test('canvas plugin has get', t => {
    t.true(canvas.hasOwnProperty('get'))
});

test('canvas plugin has interact', t => {
    t.true(canvas.hasOwnProperty('interact'))
});

test('canvas plugin has show', t => {
    t.true(canvas.hasOwnProperty('show'))
});