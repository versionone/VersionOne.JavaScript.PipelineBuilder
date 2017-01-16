import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const set_workitem_status = (
    workitem_number, attributes='', skip_if_closed='true', instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        number: workitem_number,
        attributes,
        skip_on_closed: skip_if_closed,
        instance_name
    },
    {
        label: 'VersionOne - Set Workitem Attributes',
        method: 'set_workitem_attributes',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);