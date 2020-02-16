(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{502:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("💡 Learn more : "),e("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cognitive Services"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"sentiment-analysis-with-cognitive-service-and-azure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sentiment-analysis-with-cognitive-service-and-azure","aria-hidden":"true"}},[t._v("#")]),t._v(" Sentiment Analysis with Cognitive Service and Azure")]),t._v(" "),e("p",[t._v("After reviewing the "),e("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/text-analytics/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Text Analysis API"),e("OutboundLink")],1),t._v(", I noticed three capabilities that I wanted to take a further look at:")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./tip72.html"}},[t._v("This post - Sentiment Analysis")]),t._v(" - Find out what customers think of your brand or topic by analyzing raw text for clues about positive or negative sentiment.")],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./tip70.html"}},[t._v("Key Phrase Detection")]),t._v(" - Automatically extract key phrases to quickly identify the main points.")],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./tip71.html"}},[t._v("Language Detection")]),t._v(" - For up to 120 languages, detect which language the input text is written in and report a single language code for every document submitted on the request.")],1)]),t._v(" "),e("p",[t._v("In this post, we'll look at sentiment analysis which is part of Cognitive Services and is now inside the Azure portal.")]),t._v(" "),e("p",[t._v("If you open the Azure portal and look for "),e("strong",[t._v("AI and Cognitive Services")]),t._v(" then you'll see the "),e("strong",[t._v("Text Analysis API")]),t._v(" that we worked with the past couple of days and we'll continue using it today. Open the blade and fill out the following info if you didn't do this yesterday. Be sure to select the "),e("strong",[t._v("Free")]),t._v(" tier (F0) as shown below:")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/files/aicog2.png")}}),t._v(" "),e("p",[t._v("Select "),e("strong",[t._v("Keys")]),t._v(" and copy the value of KEY 1 if you don't already have this.")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/files/aicog3.png")}}),t._v(" "),e("h4",{attrs:{id:"working-with-sentiment-analysis-and-postman"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#working-with-sentiment-analysis-and-postman","aria-hidden":"true"}},[t._v("#")]),t._v(" Working with Sentiment Analysis and Postman")]),t._v(" "),e("p",[t._v("We need an endpoint to begin calling the API, if you look at the "),e("strong",[t._v("Overview")]),t._v(" option inside your cognitive service, then you'll see the following:")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/files/aicog6.png")}}),t._v(" "),e("p",[t._v("While that is the endpoint, it is missing the feature of the Text Analysis that you might want to call. A complete list is below:")]),t._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sentiment\nkeyPhrases\nlanguages\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("We want to use the "),e("strong",[t._v("sentiment")]),t._v(" endpoint for this tutorial.")]),t._v(" "),e("p",[e("strong",[t._v("What is sentiment analysis?")]),t._v(" Find out what customers think of your brand or topic by analyzing raw text for clues about positive or negative sentiment. This API returns a sentiment score between 0 and 1 for each document, where 1 is the most positive.")]),t._v(" "),e("p",[t._v("Copy the "),e("code",[t._v("https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment")]),t._v(" url into Postman and set the following three header properties:")]),t._v(" "),e("ul",[e("li",[t._v("Ocp-Apim-Subscription-Key = should be your Key 1 (from our discussion earlier).")]),t._v(" "),e("li",[t._v("Content-Type = Set it to "),e("code",[t._v("application/json")]),t._v(".")]),t._v(" "),e("li",[t._v("Accept = Set it to "),e("code",[t._v("application/json")]),t._v(".")])]),t._v(" "),e("p",[t._v("Your screen should look like the following:")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/files/aicog9.png")}}),t._v(" "),e("p",[t._v("Now switch over to "),e("strong",[t._v("Body")]),t._v(", then "),e("strong",[t._v("Raw")]),t._v(" and post the following JSON:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"documents"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"How to become master writing C# code - http://mcrump.me/2oLeg5i  #dotnet #csharp"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#Azure Tips and Tricks Part 71 - Language Detection with Cognitive Service and Azure."')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Deploy http://ASP.NET  Core apps to #Azure - Day 16 - 24 days of Front-end Development with http://ASP.NET  Core, #Angular, and Bootstrap - http://mcrump.me/2Be9vqY  #aspnet #webdev #javascript #webdev #dotnet"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br")])]),e("p",[t._v("This is a couple of recent tweets from my timeline.")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/files/aicog10.png")}}),t._v(" "),e("p",[t._v("Now press "),e("strong",[t._v("Send")]),t._v(" and it will return the sentiment of the text.")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"documents"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"score"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.81279480457305908")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"score"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"score"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("p",[t._v("Notice this API returns a sentiment score between 0 and 1 for each document, where 1 is the most positive. Keep in mind that I used some technology tweets for this tutorial, but think of using this API for customer tweets such as "),e("code",[t._v("I *LOVE* this hotel")]),t._v(" or "),e("code",[t._v("I am not impressed with this hotel")]),t._v(". There are many use cases for this. Here is an example of a fictitious airlines that has a strong dislike and like.")])])},[],!1,null,null,null);s.default=n.exports}}]);