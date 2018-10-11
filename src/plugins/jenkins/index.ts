import { build } from './build';
import { get_build_info } from './get_build_info';
import { read_workspace_file } from './read_workspace_file';
import { get_url } from './get_url';

export const jenkins = {
    build,
    get_build_info,
    read_workspace_file,
    get_url
};