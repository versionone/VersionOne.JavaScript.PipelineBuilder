import test from 'ava';
import { teamcity } from './';

test('teamcity plugin has build', t => {
    t.true(teamcity.hasOwnProperty('build'));
});

test('teamcity plugin has get_build_info', t => {
    t.true(teamcity.hasOwnProperty('get_build_info'));
});