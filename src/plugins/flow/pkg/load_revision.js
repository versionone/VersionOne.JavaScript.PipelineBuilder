import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const load_revision = (
    package_name, revision, globals_key,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        package: package_name,
        revision,
        globals_key
    },
    {
        label: 'Flow - Package - Load Revision',
        method: 'load_revision',
        module: 'package',
        name: 'flow'
    },
    when, additional_args, description
);