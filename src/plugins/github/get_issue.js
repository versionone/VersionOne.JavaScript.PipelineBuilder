import { ALWAYS } from './../constants';

export const get_issue = (
    issue_number, repository,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            issue_number,
            repository
        }),
        label: 'Github - Get Issue',
        method: 'get_issue',
        module: 'main',
        name: 'github'
    },
    when
});