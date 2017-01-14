import test from 'ava';
import { bitBucketCloud } from './';

test('bitBucketCloud plugin has api_call', t => {
    t.true(bitBucketCloud.hasOwnProperty("api_call"))
});

test('bitBucketCloud plugin has create_branch', t => {
    t.true(bitBucketCloud.hasOwnProperty("create_branch"))
});

test('bitBucketCloud plugin has delete_branch', t => {
    t.true(bitBucketCloud.hasOwnProperty("delete_branch"))
});

test('bitBucketCloud plugin has show_summary', t => {
    t.true(bitBucketCloud.hasOwnProperty("show_summary"))
});