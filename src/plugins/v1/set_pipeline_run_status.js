import { ALWAYS } from './../constants';

export const set_pipeline_run_status = (
    build_run_oid, new_status, set_workitems_as_complete='true', instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            build_run: build_run_oid,
            complete_workitems: set_workitems_as_complete,
            instance_name,
            status: new_status
        }),
        label: 'VersionOne - Set Pipeline Run Status',
        method: 'set_buildrun_status',
        module: 'main',
        name: 'v1plugin'
    },
    when
});