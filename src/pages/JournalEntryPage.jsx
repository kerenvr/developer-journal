"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useCallback, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { slugifySentences } from "../utils";

export default function JournalEntry() {
    const [publishing, setPublishing] = useState(false);
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

    const { user } = useAuth0()

    console.log(user)

	const onChangeContent = useCallback((value) => {
		setContent(value);
	}, []);

    if (!user) {
        return null;
      }


	const handleCreatePost = async (e) => {
		e.preventDefault();
		setPublishing(true);
        console.log(publishing)
        const request = await fetch("/api/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				content,
				author: user?.nickname,
				author_id: user?.sub,
				slug: slugifySentences(title),
			}),
		});
		const response = await request.json();
		setPublishing(false);
		alert(response.message);
	};


	return (
		<div className='min-h-[100vh]'>
			<main className='md:px-8 py-8 px-4 w-full'>
				<form className='flex flex-col w-full' onSubmit={handleCreatePost}>
					<label htmlFor='title' className='text-sm text-blue-600'>
						Title
					</label>
					<input
						type='text'
						name='title'
						id='title'
						value={title}
						required
						onChange={(e) => setTitle(e.target.value)}
						className=' px-4 py-3 border-2 rounded-md text-lg mb-4'
					/>

					<label htmlFor='content' className='text-sm text-blue-600'>
						Content
					</label>
                    <SimpleMDE value={content} onChange={onChangeContent} id='content' />


					<button
						type='submit'
						disabled={publishing}
						className='bg-blue-600 mt-2 text-white py-3 rounded-md'
					>
						{publishing ? "Publishing....please wait" : "Publish Post"}
					</button>
				</form>
			</main>
		</div>
	);
}