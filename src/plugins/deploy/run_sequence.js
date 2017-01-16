import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const run_sequence = (
    sequence, deployment, sequence_data, params,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        sequence,
        deployment,
        sequence_data,
        params
    },
    {
        label: 'Deploy - Run Sequence',
        method: 'run_sequence',
        module: 'deployment',
        name: 'deploy'
    },
    when, additional_args, description
);