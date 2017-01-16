import { get_definition } from './../base';

export const create_pipeline_run = (
    build_project, name, reference, initial_status='In Progress', target_key, instance_name,
    when, additional_args, description
) => get_definition({
        broid_target_key: target_key,
        build_project,
        initial_status,
        instance_name,
        name,
        reference
    },
    {
        label: 'VersionOne - Create Pipeline Run',
        method: 'create_buildrun',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);