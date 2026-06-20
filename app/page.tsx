import Image from "next/image"
import { ArrowRight, GraduationCap, BookOpen, School, Mail, Phone, MapPin } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { Section } from "@/components/section"
import { PublicationsAccordion, type Publication } from "@/components/publications-accordion"
import { PublicationsSearch } from "@/components/publications-search"
import { ResearchItems } from "@/components/research-items"
import { AnimatedCounter } from "@/components/animated-counter"
import { AmbientBackground } from "@/components/ambient-background"

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const DEGREES = [
  { degree: "Ph.D.", place: "IIT Kanpur" },
  { degree: "M.Tech.", place: "IIT Roorkee" },
  { degree: "B.E.", place: "BESU Shibpur" },
]

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
    activities: [
      "Red one belt holder in Tae-Kwon-Do, a Korean Marshal Art",
      "DPGC (Departmental Post Graduate Committee) Student Member, Departmental of Civil Engineering (October 2010 – September 2012)",
      "Academic Senator (Post Graduate), IIT Kanpur (October 2012 – September 2013)",
    ],
  },
  {
    type: "academic",
    title: "Master of Technology (MTech), Structural Dynamics",
    institution: "Indian Institute of Technology, Roorkee",
    period: "2008 - 2010",
    logo: "/images/education/iit_roorkee.svg",
    activities: [
      "DAAD (Deutscher Akademischer Austausch Dienst) fellow for Master Sandwich Program (MSP–2009) in Germany (September 2009–May 2010)",
    ],
  },
  {
    type: "academic",
    title: "B.E. Civil Engineering",
    institution: "Bengal Engineering & Science University, Shibpur",
    period: "2007",
    logo: "/images/education/iiest_shibpur.png",
  },
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



const INTERESTS = [
  "Structural Health Monitoring",
  "Vibration Control",
  "Soil-Structure Interaction",
  "Structural Experimentation",
  "Earthquake Engineering",
  "Stochastic Structural Dynamics",
]




