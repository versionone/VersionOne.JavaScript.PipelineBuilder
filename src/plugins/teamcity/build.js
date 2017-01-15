import { ALWAYS } from './../constants';

export const build = (
    build_id, parameters={}, branch_name, commit_id, snapshot_id,
    vcs_instance_id, time_out, wait, inherit_build_status, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            build_id,
            params: parameters,
            branch: branch_name,
            commit_id,
            snapshot_id,
            vcs_instance_id,
            timeout: time_out,
            wait,
            inherit: inherit_build_status,
            instance_name
        }),
        label: 'TeamCity - Build',
        method: 'build',
        module: 'job',
        name: 'teamcity'
    },
    when
});