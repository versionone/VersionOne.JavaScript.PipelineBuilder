import test from 'ava';
import { hipchat } from './';
import { ALWAYS } from './../constants';

test('hipchat plugin has send_notification', t => {
    t.true(hipchat.hasOwnProperty('send_notification'));
});

const message = 'message';
const room = 'room';
const instance_name = 'hipchat';

test('send_notification with defaults', t => {
    const actual = hipchat.send_notification(message, room, instance_name);

    const expected = {
        name: '',
        plugin: {
            args: {
                message,
                room,
                instance_name
            },
            label: 'HipChat - Send Notification',
            method: 'send',
            module: 'notification',
            name: 'hipchatplugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('send_notification with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = hipchat.send_notification(
        message, room, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                message,
                room,
                instance_name,
                additional_key
            },
            label: 'HipChat - Send Notification',
            method: 'send',
            module: 'notification',
            name: 'hipchatplugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});