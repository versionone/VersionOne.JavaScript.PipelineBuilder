import { ALWAYS } from './../constants';
import { get_definition } from './../base';

export const push_link_to_all_workitems = (
    linkurl, linkname, on_menu, instance_name,
    when=ALWAYS, additional_args={}, description=''
) => get_definition({
        linkurl,
        linkname,
        onmenu: on_menu,
        instance_name
    },
    {
        label: 'VersionOne - Push Link to All Workitems',
        method: 'push_link_to_all_workitems',
        module: 'main',
        name: 'v1plugin'
    },
    when, additional_args, description
);