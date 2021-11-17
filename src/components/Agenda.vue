<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AgendaItem from './Agenda/AgendaItem.vue'
import AgendaTitle from './Agenda/AgendaTitle.vue'
import AgendaActionButton from './Agenda/AgendaActionButton.vue'
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
      <a class="date-item" :class="{ active: showItem == 1 }" @click="showItem = 1"><span>11.26</span></a>
      <a class="date-item" :class="{ active: showItem == 2 }" @click="showItem = 2"><span>11.27</span></a>
      <a class="date-item" :class="{ active: showItem == 3 }" @click="showItem = 3"><span>11.28</span></a>
    </div>
    <div class="border-item" :style="{ '--border-color': ['#000', '#ffc817', '#ff6422', '#ff9365'][showItem] }"></div>
    <transition name="fade" mode="out-in">
      <div class="agenda-date-item" id="date-11-26" v-if="showItem == 1">
        <div class="agenda-container">
          <Agenda-item background-color="#E6E6E6">
            <template v-slot:time>10:00-11:00 </template>
            <template v-slot:name>開幕式 </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px" with-action>
            <template v-slot:time>11:00-12:00</template>
            <template v-slot:name>主題座談：疫情下的社會創新趨勢</template>
            <template v-slot:spaker>
              陳文良｜台灣數位文化協會 秘書長<br />
              吳道揆｜台灣影響力投資協會共同創辦人暨執行長
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E4%B8%BB%E9%A1%8C%E5%BA%A7%E8%AB%87%EF%BC%9A%E7%96%AB%E6%83%85%E4%B8%8B%E7%9A%84%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E8%B6%A8%E5%8B%A2&details=%E9%99%B3%E6%96%87%E8%89%AF%EF%BD%9C%E5%8F%B0%E7%81%A3%E6%95%B8%E4%BD%8D%E6%96%87%E5%8C%96%E5%8D%94%E6%9C%83%20%E7%A7%98%E6%9B%B8%E9%95%B7%0A%E5%90%B3%E9%81%93%E6%8F%86%EF%BD%9C%E5%8F%B0%E7%81%A3%E5%BD%B1%E9%9F%BF%E5%8A%9B%E6%8A%95%E8%B3%87%E5%8D%94%E6%9C%83%E5%85%B1%E5%90%8C%E5%89%B5%E8%BE%A6%E4%BA%BA%E6%9A%A8%E5%9F%B7%E8%A1%8C%E9%95%B7&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211126T030000.000Z%2F20211126T040000.000Z"
              />
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6">
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
              胡耀傑｜圖靈鏈Turing Chain<br />
              李振北｜永訊智庫股份有限公司<br />
              沈怡如｜台灣公益團體自律聯盟
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E6%9C%AA%E4%BE%86%E6%83%B3%E5%83%8F%20%20Demo%20Show&details=%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%BC%95%E8%A8%80%20/%20%E5%88%86%E4%BA%AB%E5%BA%A7%E8%AB%87%20/%20%E7%B6%9C%E5%90%88%E5%BA%A7%E8%AB%87%0A%E4%B8%BB%E6%8C%81%E6%9A%A8%E8%88%87%E8%AB%87%E4%BA%BA%EF%BC%9A%E6%9E%97%E7%B4%B9%E5%81%89Social%20AED%0A%0A%E8%88%87%E8%AB%87%E4%BA%BA%EF%BC%9A%0A%E8%83%A1%E8%80%80%E5%82%91%EF%BD%9C%E5%9C%96%E9%9D%88%E9%8F%88Turing%20Chain%0A%E6%9D%8E%E6%8C%AF%E5%8C%97%EF%BD%9C%E6%B0%B8%E8%A8%8A%E6%99%BA%E5%BA%AB%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%0A%E6%B2%88%E6%80%A1%E5%A6%82%EF%BD%9C%E5%8F%B0%E7%81%A3%E5%85%AC%E7%9B%8A%E5%9C%98%E9%AB%94%E8%87%AA%E5%BE%8B%E8%81%AF%E7%9B%9F&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211126T053000.000Z%2F20211126T065000.000Z"
              />
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6">
            <template v-slot:time>14:50-15:00</template>
            <template v-slot:name>中場休息 </template>
          </Agenda-item>

          <Agenda-title>地方創生 Demo Show</Agenda-title>
          <Agenda-item background-color="#4CE7FF" event-type="online" min-height="200px">
            <template v-slot:time>15:00-16:20</template>
            <template v-slot:name>
              主持人引言 / 分享座談 / 綜合座談<br />
              主持暨與談人 林紹偉Social AED
            </template>
            <template v-slot:spaker>
              邱明憲｜旅庫。彰化<br />
              范佳雯｜粨種人食品股份有限公司<br />
              陳添順｜或者文史書房
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E5%9C%B0%E6%96%B9%E5%89%B5%E7%94%9F%20%20Demo%20Show&details=%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%BC%95%E8%A8%80%20/%20%E5%88%86%E4%BA%AB%E5%BA%A7%E8%AB%87%20/%20%E7%B6%9C%E5%90%88%E5%BA%A7%E8%AB%87%0A%E4%B8%BB%E6%8C%81%E6%9A%A8%E8%88%87%E8%AB%87%E4%BA%BA%EF%BC%9A%E6%9E%97%E7%B4%B9%E5%81%89Social%20AED%0A%0A%E8%88%87%E8%AB%87%E4%BA%BA%EF%BC%9A%0A%E9%82%B1%E6%98%8E%E6%86%B2%EF%BD%9C%E6%97%85%E5%BA%AB%E3%80%82%E5%BD%B0%E5%8C%96%0A%E8%8C%83%E4%BD%B3%E9%9B%AF%EF%BD%9C%E7%B2%A8%E7%A8%AE%E4%BA%BA%E9%A3%9F%E5%93%81%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%0A%E9%99%B3%E6%B7%BB%E9%A0%86%EF%BD%9C%E6%88%96%E8%80%85%E6%96%87%E5%8F%B2%E6%9B%B8%E6%88%BF&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211126T070000.000Z%2F20211126T082000.000Z"
              />
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6">
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
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E8%AC%9B%E5%BA%A7%EF%BC%9A%E8%B7%A8%E7%95%8C%E7%A4%BE%E5%89%B5%E5%BD%B1%E9%9F%BF%E5%8A%9B&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211126T083000.000Z%2F20211126T093000.000Z"
              />
            </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="80px">
            <template v-slot:time>18:30-20:30</template>
            <template v-slot:name>社會事開講(BOF) </template>
            <template v-slot:spaker>
              林奕安｜好+計畫<br />
              宋建學｜悄悄話股份有限公司<br />
              EMMA｜對味料理實驗室<br />
              黃美甄｜愛孩子股份有限公司<br />
              江幸蓉｜新故事運動有限公司<br />
              林韋銘｜巧木樹藝有限公司<br />
              鍾和耘｜綠色浪潮<br />
              Annie｜咖啡有的社會設計有限公司<br />
              陳威丞｜太陽人全民電廠/宏威環球事業股份有限公司<br />
              李芷芸｜社團法人臺灣領導未來協會 Lead For Taiwan
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E7%A4%BE%E6%9C%83%E4%BA%8B%E9%96%8B%E8%AC%9B(BOF)&details=%E6%9E%97%E5%A5%95%E5%AE%89%EF%BD%9C%E5%A5%BD+%E8%A8%88%E7%95%AB%0A%E5%AE%8B%E5%BB%BA%E5%AD%B8%EF%BD%9C%E6%82%84%E6%82%84%E8%A9%B1%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%0AEMMA%EF%BD%9C%E5%B0%8D%E5%91%B3%E6%96%99%E7%90%86%E5%AF%A6%E9%A9%97%E5%AE%A4%0A%E9%BB%83%E7%BE%8E%E7%94%84%EF%BD%9C%E6%84%9B%E5%AD%A9%E5%AD%90%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%0A%E6%B1%9F%E5%B9%B8%E8%93%89%EF%BD%9C%E6%96%B0%E6%95%85%E4%BA%8B%E9%81%8B%E5%8B%95%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%0A%E6%9E%97%E9%9F%8B%E9%8A%98%EF%BD%9C%E5%B7%A7%E6%9C%A8%E6%A8%B9%E8%97%9D%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%0A%E9%8D%BE%E5%92%8C%E8%80%98%EF%BD%9C%E7%B6%A0%E8%89%B2%E6%B5%AA%E6%BD%AE%0AAnnie%EF%BD%9C%E5%92%96%E5%95%A1%E6%9C%89%E7%9A%84%E7%A4%BE%E6%9C%83%E8%A8%AD%E8%A8%88%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%0A%E9%99%B3%E5%A8%81%E4%B8%9E%EF%BD%9C%E5%A4%AA%E9%99%BD%E4%BA%BA%E5%85%A8%E6%B0%91%E9%9B%BB%E5%BB%A0/%E5%AE%8F%E5%A8%81%E7%92%B0%E7%90%83%E4%BA%8B%E6%A5%AD%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%0A%E6%9D%8E%E8%8A%B7%E8%8A%B8%EF%BD%9C%E7%A4%BE%E5%9C%98%E6%B3%95%E4%BA%BA%E8%87%BA%E7%81%A3%E9%A0%98%E5%B0%8E%E6%9C%AA%E4%BE%86%E5%8D%94%E6%9C%83%20Lead%20For%20Taiwan&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211126T103000.000Z%2F20211126T123000.000Z"
              />
            </template>
          </Agenda-item>
        </div>
      </div>
      <div class="agenda-date-item" id="date-11-27" v-else-if="showItem == 2">
        <div class="agenda-container">
          <Agenda-item background-color="#4CE7FF">
            <template v-slot:time>11:00-12:00</template>
            <template v-slot:name>講座：Across APAC- Social Innovators</template>
            <template v-slot:spaker>
              黃正忠｜KPMG安侯永續發展顧問股份有限公司董事總經理<br />
              Liter of Light Global Foundation<br />
              InnoCSR
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E8%AC%9B%E5%BA%A7%EF%BC%9AAcross%20APAC-%20Social%20Innovators&details=%E4%B8%BB%E6%8C%81%E4%BA%BA%EF%BC%9A%0A%E9%BB%83%E6%AD%A3%E5%BF%A0%EF%BD%9CKPMG%E5%AE%89%E4%BE%AF%E6%B0%B8%E7%BA%8C%E7%99%BC%E5%B1%95%E9%A1%A7%E5%95%8F%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E8%91%A3%E4%BA%8B%E7%B8%BD%E7%B6%93%E7%90%86%0A%0A%E5%87%BA%E5%B8%AD%E8%B2%B4%E8%B3%93%EF%BC%9A%0ALiter%20of%20Light%20Global%20Foundation%0AInnoCSR&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211127T030000.000Z%2F20211127T040000.000Z"
              />
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6">
            <template v-slot:time>12:00-13:30</template>
            <template v-slot:name>午餐/休息</template>
          </Agenda-item>

          <Agenda-title>台灣暖實力 Demo Show</Agenda-title>
          <Agenda-item background-color="#4CE7FF" event-type="online" min-height="200px">
            <template v-slot:time>13:30-14:50</template>
            <template v-slot:name>
              主持人引言 / 分享座談 / 綜合座談<br />
              主持暨與談人 林藝｜寶島淨鄉團發起人
            </template>
            <template v-slot:spaker>
              魏如君｜社團法人台灣手語翻譯協會<br />
              陳世芃｜雞湯來了<br />
              李如寶｜Foodeast 越食煮憶
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E5%8F%B0%E7%81%A3%E6%9A%96%E5%AF%A6%E5%8A%9B%20%20Demo%20Show&details=%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%BC%95%E8%A8%80%20/%20%E5%88%86%E4%BA%AB%E5%BA%A7%E8%AB%87%20/%20%E7%B6%9C%E5%90%88%E5%BA%A7%E8%AB%87%0A%E4%B8%BB%E6%8C%81%E6%9A%A8%E8%88%87%E8%AB%87%E4%BA%BA%20%E6%9E%97%E8%97%9D%EF%BD%9C%E5%AF%B6%E5%B3%B6%E6%B7%A8%E9%84%89%E5%9C%98%E7%99%BC%E8%B5%B7%E4%BA%BA%0A%0A%E8%88%87%E8%AB%87%E4%BA%BA%EF%BC%9A%0A%E9%AD%8F%E5%A6%82%E5%90%9B%EF%BD%9C%E7%A4%BE%E5%9C%98%E6%B3%95%E4%BA%BA%E5%8F%B0%E7%81%A3%E6%89%8B%E8%AA%9E%E7%BF%BB%E8%AD%AF%E5%8D%94%E6%9C%83%0A%E9%99%B3%E4%B8%96%E8%8A%83%EF%BD%9C%E9%9B%9E%E6%B9%AF%E4%BE%86%E4%BA%86%0A%E6%9D%8E%E5%A6%82%E5%AF%B6%20%EF%BD%9CFoodeast%20%E8%B6%8A%E9%A3%9F%E7%85%AE%E6%86%B6%0A&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211127T053000.000Z%2F20211127T065000.000Z"
              />
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6">
            <template v-slot:time>14:50-15:00</template>
            <template v-slot:name>中場休息</template>
          </Agenda-item>

          <Agenda-title>循環經濟 Demo Show</Agenda-title>
          <Agenda-item background-color="#4CE7FF" event-type="online" min-height="150px">
            <template v-slot:time>15:00-16:20</template>
            <template v-slot:name>
              主持人引言 / 分享座談 / 綜合座談<br />
              林藝｜寶島淨鄉團發起人
            </template>
            <template v-slot:spaker>
              楊孟泰｜Earth Friend<br />
              莊雅竹｜PackAge+配客嘉<br />
              黃暐程｜奉茶行動 CircuPlus
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E5%BE%AA%E7%92%B0%E7%B6%93%E6%BF%9F%20%20%20Demo%20Show&details=%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%BC%95%E8%A8%80%20/%20%E5%88%86%E4%BA%AB%E5%BA%A7%E8%AB%87%20/%20%E7%B6%9C%E5%90%88%E5%BA%A7%E8%AB%87%0A%E4%B8%BB%E6%8C%81%E6%9A%A8%E8%88%87%E8%AB%87%E4%BA%BA%20%E6%9E%97%E8%97%9D%EF%BD%9C%E5%AF%B6%E5%B3%B6%E6%B7%A8%E9%84%89%E5%9C%98%E7%99%BC%E8%B5%B7%E4%BA%BA%0A%0A%E8%88%87%E8%AB%87%E4%BA%BA%EF%BC%9A%0A%E6%A5%8A%E5%AD%9F%E6%B3%B0%EF%BD%9CEarth%20Friend%0A%E8%8E%8A%E9%9B%85%E7%AB%B9%EF%BD%9CPackAge+%E9%85%8D%E5%AE%A2%E5%98%89%0A%E9%BB%83%E6%9A%90%E7%A8%8B%EF%BD%9C%E5%A5%89%E8%8C%B6%E8%A1%8C%E5%8B%95%20CircuPlus&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211127T070000.000Z%2F20211127T082000.000Z"
              />
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6">
            <template v-slot:time>16:20-16:30</template>
            <template v-slot:name>中場休息</template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>16:30-17:30</template>
            <template v-slot:name>講座：有責有力量 － 企業行動</template>
            <template v-slot:spaker>
              唐鳳｜行政院政務委員<br />
              蔡凱文｜PChome網路家庭執行長暨總經理<br />
              麥升陽｜新東陽股份有限公司總經理
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E8%AC%9B%E5%BA%A7%EF%BC%9A%E6%9C%89%E8%B2%AC%E6%9C%89%E5%8A%9B%E9%87%8F%20%EF%BC%8D%20%E4%BC%81%E6%A5%AD%E8%A1%8C%E5%8B%95&details=%E4%B8%BB%E6%8C%81%E4%BA%BA%EF%BC%9A%0A%E5%94%90%E9%B3%B3%EF%BD%9C%E8%A1%8C%E6%94%BF%E9%99%A2%E6%94%BF%E5%8B%99%E5%A7%94%E5%93%A1%0A%0A%E8%88%87%E8%AB%87%E4%BA%BA%EF%BC%9A%0A%E8%94%A1%E5%87%B1%E6%96%87%EF%BD%9CPChome%E7%B6%B2%E8%B7%AF%E5%AE%B6%E5%BA%AD%E5%9F%B7%E8%A1%8C%E9%95%B7%E6%9A%A8%E7%B8%BD%E7%B6%93%E7%90%86%0A%E9%BA%A5%E5%8D%87%E9%99%BD%EF%BD%9C%E6%96%B0%E6%9D%B1%E9%99%BD%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%B8%BD%E7%B6%93%E7%90%86&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211127T083000.000Z%2F20211127T093000.000Z"
              />
            </template>
          </Agenda-item>
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>18:30-20:30</template>
            <template v-slot:name>社會事開講(BOF)</template>
            <template v-slot:spaker>
              吳亭臻｜行動山棧花 <br />
              吳亭臻｜資訊旅程/嶼浪記著<br />
              林育綺｜Open House Taipei<br />
              胡廷岳｜胡廷岳 Nono<br />
              陶韻安│說說心理話<br />
              陳融│Kong English<br />
              顏彰廷│ZERO BOTTLE-愛地球從浴室開始
            </template>
            <template v-slot:action>
              <AgendaActionButton
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%E7%A4%BE%E6%9C%83%E4%BA%8B%E9%96%8B%E8%AC%9B(BOF)&details=%E5%90%B3%E4%BA%AD%E8%87%BB%EF%BD%9C%E8%A1%8C%E5%8B%95%E5%B1%B1%E6%A3%A7%E8%8A%B1%20%0A%E5%90%B3%E4%BA%AD%E8%87%BB%EF%BD%9C%E8%B3%87%E8%A8%8A%E6%97%85%E7%A8%8B/%E5%B6%BC%E6%B5%AA%E8%A8%98%E8%91%97%0A%E6%9E%97%E8%82%B2%E7%B6%BA%EF%BD%9COpen%20House%20Taipei%0A%E8%83%A1%E5%BB%B7%E5%B2%B3%EF%BD%9C%E8%83%A1%E5%BB%B7%E5%B2%B3%20Nono%0A%E9%99%B6%E9%9F%BB%E5%AE%89%E2%94%82%E8%AA%AA%E8%AA%AA%E5%BF%83%E7%90%86%E8%A9%B1%0A%E9%99%B3%E8%9E%8D%E2%94%82Kong%20English%0A%E9%A1%8F%E5%BD%B0%E5%BB%B7%E2%94%82ZERO%20BOTTLE-%E6%84%9B%E5%9C%B0%E7%90%83%E5%BE%9E%E6%B5%B4%E5%AE%A4%E9%96%8B%E5%A7%8B&location=%E7%A4%BE%E6%9C%83%E5%89%B5%E6%96%B0%E5%AF%A6%E9%A9%97%E4%B8%AD%E5%BF%83&dates=20211127T103000.000Z%2F20211127T123000.000Z"
              />
            </template>
          </Agenda-item>
        </div>
      </div>
      <div class="agenda-date-item" id="date-11-28" v-else-if="showItem == 3">
        <div class="agenda-container">
          <Agenda-item background-color="#4CE7FF" event-type="live" min-height="150px">
            <template v-slot:time>10:00-12:00</template>
            <template v-slot:name>市集活動</template>
            <template v-slot:action>
              <AgendaActionButton href="https://bit.ly/silab4years"> Gather<br />傳送門 </AgendaActionButton>
            </template>
          </Agenda-item>
          <Agenda-item background-color="#E6E6E6">
            <template v-slot:time>12:00-13:30</template>
            <template v-slot:name>午餐/休息</template>
          </Agenda-item>
          <Agenda-item background-color="#A6A0FF" event-type="live" class="action-end">
            <template v-slot:time>13:30-17:30</template>
            <template v-slot:name>
              未來社會設計工作坊 <br /><br />
              蒐羅社會事，跨域集結「社會力」，<br />
              一起「群眾智造」，打造社創新解方原型
              <br /><br />5%Design Action
            </template>
            <template v-slot:action>
              <AgendaActionButton href="https://www.accupass.com/event/2111071136331041767527">
                我要<br />
                報名
              </AgendaActionButton>
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
      transition: all 0.3s ease
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
      &>span
        transition: all 0.3s ease
        position: relative
        &::before
          content: ""
          position: absolute
          //underline
          width: 100%
          height: 2.5px
          background-color: #fff
          bottom: -2px
          opacity: 0
          transition: all 0.3s ease
          transform: translateY(10px) scaleY(0.5)
      &:not(.active):hover
        box-shadow: inset 0 0 0 200px rgba(0, 0, 0, 0.05)
        span
          &::before
            opacity: 1
            transform: translateY(0)

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
    pointer-events: none
    img
      width: 800px
      @media (max-width: 768px)
        width: 350px
</style>