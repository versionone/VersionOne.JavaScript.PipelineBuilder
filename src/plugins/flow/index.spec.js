import test from 'ava';
import { flow } from './';

test('flow plugin has run_task', t => {
    t.true(flow.hasOwnProperty('run_task'));
});