import test from 'ava';
import { v1 } from './';

test('v1 plugin has check_all_systems_go', t => {
    t.true(v1.hasOwnProperty('check_all_systems_go'));
});

test('v1 plugin has check_blocking_issues', t => {
    t.true(v1.hasOwnProperty('check_blocking_issues'));
});

test('v1 plugin has check_epic_completeness', t => {
    t.true(v1.hasOwnProperty('check_epic_completeness'));
});

test('v1 plugin has check_workitem_dependencies', t => {
    t.true(v1.hasOwnProperty('check_workitem_dependencies'));
});

test('v1 plugin has create_pipeline_run', t => {
    t.true(v1.hasOwnProperty('create_pipeline_run'));
});

test('v1 plugin has custom_query', t => {
    t.true(v1.hasOwnProperty('custom_query'));
});

test('v1 plugin has get_epic_workitems', t => {
    t.true(v1.hasOwnProperty('get_epic_workitems'));
});

test('v1 plugin has push_link', t => {
    t.true(v1.hasOwnProperty('push_link'));
});

test('v1 plugin has push_link_to_all_workitems', t => {
    t.true(v1.hasOwnProperty('push_link_to_all_workitems'));
});

test('v1 plugin has set_all_workitem_statuses', t => {
    t.true(v1.hasOwnProperty('set_all_workitem_statuses'));
});

test('v1 plugin has set_attributes_on_all_workitems', t => {
    t.true(v1.hasOwnProperty('set_attributes_on_all_workitems'));
});

test('v1 plugin has set_epic_status', t => {
    t.true(v1.hasOwnProperty('set_epic_status'));
});

test('v1 plugin has set_pipeline_run_status', t => {
    t.true(v1.hasOwnProperty('set_pipeline_run_status'));
});

test('v1 plugin has set_workitem_attributes', t => {
    t.true(v1.hasOwnProperty('set_workitem_attributes'));
});

test('v1 plugin has set_workitem_status', t => {
    t.true(v1.hasOwnProperty('set_workitem_status'));
});

test('v1 plugin has specify_phase', t => {
    t.true(v1.hasOwnProperty('specify_phase'));
});