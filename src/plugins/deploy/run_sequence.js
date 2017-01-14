import { ALWAYS } from './../constants';

export const run_sequence = (
    sequence, deployment, sequence_data, params,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            sequence,
            deployment,
            sequence_data,
            params
        }),
        label: 'Deploy - Run Sequence',
        method: 'run_sequence',
        module: 'deployment',
        name: 'deploy'
    },
    when
});