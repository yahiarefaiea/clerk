var Mock = {

  //  SESSION
  Session: null,

  //  SESSION: APPLICANT
  Session: {
    Permission: 'company',
    User: {
      Id: '515'
    }
  },

  //  SESSION: COMPANY
  Session: {
    Permission: 'company',
    User: {
      Id: '515'
    }
  },

  //  APPLICANT
  Applicant: {
    UserID: '1',
    FirstName: 'testname',
    SurName: 'testsur',
    Email: 'testname@gmail.com',
    Gender: 'male',
    DOB: {
      MM: 12,
      DD: 12,
      YYYY: 1990
    },
    PhoneNumber: '485985656',
    Address: 'sy',
    WebsiteURL: 'http://www.website1.com',
    Major: 'IT',
    Tagline: '6',
    ExperienceYears: '6',
    About: 'non',
    Education: 'Essay',
    Essay: 'Essay',
    Handedness: 'left',
    Power: 'non',
    Animal: 'non',
    Movies: 'non',
    Interests: 'non',
    TechnicalSkills: ['css', 'html'],
    Personality: {
      Type: 'INFJ',
      Meaning: '',
      Analysis: '',
      Strengths: [
        'css',
        'html'
      ],
      Weaknesses: [
        'css',
        'html'
      ]
    }
  },

  //  COMPANY
  Company: {
    CompanyID: '4',
    CompanyName: '444',
    Description: 'fddfsd',
    WebsiteURL: 'http://www.website1.com',
    PhoneNumber: '444444554',
    Email: 'test11@gmail.com',
    Address: 'kk',
    EmployeesNumber: '55',
    WhyClerk: 'no reason',
    OfferType: '$1500',

    //  VACANCIES
    Vacancies: [{
      CompanyID: '1',
      VacancyID: '1',
      Title: 'test',
      Description: 'good',
      StartDate: '2018-02-02',
      EndDate: '2018-11-14',
      ExperienceYears: '3',
      AdditionalInformation: 'non',
      PersonalityType: 'INJF',
      Major: 'CS',
      Applicants: [{

      }, {

      }, {

      }]
    }, {

    }, {

    }]
  }
}
