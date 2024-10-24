document.addEventListener('DOMContentLoaded', () => { 
    const languageOptions = document.getElementById('language-options');
    const currentLanguageButton = document.getElementById('current-language');
    const currentFlag = document.getElementById('current-flag');

    const translations = {
        en: {
            header: {
                home: "HOME",
                about: "ABOUT US",
                founders: "FOUNDERS",
                services: "SERVICES",
                contact: "CONTACT US"
            },
            content: "This is the content of the page in English.",
            servicesTitle: "Our Services",
            service1: {
                title: "Software Development",
                description: "We create custom applications to optimize your business processes."
            },
            service2: {
                title: "IT Consulting",
                description: "We offer strategic advice for the implementation of cutting-edge technology."
            },
            service3: {
                title: "System Automation",
                description: "We automate key processes to improve efficiency and reduce costs."
            },
            section: {
                who: "Who Are We?",
                title2: "ATLASCORE",
                description: "A company dedicated to providing innovative technological solutions that allow companies",
                description2: "and improve their operational efficiency.",
                mission: "Mission",
                mission_description: "Our mission is to provide IT consulting and comprehensive technological advice tailored to our clients,",
                organization_development: "achieving to enhance and optimize their development as an organization,",
                productivity_innovation: "improving their productivity and their ability to innovate and grow in a constantly changing environment.",
                goal_description: "Our goal as a developing organization is to offer robust technological solutions,",
                customized_solutions: "and tailored in such a way that they meet the specific needs of clients.",
                commitment: "We commit to close collaboration, support, and necessary guidance,",
                tech_adaptation: "in a constantly changing and adapting technological world.",
                objectives: "OBJECTIVES",
                new_technologies: "New Technologies",
                advanced_engineering: "More advanced space engineering",
            }
        },
        es: {
            header: {
                home: "INICIO",
                about: "NOSOTROS",
                founders: "FUNDADORES",
                services: "SERVICIOS",
                contact: "CONTACTANOS"
            },
            content: "Este es el contenido de la página en español.",
            servicesTitle: "Nuestros Servicios",
            service1: {
                title: "Desarrollo de Software",
                description: "Creamos aplicaciones personalizadas para optimizar tus procesos empresariales."
            },
            service2: {
                title: "Consultoría IT",
                description: "Ofrecemos asesoramiento estratégico para la implementación de tecnología de vanguardia."
            },
            service3: {
                title: "Automatización de Sistemas",
                description: "Automatizamos procesos clave para mejorar la eficiencia y reducir costos."
            },
            translatable: {
                who_we_are: "Quienes Somos ?",
                company_name: "ATLASCORE",
                company_description: "Empresa dedicada a brindar soluciones tecnológicas innovadoras que permiten a las empresas",
                operational_efficiency: "y mejorar su eficiencia operativa.",
                mission: "Misión",
                mission_description: "Nuestra misión es brindar servicios IT de consultoría y asesoramiento tecnológico integral personalizado para nuestros clientes,",
                organization_development: "logrando potenciar y optimizar su desarrollo como organización,",
                productivity_innovation: "mejorando su productividad y su capacidad para innovar y crecer en un entorno de constante cambio.",
                goal_description: "Nuestro objetivo como organización en desarrollo, es ofrecer soluciones tecnológicas robustas,",
                customized_solutions: "y personalizadas de manera tal que logren satisfacer las necesidades específicas del clientes.",
                commitment: "Nos comprometemos en la colaboración estrecha, apoyo y orientación necesaria,",
                tech_adaptation: "un mundo tecnológico en constante cambio y adaptación.",
                objectives: "OBJETIVOS",
                new_technologies: "Nuevas Tecnologías",
                advanced_engineering: "Ingeniería espacial cada vez más avanzada",
            }
        },
        fr: {
            header: {
                home: "ACCUEIL",
                about: "À PROPOS DE NOUS",
                founders: "FONDATEURS",
                services: "SERVICES",
                contact: "NOUS CONTACTER"
            },
            content: "Ceci est le contenu de la page en français.",
            servicesTitle: "Nos Services",
            service1: {
                title: "Développement de Logiciel",
                description: "Nous créons des applications personnalisées pour optimiser vos processus commerciaux."
            },
            service2: {
                title: "Consulting IT",
                description: "Nous offrons des conseils stratégiques pour la mise en œuvre de technologies de pointe."
            },
            service3: {
                title: "Automatisation des Systèmes",
                description: "Nous automatisons les processus clés pour améliorer l'efficacité et réduire les coûts."
            },
            translatable: {
                who_we_are: "Qui sommes-nous ?",
                company_name: "ATLASCORE",
                company_description: "Une entreprise dédiée à fournir des solutions technologiques innovantes qui permettent aux entreprises",
                operational_efficiency: "et améliorent leur efficacité opérationnelle.",
                mission: "Mission",
                mission_description: "Notre mission est de fournir des services de conseil informatique et des conseils technologiques personnalisés à nos clients,",
                organization_development: "en cherchant à améliorer et optimiser leur développement en tant qu'organisation,",
                productivity_innovation: "améliorant leur productivité et leur capacité à innover et à croître dans un environnement en constante évolution.",
                goal_description: "Notre objectif en tant qu'organisation en développement est d'offrir des solutions technologiques robustes,",
                customized_solutions: "et personnalisées de manière à répondre aux besoins spécifiques des clients.",
                commitment: "Nous nous engageons à une collaboration étroite, un soutien et des conseils nécessaires,",
                tech_adaptation: "dans un monde technologique en constante évolution et adaptation.",
                objectives: "OBJECTIFS",
                new_technologies: "Nouvelles Technologies",
                advanced_engineering: "Ingénierie spatiale de plus en plus avancée",
            }
        },
        pt: {
            header: {
                home: "INÍCIO",
                about: "SOBRE NÓS",
                founders: "FUNDADORES",
                services: "SERVIÇOS",
                contact: "CONTATE-NOS"
            },
            content: "Este é o conteúdo da página em português.",
            servicesTitle: "Nossos Serviços",
            service1: {
                title: "Desenvolvimento de Software",
                description: "Criamos aplicações personalizadas para otimizar seus processos empresariais."
            },
            service2: {
                title: "Consultoria de TI",
                description: "Oferecemos consultoria estratégica para a implementação de tecnologia de ponta."
            },
            service3: {
                title: "Automação de Sistemas",
                description: "Automatizamos processos-chave para melhorar a eficiência e reduzir custos."
            },
            translatable: {
                who_we_are: "Quem Somos?",
                company_name: "ATLASCORE",
                company_description: "Uma empresa dedicada a fornecer soluções tecnológicas inovadoras que permitem às empresas",
                operational_efficiency: "e melhoram sua eficiência operacional.",
                mission: "Missão",
                mission_description: "Nossa missão é fornecer serviços de consultoria em TI e aconselhamento tecnológico personalizado para nossos clientes,",
                organization_development: "conseguindo potencializar e otimizar seu desenvolvimento como organização,",
                productivity_innovation: "melhorando sua produtividade e sua capacidade de inovar e crescer em um ambiente de constante mudança.",
                goal_description: "Nosso objetivo como organização em desenvolvimento é oferecer soluções tecnológicas robustas,",
                customized_solutions: "e personalizadas de forma que atendam às necessidades específicas dos clientes.",
                commitment: "Nos comprometemos com a colaboração estreita, apoio e orientação necessários,",
                tech_adaptation: "em um mundo tecnológico em constante mudança e adaptação.",
                objectives: "OBJETIVOS",
                new_technologies: "Novas Tecnologias",
                advanced_engineering: "Engenharia espacial cada vez mais avançada",
            }
        }
    };

    currentLanguageButton.addEventListener('click', () => {
        languageOptions.classList.toggle('hidden');
    });

    document.querySelectorAll('.language-option').forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            const selectedFlag = button.getAttribute('data-flag');

            const translation = translations[selectedLang];

            // Cambiar el texto del menú
            Object.entries(translation.header).forEach(([key, value]) => {
                document.getElementById(key).textContent = value;
            });

            // Cambiar el texto de la página
            document.getElementById('text').textContent = translation.content;
            document.getElementById('services-title').textContent = translation.servicesTitle;

            for (let i = 1; i <= 3; i++) {
                document.getElementById(`service${i}`).querySelector('h3').textContent = translation[`service${i}`].title;
                document.getElementById(`service${i}`).querySelector('p').textContent = translation[`service${i}`].description;
            }

            // Actualizar el héroe
            const hero = translation.hero;
            document.getElementById('who-we-are').textContent = hero.who_we_are;
            document.getElementById('company-name').textContent = hero.company_name;
            document.getElementById('company-description').textContent = hero.company_description;
            document.getElementById('operational-efficiency').textContent = hero.operational_efficiency;
            document.getElementById('mission').textContent = hero.mission;
            document.getElementById('mission-description').textContent = hero.mission_description;
            document.getElementById('organization-development').textContent = hero.organization_development;
            document.getElementById('productivity-innovation').textContent = hero.productivity_innovation;
            document.getElementById('goal-description').textContent = hero.goal_description;
            document.getElementById('customized-solutions').textContent = hero.customized_solutions;
            document.getElementById('commitment').textContent = hero.commitment;
            document.getElementById('tech-adaptation').textContent = hero.tech_adaptation;
            document.getElementById('objectives').textContent = hero.objectives;
            document.getElementById('new-technologies').textContent = hero.new_technologies;
            document.getElementById('advanced-engineering').textContent = hero.advanced_engineering;

            // Cambiar la bandera actual
            currentFlag.src = selectedFlag;

            // Ocultar el menú
            languageOptions.classList.add('hidden');
        });
    });
});
