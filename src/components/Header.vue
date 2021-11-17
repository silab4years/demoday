<template>
  <section id="header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/header/logo.png" />
      </div>
      <div class="nav">
        <a class="nav-item" href="#agenda">活動<br class="divider" />議程</a>
        <a class="nav-item" href="#guidebook">大會<br class="divider" />手冊</a>
        <a class="nav-item" href="#teams">參展<br class="divider" />團隊</a>
        <a class="nav-item" href="#footer">主辦<br class="divider" />單位</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
<style lang="sass">
#header
	background-color: #FFD347
	.header-container
		width: var(--container-width)
		max-width: var(--container-max-width)
		height: 100px
		margin: 0 auto
		display: flex
		justify-content: space-between
		align-items: center
		@media (max-width: 768px)
			height: 70px
		.logo
			img
				height: 50px
				@media (max-width: 768px)
					height: 30px
		.nav
			display: flex
			align-items: center
			gap: 12px
			@media (max-width: 768px)
				gap: 9px
			@media (max-width: 380px)
				gap: 5px
			.nav-item
				font-size: 14px
				font-weight: bold
				color: #fff
				padding: 6px 12px
				padding-right: 8px
				border-radius: 8px
				background-color: #FF6422
				letter-spacing: 4px
				text-decoration: none
				&:hover
					opacity: 0.8
				&:active
					transform: scale(0.95)
					transition: transform 0.2s ease-in-out
				.divider
					display: none
				@media (max-width: 768px)
					font-size: 10px
					letter-spacing: .2em
					line-height: 1.5em
					//width: calc(2em + 24px)
					padding: 6px 12px
					padding-right: calc(12px - .2em)
					.divider
						display: inline
				@media (max-width: 380px)
					font-size: 10px
					letter-spacing: .2em
					line-height: 1.5em
					//width: calc(2em + 24px)
					padding: 3px 6px
					padding-right: calc(6px - .2em)
					.divider
						display: inline
</style>