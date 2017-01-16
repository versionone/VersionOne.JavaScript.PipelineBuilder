import test from 'ava';
import { artifact } from './';

test('artifact plugin has new_revision', t => {
    t.true(artifact.hasOwnProperty('new_revision'));
});