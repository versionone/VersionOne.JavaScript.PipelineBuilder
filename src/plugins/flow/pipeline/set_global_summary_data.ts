import { get_definition } from './../../base';

export const set_global_summary_data = (
    pipeline, key, value,
    when, additional_args, description
) => get_definition(
    {
        pipeline_id: pipeline,
        key,
        value
    },
    {
        label: 'Flow - Pipeline - Set Global Summary Data',
        method: 'set_global_summary',
        module: 'pipeline',
        name: 'flow'
    },
    when, additional_args, description
);