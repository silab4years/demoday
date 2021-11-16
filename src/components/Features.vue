<template>
  <section id="features">
    <div class="features-container">
      <div class="header">
        群眾智造 ─ 社會創新實驗中心四週年慶祝活動<br />
        Collective Intelligence in Practice
      </div>
      <div class="header mobile">
        群眾智造 <br />
        <div class="subtitle">
          社會創新實驗中心四週年慶祝活動<br />
          Collective Intelligence in Practice
        </div>
      </div>
      <div class="feature-items">
        <div class="feature-item">
          <div class="title">
            實境<br />
            解謎
          </div>
          <div class="spacer" />
          <div class="subtitle">
            芒果遊戲 X <br />
            社創主題實境解謎
          </div>
          <div class="subtitle mobile">
            芒果遊戲 X <br />
            社創主題實境解謎
          </div>
        </div>
        <div class="feature-item">
          <div class="title">
            線上<br />
            市集
          </div>
          <div class="spacer" />
          <div class="subtitle">三天不打烊˙三十家社創市集</div>
          <div class="subtitle mobile">
            三十家<br />
            線上市集！
          </div>
        </div>
        <div class="feature-item">
          <div class="title">
            OPEN HOUSE <br />
            TAIPEI
          </div>
          <div class="spacer" />
          <div class="subtitle">打開唐鳳政委辦公室</div>
          <div class="subtitle mobile">
            打開唐鳳政委<br />
            辦公室
          </div>
        </div>
        <div class="feature-item">
          <div class="title">線上展覽</div>
          <div class="spacer" />
          <div class="subtitle">
            永續戰疫，創新出擊！<br />
            SDGs X社創中心議題特展
          </div>
          <div class="subtitle mobile">
            永續戰疫，<br />
            創新出擊！<br />
            SDGsX<br />
            社創中心<br />
            議題特展
          </div>
        </div>
        <div class="feature-item">
          <div class="title">
            虛實整合講座<br />
            工作坊
          </div>
          <div class="spacer" />
          <div class="subtitle">五場社創講座及工作坊</div>
          <div class="subtitle mobile">
            五場<br />
            社創講座及<br />
            工作坊
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 

<style lang="sass">
@use "sass:math"
@function longshadow($color_a,$color_b,$stepnum, $opacity: 1)
	$gradient_steps: null
	@for $i from 1 through $stepnum
		$weight: math.div($i - 1, $stepnum) * 100

		$colour_mix: mix($color_b, rgba($color_a, $opacity), $weight)

		$seperator: null

		@if($i != $stepnum)
			$seperator: #{','}

		$gradient_steps: append( #{$gradient_steps}, #{$i}px #{$i}px $colour_mix $seperator )
	@return $gradient_steps

#features
	background-color: #FFD347
	overflow: hidden
	.features-container
		width: var(--container-width)
		max-width: var(--container-max-width)
		margin: 0 auto
		padding: 100px 0

		@media (max-width: 1024px)
			padding: 50px 0

		.header
			color: #696969
			font-size: 42px
			font-weight: bold
			text-align: center
			line-height: 1.5
			@media (max-width: 1024px)
				display: none
			&.mobile
				display: none
				font-size: 32px
				line-height: 2
				.subtitle
					font-size: 20px
				@media (max-width: 1024px)
					display: block

		.feature-items
			margin-top: 50px
			display: grid
			grid-template-areas: "game store store store openhouse openhouse" "exhibition exhibition workshop workshop workshop workshop"
			gap: 56px
			@media (max-width: 1024px)
				grid-template-areas: "game store" "exhibition store" "exhibition workshop" "openhouse workshop"
				grid-template-columns: 1fr 1fr
				gap: 24px
				max-width: 400px
				margin: 0 auto
				margin-top: 50px
			.feature-item
				padding: 24px
				border-radius: 24px
				background-color: #FFFFFF
				color: #fff
				font-weight: bold
				display: flex
				flex-direction: column

				@media (max-width: 1024px)
					padding: 12px
				.title
					font-size: 48px
					@media (max-width: 1024px)
						font-size: 24px
				.spacer
					flex: 1
				.subtitle
					font-size: 24px
					align-self: flex-end
					text-align: right
					letter-spacing: 4px
					&.mobile
						display: none
						font-size: 12px
						margin-top: 32px
						@media (max-width: 1024px)
							display: block

					@media (max-width: 1024px)
						display: none
				&:nth-child(1)
					grid-area: game
					background-color: #ff6900
					box-shadow: longshadow(#ff9431 ,#ffa600, 500, 0.3)
					.subtitle.mobile
						font-size: 8px
				&:nth-child(2)
					grid-area: store
					background-color: #4ce7ff
					box-shadow: longshadow(#36c3fe,#3f7eff, 500, 0.3)
					@media (max-width: 1024px)
						z-index: 1
				&:nth-child(3)
					grid-area: openhouse
					background-color: #ff6900
					box-shadow: longshadow(#ff9431 ,#ffa600, 500, 0.3)
					@media (max-width: 1024px)
						z-index: 1
				&:nth-child(4)
					grid-area: exhibition
					background-color: #4ce7ff
					box-shadow: longshadow(#36c3fe,#3f7eff, 500, 0.3)
				&:nth-child(5)
					grid-area: workshop
					background-color: #ba37f8
					box-shadow: longshadow(#c853ff, #b54dff, 500, 0.3)
					@media (max-width: 1024px)
						z-index: 1
</style>