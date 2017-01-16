import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const set_global = (name, key, value, create=true, required=true, when=ALWAYS,
                            additional_args={}, description='') => get_definition({
        key: key,
        bucket: name,
        value,
        create: String(create),
        required: String(required)
    },
    {
        label: 'Utility - Bucket - Set Globals',
        method: 'set_globals',
        module: 'bucket',
        name: 'utility'
    },
    when, additional_args, description
);