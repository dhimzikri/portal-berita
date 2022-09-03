import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    console.log(meta);
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div className="btn-group">
            {prev && (
                <Link href={prev} className="text-white btn btn-outline">
                    «
                </Link>
            )}
            <Link className="btn text-white btn-outline">{current}</Link>
            {next && (
                <Link href={next} className="btn btn-outline text-white">
                    »
                </Link>
            )}
        </div>
    );
}

export default Paginator