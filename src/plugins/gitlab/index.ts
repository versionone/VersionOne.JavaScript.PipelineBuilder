import { api_call } from './api_call';
import { create_branch } from './create_branch';
import { delete_branch } from './delete_branch';
import { list_repositories } from './list_repositories';
import { show_summary } from './show_summary';

export const gitlab = {
    api_call,
    create_branch,
    delete_branch,
    list_repositories,
    show_summary
};