import { ALWAYS } from './../constants';

export const delete_branch = (
    repository, branch_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            repository,
            branch_name,
            instance_name
        }),
        label: 'Github - Delete Branch',
        method: 'delete_branch',
        module: 'main',
        name: 'github'
    },
    when
});