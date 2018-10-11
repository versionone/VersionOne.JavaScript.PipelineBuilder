import { get_definition } from './../../base';

export const get_artifacts = (
    package_name, revision, artifact_key,
    when, additional_args, description
) => get_definition(
    {
        package: package_name,
        revision,
        globals_key: artifact_key
    },
    {
        label: 'Flow - Package - Get Artifacts',
        method: 'get_artifacts',
        module: 'package',
        name: 'flow'
    },
    when, additional_args, description
);