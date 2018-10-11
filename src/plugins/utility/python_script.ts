import { get_definition } from './../base';

export const python_script = (
    code,
    when, additional_args, description
) => get_definition({
        code
    },
    {
        label: 'Utility - Python Script',
        method: 'exec_python',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);