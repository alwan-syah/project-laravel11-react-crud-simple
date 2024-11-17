import { Head, useForm } from "@inertiajs/react"
import { useRoute } from "../../../vendor/tightenco/ziggy"

export default function Create({ post })
{
    const route = useRoute();
    const { data, setData, put, errors, processing } = useForm({
        // jika ada inputan lain, bisa ditambahin disini
        body: post.body,
        desc: post.desc,
    })
    function submit(e)
    {
        e.preventDefault();
        put(route('posts.update', post));
    }

    console.log(errors)
    return (
        <>
            <Head title="Edit" />

            <h1 className="title">Update Product</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    {/*  untuk bagian form input */}
                    <input rows="10" value={data.body} onChange={(e) => setData('body', e.target.value)} className={errors.body && '!ring-red-500'}>
                    </input>
                    {/* untuk menampilkan pesan validasi jika pas input kosong */}
                    {errors.body && <p className="error">{errors.body}</p>}
                    <textarea rows="10" value={data.desc} onChange={(e) => setData('desc', e.target.value)} className={errors.desc && '!ring-red-500'}>
                    </textarea>
                    {errors.desc && <p className="error">{errors.desc}</p>}
                    <button className="primary-btn mt-4" disabled={processing}>Update Product</button>
                </form>
            </div>
        </>
    )
}