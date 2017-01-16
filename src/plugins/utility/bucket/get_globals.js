import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const get_globals = (name, key, required=true, when=ALWAYS,
                             additional_args={}, description='') => get_definition({
        globals_key: key,
        bucket: name,
        required: String(required)
    },
    {
        label: 'tility - Bucket - Get Globals',
        method: 'get_globals',
        module: 'bucket',
        name: 'utility'
    },
    when, additional_args, description
);