export function normalizeResourceUrl(resourceUrl: string): string {
    const value = resourceUrl.trim();
    if (!value) return value;

    try {
        const url = new URL(value);
        if (url.hostname !== "github.com" && url.hostname !== "www.github.com") {
            return value;
        }

        const segments = url.pathname.split("/").filter(Boolean);
        if (
            segments.length < 5
            || (segments[2] !== "blob" && segments[2] !== "raw")
        ) {
            return value;
        }

        const [owner, repository, , revision, ...filePath] = segments;
        if (!owner || !repository || !revision || filePath.length === 0) {
            return value;
        }

        return `https://raw.githubusercontent.com/${owner}/${repository}/${revision}/${filePath.join("/")}${url.search}`;
    } catch {
        return value;
    }
}
