import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { Section } from "@/components/section"
import { PublicationsAccordion, type Publication } from "@/components/publications-accordion"

const DEGREES = [
  { degree: "Ph.D.", place: "IIT Kanpur" },
  { degree: "M.Tech.", place: "IIT Roorkee" },
  { degree: "B.E.", place: "BESU Shibpur" },
]

const EXPERIENCE = [
  {
    role: "Assistant Professor",
    organization: "Indian Institute of Technology, Patna",
    period: "Aug 2015 - Present",
    location: "",
    description: "",
  },
  {
    role: "Project Engineer",
    organization: "IIT Kanpur",
    period: "Oct 2014 - Apr 2015",
    location: "Greater Lucknow Area",
    description: "Working on analytical as well as simulation part of an industrial project",
  }
]

const ADMIN_DEPT = [
  {
    title: "Departmental CAD laboratory in-charge",
    period: "August 2015 – January 2019",
  },
  {
    title: "Faculty in-charge, Ranking",
    period: "January 2016 – January 2018",
  },
  {
    title: "Member of departmental purchase committee",
    period: "January 2016 – March 2018 & April 2020 – May 2022",
  },
  {
    title: "Member of departmental academic program committee",
    period: "February 2016 – February 2018 & July 2022 – Present",
  },
  {
    title: "Faculty in-Charge, Departmental Lecture Room",
    period: "August 2015 – January 2019",
  },
  {
    title: "Faculty Advisor, MTech (Civil) students",
    period: "2016 – 2018 Batch",
  },
  {
    title: "Faculty Advisor, MTech by Research Programme",
    period: "July 2017 – July 2022",
  },
  {
    title: "Faculty in-charge, Departmental Website",
    period: "January 2019 – February 2021",
  },
  {
    title: "Laboratory in-Charge, Structural Engineering Laboratory",
    period: "March 2021 – February 2023",
  },
  {
    title: "Faculty Advisor, MTech (STR) students",
    period: "2022 – 2024 Batch",
  },
  {
    title: "Faculty Advisor, BTech-MTech Dual Degree (STR) students",
    period: "2023 – 2028 Batch",
  },
  {
    title: "Associate In-charge, Centre for Earthquake Engineering Research",
    period: "May 2017 – December 2020 & January 2023 – Present",
  },
]

const ADMIN_INST = [
  {
    title: "NSS Program officer",
    period: "January 2016 – April 2017",
  },
  {
    title: "Member (sports), Wellness Center",
    period: "January 2016 – March 2017",
  },
  {
    title: "Professor in-charge of PG programs",
    period: "April 2019 – October 2021",
  },
  {
    title: "Professor in-charge of UG programs",
    period: "March 2017 – April 2019",
  },
  {
    title: "Chairman, Orientation and Induction Program committee",
    period: "2017 & 2018",
  },
  {
    title: "Senate Member, IIT Patna",
    period: "October 2017 – October 2021",
  },
  {
    title: "Member, Institute Convocation committee",
    period: "2017, 2018, 2019 & 2022",
  },
  {
    title: "Chairman, Stock verification committee (Sports Section & Physics Dept.)",
    period: "2018, 2019 & 2022",
  },
  {
    title: "Member, shortlisting committee (screening of applications), TIH IIT Patna",
    period: "August 2021",
  },
  {
    title: "Member, Convocation, Pandal Committee",
    period: "December 2022",
  },
]

const AWARDS = [
  {
    title: "Conference Chair, ISSS National Conference",
    detail: "ISSS National Conference on MEMS, Smart Materials, Structures and Systems, IIT Kanpur, India - 208016",
    date: "Sep 28–30, 2016",
  },
  {
    title: "DAAD Fellowship",
    detail: "Awarded with DAAD (Deutscher Akademischer Austausch Dienst) fellow for Master Sandwich Program (MSP 2009) to pursue master’s thesis in KIT, Germany",
    date: "Sep 2009 – May 2010",
  },
  {
    title: "Kizuna Project India Representative",
    detail: "Represented the third batch from India in The Youth-Exchange Project with Asia-Oceania and North America (Kizuna Project) after Fukushima disaster, Japan International Cooperation Center, Japan",
    date: "Feb 4–13, 2013",
  },
  {
    title: "UKIERI Research Grant",
    detail: "Received grant from UK-India Education and Research Initiative (UKIERI) to pursue research on Integrated Sensing, Monitoring and Healing for Complex Autonomous Systems, Department of Automatic Control and Systems Engineering, The University of Sheffield, United Kingdom",
    date: "Jun 10–14, 2013",
  },
  {
    title: "IIT Kanpur Travel Funding (WCEE & SUM)",
    detail: "Awarded funding from Resources and Alumni, IIT Kanpur to attend fifteenth World Conference on Earthquake Engineering (WCEE 2012) in Lisbon, Portugal, and sixth International Conference on Scalable Uncertainty Management (SUM 2012) in Marburg, Germany",
    date: "Sep 17–28, 2012",
  },
  {
    title: "Kitakyushu Foundation Travel Funding (IFAC MMM)",
    detail: "Received funding from Kitakyushu Foundation for the Advancement of Industry Science and Technology, Japan to attend International Federation of Automatic Control (IFAC) workshop on Automation in the Mining, Mineral and Metal Industries (MMM 2012) in Nagaragawa, Gifu, Japan",
    date: "Sep 10–12, 2012",
  },
  {
    title: "Session Chair, Indo-UK Workshop",
    detail: "Chaired a session in An Indo-UK student workshop at IIT Kanpur on Structural Health Monitoring and Optimization, Department of Mechanical Engineering, IIT Kanpur, U.P. –208016, India",
    date: "Oct 02–04, 2012",
  },
  {
    title: "Joint Research Program Participant",
    detail: "Participated in the Joint Research Program on Bridge Diagnosis System, Graduate School of Information, Production and Systems, Waseda University, Kitakyushu Science and Research Park, Fukuoka 803-0135, Japan",
    date: "Dec 03–27, 2011",
  },
]

