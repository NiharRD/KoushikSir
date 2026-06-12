"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight, BookOpen, Layers, BarChart, Settings } from "lucide-react"

type ResearchItem = {
  ref: string
  title: string
  date?: string
  url?: string
}

const ARTICLES: ResearchItem[] = [
  {
    ref: "[01]",
    title: "Localization and Quantification of Damage along the Transverse Direction of Bridges Using Bridge Weigh-in-Motion Systems",
    date: "May 2026",
    url: "https://www.researchgate.net/publication/404328330_Localization_and_Quantification_of_Damage_along_the_Transverse_Direction_of_Bridges_Using_Bridge_Weigh-in-Motion_Systems",
  },
  {
    ref: "[02]",
    title: "Baseline-free localization and quantification of structural damage using spectral response",
    date: "June 2025",
    url: "https://www.researchgate.net/publication/388290357_Baseline-free_localization_and_quantification_of_structural_damage_using_spectral_response",
  },
  {
    ref: "[03]",
    title: "Damage quantification using spectral response of a multi-degree-of-freedom system with spatial and temporal stiffness variations: Application to shear-type frames",
    date: "November 2024",
    url: "https://www.researchgate.net/publication/385838726_Damage_quantification_using_spectral_response_of_a_multi-degree-of-freedom_system_with_spatial_and_temporal_stiffness_variations_Application_to_shear-type_frames",
  },
  {
    ref: "[04]",
    title: "Frequency response function-based closed-form expression for multi-damage quantification and its application on shear buildings",
    date: "April 2024",
    url: "https://www.researchgate.net/publication/380323727_Frequency_response_function-based_closed-form_expression_for_multi-damage_quantification_and_its_application_on_shear_buildings",
  },
  {
    ref: "[05]",
    title: "Nonlinear Forced Vibration Analysis using ‘Elmer’ FEM Package to Develop Poincaré Map and Correlation Method-based Damage Indicators",
    date: "March 2024",
    url: "https://www.researchgate.net/publication/378948831_Nonlinear_Forced_Vibration_Analysis_using_'Elmer'_FEM_Package_to_Develop_Poincare_Map_and_Correlation_Method-based_Damage_Indicators",
  },
  {
    ref: "[06]",
    title: "Application of covariance statistical method for damage identification on railway truss bridge using acceleration response: experimental and numerical validation",
    date: "February 2024",
    url: "https://www.researchgate.net/publication/378540088_Application_of_covariance_statistical_method_for_damage_identification_on_railway_truss_bridge_using_acceleration_response_experimental_and_numerical_validation",
  },
  {
    ref: "[07]",
    title: "Damage quantification in beam-type structures using modal curvature ratio",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/377643774_Damage_quantification_in_beam-type_structures_using_modal_curvature_ratio",
  },
  {
    ref: "[08]",
    title: "Using limited roving sensors to monitor bridge subjected to random traffic load",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/377299390_Using_limited_roving_sensors_to_monitor_bridge_subjected_to_random_traffic_load",
  },
  {
    ref: "[09]",
    title: "Reliability of Estimated Damage Quantity in Presence of Material and Measurement Uncertainty",
    date: "January 2024",
    url: "https://www.researchgate.net/publication/385676375_Reliability_of_Estimated_Damage_Quantity_in_Presence_of_Material_and_Measurement_Uncertainty",
  },
  {
    ref: "[10]",
    title: "Propagation of material uncertainty in modal parameters and its influence in damage quantification of shear buildings",
    date: "September 2023",
    url: "https://www.researchgate.net/publication/374244205_Propagation_of_material_uncertainty_in_modal_parameters_and_its_influence_in_damage_quantification_of_shear_buildings",
  },
  {
    ref: "[11]",
    title: "Perturbation approach for damage localization in beam-type structures: analytical, experimental and numerical exposition",
    date: "April 2023",
    url: "https://www.researchgate.net/publication/370572064_Perturbation_approach_for_damage_localization_in_beam-type_structures_analytical_experimental_and_numerical_exposition",
  },
  {
    ref: "[12]",
    title: "Performance assessment of time-domain damage indicators based on output-only measurement and Poincaré map: A comparative review on nonlinear structures",
    date: "April 2023",
    url: "https://www.researchgate.net/publication/370079622_Performance_assessment_of_time-domain_damage_indicators_based_on_output-only_measurement_and_Poincare_map_A_comparative_review_on_nonlinear_structures",
  },
  {
    ref: "[13]",
    title: "Application of bridge weigh-in-motion system in bridge health monitoring: a state-of-the-art review",
    date: "March 2023",
    url: "https://www.researchgate.net/publication/368991650_Application_of_bridge_weigh-in-motion_system_in_bridge_health_monitoring_a_state-of-the-art_review",
  },
  {
    ref: "[14]",
    title: "Structural damage quantification in shear buildings using mode shape slope ratio",
    date: "September 2022",
    url: "https://www.researchgate.net/publication/363682218_Structural_damage_quantification_in_shear_buildings_using_mode_shape_slope_ratio",
  },
  {
    ref: "[15]",
    title: "Seismic performance assessment of adjacent building structures connected with superelastic shape memory alloy damper and comparison with yield damper",
    date: "January 2022",
    url: "https://www.researchgate.net/publication/357931121_Seismic_performance_assessment_of_adjacent_building_structures_connected_with_superelastic_shape_memory_alloy_damper_and_comparison_with_yield_damper",
  },
  {
    ref: "[16]",
    title: "A State-of-the-Art Review on FRF-Based Structural Damage Detection: Development in Last Two Decades and Way Forward",
    date: "December 2021",
    url: "https://www.researchgate.net/publication/356923485_A_State-of-the-Art_Review_on_FRF-Based_Structural_Damage_Detection_Development_in_Last_Two_Decades_and_Way_Forward",
  },
  {
    ref: "[17]",
    title: "Acceleration time history dataset for a 3D miniature model of a shear building with structural damage",
    date: "September 2021",
    url: "https://www.researchgate.net/publication/354651428_Acceleration_time_history_dataset_for_a_3D_miniature_model_of_a_shear_building_with_structural_damage",
  },
  {
    ref: "[18]",
    title: "Fundamental Mode Shape-Based Structural Damage Quantification Using Spectral Element Method",
    date: "August 2021",
    url: "https://www.researchgate.net/publication/354142994_Fundamental_Mode_Shape-Based_Structural_Damage_Quantification_Using_Spectral_Element_Method",
  },
  {
    ref: "[19]",
    title: "Response surface-based structural damage identification using dynamic responses",
    date: "February 2021",
    url: "https://www.researchgate.net/publication/347442567_Response_surface-based_structural_damage_identification_using_dynamic_responses",
  },
  {
    ref: "[20]",
    title: "A Peptide-based Synthetic Transcription Factor Selectively Activates Transcription in a Mammalian Cell",
    date: "January 2018",
    url: "https://www.researchgate.net/publication/322511662_A_Peptide-based_Synthetic_Transcription_Factor_Selectively_Activates_Transcription_in_a_Mammalian_Cell",
  },
  {
    ref: "[21]",
    title: "Modal parameter-based Damage Identification in Cylindrical Pipe using Dynamic Response",
    date: "December 2017",
    url: "https://www.researchgate.net/publication/319654625_Modal_parameter-based_Damage_Identification_in_Cylindrical_Pipe_using_Dynamic_Response",
  },
  {
    ref: "[22]",
    title: "Structural Damage Identification Using Mode Shape Slope and Curvature",
    date: "September 2017",
    url: "https://www.researchgate.net/publication/318777679_Structural_Damage_Identification_Using_Mode_Shape_Slope_and_Curvature",
  },
  {
    ref: "[23]",
    title: "Design of re-centering spring for flat sliding base isolation system: Theory and a numerical study",
    date: "November 2016",
    url: "https://www.researchgate.net/publication/306416896_Design_of_re-centering_spring_for_flat_sliding_base_isolation_system_Theory_and_a_numerical_study",
  },
  {
    ref: "[24]",
    title: "Cholesterol Corrects Altered Conformation of MHC-II Protein in Leishmania donovani Infected Macrophages: Implication in Therapy",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/303469489_Cholesterol_Corrects_Altered_Conformation_of_MHC-II_Protein_in_Leishmania_donovani_Infected_Macrophages_Implication_in_Therapy",
  },
  {
    ref: "[25]",
    title: "Damage Detection of Bridge using Wireless Sensors",
    date: "April 2016",
    url: "https://www.researchgate.net/publication/363840487_Damage_Detection_of_Bridge_using_Wireless_Sensors",
  },
  {
    ref: "[26]",
    title: "Correction: Leishmania donovani Infection Enhances Lateral Mobility of Macrophage Membrane Protein Which Is Reversed by Liposomal Cholesterol",
    date: "April 2016",
    url: "https://www.researchgate.net/publication/307851192_Correction_Leishmania_donovani_Infection_Enhances_Lateral_Mobility_of_Macrophage_Membrane_Protein_Which_Is_Reversed_by_Liposomal_Cholesterol",
  },
  {
    ref: "[27]",
    title: "Response of Bridges Isolated by Shape Memory–Alloy Rubber Bearing Read More",
    date: "December 2015",
    url: "https://www.researchgate.net/publication/288827296_Response_of_Bridges_Isolated_by_Shape_Memory-Alloy_Rubber_Bearing_Read_More",
  },
  {
    ref: "[28]",
    title: "Stochastic seismic response of building with super-elastic damper",
    date: "November 2015",
    url: "https://www.researchgate.net/publication/285216135_Stochastic_seismic_response_of_building_with_super-elastic_damper",
  },
  {
    ref: "[29]",
    title: "ARX model-based damage sensitive features for structural damage localization using output-only measurements",
    date: "August 2015",
    url: "https://www.researchgate.net/publication/276152086_ARX_model-based_damage_sensitive_features_for_structural_damage_localization_using_output-only_measurements",
  },
  {
    ref: "[30]",
    title: "Tuned liquid column ball damper for seismic vibration control",
    date: "March 2015",
    url: "https://www.researchgate.net/publication/274141271_Tuned_liquid_column_ball_damper_for_seismic_vibration_control",
  },
  {
    ref: "[31]",
    title: "Damage Characterization in Frame Structures using Output-only Modal and Feature-based Techniques",
    date: "December 2014",
    url: "https://www.researchgate.net/publication/286190878_Damage_Characterization_in_Frame_Structures_using_Output-only_Modal_and_Feature-based_Techniques",
  },
  {
    ref: "[32]",
    title: "Leishmania donovani Infection Enhances Lateral Mobility of Macrophage Membrane Protein Which Is Reversed by Liposomal Cholesterol",
    date: "December 2014",
    url: "https://www.researchgate.net/publication/269169357_Leishmania_donovani_Infection_Enhances_Lateral_Mobility_of_Macrophage_Membrane_Protein_Which_Is_Reversed_by_Liposomal_Cholesterol",
  },
  {
    ref: "[33]",
    title: "Simultaneous Inhibition of Key Growth Pathways in Melanoma Cells and Tumor Regression by a Designed Bidentate Constrained Helical Peptide",
    date: "July 2014",
    url: "https://www.researchgate.net/publication/262418934_Simultaneous_Inhibition_of_Key_Growth_Pathways_in_Melanoma_Cells_and_Tumor_Regression_by_a_Designed_Bidentate_Constrained_Helical_Peptide",
  },
  {
    ref: "[34]",
    title: "Class II MHC/Peptide Interaction in Leishmania donovani Infection: Implications in Vaccine Design",
    date: "May 2014",
    url: "https://www.researchgate.net/publication/262581166_Class_II_MHCPeptide_Interaction_in_Leishmania_donovani_Infection_Implications_in_Vaccine_Design",
  },
  {
    ref: "[35]",
    title: "Fundamental mode shape and its derivatives in structural damage localization",
    date: "October 2013",
    url: "https://www.researchgate.net/publication/260703268_Fundamental_mode_shape_and_its_derivatives_in_structural_damage_localization",
  },
  {
    ref: "[36]",
    title: "Cholesterol lowering drug may influence cellular immune response by altering MHC II function",
    date: "September 2013",
    url: "https://www.researchgate.net/publication/256612709_Cholesterol_lowering_drug_may_influence_cellular_immune_response_by_altering_MHC_II_function",
  },
  {
    ref: "[37]",
    title: "Carrier protein influences immunodominance of a known epitope: Implication in peptide vaccine design",
    date: "August 2013",
    url: "https://www.researchgate.net/publication/255714778_Carrier_protein_influences_immunodominance_of_a_known_epitope_Implication_in_peptide_vaccine_design",
  },
  {
    ref: "[38]",
    title: "Immunomodulatory effects of antileishmanial drugs",
    date: "July 2013",
    url: "https://www.researchgate.net/publication/247153732_Immunomodulatory_effects_of_antileishmanial_drugs",
  },
  {
    ref: "[39]",
    title: "Synthesis, characterization and in vitro cytotoxicity assessment of hydroxyapatite from different bioresources for tissue engineering application",
    date: "August 2012",
    url: "https://www.researchgate.net/publication/257766405_Synthesis_characterization_and_in_vitro_cytotoxicity_assessment_of_hydroxyapatite_from_different_bioresources_for_tissue_engineering_application",
  },
  {
    ref: "[40]",
    title: "Peptide based Molecules as Protein-Protein Interaction Inhibitors: Tools for Chemical Genetics and Therapy",
    date: "May 2012",
    url: "https://www.researchgate.net/publication/280085995_Peptide_based_Molecules_as_Protein-Protein_Interaction_Inhibitors_Tools_for_Chemical_Genetics_and_Therapy",
  },
  {
    ref: "[41]",
    title: "Peptide based Molecules as Protein-Protein Interaction Inhibitors: Tools for Chemical Genetics and Therapy",
    date: "May 2012",
    url: "https://www.researchgate.net/publication/280085946_Peptide_based_Molecules_as_Protein-Protein_Interaction_Inhibitors_Tools_for_Chemical_Genetics_and_Therapy",
  },
  {
    ref: "[42]",
    title: "A Synthetic Peptide Mimic of λ-Cro shows Sequence-Specific Binding in Vitro and in Vivo",
    date: "April 2012",
    url: "https://www.researchgate.net/publication/223962020_A_Synthetic_Peptide_Mimic_of_l-Cro_shows_Sequence-Specific_Binding_in_Vitro_and_in_Vivo",
  },
  {
    ref: "[43]",
    title: "Restoration of IFNγR Subunit Assembly, IFNγ Signaling and Parasite Clearance in Leishmania donovani Infected Macrophages: Role of Membrane Cholesterol",
    date: "September 2011",
    url: "https://www.researchgate.net/publication/51652846_Restoration_of_IFNgR_Subunit_Assembly_IFNg_Signaling_and_Parasite_Clearance_in_Leishmania_donovani_Infected_Macrophages_Role_of_Membrane_Cholesterol",
  },
  {
    ref: "[44]",
    title: "Alternative Sigma Factors in the Free State Are Equilibrium Mixtures of Open and Compact Conformations",
    date: "October 2010",
    url: "https://www.researchgate.net/publication/47348729_Alternative_Sigma_Factors_in_the_Free_State_Are_Equilibrium_Mixtures_of_Open_and_Compact_Conformations",
  },
]

