import { api_call } from './api_call';
import { create_branch } from './create_branch';
import { delete_branch } from './delete_branch';
import { get_file } from './get_file';
import { get_issue } from './get_issue';
import { list_repositories } from './list_repositories';
import { show_summary } from './show_summary';
import { wait_for_pr_mergeability } from './wait_for_pr_mergeability';

export const github = {
    api_call,
    create_branch,
    delete_branch,
    get_file,
    get_issue,
    list_repositories,
    show_summary,
    wait_for_pr_mergeability
};