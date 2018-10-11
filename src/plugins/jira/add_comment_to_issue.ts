import { get_definition } from './../base';

export const add_comment_to_issue = (
    issue_id, comment, instance_name,
    when, additional_args, description
) => get_definition({
        issue: issue_id,
        comment,
        instance_name
    },
    {
        label: 'Jira - Add Comment to Issues',
        method: 'add_comment',
        module: 'issue',
        name: 'jiraplugin'
    },
    when, additional_args, description
);