import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Show({ post })
{
    const { delete: destroy } = useForm();
    const route = useRoute();

    // State untuk menampilkan modal
    const [showModal, setShowModal] = useState(false);

    function submit(e)
    {
        e.preventDefault();
        // Ini route menggunakan ziggy
        destroy(route('posts.destroy', post));
    }

    function handleDeleteClick()
    {
        setShowModal(true); // Menampilkan modal konfirmasi
    }

    function handleCloseModal()
    {
        setShowModal(false); // Menutup modal
    }

    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Posted on: </span>
                    <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
                <p className="font-medium">{post.body}</p>
                <p className="font-medium">{post.desc}</p>

                <div className="flex items-center justify-end gap-2">
                    {/* Tombol Delete yang memunculkan modal */}
                    <button
                        onClick={handleDeleteClick}
                        className="bg-red-500  hover:bg-red-800  hover:shodow-lg transition duration-300 rounded-md text-sm px-4 py-1 text-white"
                    >
                        Delete
                    </button>

                    {/* Link untuk Update */}
                    <Link
                        href={route('posts.edit', post)}
                        className="bg-green-500  hover:bg-green-800  hover:shodow-lg transition duration-300 rounded-md text-sm px-4 py-1 text-white"
                    >
                        Update
                    </Link>
                </div>
            </div>

            {/* Modal Konfirmasi */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this Product?</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-4">
                            {/* Tombol Cancel */}
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-300  hover:bg-gray-500  hover:shodow-lg transition duration-300 text-sm px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                            {/* Tombol Confirm */}
                            <form onSubmit={submit}>
                                <button
                                    type="submit"
                                    className="bg-red-500 hover:bg-red-900  hover:shodow-lg transition duration-300 text-white text-sm px-4 py-2 rounded-md"
                                >
                                    Yes, Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
