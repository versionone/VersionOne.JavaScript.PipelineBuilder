import test from 'ava';
import { automate } from './';

test('automate plugin has run_task', t => {
    t.true(automate.hasOwnProperty('run_task'));
});