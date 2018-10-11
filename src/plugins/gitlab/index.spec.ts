import test from 'ava';
import { gitlab } from './';

test('gitlab plugin has api_call', t => {
    t.true(gitlab.hasOwnProperty('api_call'));
});

test('gitlab plugin has create_branch', t => {
    t.true(gitlab.hasOwnProperty('create_branch'));
});

test('gitlab plugin has delete_branch', t => {
    t.true(gitlab.hasOwnProperty('delete_branch'));
});

test('gitlab plugin has list_repositories', t => {
    t.true(gitlab.hasOwnProperty('list_repositories'));
});

test('gitlab plugin has show_summary', t => {
    t.true(gitlab.hasOwnProperty('show_summary'));
});