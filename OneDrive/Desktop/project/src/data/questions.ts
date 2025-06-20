import { Question } from '../types';

export const vascularQuestions: Question[] = [
  {
    id: 'v001',
    question: 'A 67-year-old man presents with sudden onset of right-sided weakness and aphasia. CT shows hypodense area in left MCA territory. Time from symptom onset is 2.5 hours. BP is 180/100 mmHg. Which is the most appropriate immediate management?',
    options: [
      'Administer IV alteplase immediately',
      'Lower blood pressure to <140/90 mmHg first, then give alteplase',
      'Perform mechanical thrombectomy only',
      'Give aspirin 325mg and monitor'
    ],
    correctAnswer: 0,
    explanation: 'For acute ischemic stroke within 4.5 hours, IV alteplase should be administered immediately if no contraindications exist. Blood pressure should not be lowered below 185/110 mmHg unless there are specific indications, as it may worsen cerebral perfusion.',
    difficulty: 'hard',
    category: 'Acute Stroke Management',
    isScenario: true
  },
  {
    id: 'v002',
    question: 'What is the mechanism of action of eptifibatide in acute coronary syndromes?',
    options: [
      'Direct thrombin inhibitor',
      'Glycoprotein IIb/IIIa receptor antagonist',
      'P2Y12 receptor antagonist',
      'Factor Xa inhibitor'
    ],
    correctAnswer: 1,
    explanation: 'Eptifibatide is a glycoprotein IIb/IIIa receptor antagonist that prevents platelet aggregation by blocking the final common pathway of platelet activation. It is used in acute coronary syndromes and during percutaneous coronary interventions.',
    difficulty: 'medium',
    category: 'Pharmacology',
    isScenario: false
  },
  {
    id: 'v003',
    question: 'A 45-year-old woman with migraine presents with acute severe headache, different from her usual migraines. CT angiography shows bilateral vertebral artery dissections. What is the most likely underlying condition?',
    options: [
      'Fibromuscular dysplasia',
      'Marfan syndrome',
      'Ehlers-Danlos syndrome type IV',
      'Moyamoya disease'
    ],
    correctAnswer: 2,
    explanation: 'Ehlers-Danlos syndrome type IV (vascular type) is associated with arterial dissections, particularly involving multiple vessels. The combination of young age, migraine history, and bilateral vertebral dissections should raise suspicion for this connective tissue disorder.',
    difficulty: 'hard',
    category: 'Cerebrovascular Disease',
    isScenario: true
  },
  {
    id: 'v004',
    question: 'What is the recommended target systolic blood pressure for secondary stroke prevention in patients with a history of stroke or TIA?',
    options: [
      '<120 mmHg',
      '<130 mmHg',
      '<140 mmHg',
      '<150 mmHg'
    ],
    correctAnswer: 2,
    explanation: 'The AHA/ASA guidelines recommend a target systolic blood pressure of <140 mmHg for secondary stroke prevention. The SPS3 trial showed that targeting <130 mmHg did not provide additional benefit and may increase risk of complications.',
    difficulty: 'medium',
    category: 'Secondary Prevention',
    isScenario: false
  },
  {
    id: 'v005',
    question: 'A 28-year-old woman presents with recurrent strokes. Workup reveals elevated anticardiolipin antibodies and lupus anticoagulant. She has a history of two miscarriages. What is the recommended long-term anticoagulation target INR?',
    options: [
      'INR 1.5-2.0',
      'INR 2.0-3.0',
      'INR 2.5-3.5',
      'INR 3.0-4.0'
    ],
    correctAnswer: 1,
    explanation: 'For patients with antiphospholipid syndrome and recurrent thrombotic events, the recommended INR target is 2.0-3.0. Higher INR targets (2.5-3.5 or 3.0-4.0) were not shown to be superior in preventing recurrent events but increased bleeding risk.',
    difficulty: 'medium',
    category: 'Hypercoagulable States',
    isScenario: true
  },
  {
    id: 'v006',
    question: 'What is the most common cause of spontaneous intracerebral hemorrhage in patients under 45 years of age?',
    options: [
      'Hypertensive hemorrhage',
      'Arteriovenous malformation',
      'Cavernous malformation',
      'Cerebral amyloid angiopathy'
    ],
    correctAnswer: 1,
    explanation: 'Arteriovenous malformations (AVMs) are the most common cause of spontaneous intracerebral hemorrhage in patients under 45 years of age. In contrast, hypertensive hemorrhage becomes more common with advancing age.',
    difficulty: 'medium',
    category: 'Intracerebral Hemorrhage',
    isScenario: false
  },
  {
    id: 'v007',
    question: 'A 72-year-old man with atrial fibrillation on warfarin (INR 2.8) presents with acute ischemic stroke. NIHSS is 18. What is the most appropriate management regarding anticoagulation?',
    options: [
      'Continue warfarin at current dose',
      'Reverse anticoagulation with PCC and vitamin K',
      'Hold warfarin for 7-14 days then restart',
      'Switch to heparin immediately'
    ],
    correctAnswer: 2,
    explanation: 'For patients with cardioembolic stroke on therapeutic anticoagulation, warfarin should be held for 7-14 days (depending on stroke severity) to reduce risk of hemorrhagic transformation, then restarted. Immediate reversal is only indicated if urgent surgery is needed.',
    difficulty: 'hard',
    category: 'Acute Stroke Management',
    isScenario: true
  },
  {
    id: 'v008',
    question: 'Which imaging finding is most characteristic of cerebral amyloid angiopathy?',
    options: [
      'Multiple microbleeds in deep gray matter',
      'Cortical-subcortical microbleeds',
      'Periventricular white matter lesions',
      'Lacunar infarcts'
    ],
    correctAnswer: 1,
    explanation: 'Cerebral amyloid angiopathy typically causes cortical and subcortical microbleeds, particularly in the parietal and occipital regions. This distribution pattern helps differentiate it from hypertensive vasculopathy, which causes microbleeds in deep structures.',
    difficulty: 'medium',
    category: 'Cerebrovascular Disease',
    isScenario: false
  },
  {
    id: 'v009',
    question: 'A 55-year-old woman presents with thunderclap headache. CT shows subarachnoid hemorrhage. CTA shows no aneurysm. What is the next most appropriate diagnostic step?',
    options: [
      'Repeat CTA in 24 hours',
      'Digital subtraction angiography (DSA)',
      'MRI with contrast',
      'Lumbar puncture'
    ],
    correctAnswer: 1,
    explanation: 'When CTA is negative in the setting of subarachnoid hemorrhage, digital subtraction angiography (DSA) should be performed as it has higher sensitivity for detecting small aneurysms and other vascular abnormalities that may be missed on CTA.',
    difficulty: 'medium',
    category: 'Subarachnoid Hemorrhage',
    isScenario: true
  },
  {
    id: 'v010',
    question: 'What is the mechanism of action of cilostazol in stroke prevention?',
    options: [
      'Cyclooxygenase inhibition',
      'P2Y12 receptor antagonism',
      'Phosphodiesterase 3 inhibition',
      'Thromboxane synthase inhibition'
    ],
    correctAnswer: 2,
    explanation: 'Cilostazol is a phosphodiesterase 3 inhibitor that increases cAMP levels, leading to antiplatelet effects and vasodilation. It has been shown to be effective for secondary stroke prevention, particularly in Asian populations.',
    difficulty: 'medium',
    category: 'Pharmacology',
    isScenario: false
  },
  {
    id: 'v011',
    question: 'A 42-year-old man presents with acute onset vertigo, nausea, and ataxia. Examination reveals right-sided Horner syndrome, decreased pain and temperature sensation on the right face and left body. Which artery is most likely occluded?',
    options: [
      'Right posterior inferior cerebellar artery (PICA)',
      'Right anterior inferior cerebellar artery (AICA)',
      'Right superior cerebellar artery (SCA)',
      'Right vertebral artery'
    ],
    correctAnswer: 0,
    explanation: 'This constellation of findings (Horner syndrome, crossed sensory loss, vertigo, and ataxia) is classic for lateral medullary syndrome (Wallenberg syndrome), most commonly caused by PICA or vertebral artery occlusion.',
    difficulty: 'hard',
    category: 'Stroke Syndromes',
    isScenario: true
  },
  {
    id: 'v012',
    question: 'What is the recommended duration of dual antiplatelet therapy following minor stroke or high-risk TIA?',
    options: [
      '7 days',
      '21 days',
      '90 days',
      '12 months'
    ],
    correctAnswer: 2,
    explanation: 'Based on the CHANCE and POINT trials, dual antiplatelet therapy (aspirin plus clopidogrel) should be given for 21-90 days following minor stroke or high-risk TIA, with most guidelines recommending 21 days to balance efficacy and bleeding risk.',
    difficulty: 'medium',
    category: 'Secondary Prevention',
    isScenario: false
  },
  {
    id: 'v013',
    question: 'A 68-year-old woman with diabetes presents with sudden onset of isolated third nerve palsy with pupillary involvement. What is the most concerning diagnosis that must be ruled out?',
    options: [
      'Diabetic third nerve palsy',
      'Posterior communicating artery aneurysm',
      'Cavernous sinus thrombosis',
      'Midbrain infarction'
    ],
    correctAnswer: 1,
    explanation: 'Third nerve palsy with pupillary involvement (pupil-involving) is concerning for posterior communicating artery aneurysm and requires urgent vascular imaging. Diabetic third nerve palsy typically spares the pupil (pupil-sparing).',
    difficulty: 'hard',
    category: 'Cerebrovascular Disease',
    isScenario: true
  },
  {
    id: 'v014',
    question: 'Which factor most strongly predicts hemorrhagic transformation in acute ischemic stroke?',
    options: [
      'Age > 80 years',
      'NIHSS score > 15',
      'Time to treatment > 6 hours',
      'Atrial fibrillation'
    ],
    correctAnswer: 1,
    explanation: 'While multiple factors contribute to hemorrhagic transformation risk, stroke severity as measured by NIHSS score is the strongest predictor. Scores > 15 are associated with significantly higher risk of symptomatic hemorrhagic transformation.',
    difficulty: 'medium',
    category: 'Complications',
    isScenario: false
  },
  {
    id: 'v015',
    question: 'A 34-year-old woman presents with headache and visual field defects. MRI shows bilateral parietal-occipital white matter changes. She is 32 weeks pregnant with BP 160/110 mmHg. What is the most likely diagnosis?',
    options: [
      'Migraine with aura',
      'Posterior reversible encephalopathy syndrome (PRES)',
      'Multiple sclerosis',
      'Cerebral venous thrombosis'
    ],
    correctAnswer: 1,
    explanation: 'The combination of pregnancy, hypertension, headache, visual symptoms, and bilateral posterior white matter changes is classic for PRES (Posterior Reversible Encephalopathy Syndrome). This condition is often reversible with blood pressure control.',
    difficulty: 'medium',
    category: 'Cerebrovascular Disease',
    isScenario: true
  },
  {
    id: 'v016',
    question: 'What is the most appropriate blood pressure target during the acute phase of intracerebral hemorrhage?',
    options: [
      'SBP < 120 mmHg',
      'SBP < 140 mmHg',
      'SBP < 160 mmHg',
      'SBP < 180 mmHg'
    ],
    correctAnswer: 1,
    explanation: 'The INTERACT2 trial showed that intensive blood pressure lowering to SBP < 140 mmHg within 6 hours of ICH onset is safe and may improve functional outcomes. The target should be achieved gradually over several hours.',
    difficulty: 'medium',
    category: 'Intracerebral Hemorrhage',
    isScenario: false
  },
  {
    id: 'v017',
    question: 'A 58-year-old man presents with acute confusion, right hemiparesis, and hemianopia. CT shows hypodense lesion in left MCA territory. What is the most likely location of the occlusion?',
    options: [
      'Left M1 segment',
      'Left M2 segment',
      'Left internal carotid artery',
      'Left anterior cerebral artery'
    ],
    correctAnswer: 0,
    explanation: 'Large MCA territory infarcts involving both cortical and subcortical structures typically result from M1 segment occlusion. The combination of confusion (cortical), hemiparesis (subcortical), and hemianopia (cortical) suggests extensive MCA territory involvement.',
    difficulty: 'medium',
    category: 'Stroke Localization',
    isScenario: true
  },
  {
    id: 'v018',
    question: 'Which medication has the strongest evidence for reducing the risk of recurrent stroke in patients with intracranial atherosclerosis?',
    options: [
      'Aspirin 325mg daily',
      'Clopidogrel 75mg daily',
      'Aspirin 100mg + clopidogrel 75mg daily',
      'Warfarin (INR 2-3)'
    ],
    correctAnswer: 2,
    explanation: 'The SAMMPRIS trial showed that aggressive medical management including dual antiplatelet therapy (aspirin + clopidogrel) is superior to intracranial stenting for preventing recurrent stroke in patients with intracranial atherosclerosis.',
    difficulty: 'hard',
    category: 'Secondary Prevention',
    isScenario: false
  },
  {
    id: 'v019',
    question: 'A 29-year-old woman presents with sudden severe headache and neck pain. CT shows subarachnoid hemorrhage. She has a family history of aneurysms and polycystic kidney disease. What genetic condition should be considered?',
    options: [
      'Marfan syndrome',
      'Ehlers-Danlos syndrome',
      'Autosomal dominant polycystic kidney disease',
      'Neurofibromatosis type 1'
    ],
    correctAnswer: 2,
    explanation: 'Autosomal dominant polycystic kidney disease (ADPKD) is associated with intracranial aneurysms in 10-40% of patients. Family history of both aneurysms and polycystic kidney disease strongly suggests this genetic association.',
    difficulty: 'medium',
    category: 'Genetic Disorders',
    isScenario: true
  },
  {
    id: 'v020',
    question: 'What is the recommended approach for asymptomatic carotid stenosis of 70-99%?',
    options: [
      'Medical management alone',
      'Carotid endarterectomy',
      'Carotid artery stenting',
      'Either CEA or CAS based on anatomy'
    ],
    correctAnswer: 1,
    explanation: 'For asymptomatic carotid stenosis ≥70%, carotid endarterectomy (CEA) is recommended for patients with life expectancy ≥5 years and perioperative risk <3%. CEA has better long-term durability than medical management alone.',
    difficulty: 'medium',
    category: 'Carotid Disease',
    isScenario: false
  },
  {
    id: 'v021',
    question: 'A 48-year-old woman presents with progressive cognitive decline and gait instability. MRI shows multiple subcortical infarcts and extensive white matter changes. She has a family history of similar symptoms. Genetic testing should focus on which condition?',
    options: [
      'CADASIL',
      'Fabry disease',
      'Moyamoya disease',
      'Hereditary hemorrhagic telangiectasia'
    ],
    correctAnswer: 0,
    explanation: 'CADASIL (Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts and Leukoencephalopathy) presents with recurrent strokes, cognitive decline, and extensive white matter disease. Family history and characteristic MRI findings suggest this diagnosis.',
    difficulty: 'hard',
    category: 'Genetic Disorders',
    isScenario: true
  },
  {
    id: 'v022',
    question: 'What is the mechanism of action of dabigatran?',
    options: [
      'Factor Xa inhibition',
      'Direct thrombin inhibition',
      'Vitamin K antagonism',
      'Platelet aggregation inhibition'
    ],
    correctAnswer: 1,
    explanation: 'Dabigatran is a direct thrombin inhibitor that reversibly binds to the active site of thrombin, preventing conversion of fibrinogen to fibrin. It does not require monitoring and has predictable anticoagulant effects.',
    difficulty: 'easy',
    category: 'Pharmacology',
    isScenario: false
  },
  {
    id: 'v023',
    question: 'A 65-year-old man with a history of coronary artery disease presents with amaurosis fugax. Carotid duplex shows 80% stenosis of the ipsilateral internal carotid artery. What is the most appropriate management?',
    options: [
      'Aspirin 81mg daily and statin',
      'Dual antiplatelet therapy for 3 months',
      'Carotid endarterectomy',
      'Carotid artery stenting'
    ],
    correctAnswer: 2,
    explanation: 'Amaurosis fugax is considered a TIA equivalent. With symptomatic carotid stenosis ≥70%, carotid endarterectomy is indicated and should be performed within 2 weeks of the event for maximum benefit.',
    difficulty: 'medium',
    category: 'Carotid Disease',
    isScenario: true
  },
  {
    id: 'v024',
    question: 'Which finding on transcranial Doppler most suggests hemodynamically significant intracranial stenosis?',
    options: [
      'Mean flow velocity > 120 cm/s',
      'Mean flow velocity > 200 cm/s',
      'Pulsatility index > 1.2',
      'Asymmetry ratio > 3:1'
    ],
    correctAnswer: 1,
    explanation: 'Mean flow velocities > 200 cm/s in the MCA or > 140 cm/s in other intracranial vessels suggest hemodynamically significant stenosis (>50%). Lower velocities may indicate less severe stenosis or good collateral flow.',
    difficulty: 'hard',
    category: 'Diagnostic Testing',
    isScenario: false
  },
  {
    id: 'v025',
    question: 'A 52-year-old woman presents with recurrent episodes of numbness and weakness affecting different parts of her body over several months. MRI shows multiple T2 hyperintense lesions in subcortical white matter. What additional test would be most helpful?',
    options: [
      'Lumbar puncture',
      'Genetic testing for CADASIL',
      'Muscle biopsy',
      'Temporal artery biopsy'
    ],
    correctAnswer: 1,
    explanation: 'The presentation of recurrent neurological events with characteristic white matter changes, especially in a middle-aged woman, should prompt consideration of CADASIL. Genetic testing for NOTCH3 mutations would be most appropriate.',
    difficulty: 'medium',
    category: 'Genetic Disorders',
    isScenario: true
  },
  {
    id: 'v026',
    question: 'What is the gold standard diagnostic test for moyamoya disease?',
    options: [
      'CT angiography',
      'MR angiography',
      'Digital subtraction angiography',
      'Transcranial Doppler'
    ],
    correctAnswer: 2,
    explanation: 'Digital subtraction angiography remains the gold standard for diagnosing moyamoya disease, as it best demonstrates the characteristic "puff of smoke" collateral vessels and the progressive stenosis of the circle of Willis vessels.',
    difficulty: 'medium',
    category: 'Diagnostic Testing',
    isScenario: false
  },
  {
    id: 'v027',
    question: 'A 45-year-old man presents with acute stroke. He reports using cocaine 2 hours prior to symptom onset. What is the most likely mechanism of his stroke?',
    options: [
      'Cardioembolism',
      'Large artery atherosclerosis',
      'Small vessel disease',
      'Vasospasm and hemorrhage'
    ],
    correctAnswer: 3,
    explanation: 'Cocaine can cause both ischemic and hemorrhagic strokes through multiple mechanisms including vasospasm, accelerated atherosclerosis, cardiomyopathy, and hypertensive crises. Vasospasm leading to ischemia or vessel rupture is most common acutely.',
    difficulty: 'medium',
    category: 'Stroke Etiology',
    isScenario: true
  },
  {
    id: 'v028',
    question: 'Which clinical feature best distinguishes migraine with aura from TIA?',
    options: [
      'Duration of symptoms',
      'Positive vs negative symptoms',
      'Age of onset',
      'Response to triptans'
    ],
    correctAnswer: 1,
    explanation: 'Migraine aura typically produces positive symptoms (scintillating scotoma, tingling) that spread gradually, while TIA typically causes negative symptoms (vision loss, numbness, weakness) with sudden onset. This distinction helps differentiate the two conditions.',
    difficulty: 'medium',
    category: 'Differential Diagnosis',
    isScenario: false
  },
  {
    id: 'v029',
    question: 'A 71-year-old woman presents with sudden onset of left-sided weakness and neglect. CT perfusion shows large penumbra with small core. Time from onset is 8 hours. What is the most appropriate treatment?',
    options: [
      'IV alteplase only',
      'Mechanical thrombectomy only',
      'IV alteplase followed by thrombectomy',
      'Medical management only'
    ],
    correctAnswer: 1,
    explanation: 'Based on DAWN and DEFUSE-3 trials, mechanical thrombectomy can be performed up to 24 hours from onset in carefully selected patients with favorable perfusion profiles (large penumbra, small core). IV alteplase is not indicated beyond 4.5 hours.',
    difficulty: 'hard',
    category: 'Acute Stroke Management',
    isScenario: true
  },
  {
    id: 'v030',
    question: 'What is the most common cause of cerebral venous thrombosis in young women?',
    options: [
      'Oral contraceptive use',
      'Pregnancy and puerperium',
      'Protein C deficiency',
      'Antiphospholipid syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Pregnancy and the puerperium are the most common causes of cerebral venous thrombosis in young women, due to hypercoagulable state. Oral contraceptives are also a significant risk factor but less common as a sole cause.',
    difficulty: 'medium',
    category: 'Venous Disease',
    isScenario: false
  },
  {
    id: 'v031',
    question: 'A 38-year-old man presents with sudden severe headache, photophobia, and neck stiffness. CT shows subarachnoid hemorrhage. His mother died of a "brain aneurysm" at age 42. What is the recommended screening for family members?',
    options: [
      'No screening recommended',
      'MRA every 5 years starting at age 30',
      'CTA or MRA once, repeat if abnormal',
      'Annual transcranial Doppler'
    ],
    correctAnswer: 2,
    explanation: 'For first-degree relatives of patients with aneurysmal SAH, especially with multiple affected family members, screening with CTA or MRA is recommended. If normal, repeat screening may be considered in 5-10 years depending on risk factors.',
    difficulty: 'medium',
    category: 'Subarachnoid Hemorrhage',
    isScenario: true
  },
  {
    id: 'v032',
    question: 'Which laboratory test is most useful for monitoring the anticoagulant effect of rivaroxaban?',
    options: [
      'PT/INR',
      'aPTT',
      'Anti-factor Xa level',
      'Thrombin time'
    ],
    correctAnswer: 2,
    explanation: 'Anti-factor Xa levels provide the most accurate measurement of rivaroxaban anticoagulant activity. PT/INR and aPTT are not reliable for monitoring direct factor Xa inhibitors like rivaroxaban.',
    difficulty: 'medium',
    category: 'Laboratory Testing',
    isScenario: false
  },
  {
    id: 'v033',
    question: 'A 55-year-old woman with rheumatic heart disease and mitral stenosis presents with acute stroke. She is not on anticoagulation. What is the most appropriate long-term anticoagulation strategy?',
    options: [
      'Aspirin 325mg daily',
      'Warfarin with target INR 2.0-3.0',
      'Warfarin with target INR 2.5-3.5',
      'Direct oral anticoagulant'
    ],
    correctAnswer: 2,
    explanation: 'Patients with rheumatic mitral stenosis require higher intensity anticoagulation with warfarin targeting INR 2.5-3.5 due to high thromboembolic risk. DOACs are not approved for rheumatic valvular disease.',
    difficulty: 'medium',
    category: 'Anticoagulation',
    isScenario: true
  },
  {
    id: 'v034',
    question: 'What is the most sensitive imaging modality for detecting acute cerebral microbleeds?',
    options: [
      'CT',
      'T2-weighted MRI',
      'FLAIR MRI',
      'Gradient echo (GRE) or SWI MRI'
    ],
    correctAnswer: 3,
    explanation: 'Gradient echo (GRE) and susceptibility-weighted imaging (SWI) are most sensitive for detecting microbleeds due to their sensitivity to blood products and hemosiderin deposits. These sequences can detect microbleeds not visible on other MRI sequences.',
    difficulty: 'medium',
    category: 'Diagnostic Imaging',
    isScenario: false
  },
  {
    id: 'v035',
    question: 'A 43-year-old man presents with recurrent strokes despite optimal medical therapy. Angiography shows severe stenosis of the supraclinoid internal carotid artery. What is the most appropriate surgical intervention?',
    options: [
      'Carotid endarterectomy',
      'Superficial temporal artery to middle cerebral artery bypass',
      'Intracranial angioplasty and stenting',
      'External carotid artery to internal carotid artery bypass'
    ],
    correctAnswer: 1,
    explanation: 'For symptomatic intracranial carotid stenosis not amenable to endarterectomy, STA-MCA bypass may be considered in carefully selected patients. The SAMMPRIS trial showed that intracranial stenting has higher complication rates than medical management.',
    difficulty: 'hard',
    category: 'Surgical Management',
    isScenario: true
  },
  {
    id: 'v036',
    question: 'Which factor is most important in determining eligibility for mechanical thrombectomy in the 6-24 hour window?',
    options: [
      'Patient age',
      'NIHSS score',
      'Imaging showing salvageable tissue',
      'Time from symptom onset'
    ],
    correctAnswer: 2,
    explanation: 'In the extended time window (6-24 hours), patient selection is based on advanced imaging showing favorable tissue profiles (large penumbra with small infarct core) rather than time alone, as demonstrated in DAWN and DEFUSE-3 trials.',
    difficulty: 'hard',
    category: 'Acute Stroke Management',
    isScenario: false
  },
  {
    id: 'v037',
    question: 'A 62-year-old diabetic man presents with isolated third nerve palsy. The pupil is spared. What is the most likely etiology?',
    options: [
      'Posterior communicating artery aneurysm',
      'Diabetic microvascular ischemia',
      'Cavernous sinus mass',
      'Midbrain infarction'
    ],
    correctAnswer: 1,
    explanation: 'Pupil-sparing third nerve palsy in a diabetic patient is characteristic of diabetic microvascular ischemia. The pupillomotor fibers run on the surface of the third nerve and are typically spared in ischemic lesions but affected by compressive lesions.',
    difficulty: 'medium',
    category: 'Cranial Neuropathy',
    isScenario: true
  },
  {
    id: 'v038',
    question: 'What is the recommended management for asymptomatic unruptured intracranial aneurysms 5-7mm in size?',
    options: [
      'Immediate surgical clipping',
      'Immediate endovascular coiling',
      'Imaging surveillance every 6 months',
      'Imaging surveillance annually for 2 years, then less frequently'
    ],
    correctAnswer: 3,
    explanation: 'For asymptomatic unruptured aneurysms 5-7mm, the risk of rupture is low (<1% per year), and surveillance is typically recommended. Initial annual imaging for 2 years, then every 2-3 years if stable, is a reasonable approach.',
    difficulty: 'medium',
    category: 'Aneurysm Management',
    isScenario: false
  },
  {
    id: 'v039',
    question: 'A 47-year-old woman presents with severe headache and left third nerve palsy. CTA shows a 12mm posterior communicating artery aneurysm. What is the most appropriate immediate management?',
    options: [
      'Surgical clipping within 24 hours',
      'Endovascular coiling within 24 hours',
      'Medical management and repeat imaging in 6 months',
      'Either surgical or endovascular treatment within 72 hours'
    ],
    correctAnswer: 3,
    explanation: 'A symptomatic (causing mass effect) unruptured aneurysm requires treatment to prevent rupture and relieve symptoms. Both surgical clipping and endovascular coiling are appropriate options, with choice depending on aneurysm characteristics and patient factors.',
    difficulty: 'medium',
    category: 'Aneurysm Management',
    isScenario: true
  },
  {
    id: 'v040',
    question: 'Which medication has the best evidence for migraine prevention in patients with frequent migraines and comorbid depression?',
    options: [
      'Topiramate',
      'Propranolol',
      'Amitriptyline',
      'Valproic acid'
    ],
    correctAnswer: 2,
    explanation: 'Amitriptyline, a tricyclic antidepressant, has excellent evidence for migraine prevention and would address both the migraine and depression. It has Level A evidence for migraine prevention and antidepressant properties.',
    difficulty: 'medium',
    category: 'Migraine Management',
    isScenario: false
  },
  {
    id: 'v041',
    question: 'A 35-year-old woman presents with stroke during the third trimester of pregnancy. What is the safest anticoagulant option?',
    options: [
      'Warfarin',
      'Heparin (unfractionated or LMWH)',
      'Dabigatran',
      'Rivaroxaban'
    ],
    correctAnswer: 1,
    explanation: 'Heparin (both unfractionated and low molecular weight) does not cross the placenta and is safe during pregnancy. Warfarin is teratogenic, and DOACs have limited safety data in pregnancy.',
    difficulty: 'medium',
    category: 'Pregnancy and Stroke',
    isScenario: true
  },
  {
    id: 'v042',
    question: 'What is the most common location for hypertensive intracerebral hemorrhage?',
    options: [
      'Lobar (cortical-subcortical)',
      'Basal ganglia (putamen)',
      'Thalamus',
      'Brainstem'
    ],
    correctAnswer: 1,
    explanation: 'The basal ganglia, particularly the putamen, is the most common location for hypertensive intracerebral hemorrhage due to the vulnerability of small perforating arteries (lenticulostriate arteries) to hypertensive changes.',
    difficulty: 'easy',
    category: 'Intracerebral Hemorrhage',
    isScenario: false
  },
  {
    id: 'v043',
    question: 'A 58-year-old man with recent stroke is found to have 45% stenosis of the symptomatic carotid artery. What is the most appropriate management?',
    options: [
      'Carotid endarterectomy',
      'Carotid artery stenting',
      'Optimal medical therapy alone',
      'Dual antiplatelet therapy for 6 months'
    ],
    correctAnswer: 2,
    explanation: 'For symptomatic carotid stenosis <50%, optimal medical therapy (antiplatelet agent, statin, blood pressure control) is recommended. The benefit of revascularization is limited with stenosis <50%.',
    difficulty: 'medium',
    category: 'Carotid Disease',
    isScenario: true
  },
  {
    id: 'v044',
    question: 'Which imaging finding is most specific for acute basilar artery occlusion?',
    options: [
      'Hyperdense basilar artery sign on CT',
      'Absence of flow void on T2-weighted MRI',
      'Dot sign on FLAIR imaging',
      'All of the above are equally specific'
    ],
    correctAnswer: 0,
    explanation: 'The hyperdense basilar artery sign on non-contrast CT is highly specific for acute basilar artery thrombosis, representing acute thrombus within the vessel. This finding should prompt urgent vascular imaging and consideration for thrombectomy.',
    difficulty: 'hard',
    category: 'Diagnostic Imaging',
    isScenario: false
  },
  {
    id: 'v045',
    question: 'A 28-year-old woman presents with headache, confusion, and seizures 3 days after delivery. MRI shows bilateral posterior white matter changes. BP is 170/110 mmHg. What is the most likely diagnosis?',
    options: [
      'Postpartum cardiomyopathy',
      'Cerebral venous thrombosis',
      'Posterior reversible encephalopathy syndrome',
      'Postpartum angiopathy'
    ],
    correctAnswer: 2,
    explanation: 'PRES (Posterior Reversible Encephalopathy Syndrome) commonly occurs in the postpartum period, especially with hypertension. The bilateral posterior white matter changes on MRI are characteristic, and the condition is often reversible with blood pressure control.',
    difficulty: 'medium',
    category: 'Pregnancy and Stroke',
    isScenario: true
  },
  {
    id: 'v046',
    question: 'What is the most appropriate initial test for suspected vertebrobasilar insufficiency?',
    options: [
      'Carotid duplex ultrasound',
      'Transcranial Doppler',
      'MR angiography of head and neck',
      'Digital subtraction angiography'
    ],
    correctAnswer: 2,
    explanation: 'MR angiography of the head and neck is the most appropriate initial test for suspected vertebrobasilar insufficiency, as it can evaluate both extracranial and intracranial posterior circulation vessels non-invasively.',
    difficulty: 'medium',
    category: 'Diagnostic Testing',
    isScenario: false
  },
  {
    id: 'v047',
    question: 'A 72-year-old man presents with sudden onset of vertigo, diplopia, and bilateral weakness. CT shows acute pontine infarction. What is the most likely mechanism?',
    options: [
      'Cardioembolism',
      'Large artery atherosclerosis',
      'Small vessel (lacunar) disease',
      'Arterial dissection'
    ],
    correctAnswer: 1,
    explanation: 'Large pontine infarctions are typically caused by large artery atherosclerosis affecting the basilar artery or its major branches. The bilateral symptoms and large territory involvement suggest involvement of the basilar artery trunk.',
    difficulty: 'medium',
    category: 'Stroke Mechanism',
    isScenario: true
  },
  {
    id: 'v048',
    question: 'Which factor most strongly indicates the need for hemicraniectomy in malignant MCA infarction?',
    options: [
      'Age > 60 years',
      'NIHSS > 20',
      'Infarct volume > 145 mL',
      'Midline shift > 5mm'
    ],
    correctAnswer: 3,
    explanation: 'Midline shift >5mm indicates significant mass effect and brain herniation risk, which is the primary indication for decompressive hemicraniectomy. While other factors are important, evidence of herniation is the strongest indication for surgery.',
    difficulty: 'hard',
    category: 'Surgical Management',
    isScenario: false
  },
  {
    id: 'v049',
    question: 'A 45-year-old woman with systemic lupus erythematosus presents with acute stroke. Workup reveals elevated anti-cardiolipin antibodies. What is the mechanism of stroke in this patient?',
    options: [
      'Cardioembolism from Libman-Sacks endocarditis',
      'Accelerated atherosclerosis',
      'Hypercoagulable state from antiphospholipid antibodies',
      'CNS vasculitis'
    ],
    correctAnswer: 2,
    explanation: 'Antiphospholipid antibodies create a hypercoagulable state leading to arterial and venous thrombosis. While SLE can cause stroke through multiple mechanisms, the presence of anti-cardiolipin antibodies specifically indicates antiphospholipid syndrome.',
    difficulty: 'medium',
    category: 'Autoimmune Disease',
    isScenario: true
  },
  {
    id: 'v050',
    question: 'What is the recommended approach for managing blood pressure in patients with acute ischemic stroke who are candidates for IV thrombolysis?',
    options: [
      'Lower BP to <140/90 mmHg before treatment',
      'Lower BP only if >185/110 mmHg',
      'Maintain BP at presentation level',
      'Lower BP to <160/100 mmHg before treatment'
    ],
    correctAnswer: 1,
    explanation: 'For patients receiving IV thrombolysis, blood pressure should be lowered only if it exceeds 185/110 mmHg before treatment and maintained <180/105 mmHg for 24 hours after treatment to reduce hemorrhagic complications.',
    difficulty: 'medium',
    category: 'Acute Stroke Management',
    isScenario: false
  }
];

export const neuroendovascularQuestions: Question[] = [
  {
    id: 'n001',
    question: 'A 52-year-old woman presents with sudden severe headache and loss of consciousness. CT shows diffuse subarachnoid hemorrhage (Fisher grade 4). CTA reveals a 7mm anterior communicating artery aneurysm with a wide neck (neck width 4mm). What is the most appropriate treatment approach?',
    options: [
      'Surgical clipping',
      'Simple coil embolization',
      'Stent-assisted coiling',
      'Flow diverter placement'
    ],
    correctAnswer: 2,
    explanation: 'Wide-neck aneurysms (neck ≥4mm or dome-to-neck ratio <1.5) typically require stent-assisted coiling to prevent coil herniation into the parent vessel. The wide neck (4mm) makes simple coiling inappropriate, and flow diverters are typically reserved for larger or more complex aneurysms.',
    difficulty: 'hard',
    category: 'Aneurysm Treatment',
    isScenario: true
  },
  {
    id: 'n002',
    question: 'What is the most common complication of carotid artery stenting?',
    options: [
      'Stroke',
      'Myocardial infarction',
      'Access site hematoma',
      'Hyperperfusion syndrome'
    ],
    correctAnswer: 0,
    explanation: 'Stroke is the most common major complication of carotid artery stenting, occurring in 2-6% of procedures. It can result from embolic events during the procedure, acute stent thrombosis, or hyperperfusion syndrome.',
    difficulty: 'medium',
    category: 'Carotid Intervention',
    isScenario: false
  },
  {
    id: 'n003',
    question: 'A 45-year-old man presents with acute onset of right hemiparesis and aphasia. CT angiography shows occlusion of the left M1 segment. Time from symptom onset is 3 hours. What is the first-line endovascular treatment?',
    options: [
      'Intra-arterial thrombolysis with alteplase',
      'Mechanical thrombectomy with stent retriever',
      'Mechanical thrombectomy with aspiration catheter',
      'Combined IV and intra-arterial thrombolysis'
    ],
    correctAnswer: 1,
    explanation: 'Mechanical thrombectomy with stent retrievers is the first-line endovascular treatment for large vessel occlusions within 6 hours of symptom onset. Stent retrievers have shown superior efficacy compared to other endovascular techniques in multiple randomized trials.',
    difficulty: 'medium',
    category: 'Acute Stroke Intervention',
    isScenario: true
  },
  {
    id: 'n004',
    question: 'Which angiographic finding is most predictive of successful recanalization with mechanical thrombectomy?',
    options: [
      'Clot length <8mm',
      'Absence of calcification in the clot',
      'Hyperdense artery sign on CT',
      'Good collateral circulation'
    ],
    correctAnswer: 0,
    explanation: 'Shorter clot length (<8mm) is associated with higher rates of successful recanalization and better clinical outcomes. Longer clots are more challenging to retrieve completely and may require multiple passes or different techniques.',
    difficulty: 'hard',
    category: 'Acute Stroke Intervention',
    isScenario: false
  },
  {
    id: 'n005',
    question: 'A 38-year-old woman has a 12mm unruptured middle cerebral artery aneurysm with a narrow neck. She desires pregnancy in the future. What is the most appropriate treatment option?',
    options: [
      'Observation with annual imaging',
      'Surgical clipping',
      'Endovascular coiling',
      'Flow diverter placement'
    ],
    correctAnswer: 1,
    explanation: 'For a young woman planning pregnancy with a 12mm unruptured aneurysm, surgical clipping is preferred. It provides definitive treatment without the need for long-term antiplatelet therapy (required with endovascular options), which could complicate pregnancy and delivery.',
    difficulty: 'hard',
    category: 'Aneurysm Treatment',
    isScenario: true
  },
  {
    id: 'n006',
    question: 'What is the mechanism of action of flow diverters in aneurysm treatment?',
    options: [
      'Direct occlusion of the aneurysm sac',
      'Reduction of inflow velocity leading to thrombosis',
      'Mechanical coil retention',
      'Parent vessel occlusion'
    ],
    correctAnswer: 1,
    explanation: 'Flow diverters work by reducing inflow velocity into the aneurysm sac, promoting stagnation and eventual thrombosis. They also promote endothelialization across the aneurysm neck, effectively excluding it from circulation over time.',
    difficulty: 'medium',
    category: 'Device Technology',
    isScenario: false
  },
  {
    id: 'n007',
    question: 'A 28-year-old man presents with severe headache and right third nerve palsy. CTA shows a 15mm posterior communicating artery aneurysm. The aneurysm has a wide neck and incorporates the origin of the posterior communicating artery. What is the best treatment approach?',
    options: [
      'Surgical clipping with preservation of PCoA',
      'Coiling with balloon assistance',
      'Flow diverter placement',
      'Parent vessel occlusion with bypass'
    ],
    correctAnswer: 2,
    explanation: 'Large, wide-neck aneurysms that incorporate branch vessels are ideal candidates for flow diverter treatment. Flow diverters can reconstruct the parent vessel while preserving important branches like the posterior communicating artery.',
    difficulty: 'hard',
    category: 'Aneurysm Treatment',
    isScenario: true
  },
  {
    id: 'n008',
    question: 'What is the most appropriate antiplatelet regimen prior to flow diverter placement?',
    options: [
      'Aspirin 325mg daily for 3 days',
      'Clopidogrel 75mg daily for 5 days',
      'Aspirin 81mg + clopidogrel 75mg daily for 5-7 days',
      'Aspirin 325mg + clopidogrel 600mg loading dose'
    ],
    correctAnswer: 2,
    explanation: 'Dual antiplatelet therapy (aspirin + clopidogrel) for 5-7 days prior to flow diverter placement is standard practice to prevent thrombotic complications. The combination provides more effective platelet inhibition than single agents.',
    difficulty: 'medium',
    category: 'Procedural Management',
    isScenario: false
  },
  {
    id: 'n009',
    question: 'A 65-year-old man undergoes mechanical thrombectomy for M1 occlusion. After successful recanalization (TICI 2b), the patient develops new neurological deficits 6 hours post-procedure. What is the most likely cause?',
    options: [
      'Hemorrhagic transformation',
      'Hyperperfusion syndrome',
      'Procedure-related dissection',
      'Distal embolization'
    ],
    correctAnswer: 0,
    explanation: 'Hemorrhagic transformation is the most common cause of neurological deterioration after successful mechanical thrombectomy, especially in patients with large infarcts or those who received thrombolytic therapy.',
    difficulty: 'medium',
    category: 'Complications',
    isScenario: true
  },
  {
    id: 'n010',
    question: 'Which factor is most important for determining the approach (transradial vs transfemoral) for neuroendovascular procedures?',
    options: [
      'Patient age',
      'Vessel tortuosity and anatomy',
      'Operator preference',
      'Procedure complexity'
    ],
    correctAnswer: 1,
    explanation: 'Vessel tortuosity and anatomy are the most important factors determining access approach. Severe aortic arch tortuosity or unfavorable takeoffs of great vessels may favor transfemoral approach for better support and catheter stability.',
    difficulty: 'medium',
    category: 'Procedural Technique',
    isScenario: false
  },
  {
    id: 'n011',
    question: 'A 72-year-old woman presents with acute basilar artery occlusion. Symptom onset was 8 hours ago, and she has a posterior circulation ASPECTS of 8. What is the most appropriate management?',
    options: [
      'IV thrombolysis only',
      'Medical management',
      'Mechanical thrombectomy',
      'Intra-arterial vasodilators'
    ],
    correctAnswer: 2,
    explanation: 'Mechanical thrombectomy for basilar artery occlusion can be performed up to 24 hours from symptom onset in appropriately selected patients. A PC-ASPECTS of 8 indicates limited ischemic changes and good candidacy for intervention.',
    difficulty: 'hard',
    category: 'Acute Stroke Intervention',
    isScenario: true
  },
  {
    id: 'n012',
    question: 'What is the primary advantage of balloon-mounted stents over self-expanding stents in intracranial vessels?',
    options: [
      'Better conformability',
      'Lower profile',
      'More precise deployment',
      'Less radial force'
    ],
    correctAnswer: 2,
    explanation: 'Balloon-mounted stents offer more precise deployment control, which is crucial in intracranial vessels where accurate placement is critical. They can be positioned exactly and deployed with minimal risk of migration or shortening.',
    difficulty: 'medium',
    category: 'Device Technology',
    isScenario: false
  },
  {
    id: 'n013',
    question: 'A 45-year-old woman has recurrent TIAs despite optimal medical therapy. Angiography shows 80% stenosis of the M1 segment with poor collaterals. What is the most appropriate intervention?',
    options: [
      'Intracranial angioplasty alone',
      'Intracranial stenting',
      'STA-MCA bypass',
      'Continue medical therapy'
    ],
    correctAnswer: 1,
    explanation: 'For symptomatic intracranial stenosis >70% that fails medical therapy, intracranial stenting may be considered in experienced centers, though it carries higher risks than medical therapy. The SAMMPRIS trial showed increased complications, but carefully selected patients may benefit.',
    difficulty: 'hard',
    category: 'Intracranial Stenosis',
    isScenario: true
  },
  {
    id: 'n014',
    question: 'Which imaging finding is most concerning for delayed cerebral ischemia in a patient with subarachnoid hemorrhage?',
    options: [
      'Increased mean flow velocities on TCD',
      'Vasospasm on angiography',
      'New infarcts on CT',
      'Decreased cerebral blood flow on perfusion imaging'
    ],
    correctAnswer: 3,
    explanation: 'Decreased cerebral blood flow on perfusion imaging is most concerning as it indicates tissue hypoperfusion that may lead to infarction. While increased TCD velocities and angiographic vasospasm are important, they dont necessarily indicate tissue compromise.',
    difficulty: 'hard',
    category: 'Subarachnoid Hemorrhage',
    isScenario: false
  },
  {
    id: 'n015',
    question: 'A 55-year-old man develops severe vasospasm after aneurysmal subarachnoid hemorrhage. Transcranial Doppler shows MCA velocities of 250 cm/s. What is the most appropriate immediate treatment?',
    options: [
      'Increase oral nimodipine dose',
      'IV nicardipine infusion',
      'Intraarterial verapamil',
      'Balloon angioplasty'
    ],
    correctAnswer: 3,
    explanation: 'Severe vasospasm with very high velocities (>250 cm/s) and clinical symptoms requires endovascular intervention. Balloon angioplasty provides immediate mechanical relief of large vessel spasm and is more effective than pharmacological agents for severe cases.',
    difficulty: 'hard',
    category: 'Vasospasm Treatment',
    isScenario: true
  },
  {
    id: 'n016',
    question: 'What is the most common location for intracranial atherosclerotic stenosis in Asian populations?',
    options: [
      'Internal carotid artery terminus',
      'Middle cerebral artery M1 segment',
      'Basilar artery',
      'Anterior cerebral artery A1 segment'
    ],
    correctAnswer: 1,
    explanation: 'The middle cerebral artery M1 segment is the most common location for intracranial atherosclerotic stenosis in Asian populations, followed by the basilar artery. This differs from Caucasian populations where extracranial carotid disease is more prevalent.',
    difficulty: 'medium',
    category: 'Intracranial Stenosis',
    isScenario: false
  },
  {
    id: 'n017',
    question: 'A 32-year-old woman presents with intracerebral hemorrhage. Angiography shows a nidus of tangled vessels with early venous drainage. The nidus is 4cm in diameter and located in eloquent cortex. What is the Spetzler-Martin grade?',
    options: [
      'Grade II',
      'Grade III',
      'Grade IV',
      'Grade V'
    ],
    correctAnswer: 2,
    explanation: 'Spetzler-Martin grading: Size 3-6cm (2 points) + eloquent location (1 point) + pattern of venous drainage determines the final point. For a 4cm AVM in eloquent cortex, this would be Grade IV if deep venous drainage is present.',
    difficulty: 'hard',
    category: 'AVM Classification',
    isScenario: true
  },
  {
    id: 'n018',
    question: 'Which embolic agent is most appropriate for treating a high-flow arteriovenous malformation with multiple feeding arteries?',
    options: [
      'N-butyl cyanoacrylate (NBCA)',
      'Ethylene vinyl alcohol (Onyx)',
      'Polyvinyl alcohol particles',
      'Coils'
    ],
    correctAnswer: 1,
    explanation: 'Ethylene vinyl alcohol (Onyx) is preferred for complex AVMs with multiple feeders because of its longer working time, better penetration of the nidus, and ability to achieve more complete occlusion. NBCA polymerizes too quickly for complex lesions.',
    difficulty: 'medium',
    category: 'Embolization Materials',
    isScenario: false
  },
  {
    id: 'n019',
    question: 'A 28-year-old man has persistent epistaxis. Angiography shows multiple arteriovenous connections in the nasal cavity with feeding from sphenopalatine and greater palatine arteries. What is the most likely diagnosis?',
    options: [
      'Juvenile nasopharyngeal angiofibroma',
      'Hereditary hemorrhagic telangiectasia',
      'Traumatic pseudoaneurysm',
      'Sinonasal carcinoma'
    ],
    correctAnswer: 1,
    explanation: 'Multiple arteriovenous connections causing epistaxis in a young adult, especially with bilateral involvement and multiple feeding vessels, is characteristic of hereditary hemorrhagic telangiectasia (HHT) with nasal telangiectasias.',
    difficulty: 'medium',
    category: 'Head and Neck Vascular',
    isScenario: true
  },
  {
    id: 'n020',
    question: 'What is the most important factor in determining technical success of mechanical thrombectomy?',
    options: [
      'Time from symptom onset',
      'ASPECTS score',
      'Achievement of TICI 2b or 3 recanalization',
      'Number of device passes'
    ],
    correctAnswer: 2,
    explanation: 'Technical success in mechanical thrombectomy is defined by achieving TICI (Thrombolysis in Cerebral Infarction) 2b or 3 recanalization, which represents restoration of flow to more than 50% of the target territory.',
    difficulty: 'easy',
    category: 'Acute Stroke Intervention',
    isScenario: false
  },
  {
    id: 'n021',
    question: 'A 67-year-old man undergoes carotid artery stenting. Post-procedure, he develops severe bradycardia and hypotension. What is the most likely cause?',
    options: [
      'Carotid sinus hypersensitivity',
      'Cerebral hyperperfusion syndrome',
      'Acute stent thrombosis',
      'Contrast-induced nephrotoxicity'
    ],
    correctAnswer: 0,
    explanation: 'Carotid sinus hypersensitivity can occur during carotid stenting due to stimulation of baroreceptors in the carotid bulb, leading to bradycardia and hypotension. This typically responds to atropine and fluid resuscitation.',
    difficulty: 'medium',
    category: 'Complications',
    isScenario: true
  },
  {
    id: 'n022',
    question: 'Which type of intracranial aneurysm has the highest risk of rupture?',
    options: [
      'Anterior communicating artery aneurysm',
      'Posterior communicating artery aneurysm',
      'Middle cerebral artery bifurcation aneurysm',
      'Posterior inferior cerebellar artery aneurysm'
    ],
    correctAnswer: 3,
    explanation: 'Posterior circulation aneurysms, particularly PICA aneurysms, have higher rupture rates compared to anterior circulation aneurysms of similar size. This is partly due to differences in wall structure and hemodynamic stress.',
    difficulty: 'hard',
    category: 'Aneurysm Characteristics',
    isScenario: false
  },
  {
    id: 'n023',
    question: 'A 42-year-old woman has a dural arteriovenous fistula involving the transverse sinus with cortical venous reflux. What is the most appropriate treatment?',
    options: [
      'Observation',
      'Surgical disconnection',
      'Transarterial embolization',
      'Transvenous embolization'
    ],
    correctAnswer: 3,
    explanation: 'Dural AVFs with cortical venous reflux (Cognard type IIa and higher) have high risk of hemorrhage and require treatment. Transvenous embolization is often the preferred approach as it addresses the venous outflow abnormality that drives the fistula.',
    difficulty: 'hard',
    category: 'Dural AVF Treatment',
    isScenario: true
  },
  {
    id: 'n024',
    question: 'What is the primary mechanism of cerebral protection during carotid artery stenting?',
    options: [
      'Distal balloon occlusion',
      'Proximal balloon occlusion',
      'Flow reversal',
      'Embolic protection device (filter)'
    ],
    correctAnswer: 3,
    explanation: 'Embolic protection devices (EPDs), typically filters, are the most commonly used method for cerebral protection during carotid stenting. They capture embolic debris while maintaining antegrade flow.',
    difficulty: 'medium',
    category: 'Carotid Intervention',
    isScenario: false
  },
  {
    id: 'n025',
    question: 'A 48-year-old man presents with progressive vision loss and headaches. MRI shows a sellar mass. Angiography reveals a large cavernous carotid aneurysm. What is the most appropriate treatment?',
    options: [
      'Surgical clipping',
      'Pipeline flow diverter',
      'Parent vessel occlusion with balloon test occlusion',
      'Coil embolization'
    ],
    correctAnswer: 1,
    explanation: 'Large cavernous carotid aneurysms causing mass effect are ideal candidates for flow diverter treatment. Flow diverters can achieve aneurysm occlusion while preserving the parent vessel, addressing both the aneurysm and mass effect.',
    difficulty: 'medium',
    category: 'Aneurysm Treatment',
    isScenario: true
  },
  {
    id: 'n026',
    question: 'Which factor most increases the risk of contrast-induced nephropathy in neuroendovascular procedures?',
    options: [
      'Advanced age',
      'Pre-existing renal insufficiency',
      'Diabetes mellitus',
      'Contrast volume >100mL'
    ],
    correctAnswer: 1,
    explanation: 'Pre-existing renal insufficiency (serum creatinine >1.5 mg/dL or eGFR <60) is the strongest predictor of contrast-induced nephropathy. These patients require careful hydration and contrast minimization strategies.',
    difficulty: 'medium',
    category: 'Procedural Safety',
    isScenario: false
  },
  {
    id: 'n027',
    question: 'A 35-year-old woman has recurrent syncope. Vertebral angiography shows steal phenomenon with retrograde flow in the right vertebral artery. What is the most likely diagnosis?',
    options: [
      'Vertebrobasilar insufficiency',
      'Subclavian steal syndrome',
      'Vertebral artery dissection',
      'Posterior circulation TIA'
    ],
    correctAnswer: 1,
    explanation: 'Subclavian steal syndrome occurs when subclavian artery stenosis proximal to the vertebral artery origin causes retrograde flow in the vertebral artery during arm exercise, "stealing" blood from the posterior circulation.',
    difficulty: 'medium',
    category: 'Extracranial Vascular',
    isScenario: true
  },
  {
    id: 'n028',
    question: 'What is the most common cause of procedure-related stroke during mechanical thrombectomy?',
    options: [
      'Vessel perforation',
      'Distal embolization',
      'Arterial dissection',
      'Hyperperfusion syndrome'
    ],
    correctAnswer: 1,
    explanation: 'Distal embolization of clot fragments to previously unaffected territories is the most common cause of procedure-related stroke during mechanical thrombectomy. This emphasizes the importance of aspiration techniques and careful device manipulation.',
    difficulty: 'medium',
    category: 'Complications',
    isScenario: false
  },
  {
    id: 'n029',
    question: 'A 52-year-old man has a 25mm basilar tip aneurysm. The aneurysm incorporates both P1 segments. What is the most appropriate treatment approach?',
    options: [
      'Surgical clipping',
      'Coiling with balloon assistance',
      'Flow diverter placement',
      'Y-stent assisted coiling'
    ],
    correctAnswer: 3,
    explanation: 'Large basilar tip aneurysms that incorporate both P1 segments require Y-stent configuration (stents in both P1 segments) to provide adequate scaffolding for coil embolization while preserving both posterior cerebral arteries.',
    difficulty: 'hard',
    category: 'Complex Aneurysm Treatment',
    isScenario: true
  },
  {
    id: 'n030',
    question: 'Which angiographic view best demonstrates the anterior communicating artery complex?',
    options: [
      'AP view',
      'Lateral view',
      'Oblique view',
      'Submentovertex view'
    ],
    correctAnswer: 2,
    explanation: 'Oblique views (typically 20-30 degrees) best demonstrate the anterior communicating artery complex by separating the A1 segments and showing the ACoA anatomy without overlap of vessels.',
    difficulty: 'medium',
    category: 'Angiographic Technique',
    isScenario: false
  },
  {
    id: 'n031',
    question: 'A 29-year-old woman presents with thunderclap headache. CTA shows no aneurysm, but there is subarachnoid hemorrhage in the perimesencephalic cisterns. What is the most appropriate next step?',
    options: [
      'Digital subtraction angiography',
      'Repeat CTA in 24 hours',
      'MRI with contrast',
      'Conservative management'
    ],
    correctAnswer: 0,
    explanation: 'Perimesencephalic SAH with negative CTA still requires DSA to exclude small aneurysms or other vascular abnormalities. DSA has higher sensitivity than CTA for detecting small posterior circulation aneurysms.',
    difficulty: 'medium',
    category: 'Diagnostic Workup',
    isScenario: true
  },
  {
    id: 'n032',
    question: 'What is the most important factor determining the success of transarterial AVM embolization?',
    options: [
      'Size of the nidus',
      'Number of feeding arteries',
      'Penetration of embolic agent into the nidus',
      'Venous drainage pattern'
    ],
    correctAnswer: 2,
    explanation: 'Successful AVM embolization requires adequate penetration of embolic material into the nidus itself, not just the feeding arteries. Proximal occlusion of feeders without nidus penetration leads to recanalization through collaterals.',
    difficulty: 'hard',
    category: 'AVM Embolization',
    isScenario: false
  },
  {
    id: 'n033',
    question: 'A 44-year-old man has a carotid-cavernous fistula following head trauma. He presents with pulsatile tinnitus, diplopia, and conjunctival injection. What is the most appropriate treatment?',
    options: [
      'Surgical repair',
      'Covered stent placement',
      'Balloon occlusion of the fistula',
      'Coil embolization of the cavernous sinus'
    ],
    correctAnswer: 2,
    explanation: 'Direct carotid-cavernous fistulas are best treated with balloon occlusion to seal the communication between the carotid artery and cavernous sinus while preserving carotid flow. Detachable balloons are specifically designed for this purpose.',
    difficulty: 'medium',
    category: 'Fistula Treatment',
    isScenario: true
  },
  {
    id: 'n034',
    question: 'Which imaging modality is most sensitive for detecting in-stent restenosis after carotid artery stenting?',
    options: [
      'Carotid duplex ultrasound',
      'CT angiography',
      'MR angiography',
      'Digital subtraction angiography'
    ],
    correctAnswer: 3,
    explanation: 'Digital subtraction angiography remains the gold standard for detecting in-stent restenosis, though duplex ultrasound is commonly used for surveillance. Stent artifacts can limit the accuracy of CTA and MRA.',
    difficulty: 'medium',
    category: 'Follow-up Imaging',
    isScenario: false
  },
  {
    id: 'n035',
    question: 'A 58-year-old woman undergoes Pipeline flow diverter placement for a large ICA aneurysm. Six months later, she presents with new neurological symptoms. Angiography shows delayed aneurysm rupture. What is the most likely mechanism?',
    options: [
      'Incomplete aneurysm occlusion',
      'Flow diverter migration',
      'In-stent stenosis',
      'Inflammatory response to the device'
    ],
    correctAnswer: 3,
    explanation: 'Delayed aneurysm rupture after flow diverter placement can occur due to inflammatory response and wall weakening during the healing process. This rare complication typically occurs within the first 6 months after treatment.',
    difficulty: 'hard',
    category: 'Device Complications',
    isScenario: true
  },
  {
    id: 'n036',
    question: 'What is the primary advantage of the ADAPT (A Direct Aspiration First Pass Technique) for mechanical thrombectomy?',
    options: [
      'Lower cost',
      'Faster recanalization times',
      'Reduced distal embolization',
      'Better recanalization rates'
    ],
    correctAnswer: 2,
    explanation: 'ADAPT technique using large-bore aspiration catheters may reduce distal embolization by aspirating the clot directly without the need for stent retriever deployment, potentially reducing clot fragmentation.',
    difficulty: 'medium',
    category: 'Thrombectomy Technique',
    isScenario: false
  },
  {
    id: 'n037',
    question: 'A 36-year-old man presents with sudden onset of diplopia and ptosis. Angiography shows a fusiform aneurysm of the cavernous ICA with no clear neck. What is the most appropriate treatment?',
    options: [
      'Surgical bypass and parent vessel occlusion',
      'Flow diverter placement',
      'Coil embolization',
      'Observation'
    ],
    correctAnswer: 1,
    explanation: 'Fusiform aneurysms without a clear neck are ideal candidates for flow diverter treatment. Flow diverters can reconstruct the parent vessel while excluding the aneurysmal segment from circulation.',
    difficulty: 'medium',
    category: 'Aneurysm Treatment',
    isScenario: true
  },
  {
    id: 'n038',
    question: 'Which factor is most predictive of good clinical outcome after mechanical thrombectomy?',
    options: [
      'Time to recanalization',
      'ASPECTS score',
      'Age of the patient',
      'NIHSS score'
    ],
    correctAnswer: 0,
    explanation: 'Time to recanalization is the most important modifiable factor predicting good clinical outcome. Every 15-minute delay in recanalization reduces the odds of good outcome, emphasizing the importance of workflow optimization.',
    difficulty: 'medium',
    category: 'Outcomes',
    isScenario: false
  },
  {
    id: 'n039',
    question: 'A 47-year-old woman has a spinal dural arteriovenous fistula at T8 level. She presents with progressive paraparesis and bladder dysfunction. What is the most appropriate treatment?',
    options: [
      'Surgical ligation',
      'Transarterial embolization',
      'Intrathecal steroid injection',
      'Observation'
    ],
    correctAnswer: 0,
    explanation: 'Spinal dural AVFs causing progressive myelopathy require treatment. Surgical ligation of the fistulous connection is the gold standard treatment with high success rates and low morbidity. Embolization has higher recurrence rates.',
    difficulty: 'hard',
    category: 'Spinal Vascular',
    isScenario: true
  },
  {
    id: 'n040',
    question: 'What is the most common location for intracranial vertebral artery dissection?',
    options: [
      'V1 segment (origin)',
      'V2 segment (foraminal)',
      'V3 segment (suboccipital)',
      'V4 segment (intracranial)'
    ],
    correctAnswer: 3,
    explanation: 'Intracranial vertebral artery dissections most commonly occur in the V4 segment, particularly at the vertebrobasilar junction. This location is associated with higher risk of subarachnoid hemorrhage compared to extracranial dissections.',
    difficulty: 'medium',
    category: 'Arterial Dissection',
    isScenario: false
  },
  {
    id: 'n041',
    question: 'A 62-year-old man undergoes successful mechanical thrombectomy for M1 occlusion. Post-procedure imaging shows small areas of contrast extravasation. What is the most appropriate management?',
    options: [
      'Immediate surgical evacuation',
      'Reverse anticoagulation',
      'Close monitoring with serial imaging',
      'Hypotensive therapy'
    ],
    correctAnswer: 2,
    explanation: 'Small areas of contrast extravasation (contrast staining) after thrombectomy may represent blood-brain barrier disruption rather than active bleeding. Close monitoring with serial imaging is appropriate, as many resolve without intervention.',
    difficulty: 'medium',
    category: 'Post-procedural Management',
    isScenario: true
  },
  {
    id: 'n042',
    question: 'Which embolic protection device is most appropriate for carotid artery stenting in a patient with severe stenosis and poor collateral flow?',
    options: [
      'Distal filter device',
      'Distal balloon occlusion device',
      'Proximal balloon occlusion device',
      'Flow reversal system'
    ],
    correctAnswer: 0,
    explanation: 'In patients with poor collateral flow, distal filter devices are preferred over occlusion devices because they maintain antegrade flow during the procedure, reducing the risk of cerebral ischemia.',
    difficulty: 'hard',
    category: 'Embolic Protection',
    isScenario: false
  },
  {
    id: 'n043',
    question: 'A 33-year-old woman presents with seizures and headaches. MRI shows a 3cm lesion with mixed signal intensity and a "popcorn" appearance. What is the most likely diagnosis?',
    options: [
      'Arteriovenous malformation',
      'Cavernous malformation',
      'Venous angioma',
      'Capillary telangiectasia'
    ],
    correctAnswer: 1,
    explanation: 'The "popcorn" appearance on MRI with mixed signal intensity representing blood products of different ages is characteristic of cavernous malformations (cavernomas). These lesions are angiographically occult.',
    difficulty: 'easy',
    category: 'Vascular Malformations',
    isScenario: true
  },
  {
    id: 'n044',
    question: 'What is the most important factor in preventing contrast-induced nephropathy during neuroendovascular procedures?',
    options: [
      'Use of iso-osmolar contrast',
      'Pre-procedure hydration',
      'N-acetylcysteine administration',
      'Minimizing contrast volume'
    ],
    correctAnswer: 1,
    explanation: 'Pre-procedure hydration with normal saline is the most effective intervention for preventing contrast-induced nephropathy. Adequate hydration should begin several hours before the procedure and continue afterward.',
    difficulty: 'medium',
    category: 'Procedural Safety',
    isScenario: false
  },
  {
    id: 'n045',
    question: 'A 55-year-old man has a 6mm unruptured anterior communicating artery aneurysm discovered incidentally. He has no family history of aneurysms. What is the most appropriate management?',
    options: [
      'Immediate surgical clipping',
      'Immediate endovascular coiling',
      'Annual imaging surveillance',
      'Imaging surveillance every 2-3 years'
    ],
    correctAnswer: 2,
    explanation: 'For small unruptured aneurysms (5-7mm) without high-risk features, annual imaging surveillance is appropriate initially. The risk of rupture is low (<1% per year), and treatment risks may outweigh benefits.',
    difficulty: 'medium',
    category: 'Aneurysm Management',
    isScenario: true
  },
  {
    id: 'n046',
    question: 'Which technique is most effective for treating vasospasm in small distal vessels after subarachnoid hemorrhage?',
    options: [
      'Balloon angioplasty',
      'Intra-arterial nicardipine',
      'Intra-arterial verapamil',
      'Mechanical disruption'
    ],
    correctAnswer: 2,
    explanation: 'Intra-arterial verapamil is most effective for treating vasospasm in small distal vessels that are not amenable to balloon angioplasty. Verapamil has longer duration of action compared to nicardipine.',
    difficulty: 'medium',
    category: 'Vasospasm Treatment',
    isScenario: false
  },
  {
    id: 'n047',
    question: 'A 41-year-old woman presents with pulsatile tinnitus. MR venography shows stenosis of the right transverse sinus. Manometry shows elevated opening pressure. What is the most appropriate treatment?',
    options: [
      'Venous sinus stenting',
      'CSF diversion',
      'Medical management with acetazolamide',
      'Surgical decompression'
    ],
    correctAnswer: 0,
    explanation: 'Venous sinus stenosis with elevated intracranial pressure and pulsatile tinnitus is an indication for venous sinus stenting, which can effectively treat both the stenosis and associated symptoms.',
    difficulty: 'hard',
    category: 'Venous Intervention',
    isScenario: true
  },
  {
    id: 'n048',
    question: 'What is the most common complication of Onyx embolization for AVM treatment?',
    options: [
      'Hemorrhage',
      'Ischemic stroke',
      'Catheter retention',
      'Venous occlusion'
    ],
    correctAnswer: 2,
    explanation: 'Catheter retention (gluing of the microcatheter) is the most common complication specific to Onyx embolization due to the adhesive properties of the embolic agent. This usually requires surgical removal of the retained catheter tip.',
    difficulty: 'medium',
    category: 'Embolization Complications',
    isScenario: false
  },
  {
    id: 'n049',
    question: 'A 67-year-old man has symptomatic 85% carotid stenosis. He has severe coronary artery disease requiring CABG surgery. What is the optimal management strategy?',
    options: [
      'CEA followed by CABG',
      'CABG followed by CEA',
      'Simultaneous CEA and CABG',
      'CAS followed by CABG'
    ],
    correctAnswer: 2,
    explanation: 'For patients requiring both carotid revascularization and CABG, simultaneous CEA and CABG is often preferred in patients with severe symptomatic carotid stenosis to minimize the risk of perioperative stroke during cardiac surgery.',
    difficulty: 'hard',
    category: 'Combined Procedures',
    isScenario: true
  },
  {
    id: 'n050',
    question: 'Which factor most strongly predicts successful aneurysm occlusion with flow diverters?',
    options: [
      'Aneurysm size',
      'Aneurysm location',
      'Parent vessel diameter',
      'Neck width'
    ],
    correctAnswer: 2,
    explanation: 'Parent vessel diameter is the most important factor predicting successful flow diverter treatment. Adequate vessel diameter (typically >2.5mm) is necessary for proper device apposition and flow modification.',
    difficulty: 'hard',
    category: 'Flow Diverter Success',
    isScenario: false
  }
];