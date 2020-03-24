import ledgeaskImageGif from "../../../assets/ledgeaskgif.gif"
import elanceImageGif from "../../../assets/elancegif.gif"
import ebuyImageGif from "../../../assets/ebuygif.gif"
import grandburgerImageGif from "../../../assets/grandburgergif.gif"
import githubImageGif from "../../../assets/githubgif.gif"
import movieImageGif from "../../../assets/movieapigif.gif"
import githubImage from "../../../assets/githubfinder.png"
import grandburgerImage from "../../../assets/grandburger.png"
import ledgeaskImage from "../../../assets/ledgeask.png"
import ebuyImage from "../../../assets/ebuy.png"
import elanceImage from "../../../assets/elance.png"
import movieImage from "../../../assets/movify.png"
import coronaImage from "../../../assets/corona-image.png"
import coronaGif from "../../../assets/coronagif.gif"

export const ProjectsArray = [
    {
        id: 1,
        title: "LedgeAsk",
        image: ledgeaskImage,
        onHover: ledgeaskImageGif,
        description: "LedgeAsk is a platform where users can ask business and technology related questions, get their questions upvoted aswell as answered from other individuals. I used React, Redux, CSS and a little bit of Bootstrap for the Front-End and for the Back-End I used NodeJS, Express, Mongoose and MongoDB. There are some issues with image uploading in production, since I did not use a 3rd party storage, like AWS S3.",
        website: "https://ledgeask.herokuapp.com/",
        github: "https://github.com/tigerabrodi/Ledge-Ask"

    },
    {
        id: 2,
        title: "eBuy",
        image: ebuyImage,
        onHover: ebuyImageGif,
        description: "eBuy is a marketplatform for where users can put their items to sale but also purchase other items after being authenticated. I used React, Redux and Bootstrap for the Front-End and for the Back-End I used NodeJS, Express, Mongoose and MongoDB. There are some issues with image uploading in production, since I did not use a 3rd party storage, like AWS S3.",
        website: "https://ebuy-abrodi.herokuapp.com/",
        github: "https://github.com/tigerabrodi/eBuy"
    },
    {
        id: 3,
        title: "Corona Pro",
        image: coronaImage,
        onHover: coronaGif,
        description: "Corona Pro is a website that informs you about the Coronavirus, how you should protect yourself and also some general information. This website was heavily focused on making the User Interface look beautiful but also being informative.",
        website: "https://coronapro.netlify.com/",
        github: "https://github.com/tigerabrodi/Corona-Pro"
    },
    {
        id: 4,
        title: "Grand Burger",
        image: grandburgerImage,
        onHover: grandburgerImageGif,
        description: "Grand Burger is a restaurant. This personal project was for me to dig deeper into CSS & Flexbox. I created it with React.",
        website: "https://grandburger.netlify.com/",
        github: "https://github.com/tigerabrodi/Grand-Burger"
    },
    {
        id: 5,
        title: "ELance",
        image: elanceImage,
        onHover: elanceImageGif,
        description: "ELance is a platform for freelancers to connect with each other, share ideas and collaborate. Users can add previous work experience, education and an image to their profile, post different discussions and also comment on the posts. I used React, Redux and Bootstrap for the Front-End and for the Back-End I used NodeJS, Express, Mongoose and MongoDB. There are some issues with image uploading in production, since I did not use a 3rd party storage, like AWS S3.",
        website: "http://elance-abrodi.herokuapp.com/",
        github: "https://github.com/tigerabrodi/ELance"
    },
    {
        id: 6,
        title: "Github Finder",
        image: githubImage,
        onHover: githubImageGif,
        description: "Github Finder is an app that allows visitors to search for github users. After searching you can view a single user and find information about him aswell as 30 repositories from him. This project was created using React, Redux & Bulma",
        website: "https://tigex-github-users.netlify.com/",
        github: "https://github.com/tigerabrodi/github-finder"
    },
    {
        id: 7,
        title: "Movify",
        image: movieImage,
        onHover: movieImageGif,
        description: "Movify is a website where you can search for movies, and also view a single movie. For this website I used react solely with scss, my goal is to focus on passing props around and learning how to lift up the state.",
        website: "https://movie-movify.netlify.com/",
        github: "https://github.com/tigerabrodi/movify"
    },
]
