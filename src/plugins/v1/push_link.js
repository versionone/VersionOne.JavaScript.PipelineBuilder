import { ALWAYS } from './../constants';

export const push_link = (
    oid, linkurl, linkname, onmenu='true', instance_name,
    when=ALWAYS, additional_args={}, description=''
) => ({
    name: description,
    plugin: {
        args: Object.assign(additional_args, {
            oid,
            linkurl,
            linkname,
            onmenu,
            instance_name,
        }),
        label: 'VersionOne - Push Link',
        method: 'push_link',
        module: 'main',
        name: 'v1plugin'
    },
    when
});