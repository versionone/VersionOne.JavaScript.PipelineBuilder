import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const new_revision = (
    package_name, version, full_version, globals_key, workspace_key,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        package: package_name,
        version,
        description: full_version,
        globals_key,
        result_key: workspace_key
    },
    {
        label: 'Flow - Package - New Revision',
        method: 'new_revision',
        module: 'package',
        name: 'flow'
    },
    when, additional_args, description
);