const CHAPTERS: ResearchItem[] = [
  {
    ref: "[01]",
    title: "Numerical Investigation on the Influence of Soil-Structure Interaction in Damage Quantification of Shear Buildings",
    date: "July 2025",
    url: "https://www.researchgate.net/publication/394766456_Numerical_Investigation_on_the_Influence_of_Soil-Structure_Interaction_in_Damage_Quantification_of_Shear_Buildings",
  },
  {
    ref: "[02]",
    title: "A Novel Damage Indicator Evolved from the Poincaré Map for Localization of Seismic Damage in a Structure with Nonlinear Breathing Crack",
    date: "July 2023",
    url: "https://www.researchgate.net/publication/372715395_A_Novel_Damage_Indicator_Evolved_from_the_Poincare_Map_for_Localization_of_Seismic_Damage_in_a_Structure_with_Nonlinear_Breathing_Crack",
  },
  {
    ref: "[03]",
    title: "Experimental Investigation for Quantifying Damage Considering Soil–Structure Interaction Effect on a Small-scale Model",
    date: "July 2023",
    url: "https://www.researchgate.net/publication/372700120_Experimental_Investigation_for_Quantifying_Damage_Considering_Soil-Structure_Interaction_Effect_on_a_Small-scale_Model",
  },
  {
    ref: "[04]",
    title: "Structural Damage Quantification Using Flexibility Matrix-Based Approach",
    date: "January 2022",
    url: "https://www.researchgate.net/publication/357503702_Structural_Damage_Quantification_Using_Flexibility_Matrix-Based_Approach",
  },
  {
    ref: "[05]",
    title: "Uncertainty Propagation in Estimated Structural Parameters Owing to Univariate Uncertain Parameter Using RSM and PDEM",
    date: "November 2020",
    url: "https://www.researchgate.net/publication/346383369_Uncertainty_Propagation_in_Estimated_Structural_Parameters_Owing_to_Univariate_Uncertain_Parameter_Using_RSM_and_PDEM",
  },
  {
    ref: "[06]",
    title: "Monitoring the health of the structure",
    date: "June 2020",
    url: "https://www.researchgate.net/publication/344252926_Monitoring_the_health_of_the_structure",
  },
  {
    ref: "[07]",
    title: "Proceedings of the International Symposium on Engineering under Uncertainty: Safety Assessment and Management (ISEUSAM - 2012)",
    date: "January 2013",
    url: "https://www.researchgate.net/publication/278692639_Proceedings_of_the_International_Symposium_on_Engineering_under_Uncertainty_Safety_Assessment_and_Management_ISEUSAM_-_2012",
  },
]

