import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    };

    return (
        <div className="bg-secondary rounded-2xl overflow-hidden border border-gray-800 shadow-xl flex flex-col items-center">
            {/* Carousel */}
            <div className="relative w-full aspect-video group bg-black">
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                    <img
                        src={project.images[currentSlide]}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                        loading="lazy"
                    />
                </div>

                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                        >
                            <FaChevronLeft size={16} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                        >
                            <FaChevronRight size={16} />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                            {project.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-accent w-4' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 w-full">
                <div className="flex flex-col mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <span className="text-xs uppercase tracking-wider text-accent font-semibold">{project.type}</span>
                </div>

                <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                        <span key={idx} className="bg-primary px-3 py-1 text-xs font-medium text-gray-300 rounded border border-gray-700">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800">
                    {project.repoFrontend && (
                        <a href={project.repoFrontend} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                            <FaGithub /> Front
                        </a>
                    )}
                    {project.repoBackend && (
                        <a href={project.repoBackend} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                            <FaGithub /> Back
                        </a>
                    )}
                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                            <FaGithub /> Código
                        </a>
                    )}
                    <a
                        href={project.demoUrl}
                        target={project.demoUrl === '#' ? '_self' : '_blank'}
                        rel="noreferrer"
                        className={`ml-auto flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all
              ${project.demoUrl === '#'
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'bg-accent/10 border border-accent/50 text-accent hover:bg-accent hover:text-white shadow-lg shadow-accent/20'}`}
                    >
                        <FaExternalLinkAlt size={12} />
                        {project.demoUrl === '#' ? 'Próximamente' : 'Demo'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
