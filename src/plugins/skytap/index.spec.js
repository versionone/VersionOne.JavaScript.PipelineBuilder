import test from 'ava';
import { skytap } from './';

test('skytap plugin has create_environment', t => {
    t.true(skytap.hasOwnProperty('create_environment'));
});

test('skytap plugin has delete_environment', t => {
    t.true(skytap.hasOwnProperty('delete_environment'));
});