const PUBLICATIONS: Publication[] = [
  {
    ref: "[01]",
    title: "Localization and Quantification of Damage along the Transverse Direction of Bridges Using Bridge Weigh-in-Motion Systems",
    cite: "Paul, D. and Roy, K. (2026), \"Localization and Quantification of Damage along the Transverse Direction of Bridges Using Bridge Weigh-in-Motion Systems\", Journal of Bridge Engineering",
    date: "May 2026",
    url: "https://www.researchgate.net/publication/404328330_Localization_and_Quantification_of_Damage_along_the_Transverse_Direction_of_Bridges_Using_Bridge_Weigh-in-Motion_Systems",
  },
  {
    ref: "[02]",
    title: "Baseline-free localization and quantification of structural damage using spectral response",
    cite: "Ganguly, S. and Roy, K. (2025), \"Baseline-free localization and quantification of structural damage using spectral response\", Applied Mathematical Modelling",
    date: "June 2025",
    url: "https://www.researchgate.net/publication/388290357_Baseline-free_localization_and_quantification_of_structural_damage_using_spectral_response",
  },
  {
    ref: "[03]",
    title: "Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames",
    cite: "Ganguly, S. and Roy, K. (2025), \"Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames\", Applied Mathematical Modelling",
    date: "November 2024",
    url: "https://www.researchgate.net/publication/385838726_Damage_quantification_using_spectral_response_of_a_multi-degree-of-freedom_system_with_spatial_and_temporal_stiffness_variations_Application_to_shear-type_frames",
  },
  {
    ref: "[04]",
    title: "Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings",
    cite: "Das, S. and Roy, K. (2024), \"Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings\", Journal of Sound and Vibration",
    date: "April 2024",
    url: "https://www.researchgate.net/publication/380323727_Frequency_response_function-based_closed-form_expression_for_multi-damage_quantification_and_its_application_on_shear_buildings",
  },
  {
    ref: "[05]",
    title: "Forced Vibration Analysis using 'Elmer' FEM Package to Develop Poincaré Map and Correlation Method-based Damage Indicators",
    cite: "Ganguly, S. and Roy, K. (2024), \"Forced Vibration Analysis using 'Elmer' FEM Package to Develop Poincaré Map and Correlation Method-based Damage Indicators\", Journal of Sound and Vibration",
    date: "March 2024",
    url: "https://www.researchgate.net/publication/378948831_Nonlinear_Forced_Vibration_Analysis_using_'Elmer'_FEM_Package_to_Develop_Poincare_Map_and_Correlation_Method-based_Damage_Indicators",
  },
  {
    ref: "[06]",
    title: "Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response: Experimental and numerical validation",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2024), \"Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response: Experimental and numerical validation\", Structural Control and Health Monitoring",
    date: "February 2024",
    url: "https://www.researchgate.net/publication/378540088_Application_of_covariance_statistical_method_for_damage_identification_on_railway_truss_bridge_using_acceleration_response_experimental_and_numerical_validation",
  },
  {
    ref: "[07]",
    title: "Using limited roving sensors to monitor bridge subjected to random traffic load",
    cite: "Faridi, M. A., Kuncham, E., Roy, K. and Singhal, V. (2024), \"Using limited roving sensors to monitor bridge subjected to random traffic load\", Structural Health Monitoring",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/377299390_Using_limited_roving_sensors_to_monitor_bridge_subjected_to_random_traffic_load",
  },
  {
    ref: "[08]",
    title: "Damage quantification in beam-type structures using modal curvature ratio",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2024), \"Damage quantification in beam-type structures using modal curvature ratio\", Journal of Civil Structural Health Monitoring",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/377643774_Damage_quantification_in_beam-type_structures_using_modal_curvature_ratio",
  },
  {
    ref: "[09]",
    title: "Propagation of material uncertainty in modal parameters and its influence in damage quantification of shear buildings",
    cite: "Das, S. and Roy, K. (2023), \"Propagation of material uncertainty in modal parameters and its influence in damage quantification of shear buildings\", Applied Mathematical Modelling",
    date: "September 2023",
    url: "https://www.researchgate.net/publication/374244205_Propagation_of_material_uncertainty_in_modal_parameters_and_its_influence_in_damage_quantification_of_shear_buildings",
  },
  {
    ref: "[10]",
    title: "Perturbation Approach for Damage Localization in Beam-type Structures: Analytical, Experimental and Numerical Exposition",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2022), \"Perturbation Approach for Damage Localization in Beam-type Structures: Analytical, Experimental and Numerical Exposition\", Structural Control and Health Monitoring",
    date: "April 2023",
    url: "https://www.researchgate.net/publication/370572064_Perturbation_approach_for_damage_localization_in_beam-type_structures_analytical_experimental_and_numerical_exposition",
  },
  {
    ref: "[11]",
    title: "Performance assessment of time-domain damage indicators based on output-only measurements and Poincaré map: A comparative review on nonlinear structures",
    cite: "Ganguly, S. and Roy, K. (2023), \"Performance assessment of time-domain damage indicators based on output-only measurements and Poincaré map: A comparative review on nonlinear structures\", Nonlinear Dynamics",
    date: "April 2023",
    url: "https://www.researchgate.net/publication/370079622_Performance_assessment_of_time-domain_damage_indicators_based_on_output-only_measurement_and_Poincare_map_A_comparative_review_on_nonlinear_structures",
  },
  {
    ref: "[12]",
    title: "Application of Bridge Weigh-in-Motion system in Bridge Health Monitoring: A state-of-the-art review",
    cite: "Paul, D. and Roy, K. (2023), \"Application of Bridge Weigh-in-Motion system in Bridge Health Monitoring: A state-of-the-art review\", Archive of Applied Mechanics",
    date: "March 2023",
    url: "https://www.researchgate.net/publication/368991650_Application_of_bridge_weigh-in-motion_system_in_bridge_health_monitoring_a_state-of-the-art_review",
  },
  {
    ref: "[13]",
    title: "Structural damage quantification in shear buildings using mode shape slope ratio",
    cite: "Roy, K. (2023), \"Structural damage quantification in shear buildings using mode shape slope ratio\", Journal of Sound and Vibration",
    date: "September 2022",
    url: "https://www.researchgate.net/publication/363682218_Structural_damage_quantification_in_shear_buildings_using_mode_shape_slope_ratio",
  },
  {
    ref: "[14]",
    title: "Seismic performance assessment of adjacent building structures connected with superelastic SMA damper and comparison with yield damper",
    cite: "Gur, S., Roy, K. and Singh, P. (2022), \"Seismic performance assessment of adjacent building structures connected with superelastic SMA damper and comparison with yield damper\", Journal of Building Engineering",
    date: "January 2022",
    url: "https://www.researchgate.net/publication/357931121_Seismic_performance_assessment_of_adjacent_building_structures_connected_with_superelastic_shape_memory_alloy_damper_and_comparison_with_yield_damper",
  },
  {
    ref: "[15]",
    title: "A state-of-the-art review on FRF-based structural damage detection: Development in last two decades and way forward",
    cite: "Das, S. and Roy, K. (2022), \"A state-of-the-art review on FRF-based structural damage detection: Development in last two decades and way forward\", Journal of Civil Structural Health Monitoring",
    date: "December 2021",
    url: "https://www.researchgate.net/publication/356923485_A_State-of-the-Art_Review_on_FRF-Based_Structural_Damage_Detection_Development_in_Last_Two_Decades_and_Way_Forward",
  },
  {
    ref: "[16]",
    title: "Acceleration time history dataset for a 3D miniature model of a shear building with structural damage",
    cite: "Anjneya, K. and Roy K. (2021), \"Acceleration time history dataset for a 3D miniature model of a shear building with structural damage\", Mechanical Systems and Signal Processing",
    date: "September 2021",
    url: "https://www.researchgate.net/publication/354651428_Acceleration_time_history_dataset_for_a_3D_miniature_model_of_a_shear_building_with_structural_damage",
  },
  {
    ref: "[17]",
    title: "Fundamental Mode Shape-based Structural Damage Quantification via Spectral Element Method",
    cite: "Chaudhary, P. K., Anjneya, K and Roy, K. (2021), \"Fundamental Mode Shape-based Structural Damage Quantification via Spectral Element Method\", Journal of Sound and Vibration",
    date: "August 2021",
    url: "https://www.researchgate.net/publication/354142994_Fundamental_Mode_Shape-Based_Structural_Damage_Quantification_Using_Spectral_Element_Method",
  },
  {
    ref: "[18]",
    title: "Response surface-based structural damage identification using dynamic responses",
    cite: "Anjneya, K and Roy K. (2021), \"Response surface-based structural damage identification using dynamic responses\", Journal of Sound and Vibration",
    date: "February 2021",
    url: "https://www.researchgate.net/publication/347442567_Response_surface-based_structural_damage_identification_using_dynamic_responses",
  },
  {
    ref: "[19]",
    title: "Monitoring the health of the structure",
    cite: "Anjneya, K. and Roy, K. (2020), \"Monitoring the health of the structure\", Book Chapter",
    date: "June 2020",
    url: "https://www.researchgate.net/publication/344252926_Monitoring_the_health_of_the_structure",
  },
  {
    ref: "[20]",
    title: "Structural Damage Identification using Mode Shape Slope and Curvature",
    cite: "Roy, K. (2017), \"Structural Damage Identification using Mode Shape Slope and Curvature\", Journal of Sound and Vibration",
    date: "September 2017",
    url: "https://www.researchgate.net/publication/318777679_Structural_Damage_Identification_Using_Mode_Shape_Slope_and_Curvature",
  },
  {
    ref: "[21]",
    title: "Design of re-centering spring for flat sliding base isolation system: Theory and a numerical study",
    cite: "Chakraborty, S., Roy, K. and Ray-Chaudhuri, S. (2016), \"Design of re-centering spring for flat sliding base isolation system: Theory and a numerical study\", Journal of Sound and Vibration",
    date: "November 2016",
    url: "https://www.researchgate.net/publication/306416896_Design_of_re-centering_spring_for_flat_sliding_base_isolation_system_Theory_and_a_numerical_study",
  },
  {
    ref: "[22]",
    title: "Stochastic Seismic Response of Buildings with Shape-Memory-Alloy Dampers",
    cite: "Gur, S., Roy, K. and Mishra, S. K. (2016), \"Stochastic Seismic Response of Buildings with Shape-Memory-Alloy Dampers\", Structural Control and Health Monitoring",
    date: "November 2016",
    url: "https://www.researchgate.net/publication/306416896_Design_of_re-centering_spring_for_flat_sliding_base_isolation_system_Theory_and_a_numerical_study",
  },
  {
    ref: "[23]",
    title: "ARX Model-based Damage Sensitive Features for Structural Damage Localization using Output-only Measurements",
    cite: "Roy, K., Bhattacharya, B. and Ray-Chaudhuri, S. (2015), \"ARX Model-based Damage Sensitive Features for Structural Damage Localization using Output-only Measurements\", Journal of Sound and Vibration",
    date: "August 2015",
  },
  {
    ref: "[24]",
    title: "Tuned-liquid-column ball-damper for seismic vibration control",
    cite: "Gur, S., Roy, K. and Mishra, S. K. (2015), \"Tuned-liquid-column ball-damper for seismic vibration control\", Structural Control and Health Monitoring",
    date: "July 2015",
  },
  {
    ref: "[25]",
    title: "Response of Bridges Isolated by Shape Memory-Alloy Rubber Bearing",
    cite: "Mishra, S. K., Gur, S., Roy, K. and Chakraborty, S. (2015), \"Response of Bridges Isolated by Shape Memory-Alloy Rubber Bearing\", Journal of Bridge Engineering",
    date: "June 2015",
  },
  {
    ref: "[26]",
    title: "Fundamental Mode Shape and its Derivative in Structural Damage Localization",
    cite: "Roy, K. and Ray-Chaudhuri, S. (2013), \"Fundamental Mode Shape and its Derivative in Structural Damage Localization\", Journal of Sound and Vibration",
    date: "September 2013",
  },
]

