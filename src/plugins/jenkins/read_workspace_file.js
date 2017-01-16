import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const read_workspace_file = (
    job, path, target, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        job,
        path,
        target,
        instance_name
    },
    {
        label: 'Jenkins - Read Workspace File',
        method: 'build',
        module: 'job',
        name: 'jenkins'
    },
    when, additional_args, description
);