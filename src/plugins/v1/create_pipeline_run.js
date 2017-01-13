import { ALWAYS } from './../constants';

export const create_pipeline_run = (
    build_project, name, reference, initial_status='In Progress', target_key, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            broid_target_key: target_key,
            build_project,
            initial_status,
            instance_name,
            name,
            reference
        }),
        label: 'VersionOne - Create Pipeline Run',
        method: 'create_buildrun',
        module: 'main',
        name: 'v1plugin'
    },
    when
});