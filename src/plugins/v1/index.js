import { set_workitem_status } from './set_workitem_status';
import { create_pipeline_run } from './create_pipeline_run';
import { set_pipeline_run_status } from './set_pipeline_run_status';
import { push_link } from './push_link';

export const v1 = {
    set_workitem_status,
    create_pipeline_run,
    set_pipeline_run_status,
    push_link
};