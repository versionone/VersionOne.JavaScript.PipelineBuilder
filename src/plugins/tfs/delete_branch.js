import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const delete_branch = (
    project, repository, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        project,
        repository,
        branch_name,
        instance_name
    },
    {
        label: 'TFS - Delete Branch',
        method: 'delete_branch',
        module: 'tfs',
        name: 'tfsplugin'
    },
    when, additional_args, description
);