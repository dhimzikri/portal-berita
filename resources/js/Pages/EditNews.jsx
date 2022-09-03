import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        // setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className="min-h-screen bg-base-100">
            <Head title={props.title}></Head>
            <Navbar user={props.auth.user} />
            <div className="">
                <div className=" p-2 text-2xl text-white bg-slate-800 flex justify-center w-full md:w-auto">
                    <h2 className="bg-slate-800 p-4 rounded-lg font-semibold text-xl text-white leading-tight">
                        Edit Berita
                    </h2>
                </div>
                <div className="card-body bg-slate-800">
                    <input
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full border-white border-2 text-white"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full border-white border-2 text-white"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="m-2 input input-bordered w-full border-white border-2 text-white"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary m-2 w-full badge-secondary "
                        onClick={() => handleSubmit()}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
}
