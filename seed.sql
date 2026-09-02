-- seed.sql synced with prisma/schema.prisma

TRUNCATE TABLE "Publication" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "ResearchGrant" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Student" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Award" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "ConsultancyProject" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "JourneyItem" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "SiteSettings" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "ProfileLink" RESTART IDENTITY CASCADE;

INSERT INTO "Publication" ("ref", "title", "cite", "date", "type", "updatedAt") VALUES
('[1]', 'Fundamental Mode Shape and its Derivative in Structural Damage Localization', 'Roy, K. and Ray-Chaudhuri, S., Journal of Sound and Vibration, 332 (21), 5584-5593', '2013', 'journal', NOW()),
('[2]', 'ARX Model-based Damage Sensitive Features for Structural Damage Localization using Output-only Measurements', 'Roy, K., Bhattacharya, B. and Ray-Chaudhuri, S., Journal of Sound and Vibration, 349, 99-122', '2015', 'journal', NOW()),
('[3]', 'Tuned-liquid-column ball-damper for seismic vibration control', 'Gur, S., Roy K. and Mishra, S. K., Structural Control and Health Monitoring, 22(11), 1325-1342', '2015', 'journal', NOW()),
('[4]', 'Response of Bridges Isolated by Shape Memory—Alloy Rubber Bearing', 'Mishra, S. K., Gur, S., Roy, K. and Chakraborty, S., Journal of Bridge Engineering (ASCE), 21(3), 04015071', '2015', 'journal', NOW()),
('[5]', 'Stochastic Seismic Response of Buildings with Shape-Memory- Alloy Dampers', 'Gur, S., Roy K. and Mishra, S. K., Mechanical Systems and Signal Processing, 72-73, 642-659', '2016', 'journal', NOW()),
('[6]', 'Design of re-centering spring for flat sliding base isolation system: Theory and a numerical study', 'Chakraborty, S., Roy, K. and Ray-Chaudhuri, S., Engineering Structures, 126, 66-77', '2016', 'journal', NOW()),
('[7]', 'Structural Damage Identification using Mode Shape Slope and Curvature', 'Roy, K., Journal of Engineering Mechanics (ASCE), 143(9), 04017110', '2017', 'journal', NOW()),
('[8]', 'Response surface-based structural damage identification using dynamic responses', 'Anjneya, K and Roy K., Structures, 29, 1047-1058', '2021', 'journal', NOW()),
('[9]', 'Fundamental Mode Shape-based Structural Damage Quantification via Spectral Element Method', 'Chaudhary, P. K., Anjneya, K and Roy, K., Journal of Engineering Mechanics (ASCE), 147(11), 04021091', '2021', 'journal', NOW()),
('[10]', 'Acceleration time history dataset for a 3D miniature model of a shear building with structural damage', 'Anjneya, K. and Roy K., Data in Brief, 38, 107337', '2021', 'journal', NOW()),
('[11]', 'A state-of-the-art review on FRF-based structural damage detection: Development in last two decades and way forward', 'Das, S. and Roy, K., International Journal of Structural Stability and Dynamics, 22(2), 2230001', '2022', 'journal', NOW()),
('[12]', 'Seismic performance assessment of adjacent building structures connected with superelastic SMA damper and comparison with yield damper', 'Gur, S. Roy, K. and Singh, P., Structural Control and Health Monitoring, 29(5), e2926', '2022', 'journal', NOW()),
('[13]', 'Perturbation Approach for Damage Localization in Beam- type Structures: Analytical, Experimental and Numerical Exposition', 'Faridi, M. A., Roy, K. and Singhal, V., Journal of Structural Integrity and Maintenance, 8(2), 111-120', '2022', 'journal', NOW()),
('[14]', 'Structural damage quantification in shear buildings using mode shape slope ratio', 'Roy, K., Structural Health Monitoring, 22(4), 2346-2359', '2023', 'journal', NOW()),
('[15]', 'Application of Bridge Weigh-in-Motion system in Bridge Health Monitoring: A state-of-the-art review', 'Paul, D. and Roy, K., Structural Health Monitoring, 22(6), 4194-4232', '2023', 'journal', NOW()),
('[16]', 'Performance assessment of time-domain damage indicators based on output-only measurements and Poincaré map: A comparative review on nonlinear structures', 'Ganguly, S. and Roy, K., Measurement, 216, 112847', '2023', 'journal', NOW()),
('[17]', 'Propagation of material uncertainty in modal parameters and its influence in damage quantification of shear buildings', 'Das, S. and Roy, K., Probabilistic Engineering Mechanics, 74, 103539', '2023', 'journal', NOW()),
('[18]', 'Using limited roving sensors to monitor bridge subjected to random traffic load', 'Faridi, M. A., Kuncham, E., Roy, K. and Singhal, V., Journal of Civil Structural Health Monitoring, 14, 693-710', '2024', 'journal', NOW()),
('[19]', 'Damage quantification in beam-type structures using modal curvature ratio', 'Faridi, M. A., Roy, K. and Singhal, V., Innovative Infrastructure Solutions, 9 (44), 1-22', '2024', 'journal', NOW()),
('[20]', 'Application of Covariance statistical method for damage identification on railway truss bridge using acceleration response: Experimental and numerical validation', 'Faridi, M. A., Roy, K. and Singhal, V., Structural Health Monitoring, 23 (6), 3883-3903', '2024', 'journal', NOW()),
('[21]', 'Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings', 'Das, S. and Roy, K., Mechanical Systems and Signal Processing, 216, 111454', '2024', 'journal', NOW()),
('[22]', 'Forced Vibration Analysis using ‘Elmer’ FEM Package to Develop Poincaré Map and Correlation Method-based Damage Indicators', 'Ganguly, S. and Roy, K., Journal of Engineering Research, 13(2), 1316-1328', '2025', 'journal', NOW()),
('[23]', 'Damage quantification using spectral response of a multi-degree-of-freed om system with spatial and temporal stiffness variations: Application to shear-type frames', 'Ganguly, S. and Roy, K., Measurement, 242(E), 116109', '2025', 'journal', NOW()),
('[24]', 'Baseline-free localization and quantification of structural damage using spectral response', 'Ganguly, S. and Roy, K., Applied Mathematical Modelling, 142, 115967', '2025', 'journal', NOW()),
('[25]', 'Influence of flexible boundary on damage quantification in shear buildings by FRF-based approach', 'Das, S., Grover, D. and Roy, K., Advances in Structural Engineering, 28(12), 2293-2316', '2025', 'journal', NOW()),
('[26]', 'A Comprehensive Review on Recent Technological Advancements in Ship Hull Health Monitoring Systems', 'Mandal, K., Roy, K. and Ghoshal, R., Ships and Offshore Structures, Accepted', '2026', 'journal', NOW()),
('[27]', 'Localization and quantification of damage along transverse direction of bridges using bridge weigh-in-motion', 'Paul, D. and Roy, K., Journal of Bridge Engineering (ASCE), 31(5), 04026018', '2026', 'journal', NOW()),
('[28]', 'Autoregressive Model for Structural Condition Assessment in Presence of Parametric Uncertainty', 'Roy, K. and Ray-Chaudhuri, S., International symposium on engineering under uncertainty: safety assessment and management (ISEUSAM 2012), BESU, Shibpur, India, 1061-1072', '2012', 'conference', NOW()),
('[29]', 'Comparative Study of Various Vibration-based Structural Damage Detection Techniques', 'Roy, K. and Ray-Chaudhuri, S., Asian pacific symposium on structural Reliability and its applications (APSSRA 2012), NUS, Singapore', '2012', 'conference', NOW()),
('[30]', 'Damage Detection of Bridge Using Wireless Sensors', 'Roy, K., Ogai, H., Bhattacharya, B., Ray-Chaudhuri, S. and Qin, J., International federation of automation and control (IFAC), Mining, Mineral and Metal Industries (MMM 2012), Nagaragawa, Gifu, Japan, 107-111', '2012', 'conference', NOW()),
('[31]', 'On development of a new seismic base isolat ion system', 'Chakraborty, S., Roy, K., Chinta, C., and Ray-Chaudhuri, S., 6th international conference on scalable uncertainty management (SUM 2012), Marburg, Germany, 574-581', '2012', 'conference', NOW()),
('[32]', 'Effect of Soil-Structure Interaction on Identified Modal Parameters and Damage Localization', 'Roy K., Panikkaveettil, H., Ray-Chaudhuri, S. and Raychowdhury, P., 15th world conference in earthquake engineering (WCEE 2012), Lisbon, Portugal', '2012', 'conference', NOW()),
('[33]', 'Damage Characterization in Frame Structures Using Output-Only Modal and Feature-Based Techniques', 'Panikkaveettil, H., Roy, K. and Ray-Chaudhuri, S., Advances in control and optimization of dynamical systems (ACODS 2014), IIT Kanpur, India, 973-980', '2014', 'conference', NOW()),
('[34]', 'A novel bridge structure damage diagnosis algorithm based on statistical pattern recognition', 'Xiao, H., Lu, C., Ogai, H. and Roy, K., SICE annual conference (IEEE), Hokkaido University, Sapporo, Japan, 775-780', '2014', 'conference', NOW()),
('[35]', 'Fundamental Mode Shape in Structural Damage Quantification', 'Roy, K. and Ray-Chaudhuri, S., Symposium on earthquake engineering (SEE 2014), IIT Roorkee, India', '2014', 'conference', NOW()),
('[36]', 'Fundamental Mode Shape to Localize Delamination in Cantilever Composite Plates using Laser Doppler Vibrometer', 'Roy, K., Agrawal, S., Bhattacharya, B. and Ray-Chaudhuri, S., 9th Structural Engineering Convention 2014 (SEC2014), IIT Delhi, India, 2621-2633', '2014', 'conference', NOW()),
('[37]', 'Performance of Various Vibration-Based Output-only Techniques In Structural Modal Identification', 'Roy, K. and Ray-Chaudhuri, S., ISSS National Conference on MEMS, Smart Materials, Structures and Systems, IIT Kanpur, India', '2016', 'conference', NOW());

