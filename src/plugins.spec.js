import test from 'ava';
import { plugins } from './plugins';

test('v1 is a plugin', t => {

    var actual = plugins.hasOwnProperty("v1");

    var expected = true;

    t.deepEqual(actual, expected);
    t.pass();
});