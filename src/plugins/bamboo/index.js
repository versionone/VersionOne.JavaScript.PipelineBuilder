import { ALWAYS } from './../constants';
import { get_definition } from './../base';

const build = (
    build_id, revision, parameters, wait='true', inherit_build_status='true', instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
    build_id,
        revision,
        params: parameters,
        wait,
        inherit: inherit_build_status,
        instance_name
    },
    {
        label: 'Bamboo - Build',
        method: 'build',
        module: 'job',
        name: 'bamboo'
    },
    when, additional_args, description
);

export const bamboo = {
    build
};