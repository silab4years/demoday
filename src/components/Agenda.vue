<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AgendaItem from './Agenda/AgendaItem.vue'
import AgendaTitle from './Agenda/AgendaTitle.vue'
</script>

<template>
  <section id="agenda">
    <div class="header">活動議程</div>
    <div class="dot-example">
      <div class="dot-item online">
        <div class="dot"></div>
        線上活動
      </div>
      <div class="dot-item live">
        <div class="dot"></div>
        現場活動
      </div>
      <div class="dot-item combine">
        <div class="dot"></div>
        虛實整合
      </div>
    </div>
    <div class="date-switch">
      <a class="date-item" @click="showItem = 1">11.26</a>
      <a class="date-item" @click="showItem = 2">11.27</a>
      <a class="date-item" @click="showItem = 3">11.28</a>
    </div>
    <div class="border-item" :style="{ '--border-color': ['#000', '#ffc817', '#ff6422', '#ff9365'][showItem] }"></div>
    <transition name="fade" mode="out-in">
      <div class="agenda-date-item" id="date-11-26" v-if="showItem == 1">
        <div class="agenda-container">
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>10:00-11:00 </template>
            <template v-slot:name>開幕式 </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>11:00-12:00</template>
            <template v-slot:name>疫情下的 SDGs 衝擊與轉變 </template>
            <template v-slot:spaker>
              陳文良｜台灣數位文化協會 秘書長<br />
              吳道揆｜台灣影響力投資協會 秘書長
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>12:00-13:30</template>
            <template v-slot:name>午餐/休息 </template>
          </Agenda-item>

          <Agenda-title>未來想像 Demo Show</Agenda-title>
          <Agenda-item background-color="#4CE7FF" event-type="online" min-height="200px">
            <template v-slot:time>13:30-14:50</template>
            <template v-slot:name>
              主持人引言 / 分享座談 / 綜合座談<br />
              主持暨與談人 林紹偉Social AED
            </template>
            <template v-slot:spaker>
              胡耀傑｜圖靈鏈創辦人<br />
              李振北｜永訊科技<br />
              沈怡如｜公益自律聯盟
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>14:50-15:00</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>

          <Agenda-title>地方創生 Demo Show</Agenda-title>
          <Agenda-item background-color="#4CE7FF" event-type="online" min-height="200px">
            <template v-slot:time>15:00-16:20</template>
            <template v-slot:name
              >主持人引言 / 分享座談 / 綜合座談<br />

              主持暨與談人 林紹偉Social AED</template
            >
            <template v-slot:spaker>
              邱明憲｜旅庫彰化<br />
              王禛壹｜粨種人<br />
              陳添順｜或者文史書房
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>16:20-16:30</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live">
            <template v-slot:time>16:30-17:30</template>
            <template v-slot:name> 講座：跨界社創影響力 </template>
            <template v-slot:spaker>
              吳孟寰｜霞海城隍廟文宣長<br />
              陳冠百｜StoryWear創辦人<br />
              曾昭人｜微電能源集團事業部協理<br />
              鄧如山｜友聚生機實業股份有限公司總經理
            </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="80px">
            <template v-slot:time>18:30-20:30</template>
            <template v-slot:name>社會事開講(BOF) </template>
            <template v-slot:spaker>敬請期待！8組社創團隊協力開講</template>
          </Agenda-item>
        </div>
      </div>
      <div class="agenda-date-item" id="date-11-27" v-else-if="showItem == 2">
        <div class="agenda-container">
          <Agenda-item background-color="#4CE7FF">
            <template v-slot:time>11:00-12:00</template>
            <template v-slot:name>
              Across APAC<br />
              Social Innovators
            </template>
            <template v-slot:spaker>
              黃正忠｜KPMG董事總經理<br />
              Liter of Light Global Foundation<br />
              InnoCSR
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>12:00-13:30</template>
            <template v-slot:name>午餐/休息 </template>
          </Agenda-item>

          <Agenda-title>台灣暖實力 Demo Show</Agenda-title>
          <Agenda-item background-color="#4CE7FF" event-type="online" min-height="200px">
            <template v-slot:time>13:40-14:50</template>
            <template v-slot:name>
              主持人引言 / 分享座談 / 綜合座談<br />
              主持暨與談人 林藝｜寶島淨鄉團發起人
            </template>
            <template v-slot:spaker>
              魏如君｜手語翻譯協會<br />
              陳世芃｜雞湯來了<br />
              李如寶｜Foodeast
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>14:50-15:00</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>

          <Agenda-title>循環經濟 Demo Show</Agenda-title>
          <Agenda-item background-color="#FFC817" event-type="online" min-height="150px">
            <template v-slot:time>15:00-15:10</template>
            <template v-slot:name
              >主持人引言 / 分享座談 / 綜合座談<br />
              林藝｜寶島淨鄉團發起人</template
            >
            <template v-slot:spaker>
              楊孟泰｜Earth Friend<br />
              莊雅竹｜配客嘉<br />
              黃暐程｜奉茶行動
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>16:20-16:30</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>16:30-17:30 </template>
            <template v-slot:name>有責有力量 － 企業行動 </template>
            <template v-slot:spaker>
              唐鳳｜行政院政務委員<br />
              蔡凱文｜PChome總經理<br />
              麥升陽｜新東陽總經理
            </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>18:30-20:30</template>
            <template v-slot:name>社會事開講(BOF) </template>
            <template v-slot:spaker>敬請期待！8組社創團隊協力開講</template>
          </Agenda-item>
        </div>
      </div>
      <div class="agenda-date-item" id="date-11-28" v-else-if="showItem == 3">
        <div class="agenda-container">
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>10:00-12:00 </template>
            <template v-slot:name>市集活動 </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6" intermission>
            <template v-slot:time>12:00-13:30</template>
            <template v-slot:name>午餐/休息 </template>
          </Agenda-item>
          <Agenda-item background-color="#A6A0FF" event-type="live" min-height="300px">
            <template v-slot:time>13:30-17:30 </template>
            <template v-slot:name>
              社會設計工作坊 <br /><br />
              蒐羅社會事，跨域集結「社會力」，<br />
              一起「群眾智造」，打造社創新解方原型
              <br /><br />5%Design Action
            </template>
          </Agenda-item>
        </div>
      </div>
    </transition>
    <div class="cover">
      <img src="../assets/agenda/cover.png" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showItem: 1
    }
  }
}
</script>

