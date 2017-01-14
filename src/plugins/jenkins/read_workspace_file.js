import { ALWAYS } from './../constants';

export const read_workspace_file = (
    job, path, target, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            job,
            path,
            target,
            instance_name
        }),
        label: 'Jenkins - Read Workspace File',
        method: 'build',
        module: 'job',
        name: 'jenkins'
    },
    when
});