export default function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden
                mt-5
                pb-8
            "
        >
            <div
                className="
                    max-w-[1800px]
                    mx-auto
                    px-4
                "
            >
                {/* Branding */}

                <div className="flex justify-center">
                    <div className="relative flex justify-center overflow-hidden">
                        <h1
                            className="
            footer-logo

            select-none
            whitespace-nowrap

            font-black
            uppercase

            leading-none
            tracking-[-0.08em]

            text-[clamp(2.5rem,11vw,14rem)]
        "
                        >
                            MAITREK PATEL
                        </h1>
                    </div>
                </div>

                {/* Copyright */}

                <div
                    className="
                        mt-6
                        flex
                        justify-center
                    "
                >
                    <p
                        className="
                            text-zinc-500
                            text-sm
                            md:text-base
                            2xl:text-lg
                            3xl:text-xl
                            text-center
                        "
                    >
                        © {new Date().getFullYear()} Built by Maitrek Patel
                    </p>
                </div>
            </div>
        </footer>
    );
}