const DATA_ITEMS: ResearchItem[] = [
  {
    ref: "[01]",
    title: "1-s2.0-S0888327024003522-mmc1.pdf",
    date: "May 2024",
    url: "https://www.researchgate.net/publication/380360313_1-s20-S0888327024003522-mmc1pdf",
  },
  {
    ref: "[02]",
    title: "S1 Table",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461318_S1_Table",
  },
  {
    ref: "[03]",
    title: "S6 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461315_S6_Fig",
  },
  {
    ref: "[04]",
    title: "S10 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461249_S10_Fig",
  },
  {
    ref: "[05]",
    title: "S9 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461248_S9_Fig",
  },
  {
    ref: "[06]",
    title: "S8 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461247_S8_Fig",
  },
  {
    ref: "[07]",
    title: "S4 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461245_S4_Fig",
  },
  {
    ref: "[08]",
    title: "S3 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461244_S3_Fig",
  },
  {
    ref: "[09]",
    title: "S7 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461097_S7_Fig",
  },
  {
    ref: "[10]",
    title: "S5 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461095_S5_Fig",
  },
  {
    ref: "[11]",
    title: "S1 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461094_S1_Fig",
  },
  {
    ref: "[12]",
    title: "S2 Fig",
    date: "May 2016",
    url: "https://www.researchgate.net/publication/306461013_S2_Fig",
  },
  {
    ref: "[13]",
    title: "Table S1",
    date: "September 2011",
    url: "https://www.researchgate.net/publication/293931517_Table_S1",
  },
  {
    ref: "[14]",
    title: "Figure S6",
    date: "September 2011",
    url: "https://www.researchgate.net/publication/293931475_Figure_S6",
  },
  {
    ref: "[15]",
    title: "Figure S3",
    date: "September 2011",
    url: "https://www.researchgate.net/publication/293931384_Figure_S3",
  },
  {
    ref: "[16]",
    title: "Figure S5",
    date: "September 2011",
    url: "https://www.researchgate.net/publication/293931307_Figure_S5",
  },
  {
    ref: "[17]",
    title: "Figure S4",
    date: "September 2011",
    url: "https://www.researchgate.net/publication/293931301_Figure_S4",
  },
  {
    ref: "[18]",
    title: "Figure S1",
    date: "September 2011",
    url: "https://www.researchgate.net/publication/293931295_Figure_S1",
  },
  {
    ref: "[19]",
    title: "Figure S2",
    date: "September 2011",
    url: "https://www.researchgate.net/publication/293931201_Figure_S2",
  },
]

