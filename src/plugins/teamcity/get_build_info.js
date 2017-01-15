import { ALWAYS } from './../constants';

export const get_build_info = (
    build_number, wait, inherit_build_status, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            build_number,
            wait,
            inherit: inherit_build_status,
            instance_name
        }),
        label: 'TeamCity - Get Build Info',
        method: 'get_build',
        module: 'job',
        name: 'teamcity'
    },
    when
});