import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const JOURNEY = [
  {
    type: "professional",
    title: "Assistant Professor",
    institution: "Indian Institute of Technology, Patna",
    period: "Aug 2015 - Present",
    location: "Bihta, Bihar",
    logo: "/images/education/iit_patna.png",
  },
  {
    type: "professional",
    title: "Project Engineer",
    institution: "IIT Kanpur",
    period: "Oct 2014 - Apr 2015",
    location: "Greater Lucknow Area",
    description: "Working on analytical as well as simulation part of an industrial project",
    logo: "/images/education/iit_kanpur.svg",
  },
  {
    type: "academic",
    title: "Doctor of Philosophy (PhD), Structural Engineering",
    institution: "Indian Institute of Technology, Kanpur",
    period: "2010 - 2015",
    thesis: "Vibration-based Structural Damage Localization and Characterization using Output-only Measurements",
    logo: "/images/education/iit_kanpur.svg",
    activities: JSON.stringify([
      "Red one belt holder in Tae-Kwon-Do, a Korean Martial Art",
      "DPGC (Departmental Post Graduate Committee) Student Member, Department of Civil Engineering (October 2010 – September 2012)",
      "Academic Senator (Post Graduate), IIT Kanpur (October 2012 – September 2013)",
    ]),
  },
  {
    type: "academic",
    title: "Master of Technology (MTech), Structural Dynamics",
    institution: "Indian Institute of Technology, Roorkee",
    period: "2008 - 2010",
    logo: "/images/education/iit_roorkee.svg",
    activities: JSON.stringify([
      "DAAD (Deutscher Akademischer Austausch Dienst) fellow for Master Sandwich Program (MSP–2009) in Germany (September 2009–May 2010)",
    ]),
  },
  {
    type: "academic",
    title: "B.E. Civil Engineering",
    institution: "Bengal Engineering & Science University, Shibpur",
    period: "2004 - 2008",
    logo: "/images/education/iiest_shibpur.png",
  },
]

const PUBLICATIONS = [
  {
    ref: "[01]",
    title: "Localization and Quantification of Damage along the Transverse Direction of Bridges Using Bridge Weigh-in-Motion Systems",
    cite: "Paul, D. and Roy, K. (2026), \"Localization and Quantification of Damage along the Transverse Direction of Bridges Using Bridge Weigh-in-Motion Systems\", Journal of Bridge Engineering (ASCE), 31(5): 04026018",
    date: "May 2026",
    url: "https://www.researchgate.net/publication/404328330_Localization_and_Quantification_of_Damage_along_the_Transverse_Direction_of_Bridges_Using_Bridge_Weigh-in-Motion_Systems",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
    researchGateUrl: "https://www.researchgate.net/publication/404328330_Localization_and_Quantification_of_Damage_along_the_Transverse_Direction_of_Bridges_Using_Bridge_Weigh-in-Motion_Systems",
    type: "journal",
  },
  {
    ref: "[02]",
    title: "Baseline-free localization and quantification of structural damage using spectral response",
    cite: "Ganguly, S. and Roy, K. (2025), \"Baseline-free localization and quantification of structural damage using spectral response\", Applied Mathematical Modelling, 142: 115967",
    date: "June 2025",
    url: "https://www.researchgate.net/publication/388290357_Baseline-free_localization_and_quantification_of_structural_damage_using_spectral_response",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
    researchGateUrl: "https://www.researchgate.net/publication/388290357_Baseline-free_localization_and_quantification_of_structural_damage_using_spectral_response",
    type: "journal",
  },
  {
    ref: "[03]",
    title: "Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames",
    cite: "Ganguly, S. and Roy, K. (2025), \"Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames\", Measurement, 242(E): 116109",
    date: "November 2024",
    url: "https://www.researchgate.net/publication/385838726_Damage_quantification_using_spectral_response_of_a_multi-degree-of-freedom_system_with_spatial_and_temporal_stiffness_variations_Application_to_shear-type_frames",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
    researchGateUrl: "https://www.researchgate.net/publication/385838726_Damage_quantification_using_spectral_response_of_a_multi-degree-of-freedom_system_with_spatial_and_temporal_stiffness_variations_Application_to_shear-type_frames",
    type: "journal",
  },
  {
    ref: "[04]",
    title: "Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings",
    cite: "Das, S. and Roy, K. (2024), \"Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings\", Mechanical Systems and Signal Processing, 216: 111454",
    date: "April 2024",
    url: "https://www.researchgate.net/publication/380323727_Frequency_response_function-based_closed-form_expression_for_multi-damage_quantification_and_its_application_on_shear_buildings",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
    researchGateUrl: "https://www.researchgate.net/publication/380323727_Frequency_response_function-based_closed-form_expression_for_multi-damage_quantification_and_its_application_on_shear_buildings",
    type: "journal",
  },
  {
    ref: "[05]",
    title: "Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2024), \"Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response: Experimental and numerical validation\", Structural Health Monitoring, 23 (6): 3883-3903",
    date: "February 2024",
    url: "https://www.researchgate.net/publication/378540088_Application_of_covariance_statistical_method_for_damage_identification_on_railway_truss_bridge_using_acceleration_response_experimental_and_numerical_validation",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
    researchGateUrl: "https://www.researchgate.net/publication/378540088_Application_of_covariance_statistical_method_for_damage_identification_on_railway_truss_bridge_using_acceleration_response_experimental_and_numerical_validation",
    type: "journal",
  },
  {
    ref: "[06]",
    title: "Using limited roving sensors to monitor bridge subjected to random traffic load",
    cite: "Faridi, M. A., Kuncham, E., Roy, K. and Singhal, V. (2024), \"Using limited roving sensors to monitor bridge subjected to random traffic load\", Journal of Civil Structural Health Monitoring, 14: 693-710",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/377299390_Using_limited_roving_sensors_to_monitor_bridge_subjected_to_random_traffic_load",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
    researchGateUrl: "https://www.researchgate.net/publication/377299390_Using_limited_roving_sensors_to_monitor_bridge_subjected_to_random_traffic_load",
    type: "journal",
  }
]

