var Mock = {

  //  SESSION: UNAUTHORIZED
  Session: null,

  //  SESSION: APPLICANT
  // Session: {
  //   Permission: 'applicant',
  //   UserID: '1'
  // },

  //  SESSION: COMPANY
  // Session: {
  //   Permission: 'company',
  //   UserID: '1'
  // },

  //  APPLICANT
  Applicant: {
    UserID: '1',
    FirstName: 'Yahia',
    SurName: 'Refaiea',
    Email: 'hello@yahiarefaiea.com',
    Gender: 'Male',
    DOB: {
      MM: 2,
      DD: 9,
      YYYY: 1997
    },
    PhoneNumber: '00963 12 3456 789',
    Address: 'Damascus, Syria',
    WebsiteURL: 'http://yahiarefaiea.com',
    Major: null,
    Tagline: 'Interaction Designer',
    ExperienceYears: 5,
    About: 'I’m Yahia Refaiea, an interaction web and mobile designer with three years of professional experience; working with many startups and companies on innovative projects. I dropped out high school five years ago pursuing entrepreneurship life and to find my passion. What I\'m trying to do is to help as many people as I can with the things I know; to make this world looks like a better place.',
    Education: 'Dropped out of high school',
    Essay: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    Handedness: 'Right',
    Power: 'Flying',
    Animal: 'A cat',
    Movies: 'Romance',
    Interests: 'Travelling',
    Skills: ['Communication', 'Leadership'],
    Personality: {
      Type: 'ESFJ',
      Meaning: 'Extraverted, Sensing, Feeling, and Judging',
      Analysis: 'Warmly interested in people. Creative and inspirational. Sensitive and complex. Dislike dealing with details and routine work. Excellent written communication skills. Prefer to work alone, and may have problems working on teams',
      Strengths: [
        'Put forth a lot of effort to fulfill their duties and obligations.',
        'Warm, friendly and affirming by nature.'
      ],
      Weaknesses: [
        'Service-oriented, they want to please others.',
        'Take their commitments very seriously, and seek lifelong relationships.'
      ]
    }
  },

  //  COMPANY
  Company: {
    CompanyID: '4',
    CompanyName: 'Musixmatch',
    Industry: 'Music',
    Description: 'Musixmatch is the world’s largest lyrics platform - where you can search, enjoy, and share lyrics from any track, anywhere in the world. Musixmatch was founded in 2010 with the mission to change the way people experience music and lyrics. Now, Musixmatch is a team which includes over 30 international and talented individuals working on a product reaching millions of music lovers. Help us build a product reaching millions of music lovers, we’re always on the lookout for talented people to join our unique team.',
    Email: 'hello@musixmatch.com',
    PhoneNumber: '00963 12 3456 789',
    Address: 'Damascus, Syria',
    WebsiteURL: 'http://musixmatch.com',
    EmployeesNumber: 5,
    WhyClerk: null,
    OfferType: null,

    //  VACANCIES
    Vacancies: [{
      CompanyID: '1',
      VacancyID: '1',
      Title: 'Senior Web Frontend Developer',
      Major: 'Computer Science',
      Description: 'Musixmatch is looking for an experienced front-end developer with a passion for shipping elegant, responsive interfaces that will be used by millions of people. You are an excellent team player, keen on new challenges in a start-up environment. Oh, and you love music, great food...and Bologna, Italy!',
      Hours: 'Full time',
      StartDate: {
        MM: 2,
        DD: 9,
        YYYY: 2018
      },
      EndDate: {
        MM: 8,
        DD: 13,
        YYYY: 2018
      },
      ExperienceYears: 5,
      Responsibilities: [
        'Write front-end code in HTML/CSS/Javascript.',
        'Work closely with, and incorporate feedback from, product management, interaction designers, and back-end engineers.'
      ],
      RequiredSkills: [
        'Rapidly fix bugs and solve problems.',
        'Pro-actively look for ways to make Musixmatch better.'
      ],
      AdditionalSkills: [
        'Write front-end code in HTML/CSS/Javascript.',
        'Work closely with, and incorporate feedback from, product management, interaction designers, and back-end engineers.'
      ],
      PersonalityType: 'ESFJ',
      Applicants: [{
        PositionExperience: 'Internship at Google',
        AdditionalInformation: null,
        PositionExperienceYears: 3,
        User: Mock.Applicant
      }]
    }]
  }
}