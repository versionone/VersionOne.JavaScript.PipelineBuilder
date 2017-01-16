import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const custom_query = (
    query, key, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        query,
        key,
        instance_name
    },
    {
        label: 'VersionOne - Custom Query',
        method: 'custom_query',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);