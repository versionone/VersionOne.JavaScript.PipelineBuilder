import { get_definition } from './../base';

export const deploy_application = (
    template, version, data_store={}, sequence_data={}, params,
    when, additional_args, description
) => get_definition({
        template,
        version,
        datastore: data_store,
        sequence_data,
        params
    },
    {
        label: 'Deploy - Deploy an Application',
        method: 'deploy',
        module: 'deployment',
        name: 'deploy'
    },
    when, additional_args, description
);