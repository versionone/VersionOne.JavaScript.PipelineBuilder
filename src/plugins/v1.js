const set_workitem_status = (number, status, current_status, instance_name, when) => ({
    name: '',
    plugin: {
        args: {
            current_status,
            instance_name,
            number,
            status
        },
        label: "VersionOne - Set Workitem Status",
        method: "set_workitem_status",
        module: "main",
        name: "v1plugin"
    },
    when
});

const create_pipeline_run = (
    build_project, name, reference, initial_status='In Progress', target_key, instance_name, when
) => ({
    name: '',
    plugin: {
        args: {
            broid_target_key: target_key,
            build_project,
            initial_status,
            instance_name,
            name,
            reference
        },
        label: 'VersionOne - Create Pipeline Run',
        method: 'create_buildrun',
        module: 'main',
        name: 'v1plugin'
    },
    when
});


export const v1 =  {
    set_workitem_status,
    create_pipeline_run
};