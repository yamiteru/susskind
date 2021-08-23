export const Show = (predicate: () => boolean) =>
    (children: string) =>
        predicate() ? children: "";