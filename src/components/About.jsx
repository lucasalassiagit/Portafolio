const About = () => {
    const qualities = [
        "Autodidacta", "Responsable", "Organizado",
        "Colaborador", "Comprometido", "Eficiente"
    ];

    return (
        <section id="about" className="section">
            <h2 className="section-title">Sobre Mí</h2>

            <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
                <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl relative group">
                    <img
                        src="/CapturasSitiosWeb/Foto.jpg"
                        alt="Lucas Nahuel Alassia"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                </div>

                <div className="flex-1 text-center md:text-left space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        ¡Hola! Soy Lucas, un desarrollador de software apasionado por la
                        tecnología y la creación de soluciones eficientes. Soy Técnico
                        Universitario en Programación en la UTN - Facultad Regional Rafaela.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Me especializo en <strong className="text-white">Desarrollo Backend y Full Stack</strong> utilizando .NET y
                        React. Tengo experiencia construyendo aplicaciones web completas,
                        abarcando desde la arquitectura de bases de datos robustas hasta
                        la implementación de interfaces de usuario modernas y funcionales.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
                        {qualities.map((q, idx) => (
                            <span key={idx} className="bg-secondary text-sm font-medium px-4 py-2 rounded-full border border-gray-700/50 hover:border-accent hover:text-accent transition-colors">
                                {q}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