const RESEARCH_GRANTS = [
  {
    title: "Start-up Grant on an Indigenous AI-enabled low cost portable device for online remote health monitoring of civil structures",
    agency: "Incubation Center, IIT Patna (Genesis EIR by MEITY)",
    period: "2024 - 2026",
    grant: "₹ 6.00 Lakh",
    role: "Co-founder & PI",
    researchGateUrl: "https://www.researchgate.net/profile/Koushik-Roy-10",
  },
  {
    title: "Utilizing Steel Slag Aggregates in Concrete Paver Blocks",
    agency: "Hindustan Steelworks Construction Limited (HSCL)",
    period: "2025 - 2028",
    grant: "₹ 24.96 Lakh",
    role: "Principal Investigator (PI)",
    researchGateUrl: "https://www.researchgate.net/profile/Koushik-Roy-10",
  },
  {
    title: "Utilization of Mixed Waste Coal Aggregates (MWCA) in Rigid and Flexible Pavements",
    agency: "Hindustan Steelworks Construction Limited (HSCL)",
    period: "2025 - 2028",
    grant: "₹ 23.95 Lakh",
    role: "Co-Principal Investigator (Co-PI)",
    researchGateUrl: "https://www.researchgate.net/profile/Koushik-Roy-10",
  },
  {
    title: "Feasibility of stone dust as partial replacement for sand in the concrete mix and its effect on compressive strength and thermal conductivity",
    agency: "Hindustan Steelworks Construction Limited",
    period: "2024 - 2026",
    grant: "₹ 24.68 Lakh",
    role: "Principal Investigator (PI)",
    researchGateUrl: "https://www.researchgate.net/profile/Koushik-Roy-10",
  },
  {
    title: "FIST Engineering Science Level B/C/D project",
    agency: "DST - Fund for Improvement of S&T Infrastructure (FIST)",
    period: "2023 - 2027",
    grant: "₹ 96.00 Lakh",
    role: "Co-Principal Investigator (Co-PI)",
    researchGateUrl: "https://www.researchgate.net/profile/Koushik-Roy-10",
  },
  {
    title: "Performance Evaluation of Cement Concrete Pavements in Rural Roads",
    agency: "Ministry of Rural Development, Govt. of India (NRID)",
    period: "2022 - 2024",
    grant: "₹ 25.36 Lakh",
    role: "Co-Principal Investigator (Co-PI)",
    researchGateUrl: "https://www.researchgate.net/profile/Koushik-Roy-10",
  },
  {
    title: "Development of Structural Health Monitoring Technique for Existing Bridges in Bihar",
    agency: "Bihar Rajya Pul Nirman Nigam, Road Construction Dept., Govt. of Bihar",
    period: "2018 - 2019",
    grant: "₹ 2.70 Lakh",
    role: "Principal Investigator (PI)",
    researchGateUrl: "https://www.researchgate.net/profile/Koushik-Roy-10",
  },
]

