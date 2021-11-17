<template>
  <section id="intro">
    <div class="intro-container">
      <div class="content">
        <img class="subtitle" src="../assets/intro/subtitle.png" />
        <img class="main" src="../assets/intro/img_main_logo.png" />
        <div class="links">
          <a class="link-item" href="https://gather.town/app/OpSG6nKGfIZ1MfCa/SDGS2021A" target="_blank">Gather 傳送門</a>
          <a class="link-item" href="#guidebook">大會手冊</a>
          <a class="link-item" href="https://www.accupass.com/event/2111010239578296478730" target="_blank">Accupass<br />搶先報名! </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
<style lang="sass">
#intro
	background-color: #E6E6E6
	.intro-container
		width: var(--container-width)
		max-width: var(--container-max-width)
		min-height: max(calc(100vh - 100px), 500px)
		margin: 0 auto
		position: relative
		display: flex
		// background
		background-image: url(../assets/intro/cover.webp)
		background-position: bottom center
		background-repeat: no-repeat
		background-size: contain

		@media (max-width: 1024px)
			background-size: auto 40vh
		@media (min-width: 1025px)
			background-size: max(40vw, 700px) auto
			background-position: bottom right
		.content
			padding: 100px 0
			padding-top: 150px
			max-width: 350px
			text-align: center
			margin: 0 auto
			@media (min-width: 1025px)
				width: 600px
				max-width: 50vw
				margin: initial
				align-self: center
				margin-top: -100px
			img
				width: 100%
				&.subtitle
					width: 200px
					margin-bottom: -20px
			.links
				display: grid
				grid-template-columns: 180px 200px
				grid-template-rows: 1fr 1fr
				grid-template-areas: "gather accupass" "manual accupass"
				grid-gap: 15px
				margin-left: 50px
				@media (max-width: 1024px)
					margin-left: 0
					display: flex
					flex-direction: column
					align-items: center
				.link-item
					background-color: #4ce7ff
					border-radius: 28px
					color: #000
					padding: 0 32px
					text-decoration: none
					display: inline-block
					min-height: 54px
					font-weight: bold
					display: inline-flex
					align-items: center
					justify-content: center
					text-transform: uppercase
					&:nth-child(1)
						grid-area: gather
					&:nth-child(2)
						grid-area: manual
						background: #FFD347
					&:nth-child(3)
						grid-area: 	accupass
						background: #FF6900
						color: #fff
						line-height: 1.5
					&:hover
						opacity: 0.8
					&:active
						transform: scale(0.95)
						transition: transform 0.2s ease-in-out
					@media (max-width: 1024px)
						width: 200px

		.cover
			img
				height: calc((100vh - 100px) / 2)
</style>