import test from 'ava';
import { slack } from './';
import { ALWAYS } from './../constants';

test('slack plugin has post_message', t => {
    t.true(slack.hasOwnProperty('post_message'));
});

const channel = 'continuum';
const message = 'build failed';
const attachments = 'attachments';
const as_user = 'continuum_dev';
const fail_on_error = 'false';

test('post_message with defaults', t => {
    const actual = slack.post_message(
        channel, message, attachments, as_user, fail_on_error
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                channel,
                message,
                attachments,
                as_user,
                failonerror: fail_on_error
            },
            label: 'Slack - Post Message',
            method: 'post',
            module: 'chat',
            name: 'slackplugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('post_message with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = slack.post_message(
        channel, message, attachments, as_user, fail_on_error,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                channel,
                message,
                attachments,
                as_user,
                failonerror: fail_on_error,
                additional_key
            },
            label: 'Slack - Post Message',
            method: 'post',
            module: 'chat',
            name: 'slackplugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});