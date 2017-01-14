import { ALWAYS } from './../constants';

export const deploy_application = (
    template, version, data_store={}, sequence_data={}, params,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            template,
            version,
            datastore: data_store,
            sequence_data,
            params
        }),
        label: 'Deploy - Deploy an Application',
        method: 'deploy',
        module: 'deployment',
        name: 'deploy'
    },
    when
});