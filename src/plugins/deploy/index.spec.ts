import test from 'ava';
import { deploy } from './';

test('deploy plugin has deploy_application', t => {
    t.true(deploy.hasOwnProperty('deploy_application'));
});

test('deploy plugin has run_sequence', t => {
    t.true(deploy.hasOwnProperty('run_sequence'));
});

test('deploy plugin has terminate', t => {
    t.true(deploy.hasOwnProperty('terminate'));
});