const CONFERENCES = [
  {
    ref: "[01]",
    title: "Effect of Temperature on Bridge Health Monitoring Using Bayesian Bridge Weigh-in-Motion",
    cite: "Paul, D. and Roy, K. (2025), \"Effect of Temperature on Bridge Health Monitoring Using Bayesian Bridge Weigh-in-Motion\", September 2025",
    date: "September 2025",
    url: "https://www.researchgate.net/publication/396698719_Effect_of_Temperature_on_Bridge_Health_Monitoring_Using_Bayesian_Bridge_Weigh-in-Motion",
  },
  {
    ref: "[02]",
    title: "Numerical investigation on the influence of soil-structure interaction in damage quantification of shear buildings",
    cite: "Das, S., Gautam, P. and Roy, K. \"Numerical investigation on the influence of soil-structure interaction in damage quantification of shear buildings\", 8th International Conference on Recent Advances in Geotechnical Earthquake Engineering and Soil Dynamics (8ICRAGEE), IIT Guwahati, India-781039, December 11-14, 2024",
    date: "December 11-14, 2024",
    url: "https://www.researchgate.net/publication/394766456_Numerical_Investigation_on_the_Influence_of_Soil-Structure_Interaction_in_Damage_Quantification_of_Shear_Buildings",
  },
  {
    ref: "[03]",
    title: "Reliability of Estimated Damage Quantity in Presence of Material and Measurement Uncertainty",
    cite: "Ganguly, S. and Roy, K. (2024), \"Reliability of Estimated Damage Quantity in Presence of Material and Measurement Uncertainty\", Procedia Structural Integrity",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/385676375_Reliability_of_Estimated_Damage_Quantity_in_Presence_of_Material_and_Measurement_Uncertainty",
  },
  {
    ref: "[04]",
    title: "Uncertainty propagation in modal parameters and its influence on damage quantification in shear buildings using fundamental mode",
    cite: "Das, S. and Roy, K. \"Uncertainty propagation in modal parameters and its influence on damage quantification in shear buildings using fundamental mode\", 13th Structural Engineering Convention (SEC 2023), VNIT Nagpur, India-440010, December 7-9, 2023",
    date: "December 7-9, 2023",
  },
  {
    ref: "[05]",
    title: "Propagation of Epistemic Uncertainty in Modal Parameters and Its Influence on Damage",
    cite: "Das, S. and Roy, K. Propagation of Epistemic Uncertainty in Modal Parameters and Its Influence on Damage. 9th ECCOMAS Thematic Conference on Computational Methods in Structural Dynamics and Earthquake Engineering (COMPDYN 2023), Athens, Greece, June 12-14, 2023",
    date: "June 12–14, 2023",
    url: "https://www.researchgate.net/publication/375037343_PROPAGATION_OF_EPISTEMIC_UNCERTAINTY_IN_MODAL_PARAMETERS_AND_ITS_INFLUENCE_ON_DAMAGE",
  },
  {
    ref: "[06]",
    title: "Experimental investigation for quantifying damage considering soil-structure interaction effect on a smallscale model",
    cite: "Das, S., Baghel, A., Grover, D. and Roy, K. \"Experimental investigation for quantifying damage considering soil-structure interaction effect on a smallscale model\", 17th Symposium on Earthquake Engineering (17SEE), IIT Roorkee, India-247667, November 14-17, 2022",
    date: "November 14-17, 2022",
  },
  {
    ref: "[07]",
    title: "A novel damage indicator evolved from the Poincaré map for localization of seismic damage in a structure with nonlinear breathing crack",
    cite: "Ganguly, S. and Roy, K. \"A novel damage indicator evolved from the Poincaré map for localization of seismic damage in a structure with nonlinear breathing crack\", 17th Symposium on Earthquake Engineering (17SEE), IIT Roorkee, India-247667, November 14-17, 2022",
    date: "November 14-17, 2022",
    url: "https://www.researchgate.net/publication/372715395_A_Novel_Damage_Indicator_Evolved_from_the_Poincare_Map_for_Localization_of_Seismic_Damage_in_a_Structure_with_Nonlinear_Breathing_Crack",
  },
  {
    ref: "[08]",
    title: "Performance of a damage sensitive parameter obtained from different response-based bridge weigh-in-motion",
    cite: "Paul, D. and Roy, K. \"Performance of a damage sensitive parameter obtained from different response-based bridge weigh-in-motion\", The fourteenth international conference on Computational Structures Technology (CST-2022), Montpellier, France, August 23-25, 2022",
    date: "August 23–25, 2022",
    url: "https://www.researchgate.net/publication/378240348_Performance_of_a_damage_sensitive_parameter_obtained_from_different_response-based_bridge_weigh-in-motion",
  },
  {
    ref: "[09]",
    title: "FRF-based experimental investigation of multiple damage quantification in a shear building",
    cite: "Das, S. and Roy, K. \"FRF-based experimental investigation of multiple damage quantification in a shear building\", Socio-Technological Aspects of Seismic Disaster and its Mitigation (STASDM), IIT Guwahati, India-781039, June 23-24, 2022",
    date: "June 23–24, 2022",
  },
  {
    ref: "[10]",
    title: "Performance evaluation of a damage indicator using strain, acceleration and displacement-based bridge weigh-in-motion",
    cite: "Paul, D. and Roy, K. \"Performance evaluation of a damage indicator using strain, acceleration and displacement-based bridge weigh-in-motion\", International Conference on Advances in Mechanics, Modelling, Computing and Statistics (ICAMMCS-2022), BITS Pilani, Pilani, India - 333031, March 19-21, 2022",
    date: "March 19–21, 2022",
    url: "https://www.researchgate.net/publication/385896193_Performance_evaluation_of_a_damage_indicator_using_strain_acceleration_and_displacement-based_bridge_weigh-in-motion",
  },
  {
    ref: "[11]",
    title: "Seismic Performance of Coupled Buildings Connected by Yield and SMA Dampers",
    cite: "Singh, P., Gur, S. and Roy, K. \"Seismic Performance of Coupled Buildings Connected by Yield and SMA Dampers\", 12th Structural engineering convention 2021 (SEC2021), MNIT Jaipur, India - 302017, December 19-22, 2021",
    date: "December 19–22, 2021",
  },
  {
    ref: "[12]",
    title: "Experimental Investigation for Quantifying Damage Considering Soil-Structure Interaction Effect on a Small-scale Model",
    cite: "Das, S., Baghel, A., Grover, D. and Roy, K. \"Experimental Investigation for Quantifying Damage Considering Soil-Structure Interaction Effect on a Small-scale Model\", Symposium in Earthquake Engineering, December 2020",
    date: "December 2020",
    url: "https://www.researchgate.net/publication/372700120_Experimental_Investigation_for_Quantifying_Damage_Considering_Soil-Structure_Interaction_Effect_on_a_Small-scale_Model",
  },
  {
    ref: "[13]",
    title: "Seismic Response of Adjacent Building Structure connected with Superelastic Damper: Comparison with Yield Damper",
    cite: "Gur, S., Singh, P. and Roy, K. \"Seismic Response of Adjacent Building Structure connected with Superelastic Damper: Comparison with Yield Damper\", 11th International Conference on Structural Dynamics (EASD Procedia EURODYN 2020), Athens, Greece (Virtual Conference), 4696-4709, November 23–26, 2020",
    date: "November 23–26, 2020",
    url: "https://www.researchgate.net/publication/347297694_SEISMIC_RESPONSE_OF_ADJACENT_BUILDING_STRUCTURE_CONNECTED_WITH_SUPERELASTIC_DAMPER_COMPARISON_WITH_YIELD_DAMPER",
  },
  {
    ref: "[14]",
    title: "Spectral Element Method for Damage Localization in Non-Uniform Structures with Parametric Uncertainty",
    cite: "Chaudhary, P. K., Anjneya, K. and Roy, K. \"Spectral Element Method for Damage Localization in Non-Uniform Structures with Parametric Uncertainty\", 5th International Conference on Civil Structural and Transportation Engineering (ICCSTE 2020), Ottawa, Canada (Virtual Conference), 301, November 12-14, 2020",
    date: "November 12–14, 2020",
    url: "https://www.researchgate.net/publication/346344672_Spectral_Element_Method_for_Damage_Localization_in_Non-Uniform_Structures_with_Parametric_Uncertainty",
  },
  {
    ref: "[15]",
    title: "Structural Damage Quantification Using Flexibility Matrix Based Approach",
    cite: "Das, S. and Roy, K. \"Structural Damage Quantification Using Flexibility Matrix Based Approach\", 1st Online International Conference on Recent Advances in Computational and Experimental Mechanics (ICRACEM 2020), IIT Kharagpur, India - 721302, VC-20-036, September 4-6, 2020",
    date: "September 4–6, 2020",
    url: "https://www.researchgate.net/publication/357503702_Structural_Damage_Quantification_Using_Flexibility_Matrix-Based_Approach",
  },
  {
    ref: "[16]",
    title: "Uncertainty Propagation in Estimated Structural Parameters owing to Univariate Uncertain Parameter using RSM and PDEM",
    cite: "Anjneya, K., Grover, D. and Roy, K. \"Uncertainty Propagation in Estimated Structural Parameters owing to Univariate Uncertain Parameter using RSM and PDEM\", 7th International Congress on Computational Mechanics and Simulation (ICCMS2019), IIT Mandi, India - 175001, December 11–13, 2019",
    date: "December 11–13, 2019",
    url: "https://www.researchgate.net/publication/346383369_Uncertainty_Propagation_in_Estimated_Structural_Parameters_Owing_to_Univariate_Uncertain_Parameter_Using_RSM_and_PDEM",
  },
  {
    ref: "[17]",
    title: "Extraction of Damage Information in Presence of Parametric Uncertainty using Dimensionality Reduction",
    cite: "Chowdhury, P. K., Anjneya, K. and Roy, K. \"Extraction of Damage Information in Presence of Parametric Uncertainty using Dimensionality Reduction\", 29th European Safety and Reliability Conference (ESREL), Hannover, Germany, September 2019",
    date: "September 2019",
    url: "https://www.researchgate.net/publication/338767518_Extraction_of_Damage_Information_in_Presence_of_Parametric_Uncertainty_using_Dimensionality_Reduction",
  },
  {
    ref: "[18]",
    title: "Reliability of RSM Towards Damage Identification in a Six-Storey Shear Building using Vibrational Parameters",
    cite: "Anjneya, K. and Roy, K. \"Reliability of RSM Towards Damage Identification in a Six-Storey Shear Building using Vibrational Parameters\", 2nd National Conference on Recent Advances in Civil Engineering (RACE2019), NIT Patna, India - 800005, June 6–7, 2019",
    date: "June 6–7, 2019",
    url: "https://www.researchgate.net/publication/346382912_RELIABILITY_OF_RSM_TOWARDS_DAMAGE_IDENTIFICATION_IN_A_SIX-_STOREY_SHEAR_BUILDING_USING_VIBRATIONAL_PARAMETERS",
  },
  {
    ref: "[19]",
    title: "Damage Identification in Beam-Type Structures using Effect of First-Order Perturbation on Eigen Properties",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. \"Damage Identification in Beam-Type Structures using Effect of First-Order Perturbation on Eigen Properties\", 16th symposium on earthquake engineering (SEE 2018), IIT Roorkee, India - 247667, December 20–22, 2018",
    date: "December 20–22, 2018",
  },
  {
    ref: "[20]",
    title: "Application of response surface-based model updating in damage identification using dynamic responses",
    cite: "Anjneya, K. and Roy, K. \"Application of response surface-based model updating in damage identification using dynamic responses\", 11th Structural engineering convention 2018 (SEC2018), Jadavpur University, India - 700032, December 19–21, 2018",
    date: "December 19–21, 2018",
    url: "https://www.researchgate.net/publication/346651039_RESPONSE_SURFACE-BASED_MODEL_UPDATING_IN_STRUCTURAL_DAMAGE_IDENTIFICATION_USING_DYNAMIC_RESPONSES",
  },
  {
    ref: "[21]",
    title: "A Closed-Form Solution and Comparison for the One-Dimensional Orthorhombic Quasicrystal and Crystal Plate",
    cite: "Bhardwaj, A. and Roy, K. \"A Closed-Form Solution and Comparison for the One-Dimensional Orthorhombic Quasicrystal and Crystal Plate\", 13th World Congress in Computational Mechanics, Newyork City (USA), July 22-27, 2018",
    date: "July 22–27, 2018",
  },
  {
    ref: "[22]",
    title: "Behavior of Elevated Liquid Storage Tank under Near Fault Earthquakes",
    cite: "Roy, K., Gur, S. and Mishra, S. K. \"Behavior of Elevated Liquid Storage Tank under Near Fault Earthquakes\", 19th International Conference on Earthquake, Geological and Structural Engineering, Boston (USA), April 24-25, 2017",
    date: "April 24–25, 2017",
  },
  {
    ref: "[23]",
    title: "Modal parameter-based Damage Identification in Cylindrical Pipe using Dynamic Response",
    cite: "Gaurav, K., Sonam, K., Singhal, V. and Roy, K. \"Modal parameter-based Damage Identification in Cylindrical Pipe using Dynamic Response\", 10th International Conference on Structural Dynamics, (Procedia Engineering EURODYN 2017), Rome, Italy, 199 (1988-1993), September 10–13, 2017",
    date: "September 10–13, 2017",
    url: "https://www.researchgate.net/publication/319654625_Modal_parameter-based_Damage_Identification_in_Cylindrical_Pipe_using_Dynamic_Response",
  },
  {
    ref: "[24]",
    title: "Performance of Various Vibration-Based Output-only Techniques In Structural Modal Identification",
    cite: "Roy, K. and Ray-Chaudhuri, S. \"Performance of Various Vibration-Based Output-only Techniques In Structural Modal Identification\", ISSS National Conference on MEMS, Smart Materials, Structures and Systems, IIT Kanpur, India - 208016, September 28–30, 2016",
    date: "September 28–30, 2016",
  },
  {
    ref: "[25]",
    title: "Fundamental Mode Shape to Localize Delamination in Cantilever Composite Plates using Laser Doppler Vibrometer",
    cite: "Roy, K., Agrawal, S., Bhattacharya, B. and Ray-Chaudhuri, S. \"Fundamental Mode Shape to Localize Delamination in Cantilever Composite Plates using Laser Doppler Vibrometer\", 9th Structural Engineering Convention 2014 (SEC2014), IIT Delhi, India - 110016, 2621-2633, December 22–24, 2014",
    date: "December 22–24, 2014",
  },
  {
    ref: "[26]",
    title: "Fundamental Mode Shape in Structural Damage Quantification",
    cite: "Roy, K. and Ray-Chaudhuri, S. \"Fundamental Mode Shape in Structural Damage Quantification\", 15th symposium on earthquake engineering (SEE 2014), IIT Roorkee, India - 247667, December 11–13, 2014",
    date: "December 11–13, 2014",
  },
  {
    ref: "[27]",
    title: "A novel bridge structure damage diagnosis algorithm based on statistical pattern recognition",
    cite: "Xiao, H., Lu, C., Ogai, H. and Roy, K. \"A novel bridge structure damage diagnosis algorithm based on statistical pattern recognition\", SICE annual conference (IEEE), Hokkaido University, Sapporo, Japan, 775-780, September 9–12, 2014",
    date: "September 9–12, 2014",
  },
  {
    ref: "[28]",
    title: "Damage Characterization in Frame Structures Using Output-Only Modal and Feature-Based Techniques",
    cite: "Panikkaveettil, H., Roy, K. and Ray-Chaudhuri, S. \"Damage Characterization in Frame Structures Using Output-Only Modal and Feature-Based Techniques\", International federation of automation and control (IFAC), Advances in control and optimization of dynamical systems (ACODS 2014), IIT Kanpur, India - 208016, 3 (1), 973-980, March 13–15, 2014",
    date: "March 13–15, 2014",
  },
  {
    ref: "[29]",
    title: "Effect of Soil-Structure Interaction on Identified Modal Parameters and Damage Localization",
    cite: "Roy K., Panikkaveettil, H., Ray-Chaudhuri, S and Raychowdhury, P., \"Effect of Soil-Structure Interaction on Identified Modal Parameters and Damage Localization\", 15th world conference in earthquake engineering (WCEE 2012), Lisbon, Portugal, September 24–28, 2012",
    date: "September 24–28, 2012",
  },
  {
    ref: "[30]",
    title: "On development of a new seismic base isolation system",
    cite: "Chakraborty, S., Roy, K., Chinta, C., and Ray-Chaudhuri, S., \"On development of a new seismic base isolation system\", 6th international conference on scalable uncertainty management (SUM 2012), Marburg, Germany, 574-581, September 17–19, 2012",
    date: "September 17–19, 2012",
  },
  {
    ref: "[31]",
    title: "Damage Detection of Bridge Using Wireless Sensors",
    cite: "Roy, K., Ogai, H., Bhattacharya, B., Ray-Chaudhuri, S. and Qin, J., \"Damage Detection of Bridge Using Wireless Sensors\", International federation of automation and control (IFAC), Mining, Mineral and Metal Industries (MMM 2012), Nagaragawa, Gifu, Japan, 107-111, September 10–12, 2012",
    date: "September 10–12, 2012",
  },
  {
    ref: "[32]",
    title: "Comparative Study of Various Vibration-based Structural Damage Detection Techniques",
    cite: "Roy, K. and Ray-Chaudhuri, S., \"Comparative Study of Various Vibration-based Structural Damage Detection Techniques\", Asian pacific symposium on structural Reliability and its applications (APSSRA 2012), NUS, Singapore, March 23–25, 2012",
    date: "March 23–25, 2012",
  },
  {
    ref: "[33]",
    title: "Autoregressive Model for Structural Condition Assessment in Presence of Parametric Uncertainty",
    cite: "Roy, K. and Ray-Chaudhuri, S., \"Autoregressive Model for Structural Condition Assessment in Presence of Parametric Uncertainty\", International symposium on engineering under uncertainty: safety assessment and management (ISEUSAM 2012), BESU, Shibpur, India - 711103, 1061-1072, January 3–5, 2012",
    date: "January 3–5, 2012",
  },
]

