import { ALWAYS } from './../../constants';

export const interact = (
    resource, tags=[],
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            resource
        }),
        kind: 'canvas',
        label: 'Canvas - Get',
        method: 'get',
        module: 'main',
        name: 'canvas',
        type: 'interaction'
    },
    tags,
    when
});