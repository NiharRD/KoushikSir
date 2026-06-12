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
    title: "Localization and Quantification of Damage along the Transverse Direction of Bridges Using Bridge Weigh-in-Motion Systems",
    cite: "Paul, D. and Roy, K. (2026), \"Localization and Quantification of Damage along the Transverse Direction of Bridges Using Bridge Weigh-in-Motion Systems\", Journal of Bridge Engineering",
    date: "May 2026",
    url: "https://www.researchgate.net/publication/404328330_Localization_and_Quantification_of_Damage_along_the_Transverse_Direction_of_Bridges_Using_Bridge_Weigh-in-Motion_Systems",
  },
  {
    ref: "[02]",
    title: "Numerical Investigation on the Influence of Soil-Structure Interaction in Damage Quantification of Shear Buildings",
    cite: "Das, S., Gautam, P., and Roy, K. (2025), \"Numerical Investigation on the Influence of Soil-Structure Interaction in Damage Quantification of Shear Buildings\"",
    date: "July 2025",
    url: "https://www.researchgate.net/publication/394766456_Numerical_Investigation_on_the_Influence_of_Soil-Structure_Interaction_in_Damage_Quantification_of_Shear_Buildings",
  },
  {
    ref: "[03]",
    title: "Baseline-free localization and quantification of structural damage using spectral response",
    cite: "Ganguly, S. and Roy, K. (2025), \"Baseline-free localization and quantification of structural damage using spectral response\", Applied Mathematical Modelling",
    date: "June 2025",
    url: "https://www.researchgate.net/publication/388290357_Baseline-free_localization_and_quantification_of_structural_damage_using_spectral_response",
  },
  {
    ref: "[04]",
    title: "Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames",
    cite: "Ganguly, S. and Roy, K. (2025), \\",
    date: "November 2024",
    url: "https://www.researchgate.net/publication/385838726_Damage_quantification_using_spectral_response_of_a_multi-degree-of-freedom_system_with_spatial_and_temporal_stiffness_variations_Application_to_shear-type_frames",
  },
  {
    ref: "[05]",
    title: "Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings",
    cite: "Das, S. and Roy, K. (2024), \\",
    date: "April 2024",
    url: "https://www.researchgate.net/publication/380323727_Frequency_response_function-based_closed-form_expression_for_multi-damage_quantification_and_its_application_on_shear_buildings",
  },
  {
    ref: "[06]",
    title: "Forced Vibration Analysis using 'Elmer' FEM Package to Develop Poincaré Map and Correlation Method-based Damage Indicators",
    cite: "Ganguly, S. and Roy, K. (2024), \\",
    date: "March 2024",
    url: "https://www.researchgate.net/publication/378948831_Nonlinear_Forced_Vibration_Analysis_using_'Elmer'_FEM_Package_to_Develop_Poincare_Map_and_Correlation_Method-based_Damage_Indicators",
  },
  {
    ref: "[07]",
    title: "Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response: Experimental and numerical validation",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2024), \\",
    date: "February 2024",
    url: "https://www.researchgate.net/publication/378540088_Application_of_covariance_statistical_method_for_damage_identification_on_railway_truss_bridge_using_acceleration_response_experimental_and_numerical_validation",
  },
  {
    ref: "[08]",
    title: "Using limited roving sensors to monitor bridge subjected to random traffic load",
    cite: "Faridi, M. A., Kuncham, E., Roy, K. and Singhal, V. (2024), \\",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/377299390_Using_limited_roving_sensors_to_monitor_bridge_subjected_to_random_traffic_load",
  },
  {
    ref: "[09]",
    title: "Damage quantification in beam-type structures using modal curvature ratio",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2024), \\",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/377643774_Damage_quantification_in_beam-type_structures_using_modal_curvature_ratio",
  },
  {
    ref: "[10]",
    title: "Reliability of Estimated Damage Quantity in Presence of Material and Measurement Uncertainty",
    cite: "Ganguly, S. and Roy, K. (2024), \"Reliability of Estimated Damage Quantity in Presence of Material and Measurement Uncertainty\", Procedia Structural Integrity",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/385676375_Reliability_of_Estimated_Damage_Quantity_in_Presence_of_Material_and_Measurement_Uncertainty",
  },
  {
    ref: "[11]",
    title: "Propagation of material uncertainty in modal parameters and its influence in damage quantification of shear buildings",
    cite: "Das, S. and Roy, K. (2023), \\",
    date: "September 2023",
    url: "https://www.researchgate.net/publication/374244205_Propagation_of_material_uncertainty_in_modal_parameters_and_its_influence_in_damage_quantification_of_shear_buildings",
  },
  {
    ref: "[12]",
    title: "A Novel Damage Indicator Evolved from the Poincaré Map for Localization of Seismic Damage in a Structure with Nonlinear Breathing Crack",
    cite: "Ganguly, S. and Roy, K. (2023), \"A Novel Damage Indicator Evolved from the Poincaré Map for Localization of Seismic Damage in a Structure with Nonlinear Breathing Crack\"",
    date: "July 2023",
    url: "https://www.researchgate.net/publication/372715395_A_Novel_Damage_Indicator_Evolved_from_the_Poincare_Map_for_Localization_of_Seismic_Damage_in_a_Structure_with_Nonlinear_Breathing_Crack",
  },
  {
    ref: "[13]",
    title: "Perturbation Approach for Damage Localization in Beam-type Structures: Analytical, Experimental and Numerical Exposition",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. (2022), \\",
    date: "April 2023",
    url: "https://www.researchgate.net/publication/370572064_Perturbation_approach_for_damage_localization_in_beam-type_structures_analytical_experimental_and_numerical_exposition",
  },
  {
    ref: "[14]",
    title: "Performance assessment of time-domain damage indicators based on output-only measurements and Poincaré map: A comparative review on nonlinear structures",
    cite: "Ganguly, S. and Roy, K. (2023), \\",
    date: "April 2023",
    url: "https://www.researchgate.net/publication/370079622_Performance_assessment_of_time-domain_damage_indicators_based_on_output-only_measurement_and_Poincare_map_A_comparative_review_on_nonlinear_structures",
  },
  {
    ref: "[15]",
    title: "Application of Bridge Weigh-in-Motion system in Bridge Health Monitoring: A state-of-the-art review",
    cite: "Paul, D. and Roy, K. (2023), \\",
    date: "March 2023",
    url: "https://www.researchgate.net/publication/368991650_Application_of_bridge_weigh-in-motion_system_in_bridge_health_monitoring_a_state-of-the-art_review",
  },
  {
    ref: "[16]",
    title: "Structural damage quantification in shear buildings using mode shape slope ratio",
    cite: "Roy, K. (2023), \\",
    date: "September 2022",
    url: "https://www.researchgate.net/publication/363682218_Structural_damage_quantification_in_shear_buildings_using_mode_shape_slope_ratio",
  },
  {
    ref: "[17]",
    title: "Seismic performance assessment of adjacent building structures connected with superelastic SMA damper and comparison with yield damper",
    cite: "Gur, S., Roy, K. and Singh, P. (2022), \\",
    date: "January 2022",
    url: "https://www.researchgate.net/publication/357931121_Seismic_performance_assessment_of_adjacent_building_structures_connected_with_superelastic_shape_memory_alloy_damper_and_comparison_with_yield_damper",
  },
  {
    ref: "[18]",
    title: "A state-of-the-art review on FRF-based structural damage detection: Development in last two decades and way forward",
    cite: "Das, S. and Roy, K. (2022), \\",
    date: "December 2021",
    url: "https://www.researchgate.net/publication/356923485_A_State-of-the-Art_Review_on_FRF-Based_Structural_Damage_Detection_Development_in_Last_Two_Decades_and_Way_Forward",
  },
  {
    ref: "[19]",
    title: "Acceleration time history dataset for a 3D miniature model of a shear building with structural damage",
    cite: "Anjneya, K. and Roy K. (2021), \\",
    date: "September 2021",
    url: "https://www.researchgate.net/publication/354651428_Acceleration_time_history_dataset_for_a_3D_miniature_model_of_a_shear_building_with_structural_damage",
  },
  {
    ref: "[20]",
    title: "Fundamental Mode Shape-based Structural Damage Quantification via Spectral Element Method",
    cite: "Chaudhary, P. K., Anjneya, K and Roy, K. (2021), \\",
    date: "August 2021",
    url: "https://www.researchgate.net/publication/354142994_Fundamental_Mode_Shape-Based_Structural_Damage_Quantification_Using_Spectral_Element_Method",
  },
  {
    ref: "[21]",
    title: "Response surface-based structural damage identification using dynamic responses",
    cite: "Anjneya, K and Roy K. (2021), \\",
    date: "February 2021",
    url: "https://www.researchgate.net/publication/347442567_Response_surface-based_structural_damage_identification_using_dynamic_responses",
  },
  {
    ref: "[22]",
    title: "Monitoring the health of the structure",
    cite: "Anjneya, K. and Roy, K. (2020), \"Monitoring the health of the structure\"",
    date: "June 2020",
    url: "https://www.researchgate.net/publication/344252926_Monitoring_the_health_of_the_structure",
  },
  {
    ref: "[23]",
    title: "Structural Damage Identification using Mode Shape Slope and Curvature",
    cite: "Roy, K. (2017), \\",
    date: "September 2017",
    url: "https://www.researchgate.net/publication/318777679_Structural_Damage_Identification_Using_Mode_Shape_Slope_and_Curvature",
  },
  {
    ref: "[24]",
    title: "Design of re-centering spring for flat sliding base isolation system: Theory and a numerical study",
    cite: "Chakraborty, S., Roy, K. and Ray-Chaudhuri, S. (2016), \\",
    date: "November 2016",
    url: "https://www.researchgate.net/publication/306416896_Design_of_re-centering_spring_for_flat_sliding_base_isolation_system_Theory_and_a_numerical_study",
  },
  {
    ref: "[25]",
    title: "Stochastic Seismic Response of Buildings with Shape-Memory-Alloy Dampers",
    cite: "Gur, S., Roy, K. and Mishra, S. K. (2016), \\",
  },
  {
    ref: "[26]",
    title: "ARX Model-based Damage Sensitive Features for Structural Damage Localization using Output-only Measurements",
    cite: "Roy, K., Bhattacharya, B. and Ray-Chaudhuri, S. (2015), \\",
  },
  {
    ref: "[27]",
    title: "Tuned-liquid-column ball-damper for seismic vibration control",
    cite: "Gur, S., Roy, K. and Mishra, S. K. (2015), \\",
  },
  {
    ref: "[28]",
    title: "Response of Bridges Isolated by Shape Memory-Alloy Rubber Bearing",
    cite: "Mishra, S. K., Gur, S., Roy, K. and Chakraborty, S. (2015), \\",
  },
  {
    ref: "[29]",
    title: "Fundamental Mode Shape and its Derivative in Structural Damage Localization",
    cite: "Roy, K. and Ray-Chaudhuri, S. (2013), \\",
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
    title: "Propagation of Epistemic Uncertainty in Modal Parameters and Its Influence on Damage",
    cite: "Das, S. and Roy, K. Propagation of Epistemic Uncertainty in Modal Parameters and Its Influence on Damage. 9th ECCOMAS Thematic Conference on Computational Methods in Structural Dynamics and Earthquake Engineering (COMPDYN 2023), Athens, Greece, June 12-14, 2023",
    date: "June 12–14, 2023",
    url: "https://www.researchgate.net/publication/375037343_PROPAGATION_OF_EPISTEMIC_UNCERTAINTY_IN_MODAL_PARAMETERS_AND_ITS_INFLUENCE_ON_DAMAGE",
  },
  {
    ref: "[03]",
    title: "Performance of a damage sensitive parameter obtained from different response-based bridge weigh-in-motion",
    cite: "Paul, D. and Roy, K. \\",
    date: "August 23–25, 2022",
    url: "https://www.researchgate.net/publication/378240348_Performance_of_a_damage_sensitive_parameter_obtained_from_different_response-based_bridge_weigh-in-motion",
  },
  {
    ref: "[04]",
    title: "FRF-based experimental investigation of multiple damage quantification in a shear building",
    cite: "Das, S. and Roy, K. \\",
    date: "June 23–24, 2022",
  },
  {
    ref: "[05]",
    title: "Performance evaluation of a damage indicator using strain, acceleration and displacement-based bridge weigh-in-motion",
    cite: "Paul, D. and Roy, K. \\",
    date: "March 19–21, 2022",
    url: "https://www.researchgate.net/publication/385896193_Performance_evaluation_of_a_damage_indicator_using_strain_acceleration_and_displacement-based_bridge_weigh-in-motion",
  },
  {
    ref: "[06]",
    title: "Seismic Performance of Coupled Buildings Connected by Yield and SMA Dampers",
    cite: "Singh, P., Gur, S. and Roy, K. \\",
    date: "December 19–22, 2021",
  },
  {
    ref: "[07]",
    title: "Experimental Investigation for Quantifying Damage Considering Soil-Structure Interaction Effect on a Small-scale Model",
    cite: "Das, S., Baghel, A., Grover, D. and Roy, K. Experimental Investigation for Quantifying Damage Considering Soil-Structure Interaction Effect on a Small-scale Model. Symposium in Earthquake Engineering, December, 2020",
    date: "December 2020",
    url: "https://www.researchgate.net/publication/372700120_Experimental_Investigation_for_Quantifying_Damage_Considering_Soil-Structure_Interaction_Effect_on_a_Small-scale_Model",
  },
  {
    ref: "[08]",
    title: "Seismic Response of Adjacent Building Structure connected with Superelastic Damper: Comparison with Yield Damper",
    cite: "Gur, S., Singh, P. and Roy, K. \\",
    date: "November 23–26, 2020",
    url: "https://www.researchgate.net/publication/347297694_SEISMIC_RESPONSE_OF_ADJACENT_BUILDING_STRUCTURE_CONNECTED_WITH_SUPERELASTIC_DAMPER_COMPARISON_WITH_YIELD_DAMPER",
  },
  {
    ref: "[09]",
    title: "Spectral Element Method for Damage Localization in Non-Uniform Structures with Parametric Uncertainty",
    cite: "Chaudhary, P. K., Anjneya, K. and Roy, K. \\",
    date: "November 12–14, 2020",
    url: "https://www.researchgate.net/publication/346344672_Spectral_Element_Method_for_Damage_Localization_in_Non-Uniform_Structures_with_Parametric_Uncertainty",
  },
  {
    ref: "[10]",
    title: "Structural Damage Quantification Using Flexibility Matrix Based Approach",
    cite: "Das, S. and Roy, K. \\",
    date: "September 4–6, 2020",
    url: "https://www.researchgate.net/publication/357503702_Structural_Damage_Quantification_Using_Flexibility_Matrix-Based_Approach",
  },
  {
    ref: "[11]",
    title: "Uncertainty Propagation in Estimated Structural Parameters owing to Univariate Uncertain Parameter using RSM and PDEM",
    cite: "Anjneya, K., Grover, D. and Roy, K. \\",
    date: "December 11–13, 2019",
    url: "https://www.researchgate.net/publication/346383369_Uncertainty_Propagation_in_Estimated_Structural_Parameters_Owing_to_Univariate_Uncertain_Parameter_Using_RSM_and_PDEM",
  },
  {
    ref: "[12]",
    title: "Extraction of Damage Information in Presence of Parametric Uncertainty using Dimensionality Reduction",
    cite: "Chowdhury, P. K., Anjneya, K. and Roy, K. \\",
    date: "September 2019",
    url: "https://www.researchgate.net/publication/338767518_Extraction_of_Damage_Information_in_Presence_of_Parametric_Uncertainty_using_Dimensionality_Reduction",
  },
  {
    ref: "[13]",
    title: "Reliability of RSM Towards Damage Identification in a Six-Storey Shear Building using Vibrational Parameters",
    cite: "Anjneya, K. and Roy, K. \\",
    date: "June 6–7, 2019",
    url: "https://www.researchgate.net/publication/346382912_RELIABILITY_OF_RSM_TOWARDS_DAMAGE_IDENTIFICATION_IN_A_SIX-_STOREY_SHEAR_BUILDING_USING_VIBRATIONAL_PARAMETERS",
  },
  {
    ref: "[14]",
    title: "Damage Identification in Beam-Type Structures using Effect of First-Order Perturbation on Eigen Properties",
    cite: "Faridi, M. A., Roy, K. and Singhal, V. \\",
    date: "December 20–22, 2018",
  },
  {
    ref: "[15]",
    title: "Application of response surface-based model updating in damage identification using dynamic responses",
    cite: "Anjneya, K. and Roy, K. \\",
    date: "December 19–21, 2018",
    url: "https://www.researchgate.net/publication/346651039_RESPONSE_SURFACE-BASED_MODEL_UPDATING_IN_STRUCTURAL_DAMAGE_IDENTIFICATION_USING_DYNAMIC_RESPONSES",
  },
  {
    ref: "[16]",
    title: "A Closed-Form Solution and Comparison for the One-Dimensional Orthorhombic Quasicrystal and Crystal Plate",
    cite: "Bhardwaj, A. and Roy, K. \\",
    date: "July 22–27, 2018",
  },
  {
    ref: "[17]",
    title: "Modal parameter-based Damage Identification in Cylindrical Pipe using Dynamic Response",
    cite: "Gaurav, K., Sonam, K., Singhal, V. and Roy, K. \\",
    date: "September 10–13, 2017",
    url: "https://www.researchgate.net/publication/319654625_Modal_parameter-based_Damage_Identification_in_Cylindrical_Pipe_using_Dynamic_Response",
  },
  {
    ref: "[18]",
    title: "Behavior of Elevated Liquid Storage Tank under Near Fault Earthquakes",
    cite: "Roy, K., Gur, S. and Mishra, S. K. \\",
    date: "April 24–25, 2017",
  },
  {
    ref: "[19]",
    title: "Performance of Various Vibration-Based Output-only Techniques In Structural Modal Identification",
    cite: "Roy, K. and Ray-Chaudhuri, S. \\",
    date: "September 28–30, 2016",
  },
  {
    ref: "[20]",
    title: "Fundamental Mode Shape to Localize Delamination in Cantilever Composite Plates using Laser Doppler Vibrometer",
    cite: "Roy, K., Agrawal, S., Bhattacharya, B. and Ray-Chaudhuri, S. \\",
    date: "December 22–24, 2014",
  },
  {
    ref: "[21]",
    title: "Fundamental Mode Shape in Structural Damage Quantification",
    cite: "Roy, K. and Ray-Chaudhuri, S. \\",
    date: "December 11–13, 2014",
  },
  {
    ref: "[22]",
    title: "A novel bridge structure damage diagnosis algorithm based on statistical pattern recognition",
    cite: "Xiao, H., Lu, C., Ogai, H. and Roy, K. \\",
    date: "September 9–12, 2014",
  },
  {
    ref: "[23]",
    title: "Damage Characterization in Frame Structures Using Output-Only Modal and Feature-Based Techniques",
    cite: "Panikkaveettil, H., Roy, K. and Ray-Chaudhuri, S., \\",
    date: "March 13–15, 2014",
  },
  {
    ref: "[24]",
    title: "Effect of Soil-Structure Interaction on Identified Modal Parameters and Damage Localization",
    cite: "Roy K., Panikkaveettil, H., Ray-Chaudhuri, S and Raychowdhury, P., \\",
    date: "September 24–28, 2012",
  },
  {
    ref: "[25]",
    title: "On development of a new seismic base isolation system",
    cite: "Chakraborty, S., Roy, K., Chinta, C., and Ray-Chaudhuri, S., \\",
    date: "September 17–19, 2012",
  },
  {
    ref: "[26]",
    title: "Damage Detection of Bridge Using Wireless Sensors",
    cite: "Roy, K., Ogai, H., Bhattacharya, B., Ray-Chaudhuri, S. and Qin, J., \\",
    date: "September 10–12, 2012",
  },
  {
    ref: "[27]",
    title: "Comparative Study of Various Vibration-based Structural Damage Detection Techniques",
    cite: "Roy, K. and Ray-Chaudhuri, S., \\",
    date: "March 23–25, 2012",
  },
  {
    ref: "[28]",
    title: "Autoregressive Model for Structural Condition Assessment in Presence of Parametric Uncertainty",
    cite: "Roy, K. and Ray-Chaudhuri, S., \\",
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
