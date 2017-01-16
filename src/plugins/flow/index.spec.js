import test from 'ava';
import { flow } from './';

test('flow plugin has artifact', t => {
    t.true(flow.hasOwnProperty('artifact'));
});