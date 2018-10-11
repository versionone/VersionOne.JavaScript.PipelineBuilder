import test from 'ava';
import { jira } from './';

test('jira plugin has add_link_to_issue', t => {
    t.true(jira.hasOwnProperty('add_link_to_issue'));
});

test('jira plugin has add_comment_to_issue', t => {
    t.true(jira.hasOwnProperty('add_comment_to_issue'));
});

test('jira plugin has transition_issues', t => {
    t.true(jira.hasOwnProperty('transition_issues'));
});