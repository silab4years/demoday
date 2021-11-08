<template>
  <div id="features">
    <div class="features-container">
      <div class="header">Social Innovation 2021 in Taiwan</div>
      <div class="feature-items">
        <div class="feature-item">
          <div class="icon">3</div>
          <div class="title">三天精彩不中斷</div>
        </div>
        <div class="feature-item">
          <div class="icon">6</div>
          <div class="title">六場趨勢講座</div>
        </div>
        <div class="feature-item">
          <div class="icon">3</div>
          <div class="title">三場社創主題工作坊</div>
        </div>
        <div class="feature-item">
          <div class="icon">2</div>
          <div class="title">早晚各兩場精彩對談！</div>
        </div>
        <div class="feature-item">
          <div class="icon">1</div>
          <div class="title">一場SDGS主題策展</div>
        </div>
        <div class="feature-item">
          <div class="icon">30</div>
          <div class="title">三十家社創市集</div>
        </div>
      </div>
    </div>
  </div>
</template>
 

<style lang="sass">
#features
	background-color: #FFD347
	.features-container
		width: var(--container-width)
		max-width: var(--container-max-width)
		margin: 0 auto
		padding: 100px 0

		@media (max-width: 768px)
			padding: 50px 0
		.header
			color: #fff
			font-size: 48px
			font-weight: bold
			text-align: center

			@media (max-width: 768px)
				font-size: 24px
		.feature-items
			display: grid
			max-width: 1200px
			width: 100%
			margin: 100px auto
			gap: 80px 20px
			grid-template-columns: repeat(3, 1fr)
			grid-template-row: repeat(2, 1fr)
			@media (max-width: 768px)
				margin: 50px auto
				gap: 40px 0
				grid-template-columns: repeat(2, 1fr)
				grid-template-row: repeat(3, 1fr)
			.feature-item
				width: 100%
				.icon
					width: 120px
					height: 120px
					border-radius: 30px
					background-color: #FF6422
					display: flex
					justify-content: center
					align-items: center
					margin: 0 auto
					color: #fff
					font-size: 72px
				&:nth-child(2n)
					.icon
						background-color: #4CE7FF
				.title
					color: #000
					font-size: 24px
					font-weight: bold
					text-align: center
					margin-top: 20px
					letter-spacing: 4px
					@media (max-width: 768px)
						font-size: 18px
</style>