import NavBar from "@/components/NavBar"
export default function Home() {
    return (
        <>
        <NavBar />
        <div className="bg-black text-white min-h-screen px-8">
            <section className="mx-auto max-w-screen-sm px-5 py-12">
                <div className="space-y-6">
                    <h1 className="text-1xl font-bold">Blog / Yap</h1>
                    <p className="text-gray-300 leading-relaxed">This will be a dedicated page for my background, interest, and other stuff I'm interested in. 
                        


                    </p>
                </div>
            </section>
        </div>
        </>
    )
}