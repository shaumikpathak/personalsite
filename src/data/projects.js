// TODO Add a couple lines about each project
const data = [
  {
    title: 'Splits',
    subtitle: 'iOS Application',
    image1: '/images/projects/splits.png ',
    image2: '/images/projects/catdetector.jpg',
    image3: '',
    image4: '',
    link: 'https://github.com/shaumikpathak/iOSApplication',
    date: '2021-03-15',
    desc:
      'Splits is an app that conveniently splits a bill, receipt, or payment among two or more people. Scan your receipt to automatically import your receipt items, and receive a text with your split details! '
      + 'It uses OCR to scan your receipts and itemized each item and asign it a price.'
      + 'It uses firebase functions to successfully implement a payment gateway using Twilio API',
  },
  {
    title: 'Clustering Project',
    subtitle: '',
    link: 'https://github.com/shaumikpathak/ML_grocery',
    image1: '/images/projects/ML_gif.gif',
    image2: '',
    image3: '',
    image4: '',
    date: '2015-09-20',
    desc:
      'The goal for this project was to create a product that can help solve the problem small online retailers face when it comes to effective customer-centric marketing using the the data available. Data preparation (such as getting the RFM values), model tuning, and cluster analysis were the most time consuming and critical areas of work. A measure of success for this case study of unsupervised machine learning is the ability to make meaningful inferences of our data and to apply that knowledge to a final product. We were able to successfully implement market segmentation by processing and clustering the data into the right amount of clusters such that there were obvious segments of customer behaviors. Finally, we created a user friendly web interface that can give helpful marketing recommendations.',
  },
  {
    title: 'Lost and Found',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'https://github.com/shaumikpathak/lostandFound/',
    image1: '/images/projects/LostAndFound.gif',
    image2: '',
    image3: '',
    image4: '',
    date: '2020-06-15',
    desc:
      'This project helps UC Davis students and falculty to find the lost items in school or adding the found items in this web app '
      + 'Uses different Google APIs such as google oAuth for sign in functionlity for only UC Davis students and google maps API to help users enter the location where they found the lost objects.',
  },
  // {
  //   title: 'ADD STUFF ABOUT TRYGIT!!!!',
  //   subtitle: 'A convolutional neural network to classify cats! (and dogs)',
  //   image: '/images/projects/catdetector.jpg',
  //   date: '2015-05-15',
  //   desc:
  //     'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
  //     + 'Over 60,000 cats were classified before server bills made the project too expensive '
  //     + 'to continue hosting.',
  // },
];

export default data;
