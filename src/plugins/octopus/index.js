import { ALWAYS } from './../constants';

const deploy = (
    environment_name, project, release, additional, wait, inherit_build_status, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            environment: environment_name,
            project,
            release,
            additional,
            wait,
            inherit: inherit_build_status,
            instance_name
        }),
        label: 'octopus - Deploy',
        method: 'deploy',
        module: 'octo',
        name: 'octopus'
    },
    when
});

export const octopus = {
    deploy
};