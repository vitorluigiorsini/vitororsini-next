export type TranslationValue =
  | string
  | string[]
  | { "pt-br": string; en: string }
  | { "pt-br": string[]; en: string[] };

export const translations = {
  navLinks: [
    { id: "about", title: { "pt-br": "Sobre", en: "About" } },
    { id: "experience", title: { "pt-br": "Experiência", en: "Experience" } },
    { id: "projects", title: { "pt-br": "Projetos", en: "Projects" } },
    { id: "contact", title: { "pt-br": "Contato", en: "Contact" } },
  ],

  heroText: {
    greeting: { "pt-br": "Oi, sou o", en: "Hi, I'm" },
    name: { "pt-br": "Vitor Orsini", en: "Vitor Orsini" },
    role: { "pt-br": "Sou Engenheiro de Software", en: "I'm a Software Engineer" },
  },

  CTAText: {
    download: { "pt-br": "Download CV", en: "Download CV" },
    contact: { "pt-br": "Vamos conversar", en: "Let's talk" },
    cvURL: "https://drive.google.com/file/d/1O9L4upOMLzdAm3qEHuFTYRNCSBEOg8_1/view?usp=drive_link",
  },

  aboutText: {
    title: { "pt-br": "Introdução", en: "Introduction" },
    subtitle: { "pt-br": "Sobre", en: "Overview" },
    about: {
      "pt-br":
        "Engenheiro de Software | +3 anos de experiência | TypeScript • Node.js • JavaScript • Python • AWSDesenvolvo sistemas de ponta a ponta unindo a agilidade do ecossistema JavaScript/TypeScript à versatilidade do Python. Minha trajetória inclui a liderança técnica de MVPs em ambientes de Startup e a sustentação de sistemas maduros, atuando diretamente em refatorações, melhorias contínuas, correções de bugs e novas funcionalidades.Especialista em arquitetura Serverless (AWS), automação de deploys e integração de sistemas. Orientado a boas práticas, aplico conceitos de Clean Code e estudo constantemente padrões arquiteturais como DDD, Microsserviços, Monorepos, modularização e containers para criar softwares resilientes e escaláveis.",
      en: "Software Engineer | +3 years of experience | TypeScript • Node.js • JavaScript • Python • AWSI develop end-to-end systems by combining the agility of the JavaScript/TypeScript ecosystem with the versatility of Python. My background includes leading MVPs from scratch in startup environments as well as maintaining mature systems, working directly with refactoring, continuous improvements, bug fixes, and new feature implementation.Specialized in Serverless architecture (AWS), deploy automation, and API integrations. Driven by software development best practices, I apply Clean Code principles and constantly study architectural patterns such as DDD, Microservices, Monorepos, modularization, and containers to build resilient and scalable software.",
    },
  },

  services: [
    { title: { "pt-br": "Desenvolvimento Web", en: "Web Development" }, icon: "/images/web.png" },
    { title: { "pt-br": "Computação em Nuvem", en: "Cloud Computing" }, icon: "/images/mobile.png" },
    { title: { "pt-br": "Backend", en: "Backend" }, icon: "/images/backend.png" },
    { title: { "pt-br": "Frontend", en: "Frontend" }, icon: "/images/creator.png" },
  ],

  experienceText: {
    title: { "pt-br": "O que já fiz", en: "What I have done so far" },
    subtitle: { "pt-br": "Experiência", en: "Work Experience" },
  },

  experiences: [
    {
      title: { "pt-br": "Engenheiro de Software", en: "Software Engineer" },
      company_name: "Metha Energia",
      icon: "/images/company/methaenergia.png",
      iconBg: "#E6DEDD",
      date: { "pt-br": "Fevereiro 2024 - Atualmente", en: "February 2024 - Current" },
      points: {
        "pt-br": [
          "Desenvolvimento de software.",
          "Arquitetura serverless e ferramentas de nuvem da AWS.",
          "Integrações com APIs externas.",
          "DDD",
          "Clean Code.",
          "Metodologia ágil (Scrum).",
        ],
        en: [
          "Software development.",
          "Serverless architecture and AWS cloud tools.",
          "Integrations with external APIs.",
          "DDD",
          "Clean Code.",
          "Agile methodology (Scrum).",
        ],
      },
    },
    {
      title: { "pt-br": "Desenvolvedor Full Stack", en: "Full Stack Developer" },
      company_name: "Supra",
      icon: "/images/company/supra.png",
      iconBg: "#383E56",
      date: { "pt-br": "Novembro 2023 - Fevereiro 2024", en: "November 2023 - February 2024" },
      points: {
        "pt-br": [
          "Desenvolvimento de software.",
          "Metodologia ágil (Scrum).",
          "Desenvolvimento de sistema para processamento de pedidos e carrinho de compras.",
          "DDD e TDD.",
        ],
        en: [
          "Software development.",
          "Agile methodology (Scrum).",
          "System development for order processing and shopping cart.",
          "DDD and TDD.",
        ],
      },
    },
    {
      title: { "pt-br": "Desenvolvedor Full Stack", en: "Full Stack Developer" },
      company_name: "Ctrl Saúde",
      icon: "/images/company/ctrls.png",
      iconBg: "#E6DEDD",
      date: { "pt-br": "Setembro 2022 - Novembro 2023", en: "September 2022 - November 2023" },
      points: {
        "pt-br": [
          "Desenvolvimento de sistema MVP para vendas utilizando arquitetura serverless com implantação na nuvem da AWS.",
          "Implementação de ChatBot com API oficial do WhatsApp Business, desenvolvimento do Back-End e Front-End, integração com APIs externas, versionamento do código, automatização do deploy, e documentação.",
          "Techs: TypeScript, React, Material UI, Node.js, AWS (DynamoDB, S3, API Gateway, CloudFront, OpenSearch, CodeBuild, Amplify), Git, BitBucket, MessageBird, ShortCut, Postman.",
        ],
        en: [
          "MVP system development for sales using a serverless architecture with deployment on AWS cloud.",
          "Implementation of a ChatBot with the official WhatsApp Business API, development of Back-End and Front-End, integration with external APIs, code versioning, automated deployment, and documentation.",
          "Techs: TypeScript, React, Material UI, Node.js, AWS (DynamoDB, S3, API Gateway, CloudFront, OpenSearch, CodeBuild, Amplify), Git, BitBucket, MessageBird, ShortCut, Postman.",
        ],
      },
    },
  ],

  skillsText: {
    title: { "pt-br": "Minhas Stacks", en: "My Stacks" },
    subtitle: { "pt-br": "Habilidades", en: "Skills" },
  },

  technologies: [
    { name: "HTML 5", icon: "/images/tech/html.png" },
    { name: "CSS 3", icon: "/images/tech/css.png" },
    { name: "JavaScript", icon: "/images/tech/javascript.png" },
    { name: "TypeScript", icon: "/images/tech/typescript.png" },
    { name: "React JS", icon: "/images/tech/reactjs.png" },
    { name: "Vue JS", icon: "/images/tech/vuejs.png" },
    { name: "Tailwind CSS", icon: "/images/tech/tailwind.png" },
    { name: "Node JS", icon: "/images/tech/nodejs.png" },
    { name: "MongoDB", icon: "/images/tech/mongodb.png" },
    { name: "PostgreSQL", icon: "/images/tech/postgresql.png" },
    { name: "AWS", icon: "/images/tech/aws.png" },
    { name: "git", icon: "/images/tech/git.png" },
    { name: "figma", icon: "/images/tech/figma.png" },
    { name: "docker", icon: "/images/tech/docker.png" },
  ],

  projectsText: {
    title: { "pt-br": "Meus Trabalhos", en: "My Work" },
    subtitle: { "pt-br": "Projetos", en: "Projects" },
    projectsIntro: {
      "pt-br":
        "Os projetos a seguir mostram as minhas habilidades e experiência em projetos de exemplo do mundo real. Cada projeto é brevemente descrito com links para os respectivos repositórios e demos. Eles refletem as minhas habilidades em resolver problemas complexos, trabalhar com diferentes tecnologias, e gerenciar projetos efetivamente.",
      en: "Following projects showcases my skills and experience through real-world exemples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
    },
  },

  projects: [
    {
      name: "OneBitSports",
      description: {
        "pt-br": "Landing page para fornecer informações e notícias sobre esportes com um design bonito e responsivo.",
        en: "Landing page to provide information and news about sports with a beaultiful and responsive design.",
      },
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "CSS", color: "green-text-gradient" },
      ],
      image: "/images/projects/onebitsports.png",
      source_code_link: "https://github.com/vitorluigiorsini/onebitsports",
    },
    {
      name: "Doctorcare",
      description: {
        "pt-br": "Landing page de alta conversão, construída com design moderno e responsivo para atingir seu público e oferecer algo de valor.",
        en: "High-converting landing page built with responsive and modern design to target your audience, and offer them something of value.",
      },
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "CSS", color: "green-text-gradient" },
        { name: "JavaScript", color: "pink-text-gradient" },
      ],
      image: "/images/projects/doctorcare.png",
      source_code_link: "https://github.com/vitorluigiorsini/nlw-return/",
    },
    {
      name: "Find Your Duo",
      description: {
        "pt-br": "Aplicação web full stack e mobile para encontrar colegas e agendar partidas de jogos.",
        en: "API, Web, and Mobile application to find peers and schedule matches.",
      },
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "NodeJs", color: "green-text-gradient" },
        { name: "TypeScript", color: "pink-text-gradient" },
        { name: "React Native", color: "orange-text-gradient" },
      ],
      image: "/images/projects/findDuo.png",
      source_code_link: "https://github.com/vitorluigiorsini/nlw-eSports/",
    },
    {
      name: "Portfolio",
      description: {
        "pt-br": "Um site de portfólio moderno criado com React e ThreeJs.",
        en: "A modern portfolio website created with React and ThreeJs.",
      },
      tags: [
        { name: "React", color: "blue-text-gradient" },
        { name: "Javascript", color: "green-text-gradient" },
        { name: "ThreeJs", color: "orange-text-gradient" },
      ],
      image: "/images/projects/portfolio.png",
      source_code_link: "https://github.com/vitorluigiorsini/vitororsini/",
    },
    {
      name: "ECommerce API",
      description: {
        "pt-br": "E-Commerce serverless API usando AWS-CDK + TypeScript.",
        en: "E-Commerce serverless API with AWS-CDK + TypeScript.",
      },
      tags: [
        { name: "NodeJS", color: "blue-text-gradient" },
        { name: "TypeScript", color: "green-text-gradient" },
        { name: "AWS-CDK", color: "orange-text-gradient" },
      ],
      image: "/images/projects/ecommerce.png",
      source_code_link: "https://github.com/vitorluigiorsini/ecommerce-aws-api/",
    },
  ],

  contactText: {
    title: { "pt-br": "Entre em contato", en: "Get in Touch" },
    subtitle: { "pt-br": "Contato", en: "Contact" },
    copyToClipboardText: {
      "pt-br": "Clique para copiar meu email para sua área de transferência",
      en: "Click to copy my email address to you clipboard",
    },
    clipboardEmail: "vitorluigiorsini@gmail.com",
    copiedToClipboardText: { "pt-br": "✔️ Copiado!", en: "✔️ Copied!" },
    name: { "pt-br": "Seu nome", en: "Your name" },
    namePlaceholder: { "pt-br": "Qual o seu nome?", en: "What's your name name?" },
    email: { "pt-br": "Seu email", en: "Your email" },
    emailPlaceholder: { "pt-br": "Qual o seu email?", en: "What's your email?" },
    message: { "pt-br": "Sua menssagem", en: "Your message" },
    messagePlaceholder: { "pt-br": "O que você gostaria de falar?", en: "What do you want to say?" },
    send: { "pt-br": "Enviar", en: "Send" },
    sending: { "pt-br": "Enviando...", en: "Sending..." },
    sentOk: {
      "pt-br": "✔️ Obrigado. Entrarei em contato o mais breve possível.",
      en: "✔️ Thank you. I will get back to you as soon as possible.",
    },
    sentError: {
      "pt-br": "❌ Algo deu errado. Tente novamente mais tarde.",
      en: "❌ Something went wrong. Try again later.",
    },
  },
};

export type TranslationPair = Record<string, string>;
export type TranslationArrayPair = Record<string, string[]>;
export type Translations = typeof translations;