INSERT INTO "ResearchGrant" ("title", "agency", "period", "grant", "role", "updatedAt") VALUES
('Development of Structural Health Monitoring Technique for Existing Bridges in Bihar', 'Bihar Rajya Pul Nirman Nigam', '2018-2019', '2.7 Lakhs', 'PI', NOW()),
('Performance Evaluation of Cement Concrete Pavements in Rural Roads', 'Ministry of Rural Development, Govt. of India', '2022-2024', '25.36 Lakhs', 'Co-PI', NOW()),
('FIST Engineering Science Level B/C/D project', 'DST-FIST', '2023-2027', '96.0 Lakhs', 'Co-PI', NOW()),
('Feasibility of stone dust as partial replacement for sand in the concrete mix', 'Hindustan Steelworks Construction Limited', '2024-2026', '24.68 Lakhs', 'PI', NOW()),
('Utilizing Steel Slag Aggregates in Concrete Paver Blocks', 'Hindustan Steelworks Construction Limited', '2025-2027', '24.96 Lakhs', 'PI', NOW()),
('Utilization of Mixed Waste Coal Aggregates (MWCA) in Rigid and Flexible Pavements', 'Hindustan Steelworks Construction Limited', '2025-2028', '23.95 Lakhs', 'Co-PI', NOW()),
('Start-up Grant on an Indigenous AI-enabled low cost portable device for online remote health monitoring', 'Incubation Center, IIT Patna (through Genesis EIR by MEITY)', '2025-2025', '6.0 Lakhs', 'Co-founder', NOW());