<style lang="sass">
#agenda
  width: var(--container-width)
  max-width: var(--container-max-width)
  margin: 0 auto
  padding-bottom: 120px
  position: relative
  --date-item-height: 100px
  @media (max-width: 768px)
    --date-item-height: 30px
  .header
    font-size: 64px
    text-align: center
    font-weight: bold
    padding: 100px 0
    @media (max-width: 768px)
      font-size: 36px
      padding: 50px 0
  .dot-example
    margin: 24px 0
    display: flex
    justify-content: flex-end
    gap: 24px
    @media (max-width: 768px)
      display: none
    .dot-item
      display: flex
      align-items: center
      font-size: 36px
      --dot-color: #000
      &.online
        --dot-color: #4CE7FF
      &.live
        --dot-color: #FF2E00
      &.combine
        --dot-color: #A6A0FF
      .dot
        width: 24px
        height: 23px
        border-radius: 50%
        margin-right: 8px
        background-color: var(--dot-color)
  .date-switch
    display: grid
    grid-template-columns: repeat(3, 1fr)
    z-index: 1
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
      border-radius: 8px 8px 0 0
      cursor: pointer
      @media (max-width: 768px)
        font-size: 14px
        padding: 5px 0
      &:nth-child(1)
        background-color: #FFC817
        @media (min-width: 769px)
          border-radius: 16px 0 0 0
      &:nth-child(2)
        background-color: #FF6422
        @media (min-width: 769px)
          border-radius: 0
      &:nth-child(3)
        background-color: #FF9365
        @media (min-width: 769px)
          border-radius: 0 16px 0 0
      &:hover
        color: rgba(255, 255, 255, 0.8)

  .border-item
    height: 24px
    border-radius: 0 0 16px 16px
    background-color: var(--border-color)
    transition: all 0.3s ease-in-out
    @media (max-width: 768px)
      height: 12px
      border-radius: 0 0 8px 8px
  .agenda-date-item
    scroll-snap-align: start
    flex-shrink: 0
    width: 100%
    --border-color: #000
    padding-bottom: 300px
    @media (max-width: 768px)
      padding-bottom: 100px
    .agenda-container
      background-color: #EEEEEE
      border-radius: 16px
      margin-top: 24px
      padding: 42px 72px
      @media (max-width: 768px)
        background-color: #fff
        padding: 0
  .cover
    position: absolute
    bottom: -2px
    right: 0
    left: 0
    margin: auto
    width: 100%
    text-align: center
    img
      width: 800px
      @media (max-width: 768px)
        width: 350px
</style>