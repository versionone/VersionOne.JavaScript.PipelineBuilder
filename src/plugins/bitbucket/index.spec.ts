import test from 'ava';
import { bitbucket } from './';

test('bitbucket plugin has api_call', t => {
    t.true(bitbucket.hasOwnProperty('api_call'));
});

test('bitbucket plugin has create_branch', t => {
    t.true(bitbucket.hasOwnProperty('create_branch'));
});

test('bitbucket plugin has delete_branch', t => {
    t.true(bitbucket.hasOwnProperty('delete_branch'));
});

test('bitbucket plugin has show_summary', t => {
    t.true(bitbucket.hasOwnProperty('show_summary'));
});