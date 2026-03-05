import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <h2 className="section-title">Contacto</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-secondary/50 rounded-3xl p-8 border border-gray-800 shadow-xl">
                <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/80 border border-gray-800 hover:border-accent transition-colors">
                        <div className="text-accent text-2xl mt-1">
                            <FaEnvelope />
                        </div>
                        <div>
                            <strong className="block text-white text-lg mb-1">Email</strong>
                            <a href="mailto:lucasalassia1@outlook.com" className="text-gray-400 hover:text-accent transition-colors">
                                lucasalassia1@outlook.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/80 border border-gray-800 hover:border-accent transition-colors">
                        <div className="text-accent text-2xl mt-1">
                            <FaPhone />
                        </div>
                        <div>
                            <strong className="block text-white text-lg mb-1">Teléfono</strong>
                            <p className="text-gray-400">
                                +54 3493 43-7065
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/80 border border-gray-800 hover:border-accent transition-colors">
                        <div className="text-accent text-2xl mt-1">
                            <FaLinkedin />
                        </div>
                        <div>
                            <strong className="block text-white text-lg mb-1">LinkedIn</strong>
                            <a
                                href="https://www.linkedin.com/in/lucas-nahuel-alassia/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-accent transition-colors"
                            >
                                /in/lucas-nahuel-alassia
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/80 border border-gray-800 hover:border-accent transition-colors">
                        <div className="text-accent text-2xl mt-1">
                            <FaGithub />
                        </div>
                        <div>
                            <strong className="block text-white text-lg mb-1">GitHub</strong>
                            <a
                                href="https://github.com/lucasalassiagit"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-accent transition-colors"
                            >
                                github.com/lucasalassiagit
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 mt-4 text-center">
                    <a
                        href="/CV Alassia Lucas.pdf"
                        download="CV Alassia Lucas.pdf"
                        className="inline-flex items-center gap-3 bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
