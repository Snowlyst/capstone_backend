"use strict";

const { urlencoded } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("company_profile_infos", [
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "DBS Bank",
        company_logo:
          "https://1000logos.net/wp-content/uploads/2020/04/Emblem-DBS-Bank.jpg",
        description:
          "DBS Bank Limited, often known as DBS, is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.",
        address:
          "2 Marina Boulevard, DBS Asia Central, Marina Bay Financial Centre Tower 3, Singapore",
        unit_number: null,
        postal_code: "018982",
        establishment_date: "16 July 1968",
        website_url: "https://www.dbs.com/default.page",
        banner_url:
          "https://image-service-cdn.seek.com.au/35fb3ac35f4eedb8a28048f238bf0f94d170ee49/a868bcb8fbb284f4e8301904535744d488ea93c1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "OCBC Bank",
        company_logo:
          "https://companieslogo.com/img/orig/O39.SI-d00b23e8.png?t=1648146507",
        description:
          "Oversea-Chinese Banking Corporation, Limited, often known as OCBC Bank, is a Singapore multinational banking and financial services corporation headquartered in OCBC Centre, Singapore.",
        address: "65 Chulia St, OCBC Centre, Singapore",
        unit_number: null,
        postal_code: "049513",
        establishment_date: "31 October 1932",
        website_url: "https://www.ocbc.com/group/gateway?",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Capitaland",
        company_logo:
          "https://www.capitaland.com/content/dam/capitaland-common/logos/CapitaLand_logo.jpg",
        description:
          "CapitaLand is a Singaporean headquartered company focusing on investment, development and management of real estate.",
        address: "168 Robinson Road Capital Tower Singapore",
        unit_number: "#30-01",
        postal_code: "068912",
        establishment_date: "28 November 2000",
        website_url: "https://www.capitaland.com/en.html",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Wilmar International ",
        company_logo:
          "https://media.licdn.com/dms/image/C4E0BAQGQ9l_myxwduA/company-logo_200_200/0/1519891297293?e=2147483647&v=beta&t=xWFGSJpoEl2fpTTSiwwFfSBHH5feZ7no43Hnq3qwInE",
        description:
          "Wilmar International Limited is a Singaporean food processing and investment holding company with more than 300 subsidiary companies. Founded in 1991, it is one of Asia's leading agribusiness groups alongside the COFCO Group.",
        address: "28 Biopolis Road Singapore",
        unit_number: null,
        postal_code: "138568",
        banner_url: null,
        establishment_date: "1 April 1991",
        website_url: "https://www.wilmar-international.com/",

        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Grab",
        company_logo:
          "https://assets.grab.com/wp-content/uploads/sites/4/2021/04/15151634/Grab_Logo_2021.jpg",
        description:
          "Grab Holdings Inc. is a multinational technology company headquartered in One-north, Singapore. It is the developer of a super-app for transportation, food delivery and digital payments services on mobile devices that operates in Singapore, Malaysia, Cambodia, Indonesia, Myanmar, the Philippines, Thailand and Vietnam.",
        address: "3 Media Cl, One-north, Singapore",
        unit_number: null,
        postal_code: "138498",
        establishment_date: "1 June 2012",
        website_url: "https://www.grab.com/sg/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Keppel Corporation",
        company_logo:
          "https://3.bp.blogspot.com/-yMfE7aWARUI/WEgd-znNneI/AAAAAAAAHsE/5t2c0xh5kj0sypIz1GgLTI11yVkHvo13QCLcB/s1600/Keppel%2BCorporation.png",
        description:
          "Keppel Corporation is a Singaporean conglomerate headquartered in Keppel Bay Tower, HarbourFront. The company consists of several affiliated businesses that specialises in property, infrastructure and asset management businesses.",
        address: "1 Harbourfront Avenue, Keppel Bay Tower, Singapore",
        unit_number: "#02-01",
        postal_code: "098632",
        establishment_date: "1 September 1968",
        website_url: "https://www.kepcorp.com/en/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "ComfortDelGro",
        company_logo:
          "https://seekvectorlogo.com/wp-content/uploads/2018/04/comfortdelgro-vector-logo-small.png",
        description:
          "ComfortDelGro Corporation is a multi-national land transport company listed on the Singapore Exchange, operating about 35,000 vehicles in seven countries. It was formed on 29 March 2003 through a merger of Singapore-based land transport companies Comfort Group and DelGro Corporation",
        address: "205 Braddell Road, Singapore",
        unit_number: null,
        postal_code: "579701",
        establishment_date: "29 March 2003",
        website_url: "https://www.comfortdelgro.com/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Singapore Technologies Engineering",
        company_logo:
          "https://www.logotypes101.com/logos/205/96BA752BA3BE7A1B2FFFFE1666070BCB/Singapore_Technologies.png",
        description:
          "Singapore Technologies Engineering Ltd, doing business as ST Engineering, is a Singaporean multinational technology and engineering group in the aerospace, smart city as well as defence and public security sectors.",
        address: "1 Ang Mo Kio Electronics Park Road, Singapore",
        unit_number: "#07-01",
        postal_code: "567710",
        establishment_date: "27 January 1967",
        website_url: "https://www.stengg.com/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "City Developments Limited",
        company_logo:
          "https://companieslogo.com/img/orig/C09.SI-9635a1e3.png?t=1594124414",
        description:
          "City Developments Limited (CDL) is a leading global real estate company with a network spanning 112 locations in 29 countries and regions. Listed on the Singapore Exchange, the Group is one of the largest companies by market capitalisation. Its income-stable and geographically-diverse portfolio comprises residences, offices, hotels, serviced apartments, shopping malls and integrated developments.",
        address: "9 Raffles Pl, Republic Plaza, Singapore",
        unit_number: "#12-01",
        postal_code: "048619",
        establishment_date: "7 September 1963",
        website_url: "https://cdl.com.sg/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Singtel",
        company_logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Singtel_Logo_New.png/449px-Singtel_Logo_New.png",
        description:
          "Singapore Telecommunications Limited, commonly known as Singtel, is a Singaporean telecommunications conglomerate and one of the four major telcos operating in the country.",
        address: "31 Exeter Road, Comcentre Singapore",
        unit_number: "#18-00",
        postal_code: "239732",
        establishment_date: "1 January 1879",
        website_url: "https://www.singtel.com/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Grand Mercure Roxy Hotel",
        company_logo:
          "https://seekvectorlogo.com/wp-content/uploads/2018/01/grand-mercure-hotels-and-resorts-vector-logo-small.png",
        description:
          "Just 15 minutes away from Singapore’s Changi Airport and Marina Bay Cruise Centre, Grand Mercure Singapore Roxy lies in the heart of historical Katong – a heritage suburb in the East of the city. Rich in Peranakan influences, Katong comprises of a unique ethnic cluster that ensconces all of Singapore's Chinese, Malay, Indian and Eurasian cultures. Grand Mercure Singapore Roxy is close to everything that leisure and business travellers demand for an authentic and totally immersive Singapore travel experience.The hotel also serves as an excellent venue for holding your meetings, events and weddings with our function rooms, namely Roxy and the East Coast Ballroom. A Halal-certified kitchen is available.A short walk away is East Coast Park and the new Coastal PlayGrove– an ideal venue offering recreational facilities for families. Singapore's famous food centres are also just a stone’s throw away from the hotel. The surrounding attractions aside, Grand Mercure Singapore Roxy is a destination in itself. ",
        address: "50 East Coast Road, Marine Parade Rd, Roxy Square",
        unit_number: null,
        postal_code: "428769",
        establishment_date: "1 January 1997",
        website_url: "https://www.grandmercureroxy.com.sg/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "SINGAPORE HAI DI LAO DINING PTE. LTD.",
        company_logo:
          "https://theladiescue.com/wp-content/uploads/2019/09/HDL-Logo.jpg",
        description:
          "The brand Haidilao was founded in 1994. With over 20 years of development, Haidilao International Holding Ltd. has become a world-renowned catering enterprise. By the end of June 30, 2020 ,Haidilao has opened 935 chain restaurants in China, Singapore, U.S., South Korea, Japan, Canada ,the United Kingdom, Malaysia , Vietnam,Indonesia and Australia.Over the years, Haidilao has withstood the challenges of the market as well as customers, and has successfully forged a quality hot pot brand which has earned a reputation for itself. Haidilao combines kinds of characteristics of hot pot in many places of China. As a large-scale chain catering enterprise with operations all over the world, Haidilao adheres to integrity in business. It gives the highest priority to continuously improving the quality and safety of its food products, providing more thoughtful services to its customers while delivering healthier, safer and more nutritious food.",
        address: "1 Paya Lebar Link Paya Lebar Quarter Singapore",
        unit_number: "#09-04",
        postal_code: "408533",
        establishment_date: "18 August 2018",
        website_url: "https://www.haidilao-inc.com/sg",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "SATA CommHealth",
        company_logo:
          "https://media.glassdoor.com/sql/491863/sata-squarelogo-1639049358899.png",
        description:
          "SATA Commhealth provides lifelong healthcare in the community, through preventive and primary care including mental wellness via our medical centres in Ang Mo Kio, Bedok, Jurong, Tampines, Potong Pasir and Woodlands and Community Hub at Sengkang as well as mobile medical services and Community Programmes",
        address: "351 Chai Chee Street SATA CommHealth Building Singapore",
        unit_number: null,
        postal_code: "468982",
        establishment_date: "27 January 1967",
        website_url: "https://www.sata.com.sg/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Designworx Interior Consultant",
        company_logo:
          "https://static.wixstatic.com/media/de7ac1_30c621956e164b87b045d88f5e2acd37~mv2.jpg/v1/fit/w_2500,h_1330,al_c/de7ac1_30c621956e164b87b045d88f5e2acd37~mv2.jpg",
        description:
          "BEAUTIFUL SPACES are an inspiration to those beholding them. Designworx is a multiple award winning interior design company based in Singapore that has changed the way people perceive interiors. Led by Ms Terri Tan, in over two decades of its existence, it has left its mark on the interior spaces in Singapore combining modern design elements with functional sensibilities to create spaces that are inspiring, aesthetically pleasing yet practical. ",
        address: "237 Alexandra Road The Alexcier Singapore",
        unit_number: "#03-15/06-10",
        postal_code: "159929",
        establishment_date: "1 January 2003",
        website_url: "https://www.designworx.net/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "STUDIO IF PTE. LTD.",
        company_logo:
          "https://static1.squarespace.com/static/60766b71805c074d1db86d35/t/645872bbd3f01d20c8037764/1688971096688/",
        description:
          "Studio iF seeks to turn ordinary narratives into objects and spaces of meaningful beauty that are made for living. Gwen designs questions, even questions that clients might not know or consider asking. She always asks, “what if?”, and in the process, designs possibilities to reframe luxury in her client’s terms. ",
        address: "THE GRANDSTAND, 200 TURF CLUB ROAD",
        unit_number: "#07-02",
        postal_code: "287994",
        establishment_date: "20 October 2015",
        website_url: "https://studioif.net/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "ANGLO-CHINESE SCHOOL (INDEPENDENT)",
        company_logo:
          "https://www.acsindep.moe.edu.sg/images/About%20ACS(I)/Heritage/Crest-2021.png",
        description:
          "A Methodist institution, ACS (Independent) has a strong foundation in spiritual values, a tradition of excellence and a global perspective. It was authorised as an International Baccalaureate (IB) World School in 2005 and is the pioneer national school to offer the IB Diploma Programme. Today the school offers two academic tracks: the four-year Express programme leading to the GCE O-Level Examinations, and the six-year Integrated Programme (IP) leading to the IB Diploma programme.",
        address: "121 Dover Road, Singapore",
        unit_number: null,
        postal_code: "139650",
        establishment_date: "1 January 1988",
        website_url: "https://www.acsindep.moe.edu.sg/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "BOWEN EDUCATION CENTRE PTE. LTD.",
        company_logo: "null",
        description:
          "Bowen Education Centre is a professional Chinese Tuition Centre in Singapore. The classes are  taught according to the syllabus  offered by the Ministry of Education for Chinese as a second language as well as higher Chinese. We offer individual as well as group tuition for both online and offline.",
        address: "BLK 806 Hougang Central Singapore",
        unit_number: "#03-144",
        postal_code: "530806",
        establishment_date: "14 July 2014",
        website_url: "https://bowenchinesetuition.com/",
        banner_url: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("company_profile_infos", null, {});
  },
};
