import Header from "../../fragments/modulpage/submodul/Header";

const KonsultasiLayout = (props) => {
    const { children } = props;
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="p-6">
                    <Header
                        title="Booking Konsultasi"
                        desc="Lakukan konsultasi dengan mentor apabila anda masih bingung."
                    />
                    {children}
                </div>
            </main>
        </div>
    );
};

export default KonsultasiLayout;
