import test from 'ava';
import { register_image } from './register_image';
import { ALWAYS } from './../constants';

const image = 'image';

test('register_image with defaults', t => {
    const actual = register_image(image);

    const expected = {
        name: '',
        plugin: {
            args: {
                image
            },
            label: 'Docker - Register Image',
            method: 'register_image',
            module: 'dock',
            name: 'dockerplugin'
        },
        when: ALWAYS
    };

    t.deepEqual(actual, expected);
});

test('register_image with overridden defaults', t => {
    const when = 'never';
    const additional_key = 'additional_key';
    const additional_arguments = {
        [additional_key]: additional_key
    };
    const description = 'description';

    const actual = register_image(
        image,
        when, additional_arguments, description
    );

    const expected = {
        name: description,
        plugin: {
            args: {
                image,
                additional_key
            },
            label: 'Docker - Register Image',
            method: 'register_image',
            module: 'dock',
            name: 'dockerplugin'
        },
        when
    };

    t.deepEqual(actual, expected);
});