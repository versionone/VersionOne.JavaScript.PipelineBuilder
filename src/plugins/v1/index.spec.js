import test from 'ava';
import { v1 } from './';

test('v1 plugin has create_pipeline_run', t => {
    t.true(v1.hasOwnProperty("create_pipeline_run"))
});

test('v1 plugin has set_pipeline_run_status', t => {
    t.true(v1.hasOwnProperty("set_pipeline_run_status"))
});

test('v1 plugin has push_link', t => {
    t.true(v1.hasOwnProperty("push_link"))
});

test('v1 plugin has set_workitem_status', t => {
    t.true(v1.hasOwnProperty("set_workitem_status"))
});