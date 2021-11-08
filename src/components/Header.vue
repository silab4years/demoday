<template>
  <div id="header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/header/logo.png" />
      </div>
      <div class="nav">
        <a class="nav-item" href="#agenda">活動議程</a>
        <a class="nav-item" href="#guidebook">導覽手冊</a>
        <a class="nav-item" href="#teams">社創團隊</a>
        <a class="nav-item" href="#footer">主辦單位</a>
      </div>
    </div>
  </div>
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
		.logo
			img
				height: 50px
		.nav
			display: flex
			align-items: center
			gap: 12px
			@media (max-width: 768px)
				display: none
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
</style>