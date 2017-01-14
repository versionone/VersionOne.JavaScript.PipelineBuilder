import { ALWAYS } from './../constants';

export const get_build_info = (
    job_name, build_number, wait, inherit_job_status, regular_expression, artifact_name, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            job: job_name,
            build_number,
            wait,
            inherit: inherit_job_status,
            artifact_regex: regular_expression,
            artifact_name,
            instance_name
        }),
        label: 'Jenkins -  Get Build Info',
        method: 'build',
        module: 'job',
        name: 'jenkins'
    },
    when
});