const ALL_DETAILS = {
  // information_Technology: [
  //   { id: 1, title: "Artificial Intelligence Engineer", path: "/ai-engineer" },
  //   { id: 2, title: "Augmented Reality Engineer", path: "/ar-engineer" },
  //   { id: 3, title: "Big Data Analyst", path: "/big-data-analyst" },
  //   { id: 4, title: "Blockchain Developer", path: "/blockchain-developer" },
  //   { id: 5, title: "Cloud Engineer", path: "/cloud-engineer" },
  //   { id: 6, title: "Computer Hardware Engineer", path: "/hardware-engineer" },
  //   { id: 7, title: "Computer Network Architect", path: "/network-architect" },
  //   { id: 8, title: "Computer Science Engineer", path: "/cs-engineer" },
  //   { id: 9, title: "Computer Scientist", path: "/computer-scientist" },
  //   {
  //     id: 10,
  //     title: "Cyber Security Specialist",
  //     path: "/cyber-security-specialist",
  //   },
  //   { id: 11, title: "Data Scientist", path: "/data-scientist" },
  //   { id: 12, title: "Database Administrator", path: "/database-admin" },
  //   { id: 13, title: "Full Stack Developer", path: "/full-stack-developer" },
  //   { id: 14, title: "Game Designer and Developer", path: "/game-designer" },
  //   {
  //     id: 15,
  //     title: "Geo-Informatics Engineer",
  //     path: "/geo-informatics-engineer",
  //   },
  //   { id: 16, title: "Help Desk Analyst", path: "/help-desk-analyst" },
  //   { id: 17, title: "Information Technology Engineer", path: "/it-engineer" },
  //   {
  //     id: 18,
  //     title: "Internet of Things (IoT) Solutions Architect",
  //     path: "/iot-architect",
  //   },
  //   { id: 19, title: "Network Administrator", path: "/network-administrator" },
  //   {
  //     id: 20,
  //     title: "Programmer/Coder/Software Engineer",
  //     path: "/software-engineer",
  //   },
  //   { id: 21, title: "SEO Manager", path: "/seo-manager" },
  //   { id: 22, title: "Software Application Packager", path: "/app-packager" },
  //   { id: 23, title: "Systems Analyst", path: "/systems-analyst" },
  //   { id: 24, title: "User Experience Designer", path: "/ux-designer" },
  //   { id: 25, title: "Virtual Reality Engineer", path: "/vr-engineer" },
  //   { id: 26, title: "Web Analyst", path: "/web-analyst" },
  //   { id: 27, title: "Web Designer", path: "/web-designer" },
  // ],
  // Engineering: [
  //   { id: 28, title: "Aeronautical Engineer", path: "/aeronautical-engineer" },
  //   { id: 29, title: "Automobile Engineer", path: "/automobile-engineer" },
  //   {
  //     id: 30,
  //     title: "Bioinformatics Engineering",
  //     path: "/bioinformatics-engineering",
  //   },
  //   { id: 31, title: "Biomedical Engineer", path: "/biomedical-engineer" },
  //   {
  //     id: 32,
  //     title: "Biotechnology Engineer",
  //     path: "/biotechnology-engineer",
  //   },
  //   { id: 33, title: "Broadcast Engineer", path: "/broadcast-engineer" },
  //   {
  //     id: 34,
  //     title: "CAD Designer for Carpets",
  //     path: "/cad-designer-carpets",
  //   },
  //   {
  //     id: 35,
  //     title: "CAD Jewellery Designer",
  //     path: "/cad-jewellery-designer",
  //   },
  //   {
  //     id: 36,
  //     title: "Ceramic Technologist/Engineer",
  //     path: "/ceramic-technologist",
  //   },
  //   { id: 37, title: "Chemical Engineer", path: "/chemical-engineer" },
  //   {
  //     id: 38,
  //     title: "Civil Engineer/Structural Engineer",
  //     path: "/civil-engineer",
  //   },
  //   { id: 39, title: "Corrosion Engineer", path: "/corrosion-engineer" },
  //   { id: 40, title: "Design Engineer", path: "/design-engineer" },
  //   {
  //     id: 41,
  //     title: "Development Operations Engineer",
  //     path: "/dev-ops-engineer",
  //   },
  //   {
  //     id: 42,
  //     title: "Electrical and Electronics Engineer",
  //     path: "/electrical-electronics-engineer",
  //   },
  //   {
  //     id: 43,
  //     title: "Electronics Designer/VLSI/Embedded System Designer",
  //     path: "/electronics-vlsi-designer",
  //   },
  //   {
  //     id: 44,
  //     title: "Electronics and Communication Engineer",
  //     path: "/electronics-communication-engineer",
  //   },
  //   {
  //     id: 45,
  //     title: "Environmental Engineer",
  //     path: "/environmental-engineer",
  //   },
  //   {
  //     id: 46,
  //     title: "Fire and Safety Engineer",
  //     path: "/fire-safety-engineer",
  //   },
  //   { id: 47, title: "Food Engineer", path: "/food-engineer" },
  //   { id: 48, title: "Footwear Designer", path: "/footwear-designer" },
  //   { id: 49, title: "Forensic Engineer", path: "/forensic-engineer" },
  //   {
  //     id: 50,
  //     title: "Geo-Informatics Engineer",
  //     path: "/geo-informatics-engineer",
  //   },
  //   { id: 51, title: "Graphics Designer", path: "/graphics-designer" },
  //   { id: 52, title: "Industrial Designer", path: "/industrial-designer" },
  //   { id: 53, title: "Industrial Engineer", path: "/industrial-engineer" },
  //   {
  //     id: 54,
  //     title: "Instrumentation Engineer",
  //     path: "/instrumentation-engineer",
  //   },
  //   {
  //     id: 55,
  //     title: "Manufacturing Engineer",
  //     path: "/manufacturing-engineer",
  //   },
  //   { id: 56, title: "Marine Engineer", path: "/marine-engineer" },
  //   { id: 57, title: "Mechanical Engineer", path: "/mechanical-engineer" },
  //   { id: 58, title: "Metallurgy Engineer", path: "/metallurgy-engineer" },
  //   { id: 59, title: "Mining Engineer", path: "/mining-engineer" },
  //   {
  //     id: 60,
  //     title: "Nanotechnology/Nanoscience Engineer",
  //     path: "/nanotechnology-engineer",
  //   },
  //   { id: 61, title: "Optical Engineer", path: "/optical-engineer" },
  //   { id: 62, title: "Petroleum Engineer", path: "/petroleum-engineer" },
  //   {
  //     id: 63,
  //     title: "Pharmaceutical Engineer",
  //     path: "/pharmaceutical-engineer",
  //   },
  //   {
  //     id: 64,
  //     title: "Printing Engineer/Technologist",
  //     path: "/printing-engineer",
  //   },
  //   { id: 65, title: "Process Engineer", path: "/process-engineer" },
  //   { id: 66, title: "Product Designer", path: "/product-designer" },
  //   {
  //     id: 67,
  //     title: "Quality Assurance Engineer",
  //     path: "/quality-assurance-engineer",
  //   },
  //   { id: 68, title: "Railway Engineer", path: "/railway-engineer" },
  //   { id: 69, title: "Robotics Engineer", path: "/robotics-engineer" },
  //   { id: 70, title: "Sales Engineer", path: "/sales-engineer" },
  //   {
  //     id: 71,
  //     title: "Smart Manufacturing and Automation Engineering",
  //     path: "/smart-manufacturing-engineer",
  //   },
  //   { id: 72, title: "Sound Engineer", path: "/sound-engineer" },
  //   { id: 73, title: "Textile Engineer", path: "/textile-engineer" },
  //   { id: 74, title: "Tool Engineer", path: "/tool-engineer" },
  //   {
  //     id: 75,
  //     title: "Water Resource Engineer",
  //     path: "/water-resource-engineer",
  //   },
  // ],
  // GovernmentServices: [
  //   { id: 76, title: "Agniveer", path: "/agniveer" },
  //   { id: 77, title: "Border Security Force (BSF)", path: "/bsf" },
  //   { id: 78, title: "CISF Officer", path: "/cisf-officer" },
  //   { id: 79, title: "Coast Guard", path: "/coast-guard" },
  //   { id: 80, title: "CRPF Officer", path: "/crpf-officer" },
  //   { id: 81, title: "Customs Officer", path: "/customs-officer" },
  //   { id: 82, title: "FSSAI Officer", path: "/fssai-officer" },
  //   { id: 83, title: "Gramin Dak Sevak", path: "/gramin-dak-sevak" },
  //   { id: 84, title: "Indian Administrative Service", path: "/ias" },
  //   {
  //     id: 85,
  //     title: "Indian Air Force Officer",
  //     path: "/indian-air-force-officer",
  //   },
  //   { id: 86, title: "Indian Army Officer", path: "/indian-army-officer" },
  //   { id: 87, title: "Indian Foreign Service", path: "/ifs" },
  //   { id: 88, title: "Indian Forest Service", path: "/ifs-forest-service" },
  //   { id: 89, title: "Indian Home Guard", path: "/indian-home-guard" },
  //   { id: 90, title: "Indian Navy Officer", path: "/indian-navy-officer" },
  //   { id: 91, title: "Indian Police Service", path: "/ips" },
  //   {
  //     id: 92,
  //     title: "Indian Railway Accounts Service",
  //     path: "/indian-railway-accounts-service",
  //   },
  //   {
  //     id: 93,
  //     title: "Indian Railway Service of Electrical Engineers",
  //     path: "/indian-railway-electrical-engineers",
  //   },
  //   {
  //     id: 94,
  //     title: "Indian Railway Personnel Service",
  //     path: "/indian-railway-personnel-service",
  //   },
  //   {
  //     id: 95,
  //     title: "Indian Railway Service of Engineers",
  //     path: "/indian-railway-engineers",
  //   },
  //   {
  //     id: 96,
  //     title: "Indian Railway Service of Mechanical Engineers",
  //     path: "/indian-railway-mechanical-engineers",
  //   },
  //   {
  //     id: 97,
  //     title: "Indian Railway Service of Signal Engineers",
  //     path: "/indian-railway-signal-engineers",
  //   },
  //   {
  //     id: 98,
  //     title: "Indian Railway Stores Service (IRSS)",
  //     path: "/indian-railways-stores-service",
  //   },
  //   {
  //     id: 99,
  //     title: "Indian Railways Traffic Service (IRTS)",
  //     path: "/indian-railways-traffic-service",
  //   },
  //   {
  //     id: 100,
  //     title: "Indian Revenue Service",
  //     path: "/indian-revenue-service",
  //   },
  //   { id: 101, title: "ITBP Officer", path: "/itbp-officer" },
  //   {
  //     id: 102,
  //     title: "Inspector of Income Tax",
  //     path: "/inspector-income-tax",
  //   },
  //   { id: 103, title: "Loco Pilot", path: "/loco-pilot" },
  //   { id: 104, title: "Merchant Navy", path: "/merchant-navy" },
  //   { id: 105, title: "Police Constable", path: "/police-constable" },
  //   {
  //     id: 106,
  //     title: "Railway Protection Force (RPF)",
  //     path: "/railway-protection-force",
  //   },
  //   { id: 107, title: "SSB-Sashastra Seema Bal Officer", path: "/ssb-officer" },
  //   {
  //     id: 108,
  //     title: "Sub-inspector of Police",
  //     path: "/sub-inspector-of-police",
  //   },
  // ],
  // Management: [
  //   {
  //     id: 142,
  //     title: "Assistant Catering Manager",
  //     path: "/assistant-catering-manager",
  //   },
  //   { id: 143, title: "BPO Executive", path: "/bpo-executive" },
  //   { id: 144, title: "Event Manager", path: "/event-manager" },
  //   {
  //     id: 145,
  //     title: "Human Resource Manager",
  //     path: "/human-resource-manager",
  //   },
  //   { id: 146, title: "Inventory Manager", path: "/inventory-manager" },
  //   {
  //     id: 147,
  //     title: "Knowledge Process Outsourcing Executive",
  //     path: "/kpo-executive",
  //   },
  //   {
  //     id: 148,
  //     title: "Purchasing and Materials Manager",
  //     path: "/purchasing-materials-manager",
  //   },
  //   {
  //     id: 149,
  //     title: "Quality Assurance Manager",
  //     path: "/quality-assurance-manager",
  //   },
  //   { id: 150, title: "Retail Manager", path: "/retail-manager" },
  //   {
  //     id: 151,
  //     title: "Rural Development Specialist/Manager",
  //     path: "/rural-development-manager",
  //   },
  //   {
  //     id: 152,
  //     title: "Sales and Marketing Manager",
  //     path: "/sales-marketing-manager",
  //   },
  //   { id: 153, title: "Sports Agent/Manager", path: "/sports-agent-manager" },
  //   {
  //     id: 154,
  //     title: "Sports Equipment Manager",
  //     path: "/sports-equipment-manager",
  //   },
  // ],
  // OperationsLogisticsAndHospitality: [
  //   { id: 155, title: "Aircraft Pilot", path: "/aircraft-pilot" },
  //   { id: 156, title: "Air Hostess/Purser", path: "/air-hostess-purser" },
  //   {
  //     id: 157,
  //     title: "Airline Cargo Assistant",
  //     path: "/airline-cargo-assistant",
  //   },
  //   {
  //     id: 158,
  //     title: "Airline Customer Service Executive",
  //     path: "/airline-customer-service-executive",
  //   },
  //   {
  //     id: 159,
  //     title: "Airline Ground Support Equipment Operator",
  //     path: "/airline-ground-support-equipment-operator",
  //   },
  //   {
  //     id: 160,
  //     title: "Air Traffic Controller",
  //     path: "/air-traffic-controller",
  //   },
  //   { id: 161, title: "Auctioneer", path: "/auctioneer" },
  //   { id: 162, title: "Bartender/Mixologist", path: "/bartender-mixologist" },
  //   { id: 163, title: "Bulldozer Operator", path: "/bulldozer-operator" },
  //   {
  //     id: 164,
  //     title: "Cold Chain Process Management Specialist",
  //     path: "/cold-chain-process-management-specialist",
  //   },
  //   { id: 165, title: "Commercial Driver", path: "/commercial-driver" },
  //   {
  //     id: 166,
  //     title: "Conveyor Operation and Maintenance Technician",
  //     path: "/conveyor-operation-maintenance-technician",
  //   },
  //   { id: 167, title: "Distribution Manager", path: "/distribution-manager" },
  //   {
  //     id: 168,
  //     title: "Food and Beverage Manager",
  //     path: "/food-beverage-manager",
  //   },
  //   {
  //     id: 169,
  //     title: "Front Office Associate",
  //     path: "/front-office-associate",
  //   },
  //   { id: 170, title: "Logistics Analyst", path: "/logistics-analyst" },
  //   { id: 171, title: "Logistics Manager", path: "/logistics-manager" },
  //   { id: 172, title: "Multi-Tasking Staff", path: "/multi-tasking-staff" },
  //   { id: 173, title: "Nature Guide", path: "/nature-guide" },
  //   { id: 174, title: "Office Administrator", path: "/office-administrator" },
  //   { id: 175, title: "Operations Manager", path: "/operations-manager" },
  //   {
  //     id: 176,
  //     title: "Package Dyeing Machine Operator",
  //     path: "/package-dyeing-machine-operator",
  //   },
  //   {
  //     id: 177,
  //     title: "Port Operations Manager",
  //     path: "/port-operations-manager",
  //   },
  //   {
  //     id: 178,
  //     title: "Secretary/Personal Assistant",
  //     path: "/secretary-personal-assistant",
  //   },
  //   { id: 179, title: "Sommelier", path: "/sommelier" },
  //   { id: 180, title: "Supply Chain Manager", path: "/supply-chain-manager" },
  //   { id: 181, title: "Tour Guide", path: "/tour-guide" },
  //   { id: 182, title: "Tour Operator", path: "/tour-operator" },
  //   {
  //     id: 183,
  //     title: "Transportation Manager",
  //     path: "/transportation-manager",
  //   },
  //   { id: 184, title: "Travel Consultant", path: "/travel-consultant" },
  //   { id: 185, title: "Urban Planner", path: "/urban-planner" },
  // ],
  // PublicPolicyLawAndSafety: [
  //   { id: 186, title: "Arbitrator", path: "/arbitrator" },
  //   {
  //     id: 187,
  //     title: "Corporate Legal Advisor/Compliance Officer",
  //     path: "/corporate-legal-advisor",
  //   },
  //   { id: 188, title: "Detective", path: "/detective" },
  //   { id: 189, title: "Fire Fighter", path: "/fire-fighter" },
  //   { id: 190, title: "Human Rights Lawyer", path: "/human-rights-lawyer" },
  //   {
  //     id: 191,
  //     title: "International Relations Specialist",
  //     path: "/international-relations-specialist",
  //   },
  //   { id: 192, title: "Judge", path: "/judge" },
  //   {
  //     id: 193,
  //     title: "Lawyer/Law Officer/Advocate",
  //     path: "/lawyer-law-officer-advocate",
  //   },
  //   { id: 194, title: "Medico Legal Advisor", path: "/medico-legal-advisor" },
  //   { id: 195, title: "Patent Lawyer", path: "/patent-lawyer" },
  //   { id: 196, title: "Psephologist", path: "/psephologist" },
  //   { id: 197, title: "Public Policy Advisor", path: "/public-policy-advisor" },
  //   { id: 198, title: "Social Worker", path: "/social-worker" },
  //   { id: 199, title: "Sports Lawyer", path: "/sports-lawyer" },
  //   {
  //     id: 200,
  //     title: "Unarmed Security Guard",
  //     path: "/unarmed-security-guard",
  //   },
  // ],
  // ResearchAndDevelopment: [
  //   { id: 201, title: "Anthropologist", path: "/anthropologist" },
  //   { id: 202, title: "Archaeologist", path: "/archaeologist" },
  //   { id: 203, title: "Archivist", path: "/archivist" },
  //   { id: 204, title: "Astrophysicist", path: "/astrophysicist" },
  //   { id: 205, title: "Bacteriologist", path: "/bacteriologist" },
  //   { id: 206, title: "Botanist", path: "/botanist" },
  //   {
  //     id: 207,
  //     title: "Child Development Specialist",
  //     path: "/child-development-specialist",
  //   },
  //   { id: 208, title: "Criminologist", path: "/criminologist" },
  //   { id: 209, title: "Curator", path: "/curator" },
  //   {
  //     id: 210,
  //     title: "Cytologist/Cytotechnologist",
  //     path: "/cytologist-cytotechnologist",
  //   },
  //   {
  //     id: 211,
  //     title: "Data Collector or Field Surveyor Enumerator",
  //     path: "/data-collector-field-surveyor-enumerator",
  //   },
  //   { id: 212, title: "Demographer", path: "/demographer" },
  //   { id: 213, title: "Ecologist", path: "/ecologist" },
  //   { id: 214, title: "Economist", path: "/economist" },
  //   { id: 215, title: "Engineering Physicist", path: "/engineering-physicist" },
  //   {
  //     id: 216,
  //     title: "English Literature Scholar",
  //     path: "/english-literature-scholar",
  //   },
  //   { id: 217, title: "Epigraphist", path: "/epigraphist" },
  //   { id: 218, title: "Forensic Scientist", path: "/forensic-scientist" },
  //   { id: 219, title: "Genetic Engineer", path: "/genetic-engineer" },
  //   { id: 220, title: "Geographer", path: "/geographer" },
  //   { id: 221, title: "Geologist", path: "/geologist" },
  //   { id: 222, title: "Historian", path: "/historian" },
  //   { id: 223, title: "Mathematician", path: "/mathematician" },
  //   { id: 224, title: "Meteorologist", path: "/meteorologist" },
  //   { id: 225, title: "Museologist", path: "/museologist" },
  //   { id: 226, title: "Nano Scientist", path: "/nano-scientist" },
  //   { id: 227, title: "Paleontologist", path: "/paleontologist" },
  //   { id: 228, title: "Physicist", path: "/physicist" },
  //   { id: 229, title: "Political Scientist", path: "/political-scientist" },
  //   {
  //     id: 230,
  //     title: "Scientific Assistant (IMD)",
  //     path: "/scientific-assistant-imd",
  //   },
  //   { id: 231, title: "Seismologist", path: "/seismologist" },
  //   { id: 232, title: "Sociologist", path: "/sociologist" },
  //   { id: 233, title: "Space Scientist", path: "/space-scientist" },
  //   { id: 234, title: "Statistician", path: "/statistician" },
  //   { id: 235, title: "Toxicologist", path: "/toxicologist" },
  //   { id: 236, title: "Virologist", path: "/virologist" },
  //   { id: 237, title: "Zoologist", path: "/zoologist" },
  // ],
  // TechnicalAndSkillTrades: [
  //   { id: 238, title: "Applique Artisan", path: "/applique-artisan" },
  //   {
  //     id: 239,
  //     title: "Assistant Beauty Therapist",
  //     path: "/assistant-beauty-therapist",
  //   },
  //   {
  //     id: 240,
  //     title: "Assistant Carpenter—Wooden Furniture",
  //     path: "/assistant-carpenter-wooden-furniture",
  //   },
  //   {
  //     id: 241,
  //     title: "Assistant False Ceiling and Drywall Installer",
  //     path: "/assistant-false-ceiling-drywall-installer",
  //   },
  //   {
  //     id: 242,
  //     title: "Assistant Fitter: Levelling, Alignment and Balancing",
  //     path: "/assistant-fitter-levelling-alignment-balancing",
  //   },
  //   {
  //     id: 243,
  //     title: "Assistant Hair Stylist",
  //     path: "/assistant-hair-stylist",
  //   },
  //   { id: 244, title: "Assistant Surveyor", path: "/assistant-surveyor" },
  //   {
  //     id: 245,
  //     title: "Auto/E-Rickshaw Driver and Technician",
  //     path: "/auto-e-rickshaw-driver-technician",
  //   },
  //   {
  //     id: 246,
  //     title: "Automotive Electrician",
  //     path: "/automotive-electrician",
  //   },
  //   {
  //     id: 247,
  //     title: "Auto Service Technician Level 3",
  //     path: "/auto-service-technician-level-3",
  //   },
  //   { id: 248, title: "Bamboo Mat Weaver", path: "/bamboo-mat-weaver" },
  //   {
  //     id: 249,
  //     title: "Bamboo Utility Product Tailor",
  //     path: "/bamboo-utility-product-tailor",
  //   },
  //   {
  //     id: 250,
  //     title: "Operator-Boring Machine",
  //     path: "/operator-boring-machine",
  //   },
  //   { id: 251, title: "Cake Artist", path: "/cake-artist" },
  //   { id: 252, title: "Camp Helper", path: "/camp-helper" },
  //   {
  //     id: 253,
  //     title: "CCTV Installation Technician",
  //     path: "/cctv-installation-technician",
  //   },
  //   { id: 254, title: "Chef", path: "/chef" },
  //   {
  //     id: 255,
  //     title: "Child Caretaker (Non-clinical)",
  //     path: "/child-caretaker-non-clinical",
  //   },
  //   { id: 256, title: "Chocolatier", path: "/chocolatier" },
  //   { id: 257, title: "CNC Operator Turning", path: "/cnc-operator-turning" },
  //   {
  //     id: 258,
  //     title: "Coffee Taster/Barrista/Q Grader",
  //     path: "/coffee-taster-barrista-q-grader",
  //   },
  //   {
  //     id: 259,
  //     title: "Conveyor Operation and Maintenance Technician",
  //     path: "/conveyor-operation-maintenance-technician",
  //   },
  //   {
  //     id: 260,
  //     title: "Crochet Lacemaker – Furnishings",
  //     path: "/crochet-lacemaker-furnishings",
  //   },
  //   { id: 261, title: "Doors and Windows Fixer", path: "/doors-windows-fixer" },
  //   { id: 262, title: "Draughtsman", path: "/draughtsman" },
  //   {
  //     id: 263,
  //     title:
  //       "DTH Set Top Box Installation and Service Technician (Cable TV Operator)",
  //     path: "/dth-set-top-box-installation-service-technician",
  //   },
  //   {
  //     id: 264,
  //     title: "Electric Vehicle Assembly Technician",
  //     path: "/electric-vehicle-assembly-technician",
  //   },
  //   { id: 265, title: "Electrician (General)", path: "/electrician-general" },
  //   { id: 266, title: "E-waste Collector", path: "/e-waste-collector" },
  //   {
  //     id: 267,
  //     title: "Field Technician – Other Home Appliances",
  //     path: "/field-technician-other-home-appliances",
  //   },
  //   {
  //     id: 268,
  //     title: "Fitter–Electrical and Electronic Assembly",
  //     path: "/fitter-electrical-electronic-assembly",
  //   },
  //   { id: 269, title: "Fitter–Fabrication", path: "/fitter-fabrication" },
  //   {
  //     id: 270,
  //     title: "Fitter–Mechanical Assembly",
  //     path: "/fitter-mechanical-assembly",
  //   },
  //   { id: 271, title: "Fitter–Processing", path: "/fitter-processing" },
  //   {
  //     id: 272,
  //     title: "Food and Beverage Service-Steward",
  //     path: "/food-beverage-service-steward",
  //   },
  //   { id: 273, title: "General Housekeeper", path: "/general-housekeeper" },
  //   {
  //     id: 274,
  //     title: "Helper–Shuttering Carpenter",
  //     path: "/helper-shuttering-carpenter",
  //   },
  //   { id: 275, title: "Helper–Fabrication", path: "/helper-fabrication" },
  //   { id: 276, title: "Homecook", path: "/homecook" },
  //   { id: 277, title: "Home Delivery Boy", path: "/home-delivery-boy" },
  //   {
  //     id: 278,
  //     title: "Housekeeping Attendant (Manual Cleaning)",
  //     path: "/housekeeping-attendant-manual-cleaning",
  //   },
  //   {
  //     id: 279,
  //     title: "Industrial Production Worker – Food Processing",
  //     path: "/industrial-production-worker-food-processing",
  //   },
  //   {
  //     id: 280,
  //     title: "Installer – Frameless Glass Doors/Windows",
  //     path: "/installer-frameless-glass-doors-windows",
  //   },
  //   { id: 281, title: "Jute Handloom Weaver", path: "/jute-handloom-weaver" },
  //   { id: 282, title: "Kitchen Steward", path: "/kitchen-steward" },
  //   { id: 283, title: "Lapidarist", path: "/lapidarist" },
  //   { id: 284, title: "Leather Technologist", path: "/leather-technologist" },
  //   {
  //     id: 285,
  //     title: "Light Vehicle Driver (LMV)",
  //     path: "/light-vehicle-driver-lmv",
  //   },
  //   { id: 286, title: "Mason (General)", path: "/mason-general" },
  //   { id: 287, title: "Mason (Stone)", path: "/mason-stone" },
  //   { id: 288, title: "Mason (Tiling)", path: "/mason-tiling" },
  //   {
  //     id: 289,
  //     title: "Master Hand Embroiderer (Hand Crafted Textiles)",
  //     path: "/master-hand-embroiderer",
  //   },
  //   { id: 290, title: "Mechanical Fitter", path: "/mechanical-fitter" },
  //   {
  //     id: 291,
  //     title: "Multi-skill Technician (Electrical)",
  //     path: "/multi-skill-technician-electrical",
  //   },
  //   {
  //     id: 292,
  //     title: "Multi-skill Technician (Food Processing)",
  //     path: "/multi-skill-technician-food-processing",
  //   },
  //   { id: 293, title: "Oil Technologist", path: "/oil-technologist" },
  //   {
  //     id: 294,
  //     title: "Construction Painter and Decorator",
  //     path: "/construction-painter-decorator",
  //   },
  //   { id: 295, title: "Pastry Chef", path: "/pastry-chef" },
  //   { id: 296, title: "Plumber", path: "/plumber" },
  //   {
  //     id: 297,
  //     title: "Refrigeration Technician",
  //     path: "/refrigeration-technician",
  //   },
  //   { id: 298, title: "Retail Cashier", path: "/retail-cashier" },
  //   {
  //     id: 299,
  //     title: "Retail Store Operations Assistant",
  //     path: "/retail-store-operations-assistant",
  //   },
  //   { id: 300, title: "Room Attendant", path: "/room-attendant" },
  //   { id: 301, title: "Rubber Technologist", path: "/rubber-technologist" },
  //   {
  //     id: 302,
  //     title: "Self-employed E-tailer",
  //     path: "/self-employed-e-tailer",
  //   },
  //   {
  //     id: 303,
  //     title: "Sewing Machine Operator",
  //     path: "/sewing-machine-operator",
  //   },
  //   { id: 304, title: "Showroom Hostess/Host", path: "/showroom-hostess-host" },
  //   {
  //     id: 305,
  //     title: "Smartphone Repair Technician",
  //     path: "/smartphone-repair-technician",
  //   },
  //   {
  //     id: 306,
  //     title: "Solar and LED Technician",
  //     path: "/solar-led-technician",
  //   },
  //   { id: 307, title: "Spa Therapist", path: "/spa-therapist" },
  //   {
  //     id: 308,
  //     title: "Stonecutter (Cutting Machine Operator) – Stone Craft",
  //     path: "/stonecutter-stone-craft",
  //   },
  //   {
  //     id: 309,
  //     title: "Storekeeper – Construction",
  //     path: "/storekeeper-construction",
  //   },
  //   {
  //     id: 310,
  //     title: "Stringing/Beading Artist (Fashion Jewellery)",
  //     path: "/stringing-beading-artist-fashion-jewellery",
  //   },
  //   { id: 311, title: "Sugar Technologist", path: "/sugar-technologist" },
  //   { id: 312, title: "Tea Taster", path: "/tea-taster" },
  //   { id: 313, title: "Tour Operator", path: "/tour-operator" },
  //   { id: 314, title: "Tower Technician", path: "/tower-technician" },
  //   {
  //     id: 315,
  //     title: "Trainee Chef/Assistant Cook",
  //     path: "/trainee-chef-assistant-cook",
  //   },
  //   { id: 316, title: "Waste Collector", path: "/waste-collector" },
  //   { id: 317, title: "Wood Polisher", path: "/wood-polisher" },
  // ],
};

