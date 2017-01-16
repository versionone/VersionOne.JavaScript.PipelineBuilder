import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const load_revision = (
    project, artifact_name, revision, workspace_key,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        project_name: project,
        artifact_name,
        revision,
        key: workspace_key
    },
    {
        label: 'Flow - Artifact - Load Revision',
        method: 'load_artifact_revision',
        module: 'pipeline',
        name: 'flow'
    },
    when, additional_args, description
);