const EDUCATION = [
  {
    year: "2010 - 2015",
    degree: "Doctor of Philosophy (PhD), Structural Engineering",
    place: "Indian Institute of Technology, Kanpur",
    thesis: "Vibration-based Structural Damage Localization and Characterization using Output-only Measurements",
    activities: [
      "Red one belt holder in Tae-Kwon-Do, a Korean Marshal Art",
      "DPGC (Departmental Post Graduate Committee) Student Member, Departmental of Civil Engineering (October 2010 – September 2012)",
      "Academic Senator (Post Graduate), IIT Kanpur (October 2012 – September 2013)",
    ],
  },
  {
    year: "2008 - 2010",
    degree: "Master of Technology (MTech), Structural Dynamics",
    place: "Indian Institute of Technology, Roorkee",
    activities: [
      "DAAD (Deutscher Akademischer Austausch Dienst) fellow for Master Sandwich Program (MSP–2009) in Germany (September 2009–May 2010)",
    ],
  },
  {
    year: "2007",
    degree: "B.E. Civil Engineering",
    place: "Bengal Engineering & Science University, Shibpur",
  },
]

const INTERESTS = [
  "Structural Health Monitoring",
  "Vibration Control",
  "Soil-Structure Interaction",
  "Structural Experimentation",
  "Earthquake Engineering",
  "Stochastic Structural Dynamics",
]

const RESEARCH = [
  {
    code: "RP-01",
    title: "Structural Health Monitoring of Long-Span Bridges",
    desc: "Distributed fiber-optic and accelerometer sensing for real-time fatigue and damage assessment of cable-stayed bridge decks.",
    status: "Active",
  },
  {
    code: "RP-02",
    title: "Seismic Resilience of RC Frame Structures",
    desc: "Performance-based design and shake-table validation of reinforced concrete frames in high-seismicity zones.",
    status: "Active",
  },
  {
    code: "RP-03",
    title: "Vibration-Based Damage Detection",
    desc: "Machine-learning-driven modal analysis for early identification of structural degradation in civil infrastructure.",
    status: "Ongoing",
  },
  {
    code: "RP-04",
    title: "Soil–Structure Interaction Under Cyclic Loading",
    desc: "Centrifuge modelling of pile foundations subjected to repeated lateral and seismic loads.",
    status: "Review",
  },
]

