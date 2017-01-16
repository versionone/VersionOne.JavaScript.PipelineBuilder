import test from 'ava';
import { octopus } from './';

test('octopus plugin has deploy', t => {
    t.true(octopus.hasOwnProperty('deploy'));
});