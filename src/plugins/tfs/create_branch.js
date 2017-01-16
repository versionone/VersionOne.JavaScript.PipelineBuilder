import { get_definition } from './../base';

export const create_branch = (
    project, repository, source_branch, branch_name, instance_name,
    when, additional_args, description
) => get_definition({
        project,
        repository,
        source: source_branch,
        branch_name,
        instance_name
    },
    {
        label: 'TFS - Create Branch',
        method: 'create_branch',
        module: 'tfs',
        name: 'tfsplugin'
    },
    when, additional_args, description
);