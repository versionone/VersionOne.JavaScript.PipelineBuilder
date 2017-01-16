import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const update_revision = (
    project, artifact_name, branch, location, version, build_id, build_url, build_details,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        artifact_location: location,
        artifact_name,
        artifact_version: version,
        branch,
        build_details,
        build_id,
        build_url,
        project_name: project
    },
    {
        label: 'Flow - Artifact - Update Revision',
        method: 'update_artifact_revision',
        module: 'pipeline',
        name: 'flow'
    },
    when, additional_args, description
);