import { ALWAYS } from './../constants';

export const show = (
    resource, label,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            resource,
            label
        }),
        label: 'Canvas - Show',
        method: 'show',
        module: 'main',
        name: 'canvas'
    },
    when
});