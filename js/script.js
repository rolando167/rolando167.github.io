/*==================== toggle icon navbar 💎💎 ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+ height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }

    })

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');  
};


/*==================== scroll reveal 🔋🔋 ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right'})



/*==================== language Change  🚩🚩====================*/
let selectLang = document.getElementById('select-lang');

selectLang.addEventListener('change', function() {
    console.log('You selected: ', this.value);
    // Guardar en localstorage
    localStorage.setItem('lang-selected',  this.value);
    changeLanguage(this.value)
});

document.addEventListener("DOMContentLoaded", (event) => {
    loadLang()
    console.log("DOM fully loaded and parsed");
});


function loadLang(){
    lang = localStorage.getItem('lang-selected');
    if(lang != null)
        selectLang.value = lang
    else{
        selectLang[0].selectedIndex = 0;
    }
    changeLanguage(lang)
}

let typed = undefined;

function changeLanguage(value = '0') {
    let headerTyped = ['Desarrollador FullStack', 'Analista sistemas']
    let objLang = {};
    if(value === null || value === '0'){
        objLang = language.esp;
    }else if(value === '1'){
        objLang = language.eng;
    }

    //nav
    navPortfolio.textContent = objLang.nav.portfolio
    navHome.textContent = objLang.nav.home
    navAbout.textContent = objLang.nav.about
    navServices.textContent = objLang.nav.services
    navProjects.textContent = objLang.nav.projects
    navContact.textContent = objLang.nav.contact

    //header
    headerWelcome.textContent = objLang.header.welcome
    headerWho.textContent = objLang.header.who
    headerTyped = objLang.header.typed
    headerMessage.textContent = objLang.header.message
    headerdownloadCv.textContent = objLang.header.downloadCv

    //About
    aboutName.textContent = objLang.about.about
    aboutme.textContent = objLang.about.me
    aboutparagraph1.textContent = objLang.about.paragraph1
    aboutparagraph2.textContent = objLang.about.paragraph2
    aboutparagraph3.textContent = objLang.about.paragraph3
    aboutbtn.textContent = objLang.about.btn

    //Services
    servicesName.textContent = objLang.services.services
    service1.textContent = objLang.services.service1
    serviceDes1.textContent = objLang.services.serviceDes1
    service2.textContent = objLang.services.service2
    serviceDes2.textContent = objLang.services.serviceDes2
    service3.textContent = objLang.services.service3
    serviceDes3.textContent = objLang.services.serviceDes3

    // Projects
    projectsLast.textContent = objLang.projects.projectLast
    projectTitle.textContent = objLang.projects.projectTitle

    /*==================== typed js ====================*/
    if(typed) {
        typed.destroy();
    }
     typed = new Typed('.multiple-text', {
        strings: headerTyped,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true,
    });

}


// Define the language reload anchors
let language = {
    eng: {
        nav: {
            portfolio : "Portfolio",
            home : "Home",
            about : "About",
            services: "Services",
            skills : "Skills",
            projects : "Projects",
            contact :"Contact"
        },
        header: {
              welcome: "Hi, My name is"
            , who: "I'm"
            , typed: ['FullStack Developer', 'Software analyst', 'Programmer']
            , message:"I am passionate about my work in information technologies."
            , downloadCv :"Download CV"
        },
        about : {
              about:"About"
            , me: "Me 🧑"
            , paragraph1: "Software developer with more than 5 years of experience, with programming languages ​​in Java, Php, Javascript, C# among others."
            , paragraph2: "Deploying microservices in springboot, Laravel, angular and with software development technologies."
            , paragraph3: "I also like adventure and extreme sports, spending time with family and friends."
            , btn:"Projects ↓"
        },
        services:{
              services:"Services"
            , service1:"Requirements"
            , serviceDes1:"Analysis of software requirements and methodologies, and time control."
            , service2:"Software development"
            , serviceDes2:"Create and develop new software functionalities in the required languages ​​and with quality tests."
            , service3:"Database"
            , serviceDes3:"I have worked with relational databases such as SQL Server, Oracle, Mysql and non-relational databases such as MongoDB."
        },
        projects:{
              projectLast :"Last"
            , projectTitle :"Projects"
        },
        copyright :{
            text: "copyright all right reserved"
        }
    },
    esp: {
        nav: {
            portfolio : "Portafolio",
            home : "Inicio",
            about : "Sobre",
            services: "Servicios",
            skills : "Habilidades",
            projects : "Proyectos",
            contact :"Contacto"
        },
        header: {
            welcome: "Hola, My nombre es",
            who: "Soy",
            typed: ['Desarrollador FullStack', 'Analista sistemas'],
            message:"Apasionado con mi trabajo en las tecnologías de la información.",
            downloadCv :"Download CV",
        },
        about : {
              about:"Sobre"
            , me: "mí"
            , paragraph1: "Desarrollador de software con mas de 5 años de experiencia, con lenguajes de programación en Java, Php, Javascript, C# entres otros."
            , paragraph2: "Desplegando microservicios en springboot, Laravel, angular y con tecnologias del del desarrollo del software."
            , paragraph3: "Ademas me gustan los deportes de aventura, extremos, pasar tiempo en familia y amigos"
            , btn: "Proyectos ↓"
        },
        services:{
              services:"Servicios"
            , service1:"Requerimientos"
            , serviceDes1:"Análisis de requerimientos y metodologías de software, y control de tiempo."
            , service2:"Desarrollo software"
            , serviceDes2:"Crear y desarrollar nuevas funcionalidades sofware en los lenguajes requeridos y con pruebas de calidad."
            , service3:"Base de datos"
            , serviceDes3:"He Trabajado con bases de datos realacionales como Sql server, Oracle, Mysql y no relaciones como MongoDB."
        },
        projects:{
              projectLast :"Last"
            , projectTitle :"Project"
        },
        copyright :{
            text: "copyright"
        }
    }
};