const PUBLICATIONS: Publication[] = [
  {
    ref: "[01]",
    title: "Fundamental Mode Shape and its Derivative in Structural Damage Localization",
    cite: "Roy, K. and Ray-Chaudhuri, S. (2013), \"Fundamental Mode Shape and its Derivative in Structural Damage Localization\", Journal of Sound and Vibration, 332 (21), 5584-5593",
  },
  {
    ref: "[02]",
    title: "ARX Model-based Damage Sensitive Features for Structural Damage Localization using Output-only Measurements",
    cite: "Roy, K., Bhattacharya, B. and Ray-Chaudhuri, S. (2015), \"ARX Model-based Damage Sensitive Features for Structural Damage Localization using Output-only Measurements\", Journal of Sound and Vibration, 349, 99 – 122",
  },
  {
    ref: "[03]",
    title: "Tuned-liquid-column ball-damper for seismic vibration control",
    cite: "Gur, S., Roy, K. and Mishra, S. K. (2015), \"Tuned-liquid-column ball-damper for seismic vibration control\", Structural Control and Health Monitoring, 22(11), 1325–1342",
  },
  {
    ref: "[04]",
    title: "Response of Bridges Isolated by Shape Memory-Alloy Rubber Bearing",
    cite: "Mishra, S. K., Gur, S., Roy, K. and Chakraborty, S. (2015), \"Response of Bridges Isolated by Shape Memory-Alloy Rubber Bearing\", Journal of Bridge Engineering (ASCE), 21(3) 04015071",
  },
  {
    ref: "[05]",
    title: "Stochastic Seismic Response of Buildings with Shape-Memory-Alloy Dampers",
    cite: "Gur, S., Roy, K. and Mishra, S. K. (2016), \"Stochastic Seismic Response of Buildings with Shape-Memory-Alloy Dampers\", Mechanical Systems and Signal Processing, 72-73, 642-659",
  },
  {
    ref: "[06]",
    title: "Design of re-centering spring for flat sliding base isolation system: Theory and a numerical study",
    cite: "Chakraborty, S., Roy, K. and Ray-Chaudhuri, S. (2016), \"Design of re-centering spring for flat sliding base isolation system: Theory and a numerical study\", Engineering Structures, 126, 66 – 77",
  },
  {
    ref: "[07]",
    title: "Structural Damage Identification using Mode Shape Slope and Curvature",
    cite: "Roy, K. (2017), \"Structural Damage Identification using Mode Shape Slope and Curvature\", Journal of Engineering Mechanics (ASCE), 143(9): 04017110",
  },
  {
    ref: "[08]",
    title: "Response surface-based structural damage identification using dynamic responses",
    cite: "Anjneya, K and Roy K. (2021), \"Response surface-based structural damage identification using dynamic responses\", Structures, 29, 1047-1058",
  },
  {
    ref: "[09]",
    title: "Fundamental Mode Shape-based Structural Damage Quantification via Spectral Element Method",
    cite: "Chaudhary, P. K., Anjneya, K and Roy, K. (2021), \"Fundamental Mode Shape-based Structural Damage Quantification via Spectral Element Method\", Journal of Engineering Mechanics (ASCE), 147(11): 04021091",
  },
  {
    ref: "[10]",
    title: "Acceleration time history dataset for a 3D miniature model of a shear building with structural damage",
    cite: "Anjneya, K. and Roy K. (2021), \"Acceleration time history dataset for a 3D miniature model of a shear building with structural damage\", Data in Brief, 38: 107337",
  },
  {
    ref: "[11]",
    title: "A state-of-the-art review on FRF-based structural damage detection: Development in last two decades and way forward",
    cite: "Das, S. and Roy, K. (2022), \"A state-of-the-art review on FRF-based structural damage detection: Development in last two decades and way forward\", International Journal of Structural Stability and Dynamics, 22(2): 2230001",
  },
  {
    ref: "[12]",
    title: "Seismic performance assessment of adjacent building structures connected with superelastic SMA damper and comparison with yield damper",
    cite: "Gur, S., Roy, K. and Singh, P. (2022), \"Seismic performance assessment of adjacent building structures connected with superelastic SMA damper and comparison with yield damper\", Structural Control and Health Monitoring, 29(5): e2926",
  },
  {
    ref: "[13]",
    title: "Perturbation Approach for Damage Localization in Beam-type Structures: Analytical, Experimental and Numerical Exposition",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2022), \"Perturbation Approach for Damage Localization in Beam-type Structures: Analytical, Experimental and Numerical Exposition\", Journal of Structural Integrity and Maintenance, 8(2): 111-120",
  },
  {
    ref: "[14]",
    title: "Structural damage quantification in shear buildings using mode shape slope ratio",
    cite: "Roy, K. (2023), \"Structural damage quantification in shear buildings using mode shape slope ratio\", Structural Health Monitoring, 22(4): 2346-2359",
  },
  {
    ref: "[15]",
    title: "Application of Bridge Weigh-in-Motion system in Bridge Health Monitoring: A state-of-the-art review",
    cite: "Paul, D. and Roy, K. (2023), \"Application of Bridge Weigh-in-Motion system in Bridge Health Monitoring: A state-of-the-art review\", Structural Health Monitoring, 22(6): 4194-4232",
  },
  {
    ref: "[16]",
    title: "Performance assessment of time-domain damage indicators based on output-only measurements and Poincaré map: A comparative review on nonlinear structures",
    cite: "Ganguly, S. and Roy, K. (2023), \"Performance assessment of time-domain damage indicators based on output-only measurements and Poincaré map: A comparative review on nonlinear structures\", Measurement, 216, 112847",
  },
  {
    ref: "[17]",
    title: "Propagation of material uncertainty in modal parameters and its influence in damage quantification of shear buildings",
    cite: "Das, S. and Roy, K. (2023), \"Propagation of material uncertainty in modal parameters and its influence in damage quantification of shear buildings\", Probabilistic Engineering Mechanics, 74: 103539",
  },
  {
    ref: "[18]",
    title: "Using limited roving sensors to monitor bridge subjected to random traffic load",
    cite: "Faridi, M. A., Kuncham, E., Roy, K. and Singhal, V. (2024), \"Using limited roving sensors to monitor bridge subjected to random traffic load\", Journal of Civil Structural Health Monitoring, 14, 693–710",
  },
  {
    ref: "[19]",
    title: "Damage quantification in beam-type structures using modal curvature ratio",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2024), \"Damage quantification in beam-type structures using modal curvature ratio\", Innovative Infrastructure Solutions, 9 (44)",
  },
  {
    ref: "[20]",
    title: "Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response: Experimental and numerical validation",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2024), \"Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response: Experimental and numerical validation\", Structural Health Monitoring, 23 (6), 3883-3903",
  },
  {
    ref: "[21]",
    title: "Forced Vibration Analysis using 'Elmer' FEM Package to Develop Poincaré Map and Correlation Method-based Damage Indicators",
    cite: "Ganguly, S. and Roy, K. (2024), \"Forced Vibration Analysis using 'Elmer' FEM Package to Develop Poincaré Map and Correlation Method-based Damage Indicators\", Journal of Engineering Research (Accepted)",
  },
  {
    ref: "[22]",
    title: "Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings",
    cite: "Das, S. and Roy, K. (2024), \"Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings\", Mechanical Systems and Signal Processing, 216, 111454",
  },
  {
    ref: "[23]",
    title: "Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames",
    cite: "Ganguly, S. and Roy, K. (2025), \"Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames\", Measurement, 242(E), 116109",
  },
]

