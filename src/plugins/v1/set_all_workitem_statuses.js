import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const set_all_workitem_statuses = (
    status, current_status, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        status,
        current_status,
        instance_name
    },
    {
        label: 'VersionOne - Set All Workitem Statuses',
        method: 'set_workitem_status_all',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);