INSERT INTO "Student" ("name", "year", "thesis", "degree", "status", "updatedAt") VALUES
('Md. Arif Faridi', '2024', 'Health Assessment of Bridge-Type Structures Using Output-Only Dynamic Response', 'PhD', 'graduated', NOW()),
('Saranika Das', '2025', 'Multi-Damage Quantification by FRF-based Technique considering Soil-Structure Interaction and Material Uncertainty', 'PhD', 'graduated', NOW()),
('Sayandip Ganguly', '2025', 'Prognosis of shear buildings through damage quantification with nonlinearity and reference-free output only response', 'PhD', 'graduated', NOW()),
('Debojyoti Paul', '2026', 'B-WIM System-based Damage Localization and Quantification in Concrete Slab-Beam Bridges using Influence Surface: Numerical and Scale-down Experimental Investigations', 'PhD', 'graduated', NOW());

INSERT INTO "Award" ("title", "detail", "date", "updatedAt") VALUES
('Conference Chair', 'ISSS National Conference on MEMS, Smart Materials, Structures and Systems, IIT Kanpur. Chaired the conference held during September 28-30, 2016', '2016', NOW()),
('DAAD Fellowship', 'Deutscher Akademischer Austausch Dienst. Awarded for the Master Sandwich Program (MSP 2009) to pursue master’s thesis in KIT, Germany', '2009', NOW()),
('Kizuna Project Representative', 'Japan International Cooperation Center, Japan. Represented India''s third batch in The Youth-Exchange Project with Asia-Oceania and North America', '2013', NOW()),
('UKIERI Grant', 'UK-India Education and Research Initiative. Grant to pursue research on Integrated Sensing, Monitoring and Healing for Complex Autonomous Systems, University of Sheffield', '2013', NOW()),
('Travel Funding (WCEE & SUM)', 'Resources and Alumni, IIT Kanpur. Attended 15th WCEE in Lisbon, Portugal, and 6th SUM in Marburg, Germany', '2012', NOW()),
('Travel Funding (MMM)', 'Kitakyushu Foundation for the Advancement of Industry Science and Technology, Japan. Attended IFAC workshop on Automation in the Mining, Mineral and Metal Industries in Nagaragawa, Gifu, Japan', '2012', NOW()),
('Teaching Assistantship (PhD)', 'Ministry of Human Resource Development, Government of India. Pursuing Doctor of Philosophy at IIT Kanpur', '2014', NOW());

