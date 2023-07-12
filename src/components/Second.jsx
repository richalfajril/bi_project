const Second = () => {
    return (
        <>
            <div className="container flex flex-warp">
                <div className="card w-96 bg-base-100 shadow-xl px-4">
                    <figure className="px-10 pt-10">
                        <img
                            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Menabung Artikel</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Tulis Sekarang!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl px-4">
                    <figure className="px-10 pt-10">
                        <img
                            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tabungan Artikel</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Lihat Tabungan</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Second;
