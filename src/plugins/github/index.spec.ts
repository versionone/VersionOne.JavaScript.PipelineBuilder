import test from 'ava';
import { github } from './';

test('github plugin has api_call', t => {
    t.true(github.hasOwnProperty('api_call'));
});

test('github plugin has create_branch', t => {
    t.true(github.hasOwnProperty('create_branch'));
});

test('github plugin has delete_branch', t => {
    t.true(github.hasOwnProperty('delete_branch'));
});

test('github plugin has get_file', t => {
    t.true(github.hasOwnProperty('get_file'));
});

test('github plugin has get_issue', t => {
    t.true(github.hasOwnProperty('get_issue'));
});

test('github plugin has list_repositories', t => {
    t.true(github.hasOwnProperty('list_repositories'));
});

test('github plugin has show_summary', t => {
    t.true(github.hasOwnProperty('show_summary'));
});

test('github plugin has wait_for_pr_mergeability', t => {
    t.true(github.hasOwnProperty('wait_for_pr_mergeability'));
});