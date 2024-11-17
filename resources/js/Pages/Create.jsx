import { Head, useForm } from "@inertiajs/react"

export default function Create()
{
    const { data, setData, post, errors, processing } = useForm({
        // jika ada inputan lain, bisa ditambahin disini
        body: "",
        desc: ""
    })
    function submit(e)
    {
        e.preventDefault();
        post("/posts");
    }

    console.log(errors)
    return (
        <>
            <Head title="Create" />

            <h1 className="title">Add New Product</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    {/*  untuk bagian form input */}
                    <input rows="10" value={data.body} onChange={(e) => setData('body', e.target.value)} className={`placeholder-gray-500 placeholder-opacity-50 ${errors.body ? '!ring-red-500' : ''}`} placeholder="Product" />
                    {errors.body && <p className="error">{errors.body}</p>}
                    {/* </input> */}
                    <textarea rows="10" value={data.desc} onChange={(e) => setData('desc', e.target.value)} className={`placeholder-gray-500 placeholder-opacity-50 ${errors.body ? '!ring-red-500' : ''}`} placeholder="Description Product">
                    </textarea>
                    {/* untuk menampilkan pesan validasi jika pas input kosong */}
                    {errors.desc && <p className="error">{errors.desc}</p>}
                    <button className="primary-btn mt-4" disabled={processing}>Save Product</button>
                </form>
            </div>
        </>
    )
}