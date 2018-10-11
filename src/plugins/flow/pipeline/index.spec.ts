import test from 'ava';
import { pipeline } from './';

test('pipeline has initiate', t => {
    t.true(pipeline.hasOwnProperty('initiate'));
});

test('pipeline has set_data', t => {
    t.true(pipeline.hasOwnProperty('set_data'));
});

test('pipeline has set_global_summary_data', t => {
    t.true(pipeline.hasOwnProperty('set_global_summary_data'));
});

test('pipeline has set_name', t => {
    t.true(pipeline.hasOwnProperty('set_name'));
});