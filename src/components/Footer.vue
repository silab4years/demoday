<template>
  <section id="footer">
    <div class="footer-container">
      <div class="content">
        <div class="header">主辦單位聯絡資訊</div>
        <div class="organizer">
          <div class="title">主辦單位</div>
          <img src="../assets/footer/organizer.png" />
        </div>
        <div class="executive">
          <div class="title" style="width: 100%">執行單位</div>
          <img src="../assets/footer/D.png" style="height: 30px" />
          <img src="../assets/footer/A.png" />
          <img src="../assets/footer/B.png" style="height: 57px" />
          <img src="../assets/footer/F.png" />
          <img src="../assets/footer/C.png" style="height: 60px" />
          <img src="../assets/footer/E.png" style="height: 30px" />
        </div>
        <div class="implementer">
          <div class="title">合作單位</div>
          <div>詳見 Accupass 活動頁面</div>
        </div>
      </div>
      <div class="contact">
        <img class="logo" src="../assets/footer/logo.png" />
        <div class="contact-title">CONTACT US</div>
        <img class="contact-logo" src="../assets/footer/J1.png" />
        <div class="contact-info">
          (02)6631-5055<br />
          socinlab@gmail.com<br />
          台北市仁愛路三段99號
        </div>
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
		padding-top: 50px
		padding-bottom: 16px
		position: relative
		display: grid
		grid-template-columns: 1fr 1fr
		@media (max-width: 768px)
			padding: 24px 0
			grid-template-columns: 1fr
			grid-template-rows: 1fr 1fr
		.content
			@media (max-width: 768px)
				text-align: center
			.title
				margin: 20px 0
				font-size: 18px
				letter-spacing: 4px
				font-weight: bold
			img
				height: 40px
				object-fit: contain
				margin: 5px
			.header
				font-size: 48px
				font-weight: bold
				margin-bottom: 40px
				@media (max-width: 768px)
					font-size: 24px
					text-align: center
					margin-bottom: 20px
			.executive
				display: flex
				flex-wrap: wrap
				align-items: center
				@media (max-width: 768px)
					justify-content: center
			.implementer
				margin-top: 20px
				display: flex
				align-items: center
				letter-spacing: 2px
				line-height: 2
				@media (max-width: 768px)
					display: block
				.title
					margin: 0
					margin-right: 20px
					@media (max-width: 768px)
						margin-right: 0
		.contact
			display: flex
			flex-direction: column
			justify-content: flex-end
			align-items: flex-end
			@media (max-width: 768px)
				justify-content: center
				align-items: center
			.logo
				height: 100px
				object-fit: contain
				@media (max-width: 768px)
					margin-top: 20px
					order: 1
			.contact-title
				font-size: 18px
				font-weight: bold
				margin: 24px 0
				letter-spacing: 4px
			.contact-logo
				height: 40px
			.contact-info
				letter-spacing: 4px
				margin-top: 20px
				font-size: 16px
				font-weight: bold
				line-height: 2
				text-align: right
				@media (max-width: 768px)
					text-align: center
</style>