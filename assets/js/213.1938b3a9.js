(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{496:function(t,e,s){"use strict";s.r(e);var r=s(43),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"querying-documents-properties-with-special-characters-in-cosmos-db"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querying-documents-properties-with-special-characters-in-cosmos-db","aria-hidden":"true"}},[t._v("#")]),t._v(" Querying documents properties with special characters in Cosmos DB")]),t._v(" "),s("p",[t._v("I was working with Cosmos DB yesterday and hit the following snag that I couldn't query my document that had special characters in it. Such is an example:")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/querycosmos1.png")}}),t._v(" "),s("p",[t._v("Notice the "),s("code",[t._v('"$type": "mytype",')]),t._v(" has a "),s("code",[t._v("$")]),t._v(" in it.")]),t._v(" "),s("p",[t._v("If you head over to "),s("strong",[t._v("Query Explorer")]),t._v(" and try to query it using...")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SELECT * \nFROM testing t\nWHERE t.$type = 'mytype'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("... then you'll see the following error:")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/querycosmos2.png")}}),t._v(" "),s("p",[t._v("I was able to fix this by wrapping the property inside "),s("code",[t._v("[]")]),t._v(" such as...")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SELECT * \nFROM testing t\nWHERE t[\"$type\"] = 'mytype'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Now my query returned properly")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/querycosmos3.png")}})])},[],!1,null,null,null);e.default=a.exports}}]);