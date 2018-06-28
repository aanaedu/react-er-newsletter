const uuidv4 = require('uuid/v4');

const AppData = {
    newsletterData: [
        {
            id: uuidv4(),
            category: 'Arts and Culture',
            items: [
                {
                    id: uuidv4(),
                    title: 'Hayy: a major new centre for the creative industries in Saudi Arabia',
                    imageUrl: 'assets/images/arts-culture-001.jpg',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: 'Art Jameel continues to build to a strong infrastructure around which the arts can thrive within Saudi Arabia with the announcement that a new ...'
                },
                {
                    id: uuidv4(),
                    title: "Art Jameel and the Delfina foundation collaborate on bicontinental art exhibition",
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    id: uuidv4(),
                    title: "'Saudi Seen' photography exhibition inspires a new generation of image-makers",
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    id: uuidv4(),
                    title: 'Jameel Prize 5 shortlist announced',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                }
            ]
        },
        {
            id: uuidv4(),
            category: 'Job Creation',
            items: [
                {
                    id: uuidv4(),
                    title: 'Bab Rizq Jameel Recruitment provides more than 50,000 employment opportunities in 2017',
                    imageUrl: 'assets/images/job-creation-001.jpg',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: 'Bab Rizq Jameel Recuritment (BRJR) has a strong reputation for building diverse economic opportunity, creating and filling new employment ...'
                }
            ]
        },
        {
            id: uuidv4(),
            category: 'Education and Training',
            items: [
                {
                    id: uuidv4(),
                    title: 'MIT Enterprise Forum judging panel narrows the field with 45 applicants through to the semi-finals of Saudi competition',
                    imageUrl: 'assets/images/education-training-001.jpg',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: 'Experience judging panel of 60 business experts and academics from Saudi Arabia and the Arab world have selected the 45 best appl ...'
                },
                {
                    id: uuidv4(),
                    title: '84 teams from 14 Arab countries qualify for the semi-finals of 11th edition of MIT Enterprise',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    id: uuidv4(),
                    title: 'Forum Arab Startup Competition',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    id: uuidv4(),
                    title: 'Transformin Education around the World',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                },
                {
                    id: uuidv4(),
                    title: 'MIT President Rafael Reif discusses Abdul Latif Jameel World Education Lab (J-WEL)',
                    imageUrl: '',
                    videoUrl: 'assets/images/mit-j-well.jpg',
                    additionalInfo: 'Jan 25, 2018',
                    excerpt: ''
                },
                {
                    id: uuidv4(),
                    title: '2nd edition of the MIT Enterprise Forum Saudi Startup Competition',
                    imageUrl: '',
                    videoUrl: 'assets/images/mit-enterprise-forum.jpg',
                    additionalInfo: 'Jan 25, 2018',
                    excerpt: ''
                }
            ]
        },
        {
            id: uuidv4(),
            category: 'Global Development',
            items: [
                {
                    id: uuidv4(),
                    title: 'Good governance and violent crime to be tackled by Abdul Latif Jameel Poverty action Lab research in collaboration with the UK government',
                    imageUrl: 'assets/images/global-development.jpg',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: 'The Abdul Latif Jameel Poverty Action Lab (J-PAL) has been providing vital research into methodologies and solutions to tackle some of the ...'
                },
                {
                    id: uuidv4(),
                    title: 'J_WAFS works to ensure food and water security for generations to come',
                    imageUrl: '',
                    videoUrl: '',
                    additionalInfo: '3 min read',
                    excerpt: ''
                }
            ]
        }
    ],
    achievementData: [
        {
            id: uuidv4(),
            year: 2017,
            items: [
                {
                    id: uuidv4(),
                    amount: "51,000",
                    symbol: "",
                    organisation: "Bab Rizq Jameel Recruitment",
                    description: "more than 51,000 job opportunities in 2017"
                },
                {
                    id: uuidv4(),
                    amount: "6,000",
                    symbol: "",
                    organisation: "Bab Rizq Jameel Microfinance",
                    description: "more than 6,000 job opportunities in 2017"
                },
                {
                    id: uuidv4(),
                    amount: "300",
                    symbol: "mln",
                    organisation: "Abdul Latif Jameel Poverty Action Lab (J-PAL)",
                    description: "over 300 million have been reached"
                },
                {
                    id: uuidv4(),
                    amount: "7,000",
                    symbol: "",
                    organisation: "Abdul Latif Jameel Hospital",
                    description: "had served more than 7000 patients in 2017"
                },
                {
                    id: uuidv4(),
                    amount: "180",
                    symbol: "",
                    organisation: "Abdul Latif Jameel Toyota Endowed Scholarship",
                    description: "we had helped 180 students from 27 countries to study at MIT since establishment"
                }
            ]
        }
    ]
};

export default AppData;