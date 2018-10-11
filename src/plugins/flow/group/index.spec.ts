import test from 'ava';
import { group } from './';

test('group has set_global', t => {
    t.true(group.hasOwnProperty('set_global'));
});