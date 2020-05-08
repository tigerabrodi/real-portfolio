
import grandburgerImage from "../../../assets/grandburger.png"
import ledgeaskImage from "../../../assets/ledgeask.png"
import ebuyImage from "../../../assets/ebuy.png"
import elanceImage from "../../../assets/elance.png"
import coronaImage from "../../../assets/corona-image.png"
import rezipeImage from "../../../assets/rezipe.png";

export const ProjectsArray = [
        {
            id: 1,
            title: "Rezipe",
            image: rezipeImage,
            description: "Rezipe is a website that allows you to search for recipes based on name & calories. After being authenticated users can also add recipes into their dashboard. This app was created with Angular, Angularfire & Firebase. I worked with the edamam API in order to retrieve the recipes data. As for the styling I used SCSS.",
            website: "",
            github: "https://github.com/tigerabrodi/Rezipe"

        },
    {
        id: 2,
        title: "LedgeAsk",
        image: ledgeaskImage,
        description: "LedgeAsk is a platform where users can ask business and technology related questions, get their questions upvoted aswell as answered from other individuals. I used React, Redux, CSS and a little bit of Bootstrap for the Front-End and for the Back-End I used NodeJS, Express, Mongoose and MongoDB. There are some issues with image uploading in production, since I did not use a 3rd party storage, like AWS S3.",
        website: "https://ledgeask.herokuapp.com/",
        github: "https://github.com/tigerabrodi/Ledge-Ask"

    },
    {
        id: 3,
        title: "eBuy",
        image: ebuyImage,
        description: "eBuy is a marketplatform for where users can put their items to sale but also purchase other items after being authenticated. I used React, Redux and Bootstrap for the Front-End and for the Back-End I used NodeJS, Express, Mongoose and MongoDB. There are some issues with image uploading in production, since I did not use a 3rd party storage, like AWS S3.",
        website: "https://ebuy-abrodi.herokuapp.com/",
        github: "https://github.com/tigerabrodi/eBuy"
    },
    {
        id: 4,
        title: "Corona Pro",
        image: coronaImage,
        description: "Corona Pro is a website that informs you about the Coronavirus, how you should protect yourself and also some general information. This website was heavily focused on making the User Interface look beautiful but also being informative.",
        website: "https://coronapro.netlify.com/",
        github: "https://github.com/tigerabrodi/Corona-Pro"
    },
    {
        id: 5,
        title: "Grand Burger",
        image: grandburgerImage,
        description: "Grand Burger is a restaurant. This personal project was for me to dig deeper into CSS & Flexbox. I created it with React.",
        website: "https://grandburger.netlify.com/",
        github: "https://github.com/tigerabrodi/Grand-Burger"
    },
    {
        id: 6,
        title: "ELance",
        image: elanceImage,
        description: "ELance is a platform for freelancers to connect with each other, share ideas and collaborate. Users can add previous work experience, education and an image to their profile, post different discussions and also comment on the posts. I used React, Redux and Bootstrap for the Front-End and for the Back-End I used NodeJS, Express, Mongoose and MongoDB. There are some issues with image uploading in production, since I did not use a 3rd party storage, like AWS S3.",
        website: "http://elance-abrodi.herokuapp.com/",
        github: "https://github.com/tigerabrodi/ELance"
    }
]
