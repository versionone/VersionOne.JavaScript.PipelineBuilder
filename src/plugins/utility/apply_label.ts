import { get_definition } from './../base';

export const apply_label = (
    label_name, path_in_doc,
    when, additional_args, description
) => get_definition({
        name: label_name,
        path: path_in_doc
    },
    {
        label: 'Utility - Apply Label',
        method: 'apply_label',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);