const INFORMATION_TECHNOLOGY = [
  {
    id: 1,
    title: "Artificial Intelligence Engineer",
    path: "/ai-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 2,
    title: "Augmented Reality Engineer",
    path: "/ar-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 3,
    title: "Big Data Analyst",
    path: "/big-data-analyst",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 4,
    title: "Blockchain Developer",
    path: "/blockchain-developer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 5,
    title: "Cloud Engineer",
    path: "/cloud-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 6,
    title: "Computer Hardware Engineer",
    path: "/hardware-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 7,
    title: "Computer Network Architect",
    path: "/network-architect",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 8,
    title: "Computer Science Engineer",
    path: "/cs-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 9,
    title: "Computer Scientist",
    path: "/computer-scientist",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 10,
    title: "Cyber Security Specialist",
    path: "/cyber-security-specialist",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 11,
    title: "Data Scientist",
    path: "/data-scientist",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 12,
    title: "Database Administrator",
    path: "/database-admin",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 13,
    title: "Full Stack Developer",
    path: "/full-stack-developer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 14,
    title: "Game Designer and Developer",
    path: "/game-designer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 15,
    title: "Geo-Informatics Engineer",
    path: "/geo-informatics-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 16,
    title: "Help Desk Analyst",
    path: "/help-desk-analyst",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 17,
    title: "Information Technology Engineer",
    path: "/it-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 18,
    title: "Internet of Things (IoT) Solutions Architect",
    path: "/iot-architect",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 19,
    title: "Network Administrator",
    path: "/network-administrator",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 20,
    title: "Programmer/Coder/Software Engineer",
    path: "/software-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 21,
    title: "SEO Manager",
    path: "/seo-manager",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 22,
    title: "Software Application Packager",
    path: "/app-packager",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 23,
    title: "Systems Analyst",
    path: "/systems-analyst",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 24,
    title: "User Experience Designer",
    path: "/ux-designer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 25,
    title: "Virtual Reality Engineer",
    path: "/vr-engineer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 26,
    title: "Web Analyst",
    path: "/web-analyst",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
  {
    id: 27,
    title: "Web Designer",
    path: "/web-designer",
    image:
      "https://as2.ftcdn.net/v2/jpg/08/41/18/71/1000_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg",
  },
];

const ENGINEERING = [
  {
    id: 28,
    title: "Aeronautical Engineer",
    path: "/aeronautical-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    title: "AI Engineer",
    path: "/ai-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    title: "Bioinformatics Engineering",
    path: "/bioinformatics-engineering",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 31,
    title: "Biomedical Engineer",
    path: "/biomedical-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 32,
    title: "Biotechnology Engineer",
    path: "/biotechnology-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 33,
    title: "Broadcast Engineer",
    path: "/broadcast-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 34,
    title: "CAD Designer for Carpets",
    path: "/cad-designer-carpets",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    title: "CAD Jewellery Designer",
    path: "/cad-jewellery-designer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 36,
    title: "Ceramic Technologist/Engineer",
    path: "/ceramic-technologist",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 37,
    title: "Chemical Engineer",
    path: "/chemical-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 38,
    title: "Civil Engineer/Structural Engineer",
    path: "/civil-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 39,
    title: "Corrosion Engineer",
    path: "/corrosion-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 40,
    title: "Design Engineer",
    path: "/design-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 41,
    title: "Development Operations Engineer",
    path: "/dev-ops-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 42,
    title: "Electrical and Electronics Engineer",
    path: "/electrical-electronics-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 43,
    title: "Electronics Designer/VLSI/Embedded System Designer",
    path: "/electronics-vlsi-designer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 44,
    title: "Electronics and Communication Engineer",
    path: "/electronics-communication-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 45,
    title: "Environmental Engineer",
    path: "/environmental-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 46,
    title: "Fire and Safety Engineer",
    path: "/fire-safety-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 47,
    title: "Food Engineer",
    path: "/food-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 48,
    title: "Footwear Designer",
    path: "/footwear-designer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 49,
    title: "Forensic Engineer",
    path: "/forensic-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 50,
    title: "Geo-Informatics Engineer",
    path: "/geo-informatics-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 51,
    title: "Graphics Designer",
    path: "/graphics-designer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 52,
    title: "Industrial Designer",
    path: "/industrial-designer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 53,
    title: "Industrial Engineer",
    path: "/industrial-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 54,
    title: "Instrumentation Engineer",
    path: "/instrumentation-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 55,
    title: "Manufacturing Engineer",
    path: "/manufacturing-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 56,
    title: "Marine Engineer",
    path: "/marine-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 57,
    title: "Mechanical Engineer",
    path: "/mechanical-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 58,
    title: "Metallurgy Engineer",
    path: "/metallurgy-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 59,
    title: "Mining Engineer",
    path: "/mining-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 60,
    title: "Nanotechnology/Nanoscience Engineer",
    path: "/nanotechnology-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 61,
    title: "Optical Engineer",
    path: "/optical-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 62,
    title: "Petroleum Engineer",
    path: "/petroleum-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 63,
    title: "Pharmaceutical Engineer",
    path: "/pharmaceutical-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 64,
    title: "Printing Engineer/Technologist",
    path: "/printing-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 65,
    title: "Process Engineer",
    path: "/process-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 66,
    title: "Product Designer",
    path: "/product-designer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 67,
    title: "Quality Assurance Engineer",
    path: "/quality-assurance-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 68,
    title: "Railway Engineer",
    path: "/railway-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 69,
    title: "Robotics Engineer",
    path: "/robotics-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 70,
    title: "Sales Engineer",
    path: "/sales-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 71,
    title: "Smart Manufacturing and Automation Engineering",
    path: "/smart-manufacturing-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 72,
    title: "Sound Engineer",
    path: "/sound-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 73,
    title: "Textile Engineer",
    path: "/textile-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 74,
    title: "Tool Engineer",
    path: "/tool-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 75,
    title: "Water Resource Engineer",
    path: "/water-resource-engineer",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const GOVERMENT_SERVICES = [
  {
    id: 76,
    title: "Agniveer",
    path: "/agniveer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 77,
    title: "Border Security Force (BSF)",
    path: "/bsf",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 78,
    title: "CISF Officer",
    path: "/cisf-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 79,
    title: "Coast Guard",
    path: "/coast-guard",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 80,
    title: "CRPF Officer",
    path: "/crpf-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 81,
    title: "Customs Officer",
    path: "/customs-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 82,
    title: "FSSAI Officer",
    path: "/fssai-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 83,
    title: "Gramin Dak Sevak",
    path: "/gramin-dak-sevak",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 84,
    title: "Indian Administrative Service",
    path: "/ias",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 85,
    title: "Indian Air Force Officer",
    path: "/indian-air-force-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 86,
    title: "Indian Army Officer",
    path: "/indian-army-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 87,
    title: "Indian Foreign Service",
    path: "/ifs",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 88,
    title: "Indian Forest Service",
    path: "/ifs-forest-service",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 89,
    title: "Indian Home Guard",
    path: "/indian-home-guard",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 90,
    title: "Indian Navy Officer",
    path: "/indian-navy-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 91,
    title: "Indian Police Service",
    path: "/ips",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 92,
    title: "Indian Railway Accounts Service",
    path: "/indian-railway-accounts-service",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 93,
    title: "Indian Railway Service of Electrical Engineers",
    path: "/indian-railway-electrical-engineers",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 94,
    title: "Indian Railway Personnel Service",
    path: "/indian-railway-personnel-service",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 95,
    title: "Indian Railway Service of Engineers",
    path: "/indian-railway-engineers",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 96,
    title: "Indian Railway Service of Mechanical Engineers",
    path: "/indian-railway-mechanical-engineers",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 97,
    title: "Indian Railway Service of Signal Engineers",
    path: "/indian-railway-signal-engineers",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 98,
    title: "Indian Railway Stores Service (IRSS)",
    path: "/indian-railways-stores-service",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 99,
    title: "Indian Railways Traffic Service (IRTS)",
    path: "/indian-railways-traffic-service",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 100,
    title: "Indian Revenue Service",
    path: "/indian-revenue-service",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 101,
    title: "ITBP Officer",
    path: "/itbp-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 102,
    title: "Inspector of Income Tax",
    path: "/inspector-income-tax",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 103,
    title: "Loco Pilot",
    path: "/loco-pilot",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 104,
    title: "Merchant Navy",
    path: "/merchant-navy",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 105,
    title: "Police Constable",
    path: "/police-constable",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 106,
    title: "Railway Protection Force (RPF)",
    path: "/railway-protection-force",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 107,
    title: "SSB-Sashastra Seema Bal Officer",
    path: "/ssb-officer",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 108,
    title: "Sub-inspector of Police",
    path: "/sub-inspector-of-police",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
];

const MANAGEMENTS = [
  {
    id: 142,
    title: "Assistant Catering Manager",
    path: "/assistant-catering-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 143,
    title: "BPO Executive",
    path: "/bpo-executive",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 144,
    title: "Event Manager",
    path: "/event-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 145,
    title: "Human Resource Manager",
    path: "/human-resource-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 146,
    title: "Inventory Manager",
    path: "/inventory-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 147,
    title: "Knowledge Process Outsourcing Executive",
    path: "/kpo-executive",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 148,
    title: "Purchasing and Materials Manager",
    path: "/purchasing-materials-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 149,
    title: "Quality Assurance Manager",
    path: "/quality-assurance-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 150,
    title: "Retail Manager",
    path: "/retail-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 151,
    title: "Rural Development Specialist/Manager",
    path: "/rural-development-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 152,
    title: "Sales and Marketing Manager",
    path: "/sales-marketing-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 153,
    title: "Sports Agent/Manager",
    path: "/sports-agent-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 154,
    title: "Sports Equipment Manager",
    path: "/sports-equipment-manager",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const OPERATIONS_LOGISTICS_AND_HOSPITALITY = [
  {
    id: 155,
    title: "Aircraft Pilot",
    path: "/aircraft-pilot",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 156,
    title: "Air Hostess/Purser",
    path: "/air-hostess-purser",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 157,
    title: "Airline Cargo Assistant",
    path: "/airline-cargo-assistant",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 158,
    title: "Airline Customer Service Executive",
    path: "/airline-customer-service-executive",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 159,
    title: "Airline Ground Support Equipment Operator",
    path: "/airline-ground-support-equipment-operator",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 160,
    title: "Air Traffic Controller",
    path: "/air-traffic-controller",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 161,
    title: "Auctioneer",
    path: "/auctioneer",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 162,
    title: "Bartender/Mixologist",
    path: "/bartender-mixologist",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 163,
    title: "Bulldozer Operator",
    path: "/bulldozer-operator",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 164,
    title: "Cold Chain Process Management Specialist",
    path: "/cold-chain-process-management-specialist",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 165,
    title: "Commercial Driver",
    path: "/commercial-driver",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 166,
    title: "Conveyor Operation and Maintenance Technician",
    path: "/conveyor-operation-maintenance-technician",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 167,
    title: "Distribution Manager",
    path: "/distribution-manager",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 168,
    title: "Food and Beverage Manager",
    path: "/food-beverage-manager",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 169,
    title: "Front Office Associate",
    path: "/front-office-associate",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 170,
    title: "Logistics Analyst",
    path: "/logistics-analyst",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 171,
    title: "Logistics Manager",
    path: "/logistics-manager",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 172,
    title: "Multi-Tasking Staff",
    path: "/multi-tasking-staff",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 173,
    title: "Nature Guide",
    path: "/nature-guide",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 174,
    title: "Office Administrator",
    path: "/office-administrator",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 175,
    title: "Operations Manager",
    path: "/operations-manager",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 176,
    title: "Package Dyeing Machine Operator",
    path: "/package-dyeing-machine-operator",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 177,
    title: "Port Operations Manager",
    path: "/port-operations-manager",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 178,
    title: "Secretary/Personal Assistant",
    path: "/secretary-personal-assistant",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 179,
    title: "Sommelier",
    path: "/sommelier",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 180,
    title: "Supply Chain Manager",
    path: "/supply-chain-manager",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 181,
    title: "Tour Guide",
    path: "/tour-guide",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 182,
    title: "Tour Operator",
    path: "/tour-operator",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 183,
    title: "Transportation Manager",
    path: "/transportation-manager",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 184,
    title: "Travel Consultant",
    path: "/travel-consultant",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 185,
    title: "Urban Planner",
    path: "/urban-planner",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const PUBLIC_POLICY_LAW_AND_SAFETY = [
  {
    id: 186,
    title: "Arbitrator",
    path: "/arbitrator",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 187,
    title: "Corporate Legal Advisor/Compliance Officer",
    path: "/corporate-legal-advisor",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 188,
    title: "Detective",
    path: "/detective",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 189,
    title: "Fire Fighter",
    path: "/fire-fighter",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 190,
    title: "Human Rights Lawyer",
    path: "/human-rights-lawyer",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 191,
    title: "International Relations Specialist",
    path: "/international-relations-specialist",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 192,
    title: "Judge",
    path: "/judge",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 193,
    title: "Lawyer/Law Officer/Advocate",
    path: "/lawyer-law-officer-advocate",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 194,
    title: "Medico Legal Advisor",
    path: "/medico-legal-advisor",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 195,
    title: "Patent Lawyer",
    path: "/patent-lawyer",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 196,
    title: "Psephologist",
    path: "/psephologist",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 197,
    title: "Public Policy Advisor",
    path: "/public-policy-advisor",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 198,
    title: "Social Worker",
    path: "/social-worker",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 199,
    title: "Sports Lawyer",
    path: "/sports-lawyer",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 200,
    title: "Unarmed Security Guard",
    path: "/unarmed-security-guard",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const RESEARCH_AND_DEVELOPMENT = [
  {
    id: 201,
    title: "Anthropologist",
    path: "/anthropologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 202,
    title: "Archaeologist",
    path: "/archaeologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 203,
    title: "Archivist",
    path: "/archivist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 204,
    title: "Astrophysicist",
    path: "/astrophysicist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 205,
    title: "Bacteriologist",
    path: "/bacteriologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 206,
    title: "Botanist",
    path: "/botanist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 207,
    title: "Child Development Specialist",
    path: "/child-development-specialist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 208,
    title: "Criminologist",
    path: "/criminologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 209,
    title: "Curator",
    path: "/curator",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 210,
    title: "Cytologist/Cytotechnologist",
    path: "/cytologist-cytotechnologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 211,
    title: "Data Collector or Field Surveyor Enumerator",
    path: "/data-collector-field-surveyor-enumerator",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 212,
    title: "Demographer",
    path: "/demographer",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 213,
    title: "Ecologist",
    path: "/ecologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 214,
    title: "Economist",
    path: "/economist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 215,
    title: "Engineering Physicist",
    path: "/engineering-physicist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 216,
    title: "English Literature Scholar",
    path: "/english-literature-scholar",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 217,
    title: "Epigraphist",
    path: "/epigraphist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 218,
    title: "Forensic Scientist",
    path: "/forensic-scientist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 219,
    title: "Genetic Engineer",
    path: "/genetic-engineer",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 220,
    title: "Geographer",
    path: "/geographer",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 221,
    title: "Geologist",
    path: "/geologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 222,
    title: "Historian",
    path: "/historian",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 223,
    title: "Mathematician",
    path: "/mathematician",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 224,
    title: "Meteorologist",
    path: "/meteorologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 225,
    title: "Museologist",
    path: "/museologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 226,
    title: "Nano Scientist",
    path: "/nano-scientist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 227,
    title: "Paleontologist",
    path: "/paleontologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 228,
    title: "Physicist",
    path: "/physicist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 229,
    title: "Political Scientist",
    path: "/political-scientist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 230,
    title: "Scientific Assistant (IMD)",
    path: "/scientific-assistant-imd",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 231,
    title: "Seismologist",
    path: "/seismologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 232,
    title: "Sociologist",
    path: "/sociologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 233,
    title: "Space Scientist",
    path: "/space-scientist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 234,
    title: "Statistician",
    path: "/statistician",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 235,
    title: "Toxicologist",
    path: "/toxicologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 236,
    title: "Virologist",
    path: "/virologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 237,
    title: "Zoologist",
    path: "/zoologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TECHNICAL_AND_SKILL_TRADES = [
  {
    id: 238,
    title: "Applique Artisan",
    path: "/applique-artisan",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 239,
    title: "Assistant Beauty Therapist",
    path: "/assistant-beauty-therapist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 240,
    title: "Assistant Carpenter—Wooden Furniture",
    path: "/assistant-carpenter-wooden-furniture",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 241,
    title: "Assistant False Ceiling and Drywall Installer",
    path: "/assistant-false-ceiling-drywall-installer",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 242,
    title: "Assistant Fitter: Levelling, Alignment and Balancing",
    path: "/assistant-fitter-levelling-alignment-balancing",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 243,
    title: "Assistant Hair Stylist",
    path: "/assistant-hair-stylist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 244,
    title: "Assistant Surveyor",
    path: "/assistant-surveyor",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 245,
    title: "Auto/E-Rickshaw Driver and Technician",
    path: "/auto-e-rickshaw-driver-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 246,
    title: "Automotive Electrician",
    path: "/automotive-electrician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 247,
    title: "Auto Service Technician Level 3",
    path: "/auto-service-technician-level-3",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 248,
    title: "Bamboo Mat Weaver",
    path: "/bamboo-mat-weaver",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 249,
    title: "Bamboo Utility Product Tailor",
    path: "/bamboo-utility-product-tailor",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 250,
    title: "Operator-Boring Machine",
    path: "/operator-boring-machine",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 251,
    title: "Cake Artist",
    path: "/cake-artist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 252,
    title: "Camp Helper",
    path: "/camp-helper",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 253,
    title: "CCTV Installation Technician",
    path: "/cctv-installation-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 254,
    title: "Chef",
    path: "/chef",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 255,
    title: "Child Caretaker (Non-clinical)",
    path: "/child-caretaker-non-clinical",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 256,
    title: "Chocolatier",
    path: "/chocolatier",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 257,
    title: "CNC Operator Turning",
    path: "/cnc-operator-turning",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 258,
    title: "Coffee Taster/Barrista/Q Grader",
    path: "/coffee-taster-barrista-q-grader",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 259,
    title: "Conveyor Operation and Maintenance Technician",
    path: "/conveyor-operation-maintenance-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 260,
    title: "Crochet Lacemaker – Furnishings",
    path: "/crochet-lacemaker-furnishings",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 261,
    title: "Doors and Windows Fixer",
    path: "/doors-windows-fixer",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 262,
    title: "Draughtsman",
    path: "/draughtsman",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 263,
    title:
      "DTH Set Top Box Installation and Service Technician (Cable TV Operator)",
    path: "/dth-set-top-box-installation-service-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 264,
    title: "Electric Vehicle Assembly Technician",
    path: "/electric-vehicle-assembly-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 265,
    title: "Electrician (General)",
    path: "/electrician-general",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 266,
    title: "E-waste Collector",
    path: "/e-waste-collector",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 267,
    title: "Field Technician – Other Home Appliances",
    path: "/field-technician-other-home-appliances",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 268,
    title: "Fitter–Electrical and Electronic Assembly",
    path: "/fitter-electrical-electronic-assembly",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 269,
    title: "Fitter–Fabrication",
    path: "/fitter-fabrication",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 270,
    title: "Fitter–Mechanical Assembly",
    path: "/fitter-mechanical-assembly",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 271,
    title: "Fitter–Processing",
    path: "/fitter-processing",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 272,
    title: "Food and Beverage Service-Steward",
    path: "/food-beverage-service-steward",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 273,
    title: "General Housekeeper",
    path: "/general-housekeeper",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 274,
    title: "Helper–Shuttering Carpenter",
    path: "/helper-shuttering-carpenter",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 275,
    title: "Helper–Fabrication",
    path: "/helper-fabrication",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 276,
    title: "Homecook",
    path: "/homecook",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 277,
    title: "Home Delivery Boy",
    path: "/home-delivery-boy",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 278,
    title: "Housekeeping Attendant (Manual Cleaning)",
    path: "/housekeeping-attendant-manual-cleaning",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 279,
    title: "Industrial Production Worker – Food Processing",
    path: "/industrial-production-worker-food-processing",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 280,
    title: "Installer – Frameless Glass Doors/Windows",
    path: "/installer-frameless-glass-doors-windows",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 281,
    title: "Jute Handloom Weaver",
    path: "/jute-handloom-weaver",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 282,
    title: "Kitchen Steward",
    path: "/kitchen-steward",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 283,
    title: "Lapidarist",
    path: "/lapidarist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 284,
    title: "Leather Technologist",
    path: "/leather-technologist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 285,
    title: "Light Vehicle Driver (LMV)",
    path: "/light-vehicle-driver-lmv",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 286,
    title: "Mason (General)",
    path: "/mason-general",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 287,
    title: "Mason (Stone)",
    path: "/mason-stone",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 288,
    title: "Mason (Tiling)",
    path: "/mason-tiling",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 289,
    title: "Master Hand Embroiderer (Hand Crafted Textiles)",
    path: "/master-hand-embroiderer",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 290,
    title: "Mechanical Fitter",
    path: "/mechanical-fitter",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 291,
    title: "Multi-skill Technician (Electrical)",
    path: "/multi-skill-technician-electrical",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 292,
    title: "Multi-skill Technician (Food Processing)",
    path: "/multi-skill-technician-food-processing",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 293,
    title: "Oil Technologist",
    path: "/oil-technologist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 294,
    title: "Construction Painter and Decorator",
    path: "/construction-painter-decorator",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 295,
    title: "Pastry Chef",
    path: "/pastry-chef",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 296,
    title: "Plumber",
    path: "/plumber",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 297,
    title: "Refrigeration Technician",
    path: "/refrigeration-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 298,
    title: "Retail Cashier",
    path: "/retail-cashier",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 299,
    title: "Retail Store Operations Assistant",
    path: "/retail-store-operations-assistant",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 300,
    title: "Room Attendant",
    path: "/room-attendant",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 301,
    title: "Rubber Technologist",
    path: "/rubber-technologist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 302,
    title: "Self-employed E-tailer",
    path: "/self-employed-e-tailer",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 303,
    title: "Sewing Machine Operator",
    path: "/sewing-machine-operator",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 304,
    title: "Showroom Hostess/Host",
    path: "/showroom-hostess-host",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 305,
    title: "Smartphone Repair Technician",
    path: "/smartphone-repair-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 306,
    title: "Solar and LED Technician",
    path: "/solar-led-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 307,
    title: "Spa Therapist",
    path: "/spa-therapist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 308,
    title: "Stonecutter (Cutting Machine Operator) – Stone Craft",
    path: "/stonecutter-stone-craft",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 309,
    title: "Storekeeper – Construction",
    path: "/storekeeper-construction",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 310,
    title: "Stringing/Beading Artist (Fashion Jewellery)",
    path: "/stringing-beading-artist-fashion-jewellery",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 311,
    title: "Sugar Technologist",
    path: "/sugar-technologist",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 312,
    title: "Tea Taster",
    path: "/tea-taster",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 313,
    title: "Tour Operator",
    path: "/tour-operator",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 314,
    title: "Tower Technician",
    path: "/tower-technician",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 315,
    title: "Trainee Chef/Assistant Cook",
    path: "/trainee-chef-assistant-cook",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 316,
    title: "Waste Collector",
    path: "/waste-collector",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 317,
    title: "Wood Polisher",
    path: "/wood-polisher",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const ARTS = [
  {
    id: 1,
    title: "Actor",
    path: "/actor",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Anchor",
    path: "/anchor",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Animator",
    path: "/animator",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Archivist",
    path: "/archivist",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Art Dealer",
    path: "/art-dealer",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Art Director",
    path: "/art-director",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Art Historian",
    path: "/art-historian",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Artist",
    path: "/artist",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ALL_CATEGORIES = [
  {
    id: 1,
    title: "Information Technology",
    path: "/information-technology",
    content:
      "Managing, processing, storing, and sharing digital data efficiently",
    image:
      "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Engineering",
    path: "/engineering",
    content:
      "Designing, building, and innovating solutions using science and technology.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Government Services",
    path: "/government-services",
    content:
      "Managing public programs, resources, and administrative support for citizens.",
    image:
      "https://media.gettyimages.com/id/85772713/photo/central-secretariat-on-raisina-hill.jpg?s=1024x1024&w=gi&k=20&c=jjXPdlrRLOcieCnHNKIuSvUDB_FjJwB-vIZTeZDAsEA=",
  },
  {
    id: 4,
    title: "Management",
    path: "/management",
    content:
      "Organizing, planning, and directing resources to achieve specific goals.",
    image:
      "https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Operations Logistics And Hospitality",
    content:
      "Coordinating supply chains, customer service, and event management efficiently.",
    path: "/operations-logistics-hospitality",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Public Policy Law And Safety",
    path: "/public-policy-law-safety",
    content:
      "Creating regulations, enforcing laws, and ensuring public security.",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Research And Development",
    path: "/research-development",
    content:
      "Innovating through systematic investigation and creating new products, technologies.",
    image:
      "https://plus.unsplash.com/premium_photo-1661436558976-540ff4f4459f?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Technical And Skill Trades",
    path: "/technical-skill-trades",
    content:
      "Practical careers requiring specialized training and hands-on expertise.",
    image:
      "https://images.unsplash.com/photo-1607631755187-298a3f9a640a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUZWNobmljYWwlMjBBbmQlMjBTa2lsbCUyMFRyYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    title: "Agriculture",
    path: "/agriculture",
    content:
      "Cultivating crops, livestock, and resources to sustain human life.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Arts",
    path: "/arts",
    content:
      "Creative expression through visual, performing, and literary mediums.",
    image:
      "https://images.unsplash.com/photo-1661697522368-f09157f69b6c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    title: "Media",
    path: "/media",
    content:
      "Communicating information, news, and entertainment through various platforms.",
    image:
      "https://plus.unsplash.com/premium_photo-1688700439239-8120f554eb2e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Marketing",
    path: "/marketing",
    content:
      "Promoting products or services to engage customers and drive sales.",
    image:
      "https://plus.unsplash.com/premium_photo-1661486923449-5a8ab6b5f07c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Business and Finance",
    path: "/business-finance",
    content:
      "Managing companies, resources, investments, and financial operations for growth.",
    image:
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Helath and wellness",
    path: "/health-wellness",
    content:
      "Promoting physical, mental, and emotional well-being for individuals.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Sports ",
    path: "/sports",
    content:
      "Physical activities, competitions, and games promoting fitness and entertainment.",
    image:
      "https://i.pinimg.com/736x/51/8a/7f/518a7f8ade6f2f37c5770147431237bd.jpg",
  },
  {
    id: 12,
    title: "Music ",
    path: "/music",
    content:
      "Creating, performing, and enjoying melodies, rhythms, and harmonies.",
    image:
      "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TIME_LINE_DETAILS = [
  {
    title: "Scholarships",
    content: [
      "There are a few engineering-specific scholarships, such as: Foundation for Excellence Scholarship, Tata Scholarship, HDFC Scholarship, Sahu Jain Trust, Santoor Women’s Scholarship, and others.",
      "Other scholarship schemes include Sitaram Jindal Scholarship Scheme, Swami Dayanand Scholarship, Shiksha Daan Scholarship.",
      "Check for specific 2022-2023 scholarships for AI latest schemes at the national and state levels.",
      "Look out for the National Scholarship Portal or Ministry of Electronics & IT website for government funding options.",
      "Some private institutes, such as NIIT, IIITs, IITs, NPTEL, Coursera, offer financial aid for online certifications in AI and Machine Learning.",
    ],
  },
  {
    title: "Loans",
    content: [
      "Educational loans are easily available for students seeking admission in Artificial Intelligence programs.",
      "Interest rates on loans may vary from time to time and from bank to bank.",
      "Public sector banks offer loans at a lower rate of interest compared to private banks.",
      "Examples of institutions providing loans include State Bank of India, Canara Bank, Bank of Baroda, and others.",
    ],
  },
  {
    title: "Where you study",
    content: [
      "Indian Institute of Science, Bengaluru",
      "University College of Engineering, Osmania University, Hyderabad",
      "Indian Institute of Technology, Hyderabad",
      "Indian Institute of Information Technology (IIIT), Bengaluru",
      "Anna University, Tamil Nadu",
      "Indian Institute of Engineering Science and Technology (IIEST), Shibpur",
      "University Institute of Engineering and Technology (UIET), Kanpur",
      "Jodhpur Institute of Technology, Jodhpur, Rajasthan",
    ],
  },
  {
    title: "Expected_growth_path",
    content: [
      "Junior Engineer",
      "Senior Engineer",
      "Principal Engineer/Engineering Manager",
      "Vice President",
      "Chief Technology Officer",
    ],
  },
  {
    title: "Work_opportunities",
    content: [
      "Software and Tech companies",
      "Government and Private research facilities",
      "Engineering institutes, among others",
    ],
  },
  {
    title: "Salary",
    content: ["Currency: INR", "Min: 5,00,000", "Max: 25,00,000"],
  },
];

const AGNIVEER = [
  {
    title: "Basic qualification",
    content: [
      "Under the Agnipath scheme, people between the ages of 17 years and 23 years will be recruited into the military service of their choice for four years. After this tenure, 25% of the Agniveers will be retained and the remaining 75% will be permitted to return to civilian life. During this duration of 4 years, they would gain many skills which will help them to gain employment",
    ],
  },
  {
    title: "PERSONALITY TRAITS",
    content: [
      "You like helping people",
      "You like working outdoors",
      "You are keen to serve the country and demonstrate valour",
      "You like to have clear instructions to follow",
    ],
  },
  {
    title: "Where you study",
    content: [
      "Agniveers are trained in Artillery Centre, Nashik and Hyderabad",
      "The Indira Gandhi National Open University (IGNOU) is offering skill based Bachelor's Degree Programmes for Agniveers.",
      "IGNOU University has signed Memorandums of Understanding (MoUs) with the Indian Air Force (IAF), Indian Navy, and Indian Army with regard to the skill-based undergraduate courses for Agniveers.",
    ],
  },
  {
    title: "Where will you work",
    content: [
      "Places of Work: You will be placed under the Indian Navy, Indian Army, Indian Air Force as a non-commissioned officer",
      "6 to 7 days a week for 8 to 9 hours per day. Shift system is applicable. You are expected to deal with challenging situations. Most of the work is outdoors.",
      "Opportunities for work exist for differently abled in this field",
    ],
  },
  {
    title: "Expected_growth_path",
    content: [
      "Private → Corporal → Sergeant →Sergeant Major",
      "Seaman Leading Seaman Petty Officer Chief Petty Officer",
      "Aircraftman Leading Aircraftman → Sergeant → Warrant Officer",
    ],
  },
  {
    title: "Work_opportunities",
    content: [
      "Software and Tech companies",
      "Government and Private research facilities",
      "Engineering institutes, among others",
    ],
  },
  {
    title: "Salary",
    content: [
      "The approx. salary of an Agniveer jawan ranges between INR 30,000-40,000 per month",
    ],
  },
];

module.exports = {
  ALL_DETAILS,
  INFORMATION_TECHNOLOGY,
  ENGINEERING,
  ALL_CATEGORIES,
  GOVERMENT_SERVICES,
  MANAGEMENTS,
  OPERATIONS_LOGISTICS_AND_HOSPITALITY,
  PUBLIC_POLICY_LAW_AND_SAFETY,
  RESEARCH_AND_DEVELOPMENT,
  TECHNICAL_AND_SKILL_TRADES,
  ARTS,
  TIME_LINE_DETAILS,
  AGNIVEER,
};
