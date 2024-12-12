---
permalink: /
title: #"About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

I am a fourth-year PhD student in Medical Engineering and Medical Physics at the Harvard-MIT Program in Health Sciences and Technology, specializing in computer science. I am advised by [Elazer Edelman](https://en.wikipedia.org/wiki/Elazer_R._Edelman) and [Farhad Nezami](https://nezamilab.bwh.harvard.edu/). I have a M.Sc in Bioengineering from [EPFL](https://www.epfl.ch/schools/sv/) and a dual bachelor's degree in Mechanical Engineering and Physics from the [American University in Cairo](https://www.aucegypt.edu/).
 

## Research Interests
My work focuses on developing **controllable generative models of 3D anatomic shape** that are compatible with **computational simulators of medical device interventions** to understand how anatomic form impacts interventional outcomes. More specifically I develop conditioning and guidance methods that impose **morphological**, **skeletal**, and **topological**  constraints on anatomic diffusion models, enabling the following applications:

- **Simulation-based counterfactuals with digital siblings**: When simulating device interventions on patient-specific digital twins, it is difficult to determine when any specific anatomic feature causally influences device outcomes. We propose to controllably edit patient-specific anatomy to create **digital siblings** that exhibit subtle differences from their original digital twin. Simulating both patient and sibling enables clinical researchers and device designers to find **counterfactual shape features** that causally influence simulated device outcomes, leading to **safer and more effective** medical devices, as well as **novel scientific insights**.
- **Augmenting in-silico trial cohorts with rare anatomies**: Digital twin datasets are often imbalanced in terms of anatomic features, where the sickest and most problematic patients are underrepresented. We propose to leverage anatomic diffusion models to controllably augment virtual cohorts with **rare anatomic shapes**, enabling in-silico device trials for **diverse patient populations**, and enhancing the computational evaluation of medical devices.


<style type="text/css">
	.paper_metadata a {
		text-decoration: none!important;
		color: #494e52;
	}
	table, th, td {
		border: 0px solid black;
	}
	table.pub_table {
		width: 100%;
		font-size: 12pt;
	}
	td.pub_td1 {
		width: 33%;
	}
	td.pub_td2 {
		width: 67%;
	}
	span.subbullet {
		font-size: 11pt;
		margin-left: 20px
	}
	oral {
		font-weight: bold;
		color: red;
	}

    /* Style the gallery */
    #gallery {
		/* display: block; */
		display: flex;
		flex-wrap: wrap;
    }

    /* Style the art pieces */
    .gallery-row {
		display: block; /* Display the art pieces in a row */
		width: 100%; /* Set the width of each art piece to 30% of the gallery width */
    }

    .art-piece {
		width: 30%; /* Set the width of each art piece to 30% of the gallery width */
		margin: 1%; /* Add some margin around each art piece */
    }

    /* Style the images */
    .art-piece img {
    	cursor: pointer;
		width: 100%;
    }
	
	/* Style the modals */
	#modal {
		display: none;
		margin: auto;
		position: fixed;
		z-index: 1; /* Sit on top */
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		--r: 1/1;
		aspect-ratio: var(--r);
		width:min(90%, min(960px, 90vh*(var(--r))));
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		padding: 10px;
		overflow: auto;
		background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
	}
	
	.button {
		display: none;
		background: white;
		border-radius: 50%;
		box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
		position: fixed;
		cursor: pointer;
		margin-left: 2px;
		margin-right: 2px;
		margin-top: -20px;
  		color: rgb(102, 102, 102);
		opacity: 1;
		transition-duration: .2s;
		transition-property: opacity;
		z-index: 3;
		top: 50%;
		align-items: center;
		border: none;
		justify-content: center;
		padding: 2px 10px 4px;
	}
	#leftarrow {
		left: 5px;
	}
	#rightarrow {
		right: 5px;
	}

</style>
<script src="assets/js/gallery.js"></script>
<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>addBackToTop({
  diameter: 56,
  backgroundColor: 'rgb(255, 82, 82)',
  textColor: '#fff'
})</script>

{% include publications %}
