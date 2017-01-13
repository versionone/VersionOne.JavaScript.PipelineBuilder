import test from 'ava';
import { push_link } from './push_link';
import { ALWAYS } from './../constants';

const oid = 'B-12345';
const linkurl = 'http://www.versionone.com/backlog2';
const linkname = 'backlog2';
const onmenu = 'false';
const instance_name = 'v1';

test('push_link with defaults', t => {
    const actual = push_link(
        oid, linkurl, linkname, onmenu, instance_name
    );

    const expected = {
        name: '',
        plugin: {
            args: {
                oid,
                linkurl,
                linkname,
                onmenu,
                instance_name
            },
            label: 'VersionOne - Push Link',
            method: 'push_link',
            module: 'main',
            name: 'v1plugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('push_link with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = push_link(
        oid, linkurl, linkname, onmenu, instance_name,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                oid,
                linkurl,
                linkname,
                onmenu,
                instance_name,
                additional_key
            },
            label: 'VersionOne - Push Link',
            method: 'push_link',
            module: 'main',
            name: 'v1plugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});