import { ALWAYS } from './../constants';

export const get_url = (
    path, target, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            path,
            target,
            instance_name
        }),
        label: 'Jenkins - Get URL',
        method: 'build',
        module: 'job',
        name: 'jenkins'
    },
    when
});