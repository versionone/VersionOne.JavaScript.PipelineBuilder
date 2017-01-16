export const get_definition = (args, meta, when, additional_args, description) => ({
    plugin: {
        args: Object.assign(additional_args, args),
        ...meta
    },
    name: description,
    when: when
});