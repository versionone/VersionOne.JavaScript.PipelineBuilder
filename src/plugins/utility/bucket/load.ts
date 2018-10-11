import { get_definition } from './../../base';

export const load = (
    name, key, required=true,
    when, additional_args, description
) => get_definition({
        globals_key: key,
        bucket: name,
        required: String(required)
    },
    {
        label: 'Utility - Bucket - Load',
        method: 'load_bucket',
        module: 'bucket',
        name: 'utility'
    },
    when, additional_args, description
);