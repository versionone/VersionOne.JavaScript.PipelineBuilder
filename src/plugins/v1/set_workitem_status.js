import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const set_workitem_status = (
    number, status, current_status, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        current_status,
        instance_name,
        number,
        status
    },
    {
        label: 'VersionOne - Set Workitem Status',
        method: 'set_workitem_status',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);