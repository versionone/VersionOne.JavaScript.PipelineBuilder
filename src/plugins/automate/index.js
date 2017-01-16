import { get_definition } from './../base';

const run_task = (
    task, version, initial_data,
    when, additional_args, description
) => get_definition(
    {
        task, version, initial_data
    },
    {
        label: 'Automate - Run Task',
        method: 'runtask',
        module: 'task',
        name: 'automate'
    },
    when, additional_args, description
);

export const automate = {
    run_task
};