INSERT INTO "ConsultancyProject" ("title", "client", "period", "value", "role", "description", "updatedAt") VALUES
('Investigation of Structural Safety of Bihar State Chief Minister’s Residence', 'Building Construction Department, Govt. of Bihar', '2016', '1.05 Lakhs', '1 more PI', 'Investigation of Structural Safety of Bihar State Chief Minister’s Residence', NOW()),
('Structural Design Vetting of Buddha Smriti Stupa and Museum at Vaishali, Bihar', 'Building Construction Department, Govt. of Bihar', '2016', '17.25 Lakhs', '1 more PI', 'Structural Design Vetting of Buddha Smriti Stupa and Museum at Vaishali, Bihar', NOW()),
('Proof Checking of Structural Design of Govt. Medical College & Hospital, Purnea', 'BMSICL, Govt. of Bihar', '2019', '11.36 Lakhs', '4 more PIs', 'Proof Checking of Structural Design of Govt. Medical College & Hospital, Purnea', NOW()),
('Proof Checking of Structural Design for Construction of constable barrack at New Police Line, Patna', 'Bihar Police Building Construction, Govt. of Bihar', '2019', '6.00 Lakhs', '4 more PIs', 'Proof Checking of Structural Design for Construction of constable barrack at New Police Line, Patna', NOW()),
('Performance of destructive/non-destructive tests on a well cap in connection with Hajipur-Sagauli New BG Rail line project', 'Chief Engineer/Con/II/HJP, East Central Railway', '2020', '1.55 Lakhs', '1 more PI', 'Performance of destructive/non-destructive tests on a well cap in connection with Hajipur-Sagauli New BG Rail line project', NOW()),
('One-time Visit for Visual Inspection for a building at NIPER, Hajipur', 'Director, Additional-charge, NIPER-Hajipur', '2021', '1.11 Lakhs', '2 more PIs', 'One-time Visit for Visual Inspection for a building at NIPER, Hajipur', NOW()),
('State technical Agency of PMGSY as Structural Engineering-Bridge Expert', 'Rural Works Department, Govt. of Bihar', '2020', '', '', 'State technical Agency of PMGSY as Structural Engineering-Bridge Expert', NOW()),
('Third-party quality Assurance of Up-gradation of PMCH Under PMSSY-Phase-IV', 'CPWD, Patna', '2021', '25.97 Lakhs', '5 more PIs and 2 Co-PIs', 'Third-party quality Assurance of Up-gradation of PMCH Under PMSSY-Phase-IV', NOW()),
('Third-Party Quality Assurance and Inspection (TPQAI) of projects under Muzaffarpur Smart City Limited (MSCL)', 'Muzaffarpur Smart City Ltd, Muzaffarpur, Bihar', '2022', '161.86 Lakhs', '6 more PIs and 4 Co-Pls', 'Third-Party Quality Assurance and Inspection (TPQAI) of projects under Muzaffarpur Smart City Limited (MSCL)', NOW()),
('Third-Party Quality Assurance and Inspection (TPQAI) of projects under Bihar Sharif Smart City Limited (BSSCL)', 'Bihar Sharif Smart City Ltd, Bihar Sharif, Bihar', '2022', '116.04 Lakhs', '7 more PIs and 2 Co-PIs', 'Third-Party Quality Assurance and Inspection (TPQAI) of projects under Bihar Sharif Smart City Limited (BSSCL)', NOW()),
('Third-Party Quality Assurance and Inspection (TPQAI) of projects under Bhagalpur Smart City Limited (BSCL)', 'Bhagalpur Smart City Ltd, Bhagalpur, Bihar', '2022', '143.64 Lakhs', '7 more Pls and 5 Co-PIs', 'Third-Party Quality Assurance and Inspection (TPQAI) of projects under Bhagalpur Smart City Limited (BSCL)', NOW());