const CONFERENCES = [
  {
    ref: "[01]",
    title: "Propagation of Epistemic Uncertainty in Modal Parameters and Its Influence on Damage",
    cite: "Das, S. and Roy, K. Propagation of Epistemic Uncertainty in Modal Parameters and Its Influence on Damage. 9th ECCOMAS Thematic Conference on Computational Methods in Structural Dynamics and Earthquake Engineering (COMPDYN 2023), Athens, Greece, June 12-14, 2023",
    date: "June 12–14, 2023",
  },
  {
    ref: "[02]",
    title: "Performance of a damage sensitive parameter obtained from different response-based bridge weigh-in-motion",
    cite: "Paul, D. and Roy, K. \"Performance of a damage sensitive parameter obtained from different response-based bridge weigh-in-motion\", The fourteenth international conference on Computational Structures Technology (CST-2022), Montpellier, France, August 23-25, 2022",
    date: "August 23–25, 2022",
  },
  {
    ref: "[03]",
    title: "FRF-based experimental investigation of multiple damage quantification in a shear building",
    cite: "Das, S. and Roy, K. \"FRF-based experimental investigation of multiple damage quantification in a shear building\", Socio-Technological Aspects of Seismic Disaster and its Mitigation (STASDM), IIT Guwahati, India-781039, June 23-24, 2022",
    date: "June 23–24, 2022",
  },
  {
    ref: "[04]",
    title: "Performance evaluation of a damage indicator using strain, acceleration and displacement-based bridge weigh-in-motion",
    cite: "Paul, D. and Roy, K. \"Performance evaluation of a damage indicator using strain, acceleration and displacement-based bridge weigh-in-motion\", International Conference on Advances in Mechanics, Modelling, Computing and Statistics (ICAMMCS-22), BITS Pilani, Pilani, India - 333031, March 19-21, 2022",
    date: "March 19–21, 2022",
  },
  {
    ref: "[05]",
    title: "Seismic Performance of Coupled Buildings Connected by Yield and SMA Dampers",
    cite: "Singh, P., Gur, S. and Roy, K. \"Seismic Performance of Coupled Buildings Connected by Yield and SMA Dampers\", 12th Structural engineering convention 2021 (SEC2021), MNIT Jaipur, India - 302017, December 19-22, 2021",
    date: "December 19–22, 2021",
  },
  {
    ref: "[06]",
    title: "Experimental Investigation for Quantifying Damage Considering Soil-Structure Interaction Effect on a Small-scale Model",
    cite: "Das, S., Baghel, A., Grover, D. and Roy, K. Experimental Investigation for Quantifying Damage Considering Soil-Structure Interaction Effect on a Small-scale Model. Symposium in Earthquake Engineering, December, 2020",
    date: "December 2020",
  },
  {
    ref: "[07]",
    title: "Seismic Response of Adjacent Building Structure connected with Superelastic Damper: Comparison with Yield Damper",
    cite: "Gur, S., Singh, P. and Roy, K. \"Seismic Response of Adjacent Building Structure connected with Superelastic Damper: Comparison with Yield Damper\", 11th International Conference on Structural Dynamics (EASD Procedia EURODYN 2020), Athens, Greece (Virtual Conference), 4696-4709, November 23–26, 2020",
    date: "November 23–26, 2020",
  },
  {
    ref: "[08]",
    title: "Spectral Element Method for Damage Localization in Non-Uniform Structures with Parametric Uncertainty",
    cite: "Chaudhary, P. K., Anjneya, K. and Roy, K. \"Spectral Element Method for Damage Localization in Non-Uniform Structures with Parametric Uncertainty\", 5th International Conference on Civil Structural and Transportation Engineering (ICCSTE 2020), Ottawa, Canada (Virtual Conference), 301, November 12-14, 2020",
    date: "November 12–14, 2020",
  },
  {
    ref: "[09]",
    title: "Structural Damage Quantification Using Flexibility Matrix Based Approach",
    cite: "Das, S. and Roy, K. \"Structural Damage Quantification Using Flexibility Matrix Based Approach\", 1st Online International Conference on Recent Advances in Computational and Experimental Mechanics (ICRACEM 2020), IIT Kharagpur, India – 721302, VC-20-036, September 4-6, 2020",
    date: "September 4–6, 2020",
  },
  {
    ref: "[10]",
    title: "Uncertainty Propagation in Estimated Structural Parameters owing to Univariate Uncertain Parameter using RSM and PDEM",
    cite: "Anjneya, K., Grover, D. and Roy, K. \"Uncertainty Propagation in Estimated Structural Parameters owing to Univariate Uncertain Parameter using RSM and PDEM\", 7th International Congress on Computational Mechanics and Simulation (ICCMS2019), IIT Mandi, India – 175001, December 11–13, 2019",
    date: "December 11–13, 2019",
  },
  {
    ref: "[11]",
    title: "Extraction of Damage Information in Presence of Parametric Uncertainty using Dimensionality Reduction",
    cite: "Chowdhury, P. K., Anjneya, K. and Roy, K. \"Extraction of Damage Information in Presence of Parametric Uncertainty using Dimensionality Reduction\", 29th European Safety and Reliability Conference (ESREL), Hannover, Germany, September 2019",
    date: "September 2019",
  },
  {
    ref: "[12]",
    title: "Reliability of RSM Towards Damage Identification in a Six-Storey Shear Building using Vibrational Parameters",
    cite: "Anjneya, K. and Roy, K. \"Reliability of RSM Towards Damage Identification in a Six-Storey Shear Building using Vibrational Parameters\", 2nd National Conference on Recent Advances in Civil Engineering (RACE2019), NIT Patna, India – 800005, June 6–7, 2019",
    date: "June 6–7, 2019",
  },
  {
    ref: "[13]",
    title: "Damage Identification in Beam-Type Structures using Effect of First-Order Perturbation on Eigen Properties",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. \"Damage Identification in Beam-Type Structures using Effect of First-Order Perturbation on Eigen Properties\", 16th symposium on earthquake engineering (SEE 2018), IIT Roorkee, India – 247667, December 20–22, 2018",
    date: "December 20–22, 2018",
  },
  {
    ref: "[14]",
    title: "Application of response surface-based model updating in damage identification using dynamic responses",
    cite: "Anjneya, K. and Roy, K. \"Application of response surface-based model updating in damage identification using dynamic responses\", 11th Structural engineering convention 2018 (SEC2018), Jadavpur University, India – 700032, December 19–21, 2018",
    date: "December 19–21, 2018",
  },
  {
    ref: "[15]",
    title: "A Closed-Form Solution and Comparison for the One-Dimensional Orthorhombic Quasicrystal and Crystal Plate",
    cite: "Bhardwaj, A. and Roy, K. \"A Closed-Form Solution and Comparison for the One-Dimensional Orthorhombic Quasicrystal and Crystal Plate\", 13th World Congress in Computational Mechanics, Newyork City (USA), July 22-27, 2018",
    date: "July 22–27, 2018",
  },
  {
    ref: "[16]",
    title: "Modal parameter-based Damage Identification in Cylindrical Pipe using Dynamic Response",
    cite: "Gaurav, K., Sonam, K., Singhal, V. and Roy, K. \"Modal parameter-based Damage Identification in Cylindrical Pipe using Dynamic Response\", 10th International Conference on Structural Dynamics, (Procedia Engineering EURODYN 2017), Rome, Italy, 199 (1988-1993), September 10–13, 2017",
    date: "September 10–13, 2017",
  },
  {
    ref: "[17]",
    title: "Behavior of Elevated Liquid Storage Tank under Near Fault Earthquakes",
    cite: "Roy, K., Gur, S. and Mishra, S. K. \"Behavior of Elevated Liquid Storage Tank under Near Fault Earthquakes\", 19th International Conference on Earthquake, Geological and Structural Engineering, Boston (USA), April 24 - 25, 2017",
    date: "April 24–25, 2017",
  },
  {
    ref: "[18]",
    title: "Performance of Various Vibration-Based Output-only Techniques In Structural Modal Identification",
    cite: "Roy, K. and Ray-Chaudhuri, S. \"Performance of Various Vibration-Based Output-only Techniques In Structural Modal Identification\", ISSS National Conference on MEMS, Smart Materials, Structures and Systems, IIT Kanpur, India - 208016, September 28–30, 2016",
    date: "September 28–30, 2016",
  },
  {
    ref: "[19]",
    title: "Fundamental Mode Shape to Localize Delamination in Cantilever Composite Plates using Laser Doppler Vibrometer",
    cite: "Roy, K., Agrawal, S., Bhattacharya, B. and Ray-Chaudhuri, S. \"Fundamental Mode Shape to Localize Delamination in Cantilever Composite Plates using Laser Doppler Vibrometer\", 9th Structural Engineering Convention 2014 (SEC2014), IIT Delhi, India – 110016, 2621-2633, December 22–24, 2014",
    date: "December 22–24, 2014",
  },
  {
    ref: "[20]",
    title: "Fundamental Mode Shape in Structural Damage Quantification",
    cite: "Roy, K. and Ray-Chaudhuri, S. \"Fundamental Mode Shape in Structural Damage Quantification\", 15th symposium on earthquake engineering (SEE 2014), IIT Roorkee, India – 247667, December 11–13, 2014",
    date: "December 11–13, 2014",
  },
  {
    ref: "[21]",
    title: "A novel bridge structure damage diagnosis algorithm based on statistical pattern recognition",
    cite: "Xiao, H., Lu, C., Ogai, H. and Roy, K. \"A novel bridge structure damage diagnosis algorithm based on statistical pattern recognition\", SICE annual conference (IEEE), Hokkaido University, Sapporo, Japan, 775-780, September 9-12, 2014",
    date: "September 9–12, 2014",
  },
  {
    ref: "[22]",
    title: "Damage Characterization in Frame Structures Using Output-Only Modal and Feature-Based Techniques",
    cite: "Panikkaveettil, H., Roy, K. and Ray-Chaudhuri, S., \"Damage Characterization in Frame Structures Using Output-Only Modal and Feature-Based Techniques\", International federation of automation and control (IFAC), Advances in control and optimization of dynamical systems (ACODS 2014), IIT Kanpur, India - 208016, 3 (1), 973-980, March 13–15, 2014",
    date: "March 13–15, 2014",
  },
  {
    ref: "[23]",
    title: "Effect of Soil-Structure Interaction on Identified Modal Parameters and Damage Localization",
    cite: "Roy K., Panikkaveettil, H., Ray-Chaudhuri, S and Raychowdhury, P., \"Effect of Soil-Structure Interaction on Identified Modal Parameters and Damage Localization\", 15th world conference on earthquake engineering (WCEE 2012), Lisbon, Portugal, September 24–28, 2012",
    date: "September 24–28, 2012",
  },
  {
    ref: "[24]",
    title: "On development of a new seismic base isolation system",
    cite: "Chakraborty, S., Roy, K., Chinta, C., and Ray-Chaudhuri, S., \"On development of a new seismic base isolation system\", 6th international conference on scalable uncertainty management (SUM 2012), Marburg, Germany, 574-581, September 17–19, 2012",
    date: "September 17–19, 2012",
  },
  {
    ref: "[25]",
    title: "Damage Detection of Bridge Using Wireless Sensors",
    cite: "Roy, K., Ogai, H., Bhattacharya, B., Ray-Chaudhuri, S. and Qin, J., \"Damage Detection of Bridge Using Wireless Sensors\", International federation of automation and control (IFAC), Mining, Mineral and Metal Industries (MMM 2012), Nagaragawa, Gifu, Japan, 107-111, September 10–12, 2012",
    date: "September 10–12, 2012",
  },
  {
    ref: "[26]",
    title: "Comparative Study of Various Vibration-based Structural Damage Detection Techniques",
    cite: "Roy, K. and Ray-Chaudhuri, S., \"Comparative Study of Various Vibration-based Structural Damage Detection Techniques\", Asian pacific symposium on structural Reliability and its applications (APSSRA 2012), NUS, Singapore, March 23–25, 2012",
    date: "March 23–25, 2012",
  },
  {
    ref: "[27]",
    title: "Autoregressive Model for Structural Condition Assessment in Presence of Parametric Uncertainty",
    cite: "Roy, K. and Ray-Chaudhuri, S., \"Autoregressive Model for Structural Condition Assessment in Presence of Parametric Uncertainty\", International symposium on engineering under uncertainty: safety assessment and management (ISEUSAM 2012), BESU, Shibpur, India - 711103, 1061-1072, January 3–5, 2012",
    date: "January 3–5, 2012",
  },
]

