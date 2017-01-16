import { check_all_systems_go } from './check_all_systems_go';
import { check_blocking_issues } from './check_blocking_issues'
import { check_epic_completeness } from './check_epic_completeness';
import { check_workitem_dependencies } from './check_workitem_dependencies';
import { custom_query } from './custom_query';
import { create_pipeline_run } from './create_pipeline_run';
import { set_pipeline_run_status } from './set_pipeline_run_status';
import { push_link } from './push_link';
import { push_link_to_all_workitems } from './push_link_to_all_workitems';
import { set_all_workitem_statuses } from './set_all_workitem_statuses';
import { set_attributes_on_all_workitems } from './set_attributes_on_all_workitems';
import { set_epic_status } from './set_epic_status';
import { set_workitem_attributes } from './set_workitem_attributes';
import { get_epic_workitems } from './get_epic_workitems';
import { set_workitem_status } from './set_workitem_status';
import { specify_phase } from './specify_phase';

export const v1 = {
    check_all_systems_go,
    check_blocking_issues,
    check_epic_completeness,
    check_workitem_dependencies,
    create_pipeline_run,
    custom_query,
    set_pipeline_run_status,
    push_link,
    push_link_to_all_workitems,
    set_all_workitem_statuses,
    set_attributes_on_all_workitems,
    set_epic_status,
    get_epic_workitems,
    set_workitem_attributes,
    set_workitem_status,
    specify_phase
};