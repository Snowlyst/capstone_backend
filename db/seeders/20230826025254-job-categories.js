"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("job_categories", [
      {
        name: "Accountancy",
        description:
          "If you have a knack for numbers, you might want to consider a career in Accountancy. Accountancy professionals are essential to the success of any business and are often being sought after as key players in any business set-up. They are the financial backbone of a company, and more than just crunching numbers, accountancy professionals help companies determine and achieve business goals, prepare financial records, and improve business efficiency by making recommendations on best practices. Singapore's global reputation as a trusted hub for business and finance is underpinned by our robust regulatory and corporate governance framework. This is credited to the quality of our accountancy practices and financial reporting standards. There are over 55,000 accountancy professionals in Singapore. Close to 18,000 work across 689 accounting firms, and by 2020, it is expected that these firms will employ over 22,000 accountancy professionals. In 2015, accounting firms generated more than $2.06 billion in annual revenue. A public accountant has to be registered before being appointed as an auditor of financial statements in Singapore and responsible for audit opinions. He/She also needs to ensure that the audit is conducted in accordance with the Singapore Standards on Auditing (SSA). All professionally qualified accountants are chartered accountants (CAs). With knowledge and professionalism, chartered accountants add value to a variety of businesses from healthcare to education, government to technology, audit and assurance to financial services. Advice given in key financial areas have also shaped the future of businesses.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Aerospace",
        description:
          "Many dream and aspire to work for the world's top international airports or airlines. Working in Singapore's Aerospace industry, you get to live that dream. We are widely recognised as a global air hub, with Changi Airport and Singapore Airlines renowned internationally for many years. Singapore has achieved a strong reputation as a global air hub. With over 450 accolades, Changi Airport is recognised as one of the world's best international airports. Singapore Airlines is also one of the top airlines in the world. Building on our strengths as an air hub, Singapore has developed a leading Aerospace industry that includes maintenance, repair and overhaul (MRO), manufacturing and other aerospace-related services. In 2013, our industry achieved a record output of over $8.7 billion, and employed over 19,800 employees Today, there are over 130 aerospace companies in Singapore. We have nose-to-tail capabilities that include airframe maintenance, engine overhaul, structural and avionics systems repair, as well as aircraft modifications and conversions. These core competencies, coupled with our commitment to quality and safety, have made Singapore a recognised one-stop solutions provider for airlines' maintenance and repair needs.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Air Transport",
        description:
          "The Air Transport industry is a crucial enabler of Singapore's economy. Singapore boasts one of the world's most awarded airports, a coveted air safety record, a respected centre for Air Transport training and a robust industry overall. Employing about 35,000 people, the Air Transport industry contributed 1.5 per cent to Singapore's Gross Domestic Product (GDP) in 2015. It is a significant contributor to Singapore's economy and directly supports critical sectors such as manufacturing, logistics, tourism, finance and professional services. The industry is continually evolving as new trends and technologies shape an ever-changing and exciting landscape.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Arts, Entertainment and Recreation ",
        description:
          "The Arts are an expression of our shared identity as a nation which not only inspire people but also connect our communities by creating shared experiences. Singapore's vibrant arts scene is home to a diverse range of artists and arts groups that are well-regarded both locally and overseas. Since independence, local artists have created a collection of quality works ranging from the classical and traditional, to the modern and contemporary, which is deeply reflective of Singapore's multiracial and multicultural society. Singapore Arts is an expression of the shared identity of her citizens, specifically her people, her geography, lifestyle of her citizens and their travelling behaviours. Singapore is also the cultural melting pot of Southeast Asia and the gateway to arts of the region. Through a diversity of genres - theatre, dance, music, traditional arts, visual arts, and literary arts - the world engages Singapore through her history, crafts and ideas.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Biopharmaceuticals Manufacturing",
        description:
          "Maybe you love to be at the forefront of research and dream of being the clinician scientist who discovers the cure for cancer. Or you adopt a more down-to-earth approach, yearning to be at the heart of the manufacturing floor, seeing to the production of drugs that improve people's lives. In Singapore, the world of biotechnology beckons. More than 30 of the world's leading biomedical sciences companies are leveraging on Singapore as a key home base to drive innovation, growing the nation's biotechnology and pharmaceutical industry by more than 30 per cent in 2011. New therapies and technologies are constantly made available by clinical research engaged by our hospitals and national speciality centres, in collaboration with some of the world's top medical institutes, pharmaceutical and medical technology firms. In addition, world-class scientific research fostered by the Agency for Science, Technology and Research (A*STAR) and its biomedical research institutes are discovering important leads to new therapies that benefit patients.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Beauty Services",
        description:
          "Wellness is an active process in living a healthy and fulfilling life. The Beauty Services industry includes businesses that support quality of life through enhancement of physical, mental and social well-being. Businesses in the industry include Spa and Wellness, Beauty, Hair & Nail Salons, Fitness and Complementary Therapy Centres and associated Holistic Care & Services. Other than the big operators which operate a chain of outlets, many of them have small-scale operations in shopping malls and housing estates with a modest workforce of 5 to 10 employees.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Built Environment",
        description:
          "You are fascinated by the buildings and infrastructure around you. They provide a setting for you to live, work and play. You wonder who designed, built and now maintain them. Join the Built Environment (BE) industry and play a part in building Singapore's future. BE describes the design, construction and management of man-made structures and infrastructure that provide the setting for a community's activities. In Singapore, the industry is fast-paced and set for greater growth in the future. BE professionals respond to what people and communities want and need from structures by constructing a built environment that is safe, high quality, sustainable and friendly. These are the four pillars of excellence that the Building & Construction Authority (BCA) upholds. While Singapore builds further on as a distinctive global city, the aim of the BE industry is to provide innovative and inclusive living environments that contribute to a higher quality of life for the citizens of Singapore. Interested to find out more about the Built Environment (BE) industry but don’t know where to start? Click here to embark on a discovery journey through the iBuildSG Club. The iBuildSG Club is a club for full time students from secondary school, junior college, Institute of Education (ITE), Polytechnic and University who are curious about Singapore’s BE. You will learn more about BE industry through exciting and engaging activities such as learning journeys, workshops, competitions and more! These activities will bring you through how we build smarter, more efficiently and greener through advance technologies. You will also learn about the exciting careers that made these possible. Be aware of our transformation efforts in Singapore and play a part in our nation building!",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Design",
        description:
          "As Singapore's economy matures in a competitive global market for products and services, Design carries a crucial competitive advantage, as industries and businesses look to innovation to drive growth in the future economy. To grow the Design industry and expand the role of design in Singapore, the Design 2025 masterplan was developed, an effort supported by the DesignSingapore Council and the Economic Development Board. Design 2025 recommended five broad strategic thrusts: (1) Nurturing Design as a national competency to enrich our young with design sensibilities, and building multi-disciplinary design talent. (2) Promoting the adoption of Design in businesses and in the public sector. (3) Growing the Design industry through enhancing designers' and design firms' capabilities, and to support them in their creation of innovative products and brands. (4) Bringing Design closer to our people and communities. (5) Strengthening the Singapore Design brand locally and globally.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Early Childhood Care and Education ",
        description:
          "'The first five years have so much to do with how the next 80 turn out.' - Bill Gates. It is an exciting time to join the vibrant and dynamic Early Childhood Care and Education profession. Quality Early Childhood Education has a strong positive impact on adult outcomes such as educational attainment, future earnings, health and socio-emotional development. These outcomes are strongly influenced by the experiences that young children have in their interactions with other people and with their environment. The Early Childhood Care and Education (ECCE) industry comprises Early Childhood Development Centres, such as child care centres and kindergartens. Both offer early childhood development programmes tailored to needs of children of various ages. These include learning activities that develop language and literacy, numeracy, social and emotional skills, inquiry and problem-solving skills, motor skills, as well as aesthetics and creative expression.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Electronic",
        description:
          "The marvels of electronics are around us everywhere, perhaps more than we realised. From the mobile phone and the laptop that we use each day, to the light controls in a modern building and the navigation system in our cars - we probably would not be able to function effectively in the present digital age, and in the future, without the exploitation of electronics. Even more amazing, many of the components are now designed and/or manufactured in Singapore. Electronics is the bedrock of Singapore's Manufacturing sector, contributing to 4.4 per cent of the country's Gross Domestic Product (GDP) in 2016. From its modest beginning as the only TV assembly plant in Southeast Asia in the 1960s, Singapore's Electronics industry has grown to become a vital node in the global electronics market today. Singapore's Electronics industry is a world-class, innovation-driven hub that provides technology, manufacturing, and business solutions to enable the development of new growth areas. Today, Singapore accounts for one in 10 wafer starts in the world, and 40 per cent of the global hard disc media are manufactured here. Electronics is the major industry underpinning Singapore's economic growth, and it contributed 29 per cent of the total manufacturing value-add in 2013. The industry attracted over $2.2 billion in Fixed Asset Investments (FAI) in 2016. In addition, manufacturing of finished electronics products creates many spin-offs to other segments of the economy, such as precision component manufacturers, chemicals and materials suppliers, electronic manufacturing systems companies, and logistics service providers.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Energy and Chemicals",
        description:
          "Have you ever wondered how hair shampoos and conditioners give our hair the texture and feel we want, or how cosmetics can retain their properties for months or even years? Maybe you are fascinated by the possibilities of chemistry and want to be part of the company that contributes towards such efforts. Or perhaps, you are drawn to the fast-paced, vibrant, innovative and lucrative aspects of the Chemical industry. As one of the world's leading Energy and Chemical industry hubs, our contribution to the industry is significant, both in terms of output and research. With the government looking to widen our scope of capabilities in the industry by developing innovative solutions that enhance our refining, trading and logistics activities, there's never been a more exciting time to join the Energy and Chemical industry.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Energy and Power",
        description:
          "The Energy and Power industry is crucial in sustaining the nation's economic growth and survival, and supporting critical infrastructure such as transportation, utilities and buildings. The industry is expected to grow significantly over the next 10 years to meet the nation's increasing demand for energy. With technological advancements, there is hence a greater need for our workforce to equip itself with latest technical skillsets to contribute to our economy effectively.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Environmental Services",
        description:
          "The clean streets and homes we enjoy every day come as a result of a thriving Environmental Services industry. More than 70,000 cleaning and waste management professionals work tirelessly all year round behind the scene to provide the essential services that earn Singapore its clean and green reputation and its international stature as a City in a Garden. The Environmental Services industry provides both general and specialised cleaning services, with general cleaning (commercial premises, food & beverages establishments and conservancy areas) making up majority of the services in the industry. Since 2010, National Environment Agency (NEA) has been working with various government agencies, industry partners and the union to raise the standards, professionalism and productivity of the Environmental Services industry. The industry's tripartite partners include the Ministry of Manpower (MOM), Ministry of Finance (MOF), Workforce Singapore (WSG), NTUC's Employment and Employability Institute (e2i), U Care Centre (UCC), Environmental Management Association of Singapore (EMAS), Singapore National Employers Federation (SNEF), and the Building, Construction and Timber Industries Employees' Union (BATU).",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Finance",
        description:
          "You make financial decisions every day, be it saving, spending, making investments or borrowing. While financial products for investments, insurance and loans may be familiar to you, there are so much that the Finance industry can offer in terms of career opportunities that you may wish to be familiar with! As an international financial centre, Singapore offers financial institutions a pro-business environment that is cost-competitive, with an effective regulatory environment, excellent infrastructure and a highly skilled and cosmopolitan pool of finance professionals. Singapore is also strategically located in a region of opportunities. With over 200 banks present in Singapore, a growing number of international institutions have chosen to base their operational headquarters here to service their regional group activities. With a total asset size of approximately $2.7 trillion as of December 2013, the Banking industry has been critical to Singapore's role in financing local and regional growth. Some examples include facilitating in trade, corporate finance and the building of infrastructure.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Food Manufacturing",
        description:
          "Under the innovative Food Manufacturing Industry Transformation Map (ITM), Singapore aims to become a leading food and nutrition hub in Asia by 2020. The ITM comprises enterprising food companies with a global presence, thriving research and development (R&D) community, and innovative products in line with consumer demand. Food manufacturers are introducing our food heritage abroad with local food products found around the region and beyond. Our stellar reputation for service quality and product safety also gives consumers, at home and abroad, a greater assurance in our food products.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Food Services",
        description:
          "Ask anyone on the street what Singapore is best known for and food will undoubtedly come up tops. From basic sustenance to gourmet dining, Singapore's Food Services industry offers an eclectic blend of flavours that reflects our rich multi-cultural heritage which earns us global acclaimed as a food paradise. The Food Services industry in Singapore contributes 0.8 per cent to the national Gross Domestic Product (GDP) and comprises 4.5 per cent of the nation's workforce. The Food Services industry is a highly competitive market. This industry is a highly competitive one, with more than 7,200 establishments in five sub-industries, such as restaurants, fast food, cafes, coffee shops, pubs and food caterers. Food and Beverage (F&B) operators and employees need to multi-task in a fast-paced environment to ensure food quality and customer service are not compromised despite manpower shortages. By leveraging technology and redesigning their workflow, operators can implement new concepts and productive business formats to boost efficiency and enhance customers' dining experiences.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Healthcare",
        description:
          "Singapore's healthcare system is well regarded internationally, enabled by excellent health services, quality infrastructure and sound policies. Most of all, the heart of what drives Healthcare is a motivated workforce that serves patients and their families with dedication and passion. With a growing ageing population that will require more health and community care services, there are many job opportunities in diverse areas, from clinical roles like nurses and therapists, to non-clinical positions like centre managers and operations executives. By joining the Healthcare industry, you will be part of a growing family working with others to make a positive difference in the lives of people.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Hotel and Accomodation Services",
        description:
          "The Hotel business is all about people. It's about creating positive experiences, making a difference and bringing joy to others. The tourism sector currently contributes 4 per cent to Singapore's gross domestic product (GDP) and supports some 160,000 jobs. Tourism plays an essential role in reinforcing Singapore's status as a vibrant global city that is a magnet for capital, businesses and talent. It also enhances the quality and diversity of leisure options for local residents and helps to create a living environment that Singaporeans can be proud to call home. Hotels, one of the industries in the tourism sector, supports Singapore's position as a business hub and promotes growth in related industries such as Retail and Food and Beverage (F&B). With the provision 63,000 rooms, the hotel landscape in Singapore is characterised by a myriad of diverse hospitality selections and is supported by close to 33,000 individuals within the industry.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Human Resource",
        description:
          "As new technology influences how businesses function and the way people work, organisations are able to take advantage of opportunities by investing in the development of their employees. To ensure continued growth, our businesses and workforce have to adapt quickly to changes. Human Resource (HR) professionals help organisations attract, develop and retain talent. They also ensure that the workforce remains relevant and adaptive to change. In the wider HR eco-system, various stakeholders (e.g. training providers, HR shared services providers and consultancies, think tanks, HR bodies) help support HR professionals in their work and professional development.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Information and Communications Technology",
        description:
          "In the digital economy, digital transformation is necessary for companies to tap into any opportunities to enhance their operations. To unlock the opportunities that technology and digitalisation can bring to all types of companies, the Infocomm Media (ICM) industry has to play a dual role to transform itself and improve productivity and growth for other industries. As the ICM industry continues to grow and move towards a new era, companies will need to use frontier technologies to thrive in the future economy. The four key frontier technology capabilities that Singapore will be developing are: (1) Cyber Security (2) Internet-of-Things (3) Immersive Media (4) Artificial Intelligence and Data Science.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Insurance",
        description:
          "Singapore has established itself, within Asia, as an important insurance hub. Besides the locally-owned companies, a large number of major international insurers and reinsurers are based in Singapore. Together, they provide a full range of insurance services to meet the needs of the domestic market. Numerous reinsurers and captive insurers also use Singapore as a base to manage risks from the region. Offshore insurance business has become a major driver of industry growth, accounting for more than half of the total general insurance business written. Today, Singapore is home to a rich mix of direct insurers, reinsurers and captive insurers. A strong network of insurance intermediaries and ancillary service providers has also emerged. Many of the world's leading names in insurance broking, captive management and risk management have local presence.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Landscape",
        description:
          "In 2012, the Landscape industry market size was $480 mil, with $391 mil and $88.3 mil from the Landscape Maintenance and Implementation sub-sectors respectively. With regard to Landscape Maintenance, $19.6 mil (4 per cent of total landscape industry market) was for rental and purchase of potted plants. Pertaining to Landscape Implementation, $8.8 mil (2 per cent of landscape industry market) was for landscape architecture and design work. To date, more than 50 companies have been supported under the Landscape Productivity Grant, which was introduced in 2013 to support contractors' efforts to mechanise their operational processes. To further raise the profile of the industry, the Tripartite Cluster for Landscape Industry announced the Progressive Wage Model (PWM) for the Landscape Maintenance sector in April 2015. The PWM will enable local maintenance workers to achieve sustainable real wage increase through skills upgrading and productivity improvements.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Legal",
        description:
          "The Singapore legal system is a rich tapestry of laws, institutions, values, history and culture, all bounded by a unique national identity. In the face of rapid changes that come about from increased globalisation, Singapore has to respond swiftly in creating new laws and institutions, or adapt existing ones. The many areas of the Legal industry assist people in different pockets of society. For example, corporate and commercial lawyers serve business owners and companies of every shape and size by helping them navigate regulations, document transactions, and resolve disputes. Other lawyers serve individuals, including vulnerable groups such as children, victims of abuse, the disabled and those with mental health issues. Criminal lawyers advocate for the accused and ensure fairness in our criminal justice system.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Logistics",
        description:
          "Whether goods are produced and services are delivered successfully, depends critically on the Logistics industry. A missing component will cause a product to malfunction and a mistake in the logistics process can prevent an item from reaching its final destination. It is about orchestrating a multitude of parts and people to work together coherently, to ensure the whole process functions smoothly. In this regard, Singapore excels - with its reputation as a global Supply Chain hub with many world-class service providers and talent. The World Bank ranked Singapore as the No. 5 Logistics Hub in Asia in the 2016 Logistics Performance Index. Singapore's strategic location in the heart of Southeast Asia and at the nexus of major shipping lanes has made it an important logistics hub and conduit for world trade. Today, Singapore is a prime location for major logistics firms, with 20 of the top 25 global logistics players conducting operations here. Most of them, have set up regional or global headquarter functions in Singapore. With an expansive base of leading global logistics players, world-class infrastructure and excellent global connectivity, Singapore is the preferred logistics and supply chain management hub for leading manufacturers across industries. Singapore's Changi Airport is one of Asia's largest cargo airports and is served by over 6,500 weekly flights connecting to 280 cities in 60 countries, handling close to 2 million tonnes of cargo annually. Singapore is connected by 200 shipping lines to 600 ports in 123 countries, with daily sailings to every major port of call in the world. It is also proximate to the world's major markets, being situated within a seven-hour flight radius to half of the world's population in Asia Pacific. Singapore has stood out as a leading supply chain hub with the presence of world-class service providers and talent equipped with the knowledge of accessing the diverse geographies in Asia.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Marine and Offshore Engineering",
        description:
          "Travel to the Gulf of Mexico or the North Sea and you may be surprised to find that the offshore jack-up oil rig extracting oil and gas is actually made in Singapore! Today, Singapore is the largest manufacturer of jack-up rigs, and commands 70 per cent of the world market. It also has 70 per cent of the global market for the conversion of Floating Production Storage Offloading units. Well-trained manpower is a key ingredient for the growth of the technology-heavy Marine and Offshore Engineering Industry. Singapore's Marine and Offshore Engineering Industry goes all the way back to 1963, and has since built up a pool of skilled and experienced Marine professionals. To meet future demand for energy, offshore deep-water along with unconventional offshore oil and gas exploration and production activities will increase, to address the shortfall in conventional onshore oil and gas resources worldwide.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Media",
        description:
          "The Media industry in Singapore has seen rapid development in the past five years, enabling the production of quality content in the areas of animation, broadcast, film, games, interactive media and publishing. From world-regarded films to cutting-edge 3D games, media companies in Singapore have produced some of the most interesting new content amongst others. Local companies worked with overseas partners to develop original content and also have licensed their content overseas. Meanwhile, big international names have also settled in Singapore, bringing in globally-renowned expertise to the country.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Public Service (Education)",
        description:
          "Singapore's education system aims to bring out the best in every child by enabling students to discover their talents, realise their full potential, and develop a passion for life-long learning. We seek to nurture the whole child, and help them develop an enduring core of competencies, values and character, to ensure that they have the capabilities and dispositions to thrive in the 21st century. Our multiple educational pathways cater to students with different strengths, interests and learning styles, developing each child to his/her full potential. Our schools provide a rich diversity of learning experiences for our students. On top of building a strong foundation in literacy and numeracy, we also cater to their educational needs in physical, aesthetic, moral, social and emotional aspects and develop them holistically. Besides the academic curriculum, our students can develop their interest and talent in music, arts and sports through co-curricular programmes and outdoor education. These activities also give them opportunities to hone their leadership skills as well as social and emotional competencies. All these learning experiences help cultivate in our students qualities such as creativity, confidence and compassion - life skills essential in a rapidly changing world. They also gain values such as respect, responsibility, resilience, integrity, care and harmony, all of which are important for a cohesive multi-racial and multi-cultural society.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Public Transport",
        description:
          "The Public Transport industry touches the lives of millions of commuters every day as they travel for work, studies and leisure. The industry uses the latest cutting-edge technologies to assess our transport systems, and develop projects in both the bus and rail sectors to bring greater convenience to Singaporeans.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Retail",
        description:
          "From the supermarkets where we get our daily necessities to the boutiques that offer established fashion labels, retail is a big part of our daily lives. That Singaporeans love to shop attests to the importance role the industry plays, in influencing our lifestyles and the environment. Singapore's cosmopolitan retail industry shapes the environment in which Singaporeans live, work and play. In 2015, the Retail industry generated $35 billion in operating receipts. According to a study by CB Richard Ellis, Singapore is among the world's top 20 cities to have a significant proportion of international retailers in their retail industries. Besides the many international brand names that have established their presence locally, Singapore also boasts a plethora of local brands and product offerings.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Sea Transport",
        description:
          "The Sea Transport industry is the most important component of the entire maritime cluster. This industry comprises the port, shipping and maritime services sub-sectors. Over the past decade, Singapore's Sea Transport industry has grown to become one of the world's top players. Recognised as the 'Best Seaport in Asia' by the Asian Freight and Supply Chain Awards (AFSCA) for the 28th time in 2016; our political, legal and business environments further bolster our reputation as the world's highly connected and efficient port. Singapore is the ideal Asian gateway for global leaders in shipping finance, ship broking, risk management, marine insurance, maritime law and arbitration, and the Offshore and Marine Engineering industry.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Security",
        description:
          "With increased concern over the threat of terrorism, security officers have a key role to play in Singapore. The Private Security industry supports law enforcement agencies to maintain safety and security in the country. In 2012, the Security Industry Regulatory Department (SIRD) and the Licensing Division in the Operations Department (Ops Licensing) merged to form the new Police Licensing & Regulatory Department (PLRD). The single merged regulatory department ensures greater consistency in the areas of policy formulation, licensing processes and enforcement actions across all the licensing regimes administered by the PLRD, one of which is the Private Security industry. Over the years, the Private Security industry has gone through different transformations to enhance its competency and professionalism. Improved opportunities for skills upgrading, better jobs and pay have made being a security officer a much more rewarding career path. The SkillsFuture Study Award encourages security personnel to pursue skills upgrading beyond mandatory training. Specifically, it encourages those who are currently taking on, or wish to take on, professional, managerial and executive positions. These include employees of security agencies as well as those employed in security-related positions in their organisations.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Social Services",
        description:
          "The Social Service industry envisions Singapore as a caring and inclusive society. Every day, social service professionals work relentlessly to empower the vulnerable - those who face family difficulties, mental health concerns, disabilities and special needs, the effects of ageing, or the challenges of growing up.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Tourism",
        description:
          "Meetings, incentives, conferences and exhibitions (MICE), attractions and tours, travel services and hotels all play vital roles in making Singapore an exciting travel destination. The tourism sector also enhances the quality and diversity of leisure options for local residents, creating a living environment that Singaporeans can be proud to call home.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Training and Adult Education ",
        description:
          "The Training and Adult Education industry in Singapore supports enterprises seeking to improve business performance by upgrading the skills of their employees. In face of technological disruptions leading to a rapidly changing environment, professionals need to stay updated on new developments in their industry.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Wholesale Trade",
        description:
          "The Wholesale Trade industry refers to the business-to-business (B2B) transactions of goods, covering a wide range of products in seven key clusters: (1) Agricultural materials (2) Household goods (3) Machinery & equipment (4) Fuels & chemicals (5) General merchandise (6) Transport equipment (7) Others (Metals & minerals, construction materials) Operating within a vibrant ecosystem and supported by a strong trade infrastructure, Singapore is well-positioned to capture these growth opportunities in the region and beyond.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Adminstrative",
        description:
          "An Administrator provides office support to either an individual or team and is vital for the smooth-running of a business. Their duties may include fielding telephone calls, receiving and directing visitors, word processing, creating spreadsheets and presentations, and filing.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("job_categories", null, {});
  },
};
