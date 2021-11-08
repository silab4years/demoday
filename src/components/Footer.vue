<template>
  <section id="footer">
    <div class="footer-container">
      <div class="header">主辦單位聯絡資訊</div>
      <div class="content">
        <div class="adviser">
          <div class="title">指導單位</div>
          <img src="../assets/footer/I 1.png" />
        </div>
        <div class="implementer">
          <div class="title">承辦單位</div>
          <img src="../assets/footer/J 1.png" />
        </div>
        <div class="co-organizer">
          <div class="title">協辦單位</div>
          <img src="../assets/footer/A 1.png" />
          <img src="../assets/footer/D 2.png" style="height: 20px" />
          <img src="../assets/footer/B 1.png" />
          <img src="../assets/footer/C 1.png" />
          <img src="../assets/footer/E 1.png" />
        </div>
        <div class="subcontractor">
          <div class="title">協力廠商</div>
          <img src="../assets/footer/F1.png" />
          <img src="../assets/footer/G.png" />
          <img src="../assets/footer/H1.png" style="height: 36px" />
        </div>
      </div>
      <div class="logo">
        <img src="../assets/footer/logo.png" />
      </div>
    </div>
  </section>
</template>
<style lang="sass">
#footer
	width: 100%
	background-color: #112d57
	color: #fff
	.footer-container
		width: var(--container-width)
		max-width: var(--container-max-width)
		margin: 0 auto
		padding: 50px 0
		position: relative
		@media (max-width: 768px)
			padding: 24px 0
		.header
			font-size: 48px
			font-weight: bold

			@media (max-width: 768px)
				font-size: 24px
				text-align: center
		.content
			margin-top: 20px

			@media (min-width: 769px)
				display: grid
				max-width: 730px
				grid-template-columns: 1fr 1fr 1fr
				grid-template-rows: auto auto
				grid-gap: 20px
				grid-template-areas: "adviser implementer subcontractor" "organizer organizer subcontractor"
			.title
				margin: 20px 0
				font-size: 18px
				font-weight: bold
			img
				height: 40px
				object-fit: contain
				margin: 5px
			.adviser
				grid-area: adviser
			.implementer
				grid-area: implementer
			.co-organizer
				grid-area: organizer
			.subcontractor
				grid-area: subcontractor
				img
					height: 60px
					margin: 12px

		.logo
			margin-top: 50px
			text-align: center
			@media (min-width: 900px)
				margin-top: 0
				position: absolute
				bottom: 40px
				right: 40px
			img
				height: 100px
				object-fit: contain
				margin: 0 auto
</style>