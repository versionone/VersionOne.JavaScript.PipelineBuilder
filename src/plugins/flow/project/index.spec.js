import test from 'ava';
import { project } from './';

test('project has new_version', t => {
    t.true(project.hasOwnProperty('new_version'));
});