import { get_definition } from './../../base';

export const set_global = (
    package_name, revision, key, value,
    when, additional_args, description
) => get_definition(
    {
        package: package_name,
        revision,
        key,
        value
    },
    {
        label: 'Flow - Package - Set Global',
        method: 'set_global',
        module: 'package',
        name: 'flow'
    },
    when, additional_args, description
);