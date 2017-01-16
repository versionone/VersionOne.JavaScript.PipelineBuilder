import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const add_manifest = (name, key, create=true, when=ALWAYS,
                             additional_args={}, description='') => get_definition({
        globals_key: key,
        bucket: name,
        create: String(create)
    },
    {
        label: 'Utility - Bucket - Add Manifest',
        method: 'add_to_bucket',
        module: 'bucket',
        name: 'utility'
    },
    when, additional_args, description
);