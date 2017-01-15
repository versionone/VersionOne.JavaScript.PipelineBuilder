import { ALWAYS } from './../constants';

export const create_branch = (
    project, repository, source_branch, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            project,
            repository,
            source: source_branch,
            branch_name,
            instance_name
        }),
        label: 'TFS - Create Branch',
        method: 'create_branch',
        module: 'tfs',
        name: 'tfsplugin'
    },
    when
});