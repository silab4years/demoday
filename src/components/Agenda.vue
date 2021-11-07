<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AgendaItem from './Agenda/AgendaItem.vue'
import AgendaTitle from './Agenda/AgendaTitle.vue'
</script>

<template>
  <div id="agenda">
    <div class="header">活動議程</div>
    <div class="date-switch">
      <a class="date-item" href="#date-11-26">11.26</a>
      <a class="date-item" href="#date-11-27">11.27</a>
      <a class="date-item" href="#date-11-28">11.28</a>
    </div>
    <div class="agenda-date-items">
      <div class="agenda-date-item" id="date-11-26">
        <div class="border-item"></div>
        <div class="agenda-container">
          <Agenda-item background-color="#E6E6E6" event-type="online">
            <template v-slot:time>10:00-11:00 </template>
            <template v-slot:name>開幕式 </template>
            <template v-slot:spaker>主持 林紹偉Social AED </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live">
            <template v-slot:time>11:00-12:00</template>
            <template v-slot:name>疫情下的衝擊與轉變 </template>
            <template v-slot:spaker>陳文良</template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>12:00-13:30</template>
            <template v-slot:name>午餐/休息 </template>
          </Agenda-item>

          <Agenda-title>未來想像 Demo Show</Agenda-title>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>13:30-13:50</template>
            <template v-slot:name>開場引言　主持人引言</template>
            <template v-slot:spaker>主持 林紹偉Social AED</template>
          </Agenda-item>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>13:50-14:50</template>
            <template v-slot:name>未來想像　keynote 分享</template>
            <template v-slot:spaker>
              胡耀傑｜圖靈鏈創辦人<br />
              李振北｜永訊科技<br />
              Chris｜公益自律聯盟
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>14:50-15:00</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>

          <Agenda-title>地方創生 Demo Show</Agenda-title>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>15:00-15:20</template>
            <template v-slot:name>開場引言　主持人引言</template>
            <template v-slot:spaker>主持 林紹偉Social AED</template>
          </Agenda-item>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>15:20-16:20</template>
            <template v-slot:name>地方創生　keynote 分享</template>
            <template v-slot:spaker>
              林書豪 星濱山<br />
              Emma 粨種人<br />
              蔡威德 坪感覺
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>16:20-16:30</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live">
            <template v-slot:time>16:30-18:30</template>
            <template v-slot:name>
              Impact Investment<br />
              影響力投資(KPMG)
            </template>
            <template v-slot:spaker>黃正忠、侯家楷</template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="80px">
            <template v-slot:time>18:30-20:30</template>
            <template v-slot:name>社會事開講(BOF) </template>
            <template v-slot:spaker>名單會更新，8~10組</template>
          </Agenda-item>
        </div>
      </div>
      <div class="agenda-date-item" id="date-11-27">
        <div class="border-item"></div>
        <div class="agenda-container">
          <Agenda-item background-color="#4CE7FF">
            <template v-slot:time>11:00-12:00</template>
            <template v-slot:name>Buying Power 有責ㄗㄜˊ商行 </template>
            <template v-slot:spaker>侯家楷 KPMG</template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>12:00-13:30</template>
            <template v-slot:name>午餐/休息 </template>
          </Agenda-item>

          <Agenda-title>台灣暖實力 Demo Show</Agenda-title>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>13:30-13:50</template>
            <template v-slot:name>開場引言　主持人引言</template>
            <template v-slot:spaker>吳宗昇</template>
          </Agenda-item>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>13:50-14:50</template>
            <template v-slot:name>台灣暖實力　keynote 分享</template>
            <template v-slot:spaker>
              魏如君｜手語翻譯協會<br />
              陳世芃｜雞湯來了<br />
              李如寶｜Foodeast<br />
              郭家佑｜台灣數位外交協會
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>14:50-15:00</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>

          <Agenda-title>循環經濟 Demo Show</Agenda-title>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>15:00-15:20</template>
            <template v-slot:name>開場引言　主持人引言</template>
            <template v-slot:spaker>吳宗昇</template>
          </Agenda-item>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>15:20-16:20</template>
            <template v-slot:name>循環經濟　keynote 分享</template>
            <template v-slot:spaker>
              楊孟泰｜Earth Friend<br />
              葉德偉｜配客嘉<br />
              黃暐程｜奉茶行動
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>16:20-16:30</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>16:30-18:30 </template>
            <template v-slot:name>SROI+社會使命工作坊 </template>
            <template v-slot:spaker>侯家楷</template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>18:30-20:30 </template>
            <template v-slot:name>社會事開講(BOF) </template>
            <template v-slot:spaker>名單會更新，8~10組</template>
          </Agenda-item>
        </div>
      </div>
      <div class="agenda-date-item" id="date-11-28">
        <div class="border-item"></div>
        <div class="agenda-container">
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>10:00-12:00 </template>
            <template v-slot:name>市集活動 </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>12:00-13:30</template>
            <template v-slot:name>午餐/休息 </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>13:30-17:30 </template>
            <template v-slot:name>設計思考工作坊 </template>
            <template v-slot:spaker>5%Design Action</template>
          </Agenda-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
#agenda
	width: var(--container-width)
	max-width: var(--container-max-width)
	margin: 0 auto
	padding-bottom: 120px
	--date-item-height: 100px
	@media (max-width: 768px)
		--date-item-height: 30px
	.header
		font-size: 64px
		text-align: center
		font-weight: bold
		margin: 100px 0
		@media (max-width: 768px)
			font-size: 36px
			margin: 50px 0
	.date-switch
		display: grid
		grid-template-columns: repeat(3, 1fr)
		z-index: 1
		position: absolute
		width: var(--container-width)
		max-width: var(--container-max-width)
		.date-item
			font-size: 48px
			color: #fff
			text-decoration: none
			display: flex
			align-items: center
			justify-content: center
			height: var(--date-item-height)
			@media (max-width: 768px)
				font-size: 14px
				padding: 5px 0
			&:nth-child(1)
				border-radius: 16px 0 0 0
				background-color: #FFC817
			&:nth-child(2)
				background-color: #FF6422
			&:nth-child(3)
				border-radius: 0 16px 0 0
				background-color: #FF9365
	.agenda-date-items
		background-color: #EEEEEE
		border-radius: 16px
		display: flex
		overflow-x: auto
		scroll-snap-type: x mandatory
		scroll-behavior: smooth
		-webkit-overflow-scrolling: touch
		@media (max-width: 768px)
			background-color: #fff
		.agenda-date-item
			scroll-snap-align: start
			flex-shrink: 0
			width: 100%
			--border-color: #FFC817
			&:nth-child(2)
				--border-color: #FF6422
			&:nth-child(3)
				--border-color: #FF9365
			.border-item
				height: calc(var(--date-item-height) + 24px)
				border-radius: 16px 16px 0 0
				background-color: var(--border-color)
				@media (max-width: 768px)
					height: calc(var(--date-item-height) + 12px)
			.agenda-container
				padding: 42px 72px
				@media (max-width: 768px)
					padding: 0
</style>