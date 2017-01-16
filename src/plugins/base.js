import { ALWAYS } from './constants';

export const get_definition = (args, meta, when=ALWAYS, additional_args={}, description='') => ({
    plugin: {
        args: Object.assign(additional_args, args),
        ...meta
    },
    name: description,
    when: when
});