import test from 'ava';
import { slack } from './';

test('slack plugin has post_message', t => {
    t.true(slack.hasOwnProperty('post_message'));
});