const STUDENTS = [
  {
    name: "Saranika Das",
    role: "PhD student, 2019 to present",
    education: "",
    topic: "Damage identification in structures through flexibility based methods.",
    photo: "/images/students/saranika_das.jpg",
    type: "current"
  },
  {
    name: "Md Arif Faridi",
    role: "PhD student",
    education: "B.Tech (NIT Patna), M.Tech (AMU)",
    topic: "",
    photo: "/images/students/md_arif_faridi.jpg",
    type: "current"
  },
  {
    name: "Kumar Anjneya",
    role: "Master's student (2017-2019)",
    education: "B.E. ( BIT MESRA), M.Tech (Silver medal, IIT Patna)",
    topic: "Response surface methodology based Damage quantification in building model, Spectral element methodology, Probability density evolution method (PDEM), Principal Component analysis (PCA)",
    photo: "/images/students/kumar_anjneya.jpg",
    type: "alumni"
  },
  {
    name: "Divya Grover",
    role: "Master's student (2018-2020)",
    education: "M.tech (Gold Medal, IIT Patna )",
    topic: "Probability density evolution method (PDEM), Soil Structure Interaction",
    photo: "/images/students/divya_grover.jpeg",
    type: "alumni"
  },
  {
    name: "Purushottam Kumar Chowdhury",
    role: "Master's student (2016-2018)",
    education: "M.Tech (IIT Patna)",
    topic: "Damage identification using Spectral element methodology (SEM), Principal component analysis (PCA)",
    photo: "/images/students/purushottam_kumar_chowdhury.jpeg",
    type: "alumni"
  },
  {
    name: "Eshwar Kunchan",
    role: "JRF (2017-2018)",
    education: "(IIT Patna)",
    topic: "Monitoring of bridge in Bihar, Damage identification in beam using mode shape curvature",
    photo: "/images/students/eshwar_kunchan.jpg",
    type: "alumni"
  }
]

