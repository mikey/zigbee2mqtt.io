"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3849],{760385:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-44781381","path":"/devices/DY-RQ500A.html","title":"DYGSM DY-RQ500A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"DYGSM DY-RQ500A control via MQTT","description":"Integrate your DYGSM DY-RQ500A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-01T18:54:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Gas (binary)","slug":"gas-binary","link":"#gas-binary","children":[]},{"level":3,"title":"Gas value (numeric)","slug":"gas-value-numeric","link":"#gas-value-numeric","children":[]},{"level":3,"title":"Self test (binary)","slug":"self-test-binary","link":"#self-test-binary","children":[]},{"level":3,"title":"Self test result (enum)","slug":"self-test-result-enum","link":"#self-test-result-enum","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Alarm ringtone (enum)","slug":"alarm-ringtone-enum","link":"#alarm-ringtone-enum","children":[]},{"level":3,"title":"Alarm time (numeric)","slug":"alarm-time-numeric","link":"#alarm-time-numeric","children":[]},{"level":3,"title":"Preheat (binary)","slug":"preheat-binary","link":"#preheat-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1704827775000},"filePathRelative":"devices/DY-RQ500A.md"}')},865362:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var i=a(166252);const l=(0,i._)("h1",{id:"dygsm-dy-rq500a",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#dygsm-dy-rq500a","aria-hidden":"true"},"#"),(0,i.Uk)(" DYGSM DY-RQ500A")],-1),o=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"DY-RQ500A")],-1),d=(0,i._)("td",null,"Vendor",-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Gas sensor")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"gas, gas_value, self_test, self_test_result, silence, alarm_ringtone, alarm_time, preheat, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DY-RQ500A.jpg",alt:"DYGSM DY-RQ500A"})])],-1),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="gas-binary" tabindex="-1"><a class="header-anchor" href="#gas-binary" aria-hidden="true">#</a> Gas (binary)</h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id="gas-value-numeric" tabindex="-1"><a class="header-anchor" href="#gas-value-numeric" aria-hidden="true">#</a> Gas value (numeric)</h3><p>Measured gas concentration. Value can be found in the published state on the <code>gas_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>LEL</code>.</p><h3 id="self-test-binary" tabindex="-1"><a class="header-anchor" href="#self-test-binary" aria-hidden="true">#</a> Self test (binary)</h3><p>Indicates whether the device is being self-tested. Value can be found in the published state on the <code>self_test</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_test&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self test is ON, if <code>false</code> OFF.</p><h3 id="self-test-result-enum" tabindex="-1"><a class="header-anchor" href="#self-test-result-enum" aria-hidden="true">#</a> Self test result (enum)</h3><p>Result of the self-test. Value can be found in the published state on the <code>self_test_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>success</code>, <code>failure</code>, <code>others</code>.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary" aria-hidden="true">#</a> Silence (binary)</h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="alarm-ringtone-enum" tabindex="-1"><a class="header-anchor" href="#alarm-ringtone-enum" aria-hidden="true">#</a> Alarm ringtone (enum)</h3><p>Ringtone of the alarm. Value can be found in the published state on the <code>alarm_ringtone</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_ringtone&quot;: NEW_VALUE}</code>. The possible values are: <code>melody_1</code>, <code>melody_2</code>, <code>melody_3</code>, <code>melody_4</code>, <code>melody_5</code>.</p><h3 id="alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-time-numeric" aria-hidden="true">#</a> Alarm time (numeric)</h3><p>Alarm time. Value can be found in the published state on the <code>alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>180</code>. The unit of this value is <code>s</code>.</p><h3 id="preheat-binary" tabindex="-1"><a class="header-anchor" href="#preheat-binary" aria-hidden="true">#</a> Preheat (binary)</h3><p>Indicates sensor preheat is active. Value can be found in the published state on the <code>preheat</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> preheat is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),h={},p=(0,a(983744).Z)(h,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),l,(0,i._)("table",null,[o,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(a,{to:"/supported-devices/#v=DYGSM"},{default:(0,i.w5)((()=>[(0,i.Uk)("DYGSM")])),_:1})])]),n,r,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);