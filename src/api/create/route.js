//src/api/create/route.ts
import { createPost } from "@/app/db/actions";

export async function POST(req) {
    const { title, content, author, author_id, slug } = await req.json();
    console.log("Received data:", { title, content, author, author_id, slug }); // Log the data

    try {
        await createPost({
            title,
            content,
            author,
            author_id,
            slug,
        });
        return new Response(JSON.stringify({ message: "Post created" }), {
            status: 201,
            headers: {
            "Content-Type": "application/json"
            }
        });
    } catch (err) {
        console.error("Error creating post:", err); // Log the error
        return new Response(JSON.stringify({ message: "An error occurred", error: err.message }), {
            status: 400,
            headers: {
            "Content-Type": "application/json"
            }
        });
    }
}
