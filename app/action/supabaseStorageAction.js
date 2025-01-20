"use server";

import { supabase } from "@/lib/supabaseClient";

export async function uploadFile(formData) {
    const file = formData.get("file");
    const { data, error } = await supabase.storage
        .from("minibox")
        .upload(file.name, file, { upsert: true });

    if (error) throw new Error(error);
    console.log("upload success");
    return data;
}

export async function searchFiles(search = "") {
    const { data, error } = await supabase.storage
        .from("minibox")
        .list(null, { search });

    if (error) throw new Error(error);
    console.log("search success");
    return data;
}

export async function deleteFile(fileName) {
    const { data, error } = await supabase.storage
        .from("minibox")
        .remove([fileName]);

    if (error) throw new Error(error);
    console.log("delete success");
    return data;
}