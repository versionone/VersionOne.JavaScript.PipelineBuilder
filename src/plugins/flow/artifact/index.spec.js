import test from 'ava';
import { artifact } from './';

test('artifact plugin has load_revision', t => {
    t.true(artifact.hasOwnProperty('load_revision'));
});

test('artifact plugin has new_revision', t => {
    t.true(artifact.hasOwnProperty('new_revision'));
});

test('artifact plugin has update_revision', t => {
    t.true(artifact.hasOwnProperty('update_revision'));
});