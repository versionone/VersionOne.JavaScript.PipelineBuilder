import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const show_workspace_data = (key, when=ALWAYS, additional_args={}, description='') => get_definition({
        key
    },
    {
        label: 'Utility - Show Workspace Data',
        method: 'show_workspace_data',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);