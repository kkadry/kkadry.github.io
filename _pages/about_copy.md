---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
# redirect_from: 
#   - /about/
#   - /about.html
---

I am a third-year PhD student at the [Edelman Lab](https://edelmanlab.mit.edu/), advised by Dr. Elazer Edelman. I have a M.Sc in Bioengineering from [EPFL](https://www.epfl.ch/schools/sv/) and a dual bachelor's degree in Mechanical Engineering and Physics from the [American University in Cairo](https://www.aucegypt.edu/). My research involves integrating computational tools into clinical workflows to understand coronary artery disease and guide cardiovascular interventions. To do this, I leverage techniques from computational mechanics, biomedical computer vision, image registration, and generative AI.


## Selected Publications

<style>
  .image-text-block-square {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .image-text-block-square img {
    width: 175px;
    height: 175px;
    margin-right: 20px;
  }

  .image-text-block-square div {
    max-width: 600px;
  }

  .image-text-block-square p {
    margin: 0; /* Remove default paragraph margin */
  }

  .strong-title {
    font-weight: bold;
    display: inline; /* Keep title inline */
  }

  .author-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .author-list a {
    margin-right: 0px;
  }

  .journal-year {
    color: #666;
    margin-bottom: 0; /* Remove space after the journal */
  }

  .links {
    margin-bottom: 10px; /* Remove space before the links */
  }
</style>


<!-- ## Generative Modelling of Anatomic Counterfactuals to Augment Virtual Intervention Frameworks -->
<!-- ### A Diffusion Model for Simulation Ready Coronary Anatomy with Morpho-skeletal Control -->

<div class="image-text-block">
  <img src="/assets/img/morphoskel_diffusion.png" alt="diffusion_model.html">
  <div>
    <p><strong class="strong-title"><a href="https://arxiv.org/abs/2407.15631">A Diffusion Model for Simulation Ready Coronary Anatomy with Morpho-skeletal Control</a></strong></p>
    <p class="journal-year"><em>arXiv preprint</em>, 2024. <b>Karim Kadry</b>, Shreya Gupta, Jonas Sogbadji, Michiel Schaap, Kersten Petersen, Takuya Mizukami, Carlos Collet, Farhad R Nezami, Elazer R Edelman</p>
    <div class="links">
      <a href="/files/morphoskel_diffusion.pdf">Download Here</a> 
    </div>
    <p>We leverage Latent Diffusion Models (LDMs) to generate realistic coronary artery anatomies for virtual intervention studies. Our approach balances controllability and realism, enabling the creation of anatomies based on topological, morphological, and skeletal constraints. This framework allows for device designers to derive mechanistic insights regarding anatomic variation and simulated device deployment.</p>
  </div>
</div>

<!-- ### Probing the Limits and Capabilities of Diffusion Models for the Anatomic Editing of Digital Twins -->

<div class="image-text-block">
  <img src="/assets/img/diffusion_editing.png" alt="diffusion_editing.html">
  <div>
    <p><strong class="strong-title"><a href="https://arxiv.org/abs/2401.00247">Probing the Limits and Capabilities of Diffusion Models for the Anatomic Editing of Digital Twins</a></strong></p>
    <p class="journal-year"><em>arXiv preprint</em>, 2023. <b>Karim Kadry</b>, Shreya Gupta, Farhad R Nezami, Elazer R Edelman</p>
    <div class="links">
      <a href="/files/diffusion_editing.pdf">Download Here</a> 
    </div>
    <p>We explore the use of Latent Diffusion Models (LDMs) to edit digital twins of cardiac anatomy, creating anatomic variants termed digital siblings. These digital siblings enable comparative simulations to study the impact of subtle anatomic variations on cardiovascular device deployment. Our framework demonstrates the potential of LDMs for virtual cohort augmentation and addresses issues related to dataset imbalance and diversity.</p>
  </div>
</div>


<!-- ### Peronsalized Biomechanical Simulations from Patient-Specific Coronary Artery Imaging -->

<div class="image-text-block">
  <img src="/assets/img/RSIF.jpg" alt="coronarytwin.html">
  <div>
    <p><strong class="strong-title"><a href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2021.0436">A platform for high-fidelity patient-specific structural modelling of atherosclerotic arteries: from intravascular imaging to three-dimensional stress distributions</a></strong></p>
    <p class="journal-year"><em>Royal Society Interface</em>, 2021. <b>Karim Kadry</b>, Max L. Olender, David Marlevi, Elazer R. Edelman, Farhad R. Nezami</p>
    <div class="links">
      <a href="/files/Platform.pdf">Download Here</a> 
    </div>
    <p>We develop an end-to-end computational pipeline for patient-specific coronary artery biomechanics from intravascular imaging and study the influence of various diseased tissues on mechanical wall stress.</p>
  </div>
</div>

<div class="image-text-block">
  <img src="/assets/img/CBM.png" alt="fully_automated_finite_element.html">
  <div>
    <p><strong class="strong-title"><a href="https://www.sciencedirect.com/science/article/pii/S0010482523008901">Fully automated construction of three-dimensional finite element simulations from Optical Coherence Tomography</a></strong></p>
    <p class="journal-year"><em>Computers in Biology and Medicine</em>, 2023. <b>Ross Straughan</b>*, <b>Karim Kadry</b>*, Sahil A Parikh, Elazer R. Edelman, Farhad R. Nezami</p>
    <div class="links">
      <a href="/files/Fully_Automated_OCT.pdf">Download Here</a> 
    </div>
    <p>We automate our previous computational pipeline for patient-specific coronary biomechanics, enabling the scalable execution of high-fidelity biomechanical simulations from large datasets of OCT images.</p>
  </div>
</div>

<!-- ### Automatic Co-Registration Of Multi-Modal Coronary Artery Images For High-Fidelity Coronary Digital Twins. -->

<div class="image-text-block">
  <img src="/assets/img/coreg_img.png" alt="morphology_non_rigid_registration.html">
  <div>
    <p><strong class="strong-title"><a href="https://arxiv.org/abs/2301.00060">Morphology-based non-rigid registration of coronary computed tomography and intravascular images through virtual catheter path optimization</a></strong></p>
    <p class="journal-year"><em>Arxiv</em>, 2022. <b>Karim Kadry</b>, Abhishek Karmakar, Andreas Schuh, Kersten Peterson, Michiel Schaap, David Marlevi, Charles Taylor, Elazer Edelman, Farhad Nezami</p>
    <div class="links">
      <a href="/files/coreg_paper.pdf">Download Here</a> 
    </div>
    <p>We present a morphology-based framework for aligning intravascular and computed tomography (CT) images. This approach combines the high-resolution cross-sectional detail of intravascular imaging with the accurate 3D information from CT scans, enabling the creation of high-fidelity digital twins of coronary arteries.</p>
  </div>
</div>

<!-- ### Biomechanics of Diastolic Dysfunction: A One-Dimensional Computational Modeling Approach -->

<div class="image-text-block">
  <img src="/assets/img/Diastolic_Dysfunction.png" alt="diastolic_dysfunction.html">
  <div>
    <p><strong class="strong-title"><a href="https://journals.physiology.org/doi/full/10.1152/ajpheart.00482.2020">Biomechanics of Diastolic Dysfunction: A One-Dimensional Computational Modeling Approach</a></strong></p>
    <p class="journal-year"><em>American Journal of Physiology-Heart and Circulatory Physiology</em>, 2020. <b>Karim Kadry</b>, Stamatia Pagoulatou, Quentin Mercier, Georgios Rovas, Vasiliki Bikia, Hajo Müller, Dionysios Adamopoulos, Nikolaos Stergiopulos</p>
    <div class="links">
      <a href="/files/Diastolic_Dysfunction_Modeling.pdf">Download Here</a> 
    </div>
    <p>We develop a computational model to study diastolic dysfunction (DD), a key component of heart failure with preserved ejection fraction (HFpEF). Our model integrates a one-dimensional arterial network with a zero-dimensional cardiac model to investigate the active relaxation and passive stiffness of the left ventricular wall. This framework provides insights into the biomechanical mechanisms of DD and HFpEF.</p>
  </div>
</div>