import { create_pipeline_run } from './create_pipeline_run';
import { set_pipeline_run_status } from './set_pipeline_run_status';
import { push_link } from './push_link';
import { set_epic_status } from './set_epic_status';
import { get_epic_workitems } from './get_epic_workitems';
import { set_workitem_status } from './set_workitem_status';

export const v1 = {
    create_pipeline_run,
    set_pipeline_run_status,
    push_link,
    set_epic_status,
    get_epic_workitems,
    set_workitem_status
};