INSERT INTO "JourneyItem" ("type", "title", "institution", "period", "location", "thesis", "description") VALUES
('academic', 'Doctor of Philosophy', 'IIT Kanpur', '2010 - 2015', 'India - 208016', 'Vibration-based Structural Damage Localization and Characterization using Output-only Measurements', 'Structural Engineering'),
('academic', 'Master of Technology', 'IIT Roorkee / KIT', '2008 - 2010', 'India - 247667 / Karlsruhe, Germany', 'Stochastic Extension of the Burridge-Knopoff Model for Earthquake', 'Structural Dynamics'),
('academic', 'Bachelor of Engineering', 'Bengal Engineering and Science University, Shibpur', '2004 - 2008', 'India - 711103', '', 'Civil Engineering'),
('professional', 'Assistant Professor', 'IIT Patna, India', '2015 - Present', NULL, NULL, 'Department of Civil and Environmental Engineering'),
('professional', 'Project Engineer', 'IIT Kanpur, India', '2014 - 2015', NULL, NULL, 'Smart Materials, Structures and Systems Laboratory, Department of Mechanical Engineering'),
('administrative', 'Member, Task Force, Housing for All Scheme, Ministry of Housing and Urban Poverty Alleviation, Govt. of India', 'N/A', '2015-16', NULL, NULL, NULL),
('administrative', 'IIT Representative in JEE (Advanced)', 'N/A', '2017, 2018 & 2025', NULL, NULL, NULL),
('administrative', 'Expert member on Structural Engineering, State Technical Agency, Pradhan Mantri Gram Sadak Yojana', 'N/A', '2020', NULL, NULL, NULL),
('administrative', 'JoSAA representative for JEE (Advanced)', 'N/A', '2021', NULL, NULL, NULL),
('administrative', 'Lifetime member (LM 1904) of Indian Society of Earthquake Technology (Reg. No. 845/64-65)', 'N/A', 'N/A', NULL, NULL, NULL),
('administrative', 'Fellow, Indian Structural Health Monitoring Society (Fellow ID: FL 2026 003)', 'N/A', 'N/A', NULL, NULL, NULL),
('administrative', 'External member, Committee for evaluation of the best Ph.D thesis in Department of Civil Engineering, IIT Kanpur', 'N/A', '2024 & 2025', NULL, NULL, NULL),
('administrative', 'Examiner, PMRF annual review', 'N/A', '2024', NULL, NULL, NULL);

