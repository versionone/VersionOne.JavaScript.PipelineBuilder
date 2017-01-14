import { ALWAYS } from './../constants';

const run_task = (
    task, version, initial_data,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            task, version, initial_data
        }),
        label: 'Automate - Run Task',
        method: 'runtask',
        module: 'task',
        name: 'automate'
    },
    when
});

export const automate = {
    run_task
};