$(function() {
    $(".br").click(function() {
        //menu
        $(".ul-menu li:nth-child(1) a").text("Início")
        $(".ul-menu li:nth-child(2) a").text("Habilidades")
        $(".ul-menu li:nth-child(3) a").text("Projetos")
        $(".ul-menu li:nth-child(4) a").text("Sobre")
        $(".ul-menu li:nth-child(5) a").text("Contato")
        $(".language-selected").text("pt-BR")
        $(".language-selected").removeClass("change-en")
        $(".language-selected").addClass("change-br")
        //home
        $(".home-presentation p:nth-child(1)").text("Olá pessoas,")
        $(".home-presentation h1:nth-child(2)").text("Meu nome é")
        $(".home-presentation h1:nth-child(3)").text("Jeanlerson Santos")
        $(".home-presentation p:nth-child(4)").text("Seja bem vindo ao meu portfólio website")
        //skilss
        $(".skills h1").text("Minhas Habilidades")
        $(".frame-skills p:nth-child(1)").text("HTML is the most basic building block of the Web. It defines the meaning and structure of web content.")
        $(".frame-skills p:nth-child(2)").text("TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.")
        $(".frame-skills p:nth-child(3)").text("CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.")
        $(".frame-skills p:nth-child(4)").text("Visual Studio Code is a lightweight but powerful source code editor which runs on desktop and is available for Windows, macOS and Linux.")
        $(".frame-skills p:nth-child(5)").text("JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages.")
        $(".frame-skills p:nth-child(6)").text("GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code.")
        $(".frame-skills p:nth-child(7)").text("React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. React components are JavaScript functions.")
        $(".frame-skills p:nth-child(8)").text("Git is a distributed version control system, which means that the entire codebase and history is available on every developer’s computer, which allows for easy branching and merging.")
        $(".infor-skills").text("Passe o mouse sobre uma habilidade")
        //projects
        $(".projects h1").text("Meus Projetos")
        //about
        $(".about-me h1").text("Sobre")
        $(".text-about p:nth-child(1)").text("Desde de 2022 estudo programação, algo que me identifiquei e busquei cada vez mais a aprender. Durante os estudos realizei projetos e desenvolvi habilidades, tenho afinidade com HTML, CSS e JavaScript.")
        $(".text-about p:nth-child(2)").text("Durante os estudos realizei projetos e desenvolvi habilidades, tenho afinidade com HTML, CSS e JavaScript.")
        $(".text-about p:nth-child(3)").text("Busco por desafios que façam eu extrair meu máximo, sou dedicado e busco sempre fazer o melhor com eficiência e eficácia.")
        //contact
        $(".infor-contact:nth-child(1)").text("Entre em contato comigo pelo e-mail:")
    })
})