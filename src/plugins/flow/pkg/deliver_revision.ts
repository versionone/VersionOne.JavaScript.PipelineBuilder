import { get_definition } from './../../base';

export const deliver_revision = (
    package_name, revision, full_version,
    when, additional_args, description
) => get_definition(
    {
        package: package_name,
        revision,
        full_version
    },
    {
        label: 'Flow - Package - Deliver Revision',
        method: 'deliver',
        module: 'package',
        name: 'flow'
    },
    when, additional_args, description
);