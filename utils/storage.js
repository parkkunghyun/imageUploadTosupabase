export function getImageUrl(path) {
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/minibox/${path}`;
}