const Skills = () => {
    const skillCategories = [
        {
            title: "💻 Lenguajes de Programación",
            tags: ["C#", "Java", "JavaScript", "C/C++", "Python"]
        },
        {
            title: "🌐 Desarrollo Web & Frameworks",
            tags: ["ASP.NET Core", "React", "NestJS", "HTML", "CSS"]
        },
        {
            title: "⚙️ Backend & APIs",
            tags: ["ASP.NET Core MVC", "Web API RESTful", "Entity Framework", "Windows Forms", "FastApi"]
        },
        {
            title: "🗄️ Bases de Datos",
            tags: ["PostgreSQL", "SQL Server", "MySQL"]
        },
        {
            title: "🔧 Herramientas & Control de Versiones",
            tags: ["Git", "GitHub", "Docker", "Microsoft Office"]
        }
    ];

    return (
        <section id="skills" className="section bg-secondary/30 rounded-3xl my-10">
            <h2 className="section-title">Habilidades Técnicas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="bg-primary/50 border border-gray-800 p-6 rounded-2xl hover:border-accent/50 transition-colors shadow-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="bg-blue-900/30 text-blue-300 text-sm px-3 py-1 rounded-md border border-blue-800/50">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="bg-primary/50 border border-gray-800 p-6 rounded-2xl md:col-span-2 lg:col-span-1 hover:border-accent/50 transition-colors shadow-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">⚡ Habilidades Adicionales</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Electricista domiciliario, instalaciones y mantenimiento.
                        Experiencia en taller mecánico automotriz.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
