import test from 'ava';
import { pkg } from './';

test('pkg has deliver_revision', t => {
    t.true(pkg.hasOwnProperty('deliver_revision'));
});

test('pkg has get_artifact', t => {
    t.true(pkg.hasOwnProperty('get_artifact'));
});

test('pkg has get_artifacts', t => {
    t.true(pkg.hasOwnProperty('get_artifacts'));
});

test('pkg has get_globals', t => {
    t.true(pkg.hasOwnProperty('get_globals'));
});

test('pkg has load_revision', t => {
    t.true(pkg.hasOwnProperty('load_revision'));
});

test('pkg has new_revision', t => {
    t.true(pkg.hasOwnProperty('new_revision'));
});

test('pkg has promote_revision', t => {
    t.true(pkg.hasOwnProperty('promote_revision'));
});

test('pkg has set_global', t => {
    t.true(pkg.hasOwnProperty('set_global'));
});