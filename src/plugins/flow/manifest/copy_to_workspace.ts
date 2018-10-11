import { get_definition } from './../../base';

export const copy_to_workspace = (
    workspace_key, include, verbose,
    when, additional_args, description
) => get_definition(
    {
        targetkey: workspace_key,
        include,
        verbose
    },
    {
        label: 'Flow - Manifest - Copy to Workspace',
        method: 'manifest_to_workspace',
        module: 'manifest',
        name: 'flow'
    },
    when, additional_args, description
);