const STUDENTS = [
  {
    name: "Dr. Debojyoti Paul",
    year: "2026",
    thesis: "B-WIM System-based Damage Localization and Quantification in Concrete Slab-Beam Bridges using Influence Surface: Numerical and Scale-down Experimental Investigations",
    degree: "Ph.D.",
    status: "Graduated",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
  },
  {
    name: "Dr. Sayandip Ganguly",
    year: "2025",
    thesis: "Prognosis of shear buildings through damage quantification with nonlinearity and reference-free output only response",
    degree: "Ph.D.",
    status: "Graduated",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
  },
  {
    name: "Dr. Saranika Das",
    year: "2025",
    thesis: "Multi-Damage Quantification by FRF-based Technique considering Soil-Structure Interaction and Material Uncertainty",
    degree: "Ph.D.",
    status: "Graduated",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
  },
  {
    name: "Dr. Md. Arif Faridi",
    year: "2024",
    thesis: "Health Assessment of Bridge-Type Structures Using Output-Only Dynamic Response",
    degree: "Ph.D.",
    status: "Graduated",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
  },
  {
    name: "Kumar Anjneya",
    year: "2021",
    thesis: "Structural damage identification using dynamic responses and response surface methodology",
    degree: "Ph.D.",
    status: "Graduated",
    googleScholarUrl: "https://scholar.google.com/citations?user=j3-TJncAAAAJ",
  },
]

const AWARDS = [
  {
    title: "Fellow, Indian Structural Health Monitoring Society",
    detail: "Conferred Fellowship (Fellow ID: FL 2026 003) by the Indian Structural Health Monitoring Society in recognition of contributions to SHM.",
    date: "2026",
  },
  {
    title: "Conference Chair, ISSS National Conference",
    detail: "Chaired the ISSS National Conference on MEMS, Smart Materials, Structures and Systems, IIT Kanpur, India.",
    date: "Sep 2016",
  },
  {
    title: "UKIERI Research Grant Award",
    detail: "Received prestigious grant from UK-India Education and Research Initiative to pursue research at The University of Sheffield, United Kingdom.",
    date: "Jun 2013",
  },
  {
    title: "Kizuna Project India Representative",
    detail: "Selected to represent India's 3rd batch in The Youth-Exchange Project with Asia-Oceania and North America by JICC, Japan after the Fukushima disaster.",
    date: "Feb 2013",
  },
  {
    title: "DAAD Fellowship (Master Sandwich Program)",
    detail: "Awarded DAAD fellowship to pursue thesis research at Karlsruher Institut für Technologie (KIT), Germany.",
    date: "2009 – 2010",
  },
]

const CONSULTANCY_PROJECTS = [
  {
    title: "Third-party vetting of design and drawings of elevated corridor from Kargil Chowk to Science College, Patna",
    client: "Bihar Rajya Pool Nirman Nigam Limited",
    period: "2023 onward",
    value: "₹ 37.32 Lakh",
    role: "PI / Expert Vetting",
  },
  {
    title: "Third-Party Quality Assurance & Inspection (TPQAI) under Muzaffarpur Smart City Limited",
    client: "Muzaffarpur Smart City Ltd, Bihar",
    period: "2022 onward",
    value: "₹ 161.86 Lakh",
    role: "Lead Quality Expert",
  },
  {
    title: "Structural Stability test of Skywalk Structure of Inter State Bus Terminal (ISBT), Patna",
    client: "Shapoorji Pallonji & Company Private Limited",
    period: "2023 onward",
    value: "₹ 4.60 Lakh",
    role: "Principal Investigator",
  },
  {
    title: "Structural Design Vetting of Buddha Smriti Stupa and Museum at Vaishali, Bihar",
    client: "Building Construction Department, Govt. of Bihar",
    period: "2016 onward",
    value: "₹ 17.25 Lakh",
    role: "Lead Structural Expert",
  },
  {
    title: "Investigation of Structural Safety of Bihar State Chief Minister's Residence",
    client: "Building Construction Department, Govt. of Bihar",
    period: "2016",
    value: "₹ 1.05 Lakh",
    role: "Structural Consultant",
  },
]

async function main() {
  await prisma.journeyItem.deleteMany()
  await prisma.publication.deleteMany()
  await prisma.researchGrant.deleteMany()
  await prisma.student.deleteMany()
  await prisma.award.deleteMany()
  await prisma.consultancyProject.deleteMany()
  
  for (let i = 0; i < JOURNEY.length; i++) {
    await prisma.journeyItem.create({
      data: {
        ...JOURNEY[i],
        sortOrder: i
      }
    })
  }

  for (const pub of PUBLICATIONS) {
    await prisma.publication.create({
      data: pub
    })
  }

  for (const grant of RESEARCH_GRANTS) {
    await prisma.researchGrant.create({
      data: grant
    })
  }

  for (const student of STUDENTS) {
    await prisma.student.create({
      data: student
    })
  }

  for (const award of AWARDS) {
    await prisma.award.create({
      data: award
    })
  }

  for (const project of CONSULTANCY_PROJECTS) {
    await prisma.consultancyProject.create({
      data: project
    })
  }

  console.log("Database seeded successfully with all categories!")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
