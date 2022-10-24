import { Buffer } from 'buffer';
import type { PathOrFileDescriptor } from 'fs';

export const readFileSync = (
    _path: PathOrFileDescriptor,
    _options?: {
        encoding?: null | undefined;
        flag?: string | undefined;
    } | null
): Buffer => {
    console.error("fs shouldn't be used in browser!");
    return Buffer.from([]);
};
