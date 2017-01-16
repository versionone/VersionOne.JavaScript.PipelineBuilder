import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const get_issue = (
    issue_number, repository,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        issue_number,
        repository
    },
    {
        label: 'Github - Get Issue',
        method: 'get_issue',
        module: 'main',
        name: 'github'
    },
    when, additional_args, description
);