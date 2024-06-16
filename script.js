document.addEventListener("DOMContentLoaded", () => {
    // Data for skills
    const skills = [
        { id: 1, name: "React JS" },
        { id: 2, name: "Next JS" },
        { id: 3, name: "Astro" },
        { id: 4, name: "Firebase" },
        { id: 5, name: "Redux" },
        { id: 6, name: "Javascript" },
        { id: 7, name: "Vite" },
        { id: 8, name: "React Native" }
    ];

    const skillListContainer = document.getElementById("skillList");

    skills.forEach(skill => {
        const skillItem = document.createElement("p");
        skillItem.textContent = skill.name;
        skillListContainer.appendChild(skillItem);
    });

    // Observer for skills and experience sections
    const elements = document.querySelectorAll('.skillHeader p, .skillList p, .experienceHeader p, .experienceList p');
    const observerOptions = { threshold: 0.1 };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    elements.forEach(element => {
        observer.observe(element);
    });

    // Data for projects
    const data = [
        {   
            id: 1,
            title: 'Style Haven',
            path: 'https://style-haven-q99x.vercel.app/',
            img: "https://framerusercontent.com/images/SA2o6xEgxIeG5WL11rB44TMvJig.jpg",
            desc: "An Ecommerce website showing minimalistic and refined branding for a wellness retreat, conveying tranquility and well-being through design elements.",
            year: 2023,
            type: "Website",
            github: "https://github.com/EmmaExcel/style-haven",
            detailImage: [
                { id: 1, imgUrl: "https://framerusercontent.com/images/SA2o6xEgxIeG5WL11rB44TMvJig.jpg" },
                { id: 2, imgUrl: "https://framerusercontent.com/images/aW1s3k3Ss561NpFQOfpCCzsvPs.jpg" },
                { id: 3, imgUrl: "https://framerusercontent.com/images/lmoDtMcmF72vYCcBWxYKVkrJMY.jpg" }
            ]
        },
        {
            id: 2,
            title: 'Emma Rume',
            path: 'https://rumeemmaokerhe.netlify.app/',
            img: "https://framerusercontent.com/images/K6UfzS2SSz2uYkSu06kr2rzAKM.png?scale-down-to=512",
            desc: "A dynamic Author Portfolio and Blog website for RUME, presenting her literary works and insights. Designed a user-friendly interface that seamlessly integrates RUME's books, fostering a connection with readers. Spearheaded frontend development, ensuring a visually appealing and responsive design to highlight literary achievements. Integrated features for displaying RUME's book collection and creating a blog space for sharing thoughts and insights. Utilized React.js for the development.",
            year: 2022,
            type: "Website",
            github: "https://github.com/EmmaExcel/RumeWebsite",
            detailImage: [
                { id: 1, imgUrl: "https://framerusercontent.com/images/4zE05ccJp1j0zq8cmPU7CqGQZd4.png" },
                { id: 2, imgUrl: "https://framerusercontent.com/images/y0MVBqalS8WKAqB8tVCKpMxJI.png" },
                { id: 3, imgUrl: "https://framerusercontent.com/images/sZIp2v8s7yHamv8r7x2BVz7IuY.png" },
                { id: 4, imgUrl: "https://framerusercontent.com/images/fmp9HXiytfyA9xdNTl3G5P1yv6M.png" },
            ]
        },
        {
            id: 3,
            title: 'JTspicy V2',
            path: 'https://jtspicyv2.netlify.app/',
            img: "https://framerusercontent.com/images/sI86f4FEhNKDIMPcoV3cwF1pg.png",
            desc: "Revamped the JTSPICY portfolio website with a keen focus on elevating visual aesthetics and user interface, informed by thorough analysis of user feedback and industry trends. Executed a frontend redesign, emphasizing visual appeal and responsiveness, while closely collaborating with Chef JTSPICY to align with the evolving brand. Utilized React.js and the React Timeline component for a seamless and improved user experience.",
            year: 2021,
            type: "Website",
            github: "https://github.com/EmmaExcel/jtspicy-v2",
            detailImage: [
                { id: 1, imgUrl: "https://framerusercontent.com/images/4HGgKoRZq8lfYac3ZxwUPOYuWjg.png" },
                { id: 2, imgUrl: "https://framerusercontent.com/images/sI86f4FEhNKDIMPcoV3cwF1pg.png" },
                { id: 3, imgUrl: "https://framerusercontent.com/images/mEmvhywy9JGzmc5N8QGUsQKoDRY.png" },
            ]
        },
        {
            id: 4,
            title: 'JTspicy',
            path: 'https://jtspicy.netlify.app/',
            img: "https://framerusercontent.com/images/BIVYgWTaEIjtTEqVWPtzvNOk8k8.png?scale-down-to=1024",
            desc: "Crafted an immersive portfolio website for Chef JTSPICY, prioritizing frontend development with React.js. Led the creation of an intuitive user interface and integrated the React Timeline component to showcase the chef's professional journey and culinary achievements seamlessly. The visually captivating site provides an interactive experience, highlighting the chef's culinary mastery and accomplishments.",
            year: 2021,
            type: "Website",
            github: "https://github.com/EmmaExcel/jtspicy-v1",
            detailImage: [
                { id: 1, imgUrl: "https://framerusercontent.com/images/FcBTFmbErUsWFIBW02KDZq5Pzig.png?scale-down-to=2048" },
                { id: 2, imgUrl: "https://framerusercontent.com/images/8RSYoZwByPPvXC2cF7i8A4kg.png?scale-down-to=1024" },
                { id: 3, imgUrl: "https://framerusercontent.com/images/BIVYgWTaEIjtTEqVWPtzvNOk8k8.png?scale-down-to=1024" },
            ]
        },
        {
            id: 5,
            title: 'Eskill',
            path: 'https://eskill.netlify.app/',
            img: "https://framerusercontent.com/images/NWdm7Cdz6NlQT21c3t2K4vM5cMQ.png",
            desc: "An Ecommerce website showing minimalistic and refined branding for a wellness retreat, conveying tranquility and well-being through design elements.",
            year: 2023,
            type: "Website",
            github: "https://github.com/EmmaExcel/eksill",
            detailImage: [
                { id: 1, imgUrl: "https://framerusercontent.com/images/KJIhWGX8hm2UdzQr4ZQQk3vIVI.png" },
                { id: 2, imgUrl: "https://framerusercontent.com/images/53pUtTCjLBzEzcV83CyZatOA.png" },
                { id: 3, imgUrl: "https://framerusercontent.com/images/gCKldzaboPizfhw5opToEU.png" },
            ]
        },
        {
            id: 6,
            title: 'Structura',
            path: 'https://structura.vercel.app/',
            img: "https://framerusercontent.com/images/RGGWoF0v0bipS9MRA5yNeVX6IOo.png",
            desc: "A dynamic portfolio for a team of exceptional civil engineers. Leveraged the power of vite, weaving in the elegance of Swiper.js & Framer motion for a delightful user experience.",
            year: 2023,
            type: "Website",
            github: "https://github.com/EmmaExcel/Travel2.0",
            detailImage: [
                { id: 1, imgUrl: "https://framerusercontent.com/images/RGGWoF0v0bipS9MRA5yNeVX6IOo.png" },
                { id: 2, imgUrl: "https://framerusercontent.com/images/gJSY14rM6txjgtDwKxxDMeoQ.png" },
                { id: 3, imgUrl: "https://framerusercontent.com/images/GPCZTysTLH8quaOvO4uju1Qztw.png" },
                { id: 4, imgUrl: "https://framerusercontent.com/images/bznxPD0Q7m5MkI2uPnUEfunPI.png" },
            ]
        },
    ];

    const workListContainer = document.getElementById("workListContainer");

    data.forEach(work => {
        const workBoxContainer = document.createElement("div");
        workBoxContainer.className = "workBoxContainer";

        const workBox = document.createElement("div");
        workBox.className = "workBox";
        
        const img = document.createElement("img");
        img.src = work.img;
        workBox.appendChild(img);

        const viewLink = document.createElement("a");
        viewLink.href = `${work.path}`;
        viewLink.className = "view";
        viewLink.innerHTML = '<div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.373-8-5.373S0 8 0 8s3 5.373 8 5.373S16 8 16 8zm-8 4A4 4 0 1 1 8 4a4 4 0 0 1 0 8zm0-1.5A2.5 2.5 0 1 0 8 5.5a2.5 2.5 0 0 0 0 5z"/></svg><p>VIEW PROJECT</p></div>';
        workBox.appendChild(viewLink);

        workBoxContainer.appendChild(workBox);

        const workText = document.createElement("div");
        workText.className = "workText";
        workText.innerHTML = `<p>${work.title}</p><p>WEBSITE</p>`;
        
        workBoxContainer.appendChild(workText);

        workListContainer.appendChild(workBoxContainer);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.5 });
        observer.observe(workBoxContainer);
    });
});
