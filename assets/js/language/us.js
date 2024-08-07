$(function() {
    $(".en").click(function() {
        //menu
        $(".ul-menu li:nth-child(1) a").text("Home")
        $(".ul-menu li:nth-child(2) a").text("Skills")
        $(".ul-menu li:nth-child(3) a").text("Projects")
        $(".ul-menu li:nth-child(4) a").text("About")
        $(".ul-menu li:nth-child(5) a").text("Contact")
        $(".language-selected").text("en-US")
        $(".language-selected").removeClass("change-br")
        $(".language-selected").addClass("change-en")
        //home
        $(".home-presentation p:nth-child(1)").text("Hello people,")
        $(".home-presentation h1:nth-child(2)").text("My name is")
        $(".home-presentation h1:nth-child(3)").text("Jeanlerson Santos")
        $(".home-presentation p:nth-child(4)").text("Welcome to my portfolio website")
        //skilss
        $(".skills h1").text("My Skills")
        $(".frame-skills p:nth-child(1)").text("HTML is the most basic building block of the Web. It defines the meaning and structure of web content.")
        $(".frame-skills p:nth-child(2)").text("TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.")
        $(".frame-skills p:nth-child(3)").text("CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.")
        $(".frame-skills p:nth-child(4)").text("Visual Studio Code is a lightweight but powerful source code editor which runs on desktop and is available for Windows, macOS and Linux.")
        $(".frame-skills p:nth-child(5)").text("JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages.")
        $(".frame-skills p:nth-child(6)").text("GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code.")
        $(".frame-skills p:nth-child(7)").text("React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. React components are JavaScript functions.")
        $(".frame-skills p:nth-child(8)").text("Git is a distributed version control system, which means that the entire codebase and history is available on every developer’s computer, which allows for easy branching and merging.")
        $(".infor-skills").text("Hover over the skill")
        //projects
        $(".projects h1").text("My Projects")
        //about
        $(".about-me h1").text("Aboute Me")
        $(".text-about p:nth-child(1)").text("Since 2022, I have been studying programming, something I identified with and have continuously sought to learn more about. During my studies, I worked on projects and developed skills, and I have an affinity for HTML, CSS, and JavaScript.")
        $(".text-about p:nth-child(2)").text("I seek challenges that push me to perform at my best.")
        $(".text-about p:nth-child(3)").text("I am dedicated and always strive to do my best with efficiency and effectiveness.")
        //contact
        $(".infor-contact:nth-child(1)").text("If you have any questions, please contact me:")
    })
})