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
        $(".frame-skills p:nth-child(1)").text("HTML é o bloco de construção mais básico da Web. Ele define o significado e a estrutura do conteúdo da Web.")
        $(".frame-skills p:nth-child(2)").text("TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.")
        $(".frame-skills p:nth-child(3)").text("CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou XML. CSS descreve como os elementos devem ser renderizados na tela, no papel, na fala ou em outras mídias.")
        $(".frame-skills p:nth-child(4)").text("O Visual Studio Code é um editor de código-fonte leve, mas poderoso, que roda em desktops e está disponível para Windows, macOS e Linux.")
        $(".frame-skills p:nth-child(5)").text("JavaScript (JS) é uma linguagem de programação leve interpretada (ou compilada just-in-time) com funções de primeira classe. Embora seja mais conhecida como a linguagem de script para páginas da Web.")
        $(".frame-skills p:nth-child(6)").text("O GitHub é um site e serviço baseado em nuvem que ajuda desenvolvedores a armazenar e gerenciar seus códigos, bem como rastrear e controlar alterações em seus códigos.")
        $(".frame-skills p:nth-child(7)").text("React é uma biblioteca. Ela permite que você junte componentes, mas não prescreve como fazer roteamento e busca de dados. Componentes React são funções JavaScript.")
        $(".frame-skills p:nth-child(8)").text("Git é um sistema de controle de versão distribuído, o que significa que toda a base de código e histórico estão disponíveis no computador de cada desenvolvedor, o que permite ramificação e mesclagem fáceis.")
        $(".square-infor .title").text("Passe o mouse sobre uma habilidade")
        //projects
        $(".projects h1").text("Meus Projetos")
        $(".view--project a:nth-child(1) span").text("Página")
        $(".view--project a:nth-child(2) span").text("Repositório")
        $(".my-projects:nth-child(3) .title-project").text("Projeto Luta")
        $(".my-projects:nth-child(5) .title-project").text("Teclado Virtual")
        $(".my-projects:nth-child(6) .title-project").text("Cadastro Form")
        $(".my-projects:nth-child(7) .title-project").text("Clima")
        $(".my-projects:nth-child(8) .title-project").text("Jogo da Velha")
        $(".my-projects:nth-child(9) .title-project").text("Quadro de Desenho")
        $(".my-projects:nth-child(10) .title-project").text("Relógio")
        $(".my-projects:nth-child(1) p").text("Landing page de um produto, caixa de som JBL")
        $(".my-projects:nth-child(2) p").text("Clone de um layout para prática do HTML e CSS")
        $(".my-projects:nth-child(3) p").text("Jogo de luta feito em JavaScript puro")
        $(".my-projects:nth-child(4) p").text("Atributo feito sobre Eiichiro Oda, sua jornada e obras.")
        $(".my-projects:nth-child(5) p").text("Ao apertar uma key do seu teclado emite um som de uma nota musical de piano. Podendo compor um som com várias notas.")
        $(".my-projects:nth-child(6) p").text("Projeto de um cadastro de produtos e exibição do produto em uma tabela ao cadastrar.")
        $(".my-projects:nth-child(7) p").text("Informa o clima e temperatura da localidade pesquisada.")
        $(".my-projects:nth-child(8) p").text("O primeiro jogador que alinhar 3 de seus símbolos de maneira idêntica (horizontal, vertical ou diagonal), vence o jogo.")
        $(".my-projects:nth-child(9) p").text("Mostre sua criatividade desenhando com as cores disponíveis.")
        $(".my-projects:nth-child(10) p").text("Relógio virtual e analógivo, mostrando as horas atuais.")
        //about
        $(".about-me h1").text("Sobre")
        $(".text-about p:nth-child(1)").text("Desde de 2022 estudo programação, algo que me identifiquei e busquei cada vez mais a aprender. Durante os meus estudos realizei diversos projetos e desenvolvi habilidades, me capacitando durante esses processos. Tenho afinidade com")
        $(".text-about p:nth-child(2)").text("HTML, CSS e JavaScript. Busco por desafios que façam eu extrair meu máximo,")
        $(".text-about p:nth-child(3)").text("sou dedicado e busco sempre fazer o melhor com eficiência e eficácia.")
        //contact
        $(".infor-contact:nth-child(1)").text("Entre em contato comigo pelo e-mail:")
    })
})