import test from 'ava';
import { hipchat } from './';

test('hipchat plugin has send_notification', t => {
    t.true(hipchat.hasOwnProperty('send_notification'));
});