const STUDENTS = [
  { name: "K. Osei", role: "Ph.D. Candidate", topic: "Coupled shear wall systems" },
  { name: "T. Nguyen", role: "Ph.D. Candidate", topic: "Deep learning for SHM" },
  { name: "A. Roy", role: "Postdoctoral Fellow", topic: "Bridge instrumentation" },
  { name: "L. Fernández", role: "M.Tech. Researcher", topic: "Pile dynamics" },
  { name: "J. Mbeki", role: "M.Tech. Researcher", topic: "Modal analysis" },
  { name: "H. Sato", role: "Ph.D. Candidate", topic: "Seismic retrofitting" },
]

const GALLERY = [
  { src: "/gallery-bridge.png", alt: "Cable-stayed bridge under construction", cap: "Fig. 01 — Cable-stayed deck" },
  { src: "/gallery-lab.png", alt: "Structural testing laboratory", cap: "Fig. 02 — Beam load testing" },
  { src: "/gallery-rebar.png", alt: "Steel reinforcement grid", cap: "Fig. 03 — Reinforcement" },
  { src: "/gallery-sensor.png", alt: "Bridge monitoring sensors", cap: "Fig. 04 — SHM sensors" },
  { src: "/gallery-shake.png", alt: "Shake table seismic test", cap: "Fig. 05 — Shake table test" },
  { src: "/gallery-blueprint.png", alt: "Structural blueprint drawing", cap: "Fig. 06 — Frame elevation" },
]

