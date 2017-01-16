import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const get_artifact = (
    package_name, revision, artifact_name, artifact_key,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        package: package_name,
        revision,
        artifact: artifact_name,
        globals_key: artifact_key
    },
    {
        label: 'Flow - Package - Get Artifact',
        method: 'get_artifact',
        module: 'package',
        name: 'flow'
    },
    when, additional_args, description
);