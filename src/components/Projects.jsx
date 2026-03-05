import ProjectCard from './ProjectCard';

const projectsData = [
    {
        title: "E-Commerce",
        type: "Proyecto Personal",
        description: "Plataforma completa de comercio electrónico desarrollada con arquitectura separada. Frontend con React, TypeScript y Tailwind CSS. Backend con .NET Core, Entity Framework y PostgreSQL.",
        images: [
            "/CapturasSitiosWeb/e-commerce/Home-e-commerce.png",
            "/CapturasSitiosWeb/e-commerce/Crear-Publicacion-e-commerce.png",
            "/CapturasSitiosWeb/e-commerce/Historial-Ventas-e-commerce.png",
            "/CapturasSitiosWeb/e-commerce/Gestion-productos-e-commerce.png",
            "/CapturasSitiosWeb/e-commerce/Panel-Administrador-e-commerce.png",
            "/CapturasSitiosWeb/e-commerce/Login-e-commerce.png",
            "/CapturasSitiosWeb/e-commerce/Registro-e-commerce.png",
            "/CapturasSitiosWeb/e-commerce/Carrito-e-commerce.png",
        ],
        tech: ["React", "Tailwind CSS", ".NET Core", "PostgreSQL"],
        repoFrontend: "https://github.com/lucasalassiagit/E-Commerce_frontend",
        repoBackend: "https://github.com/lucasalassiagit/E-Commerce_backend",
        demoUrl: "https://e-comercere.netlify.app"
    },
    {
        title: "Red Social",
        type: "Proyecto Personal",
        description: "Aplicación web de red social con sistema de publicaciones, interacciones y gestión de usuarios. Implementa autenticación JWT y real-time updates.",
        images: [
            "/CapturasSitiosWeb/red-social/Home-red-social.jpeg",
            "/CapturasSitiosWeb/red-social/Perfil-red-social.jpeg",
            "/CapturasSitiosWeb/red-social/Login-red-social.jpeg",
            "/CapturasSitiosWeb/red-social/registro-red-social.jpeg",
            "/CapturasSitiosWeb/red-social/editar-perfil-red-social.jpeg",
            "/CapturasSitiosWeb/red-social/Comentarios-red-social.jpeg",
        ],
        tech: ["React", "NestJs", "PostgreSQL"],
        repoFrontend: "https://github.com/lucasalassiagit/Red-Social-frontend",
        repoBackend: "https://github.com/lucasalassiagit/Red-Social-backend",
        demoUrl: "#"
    },
    {
        title: "Sistema de Gestión de Compras/Pedidos",
        type: "Proyecto Académico",
        description: "Sistema de carrito de compras funcional con gestión de productos y proceso de checkout. Desarrollado como parte de mi formación académica.",
        images: [
            "/CapturasSitiosWeb/gestor-compras/compras - homeDemo.png",
            "/CapturasSitiosWeb/gestor-compras/compras-login.png",
            "/CapturasSitiosWeb/gestor-compras/compras - pedidos.png",
            "/CapturasSitiosWeb/gestor-compras/compras - clientes.png",
            "/CapturasSitiosWeb/gestor-compras/compras - productos.png",
        ],
        tech: ["ASP.NET Core MVC", "SQL Server", "Bootstrap"],
        repoUrl: "https://github.com/lucasalassiagit/SistemaDeGestionMVC",
        demoUrl: "http://www.gestorproductos.somee.com"
    },
    {
        title: "Estadísticas Mundiales",
        type: "Proyecto Académico",
        description: "Sitio web estático consumiendo API sobre estadísticas mundiales. Trabajo Integrador Programación 3 con diseño responsive y visualización de datos interactiva.",
        images: [
            "/CapturasSitiosWeb/estadisticas-mundiales/home-estadisticas.png",
            "/CapturasSitiosWeb/estadisticas-mundiales/galeria-estadisticas.png",
            "/CapturasSitiosWeb/estadisticas-mundiales/estadisticas - estadisticas.png",
            "/CapturasSitiosWeb/estadisticas-mundiales/datos-curiosos-estadisticas.png",
            "/CapturasSitiosWeb/estadisticas-mundiales/registro-estadisticas.png",
        ],
        tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        repoUrl: "https://github.com/lucasalassiagit/EstadisticasMundiales",
        demoUrl: "https://lucasalassiagit.github.io/EstadisticasMundiales/index.html"
    },
    {
        title: "Gestor de Matenimiento Industrial",
        type: "Proyecto Académico",
        description: "Sistema de Gestión de Mantenimiento con asignación de tareas a operarios y máquinas, y seguimiento de estados. Desarrollado para la materia Programacion 4.",
        images: [
            "/CapturasSitiosWeb/gestor-matenimiento/mantenimiento - dashboard.png",
            "/CapturasSitiosWeb/gestor-matenimiento/mantenimiento - operarios.png",
            "/CapturasSitiosWeb/gestor-matenimiento/mantenimiento - maquinas.png",
            "/CapturasSitiosWeb/gestor-matenimiento/mantenimiento - tareas.png",
            "/CapturasSitiosWeb/gestor-matenimiento/mantenimiento - historial.png",
            "/CapturasSitiosWeb/gestor-matenimiento/mantenimiento - notificaciones.png",
        ],
        tech: ["React", "NestJs", "TypeORM", "MySQL"],
        repoFrontend: "https://github.com/lucasalassiagit/Gestor-matenimiento-frontend",
        repoBackend: "https://github.com/lucasalassiagit/Gestor-Mantenimiento-backend",
        demoUrl: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section relative z-10">
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