const STATUS_STYLES: Record<string, string> = {
  Active: "bg-green/15 text-green",
  Ongoing: "bg-blue/15 text-blue",
  Review: "bg-orange/15 text-orange",
}

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground relative">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,oklch(0.93_0.04_252)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,oklch(0.94_0.05_58)_0%,transparent_45%),linear-gradient(to_bottom,oklch(0.985_0.012_85),oklch(0.97_0.02_252))]" />

      <div className="mx-auto max-w-6xl border-x border-border bg-card/75 shadow-[0_0_80px_oklch(0.36_0.13_252/0.06)] backdrop-blur-sm">
        <SiteNav />

        {/* Masthead */}
        <header id="home" className="scroll-mt-14 border-b border-border">
          <div className="flex flex-col justify-between gap-2 border-b border-primary/15 bg-primary px-6 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-primary-foreground sm:flex-row sm:px-10">
            <span>Dept. of Civil &amp; Environmental Engineering</span>
            <span>IIT Patna / Bihta, Bihar 801106</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Hero text */}
            <div className="border-border bg-gradient-to-br from-secondary/30 via-transparent to-orange/5 lg:col-span-2 lg:border-r">
              <div className="flex h-full flex-col justify-between gap-10 px-6 py-10 sm:px-10 sm:py-14">
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                    Professor of Civil Engineering
                  </p>
                  <p className="mt-6 font-serif text-3xl font-medium tracking-tight text-primary sm:text-4xl">
                    Dr. Koushik Roy
                  </p>
                  <h1 className="mt-4 text-balance font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
                    Structural Dynamics &amp;{" "}
                    <span className="text-orange">SHM Lab</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                    Advancing the safety and resilience of civil infrastructure through
                    structural health monitoring, seismic engineering, and the dynamics of
                    the built environment.
                  </p>
                  <dl className="mt-10 border-t border-border">
                    {DEGREES.map((d) => (
                      <div
                        key={d.place}
                        className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between"
                      >
                        <dt className="font-serif text-base font-medium tracking-tight text-primary">
                          {d.degree}
                        </dt>
                        <dd className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                          {d.place}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <dl className="grid grid-cols-3 border-t border-border">
                  {[
                    ["12", "Years Active"],
                    ["48", "Publications"],
                    ["09", "Ph.D. Scholars"],
                  ].map(([n, l], i) => (
                    <div
                      key={l}
                      className={`py-6 ${i < 2 ? "border-r border-border" : ""}`}
                    >
                      <dt className="font-serif text-3xl font-medium tabular-nums text-primary">{n}</dt>
                      <dd className="mt-2 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                        {l}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            {/* Portrait */}
            <div className="bg-gradient-to-b from-secondary/20 to-transparent p-6 sm:p-10 lg:flex lg:items-center">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-primary/20 shadow-[0_12px_40px_oklch(0.36_0.13_252/0.15)]">
                <Image
                  src="/professor-portrait.png"
                  alt="Portrait of Dr. Koushik Roy"
                  fill
                  priority
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover saturate-[0.85] contrast-[1.05]"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Experience */}
        <Section id="experience" index="01" title="Experience">
          <ul>
            {EXPERIENCE.map((exp, i) => (
              <li
                key={i}
                className={`group relative grid grid-cols-1 sm:grid-cols-[10rem_1fr] transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.01] hover:bg-secondary/50 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.08)] ${
                  i < EXPERIENCE.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="border-border px-6 py-6 sm:border-r sm:px-10 transition-colors duration-500 group-hover:border-transparent">
                  <span className="font-mono text-sm uppercase tracking-widest text-orange">
                    {exp.period}
                  </span>
                </div>
                <div className="px-6 py-6 sm:px-10">
                  <p className="font-serif text-xl font-medium tracking-tight text-primary">{exp.role}</p>
                  <p className="mt-1 text-base text-foreground">{exp.organization}</p>
                  {exp.location && (
                    <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
                  )}
                  {exp.description && (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Administrative Experience */}
        <Section id="administrative-experience" index="02" title="Administrative Experience">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-b border-border md:border-b-0 md:border-r">
              <h3 className="border-b border-border bg-secondary/20 px-6 py-4 font-mono text-[0.7rem] uppercase tracking-widest text-primary sm:px-10">
                Departmental Level
              </h3>
              <ul className="divide-y divide-border">
                {ADMIN_DEPT.map((item, idx) => (
                  <li
                    key={idx}
                    className="group relative px-6 py-5 sm:px-10 transition-all duration-500 hover:bg-secondary/40 hover:backdrop-blur-md"
                  >
                    <p className="font-serif text-base font-medium tracking-tight text-primary leading-snug">
                      {item.title}
                    </p>
                    <p className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-orange">
                      {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="border-b border-border bg-secondary/20 px-6 py-4 font-mono text-[0.7rem] uppercase tracking-widest text-primary sm:px-10">
                Institute Level
              </h3>
              <ul className="divide-y divide-border">
                {ADMIN_INST.map((item, idx) => (
                  <li
                    key={idx}
                    className="group relative px-6 py-5 sm:px-10 transition-all duration-500 hover:bg-secondary/40 hover:backdrop-blur-md"
                  >
                    <p className="font-serif text-base font-medium tracking-tight text-primary leading-snug">
                      {item.title}
                    </p>
                    <p className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-orange">
                      {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Awards & Honours */}
        <Section id="awards-honours" index="03" title="Awards & Honours">
          <ul>
            {AWARDS.map((award, i) => (
              <li
                key={i}
                className={`group relative grid grid-cols-1 sm:grid-cols-[10rem_1fr] transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.01] hover:bg-secondary/50 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.08)] ${
                  i < AWARDS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="border-border px-6 py-6 font-mono text-sm uppercase tracking-widest text-orange sm:border-r sm:px-10 transition-colors duration-500 group-hover:border-transparent">
                  {award.date}
                </span>
                <div className="px-6 py-6 sm:px-10">
                  <p className="font-serif text-xl font-medium tracking-tight text-primary">{award.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{award.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Education */}
        <Section id="education" index="04" title="Education">
          <ul>
            {EDUCATION.map((e, i) => (
              <li
                key={e.year}
                className={`group relative grid grid-cols-1 sm:grid-cols-[10rem_1fr] transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.01] hover:bg-secondary/50 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.08)] ${
                  i < EDUCATION.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="border-border px-6 py-6 font-mono text-sm uppercase tracking-widest text-orange sm:border-r sm:px-10 transition-colors duration-500 group-hover:border-transparent">
                  {e.year}
                </span>
                <div className="px-6 py-6 sm:px-10">
                  <p className="font-serif text-xl font-medium tracking-tight text-primary">{e.degree}</p>
                  <p className="mt-1 text-base text-foreground">{e.place}</p>
                  {e.thesis && (
                    <p className="mt-4 text-sm text-muted-foreground">
                      <strong className="font-medium text-foreground">Thesis:</strong> {e.thesis}
                    </p>
                  )}
                  {e.activities && e.activities.length > 0 && (
                    <div className="mt-3 text-sm text-muted-foreground">
                      <strong className="font-medium text-foreground">Activities & Societies:</strong>
                      <ul className="mt-2 ml-4 list-outside list-disc space-y-1">
                        {e.activities.map((act, j) => (
                          <li key={j}>{act}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Research */}
        <Section id="research" index="05" title="Research">
          {/* Research Interests — minimalist wireframe grid */}
          <div className="border-b border-border">
            <p className="border-b border-border bg-secondary/30 px-6 py-4 font-mono text-[0.7rem] uppercase tracking-widest text-primary sm:px-10">
              Research Interests
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {INTERESTS.map((interest, i) => (
                <div
                  key={interest}
                  className={[
                    "group relative flex items-center justify-between gap-4 px-8 py-16 transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:bg-secondary/50 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.08)]",
                    "border-border border-b",
                    i % 2 === 0 ? "sm:border-r" : "sm:border-r-0",
                    (i + 1) % 3 === 0 ? "lg:border-r-0" : "lg:border-r",
                    "group-hover:border-transparent"
                  ].join(" ")}
                >
                  <h3 className="font-serif text-xl font-medium tracking-tight text-balance text-primary sm:text-2xl">
                    {interest}
                  </h3>
                  <ArrowRight
                    className="size-5 shrink-0 -translate-x-2 text-orange opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Research projects */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {RESEARCH.map((r, i) => (
              <article
                key={r.code}
                className={[
                  "group relative flex flex-col gap-4 px-6 py-8 sm:px-10 transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.01] hover:bg-secondary/50 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.08)]",
                  "border-border",
                  i % 2 === 0 ? "md:border-r" : "",
                  i < RESEARCH.length - 2 ? "border-b" : "",
                  i === RESEARCH.length - 2 ? "border-b md:border-b-0" : "",
                  "hover:border-transparent"
                ].join(" ")}
              >
                <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-widest">
                  <span className="text-primary">{r.code}</span>
                  <span className={`rounded-sm px-2 py-0.5 ${STATUS_STYLES[r.status] ?? "bg-muted text-muted-foreground"}`}>
                    {r.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium leading-snug tracking-tight text-balance">
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Publications */}
        <Section id="publications" index="06" title="Publications">
          <div className="border-b border-border bg-secondary/30 px-6 py-4 font-mono text-[0.7rem] uppercase tracking-widest text-primary sm:px-10">
            Journal Publications
          </div>
          <PublicationsAccordion items={PUBLICATIONS} />

          <div className="border-b border-t border-border bg-secondary/30 px-6 py-4 font-mono text-[0.7rem] uppercase tracking-widest text-primary sm:px-10">
            Conference Publications
          </div>
          <PublicationsAccordion items={CONFERENCES} trigger="hover" />
        </Section>

        {/* Students */}
        <Section id="students" index="07" title="Students">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {STUDENTS.map((s, i) => (
              <article
                key={s.name}
                className={[
                  "group relative px-6 py-8 sm:px-10 border-border transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:bg-secondary/50 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.08)]",
                  "border-b hover:border-transparent",
                  i % 2 === 0 ? "sm:border-r" : "sm:border-r-0",
                  (i + 1) % 3 === 0 ? "lg:border-r-0" : "lg:border-r",
                ].join(" ")}
              >
                <p className="font-serif text-xl font-medium tracking-tight text-primary">{s.name}</p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-widest text-orange">
                  {s.role}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{s.topic}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Gallery */}
        <Section id="gallery" index="08" title="Gallery">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g, i) => (
              <figure
                key={g.src}
                className={[
                  "group relative border-border transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.02] hover:bg-secondary/50 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.08)]",
                  "border-b hover:border-transparent",
                  i % 2 === 0 ? "sm:border-r" : "sm:border-r-0",
                  (i + 1) % 3 === 0 ? "lg:border-r-0" : "lg:border-r",
                ].join(" ")}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={g.src || "/placeholder.svg"}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover saturate-[0.7] transition-all duration-500 group-hover:saturate-100"
                  />
                </div>
                <figcaption className="border-t border-border px-6 py-4 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                  {g.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="flex flex-col justify-between gap-2 border-t border-primary/15 bg-primary px-6 py-8 font-mono text-[0.7rem] uppercase tracking-widest text-primary-foreground sm:flex-row sm:px-10">
          <span>&copy; {new Date().getFullYear()} Dr. Koushik Roy</span>
          <span>Structural Dynamics &amp; SHM Lab</span>
        </footer>
      </div>
    </div>
  )
}
