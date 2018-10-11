import { ALWAYS } from './constants';

export const get_definition = (args, meta, when=ALWAYS, additional_args={}, description='') => ({
    plugin: {
        args: Object.assign(additional_args, args),
        ...meta
    },
    name: description,
    when: when
});

export const get_definition_with_tags = (args, meta, tags, when, additional_args, description) => Object.assign(
    get_definition(args, meta, when, additional_args, description), { tags }
);