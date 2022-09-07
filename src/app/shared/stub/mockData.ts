import { ICOntactDetails } from './../interface/contactDetails.interface';
import { ITemplate } from './../interface/template.interface';
import { ICertificate } from './../interface/certificate.interface';
import { IProject } from './../interface/project.interface';
import { ISkill } from './../interface/skills.interface';
import { IPersonalDetails } from './../interface/personalDetails.interface';
import { IExperience } from './../interface/experience.interface';
import { IEducation } from '../interface/education.interface';

export const mockPersonalDetails: IPersonalDetails = {
  firstName: 'Onkar',
  lastName: 'Date',
  address: 'Onkar Date, B-7, Pratibha Residency, Sasane Nagar',
  areaOfExpertise: 'Front End Developer',
  aboutMe:
    'UI developer with 2.5 years of experience in web development.Skilled in designing, developing, and testing web-based applications, incorporating range of techniques like HTML, CSS, JavaScript.',
};

export const mockSKills: ISkill[] = [
  {
    name: 'Angular',
    rating: 5,
  },
  {
    name: 'Node.js',
    rating: 5,
  },
  {
    name: 'JavaSCript',
    rating: 4,
  },
  {
    name: 'Bootstrap',
    rating: 4,
  },
  {
    name: 'Python',
    rating: 3,
  },
  {
    name: 'MongoDB',
    rating: 3,
  },
];

export const mockEducation: IEducation[] = [
  {
    degree: 'Bachelor of Engineering (Computer Engineering)',
    batch: '2015 - 2019',
    university: 'Savitribai Phule Pune University',
  },
  {
    degree: '12th',
    batch: '2013 - 2015',
    university: 'Sir Parashurambhau College',
  },
  {
    degree: '10th',
    batch: '2011 - 2013',
    university: 'Sane Guruji Madhyamik Vidyalay',
  },
];
export const mockExperience: IExperience[] = [
  {
    companyName: 'Infosys Ltd.',
    designation: 'Systems Engineer',
    workedFrom: '09-06-2022',
    workedTill: new Date().toLocaleDateString(),
    description: [
      'Working on developing a CPQ (Configure Price Quote) application For Thyssenkrupp Elevators',
      'Using Angular 11 Created and displayed dynamic reactive forms by consuming data from API.',
      'Developed custom modules and components to achieve better user experience.',
      'Designed and created routable modals and components to achieve better user experience',
    ],
  },
  {
    companyName: 'Infosys Ltd.',
    designation: 'Systems Engineer',
    workedFrom: new Date().toLocaleDateString(),
    workedTill: new Date().toLocaleDateString(),
    description: [
      'Working on developing a CPQ (Configure Price Quote) application For Thyssenkrupp Elevators',
      'Using Angular 11 Created and displayed dynamic reactive forms by consuming data from API.',
      'Developed custom modules and components to achieve better user experience.',
      'Designed and created routable modals and components to achieve better user experience',
    ],
  },
];

export const mockProjects: IProject[] = [
  {
    title: 'Portfolio',
    description: 'My Portfolio',
    link: 'https://onkar-date.github.io/portfolio/home',
  },
  {
    title: 'My Laptop Replica',
    description:
      'Replica of my laptop created with Angular and bootstrap and little bit of JS',
    link: 'https://onkar-date.github.io/my-laptop/laptop',
  },
];

export const mockCertificates: ICertificate[] = [
  {
    title: 'Infosys Certified Angular Professional',
    yearOfCompletion: '2021',
  },
  {
    title: 'Infosys Certified Front End Web Developer',
    yearOfCompletion: '2020',
  },
  {
    title: 'Infosys Certified React Professional',
    yearOfCompletion: '2020',
  },
];

export const mockTemplate: ITemplate = {
  id: 'T101',
  name: 'Template 1',
};

export const mockContactDetails: ICOntactDetails = {
  mobile: '9922064217',
  email: 'onkar101197@gmail.com',
  linkedIn: 'adadadadada./adadad',
  address: 'Hadapsar, Pune 411028',
};
