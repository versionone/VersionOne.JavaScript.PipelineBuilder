import test from 'ava';
import { docker } from './';

test('docker plugin has deploy_container', t => {
    t.true(docker.hasOwnProperty('deploy_container'));
});

test('docker plugin has register_image', t => {
    t.true(docker.hasOwnProperty('register_image'));
});