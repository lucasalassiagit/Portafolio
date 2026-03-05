const Education = () => {
    return (
        <section id="education" className="section">
            <h2 className="section-title">Formación Académica</h2>

            <div className="mt-12 space-y-8 max-w-3xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">

                {/* Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 group-[.is-active]:bg-accent text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        🎓
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-secondary p-6 rounded-2xl border border-gray-800 shadow-xl ml-4 md:ml-0 md:group-even:ml-10 md:group-odd:mr-10 hover:border-accent min-h-[140px] flex flex-col justify-center transition-colors">
                        <h3 className="text-xl font-bold text-white mb-1">Técnico Universitario en Programación</h3>
                        <p className="font-medium text-accent">UTN - Facultad Regional Rafaela</p>
                        <p className="text-sm text-gray-500 mt-2">2024 - 2026</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 group-[.is-active]:bg-accent text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        🎓
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary p-6 rounded-2xl border border-gray-800 shadow-xl ml-4 md:ml-0 md:group-even:ml-10 md:group-odd:mr-10 hover:border-gray-600 min-h-[140px] flex flex-col justify-center transition-colors">
                        <h3 className="text-lg font-bold text-white mb-1">Técnico en Equipos e Instalaciones Electromecánicas</h3>
                        <p className="text-gray-400">Escuela Técnica N.º 460 &quot;Guillermo Lehmann&quot;</p>
                        <p className="text-sm text-gray-500 mt-2">Rafaela, Santa Fe - Finalizado en 2018</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
