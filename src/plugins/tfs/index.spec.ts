import test from 'ava';
import { tfs } from './';

test('tfs plugin has create_branch', t => {
    t.true(tfs.hasOwnProperty('create_branch'));
});

test('tfs plugin has delete_branch', t => {
    t.true(tfs.hasOwnProperty('delete_branch'));
});