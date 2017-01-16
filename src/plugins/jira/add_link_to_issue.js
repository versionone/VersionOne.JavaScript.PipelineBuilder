import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const add_link_to_issue = (
    issue_id, title, url, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        issue: issue_id,
        title,
        url,
        instance_name
    },
    {
        label: 'Jira - Add Link to Issues',
        method: 'add_link',
        module: 'issue',
        name: 'jiraplugin'
    },
    when, additional_args, description
);