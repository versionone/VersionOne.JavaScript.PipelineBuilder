import { ALWAYS } from './../constants';

export const get = (
    key, resource,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            key,
            resource
        }),
        label: 'Canvas - Get',
        method: 'get',
        module: 'main',
        name: 'canvas'
    },
    when
});