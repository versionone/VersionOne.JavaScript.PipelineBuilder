import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const get_globals = (
    package_name, revision, globals_key,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        package: package_name,
        revision,
        globals_key
    },
    {
        label: 'Flow - Package - Get Globals',
        method: 'get_globals',
        module: 'package',
        name: 'flow'
    },
    when, additional_args, description
);