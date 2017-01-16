import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const promote_revision = (
    package_name, revision, full_version, phase, new_version,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        package: package_name,
        revision,
        full_version,
        phase,
        new_version
    },
    {
        label: 'Flow - Package - Promote Revision',
        method: 'promote',
        module: 'package',
        name: 'flow'
    },
    when, additional_args, description
);