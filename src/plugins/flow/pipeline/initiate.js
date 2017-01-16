import { ALWAYS } from './../../constants';
import { get_definition } from './../../base';

export const initiate = (
    defintion, project, group, start_now=false, initial_data,
    when=ALWAYS, additional_args={}, description=''
) => get_definition(
    {
        pipeline: defintion,
        project,
        group,
        start_now: String(start_now),
        initial_data
    },
    {
        label: 'Flow - Pipeline - Initiate',
        method: 'initiate',
        module: 'pipeline',
        name: 'flow'
    },
    when, additional_args, description
);