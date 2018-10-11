import { get_definition } from './../base';

const deploy = (
    environment_name, project, release, additional, wait, inherit_build_status, instance_name,
    when, additional_args, description
) => get_definition({
        environment: environment_name,
        project,
        release,
        additional,
        wait,
        inherit: inherit_build_status,
        instance_name
    },
    {
        label: 'octopus - Deploy',
        method: 'deploy',
        module: 'octo',
        name: 'octopus'
    },
    when, additional_args, description
);

export const octopus = {
    deploy
};