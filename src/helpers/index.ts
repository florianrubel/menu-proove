// eslint-disable-next-line import/prefer-default-export
export function getUniqueId(): string {
    return `_${Math.random().toString(36).substring(2, 9)}`;
}