const METHODS: ResearchItem[] = [
  {
    ref: "[01]",
    title: "Laboratory Shear building model assembling and experimentation (Kumar Anjneya & Koushik Roy)",
    date: "September 2018",
    url: "https://www.researchgate.net/publication/348264497_Laboratory_Shear_building_model_assembling_and_experimentation_Kumar_Anjneya_Koushik_Roy",
  },
]

type CategoryKey = "articles" | "chapters" | "data" | "method"

type Category = {
  label: string
  count: number
  items: ResearchItem[]
  icon: React.ComponentType<{ className?: string }>
}

const CATEGORIES: Record<CategoryKey, Category> = {
  articles: {
    label: "Articles",
    count: 44,
    items: ARTICLES,
    icon: BookOpen,
  },
  chapters: {
    label: "Chapters",
    count: 7,
    items: CHAPTERS,
    icon: Layers,
  },
  data: {
    label: "Data Items",
    count: 19,
    items: DATA_ITEMS,
    icon: BarChart,
  },
  method: {
    label: "Method",
    count: 1,
    items: METHODS,
    icon: Settings,
  },
}

export function ResearchItems() {
  const [activeKey, setActiveKey] = useState<CategoryKey>("articles")
  const [isOpen, setIsOpen] = useState(false)

  const activeCategory = CATEGORIES[activeKey]
  const IconComponent = activeCategory.icon

  return (
    <div className="border-t border-border bg-secondary/10 px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Research Items
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Select a category below to explore Dr. Roy's research items including articles, book chapters, datasets, and methods.
            </p>
          </div>

          {/* Custom Dropdown */}
          <div className="relative min-w-[220px]">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full items-center justify-between rounded border border-border bg-secondary/80 px-4 py-3 text-left font-mono text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-secondary/90 focus:outline-none focus:ring-1 focus:ring-primary/40"
            >
              <span className="flex items-center gap-2">
                <IconComponent className="size-4 text-primary" />
                {activeCategory.label} ({activeCategory.count})
              </span>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <>
                {/* Backdrop overlay to click outside */}
                <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />

                <div className="absolute right-0 top-full z-40 mt-2 w-full origin-top-right rounded border border-border bg-background/95 shadow-xl backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-top-2">
                  <ul className="py-1">
                    {(Object.keys(CATEGORIES) as CategoryKey[]).map((key) => {
                      const cat = CATEGORIES[key]
                      const CatIcon = cat.icon
                      const isSelected = key === activeKey

                      return (
                        <li key={key}>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveKey(key)
                              setIsOpen(false)
                            }}
                            className={`flex w-full items-center justify-between px-4 py-3 text-left font-mono text-xs uppercase tracking-wider transition-colors hover:bg-secondary/60 ${
                              isSelected ? "bg-secondary text-primary font-semibold" : "text-foreground"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <CatIcon className={`size-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                              {cat.label}
                            </span>
                            <span className="rounded bg-background px-2 py-0.5 text-[0.65rem] tabular-nums text-muted-foreground">
                              {cat.count}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Display List of Selected Category */}
        <div className="relative mt-8 rounded border border-border bg-secondary/20">
          {/* Scroll fade mask at the bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-background/30 to-transparent" />

          <div className="max-h-[350px] overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
            <ul className="flex flex-col gap-4">
              {activeCategory.items.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-start gap-4 border-b border-border/20 px-4 py-3 rounded transition-all duration-300 hover:bg-secondary/50 border-l-2 border-l-transparent hover:border-l-primary"
                >
                  <span className="mt-0.5 font-mono text-xs tabular-nums text-primary">
                    {item.ref}
                  </span>
                  <div className="flex-1">
                    <h5 className="font-serif text-lg font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h5>
                    {item.date && (
                      <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-widest text-orange">
                        {item.date}
                      </span>
                    )}
                  </div>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex size-7 shrink-0 items-center justify-between rounded-full border border-border bg-secondary/40 p-1.5 text-primary opacity-0 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/70 group-hover:-translate-x-1 group-hover:opacity-100"
                    >
                      <ArrowRight className="size-4" />
                    </a>
                  ) : (
                    <ArrowRight
                      className="size-4 shrink-0 -translate-x-2 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
