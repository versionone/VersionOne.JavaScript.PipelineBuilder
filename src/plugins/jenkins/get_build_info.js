import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const get_build_info = (
    job_name, build_number, wait, inherit_job_status, regular_expression, artifact_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        job: job_name,
        build_number,
        wait,
        inherit: inherit_job_status,
        artifact_regex: regular_expression,
        artifact_name,
        instance_name
    },
    {
        label: 'Jenkins -  Get Build Info',
        method: 'build',
        module: 'job',
        name: 'jenkins'
    },
    when, additional_args, description
);