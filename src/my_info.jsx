//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiww6fEkj5TXWLqtISpY5Sx6cE8DjD5woyXJiJGqWisBa61Gqg59PH5VwvXtpf5A0-Bc&usqp=CAU';


// Enter here your first and last name
const name = {
  firstname: 'Matthew',
  lastname: 'Hagg',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://drive.google.com/file/d/1rIhy2ec1Dd2_GzbxCiVszqU9GzG_wyQ2/view?usp=sharing',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Database Developer...',
  'UX/UI designer...',
  'MMA Instructor...'  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'http://www.linkedin.com/in/matthew-hagg-393820205',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/OddMattHatt3r',
  },
  //   Add more social profiles here, it will automatically add more link-buttons with icons (if available)
  //   {
  //     name: 'Twitter',
  //     icon: 'lni lni-twitter',
  //     url: 'https://twitter.com/your-username',
  //   },
  //   {
  //     name: 'Facebook',
  //     icon: 'lni lni-facebook',
  //     url: 'https://facebook.com/your-username',
  //   },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Web Development',
    icon: 'lni lni-code',
    title: 'Front End',
    description:
      "I have gained experience creating varying UI/UX for projects. From simple classroom projects, to live developments, my frontend experience is used to make user interaction easeir.",
    skills: [
      {
        icon: 'lni lni-code',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-certificate',
        title: 'CSS3',
      },
      {
        icon: 'lni lni-crop',
        title: 'JavaScript',
      },
    ],
  },
  {
    name: 'Software',
    icon: 'lni lni-code',
    title: 'Backend',
    description:
    "Teaching myself backend from scratch, I have developed knowledge of both PostgreSQL and SQL. Database configuration and administration takes up a large percentage of my knowledge. .",
    skills: [
      {
        icon: 'lni lni-certificate',
        title: 'adobe',
      },
      {
        icon: 'lni lni-code',
        title: 'Code',
      },
      {
        icon: 'lni lni-database',
        title: 'Sketch'
      },
     
      
    ],
  },
  {
    name: 'brands',
    icon: 'lni lni-code',
    title: 'Brands',
    description:
    "Through experience of creating and managing a user-focused product, I have gained experience in managing branding and social responsibilities of companies.",
    skills: [
      {
        icon: 'lni lni-pinterest',
        title: 'Pinterest',
      },
      {
        icon: 'lni lni-crop',
        title: 'Crop',
      },
      
    ],
  },
  
];

// Here you can give in your achiements in a number counter animation
const achievements = [
  { word: 'bullshit', value: 100, unit: '%' },
  { word: 'finished projects', value: 7500, unit: '' },
  { word: 'experience', value: 20, unit: ' years' },
];



// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'Project 1',
    description: 'House-Hunter',
    demoUrl: 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
    githubUrl: 'https://github.com/OddMattHatt3r/House-Hunter' 
  },
  {
    title: 'Project 2',
    description: 'Bird Call Identifier',
    demoUrl: 'https://c4.wallpaperflare.com/wallpaper/43/399/700/photography-camera-birds-animals-wallpaper-preview.jpg',
    githubUrl: 'https://github.com/OddMattHatt3r/Bird-Call-Identifier' 
  },
  {
    title: 'Project 3',
    description: 'HackKean 2023',
    demoUrl: 'https://yt3.googleusercontent.com/jIjUQAEIxxp-YOSN0JupHo-9QjGv5AMF8GpR9tdEw9-obpaY4nyjsga9MUL192hTYnHRsbpUdw=s900-c-k-c0x00ffffff-no-rj',
    githubUrl: 'https://github.com/OddMattHatt3r/HackKean-2023' 
  },
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there, I'm Jonathan. With 20 years of experience as photographer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.
    `,
  power_slogan: `Creating Smarter Solutions, Driving Success.`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_XXXXXXX',
  templateID: 'template_XXXXXXXX',
  userID: 'XXXXXXXXXXXX',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
