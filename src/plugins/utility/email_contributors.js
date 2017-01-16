import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const email_contributors = (cc, subject, body, when=ALWAYS,
    additional_args={}, description='') => get_definition({
        body,
        cc,
        subject
    },
    {
        label: 'Utility - Email Contributors',
        method: 'email_contributors',
        module: 'utility',
        name: 'utility'
    },
    when, additional_args, description
);