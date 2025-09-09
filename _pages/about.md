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

I am a fifth-year PhD student in Medical Engineering and Medical Physics at the Harvard-MIT Program in Health Sciences and Technology, specializing in computer science. I am advised by [Elazer Edelman](https://en.wikipedia.org/wiki/Elazer_R._Edelman) and [Farhad Nezami](https://nezamilab.bwh.harvard.edu/). I have a M.Sc in Bioengineering from [EPFL](https://www.epfl.ch/schools/sv/) and a dual bachelor's degree in Mechanical Engineering and Physics from the [American University in Cairo](https://www.aucegypt.edu/). I have previously interned at [Calico](https://www.calicolabs.com/) developing protein generative models, [General Electric Healthcare](https://www.gehealthcare.com/) creating generative models for medical imaging, and [Novostia](https://www.novostia.com/) focusing on medical device development.
 
<!-- ## Research Interests -->
I'm interested in how machine learning can transform the way we use computational simulation environments for science, engineering, and medicine. Coming from a biomechanical simulation background, I became increasingly frustrated with computational simulators as I was starting my PhD. I found that the main bottleneck wasn't our understanding of the underlying physics, but rather our ability to process patient-specific anatomic geometry and understand their impact on device outcomes. My research focuses on several key bottlenecks for using computational simulation for cardiology.


<!-- To this end my PhD focuses on 1) computational geometry to reconstruct patient-specific models from multi-modal datasets of cardiovascular images 2) generative diffusion models to create synthetic anatomies that help reveal the relationship bewteen subtle geometric variation and simulated device outcomes, and 3) virtual trial platforms that simulate device deployment on large scale anatomic cohorts to train phsyics-based surrogate machine learning. -->

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

	/* Make content wider by expanding to the right only */
	@media (min-width: 925px) {
		.page__content {
			width: calc(100vw - 300px) !important;
			max-width: none !important;
		}
		
		.pub_table {
			width: 100% !important;
			max-width: none !important;
		}
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

{% include key_papers %}
