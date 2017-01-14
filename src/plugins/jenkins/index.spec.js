import test from 'ava';
import { jenkins } from './';

test('jenkins plugin has build', t => {
    t.true(jenkins.hasOwnProperty('build'));
});

test('jenkins plugin has get_build_info', t => {
    t.true(jenkins.hasOwnProperty('get_build_info'));
});

test('jenkins plugin has get_url', t => {
    t.true(jenkins.hasOwnProperty('get_url'));
});

test('jenkins plugin has read_workspace_file', t => {
    t.true(jenkins.hasOwnProperty('read_workspace_file'));
});