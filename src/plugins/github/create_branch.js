import { ALWAYS } from './../constants';

export const create_branch = (
    repository, source_branch, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            repository,
            source: source_branch,
            branch_name,
            instance_name
        }),
        label: 'Github - Create Branch',
        method: 'create_branch',
        module: 'main',
        name: 'github'
    },
    when
});