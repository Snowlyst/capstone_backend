"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("company_profile_infos", [
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "DBS Bank",
        company_logo:
          "https://www.dbs.com.sg/o/corporate-theme/images/Logo.svg",
        description:
          "DBS Bank Limited, often known as DBS, is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.",
        address:
          "2 Marina Boulevard, DBS Asia Central, Marina Bay Financial Centre Tower 3, Singapore 018982",
        establishment_date: "16 July 1968",
        website_url: "https://www.dbs.com/default.page",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "OCBC Bank",
        company_logo:
          "https://www.ocbc.com/iwov-resources/sg/ocbc/gbc/img/logo_ocbc.png",
        description:
          "Oversea-Chinese Banking Corporation, Limited, often known as OCBC Bank, is a Singapore multinational banking and financial services corporation headquartered in OCBC Centre, Singapore.",
        address: "65 Chulia St, OCBC Centre, Singapore 049513",
        establishment_date: "31 October 1932",
        website_url: "https://www.ocbc.com/group/gateway?",
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
        address: "168 Robinson Road #30-01 Capital Tower  Singapore 068912",
        establishment_date: "28 November 2000",
        website_url: "https://www.capitaland.com/en.html",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Wilmar  International ",
        company_logo:
          "https://media.licdn.com/dms/image/C4E0BAQGQ9l_myxwduA/company-logo_200_200/0/1519891297293?e=2147483647&v=beta&t=xWFGSJpoEl2fpTTSiwwFfSBHH5feZ7no43Hnq3qwInE",
        description:
          "Wilmar International Limited is a Singaporean food processing and investment holding company with more than 300 subsidiary companies. Founded in 1991, it is one of Asia's leading agribusiness groups alongside the COFCO Group.",
        address: "28 Biopolis Road Singapore 138568.",
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
        address: "3 Media Cl, One-north, Singapore 138498",
        establishment_date: "1 June 2012",
        website_url: "https://www.grab.com/sg/",
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
        address:
          "1 Harbourfront Avenue, #02-01 Keppel Bay Tower, Singapore, 098632.",
        establishment_date: "1 September 1968",
        website_url: "https://www.kepcorp.com/en/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "ComfortDelGro",
        company_logo:
          "https://www.comfortdelgro.com/documents/119405/119411/112384/8bb27b95-375a-4686-27b0-f32a49f615b7?t=1590541307272",
        description:
          "ComfortDelGro Corporation is a multi-national land transport company listed on the Singapore Exchange, operating about 35,000 vehicles in seven countries. It was formed on 29 March 2003 through a merger of Singapore-based land transport companies Comfort Group and DelGro Corporation",
        address: "205 Braddell Road, Singapore 579701",
        establishment_date: "29 March 2003",
        website_url: "https://www.comfortdelgro.com/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Singapore Technologies Engineering",
        company_logo:
          "https://media.licdn.com/dms/image/C560BAQFKMUPbSAbqOw/company-logo_200_200/0/1519897051073?e=2147483647&v=beta&t=MxQmIaLahQqY4od_y-iFR7vJ602Rf41m6HeT_zWxH4o",
        description:
          "Singapore Technologies Engineering Ltd, doing business as ST Engineering, is a Singaporean multinational technology and engineering group in the aerospace, smart city as well as defence and public security sectors.",
        address:
          "1 Ang Mo Kio Electronics Park Road, No 07-01 Singapore, 567710",
        establishment_date: "27 January 1967",
        website_url: "https://www.stengg.com/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "City Developments Limited",
        company_logo:
          "https://www.worldcitiessummit.com.sg/qql/slot/u511/stye31052019/image/Sponsor/2019/CDL_2.png",
        description:
          "City Developments Limited (CDL) is a leading global real estate company with a network spanning 112 locations in 29 countries and regions. Listed on the Singapore Exchange, the Group is one of the largest companies by market capitalisation. Its income-stable and geographically-diverse portfolio comprises residences, offices, hotels, serviced apartments, shopping malls and integrated developments.",
        address: "9 Raffles Pl, #12-01 Republic Plaza, Singapore 048619",
        establishment_date: "7 September 1963",
        website_url: "https://cdl.com.sg/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Singtel",
        company_logo:
          "https://media.licdn.com/dms/image/C4D0BAQEmT3lq2KZDXw/company-logo_200_200/0/1519856511239?e=2147483647&v=beta&t=fMTWvMkHanM3yWhjn_LEU8HdFtnrBcCeTCOFu8mmQdY",
        description:
          "Singapore Telecommunications Limited, commonly known as Singtel, is a Singaporean telecommunications conglomerate and one of the four major telcos operating in the country.",
        address: "31 Exeter Road #18-00 Comcentre Singapore 239732",
        establishment_date: "1 January 1879",
        website_url: "https://www.singtel.com/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Grand Mercure Roxy Hotel",
        company_logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRsba9YoFx3G4Xjl2hrEVB7Pc7doMzaITOA&usqp=CAU",
        description:
          "Just 15 minutes away from Singapore’s Changi Airport and Marina Bay Cruise Centre, Grand Mercure Singapore Roxy lies in the heart of historical Katong – a heritage suburb in the East of the city. Rich in Peranakan influences, Katong comprises of a unique ethnic cluster that ensconces all of Singapore's Chinese, Malay, Indian and Eurasian cultures. Grand Mercure Singapore Roxy is close to everything that leisure and business travellers demand for an authentic and totally immersive Singapore travel experience.The hotel also serves as an excellent venue for holding your meetings, events and weddings with our function rooms, namely Roxy and the East Coast Ballroom. A Halal-certified kitchen is available.A short walk away is East Coast Park and the new Coastal PlayGrove– an ideal venue offering recreational facilities for families. Singapore's famous food centres are also just a stone’s throw away from the hotel. The surrounding attractions aside, Grand Mercure Singapore Roxy is a destination in itself. ",
        address: "50 East Coast Road, Marine Parade Rd, Roxy Square, 428769",
        establishment_date: "1 January 1997",
        website_url: "https://www.grandmercureroxy.com.sg/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "SINGAPORE HAI DI LAO DINING PTE. LTD.",
        company_logo:
          "https://www.haidilao-inc.com/sg/static/img/logo_en.d046b51a.svg",
        description:
          "The brand Haidilao was founded in 1994. With over 20 years of development, Haidilao International Holding Ltd. has become a world-renowned catering enterprise. By the end of June 30, 2020 ,Haidilao has opened 935 chain restaurants in China, Singapore, U.S., South Korea, Japan, Canada ,the United Kingdom, Malaysia , Vietnam,Indonesia and Australia.Over the years, Haidilao has withstood the challenges of the market as well as customers, and has successfully forged a quality hot pot brand which has earned a reputation for itself. Haidilao combines kinds of characteristics of hot pot in many places of China. As a large-scale chain catering enterprise with operations all over the world, Haidilao adheres to integrity in business. It gives the highest priority to continuously improving the quality and safety of its food products, providing more thoughtful services to its customers while delivering healthier, safer and more nutritious food.",
        address: "1 Paya Lebar Link #09-04 Paya Lebar Quarter Singapore 408533",
        establishment_date: "18 August 2018",
        website_url: "https://www.haidilao-inc.com/sg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "SATA CommHealth",
        company_logo:
          "https://www.sata.com.sg/wp-content/uploads/2019/12/cropped-SATA-CommHealth-Logo-4C-PNG-e1594639432813.png",
        description:
          "SATA Commhealth provides lifelong healthcare in the community, through preventive and primary care including mental wellness via our medical centres in Ang Mo Kio, Bedok, Jurong, Tampines, Potong Pasir and Woodlands and Community Hub at Sengkang as well as mobile medical services and Community Programmes",
        address:
          "351 Chai Chee Street SATA CommHealth Building Singapore 468982",
        establishment_date: "27 January 1967",
        website_url: "https://www.sata.com.sg/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "Designworx Interior Consultant",
        company_logo:
          "https://static.wixstatic.com/media/de7ac1_151119415983498f9fb4d9b32e501c7f~mv2.png/v1/fill/w_352,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Designworx%20Logo.png",
        description:
          "BEAUTIFUL SPACES are an inspiration to those beholding them. Designworx is a multiple award winning interior design company based in Singapore that has changed the way people perceive interiors. Led by Ms Terri Tan, in over two decades of its existence, it has left its mark on the interior spaces in Singapore combining modern design elements with functional sensibilities to create spaces that are inspiring, aesthetically pleasing yet practical. ",
        address:
          "237 Alexandra Road The Alexcier #03-15 / #06-10 Singapore 159929",
        establishment_date: "1 January 2003",
        website_url: "https://www.designworx.net/",
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
        address: "THE GRANDSTAND, 200 TURF CLUB ROAD, #07-02, Postal 287994",
        establishment_date: "20 October 2015",
        website_url: "https://studioif.net/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        approval_by_admin: true,
        company_name: "ANGLO-CHINESE SCHOOL (INDEPENDENT)",
        company_logo:
          "https://www.acsindep.moe.edu.sg/images/Homepage/acs(i)%20school%20crest_full%20colour.jpg",
        description:
          "A Methodist institution, ACS (Independent) has a strong foundation in spiritual values, a tradition of excellence and a global perspective. It was authorised as an International Baccalaureate (IB) World School in 2005 and is the pioneer national school to offer the IB Diploma Programme. Today the school offers two academic tracks: the four-year Express programme leading to the GCE O-Level Examinations, and the six-year Integrated Programme (IP) leading to the IB Diploma programme.",
        address: "121 Dover Road, Singapore 139650",
        establishment_date: "1 January 1988",
        website_url: "https://www.acsindep.moe.edu.sg/",
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
        address: "BLK 806 Hougang Central #03-144 Singapore 530806",
        establishment_date: "14 July 2014",
        website_url: "https://bowenchinesetuition.com/",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("company_profile_infos", null, {});
  },
};
