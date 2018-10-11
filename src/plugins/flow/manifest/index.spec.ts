import test from 'ava';
import { manifest } from './';

test('manifest has copy_to_workspace', t => {
    t.true(manifest.hasOwnProperty('copy_to_workspace'));
});

test('manifest has evaluate_changes', t => {
    t.true(manifest.hasOwnProperty('evaluate_changes'));
});

test('manifest has evaluate_workitems', t => {
    t.true(manifest.hasOwnProperty('evaluate_workitems'));
});