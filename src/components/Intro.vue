<template>
  <div id="intro">
    <div class="intro-container">
      <div class="content">
        <img src="../assets/intro/logo.png" />
        <div class="links">
          <a class="link-item" href="#">Gather 傳送門</a>
          <a class="link-item" href="#">Gather 導覽說明</a>
        </div>
      </div>
    </div>
  </div>
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
		// background
		background-image: url(../assets/intro/cover.png)
		background-position: bottom center
		background-repeat: no-repeat
		background-size: contain

		@media (max-width: 1024px)
			background-size: auto 40vh
		@media (min-width: 1025px)
			background-size: min(50vw, 700px) auto
			background-position: bottom right
		.content
			padding: 50px 0
			max-width: 350px
			text-align: center
			margin: 0 auto
			@media (min-width: 1025px)
				max-width: min(50vw, 500px)
				position: absolute
				top: 50%
				transform: translateY(-60%)
				margin: initial
			img
				width: 100%
			.links
				@media (max-width: 1024px)
					display: flex
					flex-direction: column
				.link-item
					background-color: #4ce7ff
					border-radius: 100em
					color: #000
					padding: 16px 32px
					text-decoration: none
					display: inline-block
					margin: 7px
					font-weight: bold
					&:nth-child(2)
						background: #FFD347

		.cover
			img
				height: calc((100vh - 100px) / 2)
</style>