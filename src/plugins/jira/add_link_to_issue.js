import { ALWAYS } from './../constants';

export const add_link_to_issue = (
    issue_id, title, url, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            issue: issue_id,
            title,
            url,
            instance_name
        }),
        label: 'Jira - Add Link to Issues',
        method: 'add_link',
        module: 'issue',
        name: 'jiraplugin'
    },
    when
});