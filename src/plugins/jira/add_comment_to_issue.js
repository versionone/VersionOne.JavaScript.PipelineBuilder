import { ALWAYS } from './../constants';

export const add_comment_to_issue = (
    issue_id, comment, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            issue: issue_id,
            comment,
            instance_name
        }),
        label: 'Jira - Add Comment to Issues',
        method: 'add_comment',
        module: 'issue',
        name: 'jiraplugin'
    },
    when
});