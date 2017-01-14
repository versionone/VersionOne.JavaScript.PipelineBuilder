import { ALWAYS } from './../constants';

const build = (
    build_id, revision, parameters, wait='true', inherit_build_status='true', instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            build_id,
            revision,
            params: parameters,
            wait,
            inherit: inherit_build_status,
            instance_name
        }),
        label: 'Bamboo - Build',
        method: 'build',
        module: 'job',
        name: 'bamboo'
    },
    when
});

export const bamboo = {
    build
};