import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy"
import { useState } from "react";

export default function Home({ posts })
{
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();

    const [flashMsg, setFlashMsg] = useState(flash.message);
    const [flashMsgUpdate, setFlashMsgupdate] = useState(flash.success);

    setTimeout(() =>
    {
        setFlashMsg(null)
    }, 2000)
    setTimeout(() =>
    {
        setFlashMsgupdate(null)
    }, 4000)

    return (
        <>
            <Head title={component} />
            <h1 className="title">Product</h1>
            {flashMsg && <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsg}</div>}
            {flashMsgUpdate && <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsgUpdate}</div>}

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b-4">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                       

                        {/* ini salah satu cara untuk routes */}
                        <Link href={route('posts.show', post)} className="text-link">More detail...</Link>
                    </div>
                ))}
            </div>

            {/* untuk membuat tampilan pagination */}
            <div className="py-12 px-4">
                {posts.links.map(link => (
                    link.url ?
                        <Link key={link.label} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""
                            }`} />
                        :
                        // ini untuk warna jika sudah dipagination terakhir
                        <span key={link.label} dangerouslySetInnerHTML={{ __html: link.label }} className="p-1 mx-1 text-slate-300"></span>
                ))}
            </div >
        </>
    );
}