const GALLERY = [
  {
    src: "/images/gallery/1.png",
    alt: "MATLAB Training session at LNPIT jan 2019",
    cap: "MATLAB Training session at LNPIT, January 2019"
  },
  {
    src: "/images/gallery/2.png",
    alt: "Faculty development program",
    cap: "Faculty Development Program"
  },
  {
    src: "/images/gallery/3.avif",
    alt: "Expert Lecture at IIT Mandi",
    cap: "Expert Lecture on Recent Revision on Seismic Design Codes, IIT Mandi, July 2018"
  },
  {
    src: "/images/gallery/5.avif",
    alt: "Awesome Team",
    cap: "SHM Lab Team — Awesome Team"
  },
]



export default function Home() {
  return (
    <div className="relative isolate min-h-screen font-sans text-foreground">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-6xl border-x border-border bg-card/78 shadow-[0_0_100px_oklch(0.36_0.13_252/0.10),0_24px_80px_oklch(0.22_0.04_252/0.08)] backdrop-blur-md">
        <SiteNav />

        {/* Masthead */}
        <header id="home" className="scroll-mt-14 border-b border-border">
          <div className="flex flex-col justify-between gap-2 border-b border-primary/15 bg-primary px-6 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-primary-foreground sm:flex-row sm:px-10">
            <span>Dept. of Civil &amp; Environmental Engineering</span>
            <span>IIT Patna / Bihta, Bihar 801106</span>
          </div>
          <div className="relative grid grid-cols-1 overflow-hidden lg:grid-cols-3">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_46%,oklch(0.62_0.14_58/0.08)_46%,transparent_62%)]" />
            {/* Hero text */}
            <div className="relative border-border bg-gradient-to-br from-secondary/40 via-card/40 to-orange/10 lg:col-span-2 lg:border-r">
              <div className="pointer-events-none absolute left-10 top-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-12 right-10 h-40 w-40 rounded-full bg-orange/12 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between gap-10 px-6 py-10 sm:px-10 sm:py-16">
                <div>
                  <a
                    href="https://www.iitp.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 mb-6 group/iitw inline-flex hover:opacity-95 transition-opacity"
                  >
                    <div className="relative w-12 h-12 overflow-hidden rounded-full border border-border bg-white p-1 shadow-sm shrink-0 transition-transform duration-300 group-hover/iitw:scale-105">
                      <Image
                        src="/images/education/iit_patna.png"
                        alt="IIT Patna Logo"
                        fill
                        className="object-contain p-0.5"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[0.75rem] uppercase tracking-widest text-primary font-semibold leading-tight group-hover/iitw:text-orange transition-colors">
                        Indian Institute of Technology Patna
                      </p>
                      <p className="text-[0.65rem] font-mono text-muted-foreground uppercase tracking-widest">
                        Bihta, Bihar, India
                      </p>
                    </div>
                  </a>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {["Structural Health Monitoring", "Seismic Resilience", "Dynamic Damage Detection"].map((tag) => (
                      <span
                        key={tag}
                        className="border border-orange/25 bg-orange/10 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-orange shadow-[0_0_20px_oklch(0.62_0.14_58/0.08)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-mono text-[0.7rem] uppercase tracking-widest text-primary">
                    Assistant Professor of Civil Engineering
                  </p>
                  <p className="mt-6 font-serif text-3xl font-medium tracking-tight text-primary sm:text-5xl">
                    Dr. Koushik Roy
                  </p>
                  <p className="mt-2.5 font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-widest text-muted-foreground/80">
                    {DEGREES.map((d) => `${d.degree} (${d.place})`).join(" \u2022 ")}
                  </p>
                  <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.03] tracking-tight sm:text-6xl">
                    Structural Dynamics &amp;{" "}
                    <span className="bg-gradient-to-r from-orange via-primary to-orange bg-clip-text text-transparent">SHM Lab</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                    Focusing on vibration-based structural health monitoring, dynamic damage
                    detection using response surface and spectral element methodologies, seismic
                    resilience of structures, and soil-structure interaction under cyclic loads.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/dr-koushik-roy-2b87768a/?originalSubdomain=in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border bg-secondary/20 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary transition-all duration-300 hover:border-orange hover:bg-secondary/40 hover:text-orange"
                    >
                      <LinkedinIcon className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=j3-TJncAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border bg-secondary/20 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary transition-all duration-300 hover:border-orange hover:bg-secondary/40 hover:text-orange"
                    >
                      <GraduationCap className="h-3.5 w-3.5" />
                      Google Scholar
                    </a>
                    <a
                      href="https://www.researchgate.net/profile/Koushik-Roy-10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border bg-secondary/20 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary transition-all duration-300 hover:border-orange hover:bg-secondary/40 hover:text-orange"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      ResearchGate
                    </a>
                    <a
                      href="https://iitp.academia.edu/KoushikRoy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-border bg-secondary/20 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-primary transition-all duration-300 hover:border-orange hover:bg-secondary/40 hover:text-orange"
                    >
                      <School className="h-3.5 w-3.5" />
                      Academia.edu
                    </a>
                  </div>
                  {/* Degrees table removed from here */}
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
                      <dt className="font-serif text-3xl font-medium tabular-nums text-primary">
                        <AnimatedCounter value={n} />
                      </dt>
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

        {/* Academic & Professional Journey */}
        <Section id="journey" index="01" title="Academic & Professional Journey">
          <div className="relative py-12 md:py-20 overflow-hidden">
            {/* The vertical timeline thread line */}
            <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange/10 via-orange/30 to-orange/10 pointer-events-none" />

            <div className="space-y-12 lg:space-y-16">
              {JOURNEY.map((item, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <div key={idx} className="relative flex flex-col lg:flex-row items-start">
                    
                    {/* Vertical line segment to avoid overflow past nodes */}
                    <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] pointer-events-none">
                      <div className={`w-full bg-gradient-to-b from-orange/20 via-orange/40 to-orange/20 ${
                        idx === 0 ? "top-[2.25rem] bottom-0" :
                        idx === JOURNEY.length - 1 ? "top-0 h-[2.25rem]" :
                        "top-0 bottom-0"
                      } absolute`} />
                    </div>

                    {/* Card Container */}
                    <div 
                      className={`group w-full lg:w-1/2 pl-16 pr-6 relative ${
                        isEven 
                          ? "lg:ml-0 lg:mr-auto lg:pl-8 lg:pr-12" 
                          : "lg:ml-auto lg:mr-0 lg:pl-12 lg:pr-8"
                      }`}
                    >
                      {/* Node (Desktop) */}
                      <div 
                        className={`hidden lg:flex absolute top-[2.25rem] -translate-y-1/2 z-10 items-center justify-center ${
                          isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                        }`}
                      >
                        <div className="relative w-12 h-12 rounded-full border border-orange/30 bg-white p-1 shadow-md transition-all duration-500 scale-100 group-hover:scale-110 group-hover:border-orange group-hover:ring-8 group-hover:ring-orange/15 ring-8 ring-background dark:bg-zinc-900">
                          <Image
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            fill
                            className="object-contain p-1 rounded-full bg-white"
                            sizes="40px"
                          />
                        </div>
                      </div>

                      {/* Node (Mobile) */}
                      <div className="lg:hidden absolute left-6 top-[2.25rem] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                        <div className="relative w-12 h-12 rounded-full border border-orange/30 bg-white p-1 shadow-md transition-all duration-500 scale-100 group-hover:scale-110 group-hover:border-orange group-hover:ring-8 group-hover:ring-orange/15 ring-8 ring-background dark:bg-zinc-900">
                          <Image
                            src={item.logo}
                            alt={`${item.institution} logo`}
                            fill
                            className="object-contain p-1 rounded-full bg-white"
                            sizes="40px"
                          />
                        </div>
                      </div>

                      {/* Connector line (Desktop) */}
                      <div 
                        className={`hidden lg:block absolute top-[2.25rem] h-[1.5px] bg-orange/45 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 ${
                          isEven 
                            ? "right-0 w-12 origin-right" 
                            : "left-0 w-12 origin-left"
                        }`} 
                      />

                      {/* Connector line (Mobile) */}
                      <div className="lg:hidden absolute top-[2.25rem] left-6 w-10 h-[1.5px] bg-orange/45 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                      {/* Card Content */}
                      <div className="relative rounded border border-border bg-card/45 backdrop-blur-sm p-6 shadow-sm hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.05),0_0_24px_oklch(0.62_0.14_58/0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-orange/25">
                        
                        {/* Soft Golden Backglow */}
                        <div className="absolute -inset-px rounded opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange/5 via-primary/5 to-orange/5 blur-xl transition-all duration-500 -z-10 pointer-events-none" />

                        {/* Golden side bar indicator for hover effect */}
                        <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-orange scale-y-0 transition-transform duration-300 origin-center group-hover:scale-y-100" />
                        
                        {/* Academic/Professional Badge */}
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="font-mono text-xs uppercase tracking-widest text-orange font-semibold">
                            {item.period}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-mono uppercase tracking-wider bg-secondary border border-border text-muted-foreground">
                            {item.type}
                          </span>
                        </div>

                        {/* Title & Institution */}
                        <h4 className="font-serif text-lg sm:text-xl font-medium tracking-tight text-primary leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-foreground">
                          {item.institution}
                        </p>
                        {item.location && (
                          <p className="text-xs text-muted-foreground mt-0.5">{item.location}</p>
                        )}

                        {/* Thesis / Description */}
                        {item.thesis && (
                          <p className="mt-4 text-xs sm:text-sm text-muted-foreground pt-3 border-t border-border/40 leading-relaxed">
                            <strong className="font-medium text-foreground">Thesis:</strong> {item.thesis}
                          </p>
                        )}
                        {item.description && (
                          <p className="mt-4 text-xs sm:text-sm text-muted-foreground pt-3 border-t border-border/40 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {/* Activities */}
                        {item.activities && item.activities.length > 0 && (
                          <div className="mt-4 text-xs sm:text-sm text-muted-foreground pt-3 border-t border-border/40">
                            <strong className="font-medium text-foreground block mb-1.5">Activities &amp; Societies:</strong>
                            <ul className="list-outside list-disc pl-4 space-y-1 text-muted-foreground/80">
                              {item.activities.map((act, j) => (
                                <li key={j}>{act}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
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
                className={`group relative grid grid-cols-1 sm:grid-cols-[10rem_1fr] transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.01] hover:bg-secondary/50 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.06),0_0_24px_oklch(0.62_0.14_58/0.08)] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-orange before:scale-y-0 before:transition-transform before:duration-300 before:origin-center hover:before:scale-y-100 ${
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



        {/* Research */}
        <Section id="research" index="04" title="Research">
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



          <ResearchItems />
        </Section>

        {/* Publications */}
        <Section id="publications" index="05" title="Publications & Conferences">
          <PublicationsSearch journals={PUBLICATIONS} conferences={CONFERENCES} />
        </Section>

        {/* Students */}
        <Section id="students" index="06" title="Students">
          {/* Current Scholars */}
          <div className="px-6 py-4 sm:px-10 border-b border-border bg-secondary/10">
            <h3 className="font-mono text-[0.75rem] uppercase tracking-widest text-primary font-bold">Current Scholars</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {STUDENTS.filter((s) => s.type === "current").map((s, i, arr) => {
              const isLastRowMd = i >= arr.length - (arr.length % 2 === 0 ? 2 : 1);
              const isLastItem = i === arr.length - 1;
              return (
                <article
                  key={s.name}
                  className={[
                    "group relative px-6 py-8 sm:px-10 border-border transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.01] hover:bg-secondary/55 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.06)]",
                    isLastItem ? "border-b-0" : "border-b",
                    isLastRowMd ? "md:border-b-0" : "md:border-b",
                    i % 2 === 0 ? "md:border-r" : "",
                  ].join(" ")}
                >
                  <div className="flex gap-5 sm:gap-6 items-start">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-primary/15 shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={s.photo || "/placeholder.svg"}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 80px, 64px"
                      />
                    </div>
                    <div className="space-y-1 min-w-0 flex-1">
                      <p className="font-serif text-lg sm:text-xl font-medium tracking-tight text-primary truncate">
                        {s.name}
                      </p>
                      <p className="font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-widest text-orange leading-tight">
                        {s.role}
                      </p>
                      {s.education && (
                        <p className="text-[0.7rem] sm:text-[0.75rem] text-muted-foreground/80 italic leading-snug">
                          {s.education}
                        </p>
                      )}
                      {s.topic && (
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 pt-1 border-t border-border/40 leading-relaxed">
                          <span className="font-medium text-primary/70 text-[0.7rem] uppercase tracking-wider block mb-0.5">Research Focus</span>
                          {s.topic}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Alumni */}
          <div className="px-6 py-4 sm:px-10 border-y border-border bg-secondary/10">
            <h3 className="font-mono text-[0.75rem] uppercase tracking-widest text-primary font-bold">Alumni</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {STUDENTS.filter((s) => s.type === "alumni").map((s, i, arr) => {
              const isLastRowMd = i >= arr.length - (arr.length % 2 === 0 ? 2 : 1);
              const isLastItem = i === arr.length - 1;
              return (
                <article
                  key={s.name}
                  className={[
                    "group relative px-6 py-8 sm:px-10 border-border transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.01] hover:bg-secondary/55 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.06)]",
                    isLastItem ? "border-b-0" : "border-b",
                    isLastRowMd ? "md:border-b-0" : "md:border-b",
                    i % 2 === 0 ? "md:border-r" : "",
                  ].join(" ")}
                >
                  <div className="flex gap-5 sm:gap-6 items-start">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-primary/15 shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={s.photo || "/placeholder.svg"}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 80px, 64px"
                      />
                    </div>
                    <div className="space-y-1 min-w-0 flex-1">
                      <p className="font-serif text-lg sm:text-xl font-medium tracking-tight text-primary truncate">
                        {s.name}
                      </p>
                      <p className="font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-widest text-orange leading-tight">
                        {s.role}
                      </p>
                      {s.education && (
                        <p className="text-[0.7rem] sm:text-[0.75rem] text-muted-foreground/80 italic leading-snug">
                          {s.education}
                        </p>
                      )}
                      {s.topic && (
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 pt-1 border-t border-border/40 leading-relaxed">
                          <span className="font-medium text-primary/70 text-[0.7rem] uppercase tracking-wider block mb-0.5">Research Focus</span>
                          {s.topic}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Section>

        {/* Gallery */}
        <Section id="gallery" index="07" title="Gallery">
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

        {/* Contact */}
        <Section id="contact" index="08" title="Contact">
          <div className="flex justify-center px-6 py-12 sm:px-10">
            <div className="w-full max-w-2xl border border-border bg-secondary/15 backdrop-blur-md p-8 sm:p-12 transition-all duration-500 hover:shadow-[0_8px_32px_oklch(0.36_0.13_252/0.04)]">
              <div className="flex flex-col items-center text-center">
                {/* Custom Envelope Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded bg-primary text-primary-foreground mb-6 shadow-sm">
                  <Mail className="h-6 w-6" />
                </div>
                
                <h3 className="font-serif text-2xl font-medium tracking-tight text-primary">
                  Dr. Koushik Roy
                </h3>
                <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-orange">
                  Assistant Professor
                </p>
                
                <a
                  href="https://maps.app.goo.gl/w373xpCZRzRcm7ds6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/80 border border-border rounded-full text-[0.65rem] font-mono text-muted-foreground uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
                >
                  <MapPin className="size-3 text-orange animate-pulse" />
                  25.5356° N, 84.8512° E
                </a>

                <a
                  href="https://maps.app.goo.gl/w373xpCZRzRcm7ds6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block space-y-1 text-sm text-muted-foreground hover:text-primary transition-colors max-w-md group/addr"
                >
                  <p className="group-hover/addr:underline">Department of Civil and Environmental Engineering,</p>
                  <p className="group-hover/addr:underline">Academic Block 6, IIT Patna,</p>
                  <p className="group-hover/addr:underline">Bihta, Bihar, India, 801103</p>
                </a>

                <div className="w-full border-t border-border/60 my-8"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-sm">
                  <div className="flex flex-col items-center sm:items-end sm:border-r sm:border-border/60 sm:pr-8">
                    <div className="flex items-center gap-2 text-primary font-medium mb-1">
                      <Phone className="h-4 w-4 text-orange" />
                      <span>Phone</span>
                    </div>
                    <a
                      href="tel:+916115233197"
                      className="font-mono text-muted-foreground hover:text-orange transition-colors"
                    >
                      +91 6115 233197
                    </a>
                  </div>
                  <div className="flex flex-col items-center sm:items-start sm:pl-8">
                    <div className="flex items-center gap-2 text-primary font-medium mb-1">
                      <Mail className="h-4 w-4 text-orange" />
                      <span>Email</span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start font-mono text-muted-foreground gap-1">
                      <a
                        href="mailto:koushik@iitp.ac.in"
                        className="hover:text-orange transition-colors"
                      >
                        koushik@iitp.ac.in
                      </a>
                      <a
                        href="mailto:koushikbesus@gmail.com"
                        className="hover:text-orange transition-colors"
                      >
                        koushikbesus@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="flex flex-col justify-between gap-6 border-t border-primary/15 bg-primary px-6 py-8 font-mono text-[0.7rem] uppercase tracking-widest text-primary-foreground sm:flex-row sm:px-10 items-center">
          <div className="flex flex-col gap-1">
            <span>&copy; {new Date().getFullYear()} Dr. Koushik Roy</span>
            <span className="text-primary-foreground/60 text-[0.65rem]">Structural Dynamics &amp; SHM Lab</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="https://www.linkedin.com/in/dr-koushik-roy-2b87768a/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=j3-TJncAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Koushik-Roy-10" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">ResearchGate</a>
            <a href="https://iitp.academia.edu/KoushikRoy" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">Academia</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
