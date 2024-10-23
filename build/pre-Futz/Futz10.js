/* ROOM */

const botVersion = "𝙵𝚄𝚃𝚉 𝚟11";
const roomName = `3✘ | ${botVersion} | 🏆C̶o̶l̶a̶ ̶n̶a̶ ̶h̶u̶m̶i̶l̶d̶a̶d̶e̶  `;
/* NOMES SUGERIDOS:
1: 🏆 3x3 Futsal ⚽ | Cola na humildade
2: 🏆 SABOT | ⚽ 3x3 Futsal ⚽ | Cola na humildade
3: 🏆 FuteLab | ⚽ Futsal ⚽ | Cola na humildade
4: 🎯 SABOT | ⚽ Futsal ⚽ | Cola na humildade
5: 🎯 saBOT | ⚽ Futsal ⚽ | 3x3 | Cola na humildade
6: 🎯 FuteLab | ⚽ Futsal ⚽ | 3x3 | Cola na humildade
7: 🎯 Futsal ⚽ 3x3 🏆 | Cola na humildade
8: 🎯 Cola na humildade | ⚽ Futsal 3x3 🏆
9: ⚽ FutZ 3x3 🏆 | Cola na humildade 🎯
10: 𝟯✘𝟯 | ⚽ 🅵🆄🆃🆉 🏆 | ᶜᵒˡᵃ ⁿᵃ ʰᵘᵐⁱˡᵈᵃᵈᵉ 🎯
11: 𝟯✘𝟯 | ⚽ 🅵🆄🆃🆉 🏆 | 𝐂𝐨𝐥𝐚 𝐧𝐚 𝐡𝐮𝐦𝐢𝐥𝐝𝐚𝐝𝐞 🎯
12. 𝟯✘𝟯 | ${botVersion} | ᶜᵒˡᵃ ⁿᵃ ʰᵘᵐⁱˡᵈᵃᵈᵉ 🎯
*/
const botName = "🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖";
let linkinho = "";
const maxPlayers = 20;
var roomPublic = true;
const geo = [{ "lat": -23.646709, "lon": -46.730114, "code": "br" }, { "code": "FR", "lat": 46.2, "lon": 2.2 }, { "code": "PL", "lat": 51.9, "lon": 19.1 }, { "code": "GB", "lat": 55.3, "lon": -3.4 }, { "code": "PT", "lat": 39.3, "lon": -8.2 }];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0]});
const scoreLimit = 3;
const timeLimit = 3;
var teamLimit = 3;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
let keyCommand = generateRandomPassword();
var adminPassword = generateAdminRandomPassword();
document.title = `Headless SERVER`;
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 10;
const velocitypadrao = 0.11;
let speedvelocity = 0.11;
const triggerDistance = playerRadius + ballRadius + 0.01;
var smallStadium = stadPeq();
var mediumStadium = stadSpeed();
var mediumdark = stadDark();
const medium2 = `{"name" : "useless𝒙3 ${botVersion}",

	"width" : 620,

	"height" : 270,

	"canBeStored" : false,

	"bg" : { "width" : 550, "height" : 240, "kickOffRadius" : 80, "color" : "1e473d" },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
		/* 1 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
		/* 2 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 3 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 4 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 5 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
		/* 6 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
		/* 7 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
		/* 8 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
		/* 9 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
		/* 10 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
		/* 11 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
		/* 12 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
		/* 13 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 14 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 15 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 16 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 17 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ] },
		/* 18 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
		/* 19 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 20 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 21 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 22 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 23 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 25 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ] },
		/* 26 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
		/* 27 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 28 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 29 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 30 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 31 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 32 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 34 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 35 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 36 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 37 */ { "x" : -557.5, "y" : 80, "cMask" : ["ball" ] },
		/* 38 */ { "x" : -557.5, "y" : 240, "cMask" : ["ball" ] },
		/* 39 */ { "x" : -557.5, "y" : -240, "cMask" : ["ball" ] },
		/* 40 */ { "x" : -557.5, "y" : -80, "cMask" : ["ball" ] },
		/* 41 */ { "x" : 557.5, "y" : -240, "cMask" : ["ball" ] },
		/* 42 */ { "x" : 557.5, "y" : -80, "cMask" : ["ball" ] },
		/* 43 */ { "x" : 557.5, "y" : 80, "cMask" : ["ball" ] },
		/* 44 */ { "x" : 557.5, "y" : 240, "cMask" : ["ball" ] },
		/* 45 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 46 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 47 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 48 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 49 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 50 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 51 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 52 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 53 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 54 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 55 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 56 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 57 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 58 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 59 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 60 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 61 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 62 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 63 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 64 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 65 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 66 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 67 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 68 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 69 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 70 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 71 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 72 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 73 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 74 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 75 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 76 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 77 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 78 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 79 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 80 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 81 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 82 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 83 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 84 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 85 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 86 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 87 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 88 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 89 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 90 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 91 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 92 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 93 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 94 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 95 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 96 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 97 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 98 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 99 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 100 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 101 */ { "x" : 276.86203618166985, "y" : 0.03387524642882023, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 102 */ { "x" : 14.59202607018429, "y" : -22.705485457098803, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 103 */ { "x" : 26.982089131013396, "y" : -38.56476617496011, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 104 */ { "x" : 12.114013458018434, "y" : -28.15711320386363, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 105 */ { "x" : 19.548051294515943, "y" : -38.56476617496011, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 106 */ { "x" : 26.982089131013396, "y" : -6.846204739237493, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 107 */ { "x" : 14.59202607018429, "y" : -23.20108797953197, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 108 */ { "x" : -2.7540622149765284, "y" : -6.846204739237493, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 109 */ { "x" : 9.636000845852578, "y" : -23.077063929465588, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 110 */ { "x" : 12.60961598045165, "y" : -28.15711320386363, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 111 */ { "x" : 4.679975621520981, "y" : -38.56476617496011, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 112 */ { "x" : 9.636000845852578, "y" : -22.58146140703242, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 113 */ { "x" : -2.7540622149765284, "y" : -38.440742124893724, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 114 */ { "x" : 19.548051294515943, "y" : -6.846204739237493, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 115 */ { "x" : 12.114013458018434, "y" : -17.74946023276715, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 116 */ { "x" : 4.679975621520981, "y" : -6.846204739237493, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 117 */ { "x" : 12.60961598045165, "y" : -17.74946023276715, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "ffffff" },
		/* 118 */ { "x" : -36.93753199689161, "y" : -17.97009444512674, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 119 */ { "x" : -34.93753199689161, "y" : -17.97009444512674, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 120 */ { "x" : -32.93753199689161, "y" : -17.97009444512674, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 121 */ { "x" : -30.937531996891607, "y" : -17.97009444512674, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 122 */ { "x" : -36.93753199689161, "y" : -17.97009444512674, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 123 */ { "x" : -8.115283901975033, "y" : -17.97009444512674, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 124 */ { "x" : -33.31044723885486, "y" : -15.496996433208892, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 125 */ { "x" : -5.937531996891607, "y" : -15.970094445126733, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 126 */ { "x" : -32.83734922693702, "y" : -13.81239510782077, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 127 */ { "x" : -3.9375319968916074, "y" : -13.970094445126726, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 128 */ { "x" : -28.91918149395599, "y" : 2.867008472320144, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 129 */ { "x" : -17.098378770621252, "y" : 3.024707809626072, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 130 */ { "x" : -26.395992097060827, "y" : 1.0448486004935305, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 131 */ { "x" : -15.575189373726062, "y" : 1.202547937799487, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 132 */ { "x" : -31.898772573612803, "y" : -11.37629567670907, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 133 */ { "x" : -9.937531996891607, "y" : -11.691694351320955, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 134 */ { "x" : -29.39227950587383, "y" : -0.9353638817025072, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 135 */ { "x" : -17.921873600436328, "y" : -0.7776645443965791, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 136 */ { "x" : -28.336820839514644, "y" : 23.893263229703777, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 137 */ { "x" : -35.51474232361625, "y" : -18.729367954337796, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 138 */ { "x" : -22.926590063549554, "y" : 42.15269535790663, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 139 */ { "x" : -33.54808100989595, "y" : -19.09302064182382, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 140 */ { "x" : -23.097209116279828, "y" : 30.230468355102417, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 141 */ { "x" : -31.5814196961756, "y" : -19.456673329309872, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 142 */ { "x" : -20.25663147029144, "y" : 34.593021471240505, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 143 */ { "x" : -29.61475838245525, "y" : -18.820326016795896, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 144 */ { "x" : -16.2491451198986, "y" : 17.54274464900378, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 145 */ { "x" : -17.502413355095683, "y" : 9.267633744805146, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 146 */ { "x" : -14.149214391709165, "y" : 17.10562805202791, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 147 */ { "x" : -15.402482626906249, "y" : 8.830517147829276, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 148 */ { "x" : -7.510569054738426, "y" : 17.25146590513002, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 149 */ { "x" : -9.01911460399208, "y" : 8.318924310544325, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 150 */ { "x" : -7.294802998834598, "y" : 16.601444034882817, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 151 */ { "x" : -16.337028109937023, "y" : 16.897735618158677, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 152 */ { "x" : -5.090552878115318, "y" : 16.476458920932558, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 153 */ { "x" : -14.132777989217743, "y" : 16.772750504208418, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 154 */ { "x" : -5.253624457065939, "y" : 16.829036914381547, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 155 */ { "x" : -6.762170006319593, "y" : 7.896495319795854, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 156 */ { "x" : 12.937885372992241, "y" : 1.3079014818881305, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 157 */ { "x" : -7.846873516767346, "y" : 1.3079014818881305, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 158 */ { "x" : 11.203192662626861, "y" : 4.304188890701106, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 159 */ { "x" : -9.581566227132726, "y" : 4.304188890701106, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 160 */ { "x" : 15.641764891614912, "y" : 3.0425941922535387, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 161 */ { "x" : -10.685461588274393, "y" : 3.0425941922535387, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 162 */ { "x" : 4.683709388188845, "y" : 18.463984597742765, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 163 */ { "x" : 2.45892201321999, "y" : 4.345591118140355, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 164 */ { "x" : 1.4632616057265295, "y" : 17.19291689063992, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 165 */ { "x" : -0.7615257692423256, "y" : 3.074523411037511, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 166 */ { "x" : 3.3692691434538347, "y" : 21.395259080564742, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 167 */ { "x" : 0.3223737057668359, "y" : 1.7957083033788521, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 168 */ { "x" : 29.45809734310467, "y" : 0.6642568596759517, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 169 */ { "x" : 8.673338453345082, "y" : 0.6642568596759517, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 170 */ { "x" : 31.15617595120409, "y" : 1.9441586092564975, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 171 */ { "x" : 10.371417061444618, "y" : 1.9441586092564975, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 172 */ { "x" : 29.587398372878624, "y" : 4.115335229273789, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 173 */ { "x" : 3.2601718929893195, "y" : 4.115335229273789, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 174 */ { "x" : 25.790852477717976, "y" : 1.6898630940533153, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 175 */ { "x" : 11.452452494342651, "y" : 16.737005281930138, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 176 */ { "x" : 36.667489217212506, "y" : 17.417324088325287, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 177 */ { "x" : 10.3402627373232, "y" : 17.417324088325287, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 178 */ { "x" : 26.308030848288126, "y" : 4.257183797580289, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 179 */ { "x" : 11.969630864912858, "y" : 19.304325985457112, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 180 */ { "x" : 28.29795763646689, "y" : 4.967952330801374, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 181 */ { "x" : 13.959557653091565, "y" : 20.015094518678197, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 182 */ { "x" : 35.16565176538404, "y" : 19.562806162365845, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 183 */ { "x" : 8.838425285494736, "y" : 19.562806162365845, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 184 */ { "x" : 38.38387487644491, "y" : 20.493740029002353, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 185 */ { "x" : 12.056648396555602, "y" : 20.493740029002353, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d" },
		/* 186 */ { "x" : 28.855899446204795, "y" : 234.33672570046463, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 187 */ { "x" : 28.855899446204795, "y" : 224.33672570046463, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 188 */ { "x" : 4.240398400186841, "y" : 228.5801586162082, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "faae3d" },
		/* 189 */ { "x" : 9.819649911805108, "y" : 220.60469057655575, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "faae3d" },
		/* 190 */ { "x" : 20.954873334345432, "y" : 223.3020089000563, "bCoef" : 0.1, "cMask" : [ ], "curve" : 1000, "color" : "3e937d" },
		/* 191 */ { "x" : 18.874057575287917, "y" : 223.1296111088487, "bCoef" : 0.1, "cMask" : [ ], "curve" : 1000, "color" : "3e937d" },
		/* 192 */ { "x" : 4.240398400186841, "y" : 236.1217194045881, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "faae3d" },
		/* 193 */ { "x" : 9.819649911805108, "y" : 228.14625136493567, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "faae3d" },
		/* 194 */ { "x" : 4.746778774145675, "y" : 227.57663489989665, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "faae3d" },
		/* 195 */ { "x" : 8.178915044937703, "y" : 228.74254055954444, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "faae3d" },
		/* 196 */ { "x" : 27.40044858784713, "y" : 224.37279582423326, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 197 */ { "x" : 35.35180479483551, "y" : 224.32124710342498, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 198 */ { "x" : 27.817591480229318, "y" : 228.21835197225624, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 199 */ { "x" : 32.35180479483551, "y" : 228.166803251448, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 200 */ { "x" : 37.6850437838203, "y" : 234.33672570046463, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 201 */ { "x" : 37.6850437838203, "y" : 224.33672570046463, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 202 */ { "x" : 36.22959292546263, "y" : 224.37279582423326, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 203 */ { "x" : 44.18094913245101, "y" : 224.32124710342498, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 204 */ { "x" : 36.64673581784481, "y" : 228.21835197225624, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 205 */ { "x" : 41.18094913245101, "y" : 228.166803251448, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e937d", "_selected" : true },
		/* 206 */ { "x" : 0.05413570785701438, "y" : 267, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 207 */ { "x" : 0.05413570785701438, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 208 */ { "x" : 18.725616867015038, "y" : 234.6798481064847, "bCoef" : 0.1, "cMask" : [ ], "curve" : 1000, "color" : "3e937d" },
		/* 209 */ { "x" : 20.809495903095897, "y" : 234.54960454795656, "bCoef" : 0.1, "cMask" : [ ], "curve" : 1000, "color" : "3e937d" }

	],

	"segments" : [
		{ "v0" : 5, "v1" : 6, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 6, "v1" : 7, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 7, "v1" : 8, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 9, "v1" : 10, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 10, "v1" : 11, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 11, "v1" : 12, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 2, "v1" : 3, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 3, "v1" : 2, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 3, "v1" : 4, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 13, "v1" : 14, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 15, "v1" : 16, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 17, "v1" : 18, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 19, "v1" : 20, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 21, "v1" : 22, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 23, "v1" : 24, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 25, "v1" : 26, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 27, "v1" : 28, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 29, "v1" : 30, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 37, "v1" : 38, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 39, "v1" : 40, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 41, "v1" : 42, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 43, "v1" : 44, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 47, "v1" : 48, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 49, "v1" : 50, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 52, "v1" : 51, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 53, "v1" : 54, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 55, "v1" : 56, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 52, "v1" : 56, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 58, "v1" : 57, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 59, "v1" : 60, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 62, "v1" : 61, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 63, "v1" : 64, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 66, "v1" : 65, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 67, "v1" : 68, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 70, "v1" : 69, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 69, "v1" : 70, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 72, "v1" : 71, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 71, "v1" : 72, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 74, "v1" : 73, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 73, "v1" : 74, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 76, "v1" : 75, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 75, "v1" : 76, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 78, "v1" : 77, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 77, "v1" : 78, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 80, "v1" : 79, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 79, "v1" : 80, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 82, "v1" : 81, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 81, "v1" : 82, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 84, "v1" : 83, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 83, "v1" : 84, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 86, "v1" : 85, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 85, "v1" : 86, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 88, "v1" : 87, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 87, "v1" : 88, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 90, "v1" : 89, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 89, "v1" : 90, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 92, "v1" : 91, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 94, "v1" : 93, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 93, "v1" : 94, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 96, "v1" : 95, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 95, "v1" : 96, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 98, "v1" : 97, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 97, "v1" : 98, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 100, "v1" : 99, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "color" : "ffffff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "color" : "ffffff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "color" : "ffffff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "color" : "ffffff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "color" : "ffffff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "color" : "ffffff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "color" : "ffffff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "color" : "ffffff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 122, "v1" : 123, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -25 },
		{ "v0" : 124, "v1" : 125, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -23 },
		{ "v0" : 126, "v1" : 127, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
		{ "v0" : 128, "v1" : 129, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -23 },
		{ "v0" : 130, "v1" : 131, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
		{ "v0" : 132, "v1" : 133, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
		{ "v0" : 134, "v1" : 135, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -4 },
		{ "v0" : 136, "v1" : 137, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 200 },
		{ "v0" : 138, "v1" : 139, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
		{ "v0" : 140, "v1" : 141, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 142, "v1" : 143, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 144, "v1" : 145, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 146, "v1" : 147, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 148, "v1" : 149, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 150, "v1" : 151, "curve" : 188.38679109609015, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
		{ "v0" : 152, "v1" : 153, "curve" : 188.38679109609015, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 158, "v1" : 159, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 162, "v1" : 163, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 164, "v1" : 165, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 168, "v1" : 169, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 172, "v1" : 173, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 174, "v1" : 175, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 176, "v1" : 177, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 178, "v1" : 179, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 91.76266812461527 },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 100, "_selected" : true },
		{ "v0" : 188, "v1" : 189, "curve" : 0, "color" : "faae3d", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 190, "v1" : 191, "curve" : 338.72555036441656, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 192, "v1" : 193, "curve" : 0, "color" : "faae3d", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 194, "v1" : 195, "curve" : 0, "color" : "faae3d", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 196, "v1" : 197, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 100, "_selected" : true },
		{ "v0" : 198, "v1" : 199, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 100, "_selected" : true },
		{ "v0" : 200, "v1" : 201, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 100, "_selected" : true },
		{ "v0" : 202, "v1" : 203, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 100, "_selected" : true },
		{ "v0" : 204, "v1" : 205, "curve" : 0, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 100, "_selected" : true },
		{ "v0" : 206, "v1" : 207, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 208, "v1" : 209, "curve" : 338.72555036441656, "color" : "3e937d", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -240, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] }

	],

	"goals" : [
		{ "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },
		{ "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFCC00", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 5, "invMass" : 0, "pos" : [-550,80 ], "color" : "ffcc00" },
		{ "radius" : 5, "invMass" : 0, "pos" : [-550,-80 ], "color" : "ffcc00" },
		{ "radius" : 5, "invMass" : 0, "pos" : [550,80 ], "color" : "ffcc00" },
		{ "radius" : 5, "invMass" : 0, "pos" : [550,-80 ], "color" : "ffcc00" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] }

	],

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.11,
		"kickStrength" : 4.75

	},

	"ballPhysics" : "disc0",

	"spawnDistance" : 350,

	"traits" : {
		

	},

	"joints" : [
		

	],

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	]
}`
const bigStadium = `{"name" : "real-speed𝒙3-0.126",
    
"width" : 620,

"height" : 270,

"canBeStored" : false,

"bg" : { "width" : 550, "height" : 240, "kickOffRadius" : 80, "color" : "1E472E" },

"vertexes" : [
    /* 0 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
    /* 1 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
    /* 2 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 3 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 4 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 5 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 6 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 7 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 8 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 9 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 10 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 11 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 12 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    /* 13 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 14 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 15 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 16 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 17 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ] },
    /* 18 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
    /* 19 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 20 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 21 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 22 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
    /* 23 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
    /* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
    /* 25 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ] },
    /* 26 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
    /* 27 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 28 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 29 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 30 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 31 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 32 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 34 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 35 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 36 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 37 */ { "x" : -557.5, "y" : 80, "cMask" : ["ball" ] },
    /* 38 */ { "x" : -557.5, "y" : 240, "cMask" : ["ball" ] },
    /* 39 */ { "x" : -557.5, "y" : -240, "cMask" : ["ball" ] },
    /* 40 */ { "x" : -557.5, "y" : -80, "cMask" : ["ball" ] },
    /* 41 */ { "x" : 557.5, "y" : -240, "cMask" : ["ball" ] },
    /* 42 */ { "x" : 557.5, "y" : -80, "cMask" : ["ball" ] },
    /* 43 */ { "x" : 557.5, "y" : 80, "cMask" : ["ball" ] },
    /* 44 */ { "x" : 557.5, "y" : 240, "cMask" : ["ball" ] },
    /* 45 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 46 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 47 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 48 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 49 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 50 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
    /* 51 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
    /* 52 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 53 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
    /* 54 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 55 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
    /* 56 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 57 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
    /* 58 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 59 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
    /* 60 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 61 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
    /* 62 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
    /* 63 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
    /* 64 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 65 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
    /* 66 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 67 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 68 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
    /* 69 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 70 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 71 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 72 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 73 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 74 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 75 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 76 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 77 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 78 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 79 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 80 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 81 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 82 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 83 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 84 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 85 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 86 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 87 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 88 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 89 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 90 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 91 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 92 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 93 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 94 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
    /* 95 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 96 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
    /* 97 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 98 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
    /* 99 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 100 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
    /* 101 */ { "x" : 276.86203618166985, "y" : 0.03387524642882023, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
    /* 102 */ { "x" : 31.521673188722843, "y" : 0.061971012659903124, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 103 */ { "x" : 43.91173624955195, "y" : -15.797309705201407, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 104 */ { "x" : 29.043660576556988, "y" : -5.389656734104925, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 105 */ { "x" : 36.4776984130545, "y" : -15.797309705201407, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 106 */ { "x" : 43.91173624955195, "y" : 15.921251730521206, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 107 */ { "x" : 31.521673188722843, "y" : -0.4336315097732637, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 108 */ { "x" : 14.175584903562026, "y" : 15.921251730521206, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 109 */ { "x" : 26.565647964391133, "y" : -0.3096074597068821, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 110 */ { "x" : 29.539263098990205, "y" : -5.389656734104925, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 111 */ { "x" : 21.609622740059535, "y" : -15.797309705201407, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 112 */ { "x" : 26.565647964391133, "y" : 0.18599506272628474, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 113 */ { "x" : 14.175584903562026, "y" : -15.673285655135018, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 114 */ { "x" : 36.4776984130545, "y" : 15.921251730521206, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 115 */ { "x" : 29.043660576556988, "y" : 5.017996236991557, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 116 */ { "x" : 21.609622740059535, "y" : 15.921251730521206, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 117 */ { "x" : 29.539263098990205, "y" : 5.017996236991557, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
    /* 118 */ { "x" : -14.310398662378958, "y" : 22.16050259961063, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 119 */ { "x" : -19.091194202873822, "y" : 28.9230698600256, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 120 */ { "x" : -11.192653767204007, "y" : 14.285987996186243, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 121 */ { "x" : -13.193872987388914, "y" : 22.492801570992874, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 122 */ { "x" : -9.35356123963416, "y" : 18.735044538036256, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 123 */ { "x" : -12.166256147870143, "y" : 13.885272179525437, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 124 */ { "x" : -2.457025595235365, "y" : 25.586432962504936, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 125 */ { "x" : -2.2641946989674864, "y" : 35.31002240738254, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 126 */ { "x" : -1.6327900995341054, "y" : 20.76334366986311, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 127 */ { "x" : -1.4394963223851676, "y" : 30.510274102809795, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 128 */ { "x" : -8.249699567627118, "y" : 21.078541904019893, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 129 */ { "x" : -0.15790826480352393, "y" : 20.918071598462213, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 130 */ { "x" : 16.869998069384707, "y" : 28.3781153494564, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 131 */ { "x" : 16.630733374872165, "y" : 24.321787188628612, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 132 */ { "x" : 15.9303686259897, "y" : 23.195349021142967, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 133 */ { "x" : 8.377970510148458, "y" : 29.212664885550446, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 134 */ { "x" : 29.56304511939348, "y" : 28.31037308171451, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 135 */ { "x" : 29.323780424880994, "y" : 24.254044920886606, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 136 */ { "x" : 28.62341567599853, "y" : 23.12760675340096, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 137 */ { "x" : 21.071017560157287, "y" : 29.144922617808554, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 138 */ { "x" : 38.97134327594958, "y" : 29.595608191695185, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 139 */ { "x" : 38.68466690024965, "y" : 23.14852350957836, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 140 */ { "x" : 39.02969611433409, "y" : 32.538077756358255, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 141 */ { "x" : 38.75551262367091, "y" : 17.443841675644542, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "2e6d46" },
    /* 142 */ { "x" : -48.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 143 */ { "x" : -46.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 144 */ { "x" : -44.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 145 */ { "x" : -42.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 146 */ { "x" : -48.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 147 */ { "x" : -19.49901213685439, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 148 */ { "x" : -44.69417547373422, "y" : -26.296943732966227, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 149 */ { "x" : -17.321260231770964, "y" : -26.770041744884068, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 150 */ { "x" : -44.22107746181638, "y" : -24.612342407578105, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 151 */ { "x" : -15.321260231770964, "y" : -24.77004174488406, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 152 */ { "x" : -40.302909728835346, "y" : -7.932938827437191, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 153 */ { "x" : -28.48210700550061, "y" : -7.775239490131263, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 154 */ { "x" : -37.77972033194018, "y" : -9.755098699263804, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 155 */ { "x" : -26.958917608605418, "y" : -9.597399361957848, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 156 */ { "x" : -43.28250080849216, "y" : -22.176242976466405, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 157 */ { "x" : -21.321260231770964, "y" : -22.49164165107829, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 158 */ { "x" : -40.77600774075319, "y" : -11.735311181459842, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 159 */ { "x" : -29.305601835315684, "y" : -11.577611844153914, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 160 */ { "x" : -39.720549074394, "y" : 13.093315929946442, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 161 */ { "x" : -46.8984705584956, "y" : -29.52931525409513, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 162 */ { "x" : -34.31031829842891, "y" : 31.352748058149295, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 163 */ { "x" : -44.93180924477531, "y" : -29.892967941581155, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 164 */ { "x" : -34.480937351159184, "y" : 19.430521055345082, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 165 */ { "x" : -42.96514793105496, "y" : -30.256620629067207, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 166 */ { "x" : -31.640359705170795, "y" : 23.79307417148317, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 167 */ { "x" : -40.998486617334606, "y" : -29.62027331655323, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 168 */ { "x" : -27.632873354777956, "y" : 6.742797349246445, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 169 */ { "x" : -28.88614158997504, "y" : -1.5323135549521893, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 170 */ { "x" : -25.53294262658852, "y" : 6.305680752270575, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 171 */ { "x" : -26.786210861785605, "y" : -1.9694301519280586, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 172 */ { "x" : -18.894297289617782, "y" : 6.451518605372684, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 173 */ { "x" : -20.402842838871436, "y" : -2.4810229892130096, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 174 */ { "x" : -18.678531233713954, "y" : 5.8014967351254825, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 175 */ { "x" : -27.72075634481638, "y" : 6.097788318401342, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 176 */ { "x" : -16.474281112994674, "y" : 5.676511621175223, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 177 */ { "x" : -25.5165062240971, "y" : 5.972803204451083, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 178 */ { "x" : -16.637352691945296, "y" : 6.029089614624212, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 179 */ { "x" : -18.14589824119895, "y" : -2.9034519799614813, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 180 */ { "x" : 1.5541571381128847, "y" : -9.492045817869204, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 181 */ { "x" : -19.230601751646702, "y" : -9.492045817869204, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 182 */ { "x" : -0.18053557225249506, "y" : -6.495758409056229, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 183 */ { "x" : -20.965294462012082, "y" : -6.495758409056229, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 184 */ { "x" : 4.258036656735555, "y" : -7.757353107503796, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 185 */ { "x" : -22.06918982315375, "y" : -7.757353107503796, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 186 */ { "x" : -6.7000188466905115, "y" : 7.6640372979854305, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 187 */ { "x" : -8.924806221659367, "y" : -6.45435618161698, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 188 */ { "x" : -9.920466629152827, "y" : 6.392969590882586, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 189 */ { "x" : -12.145254004121682, "y" : -7.725423888719824, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 190 */ { "x" : -8.014459091425522, "y" : 10.595311780807407, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 191 */ { "x" : -11.06135452911252, "y" : -9.004238996378483, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 192 */ { "x" : 18.074369108225312, "y" : -10.135690440081383, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 193 */ { "x" : -2.710389781534275, "y" : -10.135690440081383, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 194 */ { "x" : 19.772447716324734, "y" : -8.855788690500837, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 195 */ { "x" : -1.012311173434739, "y" : -8.855788690500837, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 196 */ { "x" : 18.203670137999268, "y" : -6.684612070483546, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 197 */ { "x" : -8.123556341890037, "y" : -6.684612070483546, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 198 */ { "x" : 14.40712424283862, "y" : -9.11008420570402, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 199 */ { "x" : 0.06872425946329486, "y" : 5.937057982172803, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 200 */ { "x" : 25.28376098233315, "y" : 6.617376788567952, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 201 */ { "x" : -1.0434654975561557, "y" : 6.617376788567952, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 202 */ { "x" : 14.92430261340877, "y" : -6.542763502177046, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 203 */ { "x" : 0.5859026300335017, "y" : 8.504378685699777, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 204 */ { "x" : 16.914229401587534, "y" : -5.831994968955961, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 205 */ { "x" : 2.5758294182122086, "y" : 9.215147218920862, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 206 */ { "x" : 23.781923530504685, "y" : 8.76285886260851, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 207 */ { "x" : -2.54530294938462, "y" : 8.76285886260851, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 208 */ { "x" : 27.00014664156555, "y" : 9.693792729245018, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 209 */ { "x" : 0.6729201616762452, "y" : 9.693792729245018, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
    /* 210 */ { "x" : -0.01683125859405976, "y" : 268.89858408402245, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    /* 211 */ { "x" : -0.01683125859405976, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }

],

"segments" : [
    { "v0" : 5, "v1" : 6, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 6, "v1" : 7, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 7, "v1" : 8, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 9, "v1" : 10, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 10, "v1" : 11, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 11, "v1" : 12, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
    { "v0" : 2, "v1" : 3, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 3, "v1" : 2, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 3, "v1" : 4, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    { "v0" : 13, "v1" : 14, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
    { "v0" : 15, "v1" : 16, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
    { "v0" : 17, "v1" : 18, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 19, "v1" : 20, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
    { "v0" : 21, "v1" : 22, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
    { "v0" : 23, "v1" : 24, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
    { "v0" : 25, "v1" : 26, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 27, "v1" : 28, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    { "v0" : 29, "v1" : 30, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
    { "v0" : 37, "v1" : 38, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 39, "v1" : 40, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 41, "v1" : 42, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 43, "v1" : 44, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
    { "v0" : 47, "v1" : 48, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 49, "v1" : 50, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 52, "v1" : 51, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 53, "v1" : 54, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 55, "v1" : 56, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 52, "v1" : 56, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 58, "v1" : 57, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 59, "v1" : 60, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 62, "v1" : 61, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 63, "v1" : 64, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 66, "v1" : 65, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
    { "v0" : 67, "v1" : 68, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
    { "v0" : 70, "v1" : 69, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 69, "v1" : 70, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 72, "v1" : 71, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 71, "v1" : 72, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 74, "v1" : 73, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 73, "v1" : 74, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 76, "v1" : 75, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 75, "v1" : 76, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 78, "v1" : 77, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 77, "v1" : 78, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 80, "v1" : 79, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 79, "v1" : 80, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 82, "v1" : 81, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 81, "v1" : 82, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 84, "v1" : 83, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 83, "v1" : 84, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 86, "v1" : 85, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 85, "v1" : 86, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 88, "v1" : 87, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 87, "v1" : 88, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 90, "v1" : 89, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 89, "v1" : 90, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 92, "v1" : 91, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 91, "v1" : 92, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 94, "v1" : 93, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 93, "v1" : 94, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 96, "v1" : 95, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 95, "v1" : 96, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 98, "v1" : 97, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 97, "v1" : 98, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 100, "v1" : 99, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 99, "v1" : 100, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
    { "v0" : 102, "v1" : 103, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 104, "v1" : 105, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 106, "v1" : 107, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 108, "v1" : 109, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 110, "v1" : 111, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 112, "v1" : 113, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 114, "v1" : 115, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 116, "v1" : 117, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 118, "v1" : 119, "curve" : 266.8402851866564, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 205, "y" : 40 },
    { "v0" : 120, "v1" : 121, "curve" : -208.67141487184793, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 205, "y" : 40 },
    { "v0" : 122, "v1" : 123, "curve" : -106.39841675885857, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 205, "y" : 40 },
    { "v0" : 124, "v1" : 125, "curve" : 0, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 126, "v1" : 127, "curve" : 199.98264087486203, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 128, "v1" : 129, "curve" : 0, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 130, "v1" : 131, "curve" : 315.9672530335651, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 132, "v1" : 133, "curve" : 0, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 134, "v1" : 135, "curve" : 315.9672530335651, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 136, "v1" : 137, "curve" : 0, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 138, "v1" : 139, "curve" : 262.8748351573592, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 140, "v1" : 141, "curve" : 0, "color" : "2e6d46", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
    { "v0" : 146, "v1" : 147, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -25 },
    { "v0" : 148, "v1" : 149, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -23 },
    { "v0" : 150, "v1" : 151, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
    { "v0" : 152, "v1" : 153, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -23 },
    { "v0" : 154, "v1" : 155, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
    { "v0" : 156, "v1" : 157, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
    { "v0" : 158, "v1" : 159, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -4 },
    { "v0" : 160, "v1" : 161, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 200 },
    { "v0" : 162, "v1" : 163, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
    { "v0" : 164, "v1" : 165, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 166, "v1" : 167, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
    { "v0" : 168, "v1" : 169, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 170, "v1" : 171, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 172, "v1" : 173, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 174, "v1" : 175, "curve" : 188.38679109609015, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
    { "v0" : 176, "v1" : 177, "curve" : 188.38679109609015, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
    { "v0" : 178, "v1" : 179, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 180, "v1" : 181, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 182, "v1" : 183, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 184, "v1" : 185, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 186, "v1" : 187, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 188, "v1" : 189, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 190, "v1" : 191, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 192, "v1" : 193, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 194, "v1" : 195, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 196, "v1" : 197, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 198, "v1" : 199, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 200, "v1" : 201, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 202, "v1" : 203, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 204, "v1" : 205, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 206, "v1" : 207, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
    { "v0" : 208, "v1" : 209, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 91.76266812461527 },
    { "v0" : 210, "v1" : 211, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }

],

"planes" : [
    { "normal" : [0,1 ], "dist" : -240, "cMask" : ["ball" ] },
    { "normal" : [0,-1 ], "dist" : -240, "cMask" : ["ball" ] },
    { "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
    { "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
    { "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
    { "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
    { "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] },
    { "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] }

],

"goals" : [
    { "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },
    { "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }

],

"discs" : [
    { "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFCC00", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
    { "radius" : 5, "invMass" : 0, "pos" : [-550,80 ], "color" : "FF6666" },
    { "radius" : 5, "invMass" : 0, "pos" : [-550,-80 ], "color" : "FF6666" },
    { "radius" : 5, "invMass" : 0, "pos" : [550,80 ], "color" : "6666FF" },
    { "radius" : 5, "invMass" : 0, "pos" : [550,-80 ], "color" : "6666FF" },
    { "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
    { "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
    { "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
    { "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] }

],

"playerPhysics" : {
    "bCoef" : 0,
    "acceleration" : ${velocitypadrao},
    "kickingAcceleration" : 0.126,
    "kickStrength" : 4.75

},

"ballPhysics" : "disc0",

"spawnDistance" : 350,

"traits" : {
    

},

"joints" : [
    

],

"redSpawnPoints" : [
    

],

"blueSpawnPoints" : [
    

]
}`
const bigStadium2 = `{"name":"𝒙5 ${botVersion}","width":900,"height":460,"bg":{"kickOffRadius":80,"color":"1E472E"},
"vertexes":[
    {"x":0,"y":420,"cMask":["wall"]},
    {"x":0,"y":-420,"cMask":["wall"]},
    {"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},
    {"x":-800,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-800,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":460,"cMask":[],"cGroup":[]},
    {"x":0,"y":-460,"cMask":[],"cGroup":[]},
    {"x":450,"y":-276,"cMask":["wall"]},
    {"x":450,"y":276,"cMask":["wall"]},
    {"x":-800,"y":-421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":-421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":800,"y":421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-800,"y":421,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":80,"cMask":["wall"]},
    {"x":0,"y":-80,"cMask":["wall"]},
    {"x":-801,"y":-90,"cMask":["wall"]},
    {"x":-801,"y":90,"cMask":["wall"]},
    {"x":-798,"y":-90,"cMask":["wall"]},
    {"x":-798,"y":90,"cMask":["wall"]},
    {"x":798,"y":-90,"cMask":["wall"]},
    {"x":798,"y":90,"cMask":["wall"]},
    {"x":801,"y":-90,"cMask":["wall"]},
    {"x":801,"y":90,"cMask":["wall"]},
    {"x":801,"y":420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-801,"y":420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":801,"y":-420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-801,"y":-420,"cMask":["ball"],"cGroup":["ball"]},
    {"x":803,"y":-422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-803,"y":-422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":803,"y":422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-803,"y":422,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":-423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":-90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":-423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":802,"y":423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":90,"cMask":["ball"],"cGroup":["ball"]},
    {"x":-802,"y":423,"cMask":["ball"],"cGroup":["ball"]},
    {"x":0,"y":-82,"cMask":["wall"]},
    {"x":0,"y":82,"cMask":["wall"]},
    {"x":1,"y":-420,"cMask":["wall"]},
    {"x":1,"y":420,"cMask":["wall"]},
    {"x":-1,"y":-420,"cMask":["wall"]},
    {"x":-1,"y":420,"cMask":["wall"]},
    {"x":449,"y":-275,"cMask":["wall"]},
    {"x":800,"y":-275,"cMask":["wall"]},
    {"x":-450,"y":-276,"cMask":["wall"]},
    {"x":-450,"y":276,"cMask":["wall"]},
    {"x":449,"y":275,"cMask":["wall"]},
    {"x":800,"y":275,"cMask":["wall"]},
    {"x":452,"y":-274,"cMask":["wall"]},
    {"x":452,"y":274,"cMask":["wall"]},
    {"x":451,"y":-273,"cMask":["wall"]},
    {"x":800,"y":-273,"cMask":["wall"]},
    {"x":451,"y":273,"cMask":["wall"]},
    {"x":800,"y":273,"cMask":["wall"]},
    {"x":599,"y":-160,"cMask":["wall"]},
    {"x":800,"y":-160,"cMask":["wall"]},
    {"x":599,"y":160,"cMask":["wall"]},
    {"x":800,"y":160,"cMask":["wall"]},
    {"x":600,"y":-161,"cMask":["wall"]},
    {"x":600,"y":161,"cMask":["wall"]},
    {"x":601,"y":-158,"cMask":["wall"]},
    {"x":800,"y":-158,"cMask":["wall"]},
    {"x":601,"y":158,"cMask":["wall"]},
    {"x":800,"y":158,"cMask":["wall"]},
    {"x":602,"y":159,"cMask":["wall"]},
    {"x":602,"y":-159,"cMask":["wall"]},
    {"x":450,"y":90,"cMask":["wall"]},
    {"x":450,"y":-90,"cMask":["wall"]},
    {"x":450,"y":92,"cMask":["wall"]},
    {"x":450,"y":-92,"cMask":["wall"]},
    {"x":-450,"y":90,"cMask":["wall"]},
    {"x":-450,"y":-90,"cMask":["wall"]},
    {"x":-450,"y":92,"cMask":["wall"]},
    {"x":-450,"y":-92,"cMask":["wall"]},
    {"x":-452,"y":-274,"cMask":["wall"]},
    {"x":-452,"y":274,"cMask":["wall"]},
    {"x":-800,"y":275,"cMask":["wall"]},
    {"x":-449,"y":275,"cMask":["wall"]},
    {"x":-800,"y":273,"cMask":["wall"]},
    {"x":-451,"y":273,"cMask":["wall"]},
    {"x":-800,"y":-273,"cMask":["wall"]},
    {"x":-451,"y":-273,"cMask":["wall"]},
    {"x":-800,"y":-275,"cMask":["wall"]},
    {"x":-449,"y":-275,"cMask":["wall"]},
    {"x":-800,"y":-160,"cMask":["wall"]},
    {"x":-599,"y":-160,"cMask":["wall"]},
    {"x":-800,"y":-158,"cMask":["wall"]},
    {"x":-601,"y":-158,"cMask":["wall"]},
    {"x":-800,"y":158,"cMask":["wall"]},
    {"x":-601,"y":158,"cMask":["wall"]},
    {"x":-800,"y":160,"cMask":["wall"]},
    {"x":-599,"y":160,"cMask":["wall"]},
    {"x":-600,"y":-161,"cMask":["wall"]},
    {"x":-600,"y":161,"cMask":["wall"]},
    {"x":-602,"y":-159,"cMask":["wall"]},
    {"x":-602,"y":159,"cMask":["wall"]},
    {"x":0,"y":-5,"cMask":["wall"]},
    {"x":0,"y":5,"cMask":["wall"]},
    {"x":530,"y":-5,"cMask":["wall"]},
    {"x":530,"y":5,"cMask":["wall"]},
    {"x":-530,"y":-5,"cMask":["wall"]},
    {"x":-530,"y":5,"cMask":["wall"]},
    {"x":-799,"y":-90,"cMask":["wall"]},
    {"x":-799,"y":90,"cMask":["wall"]},
    {"x":799,"y":-90,"cMask":["wall"]},
    {"x":799,"y":90,"cMask":["wall"]}
],
"segments":[
    {"v0":13,"v1":6,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":7,"v1":14,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":15,"v1":4,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":5,"v1":12,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":2,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":3,"v1":8,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"A3A3A3"},
    {"v0":2,"v1":3,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"A3A3A3"},
    {"v0":3,"v1":2,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"A3A3A3"},
    {"v0":11,"v1":10,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":5,"v1":4,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":6,"v1":7,"bCoef":0,"cMask":[],"color":"A3A3A3"},
    {"v0":0,"v1":16,"vis":false,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":1,"v1":17,"vis":false,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":18,"v1":19,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":24,"v1":25,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":26,"v1":27,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":28,"v1":29,"bias":10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":30,"v1":31,"bias":10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":32,"v1":33,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":34,"v1":35,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":37,"v1":36,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":38,"v1":39,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":41,"v1":40,"bias":-10,"cMask":["ball"],"cGroup":["ball"],"color":"A3A3A3"},
    {"v0":42,"v1":43,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":43,"v1":42,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":45,"v1":44,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":47,"v1":46,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":48,"v1":49,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":51,"v1":50,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":52,"v1":53,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":54,"v1":55,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":56,"v1":57,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":58,"v1":59,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":60,"v1":61,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":62,"v1":63,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":64,"v1":65,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":66,"v1":67,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":68,"v1":69,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":70,"v1":71,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":72,"v1":73,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":74,"v1":75,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":77,"v1":76,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":79,"v1":78,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":81,"v1":80,"bCoef":0,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":82,"v1":83,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":84,"v1":85,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":86,"v1":87,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":88,"v1":89,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":90,"v1":91,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":92,"v1":93,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":94,"v1":95,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":96,"v1":97,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":98,"v1":99,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":100,"v1":101,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":102,"v1":103,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":103,"v1":102,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":104,"v1":105,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":105,"v1":104,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":119.99999999999999,"curveF":0.577350269189626,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":106,"v1":107,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":107,"v1":106,"curve":59.99999999999999,"curveF":1.7320508075688774,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":108,"v1":109,"cMask":["wall"],"color":"A3A3A3"},
    {"v0":110,"v1":111,"cMask":["wall"],"color":"A3A3A3"}
],
"planes":[
    {"normal":[0,1],"dist":-460,"bCoef":0},
    {"normal":[0,-1],"dist":-460,"bCoef":0},
    {"normal":[1,0],"dist":-900,"bCoef":0,"cMask":["red","blue"],"cGroup":["red","blue"]},
    {"normal":[-1,0],"dist":-900,"bCoef":0,"cMask":["red","blue"],"cGroup":["red","blue"]}
],
"goals":[
    {"p0":[-805.8,90],"p1":[-805.8,-90],"team":"red"},
    {"p0":[805.8,90],"p1":[805.8,-90],"team":"blue"}
],
"discs":[
    {"radius":5.8,"bCoef":0.474,"invMass":1.5,"cGroup":["ball","kick","score"]},
    {"pos":[-800,-90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[-800,90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[800,-90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[800,90],"radius":5,"bCoef":1,"invMass":0},
    {"pos":[-807,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-814,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-821,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-828,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-835,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-83],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-76],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-69],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-62],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-55],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-41],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-48],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-34],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-27],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-20],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-13],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,-6],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,1],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,8],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,15],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,22],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,29],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,36],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,43],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,50],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,57],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,64],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,71],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,78],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,85],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-842,90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-835,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-828,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-821,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-814,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[-807,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[807.4789317507418,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[814.4830860534125,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[821.4872403560831,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[828.4913946587537,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[835.4955489614243,90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,83],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,76],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,69],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,62],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,55],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,41],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,48],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,34],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,27],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,20],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,13],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,6],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-1],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-8],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-15],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-22],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-29],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-36],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-43],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-50],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-57],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-64],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-71],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-78],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-85],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[842.499703264095,-90],"radius":0,"bCoef":1,"invMass":0,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[835.4955489614243,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[828.4913946587537,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[821.4872403560831,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[814.4830860534125,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]},
    {"pos":[807.4789317507418,-90],"radius":0,"bCoef":1,"color":"A3A3A3","cMask":["ball"],"cGroup":["wall"]}
],
"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.75},
"ballPhysics":"disc0",
"joints":[
    {"d0":1,"d1":5,"length":7,"color":"A3A3A3"},
    {"d0":5,"d1":6,"length":7,"color":"A3A3A3"},
    {"d0":6,"d1":7,"length":7,"color":"A3A3A3"},
    {"d0":7,"d1":8,"length":7,"color":"A3A3A3"},
    {"d0":8,"d1":9,"length":7,"color":"A3A3A3"},
    {"d0":9,"d1":10,"length":7,"color":"A3A3A3"},
    {"d0":10,"d1":11,"length":7,"color":"A3A3A3"},
    {"d0":11,"d1":12,"length":7,"color":"A3A3A3"},
    {"d0":12,"d1":13,"length":7,"color":"A3A3A3"},
    {"d0":13,"d1":14,"length":7,"color":"A3A3A3"},
    {"d0":14,"d1":15,"length":7,"color":"A3A3A3"},
    {"d0":15,"d1":17,"length":7,"color":"A3A3A3"},
    {"d0":16,"d1":17,"length":7,"color":"A3A3A3"},
    {"d0":16,"d1":18,"length":7,"color":"A3A3A3"},
    {"d0":18,"d1":19,"length":7,"color":"A3A3A3"},
    {"d0":19,"d1":20,"length":7,"color":"A3A3A3"},
    {"d0":20,"d1":21,"length":7,"color":"A3A3A3"},
    {"d0":21,"d1":22,"length":7,"color":"A3A3A3"},
    {"d0":22,"d1":23,"length":7,"color":"A3A3A3"},
    {"d0":23,"d1":24,"length":7,"color":"A3A3A3"},
    {"d0":24,"d1":25,"length":7,"color":"A3A3A3"},
    {"d0":25,"d1":26,"length":7,"color":"A3A3A3"},
    {"d0":26,"d1":27,"length":7,"color":"A3A3A3"},
    {"d0":27,"d1":28,"length":7,"color":"A3A3A3"},
    {"d0":28,"d1":29,"length":7,"color":"A3A3A3"},
    {"d0":29,"d1":30,"length":7,"color":"A3A3A3"},
    {"d0":30,"d1":31,"length":7,"color":"A3A3A3"},
    {"d0":31,"d1":32,"length":7,"color":"A3A3A3"},
    {"d0":32,"d1":33,"length":7,"color":"A3A3A3"},
    {"d0":33,"d1":34,"length":7,"color":"A3A3A3"},
    {"d0":34,"d1":35,"length":7,"color":"A3A3A3"},
    {"d0":35,"d1":36,"length":5,"color":"A3A3A3"},
    {"d0":36,"d1":37,"length":7,"color":"A3A3A3"},
    {"d0":37,"d1":38,"length":7,"color":"A3A3A3"},
    {"d0":38,"d1":39,"length":7,"color":"A3A3A3"},
    {"d0":39,"d1":40,"length":7,"color":"A3A3A3"},
    {"d0":40,"d1":41,"length":7,"color":"A3A3A3"},
    {"d0":2,"d1":41,"length":7,"color":"A3A3A3"},
    {"d0":3,"d1":78,"length":7.478931750741822,"color":"A3A3A3"},
    {"d0":77,"d1":78,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":76,"d1":77,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":75,"d1":76,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":74,"d1":75,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":73,"d1":74,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":72,"d1":73,"length":5,"color":"A3A3A3"},
    {"d0":71,"d1":72,"length":7,"color":"A3A3A3"},
    {"d0":70,"d1":71,"length":7,"color":"A3A3A3"},
    {"d0":69,"d1":70,"length":7,"color":"A3A3A3"},
    {"d0":68,"d1":69,"length":7,"color":"A3A3A3"},
    {"d0":67,"d1":68,"length":7,"color":"A3A3A3"},
    {"d0":66,"d1":67,"length":7,"color":"A3A3A3"},
    {"d0":65,"d1":66,"length":7,"color":"A3A3A3"},
    {"d0":64,"d1":65,"length":7,"color":"A3A3A3"},
    {"d0":63,"d1":64,"length":7,"color":"A3A3A3"},
    {"d0":62,"d1":63,"length":7,"color":"A3A3A3"},
    {"d0":61,"d1":62,"length":7,"color":"A3A3A3"},
    {"d0":60,"d1":61,"length":7,"color":"A3A3A3"},
    {"d0":59,"d1":60,"length":7,"color":"A3A3A3"},
    {"d0":58,"d1":59,"length":7,"color":"A3A3A3"},
    {"d0":57,"d1":58,"length":7,"color":"A3A3A3"},
    {"d0":56,"d1":57,"length":7,"color":"A3A3A3"},
    {"d0":55,"d1":56,"length":7,"color":"A3A3A3"},
    {"d0":53,"d1":55,"length":7,"color":"A3A3A3"},
    {"d0":53,"d1":54,"length":7,"color":"A3A3A3"},
    {"d0":52,"d1":54,"length":7,"color":"A3A3A3"},
    {"d0":51,"d1":52,"length":7,"color":"A3A3A3"},
    {"d0":50,"d1":51,"length":7,"color":"A3A3A3"},
    {"d0":49,"d1":50,"length":7,"color":"A3A3A3"},
    {"d0":48,"d1":49,"length":7,"color":"A3A3A3"},
    {"d0":47,"d1":48,"length":7,"color":"A3A3A3"},
    {"d0":46,"d1":47,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":45,"d1":46,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":44,"d1":45,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":43,"d1":44,"length":7.0041543026705995,"color":"A3A3A3"},
    {"d0":42,"d1":43,"length":7.004154302670713,"color":"A3A3A3"},
    {"d0":4,"d1":42,"length":7.478931750741822,"color":"A3A3A3"}
],
"kickOffReset":"full"}`
const stadium4x = `{"name" : "𝒙4 ${botVersion}",
	"width" : 800,
	"height" : 350,
    "bg" : { "width" : 700, "height" : 320, "kickOffRadius" : 80, "color" : "1E472E" }
	"vertexes" : [
		/* 0 */ { "x" : -700, "y" : 321, "cMask" : ["ball" ] },
		/* 1 */ { "x" : -700, "y" : -319, "cMask" : ["ball" ] },
		/* 2 */ { "x" : 699, "y" : 319, "cMask" : ["ball" ] },
		/* 3 */ { "x" : 601, "y" : -320, "cMask" : ["ball" ] },
		/* 4 */ { "x" : 0, "y" : 350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 5 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 6 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 7 */ { "x" : 0, "y" : -350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 8 */ { "x" : -700, "y" : -99, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 9 */ { "x" : -750, "y" : -99, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 10 */ { "x" : -750, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 11 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 12 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 13 */ { "x" : 749, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 14 */ { "x" : 749, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 15 */ { "x" : 699, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 16 */ { "x" : -700, "y" : 90, "bCoef" : 1.25, "cMask" : ["ball" ] },
		/* 17 */ { "x" : -700, "y" : 321, "bCoef" : 1.25, "cMask" : ["ball" ] },
		/* 18 */ { "x" : -700, "y" : -99, "bCoef" : 1.25, "cMask" : ["ball" ] },
		/* 19 */ { "x" : -700, "y" : -319, "bCoef" : 1.25, "cMask" : ["ball" ] },
		/* 20 */ { "x" : -700, "y" : 321, "bCoef" : 2, "cMask" : ["ball" ] },
		/* 21 */ { "x" : 699, "y" : 319, "bCoef" : 2, "cMask" : ["ball" ] },
		/* 22 */ { "x" : 699, "y" : 90, "bCoef" : 1.25, "cMask" : ["ball" ] },
		/* 23 */ { "x" : 699, "y" : 319, "bCoef" : 1.25, "cMask" : ["ball" ] },
		/* 24 */ { "x" : 699, "y" : -321, "bCoef" : 1.25, "cMask" : ["ball" ] },
		/* 25 */ { "x" : 699, "y" : -90, "bCoef" : 1.25, "cMask" : ["ball" ] },
		/* 26 */ { "x" : 601, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 27 */ { "x" : 601, "y" : -320, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 28 */ { "x" : -699, "y" : -320, "bCoef" : 2, "cMask" : ["ball" ] },
		/* 29 */ { "x" : 699, "y" : -321, "bCoef" : 2, "cMask" : ["ball" ] },
		/* 30 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 31 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 32 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 33 */ { "x" : 0, "y" : 320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 34 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 35 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 36 */ { "x" : 0, "y" : -150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 37 */ { "x" : 0, "y" : 90, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 38 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 39 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 40 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 41 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 42 */ { "x" : -710, "y" : 90, "cMask" : ["ball" ] },
		/* 43 */ { "x" : -710, "y" : 321, "cMask" : ["ball" ] },
		/* 44 */ { "x" : -710, "y" : 90, "cMask" : ["ball" ] },
		/* 45 */ { "x" : -710, "y" : 321, "cMask" : ["ball" ] },
		/* 46 */ { "x" : -710, "y" : -315, "cMask" : ["ball" ] },
		/* 47 */ { "x" : -710, "y" : -99, "cMask" : ["ball" ] },
		/* 48 */ { "x" : 710, "y" : -90, "cMask" : ["ball" ] },
		/* 49 */ { "x" : 709, "y" : -317, "cMask" : ["ball" ] },
		/* 50 */ { "x" : 709, "y" : -90, "cMask" : ["ball" ] },
		/* 51 */ { "x" : 709, "y" : 94, "cMask" : ["ball" ] },
		/* 52 */ { "x" : 709, "y" : 319, "cMask" : ["ball" ] },
		/* 53 */ { "x" : -699, "y" : 274, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 54 */ { "x" : -506, "y" : 141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 55 */ { "x" : -506, "y" : 141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 56 */ { "x" : -506, "y" : -141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 57 */ { "x" : -506, "y" : -141, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 58 */ { "x" : -699, "y" : -274, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 59 */ { "x" : 698, "y" : 273, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
		/* 60 */ { "x" : 505, "y" : 140, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
		/* 61 */ { "x" : 505, "y" : 140, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
		/* 62 */ { "x" : 505, "y" : -142, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
		/* 63 */ { "x" : 505, "y" : -142, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
		/* 64 */ { "x" : 698, "y" : -275, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
		/* 65 */ { "x" : -701, "y" : 90, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 66 */ { "x" : -701, "y" : -90, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 67 */ { "x" : 699, "y" : 90, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
		/* 68 */ { "x" : 699, "y" : -90, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO","blueKO" ] },
		/* 69 */ { "x" : -713, "y" : 90, "cMask" : ["ball" ] },
		/* 70 */ { "x" : -713, "y" : 321, "cMask" : ["ball" ] },
		/* 71 */ { "x" : -713, "y" : -315, "cMask" : ["ball" ] },
		/* 72 */ { "x" : -713, "y" : -99, "cMask" : ["ball" ] },
		/* 73 */ { "x" : 712, "y" : -317, "cMask" : ["ball" ] },
		/* 74 */ { "x" : 712, "y" : -90, "cMask" : ["ball" ] },
		/* 75 */ { "x" : 712, "y" : 94, "cMask" : ["ball" ] },
		/* 76 */ { "x" : 712, "y" : 319, "cMask" : ["ball" ] },
		/* 77 */ { "x" : 704, "y" : -317, "cMask" : ["ball" ] },
		/* 78 */ { "x" : 704, "y" : -90, "cMask" : ["ball" ] },
		/* 79 */ { "x" : 704, "y" : -317, "cMask" : ["ball" ] },
		/* 80 */ { "x" : 704, "y" : -90, "cMask" : ["ball" ] },
		/* 81 */ { "x" : 704, "y" : 94, "cMask" : ["ball" ] },
		/* 82 */ { "x" : 704, "y" : 319, "cMask" : ["ball" ] },
		/* 83 */ { "x" : 704, "y" : 94, "cMask" : ["ball" ] },
		/* 84 */ { "x" : 704, "y" : 319, "cMask" : ["ball" ] },
		/* 85 */ { "x" : -705, "y" : 90, "cMask" : ["ball" ] },
		/* 86 */ { "x" : -705, "y" : 321, "cMask" : ["ball" ] },
		/* 87 */ { "x" : -705, "y" : 90, "cMask" : ["ball" ] },
		/* 88 */ { "x" : -705, "y" : 321, "cMask" : ["ball" ] },
		/* 89 */ { "x" : -705, "y" : -315, "cMask" : ["ball" ] },
		/* 90 */ { "x" : -705, "y" : -99, "cMask" : ["ball" ] },
		/* 91 */ { "x" : -705, "y" : -315, "cMask" : ["ball" ] },
		/* 92 */ { "x" : -705, "y" : -99, "cMask" : ["ball" ] },
		/* 93 */ { "x" : -699, "y" : 319.88890075683594, "bCoef" : 2, "cMask" : ["ball" ] },
		/* 94 */ { "x" : 699, "y" : 318.88890075683594, "bCoef" : 2, "cMask" : ["ball" ] }

	],

	"segments" : [
		{ "v0" : 8, "v1" : 9, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "v0" : 9, "v1" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "v0" : 10, "v1" : 11, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "v0" : 12, "v1" : 13, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "v0" : 13, "v1" : 14, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "v0" : 14, "v1" : 15, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 5, "v1" : 6, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 6, "v1" : 5, "curve" : 180, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 6, "v1" : 7, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 16, "v1" : 17, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ] },
		{ "v0" : 18, "v1" : 19, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ] },
		{ "v0" : 22, "v1" : 23, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ] },
		{ "v0" : 24, "v1" : 25, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ] },
		{ "v0" : 26, "v1" : 27, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 28, "v1" : 29, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ] },
		{ "v0" : 30, "v1" : 31, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 32, "v1" : 33, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 42, "v1" : 43, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 44, "v1" : 45, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 46, "v1" : 47, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 49, "v1" : 50, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 51, "v1" : 52, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 54, "v1" : 53, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
		{ "v0" : 56, "v1" : 55, "curve" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 11.430052302761343 },
		{ "v0" : 58, "v1" : 57, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
		{ "v0" : 59, "v1" : 60, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
		{ "v0" : 61, "v1" : 62, "curve" : 10, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 11.430052302761343 },
		{ "v0" : 63, "v1" : 64, "curve" : 89.99999999999997, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curveF" : 1.0000000000000004 },
		{ "v0" : 65, "v1" : 66, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["redKO" ] },
		{ "v0" : 67, "v1" : 68, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 69, "v1" : 70, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 71, "v1" : 72, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 73, "v1" : 74, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 75, "v1" : 76, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 77, "v1" : 78, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 79, "v1" : 80, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 81, "v1" : 82, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 83, "v1" : 84, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 85, "v1" : 86, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 87, "v1" : 88, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 89, "v1" : 90, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 91, "v1" : 92, "vis" : false, "color" : "F8F8F8", "cMask" : ["ball" ] },
		{ "v0" : 93, "v1" : 94, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -320, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -317.5, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -800, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -800, "bCoef" : 0.1 }

	],

	"goals" : [
		{ "p0" : [-707,-94 ], "p1" : [-707,86 ], "team" : "red" },
		{ "p0" : [706,90 ], "p1" : [706,-90 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFCC00", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 6, "invMass" : 0, "pos" : [-700,89 ], "color" : "FF0000" },
		{ "radius" : 6, "invMass" : 0, "pos" : [-700,-99 ], "color" : "FF0000" },
		{ "radius" : 6, "invMass" : 0, "pos" : [700,90 ], "color" : "33FF" },
		{ "radius" : 6, "invMass" : 0, "pos" : [701,-89 ], "color" : "33FF" }

	],

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083

	},

	"ballPhysics" : "disc0",

	"spawnDistance" : 350
}`
/* VOTE */
const allmediumstadiums = [mediumStadium, mediumdark, medium2, mediumStadium, mediumdark];
let randstadiumsfor3x = Math.floor(Math.random() * allmediumstadiums.length);
room.setCustomStadium(mediumStadium);
var forspeedx = 0;
var fordark = 0;
var foruseless = 0;
let r1vote = true;
let r2vote = true;
let r3vote = true;
let b1vote = true;
let b2vote = true;
let b3vote = true;
var votedS = mediumStadium;
function stadPeq() {
    let stadPeq = `{"name" : "𝒙2 ${botVersion} ${speedvelocity}",

	"width" : 420,

	"height" : 200,

	"canBeStored" : false,

	"bg" : { "width" : 368, "height" : 171, "kickOffRadius" : 65, "color" : "1E472E" },

	"vertexes" : [
		/* 0 */ { "x" : -368, "y" : 171, "cMask" : ["ball" ] },
		/* 1 */ { "x" : -368, "y" : 65, "cMask" : ["ball" ] },
		/* 2 */ { "x" : -368, "y" : -65, "cMask" : ["ball" ] },
		/* 3 */ { "x" : -368, "y" : -171, "cMask" : ["ball" ] },
		/* 4 */ { "x" : 368, "y" : 171, "cMask" : ["ball" ] },
		/* 5 */ { "x" : 368, "y" : 65, "cMask" : ["ball" ] },
		/* 6 */ { "x" : 368, "y" : -65, "cMask" : ["ball" ] },
		/* 7 */ { "x" : 368, "y" : -171, "cMask" : ["ball" ] },
		/* 8 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 9 */ { "x" : 0, "y" : -65, "bCoef" : 0, "cMask" : [ ] },
		/* 10 */ { "x" : 368, "y" : 171, "cMask" : ["ball" ] },
		/* 11 */ { "x" : 368, "y" : -171, "cMask" : ["ball" ] },
		/* 12 */ { "x" : 0, "y" : 171, "bCoef" : 0, "cMask" : [ ] },
		/* 13 */ { "x" : 0, "y" : -171, "bCoef" : 0, "cMask" : [ ] },
		/* 14 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 15 */ { "x" : 0, "y" : -65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 16 */ { "x" : 377, "y" : -65, "cMask" : ["ball" ] },
		/* 17 */ { "x" : 377, "y" : -171, "cMask" : ["ball" ] },
		/* 18 */ { "x" : -377, "y" : -65, "cMask" : ["ball" ] },
		/* 19 */ { "x" : -377, "y" : -171, "cMask" : ["ball" ] },
		/* 20 */ { "x" : -377, "y" : 65, "cMask" : ["ball" ] },
		/* 21 */ { "x" : -377, "y" : 171, "cMask" : ["ball" ] },
		/* 22 */ { "x" : 377, "y" : 65, "cMask" : ["ball" ] },
		/* 23 */ { "x" : 377, "y" : 171, "cMask" : ["ball" ] },
		/* 24 */ { "x" : 0, "y" : 199, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 25 */ { "x" : 0, "y" : 65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 26 */ { "x" : 0, "y" : -65, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 27 */ { "x" : 0, "y" : -199, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 28 */ { "x" : -368.53340356886, "y" : -62.053454903872, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 29 */ { "x" : -400.05760771891, "y" : -62.053454903872, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 30 */ { "x" : -400.05760771891, "y" : 64.043361696331, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 31 */ { "x" : -368.53340356886, "y" : 64.043361696331, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 32 */ { "x" : 368.09926357786, "y" : 63.94882446641, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 33 */ { "x" : 400, "y" : 64, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 34 */ { "x" : 400, "y" : -61.927767991658, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 35 */ { "x" : 368.9681846993, "y" : -62.144998272018, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 36 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "cMask" : [ ] },
		/* 37 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },
		/* 38 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "cMask" : [ ] },
		/* 39 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "cMask" : [ ] },
		/* 40 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "cMask" : [ ] },
		/* 41 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },
		/* 42 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "cMask" : [ ] },
		/* 43 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "cMask" : [ ] },
		/* 44 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "cMask" : [ ] },
		/* 45 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "cMask" : [ ] },
		/* 46 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "cMask" : [ ] },
		/* 47 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "cMask" : [ ] },
		/* 48 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "cMask" : [ ] },
		/* 49 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },
		/* 50 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "cMask" : [ ] },
		/* 51 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },
		/* 52 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "cMask" : [ ] },
		/* 53 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "cMask" : [ ] },
		/* 54 */ { "x" : -250.86909422732, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },
		/* 55 */ { "x" : -250.86909422732, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },
		/* 56 */ { "x" : -250.86909422732, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },
		/* 57 */ { "x" : -250.86909422732, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },
		/* 58 */ { "x" : -250.86909422732, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },
		/* 59 */ { "x" : -250.86909422732, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },
		/* 60 */ { "x" : -250.86909422732, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },
		/* 61 */ { "x" : -250.86909422732, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },
		/* 62 */ { "x" : 250.69382348534, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },
		/* 63 */ { "x" : 250.69382348534, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },
		/* 64 */ { "x" : 250.69382348534, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },
		/* 65 */ { "x" : 250.69382348534, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },
		/* 66 */ { "x" : 250.69382348534, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },
		/* 67 */ { "x" : 250.69382348534, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },
		/* 68 */ { "x" : 250.69382348534, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },
		/* 69 */ { "x" : 250.69382348534, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },
		/* 70 */ { "x" : -185.66591492467, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },
		/* 71 */ { "x" : -185.66591492467, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },
		/* 72 */ { "x" : -185.66591492467, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },
		/* 73 */ { "x" : -185.66591492467, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },
		/* 74 */ { "x" : -185.66591492467, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },
		/* 75 */ { "x" : -185.66591492467, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },
		/* 76 */ { "x" : -185.66591492467, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },
		/* 77 */ { "x" : -185.66591492467, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },
		/* 78 */ { "x" : 185.49064418269, "y" : -1.2295321189394, "bCoef" : 0.1, "cMask" : [ ] },
		/* 79 */ { "x" : 185.49064418269, "y" : 0.18898812539692, "bCoef" : 0.1, "cMask" : [ ] },
		/* 80 */ { "x" : 185.49064418269, "y" : -2.6480523632758, "bCoef" : 0.1, "cMask" : [ ] },
		/* 81 */ { "x" : 185.49064418269, "y" : 1.6075083697333, "bCoef" : 0.1, "cMask" : [ ] },
		/* 82 */ { "x" : 185.49064418269, "y" : 0.89824824756514, "bCoef" : 0.1, "cMask" : [ ] },
		/* 83 */ { "x" : 185.49064418269, "y" : -1.9387922411076, "bCoef" : 0.1, "cMask" : [ ] },
		/* 84 */ { "x" : 185.49064418269, "y" : 1.9621384308174, "bCoef" : 0.1, "cMask" : [ ] },
		/* 85 */ { "x" : 185.49064418269, "y" : -3.0026824243599, "bCoef" : 0.1, "cMask" : [ ] },
		/* 86 */ { "x" : 377, "y" : -65, "cMask" : ["ball" ] },
		/* 87 */ { "x" : 377, "y" : -171, "cMask" : ["ball" ] },
		/* 88 */ { "x" : -377, "y" : -65, "cMask" : ["ball" ] },
		/* 89 */ { "x" : -377, "y" : -171, "cMask" : ["ball" ] },
		/* 90 */ { "x" : -377, "y" : 65, "cMask" : ["ball" ] },
		/* 91 */ { "x" : -377, "y" : 171, "cMask" : ["ball" ] },
		/* 92 */ { "x" : 377, "y" : 65, "cMask" : ["ball" ] },
		/* 93 */ { "x" : 377, "y" : 171, "cMask" : ["ball" ] },
		/* 94 */ { "x" : 371, "y" : -65, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 95 */ { "x" : 371, "y" : -171, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 96 */ { "x" : 371, "y" : 65, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 97 */ { "x" : 371, "y" : 171, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 98 */ { "x" : -371, "y" : 65, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 99 */ { "x" : -371, "y" : 171, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 100 */ { "x" : -371, "y" : -65, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 101 */ { "x" : -371, "y" : -171, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 102 */ { "x" : 18.693012242141236, "y" : -21.095499558119467, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 103 */ { "x" : -21.5474775317698, "y" : 17.907288577307238, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 104 */ { "x" : 21.951709783491452, "y" : -22.012297468400718, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 105 */ { "x" : -22.074276143274176, "y" : 20.659553972835525, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 106 */ { "x" : 21.190345317583223, "y" : -18.67377293786363, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 107 */ { "x" : -19.050144456327814, "y" : 20.32901519756308, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 108 */ { "x" : -21.991599078617213, "y" : -22.622872003341442, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 109 */ { "x" : 20.697109823035476, "y" : 21.420506332939798, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 110 */ { "x" : -18.38488915048987, "y" : -22.55279848177398, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 111 */ { "x" : 20.622033124087665, "y" : 17.69195662269868, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 112 */ { "x" : -21.531907888512762, "y" : -18.949264858604902, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" },
		/* 113 */ { "x" : 17.475014386064785, "y" : 21.295490245867757, "bCoef" : 0.1, "cMask" : [ ], "color" : "bb2929" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : false, "cMask" : ["ball" ] },
		{ "v0" : 2, "v1" : 3, "vis" : false, "cMask" : ["ball" ] },
		{ "v0" : 4, "v1" : 5, "vis" : false, "cMask" : ["ball" ] },
		{ "v0" : 6, "v1" : 7, "vis" : false, "cMask" : ["ball" ] },
		{ "v0" : 8, "v1" : 9, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 9, "v1" : 8, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 1, "v1" : 0, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 5, "v1" : 4, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 2, "v1" : 3, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 6, "v1" : 7, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 0, "v1" : 10, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 3, "v1" : 11, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 12, "v1" : 13, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 8, "v1" : 9, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 15, "v1" : 14, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 2, "v1" : 1, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 6, "v1" : 5, "color" : "A3A3A3", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 16, "v1" : 17, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 18, "v1" : 19, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 20, "v1" : 21, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 22, "v1" : 23, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 24, "v1" : 25, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 26, "v1" : 27, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 28, "v1" : 29, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 29, "v1" : 30, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 30, "v1" : 31, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 32, "v1" : 33, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 33, "v1" : 34, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 34, "v1" : 35, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 36, "v1" : 37, "curve" : 94.0263701017, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101076 },
		{ "v0" : 39, "v1" : 38, "curve" : 86.632306418889, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.060575000344919 },
		{ "v0" : 41, "v1" : 40, "curve" : 94.026370101699, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },
		{ "v0" : 37, "v1" : 41, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 42, "v1" : 43, "curve" : 86.632306418888, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003449375 },
		{ "v0" : 45, "v1" : 44, "curve" : 86.632306418884, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003450118 },
		{ "v0" : 46, "v1" : 47, "curve" : 86.632306418899, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0605750003447336 },
		{ "v0" : 49, "v1" : 48, "curve" : 94.026370101699, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },
		{ "v0" : 50, "v1" : 51, "curve" : 94.026370101699, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9320849449101238 },
		{ "v0" : 52, "v1" : 53, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 54, "v1" : 55, "curve" : -179.99307079708004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.000060468702819980624 },
		{ "v0" : 55, "v1" : 54, "curve" : -179.99781759386002, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.000019045086381751383 },
		{ "v0" : 56, "v1" : 57, "curve" : 179.64823645332, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0030697256812038513 },
		{ "v0" : 57, "v1" : 56, "curve" : -179.64241331853003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.003120542605465436 },
		{ "v0" : 58, "v1" : 59, "curve" : -179.97642676038004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00020571532626703233 },
		{ "v0" : 59, "v1" : 58, "curve" : -179.99075897601003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00008064314761547242 },
		{ "v0" : 60, "v1" : 61, "curve" : -179.93114244115003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0006008956307319741 },
		{ "v0" : 61, "v1" : 60, "curve" : -179.97051646743003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0002572923649102433 },
		{ "v0" : 62, "v1" : 63, "curve" : 179.99869069543, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000011425837829318613 },
		{ "v0" : 63, "v1" : 62, "curve" : 179.99939258776004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000005300671752306162 },
		{ "v0" : 64, "v1" : 65, "curve" : -179.91173952837002, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0007702180669602502 },
		{ "v0" : 65, "v1" : 64, "curve" : 179.91186753664, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0007691009834080061 },
		{ "v0" : 66, "v1" : 67, "curve" : 179.99528711105, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000041127714752444664 },
		{ "v0" : 67, "v1" : 66, "curve" : 179.99743836358, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000022354494887865286 },
		{ "v0" : 68, "v1" : 69, "curve" : 179.98626041101, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.00011990053344777071 },
		{ "v0" : 69, "v1" : 68, "curve" : 179.99175181595, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0000719789846157737 },
		{ "v0" : 70, "v1" : 71, "curve" : -179.95284437602004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0004115104728700557 },
		{ "v0" : 71, "v1" : 70, "curve" : 179.95294709391, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0004106140900279739 },
		{ "v0" : 72, "v1" : 73, "curve" : 179.95715750564, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0003738713105943949 },
		{ "v0" : 73, "v1" : 72, "curve" : 179.89943871875, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0008775629541936324 },
		{ "v0" : 74, "v1" : 75, "curve" : 179.94773754738, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0004560759683152962 },
		{ "v0" : 75, "v1" : 74, "curve" : 179.98221351296, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0001552163818523414 },
		{ "v0" : 76, "v1" : 77, "curve" : -179.58482727820004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.003623081332869217 },
		{ "v0" : 77, "v1" : 76, "curve" : 179.58764458796, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.0035984953466450956 },
		{ "v0" : 78, "v1" : 79, "curve" : -179.99913353641003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.0000075613212472121415 },
		{ "v0" : 79, "v1" : 78, "curve" : -179.98034013624, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00017156467823623532 },
		{ "v0" : 80, "v1" : 81, "curve" : -179.96467398611003, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00030827763675859586 },
		{ "v0" : 81, "v1" : 80, "curve" : 179.99380079, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.000054098312814100194 },
		{ "v0" : 82, "v1" : 83, "curve" : -179.99555315480004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00003880604505256444 },
		{ "v0" : 83, "v1" : 82, "curve" : -179.98613220153004, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00012101937224284073 },
		{ "v0" : 84, "v1" : 85, "curve" : -179.94841712437002, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00045014553909957075 },
		{ "v0" : 85, "v1" : 84, "curve" : -179.98787776122, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : -0.00010578649010659523 },
		{ "v0" : 86, "v1" : 87, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 88, "v1" : 89, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 90, "v1" : 91, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 92, "v1" : 93, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 94, "v1" : 95, "vis" : false, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 96, "v1" : 97, "vis" : false, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 98, "v1" : 99, "vis" : false, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 100, "v1" : 101, "vis" : false, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 102, "v1" : 103, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ], "y" : -40 },
		{ "v0" : 104, "v1" : 105, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ], "y" : -45 },
		{ "v0" : 106, "v1" : 107, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ], "y" : -40 },
		{ "v0" : 108, "v1" : 109, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 110, "v1" : 111, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 112, "v1" : 113, "color" : "bb2929", "bCoef" : 0.1, "cMask" : [ ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -171, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -171, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.2 },
		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.2 },
		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2 },
		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2 }

	],

	"goals" : [
		{ "p0" : [-374.25,-62.053454903872 ], "p1" : [-374.25,64.043361696331 ], "team" : "red" },
		{ "p0" : [374.25,62 ], "p1" : [374.25,-62 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "c68a30", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [-368.53340356886,64.043361696331 ], "color" : "ffcc00", "bCoef" : 1 },
		{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [-368.53340356886,-62.053454903872 ], "color" : "ffcc00", "bCoef" : 1 },
		{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [368.9681846993,-62.144998272018 ], "color" : "ffcc00", "bCoef" : 1 },
		{ "radius" : 3.9405255187564, "invMass" : 0, "pos" : [368.09926357786,63.94882446641 ], "color" : "ffcc00", "bCoef" : 1 },
		{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] }

	],

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : ${velocitypadrao},
		"kickingAcceleration" : ${speedvelocity},
		"kickStrength" : 4.75

	},

	"ballPhysics" : "disc0",

	"spawnDistance" : 180,

	"traits" : {
		

	},

	"joints" : [
		

	],

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	]
    }`;
    return stadPeq;
}
function stadSpeed() {
    let stadSpeed = `{

	"name" : "𝒙3 ${botVersion} ${speedvelocity}",

	"width" : 620,

	"height" : 270,

	"canBeStored" : false,

	"bg" : { "width" : 550, "height" : 240, "kickOffRadius" : 80, "color" : "1E472E" },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
		/* 1 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
		/* 2 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 3 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 4 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 5 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 6 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 7 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 8 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 9 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 10 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 11 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 12 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		/* 13 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 14 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 15 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 16 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 17 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ] },
		/* 18 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
		/* 19 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 20 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 21 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 22 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ] },
		/* 23 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 25 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ] },
		/* 26 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
		/* 27 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 28 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 29 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 30 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 31 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 32 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 34 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 35 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 36 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 37 */ { "x" : -557.5, "y" : 80, "cMask" : ["ball" ] },
		/* 38 */ { "x" : -557.5, "y" : 240, "cMask" : ["ball" ] },
		/* 39 */ { "x" : -557.5, "y" : -240, "cMask" : ["ball" ] },
		/* 40 */ { "x" : -557.5, "y" : -80, "cMask" : ["ball" ] },
		/* 41 */ { "x" : 557.5, "y" : -240, "cMask" : ["ball" ] },
		/* 42 */ { "x" : 557.5, "y" : -80, "cMask" : ["ball" ] },
		/* 43 */ { "x" : 557.5, "y" : 80, "cMask" : ["ball" ] },
		/* 44 */ { "x" : 557.5, "y" : 240, "cMask" : ["ball" ] },
		/* 45 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 46 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 47 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 48 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 49 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 50 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
		/* 51 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 52 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 53 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 54 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 55 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 56 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 57 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 58 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 59 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 60 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 61 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ] },
		/* 62 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ] },
		/* 63 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 64 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 65 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ] },
		/* 66 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 67 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 68 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ] },
		/* 69 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 70 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 71 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 72 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 73 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 74 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 75 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 76 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 77 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 78 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 79 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 80 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 81 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 82 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 83 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 84 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 85 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 86 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 87 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 88 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 89 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 90 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 91 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 92 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 93 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 94 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ] },
		/* 95 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 96 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ] },
		/* 97 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 98 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ] },
		/* 99 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 100 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ] },
		/* 101 */ { "x" : 276.86203618166985, "y" : 0.03387524642882023, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0 },
		/* 102 */ { "x" : 22.897185791684848, "y" : -19.104767756564833, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 103 */ { "x" : 35.287248852513954, "y" : -34.96404847442614, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 104 */ { "x" : 20.419173179518964, "y" : -24.55639550332966, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 105 */ { "x" : 27.853211016016502, "y" : -34.96404847442614, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 106 */ { "x" : 35.287248852513954, "y" : -3.24548703870353, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 107 */ { "x" : 22.897185791684848, "y" : -19.600370278998, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 108 */ { "x" : 5.551097506524002, "y" : -3.24548703870353, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 109 */ { "x" : 17.94116056735311, "y" : -19.476346228931618, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 110 */ { "x" : 20.91477570195218, "y" : -24.55639550332966, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 111 */ { "x" : 12.985135343021511, "y" : -34.96404847442614, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 112 */ { "x" : 17.94116056735311, "y" : -18.98074370649845, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 113 */ { "x" : 5.551097506524002, "y" : -34.840024424359754, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 114 */ { "x" : 27.853211016016502, "y" : -3.24548703870353, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 115 */ { "x" : 20.419173179518964, "y" : -14.148742532233179, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 116 */ { "x" : 12.985135343021511, "y" : -3.24548703870353, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 117 */ { "x" : 20.91477570195218, "y" : -14.148742532233179, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "e56e56" },
		/* 118 */ { "x" : -41.1732125761431, "y" : -23.2104491238402, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 119 */ { "x" : -39.1732125761431, "y" : -23.2104491238402, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 120 */ { "x" : -37.1732125761431, "y" : -23.2104491238402, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 121 */ { "x" : -35.1732125761431, "y" : -23.2104491238402, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 122 */ { "x" : -41.1732125761431, "y" : -23.2104491238402, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 123 */ { "x" : -12.350964481226526, "y" : -23.2104491238402, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 124 */ { "x" : -37.546127818106356, "y" : -20.73735111192235, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 125 */ { "x" : -10.1732125761431, "y" : -21.210449123840192, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 126 */ { "x" : -37.073029806188515, "y" : -19.05274978653423, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 127 */ { "x" : -8.1732125761431, "y" : -19.210449123840185, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 128 */ { "x" : -33.15486207320748, "y" : -2.3733462063933146, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 129 */ { "x" : -21.334059349872746, "y" : -2.2156468690873865, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 130 */ { "x" : -30.63167267631232, "y" : -4.195506078219928, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 131 */ { "x" : -19.810869952977555, "y" : -4.037806740913972, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 132 */ { "x" : -36.134453152864296, "y" : -16.61665035542253, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 133 */ { "x" : -14.1732125761431, "y" : -16.932049030034413, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 134 */ { "x" : -33.62796008512532, "y" : -6.175718560415966, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 135 */ { "x" : -22.15755417968782, "y" : -6.018019223110038, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 136 */ { "x" : -32.57250141876614, "y" : 18.65290855099032, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 137 */ { "x" : -39.75042290286774, "y" : -23.969722633051255, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 138 */ { "x" : -27.162270642801047, "y" : 36.91234067919317, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 139 */ { "x" : -37.783761589147446, "y" : -24.33337532053728, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 140 */ { "x" : -27.33288969553132, "y" : 24.990113676388958, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 141 */ { "x" : -35.817100275427094, "y" : -24.69702800802333, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 142 */ { "x" : -24.49231204954293, "y" : 29.352666792527046, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 143 */ { "x" : -33.85043896170674, "y" : -24.060680695509355, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 144 */ { "x" : -20.484825699150093, "y" : 12.30238997029032, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 145 */ { "x" : -21.738093934347177, "y" : 4.027279066091687, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 146 */ { "x" : -18.38489497096066, "y" : 11.865273373314452, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 147 */ { "x" : -19.638163206157742, "y" : 3.5901624691158176, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 148 */ { "x" : -11.746249633989919, "y" : 12.01111122641656, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 149 */ { "x" : -13.254795183243573, "y" : 3.0785696318308666, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 150 */ { "x" : -11.530483578086091, "y" : 11.361089356169359, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 151 */ { "x" : -20.572708689188516, "y" : 11.657380939445218, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 152 */ { "x" : -9.326233457366811, "y" : 11.236104242219099, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 153 */ { "x" : -18.368458568469237, "y" : 11.532395825494959, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 154 */ { "x" : -9.489305036317432, "y" : 11.588682235668088, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 155 */ { "x" : -10.997850585571086, "y" : 2.656140641082395, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 156 */ { "x" : 8.702204793740748, "y" : -3.9324531968253282, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 157 */ { "x" : -12.08255409601884, "y" : -3.9324531968253282, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 158 */ { "x" : 6.967512083375368, "y" : -0.9361657880123531, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 159 */ { "x" : -13.817246806384219, "y" : -0.9361657880123531, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 160 */ { "x" : 11.406084312363419, "y" : -2.19776048645992, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 161 */ { "x" : -14.921142167525886, "y" : -2.19776048645992, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 162 */ { "x" : 0.44802880893735164, "y" : 13.223629919029307, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 163 */ { "x" : -1.7767585660315035, "y" : -0.8947635605731037, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 164 */ { "x" : -2.772418973524964, "y" : 11.952562211926463, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 165 */ { "x" : -4.997206348493819, "y" : -2.165831267675948, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 166 */ { "x" : -0.8664114357976587, "y" : 16.154904401851283, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 167 */ { "x" : -3.9133068734846574, "y" : -3.4446463753346066, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 168 */ { "x" : 25.222416763853175, "y" : -4.576097819037507, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 169 */ { "x" : 4.437657874093588, "y" : -4.576097819037507, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 170 */ { "x" : 26.920495371952597, "y" : -3.296196069456961, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 171 */ { "x" : 6.135736482193124, "y" : -3.296196069456961, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 172 */ { "x" : 25.35171779362713, "y" : -1.1250194494396695, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 173 */ { "x" : -0.9755086862621738, "y" : -1.1250194494396695, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 174 */ { "x" : 21.555171898466483, "y" : -3.5504915846601435, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 175 */ { "x" : 7.216771915091158, "y" : 11.496650603216679, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 176 */ { "x" : 32.43180863796101, "y" : 12.176969409611829, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 177 */ { "x" : 6.1045821580717075, "y" : 12.176969409611829, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 178 */ { "x" : 22.072350269036633, "y" : -0.9831708811331694, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 179 */ { "x" : 7.733950285661365, "y" : 14.063971306743653, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 180 */ { "x" : 24.062277057215397, "y" : -0.2724023479120845, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 181 */ { "x" : 9.723877073840072, "y" : 14.774739839964738, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 182 */ { "x" : 30.929971186132548, "y" : 14.322451483652387, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 183 */ { "x" : 4.602744706243243, "y" : 14.322451483652387, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 184 */ { "x" : 34.14819429719341, "y" : 15.253385350288895, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 185 */ { "x" : 7.820967817304108, "y" : 15.253385350288895, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "3e935e" },
		/* 186 */ { "x" : -0.01683125859405976, "y" : 268.89858408402245, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 187 */ { "x" : -0.01683125859405976, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }

	],

	"segments" : [
		{ "v0" : 5, "v1" : 6, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 6, "v1" : 7, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 7, "v1" : 8, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 9, "v1" : 10, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 10, "v1" : 11, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 11, "v1" : 12, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 2, "v1" : 3, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 3, "v1" : 2, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 3, "v1" : 4, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 13, "v1" : 14, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 15, "v1" : 16, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 17, "v1" : 18, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 19, "v1" : 20, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 21, "v1" : 22, "color" : "A3A3A3", "bCoef" : 1.15, "cMask" : ["ball" ] },
		{ "v0" : 23, "v1" : 24, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 25, "v1" : 26, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 27, "v1" : 28, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 29, "v1" : 30, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 37, "v1" : 38, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 39, "v1" : 40, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 41, "v1" : 42, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 43, "v1" : 44, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
		{ "v0" : 47, "v1" : 48, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 49, "v1" : 50, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 52, "v1" : 51, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 53, "v1" : 54, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 55, "v1" : 56, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 52, "v1" : 56, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 58, "v1" : 57, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 59, "v1" : 60, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 62, "v1" : 61, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 63, "v1" : 64, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 66, "v1" : 65, "curve" : 89.99999999999999, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
		{ "v0" : 67, "v1" : 68, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 70, "v1" : 69, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 69, "v1" : 70, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 72, "v1" : 71, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 71, "v1" : 72, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 74, "v1" : 73, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 73, "v1" : 74, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 76, "v1" : 75, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 75, "v1" : 76, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 78, "v1" : 77, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 77, "v1" : 78, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 80, "v1" : 79, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 79, "v1" : 80, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 82, "v1" : 81, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 81, "v1" : 82, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 84, "v1" : 83, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 83, "v1" : 84, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 86, "v1" : 85, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 85, "v1" : 86, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 88, "v1" : 87, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 87, "v1" : 88, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 90, "v1" : 89, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 89, "v1" : 90, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 92, "v1" : 91, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 94, "v1" : 93, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 93, "v1" : 94, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 96, "v1" : 95, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 95, "v1" : 96, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 98, "v1" : 97, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 97, "v1" : 98, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 100, "v1" : 99, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "color" : "A3A3A3", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "color" : "e56e56", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 122, "v1" : 123, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -25 },
		{ "v0" : 124, "v1" : 125, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -23 },
		{ "v0" : 126, "v1" : 127, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
		{ "v0" : 128, "v1" : 129, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -23 },
		{ "v0" : 130, "v1" : 131, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
		{ "v0" : 132, "v1" : 133, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
		{ "v0" : 134, "v1" : 135, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -4 },
		{ "v0" : 136, "v1" : 137, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 200 },
		{ "v0" : 138, "v1" : 139, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
		{ "v0" : 140, "v1" : 141, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 142, "v1" : 143, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
		{ "v0" : 144, "v1" : 145, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 146, "v1" : 147, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 148, "v1" : 149, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 150, "v1" : 151, "curve" : 188.38679109609015, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
		{ "v0" : 152, "v1" : 153, "curve" : 188.38679109609015, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 158, "v1" : 159, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 162, "v1" : 163, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 164, "v1" : 165, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 168, "v1" : 169, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 172, "v1" : 173, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 174, "v1" : 175, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 176, "v1" : 177, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 178, "v1" : 179, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "color" : "3e935e", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 91.76266812461527 },
		{ "v0" : 186, "v1" : 187, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -240, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] }

	],

	"goals" : [
		{ "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },
		{ "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFCC00", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 5, "invMass" : 0, "pos" : [-550,80 ], "color" : "FF6666" },
		{ "radius" : 5, "invMass" : 0, "pos" : [-550,-80 ], "color" : "FF6666" },
		{ "radius" : 5, "invMass" : 0, "pos" : [550,80 ], "color" : "6666FF" },
		{ "radius" : 5, "invMass" : 0, "pos" : [550,-80 ], "color" : "6666FF" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] }

	],

	"playerPhysics" : {
		"bCoef" : 0,
        "acceleration" : ${velocitypadrao},
        "kickingAcceleration" : ${speedvelocity},
		"kickStrength" : 4.75

	},

	"ballPhysics" : "disc0",

	"spawnDistance" : 350,

	"traits" : {
		

	},

	"joints" : [
		

	],

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	]
}`;
    return stadSpeed;
}
function stadDark() {
    let stadDark = `{"name" : "𝒙3 Dark ${botVersion} ${speedvelocity}",
    
        "width" : 620,
    
        "height" : 270,
    
        "canBeStored" : false,
    
        "bg" : {  "type" : "futsal", "width" : 550, "height" : 240, "kickOffRadius" : 80, "color" : "2e3035" },
    
        "vertexes" : [
            /* 0 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
            /* 1 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
            /* 2 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "64808f" },
            /* 3 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "64808f" },
            /* 4 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            /* 5 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
            /* 6 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
            /* 7 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
            /* 8 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
            /* 9 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
            /* 10 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
            /* 11 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
            /* 12 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue","ball" ], "color" : "ffffff" },
            /* 13 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "64808f" },
            /* 14 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "64808f" },
            /* 15 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "64808f" },
            /* 16 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "64808f" },
            /* 17 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ], "color" : "64808f" },
            /* 18 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ], "color" : "64808f" },
            /* 19 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "64808f" },
            /* 20 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "64808f" },
            /* 21 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "64808f" },
            /* 22 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "color" : "64808f" },
            /* 23 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
            /* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
            /* 25 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ], "color" : "64808f" },
            /* 26 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ], "color" : "64808f" },
            /* 27 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "64808f" },
            /* 28 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "64808f" },
            /* 29 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "64808f" },
            /* 30 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "64808f" },
            /* 31 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            /* 32 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            /* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            /* 34 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            /* 35 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            /* 36 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            /* 37 */ { "x" : -557.5, "y" : 80, "cMask" : ["ball" ] },
            /* 38 */ { "x" : -557.5, "y" : 240, "cMask" : ["ball" ] },
            /* 39 */ { "x" : -557.5, "y" : -240, "cMask" : ["ball" ] },
            /* 40 */ { "x" : -557.5, "y" : -80, "cMask" : ["ball" ] },
            /* 41 */ { "x" : 557.5, "y" : -240, "cMask" : ["ball" ] },
            /* 42 */ { "x" : 557.5, "y" : -80, "cMask" : ["ball" ] },
            /* 43 */ { "x" : 557.5, "y" : 80, "cMask" : ["ball" ] },
            /* 44 */ { "x" : 557.5, "y" : 240, "cMask" : ["ball" ] },
            /* 45 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : [ ] },
            /* 46 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : [ ] },
            /* 47 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 48 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 49 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 50 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 51 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 52 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 53 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 54 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 55 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 56 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 57 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 58 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 59 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 60 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 61 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 62 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 63 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 64 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 65 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 66 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 67 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 68 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "cMask" : [ ], "color" : "7ea2b5" },
            /* 69 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 70 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 71 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 72 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 73 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 74 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 75 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 76 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 77 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 78 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 79 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 80 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 81 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 82 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 83 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 84 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 85 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 86 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 87 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 88 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 89 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 90 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 91 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 92 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 93 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 94 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 95 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 96 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 97 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 98 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 99 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 100 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "cMask" : [ ], "color" : "64808f" },
            /* 101 */ { "x" : 276.86203618166985, "y" : 0.03387524642882023, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 102 */ { "x" : 31.521673188722858, "y" : -1.3974813251451366, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 103 */ { "x" : 43.911736249551964, "y" : -17.256762043006447, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 104 */ { "x" : 29.043660576557002, "y" : -6.8491090719099645, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 105 */ { "x" : 36.47769841305451, "y" : -17.256762043006447, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 106 */ { "x" : 43.911736249551964, "y" : 14.461799392716166, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 107 */ { "x" : 31.521673188722858, "y" : -1.8930838475783034, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 108 */ { "x" : 14.17558490356204, "y" : 14.461799392716166, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 109 */ { "x" : 26.565647964391147, "y" : -1.7690597975119218, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 110 */ { "x" : 29.53926309899022, "y" : -6.8491090719099645, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 111 */ { "x" : 21.60962274005955, "y" : -17.256762043006447, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 112 */ { "x" : 26.565647964391147, "y" : -1.273457275078755, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 113 */ { "x" : 14.17558490356204, "y" : -17.132737992940058, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 114 */ { "x" : 36.47769841305451, "y" : 14.461799392716166, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 115 */ { "x" : 29.043660576557002, "y" : 3.5585438991865175, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 116 */ { "x" : 21.60962274005955, "y" : 14.461799392716166, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 117 */ { "x" : 29.53926309899022, "y" : 3.5585438991865175, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "b1e4ff" },
            /* 118 */ { "x" : -14.310398662378944, "y" : 20.70105026180559, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 119 */ { "x" : -19.091194202873808, "y" : 27.46361752222056, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 120 */ { "x" : -11.192653767203993, "y" : 12.826535658381204, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 121 */ { "x" : -13.1938729873889, "y" : 21.033349233187835, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 122 */ { "x" : -9.353561239634146, "y" : 17.275592200231216, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 123 */ { "x" : -12.16625614787013, "y" : 12.425819841720397, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 124 */ { "x" : -2.4570255952353506, "y" : 24.126980624699897, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 125 */ { "x" : -2.264194698967472, "y" : 33.8505700695775, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 126 */ { "x" : -1.6327900995340912, "y" : 19.303891332058072, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 127 */ { "x" : -1.4394963223851533, "y" : 29.050821765004756, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 128 */ { "x" : -8.249699567627104, "y" : 19.619089566214853, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 129 */ { "x" : -0.15790826480350972, "y" : 19.458619260657173, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 130 */ { "x" : 16.86999806938472, "y" : 26.91866301165136, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 131 */ { "x" : 16.63073337487218, "y" : 22.862334850823572, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 132 */ { "x" : 15.930368625989715, "y" : 21.735896683337927, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 133 */ { "x" : 8.377970510148472, "y" : 27.753212547745406, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 134 */ { "x" : 29.563045119393493, "y" : 26.85092074390947, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 135 */ { "x" : 29.323780424881008, "y" : 22.794592583081567, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 136 */ { "x" : 28.623415675998544, "y" : 21.66815441559592, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 137 */ { "x" : 21.0710175601573, "y" : 27.685470280003514, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 138 */ { "x" : 38.97134327594959, "y" : 28.136155853890145, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 139 */ { "x" : 38.68466690024967, "y" : 21.68907117177332, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 140 */ { "x" : 39.0296961143341, "y" : 31.078625418553216, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 141 */ { "x" : 38.755512623670924, "y" : 15.984389337839502, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "7b9fb2" },
            /* 142 */ { "x" : -48.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 143 */ { "x" : -46.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 144 */ { "x" : -44.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 145 */ { "x" : -42.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 146 */ { "x" : -48.321260231770964, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 147 */ { "x" : -19.49901213685439, "y" : -28.770041744884075, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 148 */ { "x" : -44.69417547373422, "y" : -26.296943732966227, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 149 */ { "x" : -17.321260231770964, "y" : -26.770041744884068, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 150 */ { "x" : -44.22107746181638, "y" : -24.612342407578105, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 151 */ { "x" : -15.321260231770964, "y" : -24.77004174488406, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 152 */ { "x" : -40.302909728835346, "y" : -7.932938827437191, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 153 */ { "x" : -28.48210700550061, "y" : -7.775239490131263, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 154 */ { "x" : -37.77972033194018, "y" : -9.755098699263804, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 155 */ { "x" : -26.958917608605418, "y" : -9.597399361957848, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 156 */ { "x" : -43.28250080849216, "y" : -22.176242976466405, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 157 */ { "x" : -21.321260231770964, "y" : -22.49164165107829, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 158 */ { "x" : -40.77600774075319, "y" : -11.735311181459842, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 159 */ { "x" : -29.305601835315684, "y" : -11.577611844153914, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 160 */ { "x" : -39.720549074394, "y" : 13.093315929946442, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 161 */ { "x" : -46.8984705584956, "y" : -29.52931525409513, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 162 */ { "x" : -34.31031829842891, "y" : 31.352748058149295, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 163 */ { "x" : -44.93180924477531, "y" : -29.892967941581155, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 164 */ { "x" : -34.480937351159184, "y" : 19.430521055345082, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 165 */ { "x" : -42.96514793105496, "y" : -30.256620629067207, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 166 */ { "x" : -31.640359705170795, "y" : 23.79307417148317, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 167 */ { "x" : -40.998486617334606, "y" : -29.62027331655323, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 168 */ { "x" : -27.632873354777956, "y" : 6.742797349246445, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 169 */ { "x" : -28.88614158997504, "y" : -1.5323135549521893, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 170 */ { "x" : -25.53294262658852, "y" : 6.305680752270575, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 171 */ { "x" : -26.786210861785605, "y" : -1.9694301519280586, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 172 */ { "x" : -18.894297289617782, "y" : 6.451518605372684, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 173 */ { "x" : -20.402842838871436, "y" : -2.4810229892130096, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 174 */ { "x" : -18.678531233713954, "y" : 5.8014967351254825, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 175 */ { "x" : -27.72075634481638, "y" : 6.097788318401342, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 176 */ { "x" : -16.474281112994674, "y" : 5.676511621175223, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 177 */ { "x" : -25.5165062240971, "y" : 5.972803204451083, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 178 */ { "x" : -16.637352691945296, "y" : 6.029089614624212, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 179 */ { "x" : -18.14589824119895, "y" : -2.9034519799614813, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 180 */ { "x" : 1.5541571381128847, "y" : -9.492045817869204, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 181 */ { "x" : -19.230601751646702, "y" : -9.492045817869204, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 182 */ { "x" : -0.18053557225249506, "y" : -6.495758409056229, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 183 */ { "x" : -20.965294462012082, "y" : -6.495758409056229, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 184 */ { "x" : 4.258036656735555, "y" : -7.757353107503796, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 185 */ { "x" : -22.06918982315375, "y" : -7.757353107503796, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 186 */ { "x" : -6.7000188466905115, "y" : 7.6640372979854305, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 187 */ { "x" : -8.924806221659367, "y" : -6.45435618161698, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 188 */ { "x" : -9.920466629152827, "y" : 6.392969590882586, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 189 */ { "x" : -12.145254004121682, "y" : -7.725423888719824, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 190 */ { "x" : -8.014459091425522, "y" : 10.595311780807407, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 191 */ { "x" : -11.06135452911252, "y" : -9.004238996378483, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 192 */ { "x" : 18.074369108225312, "y" : -10.135690440081383, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 193 */ { "x" : -2.710389781534275, "y" : -10.135690440081383, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 194 */ { "x" : 19.772447716324734, "y" : -8.855788690500837, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 195 */ { "x" : -1.012311173434739, "y" : -8.855788690500837, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 196 */ { "x" : 18.203670137999268, "y" : -6.684612070483546, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 197 */ { "x" : -8.123556341890037, "y" : -6.684612070483546, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 198 */ { "x" : 14.40712424283862, "y" : -9.11008420570402, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 199 */ { "x" : 0.06872425946329486, "y" : 5.937057982172803, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 200 */ { "x" : 25.28376098233315, "y" : 6.617376788567952, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 201 */ { "x" : -1.0434654975561557, "y" : 6.617376788567952, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 202 */ { "x" : 14.92430261340877, "y" : -6.542763502177046, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 203 */ { "x" : 0.5859026300335017, "y" : 8.504378685699777, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 204 */ { "x" : 16.914229401587534, "y" : -5.831994968955961, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 205 */ { "x" : 2.5758294182122086, "y" : 9.215147218920862, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 206 */ { "x" : 23.781923530504685, "y" : 8.76285886260851, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 207 */ { "x" : -2.54530294938462, "y" : 8.76285886260851, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 208 */ { "x" : 27.00014664156555, "y" : 9.693792729245018, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 209 */ { "x" : 0.6729201616762452, "y" : 9.693792729245018, "bCoef" : 0.1, "cMask" : [ ], "curve" : 0, "color" : "64808f" },
            /* 210 */ { "x" : 0.022433346316859115, "y" : 270.6272097937494, "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "64808f" },
            /* 211 */ { "x" : 0.022433346316859115, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }
    
        ],
    
        "segments" : [
            { "v0" : 5, "v1" : 6, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
            { "v0" : 6, "v1" : 7, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
            { "v0" : 7, "v1" : 8, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
            { "v0" : 9, "v1" : 10, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
            { "v0" : 10, "v1" : 11, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
            { "v0" : 11, "v1" : 12, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue","ball" ] },
            { "v0" : 2, "v1" : 3, "curve" : 180, "color" : "64808f", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 3, "v1" : 2, "curve" : 180, "color" : "64808f", "bCoef" : 0.15, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 3, "v1" : 4, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            { "v0" : 13, "v1" : 14, "color" : "64808f", "bCoef" : 1.15, "cMask" : ["ball" ] },
            { "v0" : 15, "v1" : 16, "color" : "64808f", "bCoef" : 1.15, "cMask" : ["ball" ] },
            { "v0" : 17, "v1" : 18, "color" : "64808f", "cMask" : ["ball" ] },
            { "v0" : 19, "v1" : 20, "color" : "64808f", "bCoef" : 1.15, "cMask" : ["ball" ] },
            { "v0" : 21, "v1" : 22, "color" : "64808f", "bCoef" : 1.15, "cMask" : ["ball" ] },
            { "v0" : 23, "v1" : 24, "color" : "A3A3A3", "bCoef" : 0, "cMask" : ["ball" ] },
            { "v0" : 25, "v1" : 26, "color" : "64808f", "cMask" : ["ball" ] },
            { "v0" : 27, "v1" : 28, "color" : "64808f", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            { "v0" : 29, "v1" : 30, "color" : "64808f", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
            { "v0" : 37, "v1" : 38, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
            { "v0" : 39, "v1" : 40, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
            { "v0" : 41, "v1" : 42, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
            { "v0" : 43, "v1" : 44, "vis" : false, "color" : "A3A3A3", "cMask" : ["ball" ] },
            { "v0" : 47, "v1" : 48, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ] },
            { "v0" : 49, "v1" : 50, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ] },
            { "v0" : 52, "v1" : 51, "curve" : 89.99999999999999, "color" : "7ea2b5", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
            { "v0" : 53, "v1" : 54, "curve" : 89.99999999999999, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
            { "v0" : 55, "v1" : 56, "curve" : 89.99999999999999, "color" : "7ea2b5", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
            { "v0" : 52, "v1" : 56, "color" : "7ea2b5", "bCoef" : 0.1, "cMask" : [ ] },
            { "v0" : 58, "v1" : 57, "curve" : 89.99999999999999, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
            { "v0" : 59, "v1" : 60, "curve" : 89.99999999999999, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
            { "v0" : 62, "v1" : 61, "curve" : 89.99999999999999, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
            { "v0" : 63, "v1" : 64, "curve" : 89.99999999999999, "color" : "7ea2b5", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
            { "v0" : 66, "v1" : 65, "curve" : 89.99999999999999, "color" : "7ea2b5", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 1.0000000000000002 },
            { "v0" : 67, "v1" : 68, "color" : "7ea2b5", "bCoef" : 0.1, "cMask" : [ ] },
            { "v0" : 70, "v1" : 69, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 69, "v1" : 70, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 72, "v1" : 71, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 71, "v1" : 72, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 74, "v1" : 73, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 73, "v1" : 74, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 76, "v1" : 75, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 75, "v1" : 76, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 78, "v1" : 77, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 77, "v1" : 78, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 80, "v1" : 79, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 79, "v1" : 80, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 82, "v1" : 81, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 81, "v1" : 82, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 84, "v1" : 83, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 83, "v1" : 84, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 86, "v1" : 85, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 85, "v1" : 86, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 88, "v1" : 87, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 87, "v1" : 88, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 90, "v1" : 89, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 89, "v1" : 90, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 92, "v1" : 91, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 91, "v1" : 92, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 94, "v1" : 93, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 93, "v1" : 94, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 96, "v1" : 95, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 95, "v1" : 96, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 98, "v1" : 97, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 97, "v1" : 98, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 100, "v1" : 99, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 99, "v1" : 100, "curve" : 180, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
            { "v0" : 102, "v1" : 103, "curve" : 0, "color" : "b1e4ff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 104, "v1" : 105, "curve" : 0, "color" : "b1e4ff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 106, "v1" : 107, "curve" : 0, "color" : "b1e4ff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 108, "v1" : 109, "curve" : 0, "color" : "b1e4ff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 110, "v1" : 111, "curve" : 0, "color" : "b1e4ff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 112, "v1" : 113, "curve" : 0, "color" : "b1e4ff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 114, "v1" : 115, "curve" : 0, "color" : "b1e4ff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 116, "v1" : 117, "curve" : 0, "color" : "b1e4ff", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 118, "v1" : 119, "curve" : 266.8402851866564, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 205, "y" : 40 },
            { "v0" : 120, "v1" : 121, "curve" : -208.67141487184793, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 205, "y" : 40 },
            { "v0" : 122, "v1" : 123, "curve" : -106.39841675885857, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 205, "y" : 40 },
            { "v0" : 124, "v1" : 125, "curve" : 0, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 126, "v1" : 127, "curve" : 199.98264087486203, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 128, "v1" : 129, "curve" : 0, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 130, "v1" : 131, "curve" : 315.9672530335651, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 132, "v1" : 133, "curve" : 0, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 134, "v1" : 135, "curve" : 315.9672530335651, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 136, "v1" : 137, "curve" : 0, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 138, "v1" : 139, "curve" : 262.8748351573592, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 140, "v1" : 141, "curve" : 0, "color" : "7b9fb2", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 28 },
            { "v0" : 146, "v1" : 147, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -25 },
            { "v0" : 148, "v1" : 149, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -23 },
            { "v0" : 150, "v1" : 151, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
            { "v0" : 152, "v1" : 153, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -23 },
            { "v0" : 154, "v1" : 155, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
            { "v0" : 156, "v1" : 157, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -21 },
            { "v0" : 158, "v1" : 159, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 132, "y" : -4 },
            { "v0" : 160, "v1" : 161, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 200 },
            { "v0" : 162, "v1" : 163, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
            { "v0" : 164, "v1" : 165, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 166, "v1" : 167, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 206 },
            { "v0" : 168, "v1" : 169, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 170, "v1" : 171, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 172, "v1" : 173, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 174, "v1" : 175, "curve" : 188.38679109609015, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
            { "v0" : 176, "v1" : 177, "curve" : 188.38679109609015, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 202 },
            { "v0" : 178, "v1" : 179, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 180, "v1" : 181, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 182, "v1" : 183, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 184, "v1" : 185, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 186, "v1" : 187, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 188, "v1" : 189, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 190, "v1" : 191, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 192, "v1" : 193, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 194, "v1" : 195, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 196, "v1" : 197, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 198, "v1" : 199, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 200, "v1" : 201, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 202, "v1" : 203, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 204, "v1" : 205, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 206, "v1" : 207, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204 },
            { "v0" : 208, "v1" : 209, "curve" : 0, "color" : "64808f", "bCoef" : 0.1, "cMask" : [ ], "x" : 204, "y" : 91.76266812461527 },
            { "v0" : 210, "v1" : 211, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }
    
        ],
    
        "planes" : [
            { "normal" : [0,1 ], "dist" : -240, "cMask" : ["ball" ] },
            { "normal" : [0,-1 ], "dist" : -240, "cMask" : ["ball" ] },
            { "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
            { "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
            { "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
            { "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
            { "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] },
            { "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "cMask" : ["ball" ] }
    
        ],
    
        "goals" : [
            { "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red" },
            { "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue" }
    
        ],
    
        "discs" : [
            { "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFCC00", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
            { "radius" : 5, "invMass" : 0, "pos" : [-550,80 ], "color" : "ffcc00" },
            { "radius" : 5, "invMass" : 0, "pos" : [-550,-80 ], "color" : "ffcc00" },
            { "radius" : 5, "invMass" : 0, "pos" : [550,80 ], "color" : "ffcc00" },
            { "radius" : 5, "invMass" : 0, "pos" : [550,-80 ], "color" : "ffcc00" },
            { "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
            { "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
            { "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] },
            { "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "cMask" : [ ] }
    
        ],
    
        "playerPhysics" : {
            "bCoef" : 0,
            "acceleration" : ${velocitypadrao},
            "kickingAcceleration" : ${speedvelocity},
            "kickStrength" : 4.75
    
        },
    
        "ballPhysics" : "disc0",
    
        "spawnDistance" : 350,
    
        "traits" : {
            
    
        },
    
        "joints" : [
            
    
        ],
    
        "redSpawnPoints" : [
            
    
        ],
    
        "blueSpawnPoints" : [
            
    
        ]
    }`
    return stadDark;
}
function loadMap(map, scoreLim, timeLim) {
    room.setCustomStadium(map);
    room.setScoreLimit(scoreLim);
    room.setTimeLimit(timeLim);
}
function stadiumVote() {
    // Verifica qual estádio tem mais votos
    if (forspeedx > fordark && forspeedx > foruseless) {
        votedS = mediumStadium; // Estádio com mais votos: speedx
    }
    else if (fordark > forspeedx && fordark > foruseless) {
        votedS = mediumdark; // Estádio com mais votos: dark
    }
    else if (foruseless > forspeedx && foruseless > fordark) {
        votedS = medium2; // Estádio com mais votos: useless
    }
    else {
        randstadiumsfor3x = Math.floor(Math.random() * allmediumstadiums.length);
        votedS = allmediumstadiums[randstadiumsfor3x]; // Empate ou mais de um estádio com votos máximos
    }
};
function checkTeamSizeAndChangeMap() {
    stadiumVote();
    if (teamR.length === 1 && teamB.length === 1) {
        room.setCustomStadium(smallStadium);
    } else if (teamR.length === 2 && teamB.length === 2) {
        loadMap(votedS, scoreLimit, timeLimit);
    } else if (teamR.length === 3 && teamB.length === 3) {
        loadMap(votedS, scoreLimit, timeLimit);
    } else if (teamR.length === 4 && teamB.length === 4) {
        room.setCustomStadium(stadium4x);
    }
};

/* UNIFORMS */ 

const Uniform = {};
// Clubes Sulamericanos
const cor = {"name": 'Corinthians', "type": Uniform, "angle": 0, "textcolor": 0xF6F6FF, "color1": 0x06040E, "color2": 0x06040E, "color3": null, "majorColor": 'black', "altUni": 'cor2'};
const cor2 = {"name": 'Corinthians', "type": Uniform, "angle": 0, "textcolor": 0x06040E, "color1": 0xF6F6FF, "color2": 0xF6F6FF, "color3": null, "majorColor": 'white', "altUni": 'cor'};
const spfc = {"name": 'São Paulo', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFF1F1F, "color2": 0x000000, "color3": 0xDEF3FF, "majorColor": null, "altUni": 'spfc2'};
const spfc2 = {"name": 'São Paulo', "type": Uniform, "angle": 90, "textcolor": 0xFF1F1F, "color1": 0xFBFF8A, "color2": 0xDEF3FF, "color3": 0x080808, "majorColor": null, "altUni": 'spfc'};
const pal = {"name": 'Palmeiras', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x2FB521, "color2": 0x2FB521, "color3": 0x2FB521, "majorColor": 'green', "altUni": 'pal2'};
const pal2 = {"name": 'Palmeiras', "type": Uniform, "angle": 120, "textcolor": 0x174214, "color1": 0xFFFFFF, "color2": 0x489950, "color3": 0xFFFFFF, "majorColor": 'white', "altUni": 'pal'};
const sfc = {"name": 'Santos', "type": Uniform, "angle": 0, "textcolor": 0x827E09, "color1": 0xFFFFFF, "color2": 0x000000, "color3": 0xFFFFFF, "majorColor": 'black/white', "altUni": null};
const fla = {"name": 'Flamengo', "type": Uniform, "angle": 90, "textcolor": 0xFFFFFF, "color1": 0xD10404, "color2": 0x000000, "color3": 0xD10404, "majorColor": 'red', "altUni": 'fla2'};
const fla2 = {"name": 'Flamengo', "type": Uniform, "angle": 50, "textcolor": 0x000000, "color1": 0x9C0202, "color2": 0xffffff, "color3": null, "majorColor": null, "altUni": 'fla'};
const vas = {"name": 'Vasco', "type": Uniform, "angle": 50, "textcolor": 0xA86428, "color1": 0x000000, "color2": 0xFFFFFF, "color3": 0x000000, "majorColor": 'black/white', "altUni": 'vas2'};
const vas2 = {"name": 'Vasco', "type": Uniform, "angle": 60, "textcolor": 0xFF3030, "color1": 0x000000, "color2": 0xFFFAFF, "color3": 0x000000, "majorColor": 'black/white', "altUni": 'vas'};
const flu = {"name": 'Fluminense', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xC70808, "color2": 0x0D7722, "color3": 0xC70808, "majorColor": 'red', "altUni": 'flu2'};
const flu2 = {"name": 'Fluminense', "type": Uniform, "angle": 60, "textcolor": 0xFFFFFF, "color1": 0xFF0F0F, "color2": 0x36770d, "color3": null, "majorColor": 'red/green', "altUni": 'flu'};
const gre = {"name": 'Grêmio', "type": Uniform, "angle": 90, "textcolor": 0xFFFFFF, "color1": 0x335CFF, "color2": 0x000000, "color3": 0x335CFF, "majorColor": 'blue', "altUni": 'gre2'};
const gre2 = {"name": 'Grêmio', "type": Uniform, "angle": 90, "textcolor": 0xFFFFFF, "color1": 0x000000, "color2": 0x335CFF, "color3": 0x000000, "majorColor": 'black', "altUni": 'gre'};
const int = {"name": 'Internacional', "type": Uniform, "angle": 0, "textcolor": 0xE00000, "color1": 0xFF0D0D, "color2": 0xFFFFFF, "color3": 0xFF0D0D, "majorColor": 'red', "altUni": 'int2'};
const int2 = {"name": 'Internacional', "type": Uniform, "angle": 0, "textcolor": 0xd21016, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": null, "majorColor": 'white', "altUni": 'int'};
const cru = {"name": 'Cruzeiro', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x0000CD, "color2": 0x0000CD, "color3": 0x0000CD, "majorColor": '', "altUni": null};
const boc = {"name": 'Boca Juniors', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x0000FF, "color2": 0xF7FF00, "color3": 0x0000FF, "majorColor": 'blue', "altUni": 'boc2'};
const boc2 = {"name": 'Boca Juniors', "type": Uniform, "angle": 0, "textcolor": 0x0000FF, "color1": 0xF7FF00, "color2": 0xF7FF00, "color3": null, "majorColor": 'yellow', "altUni": 'boc'};
const riv = {"name": 'River Plate', "type": Uniform, "angle": 50, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xF20000, "color3": 0xFFFFFF, "majorColor": 'white', "altUni": null};
// Clubes Europeus
const rea = { "name": 'Real Madrid', "type": Uniform, "angle": 0, "textcolor": 0x0246CF, "color1": 0xFFFAFA, "color2": 0xFFFAFA, "color3": 0xFFFAFA, "majorColor": 'white', "altUni": 'rea2'};
const rea2 = { "name": 'Real Madrid', "type": Uniform, "angle": 0, "textcolor": 0xfac23b, "color1": 0x151D32, "color2": 0x343956, "color3": 0x151D32, "majorColor": 'black', "altUni": 'rea'};
const bar = {"name": 'Barcelona', "type": Uniform, "angle": 360, "textcolor": 0xFFDA21, "color1": 0x002E73, "color2": 0x8F1300, "color3": 0x002E73, "majorColor": 'blue', "altUni": 'bar2'};
const bar2 = {"name": 'Barcelona', "type": Uniform, "angle": 360, "textcolor": 0xFFDA21, "color1": 0x8F1300, "color2": 0x002E73, "color3": 0x8F1300, "majorColor": 'red', "altUni": 'v2'};
const juv = {"name": 'Juventus', "type": Uniform, "angle": 180, "textcolor": 0x000000, "color1": 0x5E5E5E, "color2": 0xD9D9D9, "color3": 0x5E5E5E, "majorColor": 'black', "altUni": 'juv2'};
const juv2 = {"name": 'Juventus', "type": Uniform, "angle": 0, "textcolor": 0x5E5E5E, "color1": 0xf5f2f2, "color2": 0x00203B, "color3": 0xf5f2f2, "majorColor": 'white', "altUni": 'juv'};
const bay = {"name": 'Bayern de Munique', "type": Uniform, "angle": 90, "textcolor": 0xFFFFFF, "color1": 0xFF0F0F, "color2": 0x2418C7, "color3": 0xFF0F0F, "majorColor": 'red', "altUni": 'bay2'};
const bay2 = {"name": 'Bayern de Munique', "type": Uniform, "angle": 90, "textcolor": 0xFFFFFF, "color1": 0xFF0F0F, "color2": 0x2418C7, "color3": null, "majorColor": null, "altUni": 'bay'};
const psg = {"name": 'Paris Saint-Germain', "type": Uniform, "angle": 180, "textcolor": 0xFFFFFF, "color1": 0x001569, "color2": 0xE60000, "color3": 0x001569, "majorColor": 'blue', "altUni": 'psg2'};
const psg2 = {"name": 'Paris Saint-Germain', "type": Uniform, "angle": 0, "textcolor": 0x6B6B6B, "color1": 0xDCDAE1, "color2": 0x1A1A1A, "color3": 0xDCDAE1, "majorColor": 'black', "altUni": 'psg'};
const liv = {"name": 'Liverpool', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xFF1819, "color2": 0xFF1819, "color3": 0xFF1819, "majorColor": 'red', "altUni": 'liv2'};
const liv2 = {"name": 'Liverpool', "type": Uniform, "angle": 90, "textcolor": 0x3d3d3d, "color1": 0x00dc8c, "color2": 0xF0F0F0, "color3": null, "majorColor": 'green', "altUni": 'liv'};
const mci = {"name": 'Manchester City', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x2B87FF, "color2": 0x2B87FF, "color3": 0x2B87FF, "majorColor": 'blue', "altUni": 'mci2'};
const mci2 = {"name": 'Manchester City', "type": Uniform, "angle": 135, "textcolor": 0xFFD608, "color1": 0xB51313, "color2": 0x0D0001, "color3": 0xB51313, "majorColor": 'red', "altUni": 'mci'};
const atm = {"name": 'Atlético de Madrid', "type": Uniform, "angle": 0, "textcolor": 0x0F1FFF, "color1": 0xFFFFFF, "color2": 0xF00A0A, "color3": 0xFFFFFF, "majorColor": 'white', "altUni": 'atm2'};
const atm2 = {"name": 'Atlético de Madrid', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x1C03FF, "color2": 0x0063B8, "color3": 0x1C03FF, "majorColor": 'blue', "altUni": 'atm'};
const bor = {"name": 'Borussia Dortmund', "type": Uniform, "angle": 0, "textcolor": 0x222529, "color1": 0xF0FF19, "color2": 0xF0FF19, "color3": 0xF0FF19, "majorColor": 'yellow', "altUni": 'bor2'};
const bor2 = {"name": 'Borussia Dortmund', "type": Uniform, "angle": 0, "textcolor": 0x72757d, "color1": 0x222529, "color2": 0xF0FF19, "color3": 0x222529, "majorColor": 'black', "altUni": 'bor'};
const mil = {"name": 'Milan', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x850000, "color2": 0x000000, "color3": 0x850000, "majorColor": 'red', "altUni": 'mil2'};
const mil2 = {"name": 'Milan', "type": Uniform, "angle": 0, "textcolor": 0x8889AB, "color1": 0xEFF2FF, "color2": 0xEFF2FF, "color3": 0xE90202, "majorColor": 'white', "altUni": 'mil'};
const intM = {"name": 'Inter de Milão', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x00008F, "color2": 0x000000, "color3": 0x00008F, "majorColor": 'blue', "altUni": null};
const che = {"name": 'Chelsea', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x0000CD, "color2": 0xFFFFFF, "color3": 0x0000CD, "majorColor": 'blue', "altUni": 'che2'};
const che2 = {"name": 'Chelsea', "type": Uniform, "angle": 60, "textcolor": 0xFFFFFF, "color1": 0xF3FA37, "color2": 0x171717, "color3": null, "majorColor": 'yellow', "altUni": 'che'};
// Clubes Americanos
const mia = { "name": '𝐈𝐧𝐭𝐞𝐫 𝐌𝐢𝐚𝐦𝐢', "type": Uniform, "angle": 45, "textcolor": 0xFCA4B6, "color1": 0x141414, "color2": 0x141414, "color3": 0x141414, "majorColor": 'black', "altUni": 'mia2'};
const mia2 = { "name": '𝐈𝐧𝐭𝐞𝐫 𝐌𝐢𝐚𝐦𝐢', "type": Uniform, "angle": 45, "textcolor": 0x141414, "color1": 0xFCA4B6, "color2": 0xFCA4B6, "color3": 0xFCA4B6, "majorColor": 'pink', "altUni": 'mia'};
// Clubes Árabes
const alh = { "name": 'Al-Hilal', "type": Uniform, "angle": 0, "textcolor": 0xffffff, "color1": 0x005EFF, "color2": 0x005EFF, "color3": 0x005EFF, "majorColor": 'blue', "altUni": 'alh2'};
const alh2 = { "name": 'Al-Hilal', "type": Uniform, "angle": 40, "textcolor": 0x001C8C, "color1": 0xffffff, "color2": 0x0080ff, "color3": 0xffffff, "majorColor": 'white', "altUni": 'alh2'};
const aln = { "name": 'Al-Nassr', "type": Uniform, "angle": 0, "textcolor": 0x0011FF, "color1": 0xFFFF03, "color2": 0xFFFF03, "color3": 0xFFFF03, "majorColor": 'yellow', "altUni": 'aln2'};
const aln2 = { "name": 'Al-Nassr', "type": Uniform, "angle": 0, "textcolor": 0xffffff, "color1": 0x0011FF, "color2": 0x0000bc, "color3": 0x0011FF, "majorColor": 'blue', "altUni": 'aln'};
// Seleções
const ale = {'name': 'Alemanha', "type": Uniform, "angle": 90, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF, "majorColor": 'white', "altUni": null};
const arg = {'name': 'Argentina', "type": Uniform, "angle": 90, "textcolor": 0x1F374B, "color1": 0x75AADB, "color2": 0xFFFFFF, "color3": 0x75AADB, "majorColor": 'blue', "altUni": null};
const bra = {'name': 'Brasil', "type": Uniform, "angle": 360, "textcolor": 0x0C822F, "color1": 0xFFDA1F, "color2": 0xFFDA1F, "color3": 0xFFDA1F, "majorColor": 'yellow', "altUni": null};
const esp = {'name': 'Espanha', "type": Uniform, "angle": 90, "textcolor": 0xFFFF00, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000, "majorColor": 'red', "altUni": null};
const por = {'name': 'Portugal', "type": Uniform, "angle": 0, "textcolor": 0x289E1F, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000, "majorColor": 'red', "altUni": null};
const ita = {'name': 'Itália', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x3646A9, "color2": 0x3646A9, "color3": 0x3646A9, "majorColor": 'blue', "altUni": null};
const uru = {'name': 'Uruguai', "type": Uniform, "angle": 0, "textcolor": 0x212124, "color1": 0x66A5D4, "color2": 0x66A5D4, "color3": 0x66A5D4, "majorColor": 'blue', "altUni": null};
const fra = {'name': 'França', "type": Uniform, "angle": 90, "textcolor": 0xf13b40, "color1": 0x204290, "color2": 0x25284c, "color3": 0x204290, "majorColor": 'blue', "altUni": null};
const ing = {'name': 'Inglaterra', "type": Uniform, "angle": 0, "textcolor": 0x0549A0, "color1": 0xDEDFE4, "color2": 0xDEDFE4, "color3": 0xDEDFE4, "majorColor": 'red', "altUni": null};
const bel = {'name': 'Bélgica', "type": Uniform, "angle": 0, "textcolor": 0xCA9144, "color1": 0xC4212A, "color2": 0xC4212A, "color3": 0xC4212A, "majorColor": 'red', "altUni": null};
const hol = {'name': 'Holanda', "type": Uniform, "angle": 0, "textcolor": 0xFFFFFF, "color1": 0xF25100, "color2": 0xF25100, "color3": 0xF25100, "majorColor": 'orange', "altUni": null};
// clubes de zueira
const girl = { "name": '👩🏻‍🦰 𝔅𝔞𝔯𝔟𝔦𝔢𝔰 👱🏻‍♀️', "type": Uniform, "angle": 60, "textcolor": 0xFFFFFF, "color1": 0xF2B3FF, "color2": 0xCAABFF, "color3": 0xCAABFF, "majorColor": 'pink', "altUni": null};
const inv = { "name": '🟨 Iηvicŧus 🟨', "type": Uniform, "angle": 60, "textcolor": 0xFFE042, "color1": 0x213366, "color2": 0x2F64A1, "color3": 0x2F64A1, "majorColor": 'blue', "altUni": 'inv2'};
const inv2 = { "name": '🟨 Iηvicŧus 🟨', "type": Uniform, "angle": 60, "textcolor": 0x213366, "color1": 0xFFE042, "color2": 0xFFB41F, "color3": 0xFFB41F, "majorColor": 'blue', "altUni": 'inv'};
const vik = { "name": '[̲̅V̲̅i̲̅k̲̅i̲̅и̲̅g̲̅ร̲̅]', "type": Uniform, "angle": 60, "textcolor": 0x28231d, "color1": 0xa9957b, "color2": 0xa9957b, "color3": 0x756855, "majorColor": 'brown', "altUni": null};
// Uniformes Vip
const v1 = { "name": '👑 Søbєrαηøs 👑', "type": Uniform, "angle": 60, "textcolor": 0x990DA8, "color1": 0x5E0061, "color2": 0x000000, "color3": 0x000000, "majorColor": 'black', "altUni": 'v1s'};
const v1s = { "name": '👑 Søbєrαηøs 👑', "type": Uniform, "angle": 60, "textcolor": 0xFFFFFF, "color1": 0x5E0061, "color2": 0x361029, "color3": 0x5E0061, "majorColor": 'purple', "altUni": 'v1'};
const v2 = { "name": '𝔅𝔞𝔯ç𝔞', "type": Uniform, "angle": 0, "textcolor": 0xE3D57B, "color1": 0x197FED, "color2": 0xB2273C, "color3": 0x232B58, "majorColor": 'blue', "altUni": 'v5'};
const v3 = { "name": ' ', "type": Uniform, "angle": 45, "textcolor": 0xFFFFFF, "color1": -1, "color2": -1, "color3": -1, "majorColor": 'white', "altUni": null};
const v4 = { "name": 'Vip 4', "type": Uniform, "angle": 1, "textcolor": 0x42FFFF, "color1": 0x000000, "color2": 0x781861, "color3": 0xDAFFC3, "majorColor": null, "altUni": null};
const v5 = { "name": 'Barça 2009', "type": Uniform, "angle": 0, "textcolor": 0xf7cf52, "color1": 0x102a74, "color2": 0xf31c35, "color3": null, "majorColor": null, "altUni": 'bar'};
// GOL comemoração
const gol1 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
const gol12 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0xFFFFFF, "color3": 0x2ebdff};
const gol2 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x2ebdff, "color2": 0x42f56f, "color3": 0xFFFFFF};
const gol3 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0xFFFFFF, "color2": 0x2ebdff, "color3": 0x42f56f};
const gol4 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0x42f56f, "color2": 0x42f56f, "color3": 0x42f56f};
const gol5 = {"angle": 0, "textcolor": 0x0a5e11, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF};
//
const seleçoes = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel, hol];
const euroClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, mia];
const sulaClubes = [cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv];
const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv, mia, alh, aln];
var defaultHome = bar
var defaultGuest = rea
var nameHome = defaultHome.name;
var acronymHome = bar;
var nameGuest = defaultGuest.name;
var acronymGuest = rea;
room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
function uniRed(uni) {
    nameHome = uni.name;
    acronymHome = uni;
    if (acronymHome.color3 === null) {
        room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2]);
    } else {
        room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
    }
}
function uniBlue(uni) {
    nameGuest = uni.name;
    acronymGuest = uni;
    if (acronymGuest.color3 === null) {
        room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2]);
    } else {
        room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
    }
}
function uniBlueForce(uni) {
    const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv, mia, alh, aln];
    let randHome = Math.floor(Math.random() * allClubes.length);
    nameGuest = uni.name;
    acronymGuest = uni;
    if (acronymGuest.majorColor === acronymHome.majorColor) {
        if (acronymHome.altUni === null) {
            uniRed(allClubes[randHome])
            setTimeout(function () {
                room.sendAnnouncement(centerText("Alterado por conflito de Uniforme"), null, yellow, "bold");
            }, 500);
        }
        else {
            uniRed(eval(acronymHome.altUni))
            setTimeout(function () {
                room.sendAnnouncement(centerText(`${nameHome} está usando o uniforme alternativo`), null, yellow, "bold");
            }, 500);
        }
    } if (acronymGuest.color3 === null) {
        room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2]);
    } else {
        room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
    }
}
function checkUni() {
    const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv, mia, alh, aln];
    let randGuest = Math.floor(Math.random() * allClubes.length);
    if (acronymHome === acronymGuest) {
        uniBlue(allClubes[randGuest])
        setTimeout(function () {
            room.sendAnnouncement(centerText("Alterado por conflito de Uniforme"), null, yellow, "bold");
        }, 500);
    } else if (acronymGuest.majorColor === acronymHome.majorColor) {
        if (acronymGuest.altUni === null) {
            uniBlue(allClubes[randGuest])
            setTimeout(function () {
                room.sendAnnouncement(centerText("Alterado por conflito de Uniforme"), null, yellow, "bold");
            }, 500);
        } else {
            let outrouni = acronymGuest.altUni;
            if (outrouni.majorColor === acronymHome.majorColor) {
                uniBlue(allClubes[randGuest])
                setTimeout(function () {
                    room.sendAnnouncement(centerText("Alterado por conflito de Uniforme"), null, yellow, "bold");
                }, 500);
            } else {
                uniBlue(eval(acronymGuest.altUni))
                setTimeout(function () {
                    room.sendAnnouncement(centerText(`${nameGuest} está usando o uniforme alternativo`), null, yellow, "bold");
                }, 500);
            }
        }
    }
}
function altRed() {
    if (acronymHome.altUni === null) {
        setTimeout(function () {
            room.sendAnnouncement(centerText(`${nameHome} não possui uniforme alternativo`), null, yellow, "bold");
        }, 500);
    } else {
        uniRed(eval(acronymHome.altUni))
        setTimeout(function () {
            room.sendAnnouncement(centerText(`${nameHome} está usando o uniforme alternativo`), null, yellow, "bold");
        }, 500);
    }
}
function altBlue() {
    if (acronymGuest.altUni === null) {
        setTimeout(function () {
            room.sendAnnouncement(centerText(`${nameGuest} não possui uniforme alternativo`), null, yellow, "bold");
        }, 500);
    } else {
        uniBlue(eval(acronymGuest.altUni))
        setTimeout(function () {
            room.sendAnnouncement(centerText(`${nameGuest} está usando o uniforme alternativo`), null, yellow, "bold");
        }, 500);
    }
}

/* OPTIONS */

var afkLimit = 20; //segundos
var drawTimeLimit = 1; //minutos
var maxTeamSize = 3;
var yellow = 0xffeb15;
var offYellow = 0xffdd8c;
var indigo = 0x6351dd;
var white = 0xFFFFFF;
var green = 0x32f073;
var red = 0xfc383b;
var blue = 0x03adfc;
var warn = 0xff9966;
var lightgrey = 0x9ca6b1;
var chatInvisble = 0x4b5b50;
var staffChatColor = 0xd1ff5f;
var lightblue = 0x51bbfe;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }
var player;
var players;
var teamR;
var teamB;
var teamS;
let lastPlayerJoinedID = "";
let lastPlayerJoinedNAME = "";
let playertoban = "";
let redp1 = "";
let redp2 = "";
let redp3 = "";
let bluep1 = "";
let bluep2 = "";
let bluep3 = "";
let soberboID = "";
let badassID = "";
var supervisorsID = [];
const soberbo = ['3137392E33342E38362E3530']; // soberbo
const badass = ['3137392E39332E34332E323239']; // malco
const supervisors = ['3138392E342E38382E313230']; // 𝕃 . 𝕄𝕖𝕤𝕤𝕚™
const blacklistnames = ['^_-'];
const blacklistconn = [
    '3230312E332E39382E313536'
]; // Arthur MM, ᱦiᱮ∀Ʀd, Schneider, Alcione III, MACACO, ?yuno? |
const cartaoamarelo = ['3138392E33302E38342E323335']; // Chiquinho
var lodiazCONN = "3138392E38352E32392E3637"; // conn do 𝘿𝙄𝘼𝙕
var lanocheCONN = "3138392E33342E31372E313539"; // conn do 𝕃 . 𝕄𝕖𝕤𝕤𝕚™
var lodiaz = []; // id do 𝘿𝙄𝘼𝙕
var lanoche = []; // id do 𝕃 . 𝕄𝕖𝕤𝕤𝕚™
var blacklist = [
    {Nick: "Arthur MM", Auth: "YD0Jm8MmB9G9YJCwJEEoIcC1SvD3Q2811xT9T-NTmVw", Conn: "3137372E35372E3135302E313736"},
    {Nick: "ᱦiᱮ∀Ʀd", Auth: "YJINpE0p70-sAT-nTx10vI5VvHyQ-jkZ1C-zi6dI2us", Conn: "3136372E3234392E39332E313135"},
    {Nick: "Schneider", Auth: "_nsAyl-n61ELIOJghIDiHojx-parT0N19K374jqygqo", Conn: "3137372E37362E3232342E3730"},
    {Nick: "Alcione III", Auth: "l6CTEtHr4eiv6xwCfvFow6dqEkTxuKRKhWUWgVkmFzY", Conn: "3137392E3231382E32312E323337"},
    {Nick: "MACACO", Auth: "aPIbu-KVDln_AP66WDgrgZYP7QdNWvDsvNQ6WU8whbA", Conn: "3138372E36302E3231372E313934"},
    {Nick: "miguelgatao", Auth: "muhymMgE4Xq_Dxc3wtOhlvEsP0Y0EZaVXz4tX9mCJRg", Conn: "3137372E3134302E3130372E323239"},
    {Nick: "?yuno? |", Auth: "0IZr0_R0RZkeez25qT9A9F1Pz3QFgVB4jgBM1XZa9G0", Conn: "3138392E36382E3136362E313136"},
    {Nick: "ALH | Neymar Jr", Auth: "7WHXLn5paStPAVj_yGFFMBLW3TqgMTjVY38xAFaID64", Conn: "3137372E32322E35392E323130"},
    {Nick: "", Auth: "", Conn: ""},
];
var blacklistconnID = [];
var redID = [];
var blueID = [];
var pendurados = [];
var playerList = [];
var conns = [];
var playerConn = [];
var mn = [];

/* GAME */

var lastTeamTouched;
var lastPlayersTouched;
var autoadmin = true;
var goldenGoal = false;
var activePlay = false;
var muteList = [];
let muted = false;
let capchat = false;
let redChat = true;
let blueChat = true;
let specChat = true;
var banList = [];
var GKListname = [];
var afklist = [];
var countAFK = false; // Created to get better track of activity
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
let rr = false; // serve para restartar o game com o comnado rr

// WELL BEING

let forbid = ['macaco', 'adolf hitler', 'nazismo', 'cuzao', 'cuzão', 'autista', 'cu', 'hitler', 'Manco', 'Malco', 'manco', 'malco', 'Macaco', 'Hitler', 'mancos', 'Mancos', "Pênis", 'porra', 'Porra'];
let trava = ["㧫璧 觭䢜潇ကᩨ쀡ఈ泄찉넾﫤㏭ 緺", "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓", "㧫", "璧", "懈౩䊀脁潡䣚⾤㸼짠ब", "뗲᭾ 띀急蔹⹉ꆣせㆉ였鷀Ú錘陈搳窇㉕"];
let regex = ["fdp", "cu", "carai", "cuzao", "porra", "arrombado", "cu preto", "lixo", "autista", "lixeira", "verme", "Horrível", "seu merda", "filho da puta", "vsfd",
"caralho", "seu gordo", "cuzão", "vadia", "sua mãe", "seu fdp", "cala a boca", "puta", "fudido", "krl", "f d p", "vtnc", "vai tomar no cu", "crl", "cadeirante", "caderante",
"nigga", "prr", "CARALHO", "PORRA", "CARAI", "CUZAO", "CUZÃO", "FDP", "FILHO DA PUTA", "Cu", "CU", "CÚ", "PORR", "porr", "PRRA", "fodido", "FODIDO", "CRALHO", "CARLHO", "poha",
"prr" , "PRR", "POHA", "bct", "BCT"];
let xingo = ["seu preto", "seu macaco", "macaco", "seu negro", "pretinho", "resto de aborto", "seu mcc", "Negrinho", "carvão", "nazista", "Nazista"];
let malcorage = ["Manco", "manco", "Malco lixo", "malco lixo", "Malco ruim", "malco ruim", "malco fudido", "manko"];
let chorao = ["mds", "meudeus"];
let confuso = ["?", "q", "qq", "qe", "??", "???", "Q", "QQ", "qqq", "QQQ"];
let seacha = ["ez", "facil", "fácil", "easy", "ganhamos", "ganhamo", "ganhamu"];
let naoconfia = ["perdemos", "perdemo"];
let sorry = ["mb", "mals", "foi mal", "desculpa", "chapei", "mosquei", "vacilei", "malz", "mal"];
let agradece = ["gg", "boa"];
let porpouco = ["u", "uu", "uuu", "U", "quase"];
let raivaquase = ["a", "aa", "merda", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "A", "AA", "AAA", "AAAA", "aaa", "ah", "AH"];
let xis = ["x", "xx", "X", "XX"];
let perdidao = ["ue", "ué"];
let lagadao = ["mto lag", "tolagado", "to lagado", "to lag", "lag demais", "lag dmais", "lagou", "mt lag", "tolag", "lag"];
let relaxado = ["rlx", "relaxa", "acontece", "dboa", "de boa", "suave", "suav", "deboa"];
let humilhante = ["oe", "ole", "tomou", "mamou"];
let humilhado = ["tomei", "levei", "mamei", "MAMEI"];

function nameForbid(player) {
    if (forbid.includes(player.name)) { room.kickPlayer(player.id, 'nick proibido nessa sala', false) }
};

function banBlackListed(player) {
    if (blacklistconnID.includes(player.id) || player.id.includes(blacklistconnID)) { banidao = true; room.kickPlayer(player.id, 'Você está na BLACKLIST, saiba mais em https://discord.gg/AR7ypuzJG8', true) }
};

/* STATS */

var game = "";
var GKList = new Array(2 * maxPlayers).fill(0);
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
// goals count
var goalsRp1 = 0;
var goalsRp2 = 0;
var goalsRp3 = 0;
var goalsBp1 = 0;
var goalsBp2 = 0;
var goalsBp3 = 0;
// assists count
var assistsRp1 = 0;
var assistsRp2 = 0;
var assistsRp3 = 0;
var assistsBp1 = 0;
var assistsBp2 = 0;
var assistsBp3 = 0;
//
let scoreb = 0;
let scorer = 0;
let increes = "";
var goalsHome = [];
var goalsGuest = [];
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* AUXILIARY */

var checkTimeVariable = false;
var announced = false;
let choose = true;
let redFirst = false;
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var statInterval = 6;
let banidao = false;

/* ANOUNCEMENTS */

var Intervalo_mensagens;
var help_mensagens;
var var_mensage;
var speedADvar;
var speedonORoffvar;
var voteforyourmap;
var Intervalo_15 = 1000 * 60 * 15; // 1000 * 60 * 15 = irá mandar a mensagem a cada 15 minutos
var Intervalo_5 = 1000 * 60 * 5;
var Intervalo_8 = 1000 * 60 * 8;
var Intervalo_2 = 1000 * 60 * 2;
var Intervalo_2e5 = 1000 * 60 * 2.5;
var Intervalo_10 = 1000 * 60 * 10;
var Intervalo_4 = 1000 * 60 * 4;
var Intervalo_20 = 1000 * 60 * 20;

Intervalo_mensagens = setInterval(() => {
const msgs1 = ["▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄"];
const msgs2 = ["▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█"];
const msgs3 = ["▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀"];
const msgs4 = ["https://discord.gg/AR7ypuzJG8"];
room.sendAnnouncement(centerText(msgs1), null, white, "bold", 0);
room.sendAnnouncement(centerText(msgs2), null, white, "bold", 0);
room.sendAnnouncement(centerText(msgs3), null, white, "bold", 0);
room.sendAnnouncement(centerText(msgs4), null, white, "italic", 1);
}, Intervalo_15);

help_mensagens = setInterval(() => {
room.sendAnnouncement(centerText("「📣」 𝘂𝘀𝗲 !𝗵𝗲𝗹𝗽 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀"), null, yellow, "italic", 1);
}, Intervalo_5);

var_mensage = setInterval(() => {
    room.sendAnnouncement(centerText("「📹」Se algo estiver errado, chame o 'var'!"), null, white, "italic", 1);
}, Intervalo_10);

function liveOnDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1138895537756721332/mHX7-fko3m7_9lAx-5zvJF4r-t-xVSo-hX76VW-FJtMXc6dUEtCZn1aHz0HTDkG0Vn62"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1144018854876557532/image.png', // Avatar WEBHOOK
        username: 'Fake Natty', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function liveRoomToDiscord() {
    var playersLive = [];
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        playersLive.push(`${player.name}\n`)
    }
    return playersLive
};

teamPVad = setInterval(() => {
    room.sendAnnouncement(centerText("「TEAM PV」Use - para falar somente com o seu time!"), null, white, "normal", 1);
    room.sendAnnouncement(centerText("Exemplo, diga -Avança!"), null, yellow, "italic", 0);
}, Intervalo_2e5);

teamPVad = setInterval(() => {liveOnDiscord(`***SALA TA ON, RAPA***\n.\nCola na Humildade\n${linkinho}\n.\nPlayers online:\n${liveRoomToDiscord()}`)}, Intervalo_20);

/* Sistema data e hora */
  
function dataehora() {
   let data = new Date(),
   dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes} ás ${horas}:${minutos}`;
};
  
function getDateInfo() {
    let data = new Date(),
    dia=data.getDate().toString().padStart(2, '0'),
    mes=(data.getMonth()+1).toString().padStart(2, '0'),
    ano=data.getFullYear(),
    horas=data.getHours().toString().padStart(2, '0'),
    minutos=data.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ás ${horas}:${minutos}`;
};

/* DATA STORAGE */

//autocontrole
function generateAdminRandomPassword() {
    const passwordLength = 4; // comprimento da senha
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // gera um número aleatório entre 0 e 9
      password += randomDigit.toString(); // adiciona o número à senha como uma string
    }
    sendAdminCommandsToDiscord('**Senha:** ' + password);
    return password;
};
function generateRandomPassword() {
    const passwordLength = 4; // comprimento da senha
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // gera um número aleatório entre 0 e 9
      password += randomDigit.toString(); // adiciona o número à senha como uma string
    }
    sendKeyToDiscord("  \n                  **Howto:**\n set <game> <goal> <assist> <hattrick> <win> <loss> <key>\n add <number> <gols/assists/hats/jogos/win/loss> <key>\n \n **Last Key:**   " + password + "    \n  ");
    return password;
};
function golzin(gols, player) {
    const playerName = player.name;
    const key = `goals_${playerName}`;
    localStorage.setItem(key, parseInt(gols)); // Armazenar o novo valor no localStorage
};
function assistizinha(assists, player) {
    const playerName = player.name;
    const key = `assists_${playerName}`;
    localStorage.setItem(key, parseInt(assists)); // Armazenar o novo valor no localStorage
};
function hatzinho(hatTricks, player) {
    const playerName = player.name;
    const key = `hattrick_${playerName}`;
    localStorage.setItem(key, parseInt(hatTricks)); // Armazenar o novo valor no localStorage
};
function joguin(joguins, player) {
    const playerName = player.name;
    const key = `jogos_${playerName}`;
    localStorage.setItem(key, parseInt(joguins)); // Armazenar o novo valor no localStorage
};
function vitor(vitori, player) {
    const playerName = player.name;
    const key = `vitórias_${playerName}`;
    localStorage.setItem(key, parseInt(vitori)); // Armazenar o novo valor no localStorage
};
function derro(derrot, player) {
    const playerName = player.name;
    const key = `derrotas_${playerName}`;
    localStorage.setItem(key, parseInt(derrot)); // Armazenar o novo valor no localStorage
};
// AFK SYSTEM
function afkNEXTplayer() {    
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        var idzin = player.id;
        if (afklist.includes(idzin)) {
            setTimeout(function () {
                if (player.team == Team.RED) {
                    room.sendAnnouncement(centerText(`${player.name} está AFK`), null, warn, "italic", 2);
                    room.setPlayerTeam(idzin, Team.SPECTATORS);
                    alwaysOnTeam();
                }else if (player.team == Team.BLUE) {
                    room.sendAnnouncement(centerText(`${player.name} está AFK`), null, warn, "italic", 2);
                    room.setPlayerTeam(idzin, Team.SPECTATORS);
                    alwaysOnTeam();
                }
            }, 100);
        }
    }
};
function AFKLimitToKick(player) {
    setTimeout(function () {
        if (afklist.includes(player.id)) {
            room.sendAnnouncement(centerText(`${player.name} você está AFK por 4:30 minutos`), player.id, yellow, "bold", 2);
            room.sendAnnouncement(centerText(`Saia do AFK ou será Kickado em 30 segundos`), player.id, yellow, "bold", 0);
            setTimeout(function () {
                if (afklist.includes(player.id)) {
                    room.sendAnnouncement(centerText(`${player.name} você está AFK por 4:50 minutos`), player.id, yellow, "bold", 2);
                    room.sendAnnouncement(centerText(`Saia do AFK ou será Kickado em 10 segundos`), player.id, yellow, "bold", 0);
                    setTimeout(function () {
                        if (afklist.includes(player.id)) {
                            room.sendAnnouncement(centerText(`${player.name} você atingiu o AFK LIMIT, de 5 minutos`), player.id, yellow, "bold", 2);
                            room.sendAnnouncement(centerText(`Será removido da sala, agora`), player.id, yellow, "bold", 0);
                            setTimeout(function () {
                                room.kickPlayer(player.id, `Você atingiu o Limite de tempo para AFK, volte e jogue com a gente`, false);
                                room.sendAnnouncement(centerText(`${player.name} atingiu o tempo limite para AFK`), null, yellow, "bold", 0);
                            }, 500);
                        }
                    }, 10000);
                }
            }, 20000);
        }
    }, 270000);
};


// THE GOAT
function findPlayerWithMostHatTricks(players) {
    let maxHatTricks = 0;
    let playerWithMostHatTricks = null;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const playerName = player.name;
        const key = `hattrick_${playerName}`;
        const hatTricks = parseInt(localStorage.getItem(key)) || 0;
        if (hatTricks > maxHatTricks) {
            maxHatTricks = hatTricks;
            playerWithMostHatTricks = player.name;
        }
    }
    return playerWithMostHatTricks;
};
function getBiggestGoaler(players) {
    let maxGoals = 0;
    let biggestGoaler = null;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const goals = getStoredGoals(player);
        if (goals > maxGoals) {
            maxGoals = goals;
            biggestGoaler = player.name;
        }
    }
    return biggestGoaler;
};
function getBiggestAssistant(players) {
    let biggestAssistPlayer = null;
    let biggestAssists = -1;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const assists = getStoredAssists(player);
        if (assists > biggestAssists) {
            biggestAssists = assists;
            biggestAssistPlayer = player.name;
        }
    }
    return biggestAssistPlayer;
};
function getPlayerWithMostWins(players) {
    let maxWins = 0;
    let playerWithMostWins = null;
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const playerName = player.name;
        const key = `vitórias_${playerName}`;
        const wins = parseInt(localStorage.getItem(key)) || 0;
        if (wins > maxWins) {
            maxWins = wins;
            playerWithMostWins = player.name;
        }
    }
    return playerWithMostWins;
};
function ddd(playerName) {
    const key = `vitórias_${playerName}`;
    const wins = localStorage.getItem(key);
    return parseInt(wins) || 0; // Retorna 0 se não houver vitórias armazenadas
};
function ccc(playerName) {
    const key = `hattrick_${playerName}`;
    const value = localStorage.getItem(key);
    // Exibe mensagem no console informando o Hat Trick feito pelo jogador
    return parseInt(value) || 0;
};
function aaa(playerName) {
    const key = `goals_${playerName}`;
    const goals = localStorage.getItem(key);
    return parseInt(goals) || 0;
};
function bbb(playerName) {
    const key = `assists_${playerName}`;
    const assists = localStorage.getItem(key);
    return parseInt(assists) || 0; // Retorna 0 se não houver assistências armazenadas
}
// ZOEIRAS
function malcontato(goaler) {
    if (goaler.id === badassID) {
        var messages = [
            "Droga, é o " + goaler.name + "!",
            "E aí, chefe... Ta com 𝐌𝐚𝐥𝐜𝐨ntato? kkkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
};
function igodnesses(goaler, assistant) {
    if (goaler.id === badassID) {
        var messages = [
            "Bela, " + goaler.name + "! ❌",
            goaler.name + " não faz muito, mas faz bonito! kk",
            "Respeita o " + goaler.name + ", chat! ❌",
            "Merecido! Sou fã desse cara... Quem mais?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    } if (assistant.id === badassID) {
        var messages = [
            "Que passe, pae! ❌",
            goaler.name + " deve se sentir honrado...\nEsse passe do " + assistant.name + " garantiu o gol! ❌",
            goaler.name + " ficou fácil com esse passe do " + assistant.name + "... ❌",
            assistant.name + " tá pra jogo? Acho que sim, com uns passes desses...",
            "Aiin, com um passe desses não tem como errar, pô!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
};
function golcontra(goaler) {
    var messages = [
        "Se deu mal, " + goaler.name + "! 🤡",
        goaler.name + " aí não, pô! 🤡",
        "Calma " + goaler.name + ", não tá fácil pra ninguém...",
        "Dica pro " + goaler.name + ": Na próxima... NÃO MIRA NO SEU GOL!!",
        goaler.name + " tentou, quem sou eu pra julgar?"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    setTimeout(function () {
        room.sendAnnouncement(centerText(announcement), null, white, "bold");
    }, 3000);
};
function messidaangola(goaler, assistant) {
    if (goaler.id == lanoche) {
        var messages = [
            "Ankara, ankara, " + goaler.name + "! 🐐",
            "kk 🐐🐐🐐🐐 " + goaler.name + " o GOAT cantou! 🐐🐐🐐🐐 kk",
            "Respeita o " + goaler.name + ", chat! 🐐",
            "Respeita o GOAT, chat! 🐐",
            "Merecido! Sou fã desse cara... Quem mais?",
            "Golzinho mixuruca, em " + goaler.name + "? kkkkkk Zuera",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    } if (assistant.id == lanoche) {
        var messages = [
            "Que passe, pae! 🐐",
            goaler.name + " ficou fácil com esse passe do " + assistant.name + "... 🐐",
            assistant.name + " tá pra jogo? Acho que sim, com uns passes desses...",
            assistant.name + " aprendeu essa com o De Bruyne"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 3000);
    }
};
//
function storeHatTrick(player) {
    const playerName = player.name;
    const key = `hattrick_${playerName}`;
    const currentHatTricks = getHatTrick(player);
    const newHatTricks = currentHatTricks + 1;
    localStorage.setItem(key, newHatTricks);
    room.sendAnnouncement(centerText(`O jogador ${playerName} fez um Hat Trick! Total de Hat Tricks: ${newHatTricks}`), null, green, "bold");
};
function getHatTrick(player) {
    const playerName = player.name;
    const key = `hattrick_${playerName}`;
    const value = localStorage.getItem(key);
    // Exibe mensagem no console informando o Hat Trick feito pelo jogador
    return parseInt(value) || 0;
};
function storeGoals(player) {
    const playerName = player.name;
    const key = `goals_${playerName}`;
    const currentGoals = getStoredGoals(player); // Obter o valor atual de gols do jogador
    const newGoals = currentGoals + 1; // Incrementar em 1
    localStorage.setItem(key, newGoals.toString()); // Armazenar o novo valor no localStorage
};
function getStoredGoals(player) {
    const playerName = player.name;
    const key = `goals_${playerName}`;
    const goals = localStorage.getItem(key);
    return parseInt(goals) || 0;
};
function storeAssist(player) {
    const playerName = player.name;
    const key = `assists_${playerName}`;
    const currentAssists = getStoredAssists(player); // Obter o valor atual de assistências do jogador
    const newAssists = currentAssists + 1; // Incrementar em 1
    localStorage.setItem(key, newAssists.toString()); // Armazenar o novo valor no localStorage
};
function getStoredAssists(player) {
    const playerName = player.name;
    const key = `assists_${playerName}`;
    const assists = localStorage.getItem(key);
    return parseInt(assists) || 0; // Retorna 0 se não houver assistências armazenadas
};
function countGames() {
    if (teamR.length === 3 && teamB.length === 3) {
        incrementGames(teamR[0]);
        incrementGames(teamR[1]);
        incrementGames(teamR[2]);
        incrementGames(teamB[0]);
        incrementGames(teamB[1]);
        incrementGames(teamB[2]);
    } if (teamR.length === 2 && teamB.length === 2) {
        incrementGames(teamR[0]);
        incrementGames(teamR[1]);
        incrementGames(teamB[0]);
        incrementGames(teamB[1]);
    }
};
function incrementGames(player) {
    const playerName = player.name;
    const key = `jogos_${playerName}`;
    const currentGames = getStoredGames(player); // Obter o valor atual de jogos do jogador
    const newGames = currentGames + 1; // Incrementar em 1
    localStorage.setItem(key, newGames.toString()); // Armazenar o novo valor no localStorage
};
function getStoredGames(player) {
    const playerName = player.name;
    const key = `jogos_${playerName}`;
    const games = localStorage.getItem(key);
    return parseInt(games) || 0; // Retorna 0 se não houver jogos armazenados
};
function countWinsTeamR() {
    if (teamR.length === 3) {
        incrementWins(teamR[0]);
        incrementWins(teamR[1]);
        incrementWins(teamR[2]);
    } if (teamR.length === 2) {
        incrementWins(teamR[0]);
        incrementWins(teamR[1]);
    }
};
function countWinsTeamB() {
    if (teamB.length === 3) {
        incrementWins(teamB[0]);
        incrementWins(teamB[1]);
        incrementWins(teamB[2]);
    } if (teamB.length === 2) {
        incrementWins(teamB[0]);
        incrementWins(teamB[1]);
    }
};
function incrementWins(player) {
    const playerName = player.name;
    const key = `vitórias_${playerName}`;
    const currentWins = parseInt(localStorage.getItem(key)) || 0; // Obter o valor atual de vitórias do jogador
    const newWins = currentWins + 1; // Incrementar em 1
    localStorage.setItem(key, newWins.toString()); // Armazenar o novo valor no localStorage
};
function getStoredWins(player) {
    const playerName = player.name;
    const key = `vitórias_${playerName}`;
    const wins = localStorage.getItem(key);
    return parseInt(wins) || 0; // Retorna 0 se não houver vitórias armazenadas
};
function countLossesTeamR() {
    if (teamR.length === 3) {
        incrementLosses(teamR[0]);
        incrementLosses(teamR[1]);
        incrementLosses(teamR[2]);
    } if (teamR.length === 2) {
        incrementLosses(teamR[0]);
        incrementLosses(teamR[1]);
    }
};
function countLossesTeamB() {
    if (teamB.length === 3) {
        incrementLosses(teamB[0]);
        incrementLosses(teamB[1]);
        incrementLosses(teamB[2]);
    } if (teamB.length === 2) {
        incrementLosses(teamB[0]);
        incrementLosses(teamB[1]);
    }
};
function incrementLosses(player) {
    const playerName = player.name;
    const key = `derrotas_${playerName}`;
    const currentLosses = getStoredLosses(player); // Obter o valor atual de derrotas do jogador
    const newLosses = currentLosses + 1; // Incrementar em 1
    localStorage.setItem(key, newLosses.toString()); // Armazenar o novo valor no localStorage
};
function getStoredLosses(player) {
    const playerName = player.name;
    const key = `derrotas_${playerName}`;
    const losses = localStorage.getItem(key);
    return parseInt(losses) || 0; // Retorna 0 se não houver derrotas armazenadas
};
function calculateWinPercentage(player) {
    const wins = getStoredWins(player);
    const losses = getStoredLosses(player);
    const totalGames = wins + losses;
    const winPercentage = (wins / totalGames) * 100;
    const winPercentageString = parseInt(winPercentage.toFixed(2)).toString();
    return winPercentageString;
};

/* WEBHOOKS */ 

function sendAnnouncementToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1113511065309937764/vuBov9U--5L4S_lNoWToMiH_Prd9rq1q1180bZKCYCBtpyoA3-4llbqhz-ZNTsekQV3c"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/icons/1108404626014871633/39f9e5007c336295e78937769194251a.png?size=2048', // Avatar WEBHOOK
        username: 'Info. Players', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function chatlogsenddiscord(mensagem) {
    var chamar = new XMLHttpRequest();
    chamar.open("POST","https://discord.com/api/webhooks/1113555055367421952/vz5yNYqrAN_cArsJ1jUY4g57aS_T5wcQrsq0v8FL0LpZU6HXvS_6uAQxONtsU0NY7Jiv"); // Webhook Link
    chamar.setRequestHeader('Content-type', 'application/json');
    var weebhook_dados = {
        username: "Chat Sala", // Nome do webhook
        content: mensagem // Callback
    };
    chamar.send(JSON.stringify(weebhook_dados));
};

function sendKeyToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1120737971189067776/QLqVNa0RR7Of3XgcFfWRuXrQhoMIm8wFAsrZfDyjOG20fz9n9N2BFOyg2rKax-Lr7NPL"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1120758521735172137/image.png', // Avatar WEBHOOK
        username: 'secret-key', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};

function sendAdminCommandsToDiscord(message) {
    var request = new XMLHttpRequest();
    request.open("POST","https://discord.com/api/webhooks/1121137538879475842/vy43P0kqYM2n5ArOygOH8Nd5cArsVIss2y7nva2z5vPW1ybbnlbS2EUof_cvftOdrsAq"); // Webhook Link
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        avatar_url: 'https://cdn.discordapp.com/attachments/1113830556967379064/1121137833982304327/image.png', // Avatar WEBHOOK
        username: 'Admin Commands', // Nome WEBHOOK
        content: message
    };
    request.send(JSON.stringify(params));
};


/* FUNCTIONS */

function sendAnnouncement(announcement) {
    room.sendAnnouncement(announcement, null, white, "bold", 1);
};

function sendRandomAnnouncement(messages, color, fontWeight) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var randomMessage = messages[randomIndex];
    sendAnnouncement(randomMessage, white, "bold");
};

function centerText(string) {
    var space = parseInt((80 - string.length) * 0.8, 10);
    if (space <= 0) {
        return '';
    }
    return ' '.repeat(space) + string + ' '.repeat(space);
};

function docketFormat(string1, string2) {
    if (string1 !== undefined && string2 === undefined) {
        var space = 53 - (string1.length) * 0.8;
        return ' '.repeat(space) + string1
    } else if (string2 !== undefined && string1 === undefined) {
        return ' '.repeat(77) + string2
    } else if (string2 !== undefined && string1 !== undefined) {
        var space = 16 - (string1.length + 10 + string2.length)
        return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
    } else if (string1 === undefined && string2 === undefined) {
        return ''
    }
};

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // return random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
};

function arrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
};

function getTime(scores) {
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
};

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
};

/* BUTTONS */

function alwaysOnTeam() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == 0) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
            }
            return;
        } if (teamB.length == 0) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.BLUE);
            }
            return;
        }
    }
};

function IIIx() {
    if (teamS.length <= 1) {
        return;
    }
    else {
        if (teamR.length === 1 && teamB.length === 1) {
            if (teamS.length >= 2) {
                room.sendAnnouncement(centerText("Opa!! Chagou gente, vou ajustar e reiniciar"), null, white, "bold");
                setTimeout(function () {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    room.setPlayerTeam(teamS[1].id, Team.BLUE);
                    rr = true;
                    room.stopGame();
                    choose = true
                }, 800);
                setTimeout(function () {
                    checkTeamSizeAndChangeMap();
                    checkAndStartGame();
                }, 1200);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("2x2, tamo quase lá..."), null, white, "bold");
                    rr = false;
                }, 1800);
            }
            return;
        } if (teamR.length === 2 && teamB.length === 2) {
            if (teamS.length >= 2) {
                room.sendAnnouncement(centerText("Opa!! Chagou gente, vou ajustar e reiniciar"), null, white, "bold");
                setTimeout(function () {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    room.setPlayerTeam(teamS[1].id, Team.BLUE);
                    rr = true;
                    room.stopGame();
                    choose = true
                }, 800);
                setTimeout(function () {
                    checkTeamSizeAndChangeMap();
                    checkAndStartGame();
                }, 1200);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("3x3, agora sim!"), null, white, "bold");
                    rr = false;
                }, 1800);
            }
            return;
        }
    }
};

function topBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            if (afklist.includes(teamS[0].id)) {
                room.setPlayerTeam(teamS[1].id, Team.RED);
            } else {
                room.setPlayerTeam(teamS[0].id, Team.RED);
            }
        }
        else {
            if (afklist.includes(teamS[0].id)) {
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            } else if (afklist.includes(teamS[1].id)) {
                room.setPlayerTeam(teamS[2].id, Team.BLUE);
            } else {
                room.setPlayerTeam(teamS[0].id, Team.BLUE);
            }
        }
    }
};

function resetBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
    }
    else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
};

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
};

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(function () { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
};

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
};

/* GAME FUNCTIONS */

function getPlayerObjectByName(playerName) {
    for (let i = 0; i < players.length; i++) {
        const jogado = room.getPlayer(i);
        if (jogado.name === playerName) {
            return jogado;
        }
    }
    return null;
}

function checkAndStartGame() {
    if (teamS.length <= 2) {
        if (teamR.length === 2 && teamB.length === 2) {
            setTimeout(function () {
                room.sendAnnouncement(centerText("🤖 -- INÍCIO AUTOMÁTICO -- 🤖"), null, yellow, "bold");
                capchat = false;
                choose = false;
            }, 10);
            setTimeout(function () {
                room.sendAnnouncement(centerText("Atenção players!"), null, white, "normal", 2);
            }, 600);
            setTimeout(function () {
                checkTeamSizeAndChangeMap();
                room.sendAnnouncement(centerText("PLAY!"), null, green, "bold");
            }, 1500);
            setTimeout(function () {
                room.startGame();
                room.pauseGame(false);
            }, 2500);
        } if (teamR.length === 1 && teamB.length === 1) {
            setTimeout(function () {
                room.sendAnnouncement(centerText("🤖 -- INÍCIO AUTOMÁTICO -- 🤖"), null, yellow, "bold");
                capchat = false;
                choose = false;
            }, 10);
            setTimeout(function () {
                room.sendAnnouncement(centerText("Atenção players!"), null, white, "normal", 2);
            }, 600);
            setTimeout(function () {
                checkTeamSizeAndChangeMap();
                room.sendAnnouncement(centerText("PLAY!"), null, green, "bold");
            }, 1500);
            setTimeout(function () {
                room.startGame();
                room.pauseGame(false);
            }, 2500);
        }
    } if (teamR.length === 3 && teamB.length === 3) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🤖 -- INÍCIO AUTOMÁTICO -- 🤖"), null, yellow, "bold");
            capchat = false;
            choose = false;
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Atenção players!"), null, white, "normal", 2);
        }, 600);
        setTimeout(function () {
            checkTeamSizeAndChangeMap();
            room.sendAnnouncement(centerText("PLAY!"), null, green, "bold");
        }, 1500);
        setTimeout(function () {
            room.startGame();
            room.pauseGame(false);
        }, 2500);
    } if (teamR.length === 4 && teamB.length === 4) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🤖 -- INÍCIO AUTOMÁTICO -- 🤖"), null, yellow, "bold");
            capchat = false;
            choose = false;
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Atenção players!"), null, white, "normal", 2);
        }, 600);
        setTimeout(function () {
            checkTeamSizeAndChangeMap();
            room.sendAnnouncement(centerText("PLAY!"), null, green, "bold");
        }, 1500);
        setTimeout(function () {
            room.startGame();
            room.pauseGame(false);
        }, 2500);
    } 
};

function checkAndPauseGame() {
    if (teamR.length !== teamB.length) {
      setTimeout(() => { room.pauseGame(true); }, 500);
    }
};

function checkAndResumeGame() {
    if (teamR.length === teamB.length) {
        setTimeout(() => { room.pauseGame(false); }, 500);
    }
};

function checkTeamSizeLimit() {
    if (teamLimit === 3) {
        if (teamR.length === 4) {
            room.setPlayerTeam(teamR[3].id, Team.SPECTATORS);
            room.sendAnnouncement(centerText("Reduzindo time " + nameHome + "."), null, warn, "italic");
            room.sendAnnouncement(centerText("Máximo suportado: 3 players por equipe"), null, warn, "normal");
        } if (teamB.length === 4) {
            room.setPlayerTeam(teamB[3].id, Team.SPECTATORS);
            room.sendAnnouncement(centerText("Reduzindo time " + nameGuest + "."), null, warn, "italic");
            room.sendAnnouncement(centerText("Máximo suportado: 3 players por equipe"), null, warn, "normal");
        }
    } else if (teamLimit === 4) {
        if (teamR.length === 5) {
            room.setPlayerTeam(teamR[4].id, Team.SPECTATORS);
            room.sendAnnouncement(centerText("Reduzindo time " + nameHome + "."), null, warn, "italic");
            room.sendAnnouncement(centerText("Máximo suportado: 3 players por equipe"), null, warn, "normal");
        } if (teamB.length === 5) {
            room.setPlayerTeam(teamB[4].id, Team.SPECTATORS);
            room.sendAnnouncement(centerText("Reduzindo time " + nameGuest + "."), null, warn, "italic");
            room.sendAnnouncement(centerText("Máximo suportado: 3 players por equipe"), null, warn, "normal");
        }
    }
};

function registrarStreak() {
    var playerNames = [];
    var playerNamestext = [];
    if (teamR.length === 3) {
        playerNames = [teamR[0].name, teamR[1].name, teamR[2].name];
        playerNamestext = ["🏴‍☠️ Cap --> " + teamR[0].name + ", --> " + teamR[1].name + " e --> " + teamR[2].name];
        var key = "streak_" + playerNames.join("_");
        localStorage.setItem(key, streak);
        localStorage.setItem(key + "_players", JSON.stringify(playerNamestext));
    }
};
  
function obterRecordeStreak() {
    var maxStreak = 0;
    var playersInRecordStreak = [];
    var streakCount = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.startsWith("streak_")) {
        streakCount = parseInt(localStorage.getItem(key));
        if (streakCount > maxStreak) {
          maxStreak = streakCount;
          playersInRecordStreak = JSON.parse(localStorage.getItem(key + "_players"));
        }
      }
    }
    return { streakers: maxStreak, jogadores: playersInRecordStreak };
};

function verificarQuebraRecorde(streak) {
    var streakRecord = obterRecordeStreak().streakers;
    if (streak > streakRecord) {
        room.sendAnnouncement(centerText("🏆⚽ -- " + nameHome + " faz história na FUTZ! -- ⚽🏆"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Novo record de STREAk"), null, white, "bold");
        room.sendAnnouncement(centerText(obterRecordeStreak().jogadores), null, white, "bold");
        room.sendAnnouncement(centerText("Estão à " + obterRecordeStreak().streakers + " sem perder!"), null, white, "bold");
        return true; // O recorde de streak foi quebrado
    } else {
        return false; // O recorde de streak não foi quebrado
    }
};

// Função para obter nome do jogador pelo ID
function getPlayerName(playerId) {
    const player = room.getPlayer(playerId);
    if (player) {
    return player.nome;
    }
    return null;
}

function getPlayersList() {
    if (teamR.length == 1) {
        redp1 = teamR[0].name;
        redp2 = " ";
        redp3 = " ";
    } if (teamR.length == 2) {
        redp1 = teamR[0].name;
        redp2 = teamR[1].name;
        redp3 = " ";
    } if (teamR.length == 3) {
        redp1 = teamR[0].name;
        redp2 = teamR[1].name;
        redp3 = teamR[2].name;
    } if (teamB.length == 1) {
        bluep1 = teamB[0].name;
        bluep2 = " ";
        bluep3 = " ";
    } if (teamB.length == 2) {
        bluep1 = teamB[0].name;
        bluep2 = teamB[1].name;
        bluep3 = " ";
    } if (teamB.length == 3) {
        bluep1 = teamB[0].name;
        bluep2 = teamB[1].name;
        bluep3 = teamB[2].name;
    }
};

function getPlayersGoalCount() {
    if (teamR.length == 1) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1++;}
    } if (teamR.length == 2) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1++;} if (lastPlayersTouched[0].id == teamR[1].id) {goalsRp2++;}
    } if (teamR.length == 3) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1++;} if (lastPlayersTouched[0].id == teamR[1].id) {goalsRp2++;} if (lastPlayersTouched[0].id == teamR[2].id) {goalsRp3++;}
    } if (teamB.length == 1) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1++;}
    } if (teamB.length == 2) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1++;} if (lastPlayersTouched[0].id == teamB[1].id) {goalsBp2++;}
    } if (teamB.length == 3) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1++;} if (lastPlayersTouched[0].id == teamB[1].id) {goalsBp2++;} if (lastPlayersTouched[0].id == teamB[2].id) {goalsBp3++;}
    }
};

function getPlayersGoalContra() {
    if (teamR.length == 1) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1--;}
    } if (teamR.length == 2) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1--;} if (lastPlayersTouched[0].id == teamR[1].id) {goalsRp2--;}
    } if (teamR.length == 3) {
        if (lastPlayersTouched[0].id == teamR[0].id) {goalsRp1--;} if (lastPlayersTouched[0].id == teamR[1].id) {goalsRp2--;} if (lastPlayersTouched[0].id == teamR[2].id) {goalsRp3--;}
    } if (teamB.length == 1) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1--;}
    } if (teamB.length == 2) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1--;} if (lastPlayersTouched[0].id == teamB[1].id) {goalsBp2--;}
    } if (teamB.length == 3) {
        if (lastPlayersTouched[0].id == teamB[0].id) {goalsBp1--;} if (lastPlayersTouched[0].id == teamB[1].id) {goalsBp2--;} if (lastPlayersTouched[0].id == teamB[2].id) {goalsBp3--;}
    }
};

function getPlayersAssistCount() {
    if (teamR.length == 1) {
        if (lastPlayersTouched[1].id == teamR[0].id) {assistsRp1++;}
    } if (teamR.length == 2) {
        if (lastPlayersTouched[1].id == teamR[0].id) {assistsRp1++;} if (lastPlayersTouched[1].id == teamR[1].id) {assistsRp2++;}
    } if (teamR.length == 3) {
        if (lastPlayersTouched[1].id == teamR[0].id) {assistsRp1++;} if (lastPlayersTouched[1].id == teamR[1].id) {assistsRp2++;} if (lastPlayersTouched[1].id == teamR[2].id) {assistsRp3++;}
    } if (teamB.length == 1) {
        if (lastPlayersTouched[1].id == teamB[0].id) {assistsBp1++;}
    } if (teamB.length == 2) {
        if (lastPlayersTouched[1].id == teamB[0].id) {assistsBp1++;} if (lastPlayersTouched[1].id == teamB[1].id) {assistsBp2++;}
    } if (teamB.length == 3) {
        if (lastPlayersTouched[1].id == teamB[0].id) {assistsBp1++;} if (lastPlayersTouched[1].id == teamB[1].id) {assistsBp2++;} if (lastPlayersTouched[1].id == teamB[2].id) {assistsBp3++;}
    }
};

function hatTrickCount() {
    if (goalsRp1 === 3 && teamR.length === 3) {
        storeHatTrick(teamR[0]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamR[0].name + " agora tem " + getHatTrick(teamR[0]) + " hat-tricks"), null, white, "normal");
        }, 3000);
    } if (goalsRp2 === 3 && teamR.length === 3) {
        storeHatTrick(teamR[1]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamR[1].name + " agora tem " + getHatTrick(teamR[1]) + " hat-tricks"), null, white, "normal");
        }, 3000);
    } if (goalsRp2 === 3 && teamR.length === 3) {
        storeHatTrick(teamR[2]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamR[2].name + " agora tem " + getHatTrick(teamR[2]) + " hat-tricks"), null, white, "normal");
        }, 3000);
    } if (goalsBp1 === 3 && teamB.length === 3) {
        storeHatTrick(teamB[0]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamB[0].name + " agora tem " + getHatTrick(teamB[0]) + " hat-tricks"), null, white, "normal");
        }, 3000);
    } if (goalsBp2 === 3 && teamB.length === 3) {
        storeHatTrick(teamB[1]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamB[1].name + " agora tem " + getHatTrick(teamB[1]) + " hat-tricks"), null, white, "normal");
        }, 3000);
    } if (goalsBp3 === 3 && teamB.length === 3) {
        storeHatTrick(teamB[2]);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏆⚽ -- Mais um entra pra história da FUTZ! -- ⚽🏆"), null, yellow, "normal");
            room.sendAnnouncement(centerText("HAT-TRICK do brabo!"), null, green, "bold");
            room.sendAnnouncement(centerText(teamB[2].name + " agora tem " + getHatTrick(teamB[2]) + " hat-tricks"), null, white, "normal");
        }, 3000);
    }
};

function checkTime() {
    const scores = room.getScores();
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => { checkTimeVariable = false; }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => { room.stopGame(); }, 2000);
            }
            return;
        }
        room.sendAnnouncement(centerText("PRORROGAÇÃO"), null, yellow, "bold");
        goldenGoal = true;
        var messages = [
            drawTimeLimit * 60 + " segundos para o final!",
            "Vou dar " + drawTimeLimit * 60 + " segundos!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "normal");
        var messagens = [
            "⚽ Primeiro GOL vence! ⚽",
            "⚽ GOL DE OURO ativado ⚽",
        ];
        var randomIndex = Math.floor(Math.random() * messagens.length);
        var announcement = messagens[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, white, "bold");
    } if (scores.time > scores.timeLimit + drawTimeLimit * 60 - 15 && scores.time <= scores.timeLimit + drawTimeLimit * 60) {
        if (checkTimeVariable == false && announced == false) {
            checkTimeVariable = true;
            announced = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(centerText("⌛ 15 segundos para o empate! ⌛"), null, yellow, "bold");
        }
    } if (scores.time > (scores.timeLimit + drawTimeLimit * 60)) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
};

function endGame(winner) { // no stopGame() function in it
    const scores = room.getScores();
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    hatTrickCount();
    if (winner == Team.RED) {
        streak++;
        registrarStreak();
        verificarQuebraRecorde(streak);
        room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        countWinsTeamR();
        countLossesTeamB();
        setTimeout(function () {
            choose = true;
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold", 0);
            room.sendAnnouncement(centerText("Nº, auto (fila) ou rand (aleatório)"), teamB[0].id, white, "normal", 0);
            room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic", 0);
            setTimeout(function () {
                room.sendAnnouncement(centerText(teamB[0].name + " , você é o capitão da equipe."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText(teamR[0].name + " , você é o capitão da equipe."), teamR[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamR[0].id, yellow, "italic");
            }, 4000);
            setTimeout(function () {
            capchat = true;
                room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                setTimeout(function () {
                    if (teamB.length == 1) {
                        blueToSpecBtn();
                        setTimeout(function () {
                            setTimeout(function () {
                                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                                room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold", 0);
                                room.sendAnnouncement(centerText("Nº, auto (fila) ou rand (aleatório)"), teamB[0].id, white, "normal", 0);
                                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic", 0);
                            }, 600);
                        }, 300);
                    }
                }, 21000);
            }, 1000);
        }, 4000);
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        registrarStreak();
        room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        countWinsTeamB();
        countLossesTeamR();
        setTimeout(function () {
            choose = true;
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
            room.sendAnnouncement(centerText("Nº, auto (fila) ou rand (aleatório)"), teamB[0].id, white, "normal");
            room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic");
            setTimeout(function () {
                room.sendAnnouncement(centerText(teamB[0].name + " , você é o capitão da equipe."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText(teamR[0].name + " , você é o capitão da equipe."), teamR[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamR[0].id, yellow, "italic");
            }, 4000);
            setTimeout(function () {
                room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                setTimeout(function () {
                    if (teamB.length == 1) {
                        blueToSpecBtn();
                        setTimeout(function () {
                            setTimeout(function () {
                                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                                room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold", 0);
                                room.sendAnnouncement(centerText("Nº, auto (fila) ou rand (aleatório)"), teamB[0].id, white, "normal", 0);
                                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic", 0);
                            }, 600);
                        }, 300);
                    }
                }, 21000);
            }, 1000);
        }, 4000);
    }
    else {
        streak = 0;
        room.sendAnnouncement(centerText("💤 Limite de TEMPO! 💤"), null, yellow, "bold");
        room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "bold");
        room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, white, "bold");
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "normal");
        }
        setTimeout(function () {
            choose = true;
            redFirst = true;
            room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
            room.sendAnnouncement(centerText(teamR[0].name + " e " + teamB[0].name + "escolhem"), null, white, "bold");
            room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), teamR[0].id, white, "italic", 0);
            room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamR[0].id, yellow, "italic", 0);
            room.sendAnnouncement(centerText(nameHome + " escolhe primeiro!"), null, warn, "bold");
            setTimeout(function () {
                room.sendAnnouncement(centerText(teamB[0].name + " , você é o capitão da equipe."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamB[0].id, yellow, "italic");
                room.sendAnnouncement(centerText(teamR[0].name + " , você é o capitão da equipe."), teamR[0].id, yellow, "italic");
                room.sendAnnouncement(centerText("Escolha o uniforme digitando o acrônimo do time. Ex.: Digite 'bar' ou 'rea'."), teamR[0].id, yellow, "italic");
            }, 4000);
            setTimeout(function () {
                room.sendAnnouncement(centerText("*** 20segundos e a vez de escolha será de " + teamB[0].name + " ***"), null, warn, "italic");
            }, 1000);
        }, 4000);
        setTimeout(function () {
            redFirst = false;
            room.sendAnnouncement(centerText("*** " + teamB[0].name + " está liberado para escolher ***"), null, yellow, "italic");
            room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), teamB[0].id, yellow, "italic");
        }, 20000);
    }
};

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
};

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}; 

function handleInactivity() {
    if ((teamR.length + teamB.length) > 1) {
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
            room.sendAnnouncement(centerText("⛔ " + room.getPlayer(extendedP[i][eP.ID]).name + ", se mova ou fale no Chat em " + Math.floor(afkLimit / 3) + " segundos ou irá para a fila!", extendedP[i][eP.ID]), extendedP[i][eP.ID], yellow, "bold"); 
        } if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => {room.stopGame();}, 10);
            }
            room.setPlayerTeam(extendedP[i][eP.ID], Team.SPECTATORS);
            room.sendAnnouncement(centerText(room.getPlayer(extendedP[i][eP.ID]).name + " entrou para a lista de AFKs"), null, warn, "italic");
            afklist.push(extendedP[i][eP.ID]);
            room.sendAnnouncement(centerText("Você está na lista de AFKs"), extendedP[i][eP.ID], warn, "italic", 0);
            room.sendAnnouncement(centerText("para sair, digite !afk"), extendedP[i][eP.ID], warn, "italic");
            checkAndPauseGame();
        }
    }
};

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
};

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
};

function getGK(player) {
return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
};

function setGK(player, value) {
extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
};

function getMute(player) {
return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
};

function setMute(player, value) {
extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
};

/* PLAYER FUNCTIONS */

function choosigPlayer (player, message) {
    var nomao = player.name;
    var escolhido = message;
    var time = player.team;
    if (choose === true) {
        if (escolhido == 1) {
            if (teamS.length >= 1) {
                if (afklist.includes(teamS[0].id)) {
                    room.sendAnnouncement(centerText(`${teamS[0].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[0].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[0].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[0].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não há ninguém na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 2) {
            if (teamS.length >= 2) {
                if (afklist.includes(teamS[1].id)) {
                    room.sendAnnouncement(centerText(`${teamS[1].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[1].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[1].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[1].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[1].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[1].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 3) {
            if (teamS.length >= 3) {
                if (afklist.includes(teamS[2].id)) {
                    room.sendAnnouncement(centerText(`${teamS[2].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[2].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[2].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[2].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[2].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[2].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 4) {
            if (teamS.length >= 4) {
                if (afklist.includes(teamS[3].id)) {
                    room.sendAnnouncement(centerText(`${teamS[3].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[3].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[3].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[3].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[3].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[3].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 5) {
            if (teamS.length >= 5) {
                if (afklist.includes(teamS[4].id)) {
                    room.sendAnnouncement(centerText(`${teamS[4].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[4].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[4].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[4].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[4].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[4].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 6) {
            if (teamS.length >= 6) {
                if (afklist.includes(teamS[5].id)) {
                    room.sendAnnouncement(centerText(`${teamS[5].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[5].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[5].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[5].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[5].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[5].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 7) {
            if (teamS.length >= 7) {
                if (afklist.includes(teamS[6].id)) {
                    room.sendAnnouncement(centerText(`${teamS[6].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[6].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[6].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[6].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[6].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[6].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 8) {
            if (teamS.length >= 8) {
                if (afklist.includes(teamS[7].id)) {
                    room.sendAnnouncement(centerText(`${teamS[7].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[7].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[7].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[7].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[7].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[7].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 9) {
            if (teamS.length >= 9) {
                if (afklist.includes(teamS[8].id)) {
                    room.sendAnnouncement(centerText(`${teamS[8].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[8].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[8].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[8].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[8].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[8].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 10) {
            if (teamS.length >= 10) {
                if (afklist.includes(teamS[9].id)) {
                    room.sendAnnouncement(centerText(`${teamS[9].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[9].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[6].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[9].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[9].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[9].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 11) {
            if (teamS.length >= 11) {
                if (afklist.includes(teamS[10].id)) {
                    room.sendAnnouncement(centerText(`${teamS[10].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[10].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[10].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[10].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[10].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[10].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 12) {
            if (teamS.length >= 12) {
                if (afklist.includes(teamS[11].id)) {
                    room.sendAnnouncement(centerText(`${teamS[11].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[11].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[11].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[11].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[11].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[11].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 13) {
            if (teamS.length >= 13) {
                if (afklist.includes(teamS[12].id)) {
                    room.sendAnnouncement(centerText(`${teamS[12].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[12].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[12].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[12].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[12].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[12].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 14) {
            if (teamS.length >= 14) {
                if (afklist.includes(teamS[13].id)) {
                    room.sendAnnouncement(centerText(`${teamS[13].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[13].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[13].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[13].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[13].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[13].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 15) {
            if (teamS.length >= 15) {
                if (afklist.includes(teamS[14].id)) {
                    room.sendAnnouncement(centerText(`${teamS[14].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[14].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[14].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[14].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[14].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[14].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 16) {
            if (teamS.length >= 16) {
                if (afklist.includes(teamS[15].id)) {
                    room.sendAnnouncement(centerText(`${teamS[15].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[15].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[15].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[15].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[15].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[15].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 17) {
            if (teamS.length >= 17) {
                if (afklist.includes(teamS[16].id)) {
                    room.sendAnnouncement(centerText(`${teamS[16].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[16].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[16].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[16].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[16].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[16].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        } else if (escolhido == 18) {
            if (teamS.length >= 18) {
                if (afklist.includes(teamS[17].id)) {
                    room.sendAnnouncement(centerText(`${teamS[17].id} está AFK`), null, warn, "italic", 2);
                } else if (time == Team.BLUE) {
                    if (redFirst == false) {
                        room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[17].name}`), null, white, "bold");
                        room.setPlayerTeam(teamS[17].id, Team.BLUE);
                    } else {
                        room.sendAnnouncement(centerText(`${teamR[17].name} deve escolher primeiro. Aguarde sua vez`), null, warn, "italic");
                    }
                } else {
                    room.sendAnnouncement(centerText(`${nomao} escalou ${teamS[17].name}`), null, white, "bold");
                    room.setPlayerTeam(teamS[17].id, Team.RED);
                }
            } else {
                room.sendAnnouncement(centerText(`Não existe este player na fila...`), null, warn, "italic");
            }
        }
    }
    else {
        room.sendAnnouncement(centerText(`O Choose Mode não está ativado`), null, warn, "italic");
    }
}

function updateTeams() {
    players = room.getPlayerList().filter((player) => player.id != 0);
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
    if (teamR.length === 1) {
        redID = [teamR[0].id];
    } if (teamB.length === 1) {
        blueID = [teamB[0].id];
    } if (teamR.length === 2) {
        redID = [teamR[0].id, teamR[1].id];
    } if (teamB.length === 2) {
        blueID = [teamB[0].id, teamB[1].id];
    } if (teamR.length === 3) {
        redID = [teamR[0].id, teamR[1].id, teamR[2].id];
    } if (teamB.length === 3) {
        blueID = [teamB[0].id, teamB[1].id, teamB[2].id];
    } if (choose === true) {
        checkAndStartGame();
        alwaysOnTeam();
    }
};

function updateAdmins() {
    if (autoadmin === true) {
        if (players.length == 0 || players.find((player) => player.admin) != null) {
            return;
        }
        var copie = [];
        players.forEach(function (element) { copie.push(element.id); });
        room.setPlayerAdmin(arrayMin(copie), true); // Give admin to the player who's played the longest on the room
    }
};

function updateList(number, team) {
    
    if (room.getScores() != null) {
        if (team == Team.RED) {
            GKList = GKList.slice(0, number).concat(GKList.slice(number + 1, maxPlayers)).concat(0).concat(GKList.slice(maxPlayers, GKList.length));

        }
        else if (team == Team.BLUE) {
            GKList = GKList.slice(0, maxPlayers + number).concat(GKList.slice(maxPlayers + number + 1, GKList.length).concat(0));
        }
    }
};

function isBlacklisted(player){
    return blacklist.filter(b => b.Auth == player.auth || b.Conn == player.conn).length > 0;
};

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                lastTeamTouched = players[i].team;
            }
        }
    }
};

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position.x < k[1]) {
                k[0] = i;
                k[1] = teamR[i].position.x;
            }
        }
        GKList[k[0]]++;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position.x > k[1]) {
                k[0] = i;
                k[1] = teamB[i].position.x;
            }
        }
        GKList[maxPlayers + k[0]]++;
    }
};

function updateStats() { // Função atualizar STATUS a cada fim de jogo.
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.
    scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
    var stats;
    for (var i = 0; i < allReds.length; i++) {
    localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0,
    0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name]; stats[Ss.GA]++;
    lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
    stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
    localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < allBlues.length; i++) {
    localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats =
    [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name]; stats[Ss.GA]++;
    lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
    stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
    localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < game.goals.length; i++) {
    if (game.goals[i].striker != null) {
    if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
    stats[Ss.GL]++;
    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
    }
    } if (game.goals[i].assist != null) {
    if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
    stats[Ss.AS]++;
    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
    }
    }
    } if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
    stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
    stats[Ss.GK]++;
    game.scores.blue == 0 ? stats[Ss.CS]++ : null;
    stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
    localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
    } if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
    stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
    stats[Ss.GK]++;
    game.scores.red == 0 ? stats[Ss.CS]++ : null;
    stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
    localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
    }
    }
};
  
function findGK() { // Função que procura o GK da partida.
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
        else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
};

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    nameForbid(player);
    var messages = [
        "👋 Salve, " + player.name + "!",
        "👋 Eae, " + player.name + "!",
    ];
    if(badass.includes(player.conn)) {
        room.setPlayerAdmin(player.id, true);
        badassID = player.id;
        room.sendAnnouncement(centerText("O DONO da sala entrou!"), null, green, "bold"); 
    } if(soberbo.includes(player.conn)) {
        room.setPlayerAdmin(player.id, true);
        soberboID = player.id;
        room.sendAnnouncement(centerText("Saúdem o Soberano " + player.name + "!"), null, green, "bold"); 
    } if(supervisors.includes(player.conn)) {
        supervisorsID.push(player.id);
        lanoche = player.id;
        room.setPlayerAdmin(player.id, true);
        room.sendAnnouncement(centerText("O GOAT " + player.name + " entrou na sala!"), null, green, "bold");
        /*setTimeout(function () {
            room.sendAnnouncement(centerText("Se Malco e/ou Soberbo estiverem na sala é PROIBIDO pegar adm"), player.id, warn, "normal");
        }, 1000);*/
    } if(blacklistconn.includes(player.conn)) {
        room.sendAnnouncement(centerText("Ae, rapa... Se despeçam do " + player.name + ". Ele ta de saída!"), null, white, "bold");
        room.sendAnnouncement(centerText("você está na blacklist e será banido!"), player.id, warn, "italic");
        blacklistconnID.push(player.id);
        banBlackListed(player);
    } if(cartaoamarelo.includes(player.conn)) {
        let forkedPlayer = player.name;
        pendurados.push(" 🟨 " + forkedPlayer);
        room.sendAnnouncement(centerText("🟨 O player " + forkedPlayer + " está pendurado! 🟨"), null, warn, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText("você levou cartão amarelo 🟨 na sua ultima estadia na sala!"), player.id, warn, "italic");
            room.sendAnnouncement(centerText("SUJEITO À BAN temporário"), player.id, warn, "normal");
        }, 1000);
    }
    var conn = player.conn
    var ipv4 = conn.match(/.{1,2}/g).map(function(v){
    return String.fromCharCode(parseInt(v, 16));
    }).join('');
    sendAnnouncementToDiscord("```"+"**📝Informações do jogador, conn, auth, IP e data ⏰**" + "\n" + "🛸 **Nick:** " + player.name +"\n" + 
    "🌐 **Conn:** " + player.conn + "\n" + "🔥 **Auth:** "+ player.auth + "\n" + "🌏 **Ipv4:** " + (ipv4) + "\n" + "📅 **Data:** " + `${getDateInfo()}` +"```");
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    updateTeams();
    updateAdmins();
    setTimeout(() => { alwaysOnTeam(); }, 200);
    setTimeout(function () {
        alwaysOnTeam();
        IIIx();
    }, 1000);
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    playerList.push({"object": player, "nome": player.name, "id": player.id});
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    lastPlayerJoinedID = player.id;
    lastPlayerJoinedNAME = player.name;
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {room.setPlayerTeam(0, Team.SPECTATORS);return;} if (afklist.includes(changedPlayer.id)) {afkNEXTplayer();return;} if (changedPlayer.team == Team.SPECTATORS) {updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);}
    if (afklist.includes(changedPlayer.id)) {room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);room.sendAnnouncement(centerText(`${changedPlayer.name} não pode jogar agora. Está AFK`), null, yellow, "bold", 0);}
    updateTeams();
    checkTeamSizeLimit();
};

room.onPlayerLeave = function (player) {
    updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
    updateTeams();
    updateAdmins();
    checkAndPauseGame();
    setTimeout(() => { alwaysOnTeam(); }, 200);
    if (banidao == false) {
        room.sendAnnouncement(centerText(player.name + " vazou!"), null, white, "bold");
    }
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    updateTeams();
    checkAndPauseGame();
    if (ban == true) {
        banList.push([kickedPlayer.name, kickedPlayer.id]);
        room.sendAnnouncement(centerText(kickedPlayer.name + " levou ban!"), null, white, "bold");
        room.sendAnnouncement(centerText("Banido por não seguir as REGRAS!"), null, warn, "italic");
        setTimeout(function () {
            banidao = false;
        }, 20);
        console.log("ban list : " + banList);
        sendAdminCommandsToDiscord("🔴 Jogador Banido:" + "\n"+
        "🛸 Nick: " + kickedPlayer.name + "\n" +
        "🌐 Conn: " + kickedPlayer.conn + "\n" +
        "🔥 Auth:  " + kickedPlayer.auth + "\n" +
        "📅 Data: " + `${getDateInfo()}`);
    }
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    chatlogsenddiscord(`${dataehora()}` + " - " + player.name + ': ' + message); 
    var mensagem = message;
    message = message.split(" ");
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(`Comandos:`), player.id, yellow, "bold");
        room.sendAnnouncement(centerText(`!me, !goat, !streak, !help, !tag, !uniforme, !gklist, !regras, !discord,\n!list, !vs, !verdade, !bb, !bye, !flw, !afk`), null, yellow, "normal");
        room.sendAnnouncement(centerText("Comemorações:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText(`!gol, !ain, !chupa, !lenda, !smith, !gk, !brabo`), player.id, yellow, "normal");
        room.sendAnnouncement(centerText(`Uniformes:`), player.id, yellow, "bold");
        room.sendAnnouncement(centerText(`!seleçoes, !clubes, !euro, !sula`), player.id, yellow, "normal");
        if (player.admin) {
            room.sendAnnouncement(centerText(`Admin Commands:`), player.id, yellow, "bold");
            room.sendAnnouncement(centerText(`rr, go/play/bora, !who <r/b/rb>, !ban <nome>, !clearbans,\n!comofaz, !clean, !limpar, !size <r1/b1> <big/normal/small>,\n!mute <red/blue/spec> <30/1>, !list <red/blue/spec>`), player.id, yellow, "normal");
            room.sendAnnouncement(centerText(`Mapas:`), player.id, yellow, "bold");
            room.sendAnnouncement(centerText("!2x, !3x <blue>, !5x"), player.id, yellow, "normal");
            room.sendAnnouncement(centerText(`Choose Mode:`), player.id, yellow, "bold");
            room.sendAnnouncement(centerText(`!choose <on/off>, !redfirst <on/off>`), player.id, yellow, "normal");
            room.sendAnnouncement(centerText(`Troca de uniforme:`), player.id, yellow, "bold");
            room.sendAnnouncement(centerText(`uni (acronimo de !uniforme), unix <red/blue> (clubes), !selecrand <red/blue>`), player.id, yellow, "normal");
        }
    } if (muteList.includes(player.id)) {
        room.sendAnnouncement(centerText(`Você está mutado!`), player.id, warn, "italic");
        return false;
    } if (["!clearbans", "!limparbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.clearBans();
            room.sendAnnouncement(centerText(player.name + " limpou a lista de banimentos."), null, warn, "normal");
            console.log("ban list : " + banList);
        }
    } if (["!ban", "ban"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] != null) {
                getPlayerNameByID(message[1])
                room.sendAnnouncement(centerText("Pronto!\nUsuário" + playertoban.name + "banido"), player.id, warn, "italic");
                room.kickPlayer(playertoban.id,"Você foi banido, saiba mais em https://discord.gg/AR7ypuzJG8 ",true);
                banList.push(playertoban.name, playertoban.id);
                sendAdminCommandsToDiscord("🔴 Jogador Banido:" + "\n"+
                "🛸 Nick: " + playertoban.name + "\n" +
                "🌐 Conn: " + playertoban.conn + "\n" +
                "🔥 Auth:  " + playertoban.auth + "\n" +
                "📅 Data: " + `${getDateInfo()}`);
                console.log("ban list : " + banList);
            } if (message[1] == "last") {
                room.sendAnnouncement(centerText("Pronto!\nUsuário" + lastPlayerJoinedNAME + "banido"), player.id, warn, "italic");
                room.kickPlayer(lastPlayerJoinedID,"Você foi banido, saiba mais em https://discord.gg/AR7ypuzJG8", true);
                banList.push(lastPlayerJoinedNAME, lastPlayerJoinedID);
                sendAdminCommandsToDiscord("🔴 Jogador Banido:" + "\n"+
                "🛸 Nick: " + bannedName + "\n" +
                "🌐 Conn: " + bannedId.conn + "\n" +
                "🔥 Auth:  " + bannedId.auth + "\n" +
                "📅 Data: " + `${getDateInfo()}`);
                console.log("ban list : " + banList);
            }
        }
        return false;
    } if (["!me", "!eu", "stats", "!stats"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[📄] " + player.name + " stats:  🎮 Jogos: " + getStoredGames(player) + " ⚽️ Gols: " + getStoredGoals(player) + ", 👟 Assistências: " + getStoredAssists(player) + ", 🏆 Hat-tricks: " + getHatTrick(player) + ", ✅ Vitórias: " + getStoredWins(player) + ", ⛔ Derrotas: " + getStoredLosses(player) + ", Taxa de vitórias: " + calculateWinPercentage(player) + "%", null, white, "bold"); 
        /*
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
        room.sendAnnouncement("[📄] Seus stats: 🎮 Jogos: " + stats[Ss.GA] + ", ✅ Vitórias: " + stats[Ss.WI] + ", ⛔ Derrotas: " + stats[Ss.LS] + ", 🏆 Taxa de vitórias: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Assistências: " + stats[Ss.AS] + ", 🧤 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id, white, "normal"); 
        */
        return false;
    } if (["!goat", "goat", "!best"].includes(message[0].toLowerCase())) {
        let maisgols = getBiggestGoaler(players);
        let maisassists = getBiggestAssistant(players);
        let maishats =findPlayerWithMostHatTricks(players);
        let maiswins = getPlayerWithMostWins(players);
        room.sendAnnouncement(centerText("🐐 THE GOAT 🐐"), null, white, "bold");
        room.sendAnnouncement(centerText("top players ranking"), null, yellow, "italic");
        room.sendAnnouncement(centerText("MAIS GOLS ⚽ --> " + maisgols + " ("+ aaa(maisgols) + ")"), null, white, "bold");
        room.sendAnnouncement(centerText("MAIS ASSISTS 👟 --> " + maisassists + " ("+ bbb(maisassists) + ")"), null, white, "bold");
        room.sendAnnouncement(centerText("MAIS HAT-TRICKS 🏆 --> " + maishats + " ("+ ccc(maishats) + ")"), null, white, "bold");
        room.sendAnnouncement(centerText("MAIS VITÓRIAS ✅ --> " + maiswins + " ("+ ddd(maiswins) + ")"), null, white, "bold");
        return false;
    } if (["!streak", "streak"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("🏆⚽ -- MELHOR TRIO DA FUTZ -- ⚽🏆"), null, yellow, "bold", 0);
        room.sendAnnouncement(centerText(obterRecordeStreak().jogadores), null, white, "bold", 0);
        room.sendAnnouncement(centerText("Com o record de " + obterRecordeStreak().streakers + " vitórias consecutivas!"), null, white, "bold");
        return false;
    } if (["!record", "record"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Record Atual: " + obterRecordeStreak().streakers + " vitórias consecutivas!"), null, white, "bold");
        room.sendAnnouncement(centerText("Faltam " + (obterRecordeStreak().streakers - streak) + " vitórias para " + nameHome + " alcançar"), null, white, "bold", 0);
        return false;
    } if (["!redfirst"].includes(message[0].toLowerCase())) {
        if (message[1] == "on") {
            room.sendAnnouncement(centerText("RedFirst Ativado"), null, green, "bold");
            redFirst = true;
        }
        else if (message[1] == "off") {
            room.sendAnnouncement(centerText("RedFirst Desativado"), null, green, "bold");
            redFirst = false;
        }
    } if (["!who"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == "r") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Você escolhe, " + teamR[0].name), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), null, yellow, "italic");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            } else if (message[1] == "b") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Você escolhe, " + teamB[0].name), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), null, yellow, "italic");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            } else if (message[1] == "rb") {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText(teamR[0].name + " e " + teamB[0].name + "escolhem"), null, white, "bold");
                room.sendAnnouncement(centerText("Para escolher digite Nº do player na fila, auto (fila) ou rand (aleatório)"), null, white, "italic");
                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " escolhe primeiro!"), null, warn, "bold");
                choose = true;
                redFirst = true;
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos e a vez de escolha será de " + teamB[0].name + " ***"), null, warn, "italic");
                }, 1000);
                setTimeout(function () {
                    redFirst = false;
                    room.sendAnnouncement(centerText("*** " + teamB[0].name + " está liberado para escolher ***"), null, yellow, "italic");
                }, 20000);
            } else if (message[1] == null) {
                room.sendAnnouncement(centerText("ATENÇÃO"), null, yellow, "bold");
                room.sendAnnouncement(centerText("Escolha seu time"), null, white, "bold");
                room.sendAnnouncement(centerText("Nº, nome, auto (fila) ou rand (aleatório)"), null, white, "normal");
                room.sendAnnouncement(centerText("Obs* digite 'lista' para ver a fila"), null, yellow, "italic");
                setTimeout(function () {
                    room.sendAnnouncement(centerText("*** 20segundos de inatividade voltará para a fila e o próx. escolhe ***"), null, warn, "italic");
                }, 1000);
            }
        }
    } if (["auto", "fila"].includes(message[0].toLowerCase())) {
        if (choose === true && teamS.length > 1) {    
            if (player.id === teamR[0].id) {
                if (teamR.length == 1) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[0].name + " e " + teamS[1].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    room.setPlayerTeam(teamS[1].id, Team.RED);
                } else if (teamR.length == 2) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                }
            } if (player.id == teamB[0].id && redFirst === false) {
                if (teamB.length == 1) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[0].name + " e " + teamS[1].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    room.setPlayerTeam(teamS[1].id, Team.BLUE);
                } else if (teamB.length == 2) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escolheu AUTO"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                }
            } else if (player.id === teamB[0].id && redFirst === true) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else {return false;}
        }
        else if (player.id === (teamR[0].id || teamB[0].id) && choose === false) {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
        else {return false;}
        return false;
    } if (["rand", "random"].includes(message[0].toLowerCase())) {
        var randred1 = Math.floor(Math.random() * teamS.length);
        var randred2 = Math.floor(Math.random() * teamS.length);
        var randblue1 = Math.floor(Math.random() * teamS.length);
        var randblue2 = Math.floor(Math.random() * teamS.length);
        if (choose === true && teamS.length > 2) {    
            if (player.id == teamR[0].id) {
                if (teamR.length == 1) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[randred1].name + " e " + teamS[randred2].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randred1].id, Team.RED);
                    room.setPlayerTeam(teamS[randred2].id, Team.RED);
                } else if (teamR.length == 2) {
                    room.sendAnnouncement(centerText(teamR[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[0].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randred1].id, Team.RED);
                }
            } if (player.id == teamB[0].id && redFirst == false) {
                if (teamB.length == 1) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("Os escalados foram " + teamS[randblue1].name + " e " + teamS[randblue2].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randblue1].id, Team.BLUE);
                    room.setPlayerTeam(teamS[randblue2].id, Team.BLUE);
                } else if (teamB.length == 2) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escolheu RAND"), null, white, "bold");
                    room.sendAnnouncement(centerText("O escalado é " + teamS[randblue1].name), null, white, "normal");
                    room.setPlayerTeam(teamS[randblue1].id, Team.BLUE);
                }
            } if (player.id == (teamR[0].id || teamB[0].id) && choose === false) {
                room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
            } if (player.id == teamB[0].id && redFirst == true) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else {return false;}
        }
        else if (player.id == (teamR[0].id || teamB[0].id) && teamS.length < 2) {
            room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
        }
        else {return false;}
        return false;
    } if (["1"].includes(message[0].toLowerCase()) && teamS.length >= 1) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[0].name), null, white, "bold");
                room.setPlayerTeam(teamS[0].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[0].name), null, white, "bold");
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[0].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["2"].includes(message[0].toLowerCase()) && teamS.length >= 2) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[1].name), null, white, "bold");
                room.setPlayerTeam(teamS[1].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[1].name), null, white, "bold");
                    room.setPlayerTeam(teamS[1].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[1].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["3"].includes(message[0].toLowerCase()) && teamS.length >= 3) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[2].name), null, white, "bold");
                room.setPlayerTeam(teamS[2].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[2].name), null, white, "bold");
                    room.setPlayerTeam(teamS[2].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[2].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["4"].includes(message[0].toLowerCase()) && teamS.length >= 4) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[3].name), null, white, "bold");
                room.setPlayerTeam(teamS[3].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[3].name), null, white, "bold");
                    room.setPlayerTeam(teamS[3].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[3].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["5"].includes(message[0].toLowerCase()) && teamS.length >= 5) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[4].name), null, white, "bold");
                room.setPlayerTeam(teamS[4].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[4].name), null, white, "bold");
                    room.setPlayerTeam(teamS[4].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[4].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["6"].includes(message[0].toLowerCase()) && teamS.length >= 6) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[5].name), null, white, "bold");
                room.setPlayerTeam(teamS[5].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[5].name), null, white, "bold");
                    room.setPlayerTeam(teamS[5].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[5].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["7"].includes(message[0].toLowerCase()) && teamS.length >= 7) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[6].name), null, white, "bold");
                room.setPlayerTeam(teamS[6].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[6].name), null, white, "bold");
                    room.setPlayerTeam(teamS[6].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[6].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["8"].includes(message[0].toLowerCase()) && teamS.length >= 8) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[7].name), null, white, "bold");
                room.setPlayerTeam(teamS[7].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[7].name), null, white, "bold");
                    room.setPlayerTeam(teamS[7].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[7].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
        else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["9"].includes(message[0].toLowerCase()) && teamS.length >= 9) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[8].name), null, white, "bold");
                room.setPlayerTeam(teamS[8].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[8].name), null, white, "bold");
                    room.setPlayerTeam(teamS[8].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[8].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["10"].includes(message[0].toLowerCase()) && teamS.length >= 10) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[9].name), null, white, "bold");
                room.setPlayerTeam(teamS[9].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[9].name), null, white, "bold");
                    room.setPlayerTeam(teamS[9].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[9].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["11"].includes(message[0].toLowerCase()) && teamS.length >= 11) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[10].name), null, white, "bold");
                room.setPlayerTeam(teamS[10].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[10].name), null, white, "bold");
                    room.setPlayerTeam(teamS[10].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[10].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["12"].includes(message[0].toLowerCase()) && teamS.length >= 12) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[11].name), null, white, "bold");
                room.setPlayerTeam(teamS[11].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[11].name), null, white, "bold");
                    room.setPlayerTeam(teamS[11].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[11].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["13"].includes(message[0].toLowerCase()) && teamS.length >= 13) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[12].name), null, white, "bold");
                room.setPlayerTeam(teamS[12].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[12].name), null, white, "bold");
                    room.setPlayerTeam(teamS[12].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[12].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["14"].includes(message[0].toLowerCase()) && teamS.length >= 14) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[13].name), null, white, "bold");
                room.setPlayerTeam(teamS[13].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[13].name), null, white, "bold");
                    room.setPlayerTeam(teamS[13].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[13].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["15"].includes(message[0].toLowerCase()) && teamS.length >= 15) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[14].name), null, white, "bold");
                room.setPlayerTeam(teamS[14].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[14].name), null, white, "bold");
                    room.setPlayerTeam(teamS[14].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[14].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["16"].includes(message[0].toLowerCase()) && teamS.length >= 16) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[15].name), null, white, "bold");
                room.setPlayerTeam(teamS[15].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[15].name), null, white, "bold");
                    room.setPlayerTeam(teamS[15].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[1].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["17"].includes(message[0].toLowerCase()) && teamS.length >= 17) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[16].name), null, white, "bold");
                room.setPlayerTeam(teamS[16].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[16].name), null, white, "bold");
                    room.setPlayerTeam(teamS[16].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[16].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["18"].includes(message[0].toLowerCase()) && teamS.length >= 18) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[17].name), null, white, "bold");
                room.setPlayerTeam(teamS[17].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[17].name), null, white, "bold");
                    room.setPlayerTeam(teamS[17].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[17].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["19"].includes(message[0].toLowerCase()) && teamS.length >= 19) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[18].name), null, white, "bold");
                room.setPlayerTeam(teamS[18].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[18].name), null, white, "bold");
                    room.setPlayerTeam(teamS[18].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[18].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["20"].includes(message[0].toLowerCase()) && teamS.length >= 20) {
        if (choose === true) {    
            if (player.id == teamR[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " escalou " + teamS[19].name), null, white, "bold");
                room.setPlayerTeam(teamS[19].id, Team.RED);
            } else if (player.id == teamB[0].id) {
                if (redFirst == false) {
                    room.sendAnnouncement(centerText(teamB[0].name + " escalou " + teamS[19].name), null, white, "bold");
                    room.setPlayerTeam(teamS[19].id, Team.BLUE);
                }
            } else if (redFirst == true && player.id == teamB[0].id) {
                room.sendAnnouncement(centerText(teamR[0].name + " deve escolher primeiro. Aguarde sua vez"), null, warn, "italic");
            } else if (player.id === (teamR[0].id || teamB[0].id)) {
                if (teamS[19].id == null) {
                    room.sendAnnouncement(centerText("Não posso encontrar este player na fila"), null, warn, "italic");
                }
            }
        }
         else {
            room.sendAnnouncement(centerText("O Choose Mode não está ativado"), null, warn, "italic");
        }
    } if (["3x"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            teamLimit = 3;
            room.sendAnnouncement(centerText(`Sala agora é ${teamLimit}x!`), null, yellow, "bold");
        }
        return false;
    } if (["4x"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            teamLimit = 4;
            room.sendAnnouncement(centerText(`Sala agora é ${teamLimit}x!`), null, yellow, "bold");
        }
        return false;
    } if (["!comofaz"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Trocar Uniforme:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("Com !uniforme escolha qual uniforme deseja."), player.id, white, "normal");
        room.sendAnnouncement(centerText("Decore o acronimo dele que estará entre <>. Exemplo Barcelona <bar>"), player.id, white, "normal");
        room.sendAnnouncement(centerText("Veja qual time deseja atribuir o uniforme. RED ou BLUE"), player.id, white, "normal");
        room.sendAnnouncement(centerText("sendo assim, o comando será:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!uni red bar"), player.id, white, "bold");
        room.sendAnnouncement(centerText("Uniformes Aleatórios:"), player.id, yellow, "bold");
        room.sendAnnouncement(centerText("Com !rand setamos uniformes aleatórios para todos os times."), player.id, white, "normal");
        room.sendAnnouncement(centerText("Para alterar apenas o uniforme de RED:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!rand red"), player.id, white, "bold");
        room.sendAnnouncement(centerText("Para alterar apenas o uniforme de RED:"), player.id, white, "normal");
        room.sendAnnouncement(centerText("!rand blue"), player.id, white, "bold");
    } if (["!tag"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Player Tags:"), null, yellow, "bold");
        room.sendAnnouncement(centerText("!malco, !soberbo, !soberano, !messi, !noob,\n!pepe, !abob, !onlyway, !chiq, !diaz, !two"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Team Tags:"), null, yellow, "bold");
        room.sendAnnouncement(centerText("!bar, !rea"), null, yellow, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
        }, 100);
    } if (["!afk"].includes(message[0].toLowerCase())) {
        if (afklist.includes(player.id)) {
            var index = afklist.indexOf(player.id);
            if (index !== -1) {
            afklist.splice(index, 1);
            }
            room.sendAnnouncement(centerText("Você não está mais na lista de AFKs"), player.id, warn, "italic", 0);
            room.sendAnnouncement(centerText(player.name + " não está mais AFK"), null, warn, "italic");
        }
        else {
            afklist.push(player.id);afkNEXTplayer();AFKLimitToKick(player);
            room.sendAnnouncement(centerText("Você está na lista de AFKs"), player.id, warn, "italic", 0);
            room.sendAnnouncement(centerText("para sair, digite !afk novamente"), player.id, warn, "italic");
            room.sendAnnouncement(centerText("O tempo limite para ficar AFK é 5 minutos"), player.id, warn, "bold");
            room.sendAnnouncement(centerText("Após o tempo limite sera Kickado"), player.id, warn, "bold");
            room.sendAnnouncement(centerText(player.name + " está AFK"), null, warn, "italic");
        }
    } if (["!uniforme"].includes(message[0].toLowerCase())) {
        if (message[1] == null) {
            room.sendAnnouncement(`_______________________________________`, null, yellow, "bold");
            room.sendAnnouncement(`Seleções:`, null, yellow, "bold");
            room.sendAnnouncement(`Brasil "bra" Alemanha <ale> Argentina "arg" Espanha "esp" Portugal "por"`, null, white, "normal");
            room.sendAnnouncement(`Itália "ita" Uruguai "uru" França "fra" Inglaterra "ing" Bélgica "bel", Holanda "hol"`, null, white, "normal");
            room.sendAnnouncement(`_______________________________________`, null, yellow, "bold");
            room.sendAnnouncement(`Times Sulamericanos:`, null, yellow, "bold");
            room.sendAnnouncement(`Corinthians "cor", São Paulo "spfc", Palmeiras "pal", Santos "sfc", Flamengo "fla", Grêmio "gre"`, null, white, "normal");
            room.sendAnnouncement(`Vasco "vas", Fluminense "flu", Internacional "int", Cruzeiro "cru", Boca Juniors "boc", River Plate "riv"`, null, white, "normal");
            room.sendAnnouncement(`_______________________________________`, null, yellow, "bold");
            room.sendAnnouncement(`Times Europeus:`, null, yellow, "bold");
            room.sendAnnouncement(`Manchester City "mci", Borussia Dortmund "bor", Paris Saint-Germain "psg", Real Madrid "rea", Inter de Milão "intM"`, null, white, "normal");
            room.sendAnnouncement(`Barcelona "bar", Atlético de Madrid "atm", Liverpool "liv", Chelsea "che", Juventus "juv", Bayern de Munique "bay", Milan "mil"`, null, white, "normal");
            room.sendAnnouncement(`_______________________________________`, null, yellow, "bold");
        }
    } if (["!uni", "uni"].includes(message[0].toLowerCase())) {
        if (message[1] == "red") {
            if (message[2] == "bar") {
                nameHome = bar.name;
                acronymHome = bar;
            } else if (message[2] == "rea") {
                nameHome = rea.name;
                acronymHome = rea;
            } else if (message[2] == "mci") {
                nameHome = mci.name;
                acronymHome = mci;
            } else if (message[2] == "atm") {
                nameHome = atm.name;
                acronymHome = atm;
            } else if (message[2] == "psg") {
                nameHome = psg.name;
                acronymHome = psg;
            } else if (message[2] == "liv") {
                nameHome = liv.name;
                acronymHome = liv;
            } else if (message[2] == "che") {
                nameHome = che.name;
                acronymHome = che;
            } else if (message[2] == "juv") {
                nameHome = juv.name;
                acronymHome = juv;
            } else if (message[2] == "bay") {
                nameHome = bay.name;
                acronymHome = bay;
            } else if (message[2] == "bra") {
                nameHome = bra.name;
                acronymHome = bra;
            } else if (message[2] == "ale") {
                nameHome = ale.name;
                acronymHome = ale;
            } else if (message[2] == "arg") {
                nameHome = arg.name;
                acronymHome = arg;
            } else if (message[2] == "esp") {
                nameHome = esp.name;
                acronymHome = esp;
            } else if (message[2] == "por") {
                nameHome = por.name;
                acronymHome = por;
            } else if (message[2] == "ita") {
                nameHome = ita.name;
                acronymHome = ita;
            } else if (message[2] == "uru") {
                nameHome = uru.name;
                acronymHome = uru;
            } else if (message[2] == "fra") {
                nameHome = fra.name;
                acronymHome = fra;
            } else if (message[2] == "ing") {
                nameHome = ing.name;
                acronymHome = ing;
            } else if (message[2] == "bel") {
                nameHome = bel.name;
                acronymHome = bel;
            } else if (message[2] == "bor") {
                nameHome = bor.name;
                acronymHome = bor;
            } else if (message[2] == "mil") {
                nameHome = mil.name;
                acronymHome = mil;
            } else if (message[2] == "intM") {
                nameHome = intM.name;
                acronymHome = intM;
            } else if (message[2] == "hol") {
                nameHome = hol.name;
                acronymHome = hol;
            } else if (message[2] == "cor") {
                nameHome = cor.name;
                acronymHome = cor;
            } else if (message[2] == "spfc") {
                nameHome = spfc.name;
                acronymHome = spfc;
            } else if (message[2] == "pal") {
                nameHome = pal.name;
                acronymHome = pal;
            } else if (message[2] == "sfc") {
                nameHome = sfc.name;
                acronymHome = sfc;
            } else if (message[2] == "fla") {
                nameHome = fla.name;
                acronymHome = fla;
            } else if (message[2] == "vas") {
                nameHome = vas.name;
                acronymHome = vas;
            } else if (message[2] == "flu") {
                nameHome = flu.name;
                acronymHome = flu;
            } else if (message[2] == "gre") {
                nameHome = gre.name;
                acronymHome = gre;
            } else if (message[2] == "int") {
                nameHome = int.name;
                acronymHome = int;
            } else if (message[2] == "cru") {
                nameHome = cru.name;
                acronymHome = cru;
            } else if (message[2] == "boc") {
                nameHome = boc.name;
                acronymHome = boc;
            } else if (message[2] == "riv") {
                nameHome = riv.name;
                acronymHome = riv;
            } else if (message[2] == "girl") {
                nameHome = girl.name;
                acronymHome = girl;
            } else if (message[2] == "inv") {
                nameHome = inv.name;
                acronymHome = inv;
            } else if (message[2] == "mia") {
                nameHome = mia.name;
                acronymHome = mia;
            } else if (message[2] == "mia2") {
                nameHome = mia2.name;
                acronymHome = mia2;
            } else if (message[2] == "v1") {
                nameHome = v1.name;
                acronymHome = v1;
            } else if (message[2] == "v2") {
                nameHome = v2.name;
                acronymHome = v2;
            } else if (message[2] == "v3") {
                nameHome = v3.name;
                acronymHome = v3;
            } else if (message[2] == "v4") {
                nameHome = v4.name;
                acronymHome = v4;
            } else if (message[2] == "v5") {
                nameHome = v5.name;
                acronymHome = v5;
            } else if (message[2] == "vik") {
                nameHome = vik.name;
                acronymHome = vik;
            }
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
            }, 500);
        } if (message[1] == "blue") {
            if (message[2] == "bar") {
                nameGuest = bar.name;
                acronymGuest = bar;
            } else if (message[2] == "rea") {
                nameGuest = rea.name;
                acronymGuest = rea;
            } else if (message[2] == "mci") {
                nameGuest = mci.name;
                acronymGuest = mci;
            } else if (message[2] == "atm") {
                nameGuest = atm.name;
                acronymGuest = atm;
            } else if (message[2] == "psg") {
                nameGuest = psg.name;
                acronymGuest = psg;
            } else if (message[2] == "liv") {
                nameGuest = liv.name;
                acronymGuest = liv;
            } else if (message[2] == "che") {
                nameGuest = che.name;
                acronymGuest = che;
            } else if (message[2] == "juv") {
                nameGuest = juv.name;
                acronymGuest = juv;
            } else if (message[2] == "bay") {
                nameGuest = bay.name;
                acronymGuest = bay;
            } else if (message[2] == "bra") {
                nameGuest = bra.name;
                acronymGuest = bra;
            } else if (message[2] == "ale") {
                nameGuest = ale.name;
                acronymGuest = ale;
            } else if (message[2] == "arg") {
                nameGuest = arg.name;
                acronymGuest = arg;
            } else if (message[2] == "esp") {
                nameGuest = esp.name;
                acronymGuest = esp;
            } else if (message[2] == "por") {
                nameGuest = por.name;
                acronymGuest = por;
            } else if (message[2] == "ita") {
                nameGuest = ita.name;
                acronymGuest = ita;
            } else if (message[2] == "uru") {
                nameGuest = uru.name;
                acronymGuest = uru;
            } else if (message[2] == "fra") {
                nameGuest = fra.name;
                acronymGuest = fra;
            } else if (message[2] == "ing") {
                nameGuest = ing.name;
                acronymGuest = ing;
            } else if (message[2] == "bel") {
                nameGuest = bel.name;
                acronymGuest = bel;
            } else if (message[2] == "bor") {
                nameGuest = bor.name;
                acronymGuest = bor;
            } else if (message[2] == "mil") {
                nameGuest = mil.name;
                acronymGuest = mil;
            } else if (message[2] == "intM") {
                nameGuest = intM.name;
                acronymGuest = intM;
            } else if (message[2] == "hol") {
                nameGuest = hol.name;
                acronymGuest = hol;
            } else if (message[2] == "cor") {
                nameGuest = cor.name;
                acronymGuest = cor;
            } else if (message[2] == "spfc") {
                nameGuest = spfc.name;
                acronymGuest = spfc;
            } else if (message[2] == "pal") {
                nameGuest = pal.name;
                acronymGuest = pal;
            } else if (message[2] == "sfc") {
                nameGuest = sfc.name;
                acronymGuest = sfc;
            } else if (message[2] == "fla") {
                nameGuest = fla.name;
                acronymGuest = fla;
            } else if (message[2] == "vas") {
                nameGuest = vas.name;
                acronymGuest = vas;
            } else if (message[2] == "flu") {
                nameGuest = flu.name;
                acronymGuest = flu;
            } else if (message[2] == "gre") {
                nameGuest = gre.name;
                acronymGuest = gre;
            } else if (message[2] == "int") {
                nameGuest = int.name;
                acronymGuest = int;
            } else if (message[2] == "cru") {
                nameGuest = cru.name;
                acronymGuest = cru;
            } else if (message[2] == "boc") {
                nameGuest = boc.name;
                acronymGuest = boc;
            } else if (message[2] == "riv") {
                nameGuest = riv.name;
                acronymGuest = riv;
            } else if (message[2] == "girl") {
                nameGuest = girl.name;
                acronymGuest = girl;
            } else if (message[2] == "inv") {
                nameGuest = inv.name;
                acronymGuest = inv;
            } else if (message[2] == "mia") {
                nameGuest = mia.name;
                acronymGuest = mia;
            } else if (message[2] == "mia2") {
                nameGuest = mia2.name;
                acronymGuest = mia2;
            } else if (message[2] == "v1") {
                nameGuest = v1.name;
                acronymGuest = v1;
            } else if (message[2] == "v2") {
                nameGuest = v2.name;
                acronymGuest = v2;
            } else if (message[2] == "v3") {
                nameGuest = v3.name;
                acronymGuest = v3;
            } else if (message[2] == "v4") {
                nameGuest = v4.name;
                acronymGuest = v4;
            } else if (message[2] == "v5") {
                nameGuest = v5.name;
                acronymGuest = v5;
            } else if (message[2] == "vik") {
                nameGuest = vik.name;
                acronymGuest = vik;
            }
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
            }, 500);
        } if (message[1] == null) {
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            room.sendAnnouncement(centerText("_____uniformes_destravados_____"), null, yellow, "italic");
        }
        return false;
    } if (["unix"].includes(message[0].toLowerCase())) {
        const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv, mia, alh, aln];
        var randHome = Math.floor(Math.random() * allClubes.length);
        var randGuest = Math.floor(Math.random() * allClubes.length);
        if (message[1] == null) {
            nameHome = allClubes[randHome].name;
            acronymHome = allClubes[randHome];
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold")
            }, 500);
        }
        else if (message[1] == "red") {
            nameHome = allClubes[randHome].name;
            acronymHome = allClubes[randHome];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold")
            }, 500);
        }
        else if (message[1] == "blue") {
            nameGuest = allClubes[randGuest].name;
            acronymGuest = allClubes[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_____troca_de_uniformes_____"), null, yellow, "italic");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold")
            }, 500);
        }
        return false;
    } if (["!selecrand", "selecrand"].includes(message[0].toLowerCase())) {
        const seleçoes = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel, hol];
        var randHome = Math.floor(Math.random() * seleçoes.length);
        var randGuest = Math.floor(Math.random() * seleçoes.length);
        if (message[1] == null) {
            nameHome = seleçoes[randHome].name;
            acronymHome = seleçoes[randHome];
            nameGuest = seleçoes[randGuest].name;
            acronymGuest = seleçoes[randGuest];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
                room.sendAnnouncement(centerText("Uniformes atualizados"), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, white, "bold");
            }, 500);
        }
        else if (message[1] == "red") {
            nameHome = seleçoes[randHome].name;
            acronymHome = seleçoes[randHome];
            room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time RED foi atualizado. Agora é " + nameHome), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
        else if (message[1] == "blue") {
            nameGuest = seleçoes[randGuest].name;
            acronymGuest = seleçoes[randGuest];
            room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
            setTimeout(function () {
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado. Agora é " + nameGuest), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                room.sendAnnouncement(centerText("_________________________________"), null, green, "bold");
            }, 500);
        }
    } if (["!vs", "vs"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
        return false;
    } if (["!seleçoes"].includes(message[0].toLowerCase())) {
            room.sendAnnouncement(`_______________________________________`, null, yellow, "bold");
            room.sendAnnouncement(`Seleções:`, null, yellow, "bold");
            room.sendAnnouncement(`Brasil "bra" Alemanha <ale> Argentina "arg" Espanha "esp" Portugal "por"`, null, white, "normal");
            room.sendAnnouncement(`Itália "ita" Uruguai "uru" França "fra" Inglaterra "ing" Bélgica "bel", Holanda "hol"`, null, white, "normal");
            room.sendAnnouncement(`_______________________________________`, null, yellow, "bold");
            setTimeout(function () {
                room.sendAnnouncement(centerText("called by " + player.name), null, chatInvisble, "italic");
            }, 100);
    } if (["!euro"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        room.sendAnnouncement("Times Europeus:", null, yellow, "bold");
        room.sendAnnouncement("Manchester City <mci>, Borussia Dortmund <bor>, Paris Saint-Germain <psg>, Real Madrid <rea>, Inter de Milão <intM>", null, white, "normal");
        room.sendAnnouncement("Barcelona <bar>, Atlético de Madrid <atm>, Liverpool <liv>, Chelsea <che>, Juventus <juv>, Bayern de Munique <bay>, Milan <mil>", null, white, "normal");
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
    } if (["!sula"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
        room.sendAnnouncement("Times Sulamericanos:", null, yellow, "bold");
        room.sendAnnouncement("Corinthians <cor>, São Paulo <spfc>, Palmeiras <pal>, Santos <sfc>, Flamengo <fla>, Grêmio <gre>", null, white, "normal");
        room.sendAnnouncement("Vasco <vas>, Fluminense <flu>, Internacional <int>, Cruzeiro <cru>, Boca Juniors <boc>, River Plate <riv>", null, white, "normal");
        room.sendAnnouncement("_______________________________________", null, yellow, "bold");
    } if (["!regras"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("REGRAS DE JOGO"), null, white, "bold");
        room.sendAnnouncement(centerText("3x3 por 3minutos + 1minuto de prorrogação"), null, yellow, "normal");
        room.sendAnnouncement(centerText("FAIR PLAY pra ficar dahora"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão do time é o player1"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Capitão escolhe o time com número da fila ou nome"), null, yellow, "normal");
        room.sendAnnouncement(centerText("Uma vez escolhido fica até o final"), null, yellow, "normal");
        room.sendAnnouncement(centerText("AFK vai pro final da fila e pausamos pro cap escolher outro"), null, yellow, "normal");
    } if (["!discord" , "discord"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄"), null, white, "bold", 0);
        room.sendAnnouncement(centerText("▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█"), null, white, "bold", 0);
        room.sendAnnouncement(centerText("▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀"), null, white, "bold", 0);
        room.sendAnnouncement(centerText(" https://discord.gg/AR7ypuzJG8 "), null, white, "bold", 1);
    } if (["lenda"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🥴 LENDA 🥴"), null, white, "bold");
        }, 20);
    } if (["lendario", "lendário"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🥴 LENDÁRIO 🥴"), null, white, "bold");
        }, 20);
    } if (["lendas"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🥴 LENDAS 🥴"), null, white, "bold");
        }, 20);
    } if (["!bar"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Todo o estádio, é um só clamor 🎵"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Azul-grená ao vento, um grito valente 🎶"), null, white, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Temos um nome, que todos conhecem 🎵"), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Barça, Barça, Barça! 🎶"), null, white, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🔵🔴🔵...🔵🔴🔵...🔵🔴🔵"), null, white, "normal");
        }, 5000);
    } if (["!rea"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Já corre a flecha 🎵"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Já ataca o meu Madrid 🎶"), null, white, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 O grito que aprendi 🎵"), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎵 Madrid, Madrid, Madrid 🎶"), null, white, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("⚪🟡⚪...⚪🟡⚪...⚪🟡⚪"), null, white, "normal");
        }, 5000);
    } if (["!malco"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.setPlayerAvatar(player.id, "❌")
            setTimeout(function () {
                room.setPlayerAvatar(player.id, "M")
                room.setPlayerDiscProperties(player.id, {radius: 17, invMass: 30 / 30});
                setTimeout(function () {
                    room.setPlayerAvatar(player.id, "A")
                    setTimeout(function () {
                        room.setPlayerAvatar(player.id, "L")
                        setTimeout(function () {
                            room.setPlayerAvatar(player.id, "C")
                            setTimeout(function () {
                                room.setPlayerAvatar(player.id, "O")
                                setTimeout(function () {
                                    room.setPlayerAvatar(player.id, "❌")
                                    setTimeout(function () {
                                        room.setPlayerAvatar(player.id, null)
                                        room.setPlayerDiscProperties(player.id, {radius: 15, invMass:  10 / 30});
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 1000);
        }, 1);
        setTimeout(function () {
            room.sendAnnouncement(centerText("❌"), null, white, "normal");
        }, 10);
    } if (["!diaz"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Se éres Tarde..."), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("UN MITO!"), null, white, "bold");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Se éres Noche..."), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("UNA Lenda!"), null, white, "bold");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("𝘿𝙄𝘼𝙕"), null, yellow, "bold");
        }, 5000);
    } if (["!soberano", "soberano"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("👑 SOBERANO é rei 👑"), null, white, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("soberbo. soberbo, soberbo"), null, chatInvisble, "normal");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🏙️ SUBURBANO, a lei 🌆"), null, white, "bold");
        }, 1260);
        setTimeout(function () {
            room.sendAnnouncement(centerText("soberbo. soberbo, soberbo"), null, chatInvisble, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("pra qualquer um, não tem"), null, white, "normal");
        }, 2510);
        setTimeout(function () {
            room.sendAnnouncement(centerText("soberbo. soberbo, soberbo"), null, chatInvisble, "normal");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("<< Soberania Soberbo >>"), null, yellow, "bold");
        }, 3760);
        setTimeout(function () {
            room.sendAnnouncement(centerText("soberbo. soberbo, soberbo"), null, chatInvisble, "normal");
        }, 5000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫 🍫 🍫 🍫 🍫 🍫 🍫"), null, yellow, "bold");
        }, 5010);
    } if (["!two"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("one-----------"), null, white, "normal");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("---TWO--------"), null, white, "normal");
        }, 1000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("------three-----"), null, white, "normal");
        }, 2000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("----------four"), null, white, "normal");
        }, 3000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("one-----------"), null, white, "normal");
        }, 4000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("-<-TWO->------"), null, yellow, "bold");
        }, 5000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🔥 🔥 🔥 🔥 🔥"), null, yellow, "bold");
        }, 6000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("TWO TWO TWO TWO TWO"), null, chatInvisble, "bold");
        }, 7000);
    } if (["!onlyway"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("ONLY FANS?"), null, yellow, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Não..."), null, yellow, "bold");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("THE..."), null, yellow, "bold");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("...ONLY..."), null, yellow, "bold");
        }, 3750);
        setTimeout(function () {
            room.sendAnnouncement(centerText("...WAY!"), null, yellow, "bold");
        }, 5000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("THEONLYWAY"), null, white, "bold");
        }, 5000);
    } if (["!chiq"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Chiquinho ... 😈 ... Chiquinho"), null, yellow, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("😈 CHIQUIN DA PENHA 😈"), null, yellow, "bold");
        }, 1250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Chiquinho ... 😈 ... Chiquinho"), null, yellow, "bold");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("😈 CHIQUIN DA PENHA 😈"), null, yellow, "bold");
        }, 3750);
    } if (["!smith"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("eu sou a LENDA!"), null, yellow, "bold");
        room.sendAnnouncement(centerText("by " + player.name), null, white, "italic");
    } if (["!messi"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Messi, Messi, messi!"), null, white, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Ankara, Messi"), null, white, "bold");
        }, 1500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Ankara, Messi"), null, white, "bold");
        }, 3500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Gol, gol, gol!!!"), null, white, "bold");
        }, 6000);
    } if (["!mess"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("de cobertura!!"), null, yellow, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("📢 SHOOOOW!! 🎯"), null, white, "bold");
        }, 1000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("📢 SHOOOOW!! 🎯"), null, lightgrey, "bold");
        }, 1500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("👽🪐 ELE NÃO É DESSE PLANETA, MESMO🪐👽"), null, white, "bold");
        }, 2000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("𝕃 . 𝕄𝕖𝕤𝕤𝕚™"), null, indigo, "bold");
        }, 3000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("𝕃 . 𝕄𝕖𝕤𝕤𝕚™"), null, lightgrey, "bold");
        }, 3500);
    } if (["!abob"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha, que nunca falha..."), null, white, "bold");
        }, 10);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha, atacante de raça..."), null, white, "bold");
        }, 2000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("Abobrinha que canta e vibraaaaa!"), null, white, "bold");
        }, 4000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("ABOBRINHA, THE GOAT"), null, yellow, "bold");
        }, 6000);
    } if (["!noob"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 Olê, olê, olê, olê! 🎶" ), c, white, "normal");
        }, 50);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🎶 é o NooB! 🎶" ), null, white, "normal");
        }, 2500);
        setTimeout(function () {
            room.sendAnnouncement(centerText("o NooB MaSteR!!" ), null, white, "bold");
        }, 4000);
    } if (["!pepe"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("PÊEEPÊ NELES!"), null, white, "bold");
    } if (["!soberbo"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫"), null, white, "normal");
        }, 25);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫...🍫"), null, white, "normal");
        }, 1000);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫...🍫...🍫"), null, white, "normal");
        }, 2250);
        setTimeout(function () {
            room.sendAnnouncement(centerText("🍫... SOBEEEERBOOOOOOO! ...🍫"), null, white, "normal");
        }, 3500);
    } if (["var"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " chamou o VAR"), null, yellow, "normal");
        setTimeout(function () {
            room.sendAnnouncement(centerText(" VAR 📹 --> analizando..."), null, white, "bold");
            setTimeout(function () { checkAndPauseGame(); alwaysOnTeam(); IIIx(); checkAndStartGame(); checkAndResumeGame(); }, 50);
            if (teamR.length == 0) {room.setPlayerTeam(teamS[0].id, Team.RED);} if (teamR.length == 2) {room.setPlayerTeam(teamS[0].id, Team.RED);} if (teamB.length == 0) {room.setPlayerTeam(teamS[0].id, Team.BLUE);} if (teamB.length == 2) {room.setPlayerTeam(teamS[0].id, Team.BLUE);} if (acronymHome === acronymGuest) {
                const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv, mia, alh, aln];
                let randGuest = Math.floor(Math.random() * allClubes.length);
                nameGuest = allClubes[randGuest].name;
                acronymGuest = allClubes[randGuest];
                room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);
                room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado"), null, yellow, "bold");
                room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
            }
        }, 300);
        return false;
    } if (["!gk"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("GOLEIROOO!"), null, white, "bold");
    } if (["gk"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement(centerText(player.name + " vai de gk!"), null, white, "bold");
        }, 20);
        setTimeout(function () {
            room.setPlayerAvatar(player.id, "GK")
            setTimeout(function () {
                room.setPlayerAvatar(player.id, "☢️")
                setTimeout(function () {
                    room.setPlayerAvatar(player.id, "GK")
                    setTimeout(function () {
                        room.setPlayerAvatar(player.id, "☢️")
                        setTimeout(function () {
                            room.setPlayerAvatar(player.id, null)
                        }, 1800);
                    }, 1800);
                }, 1200);
            }, 600);
        }, 10);
        if (GKListname.includes(player.name)) {}
        else {GKListname.push(" " + player.name);}
    } if (["gk?", "gklist", "gklista"].includes(message[0].toLowerCase())) {
        setTimeout(function () {
            room.sendAnnouncement("☢️ Gks disponiveis: ", null, white, "bold");
            room.sendAnnouncement(GKListname.toString(), null, yellow, "normal");
        }, 20);
        if (["clean", "clear", "rr"].includes(message[1].toLowerCase())) {
            room.sendAnnouncement(centerText("Lista de GKs foi esvaziada"), null, yellow, "itallc");
        }
    } if (["!brabo", "brabo"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " é braboooo!"), null, white, "bold");
    } if (["furo", "furou", "furão", "furao", "furei"].includes(message[0].toLowerCase())) {
        var messages = [
            "um oferecimento, MUSTELA PUTÓRIUS FURO, O FURÃO! kk",
            "MUSTELA PUTÓRIUS FURO, O FURÃO! kk",
            "kkkkk o famoso furão!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 20);
    } if (["!ain", "ain"].includes(message[0].toLowerCase())) {
        var messages = [
            "AINN, PAI PARAAA!",
            "AIN, ZÉ DA MANGA!",
            "AIN, ZÉ DA MANGA!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, yellow, "bold");
        return false;
    } if (["!gol", "gol"].includes(message[0].toLowerCase())) {
        var messages = [
            "LAAAAÇO! ⚽",
            "GOLAAAAÇO! ⚽",
            "É GOOOOL! ⚽",
            "OLHA O GOL, OLHA O GOL, OLHA O GOL!",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, white, "bold");
        return false;
    } if (["!chupa", "chupa"].includes(message[0].toLowerCase())) {
        var messages = [
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa!",
            "Chupaaa, Lady Gaga! 👱‍♀️",
            "Chupaaa, imperatriz! 🧞‍♂️",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(player.name + ": " + announcement, null, white, "bold");
        return false;
    } if (["!verdade"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText(player.name + " é ruim pra caramba!"), null, yellow, "bold");
    } if (["!sedex", "sedex", "!carteiro", "!correios", "carteiro", "correios"].includes(message[0].toLowerCase())) {
        function repeatAction(action, times) {
            for (var i = 0; i < times; i++) {
                action(); // Executa a ação
            }
        }
        function blank() {
            room.sendAnnouncement(" ", null, white, "normal", 0);
        }
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("                                        🚚", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 10);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("                                     🚚💨_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 300);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("                           🚚_-__𝐒𝐄𝐃𝐄𝐗__-_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 600);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("                 🚚_-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 900);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement("       🚚_-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 1200);
        setTimeout(function () {
        repeatAction(blank, 10);
        room.sendAnnouncement(" 🚚𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-__𝐒𝐄𝐃𝐄𝐗__-_", null, white, "normal", 0);
        repeatAction(blank, 2);
        }, 1500);
    } if (["!admin", "adm", "admin"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            adminPassword = generateAdminRandomPassword();
            console.log("adminPassword : " + adminPassword);
            return false;
        } if (message[1] == "reset") {
            adminPassword = generateAdminRandomPassword();
            console.log("adminPassword : " + adminPassword);
            return false;
        }
    } if (["!bb", "!bye", "!flw"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Até a próxima!", false);
        room.sendAnnouncement(centerText(player.name + " deu AUTO KICK!"), null, warn, "normal");
        return false;
    } if (["!clean", "!limpar", "!clear"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            function repeatAction(action, times) {
                for (var i = 0; i < times; i++) {
                    action(); // Executa a ação
                }
            }
            function blankedAnnouncement() {
                room.sendAnnouncement(" ", null, white, "normal", 0);
            }
            repeatAction(blankedAnnouncement, 50); // Envia o anúncio 5 vezes
            setTimeout(function () {
                room.sendAnnouncement(centerText(player.name + " limpou o chat"), null, yellow, "italic");
            }, 500);
        }
        return false;
    } if (["rr", "!rr"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            rr = true;
            setTimeout(function () {
                room.stopGame();
                setTimeout(function () {
                    IIIx();
                    checkTeamSizeAndChangeMap();
                    setTimeout(function () {
                    room.startGame();
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("A Partida foi reniciada"), null, warn, "bold")
                        }, 20);
                    }, 2);
                }, 2);
            }, 2);
            setTimeout(function () {
                rr = false;
            },30);
        }
        return false;
    } if (["go", "play", "bora"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            checkTeamSizeAndChangeMap();
            room.startGame();
            room.sendAnnouncement(centerText("Choose Mode Desativado"), null, warn, "bold");
            choose = false;
        }
    } if (["stop"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.stopGame();
            room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
            choose = true;
            return false;
        }
    } if (["!timeout", "!javolto"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            redChat = false;
            blueChat = false;
            specChat = false;
            room.pauseGame(true);
            room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
            setTimeout(() => {
                room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
                room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
                room.sendAnnouncement(centerText("TEREMOS UMA ATUALIZAÇÃO"), null, yellow, "bold", 2);
                setTimeout(() => {
                    room.sendAnnouncement(centerText("A sala será derrubada e logo voltaremos!"), null, warn, "bold");
                }, 100);
            }, 500);
        }
        return false;
    } if (["!xau", "!adeus","!fechar"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            redChat = false;
            blueChat = false;
            specChat = false;
            room.pauseGame(true);
            room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
            setTimeout(() => {
                room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
                room.sendAnnouncement(centerText(" "), null, white, "bold", 0);
                room.sendAnnouncement(centerText("POR HOJE É ISSO, RAPA"), null, yellow, "bold", 2);
                setTimeout(() => {
                    room.sendAnnouncement(centerText("A sala será derrubada agora!"), null, warn, "bold");
                }, 100);
            }, 500);
        }
        return false;
    } if (["!pendurados", "pendurados"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Jogadores Pendurados"), player.id, white, "bold");
        room.sendAnnouncement(centerText(pendurados), player.id, white, "normal");
    } if (["!avatar", "avatar"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[2] == "null") {
                const pID = parseInt(message[1]);
                room.setPlayerAvatar(pID, null);
            } else {
                const pID = parseInt(message[1]);
                room.setPlayerAvatar(pID, message[2]);
            }
        }
        return false;
    } if (["!list", "list", "!lista", "lista"].includes(message[0].toLowerCase())) {
        if (message[1] == "red") {
            if (teamR.length == 1) {
                room.sendAnnouncement(teamR[0].name + ": ID -> " + teamR[0].id + ", Acrônimo -> r1", null, white, "normal", 2);
            } else if (teamR.length == 2) {
                room.sendAnnouncement(teamR[0].name + ": ID -> " + teamR[0].id + ", Acrônimo -> r1", null, white, "normal", 0);
                room.sendAnnouncement(teamR[1].name + ": ID -> " + teamR[1].id + ", Acrônimo -> r2", null, white, "normal", 2);
            } else if (teamR.length == 3) {
                room.sendAnnouncement(teamR[0].name + ": ID -> " + teamR[0].id + ", Acrônimo -> r1", null, white, "normal", 0);
                room.sendAnnouncement(teamR[1].name + ": ID -> " + teamR[1].id + ", Acrônimo -> r2", null, white, "normal", 0);
                room.sendAnnouncement(teamR[2].name + ": ID -> " + teamR[2].id + ", Acrônimo -> r3", null, white, "normal", 2);
            }
        } if (message[1] == "blue") {
            if (teamB.length == 1) {
                room.sendAnnouncement(teamB[0].name + ": ID -> " + teamB[0].id + ", Acrônimo -> b1", null, white, "normal", 2);
            } else if (teamB.length == 2) {
                room.sendAnnouncement(teamB[0].name + ": ID -> " + teamB[0].id + ", Acrônimo -> b1", null, white, "normal", 0);
                room.sendAnnouncement(teamB[1].name + ": ID -> " + teamB[1].id + ", Acrônimo -> b2", null, white, "normal", 2);
            } else if (teamB.length == 3) {
                room.sendAnnouncement(teamB[0].name + ": ID -> " + teamB[0].id + ", Acrônimo -> b1", null, white, "normal", 0);
                room.sendAnnouncement(teamB[1].name + ": ID -> " + teamB[1].id + ", Acrônimo -> b2", null, white, "normal", 0);
                room.sendAnnouncement(teamB[2].name + ": ID -> " + teamB[2].id + ", Acrônimo -> b3", null, white, "normal", 2);
            }
        } if (message[1] == null) {
            if (teamS.length == 1) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 2);
            } else if (teamS.length == 2) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 2);
            } else if (teamS.length == 3) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 2);
            } else if (teamS.length == 4) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 2);
            } else if (teamS.length == 5) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
            } else if (teamS.length == 6) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
            } else if (teamS.length == 7) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
            } else if (teamS.length == 8) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
            } else if (teamS.length == 9) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
            } else if (teamS.length == 10) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
            } else if (teamS.length == 11) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
            } else if (teamS.length == 12) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
            } else if (teamS.length == 13) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
            } else if (teamS.length == 14) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
            } else if (teamS.length == 15) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
            } else if (teamS.length == 16) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
            } else if (teamS.length == 17) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[16].name + " ---> Nº 17 --- | ID - " + teamS[16].id, null, white, "normal", 0);
            } else if (teamS.length == 18) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[16].name + " ---> Nº 17 --- | ID - " + teamS[16].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[17].name + " ---> Nº 18 --- | ID - " + teamS[17].id, null, white, "normal", 0);
            } else if (teamS.length == 19) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[16].name + " ---> Nº 17 --- | ID - " + teamS[16].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[17].name + " ---> Nº 18 --- | ID - " + teamS[17].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[18].name + " ---> Nº 19 --- | ID - " + teamS[18].id, null, white, "normal", 0);
            } else if (teamS.length == 20) {
                room.sendAnnouncement(teamS[0].name + " ---> Nº 1 --- | ID - " + teamS[0].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[1].name + " ---> Nº 2 --- | ID - " + teamS[1].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[2].name + " ---> Nº 3 --- | ID - " + teamS[2].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[3].name + " ---> Nº 4 --- | ID - " + teamS[3].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[4].name + " ---> Nº 5 --- | ID - " + teamS[4].id, null, white, "normal", 2);
                room.sendAnnouncement(teamS[5].name + " ---> Nº 6 --- | ID - " + teamS[5].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[6].name + " ---> Nº 7 --- | ID - " + teamS[6].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[7].name + " ---> Nº 8 --- | ID - " + teamS[7].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[8].name + " ---> Nº 9 --- | ID - " + teamS[8].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[9].name + " ---> Nº 10 --- | ID - " + teamS[9].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[10].name + " ---> Nº 11 --- | ID - " + teamS[10].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[11].name + " ---> Nº 12 --- | ID - " + teamS[11].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[12].name + " ---> Nº 13 --- | ID - " + teamS[12].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[13].name + " ---> Nº 14 --- | ID - " + teamS[13].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[14].name + " ---> Nº 15 --- | ID - " + teamS[14].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[15].name + " ---> Nº 16 --- | ID - " + teamS[15].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[16].name + " ---> Nº 17 --- | ID - " + teamS[16].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[17].name + " ---> Nº 18 --- | ID - " + teamS[17].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[18].name + " ---> Nº 19 --- | ID - " + teamS[18].id, null, white, "normal", 0);
                room.sendAnnouncement(teamS[19].name + " ---> Nº 20 --- | ID - " + teamS[19].id, null, white, "normal", 0);
            }
        }
        return false;
    } if (["set"].includes(message[0].toLowerCase())) {
        if (message[7] == keyCommand) {
            let joguins = parseInt(message[1]);
            let gols = parseInt(message[2]);
            let assists = parseInt(message[3]);
            let hatTricks = parseInt(message[4]);
            let vitori = parseInt(message[5]);
            let derrot = parseInt(message[6]);
            for (let i = 0; i < gols; i++) {
                joguin(joguins, player);
            }
            for (let i = 0; i < gols; i++) {
                golzin(gols, player);
            }
            for (let i = 0; i < assists; i++) {
                assistizinha(assists, player);
            }
            for (let i = 0; i < hatTricks; i++) {
                hatzinho(hatTricks, player);
            }
            for (let i = 0; i < vitori; i++) {
                vitor(vitori, player);
            }
            for (let i = 0; i < derrot; i++) {
                derro(derrot, player);
            }
            room.sendAnnouncement("[📄] " + player.name + " stats:  🎮 Jogos: " + getStoredGames(player) + " ⚽️ Gols: " + getStoredGoals(player) + ", 👟 Assistências: " + getStoredAssists(player) + ", 🏆 Hat-tricks: " + getHatTrick(player) + ", ✅ Vitórias: " + getStoredWins(player) + ", ⛔ Derrotas: " + getStoredLosses(player), null, white, "bold"); 
            keyCommand = generateRandomPassword();
        } if (message[1] == "win") {
            let vitori = parseInt(message[2]);
            for (let i = 0; i < vitori; i++) {
                vitor(vitori, player);
            }
            room.sendAnnouncement("[📄] " + player.name + " stats:  🎮 Jogos: " + getStoredGames(player) + " ⚽️ Gols: " + getStoredGoals(player) + ", 👟 Assistências: " + getStoredAssists(player) + ", 🏆 Hat-tricks: " + getHatTrick(player) + ", ✅ Vitórias: " + getStoredWins(player) + ", ⛔ Derrotas: " + getStoredLosses(player), null, white, "bold"); 
            keyCommand = generateRandomPassword();
        }
        return false;
    } if (["add"].includes(message[0].toLowerCase())) {
        if (message[3] == keyCommand) {
            let vezes = parseInt(message[1]);
            if (message[2] == "gols") {
                for (let i = 0; i < vezes; i++) {
                    storeGoals(player);
                }
            } if (message[2] == "assists") {
                for (let i = 0; i < vezes; i++) {
                    storeAssist(player);
                }
            } if (message[2] == "hats") {
                for (let i = 0; i < vezes; i++) {
                    storeHatTrick(player);
                }
            } if (message[2] == "jogos") {
                for (let i = 0; i < vezes; i++) {
                    incrementGames(player);
                }
            } if (message[2] == "win") {
                for (let i = 0; i < vezes; i++) {
                    incrementWins(player);
                }
            } if (message[2] == "loss") {
                for (let i = 0; i < vezes; i++) {
                    incrementLosses(player);
                }
            }
            room.sendAnnouncement("[📄] " + player.name + " | 🎮 Jogos: " + getStoredGames(player) + " ⚽️ Gols: " + getStoredGoals(player) + ", 👟 Assistências: " + getStoredAssists(player) + ", 🏆 Hat-tricks: " + getHatTrick(player) + ", ✅ Vitórias: " + getStoredWins(player) + ", ⛔ Derrotas: " + getStoredLosses(player) + ", Taxa de vitórias: " + calculateWinPercentage(player) + "%", null, white, "bold"); 
            keyCommand = generateRandomPassword();
        }
        return false;
    } if (["size"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1] == "r1") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 17, invMass: 30 / 30});
                } else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 15, invMass: 30 / 30});
                } else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 12, invMass: 30 / 30});
                } else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 5, invMass: 30 / 30});
                } else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamR[0].id, {radius: 25, invMass: 30 / 30});
                }
            } else if (message[1] == "r2") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 17, invMass: 30 / 30});
                } else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 15, invMass: 30 / 30});
                } else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 12, invMass: 30 / 30});
                } else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 5, invMass: 30 / 30});
                } else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamR[1].id, {radius: 25, invMass: 30 / 30});
                }
            } else if (message[1] == "r3") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 17, invMass: 30 / 30});
                } else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 15, invMass: 30 / 30});
                } else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 12, invMass: 30 / 30});
                } else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 5, invMass: 30 / 30});
                } else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamR[2].id, {radius: 25, invMass: 30 / 30});
                }
            } else if (message[1] == "b1") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 17, invMass: 30 / 30});
                } else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 15, invMass: 30 / 30});
                } else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 12, invMass: 30 / 30});
                } else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 5, invMass: 30 / 30});
                } else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamB[0].id, {radius: 25, invMass: 30 / 30});
                }
            } else if (message[1] == "b2") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 17, invMass: 30 / 30});
                } else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 15, invMass: 30 / 30});
                } else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 12, invMass: 30 / 30});
                } else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 5, invMass: 30 / 30});
                } else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamB[1].id, {radius: 25, invMass: 30 / 30});
                }
            } else if (message[1] == "b3") {
                if (message[2] == "big") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 17, invMass: 30 / 30});
                } else if (message[2] == "normal") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 15, invMass: 30 / 30});
                } else if (message[2] == "small") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 12, invMass: 30 / 30});
                } else if (message[2] == "nano") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 5, invMass: 30 / 30});
                } else if (message[2] == "hulk") {
                    room.setPlayerDiscProperties(teamB[2].id, {radius: 25, invMass: 30 / 30});
                }
            } else if (message[1] == "red") {
                if (message[2] == "hulk") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 25, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 25, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 25, invMass: 30 / 30});
                    }
                } if (message[2] == "big") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 17, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 17, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 17, invMass: 30 / 30});
                    }
                } else if (message[2] == "normal") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 15, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 15, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 15, invMass: 30 / 30});
                    }
                } else if (message[2] == "small") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 12, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 12, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 12, invMass: 30 / 30});
                    }
                } else if (message[2] == "nano") {
                    if (teamR.length == 1) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 5, invMass: 30 / 30});
                    }
                    else if (teamR.length == 2) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 5, invMass: 30 / 30});
                    }
                    else if (teamR.length == 3) {
                        room.setPlayerDiscProperties(teamR[0].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[1].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamR[2].id, {radius: 5, invMass: 30 / 30});
                    }
                }
            } else if (message[1] == "blue") {
                if (message[2] == "hulk") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 25, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 25, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 25, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 25, invMass: 30 / 30});
                    }
                } else if (message[2] == "big") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 17, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 17, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 17, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 17, invMass: 30 / 30});
                    }
                } else if (message[2] == "normal") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 15, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 15, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 15, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 15, invMass: 30 / 30});
                    }
                } else if (message[2] == "small") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 12, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 12, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 12, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 12, invMass: 30 / 30});
                    }
                } else if (message[2] == "nano") {
                    if (teamB.length == 1) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 5, invMass: 30 / 30});
                    }
                    else if (teamB.length == 2) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 5, invMass: 30 / 30});
                    }
                    else if (teamB.length == 3) {
                        room.setPlayerDiscProperties(teamB[0].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[1].id, {radius: 5, invMass: 30 / 30});
                        room.setPlayerDiscProperties(teamB[2].id, {radius: 5, invMass: 30 / 30});
                    }
                }
            }
        }
        return false;
    } if (["!crescer", "gordão", "gordao"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.setPlayerDiscProperties(player.id, {radius: 17, invMass: 30 / 30});
        }
        return false;
    } if (["!normal", "normal"].includes(message[0].toLowerCase())) {
        room.setPlayerDiscProperties(player.id, {radius: 15, invMass:  20 / 30});
    } if (["!blacklist", "blacklist"].includes(message[0].toLowerCase())) {
        setTimeout(() => {
            room.sendAnnouncement(centerText("☢️ --- BLACK LIST --- ☢️"), null, warn, "bold", 0);
            room.sendAnnouncement(centerText(blacklistnames), null, white, "italic");
        }, 300);
    } if (["anao", "anão"].includes(message[0].toLowerCase())) {
        /* room.setPlayerDiscProperties(player.id, {radius: 12, invMass:  10 / 30}); */
        var messages = [
            "Meu pau na sua mão!",
            "Meu pau na sua mão!",
            "Meu pau na sua mão!",
            `Chega desse lance de ANÃO, ${player.name}...`
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (["!mute", "mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message[1][0] == `@`) {
                var nomedoplayer = message[1].substring(1);
                var jogadorzin = getPlayerObjectByName(nomedoplayer);
                var nomin = jogadorzin.name;
                var iDzin = jogadorzin.id;
                if (playerName !== nomin) {
                    return false;
                } else if (message[2] == "30") {
                    muteList.push(iDzin)
                room.sendAnnouncement(centerText(`O player ${nomin} foi mutado por 30 segundos`), null, warn, "italic");
                setTimeout(function () {
                    var index = muteList.indexOf(iDzin);
                    if (index !== -1) {
                        muteList.splice(index, 1);
                    }
                    room.sendAnnouncement(centerText(`Fim do MUTE para ${nomin}`), null, warn, "italic");
                }, 30000);
                } else if (message[2] == "1") {
                    muteList.push(iDzin)
                    room.sendAnnouncement(centerText(`O player ${nomin} foi mutado por 1 minuto`), null, warn, "italic");
                    setTimeout(function () {
                        var index = muteList.indexOf(iDzin);
                        if (index !== -1) {
                            muteList.splice(index, 1);
                        }
                        room.sendAnnouncement(centerText(`Fim do MUTE para ${nomin}`), null, warn, "italic");
                    }, 60000);
                }
                else {
                    if (muteList.includes(iDzin)) {
                        var index = muteList.indexOf(iDzin);
                        if (index !== -1) {
                            muteList.splice(index, 1);
                        }
                        room.sendAnnouncement(centerText(`Fim do MUTE para ${nomin}`), null, warn, "italic");
                    }
                    else {
                        muteList.push(iDzin)
                        room.sendAnnouncement(centerText(`O time ${nomin} foi mutado`), null, warn, "italic");
                    }
                    
                }
            }
            if (message[1] == "red") {
                if (message[2] == "30") {
                redChat = false;
                room.sendAnnouncement(centerText("O time " + nameHome + " foi mutado por 30 segundos"), null, warn, "italic");
                setTimeout(function () {
                    redChat = true;
                    room.sendAnnouncement(centerText("Fim do MUTE para " + nameHome), null, warn, "italic");
                }, 30000);
                } else if (message[2] == "1") {
                    redChat = false;
                    room.sendAnnouncement(centerText("O time " + nameHome + " foi mutado por 1 minuto"), null, warn, "italic");
                    setTimeout(function () {
                        redChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para " + nameHome), null, warn, "italic");
                    }, 60000);
                }
                else {
                    if (redChat == true) {
                        redChat = false;
                        room.sendAnnouncement(centerText("O time " + nameHome + " foi mutado"), null, warn, "italic");
                    }
                    else if (redChat == false) {
                        redChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para " + nameHome), null, warn, "italic");
                    }
                    
                }
            } if (message[1] == "blue") {
                if (message[2] == "30") {
                blueChat = false;
                room.sendAnnouncement(centerText("O time " + nameGuest + " foi mutado por 30 segundos"), null, warn, "italic");
                setTimeout(function () {
                    blueChat = true;
                    room.sendAnnouncement(centerText("Fim do MUTE para " + nameGuest), null, warn, "italic");
                }, 30000);
                } else if (message[2] == "1") {
                    blueChat = false;
                    room.sendAnnouncement(centerText("O time " + nameGuest + " foi mutado por 1 minuto"), null, warn, "italic");
                    setTimeout(function () {
                        blueChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para " + nameGuest), null, warn, "italic");
                    }, 60000);
                }
                else {
                    if (blueChat == true) {
                        blueChat = false;
                        room.sendAnnouncement(centerText("O time " + nameGuest + " foi mutado"), null, warn, "italic");
                    }
                    else if (blueChat == false) {
                        blueChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para " + nameGuest), null, warn, "italic");
                    }
                }
            } if (message[1] == "spec") {
                if (message[2] == "30") {
                specChat = false;
                room.sendAnnouncement(centerText("Espectadores foram mutados por 30 segundos"), null, warn, "italic");
                setTimeout(function () {
                    specChat = true;
                    room.sendAnnouncement(centerText("Fim do MUTE para Espectadores"), null, warn, "italic");
                }, 30000);
                } else if (message[2] == "1") {
                    specChat = false;
                    room.sendAnnouncement(centerText("Espectadores foram mutados por 1 minuto"), null, warn, "italic");
                    setTimeout(function () {
                        specChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para Espectadores"), null, warn, "italic");
                    }, 60000);
                }
                else {
                    if (specChat == true) {
                        specChat = false;
                        room.sendAnnouncement(centerText("Espectadores foram mutados"), null, warn, "italic");
                    }
                    else if (specChat == false) {
                        specChat = true;
                        room.sendAnnouncement(centerText("Fim do MUTE para Espectadores"), null, warn, "italic");
                    }
                    
                }
            } if (message[1] == null) {
                if (muted == false) {
                    redChat = true;
                    blueChat = true;
                    specChat = true;
                    muted = true;
                    room.sendAnnouncement(centerText("Chat ATIVADO"), null, warn, "italic");
                }
                else {
                    redChat = false;
                    blueChat = false;
                    specChat = false;
                    muted = false;
                    room.sendAnnouncement(centerText("Chat DESATIVADO"), null, warn, "italic");
                }
                return false;
            }
        }
        return false;
    } if (["log"].includes(message[0].toLowerCase())) {
        if (["pg", "badass", "power", "igod"].includes(message[1].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            badassID = player.id;
            room.sendAnnouncement(centerText("Caramba, o CHEFE tá aqui!"), null, white, "bold");
        } if (["julio", "sergipo"].includes(message[1].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            soberboID = player.id;
            room.sendAnnouncement(centerText("Soberbo tá ON, chat!"), null, white, "bold");
        } if (["staff"].includes(message[1].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            supervisorsID.push(player.id);
            room.sendAnnouncement(centerText("Opa! " + player.name + " chegou pra botar ordem aqui"), null, white, "bold");
        } if (["#9"].includes(message[1].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            supervisorsID.push(player.id);
            room.sendAnnouncement(centerText("Opa! " + player.name + " chegou pra botar ordem aqui"), null, white, "bold")
        } if (["xere"].includes(message[1].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            supervisorsID.push(player.id);
            room.sendAnnouncement(centerText("Opa! " + player.name + " chegou pra botar ordem aqui"), null, white, "bold")
        }
        return false;
    } if (["fui"].includes(message[0]) && ["mlk"].includes(message[1])) {
        var messages = [
            "Errei, fui muleque...",
            "Mlk dmaaais kkkkkk",
            "Acertou, foi homem! Haha",
            "Mulecagem profissional! "
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.setPlayerAvatar(player.id, "M")
            setTimeout(function () {
                room.setPlayerAvatar(player.id, "L")
                setTimeout(function () {
                    room.setPlayerAvatar(player.id, "K")
                    setTimeout(function () {
                        room.setPlayerAvatar(player.id, "ML")
                        setTimeout(function () {
                            room.setPlayerAvatar(player.id, "LK")
                            setTimeout(function () {
                                room.setPlayerAvatar(player.id, "ML")
                                setTimeout(function () {
                                    room.setPlayerAvatar(player.id, "LK")
                                    setTimeout(function () {
                                        room.setPlayerAvatar(player.id, null)
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 1);
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (["fui"].includes(message[1]) && ["mlk"].includes(message[2])) {
        var messages = [
            "Errei, fui muleque...",
            "Mlk dmaaais kkkkkk",
            "Acertou, foi homem! Haha",
            "Mulecagem profissional! "
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.setPlayerAvatar(player.id, "M")
            setTimeout(function () {
                room.setPlayerAvatar(player.id, "L")
                setTimeout(function () {
                    room.setPlayerAvatar(player.id, "K")
                    setTimeout(function () {
                        room.setPlayerAvatar(player.id, "ML")
                        setTimeout(function () {
                            room.setPlayerAvatar(player.id, "LK")
                            setTimeout(function () {
                                room.setPlayerAvatar(player.id, "ML")
                                setTimeout(function () {
                                    room.setPlayerAvatar(player.id, "LK")
                                    setTimeout(function () {
                                        room.setPlayerAvatar(player.id, null)
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 1);
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (humilhante.includes(message[0])) {
        var messages = [
            "Esse tomou em!",
            "Ai, pae... Devagar!",
            "Vem tranquilo, nego kkkk",
            "Depois dessa, eu mandava um !bb... kkk Brincadeira, fica ai."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (humilhante.includes(message[1])) {
        var messages = [
            "Esse tomou em!",
            "Ai, pae... Devagar!",
            "Vem tranquilo, nego kkkk",
            "Depois dessa, eu mandava um !bb... kkk Brincadeira, fica ai."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (humilhante.includes(message[2])) {
        var messages = [
            "Esse tomou em!",
            "Ai, pae... Devagar!",
            "Vem tranquilo, nego kkkk",
            "Depois dessa, eu mandava um !bb... kkk Brincadeira, fica ai."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (humilhado.includes(message[0])) {
        var messages = [
            "Puts mano... Tomou memo, " + player.name,
            "Ficou feio pro seu lado, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (humilhado.includes(message[1])) {
        var messages = [
            "Puts mano... Tomou memo, " + player.name,
            "Ficou feio pro seu lado, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (humilhado.includes(message[2])) {
        var messages = [
            "Puts mano... Tomou memo, " + player.name,
            "Ficou feio pro seu lado, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (chorao.includes(message[0])) {
        var messages1 = [
            "Vixe, chat",
            "Ae, rapa",
            " ",
            " ",
        ];
        var messages2 = [
            player.name + " ficou bravo...",
            player.name + " não curtiu, em...",
            player.name + " ficou puto...",
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex1 = Math.floor(Math.random() * messages1.length);
        var announcement1 = messages1[randomIndex1];
        var randomIndex2 = Math.floor(Math.random() * messages2.length);
        var announcement2 = messages2[randomIndex2];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement1), null, white, "bold");
        }, 300);
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement2), null, white, "bold");
        }, 600);
    } if (chorao.includes(message[1])) {
        var messages1 = [
            "Vixe, chat",
            "Ae, rapa",
            " ",
            " ",
        ];
        var messages2 = [
            player.name + " ficou bravo...",
            player.name + " não curtiu, em...",
            player.name + " ficou puto...",
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex1 = Math.floor(Math.random() * messages1.length);
        var announcement1 = messages1[randomIndex1];
        var randomIndex2 = Math.floor(Math.random() * messages2.length);
        var announcement2 = messages2[randomIndex2];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement1), null, white, "bold");
        }, 300);
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement2), null, white, "bold");
        }, 600);
    } if (chorao.includes(message[2])) {
        var messages1 = [
            "Vixe, chat",
            "Ae, rapa",
            " ",
            " ",
        ];
        var messages2 = [
            player.name + " ficou bravo...",
            player.name + " não curtiu, em...",
            player.name + " ficou puto...",
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex1 = Math.floor(Math.random() * messages1.length);
        var announcement1 = messages1[randomIndex1];
        var randomIndex2 = Math.floor(Math.random() * messages2.length);
        var announcement2 = messages2[randomIndex2];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement1), null, white, "bold");
        }, 300);
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement2), null, white, "bold");
        }, 600);
    } if (porpouco.includes(message[0])) {
        var messages = [
            "Puts mano... Quase foi",
            "Passou pertooooo!",
            "Quase, chat! Na próxima, vai."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (relaxado.includes(message[0])) {
        var messages = [
            "Relaxa nada! Bora pro jogo recuperar isso aí!",
            "kkk O " + player.name + " ta relaxado...",
            player.name + " ta sem stress hoje, pelo visto kk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (relaxado.includes(message[1])) {
        var messages = [
            "Relaxa nada! Bora pro jogo recuperar isso aí!",
            "kkk O " + player.name + " ta relaxado...",
            player.name + " ta sem stress hoje, pelo visto kk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (relaxado.includes(message[2])) {
        var messages = [
            "Relaxa nada! Bora pro jogo recuperar isso aí!",
            "kkk O " + player.name + " ta relaxado...",
            player.name + " ta sem stress hoje, pelo visto kk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (perdidao.includes(message[0])) {
        var messages = [
            "Ué oque? Se perdeu? kk",
            "Se liga, o " + player.name + " tá perdidão! kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (perdidao.includes(message[1])) {
        var messages = [
            "Ué oque? Se perdeu? kk",
            "Se liga, o " + player.name + " tá perdidão! kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (perdidao.includes(message[2])) {
        var messages = [
            "Ué oque? Se perdeu? kk",
            "Se liga, o " + player.name + " tá perdidão! kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (xis.includes(message[0])) {
        var messages = [
            "É X-men, caramba?",
            "Apeeerta esse botão se não o " + player.name + " vai estressar!",
            "x é a marca do 𝐌𝐚𝐥𝐜𝐨, " + player.name + "... ❌ Malco o Rei ❌",
            "XXXXXXX",
            "CHUTAAA, MANOOOOOO!!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (xis.includes(message[1])) {
        var messages = [
            "É X-men, caramba?",
            "Apeeerta esse botão se não o " + player.name + " vai estressar!",
            "x é a marca do 𝐌𝐚𝐥𝐜𝐨, " + player.name + "... ❌ Malco o Rei ❌",
            "XXXXXXX",
            "CHUTAAA, MANOOOOOO!!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (xis.includes(message[2])) {
        var messages = [
            "É X-men, caramba?",
            "Apeeerta esse botão se não o " + player.name + " vai estressar!",
            "x é a marca do 𝐌𝐚𝐥𝐜𝐨, " + player.name + "... ❌ Malco o Rei ❌",
            "XXXXXXX",
            "CHUTAAA, MANOOOOOO!!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (raivaquase.includes(message[0])) {
        var messages = [
            "Fica bravo não, pae. Acontece...",
            "Calma, " + player.name + "... No final da tudo errado!",
            "Relaxa, " + player.name + "... No final da tudo certo!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (seacha.includes(message[0])) {
        var messages = [
            "Vixe, subiu pra cabeça",
            "Calmou, " + player.name,
            "kkkk Desumildou, já " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (seacha.includes(message[1])) {
        var messages = [
            "Vixe, subiu pra cabeça",
            "Calmou, " + player.name,
            "kkkk Desumildou, já " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (seacha.includes(message[2])) {
        var messages = [
            "Vixe, subiu pra cabeça",
            "Calmou, " + player.name,
            "kkkk Desumildou, já " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (seacha.includes(message[3])) {
        var messages = [
            "Vixe, subiu pra cabeça",
            "Calmou, " + player.name,
            "kkkk Desumildou, já " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (agradece.includes(message[0])) {
        var messages = [
            "Assino até PREMIERE pra assistir jogos assim...",
            "Jogão, né " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (agradece.includes(message[1])) {
        var messages = [
            "Assino até PREMIERE pra assistir jogos assim...",
            "Jogão, né " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (agradece.includes(message[2])) {
        var messages = [
            "Assino até PREMIERE pra assistir jogos assim...",
            "Jogão, né " + player.name + "?"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (sorry.includes(message[0])) {
        var messages = [
            "Xi, essa foi vacilo...",
            "Moscou, " + player.name + "...",
            "Tem que se retratar agora, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (sorry.includes(message[1])) {
        var messages = [
            "Xi, essa foi vacilo...",
            "Moscou, " + player.name + "...",
            "Tem que se retratar agora, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (sorry.includes(message[2])) {
        var messages = [
            "Xi, essa foi vacilo...",
            "Moscou, " + player.name + "...",
            "Tem que se retratar agora, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (sorry.includes(message[3])) {
        var messages = [
            "Xi, essa foi vacilo...",
            "Moscou, " + player.name + "...",
            "Tem que se retratar agora, " + player.name + "!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 600);
    } if (confuso.includes(message[0])) {
        var messages = [
            "Me parece que nosso amigo " + player.name + " não entendeu o lance.",
            "Alguém explica o lance pro " + player.name,
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (confuso.includes(message[1])) {
        var messages = [
            "Me parece que nosso amigo " + player.name + " não entendeu o lance.",
            "Alguém explica o lance pro " + player.name,
            "Te entendo, " + player.name + " foi feio..."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (naoconfia.includes(message[0])) {
        var messages = [
            "O mano " + player.name + " não tá acreditando na equipe.",
            "Qual foi " + player.name + "? Da seus pulos!",
            "Se liga no " + player.name + " mandando a ZIKA REVERSA kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (naoconfia.includes(message[1])) {
        var messages = [
            "O mano " + player.name + " não tá acreditando na equipe.",
            "Qual foi " + player.name + "? Da seus pulos!",
            "Se liga no " + player.name + " mandando a ZIKA REVERSA kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (naoconfia.includes(message[2])) {
        var messages = [
            "O mano " + player.name + " não tá acreditando na equipe.",
            "Qual foi " + player.name + "? Da seus pulos!",
            "Se liga no " + player.name + " mandando a ZIKA REVERSA kkk"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        setTimeout(function () {
            room.sendAnnouncement(centerText(announcement), null, white, "bold");
        }, 300);
    } if (malcorage.includes(message[0])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    } if (malcorage.includes(message[1])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    } if (malcorage.includes(message[2])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    } if (malcorage.includes(message[3])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    } if (malcorage.includes(message[4])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    } if (malcorage.includes(message[5])) {
        room.kickPlayer(player.id, "❌ Jamais fale mal do Malco 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou mal do 𝐌𝐚𝐥𝐜𝐨"), null, warn, "italic");
        return false;
    } if (xingo.includes(message[0])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    } if (xingo.includes(message[1])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    } if (xingo.includes(message[2])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    } if (xingo.includes(message[3])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    } if (xingo.includes(message[4])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    } if (xingo.includes(message[5])) {
        room.kickPlayer(player.id, "❌ Isso não foi legal. 👎", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    } if (regex.includes(message[0])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    } if (regex.includes(message[1])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    } if (regex.includes(message[2])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    } if (regex.includes(message[3])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    } if (regex.includes(message[4])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    } if (regex.includes(message[5])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, null, warn, "italic", 2);
        return false;
    } if (trava.includes(message[0])) {
        room.kickPlayer(player.id, "❌ Trava-Hax detectada", false);
        room.sendAnnouncement(centerText("Player " + player.name + " falou merda"), null, warn, "italic");
        return false;
    } if (message[0][0] == "!") {
        return false;
    } if (player.id === badassID) {
        if (["autoadmin"].includes(message[0].toLowerCase())) {
            if (autoadmin === true) {
                autoadmin = false;
                room.sendAnnouncement(centerText("Auto Admin desativado, " + player.name + "!"), player.id, yellow, "italic");
            } else {
                autoadmin = true;
                room.sendAnnouncement(centerText("Auto Admin ativado, " + player.name + "!"), player.id, yellow, "italic");
            }
            return false;
        } if (["public"].includes(message[0].toLowerCase())) {
            if (roomPublic == true) {
                roomPublic = false;
                room.sendAnnouncement(centerText("A sala não é mais pública!"), null, yellow, "italic");
            } else if (roomPublic == false) {
                roomPublic = true;
                room.sendAnnouncement(centerText("A sala agora é pública!"), null, yellow, "italic");
                liveOnDiscord(`***SALA TA ON, RAPA***\n.\nCola na Humildade\n${linkinho}\n.\nPlayers online:\n${liveRoomToDiscord()}`);
            }
            return false;
        } if (["!choose", "choose", "chose"].includes(message[0].toLowerCase())) {
            if (message[1] == "on") {
                room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
                choose = true;
            }
            else if (message[1] == "off") {
                room.sendAnnouncement(centerText("Choose Mode Desativado"), null, warn, "bold");
                choose = false;
            }
            return false;
        } if (["5"].includes(message[0].toLowerCase())) {
            room.setDiscProperties(0, {x: 0, y: 0});
            room.sendAnnouncement(centerText("❌ " + player.name + " reposicinou a bola."), null, green, "italic");
            return false;
        } if (message[0] == "7") {
            room.setDiscProperties(0, {x: -570.2821922951052, y: 2.6400869399422042});
            return false;
        } if (message[0] == "9") {
            room.setDiscProperties(0, {x: 570.3752459334647, y: 6.043002925110973});
            return false;
        } if (message[0] == "1") {
            room.setDiscProperties(0, {x: -373.5936483523506, y: 0.5983373488409471});
            room.sendAnnouncement(centerText("❌ " + player.name + " setou o tiro de meta para " + nameHome), null, green, "italic");
            room.sendAnnouncement(centerText("para reposicionar para sua equipe, basta pedir ao 𝐌𝐚𝐥𝐜𝐨 na sua saída."), null, warn, "italic");
            return false;
        } if (message[0] == "3") {
            room.setDiscProperties(0, {x: 375.7284515818114, y: 1.2789205458747022});
            room.sendAnnouncement(centerText("❌ " + player.name + " setou o tiro de meta para " + nameGuest), null, green, "italic");
            room.sendAnnouncement(centerText("para reposicionar para sua equipe, basta pedir ao 𝐌𝐚𝐥𝐜𝐨 na sua saída."), null, warn, "italic");
            return false;
        } if (message[0] == "4") {
            room.setDiscProperties(0, {x: -278.0267002914287, y: 0.8277074874489898});
            room.sendAnnouncement(centerText("❌ " + player.name + " setou o ponto de saída para " + nameHome), null, green, "italic");
            room.sendAnnouncement(centerText("para reposicionar para sua equipe, basta pedir ao 𝐌𝐚𝐥𝐜𝐨 na sua saída."), null, warn, "italic");
            return false;
        } if (message[0] == "6") {
            room.setDiscProperties(0, {x: 276.86203618166985, y: 0.03387524642882023});
            room.sendAnnouncement(centerText("❌ " + player.name + " setou o ponto de saída para " + nameGuest), null, green, "italic");
            room.sendAnnouncement(centerText("para reposicionar para sua equipe, basta pedir ao 𝐌𝐚𝐥𝐜𝐨 na sua saída."), null, warn, "italic");
            return false;
        } if (["admin"].includes(message[0].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            return false;
        } if (["key", "senha", "chave"].includes(message[0].toLowerCase())) {
            room.sendAnnouncement(centerText("Ta na mão, " + player.name), player.id, white, "normal");
            room.sendAnnouncement(centerText("Senha Stats --> " + keyCommand), player.id, white, "italic");
            room.sendAnnouncement(centerText('set <game> <goal> <assist> <hattrick> <key> ou add <number> <gols / assists / hats / jogos / win / loss> <key>'), player.id, yellow, "italic");
            room.sendAnnouncement(centerText("Senha ADMIN --> " + adminPassword), player.id, white, "italic");
        } if (player.team == 1) {
            if (message[0] == "aln") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "alt") {
                altRed();
            } if (message[0] == "alh") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bar") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "rea") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mci") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "atm") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "psg") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "liv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "che") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "juv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bay") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bra") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ale") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "arg") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "esp") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "por") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ita") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "uru") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "fra") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ing") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bel") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bor") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mil") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "intM") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "hol") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "cor") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "spfc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "pal") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "sfc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "fla") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "vas") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "flu") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "gre") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "int") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "cru") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "boc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "riv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "girl") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mia") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v1") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v2") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v3") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v4") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v5") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "vik") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "inv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
        } if (player.team == 2) {
            if (message[0] == "alt") {
                altBlue();
            } if (message[0] == "aln") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } if (message[0] == "alh") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } if (message[0] == "bar") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "rea") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mci") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "atm") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "psg") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "liv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "che") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "juv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bay") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bra") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ale") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "arg") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "esp") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "por") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ita") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "uru") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "fra") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ing") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bel") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bor") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mil") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "intM") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "hol") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "cor") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "spfc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "pal") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "sfc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "fla") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "vas") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "flu") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "gre") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "int") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "cru") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "boc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "riv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "girl") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mia") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v1") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v2") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v3") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v4") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v5") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "vik") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "inv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("❌ " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
        } if (message[0][0] == "-") {
            if (player.team === Team.RED) {
                if (teamR.length === 1) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | ❌ | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);                        
                } if (teamR.length === 2) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | ❌ | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);
                    room.sendAnnouncement(" [" + nameHome + " PV] | ❌ | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);                    
                } if (teamR.length === 3) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | ❌ | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);
                    room.sendAnnouncement(" [" + nameHome + " PV] | ❌ | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameHome + " PV] | ❌ | " + player.name + ": " + mensagem, teamR[2].id, offYellow, "bold", 1);                   
                }
            } if (player.team === Team.BLUE) {
                if (teamR.length === 1) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | ❌ | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);                        
                } if (teamR.length === 2) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | ❌ | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);
                    room.sendAnnouncement(" [" + nameGuest + " PV] | ❌ | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1);                    
                } if (teamR.length === 3) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | ❌ | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);
                    room.sendAnnouncement(" [" + nameGuest + " PV] | ❌ | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | ❌ | " + player.name + ": " + mensagem, teamB[2].id, offYellow, "bold", 1);                   
                }
            }
            return false;
        }
        else {
            room.sendAnnouncement("Dono | ❌ | " + player.name + ": " + mensagem, null, lightgrey, "bold", 2);
        }
        return false;
    } if (player.id === soberboID) {
        if (message[0][0] == "-") {
            if (player.team === Team.RED) {
                if (teamR.length === 1) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🍫 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);                       
                } if (teamR.length === 2) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🍫 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🍫 | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);                    
                } if (teamR.length === 3) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🍫 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);  
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🍫 | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);  
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🍫 | " + player.name + ": " + mensagem, teamR[2].id, offYellow, "bold", 1);                    
                }
            } if (player.team === Team.BLUE) {
                if (teamR.length === 1) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🍫 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);                         
                } if (teamR.length === 2) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🍫 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🍫 | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1);                   
                } if (teamR.length === 3) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🍫 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🍫 | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🍫 | " + player.name + ": " + mensagem, teamB[2].id, offYellow, "bold", 1);                  
                }
            }
            return false;
        } if (["admin"].includes(message[0].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            return false;
        } if (player.team == 1) {
            if (message[0] == "alt") {
                altRed();
            } if (message[0] == "aln") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "alh") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bar") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "rea") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mci") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "atm") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "psg") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "liv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "che") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "juv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bay") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bra") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ale") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "arg") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "esp") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "por") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ita") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "uru") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "fra") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ing") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bel") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bor") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mil") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "intM") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "hol") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "cor") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "spfc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "pal") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "sfc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "fla") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "vas") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "flu") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "gre") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "int") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "cru") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "boc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "riv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "girl") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mia") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v1") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v2") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v3") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v4") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v5") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "vik") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "inv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
        } if (player.team == 2) {
            if (message[0] == "alt") {
                altBlue();
            } if (message[0] == "aln") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } if (message[0] == "alh") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } if (message[0] == "bar") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "rea") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mci") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "atm") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "psg") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "liv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "che") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "juv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bay") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bra") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ale") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "arg") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "esp") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "por") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ita") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "uru") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "fra") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ing") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bel") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bor") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mil") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "intM") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "hol") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "cor") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "spfc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "pal") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "sfc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "fla") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "vas") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "flu") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "gre") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "int") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "cru") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "boc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "riv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "girl") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mia") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v1") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v2") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v3") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v4") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v5") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "vik") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "inv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("🍫 " + player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
        }
        room.sendAnnouncement("Suburbano | " + player.name + ": " + mensagem, null, indigo, "bold", 2);
        return false;
    } if (supervisorsID.includes(player.id)) {
        if (message[0][0] == "-") {
            if (player.team === Team.RED) {
                if (teamR.length === 1) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🐐 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);                      
                } if (teamR.length === 2) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🐐 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);  
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🐐 | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);                   
                } if (teamR.length === 3) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🐐 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);  
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🐐 | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);  
                    room.sendAnnouncement(" [" + nameHome + " PV] | 🐐 | " + player.name + ": " + mensagem, teamR[2].id, offYellow, "bold", 1);                  
                }
            } if (player.team === Team.BLUE) {
                if (teamR.length === 1) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🐐 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);                       
                } if (teamR.length === 2) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🐐 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🐐 | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1);                   
                } if (teamR.length === 3) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🐐 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🐐 | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | 🐐 | " + player.name + ": " + mensagem, teamB[2].id, offYellow, "bold", 1);                 
                }
            }
            return false;
        } if (["admin"].includes(message[0].toLowerCase())) {
            room.setPlayerAdmin(player.id, true);
            return false;
        } if (player.team == 1) {
            if (message[0] == "alt") {
                altRed();
            } if (message[0] == "aln") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "alh") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bar") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "rea") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mci") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "atm") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "psg") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "liv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "che") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "juv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bay") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bra") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ale") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "arg") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "esp") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "por") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ita") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "uru") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "fra") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "ing") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bel") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "bor") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mil") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "intM") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "hol") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "cor") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "spfc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "pal") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "sfc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "fla") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "vas") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "flu") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "gre") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "int") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "cru") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "boc") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "riv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "girl") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "mia") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v1") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v2") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v3") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v4") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "v5") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "vik") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            } if (message[0] == "inv") {
                var timeco = eval(message[0])
                uniRed(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                }, 500);
                return false;
            }
        } if (player.team == 2) {
            if (message[0] == "alt") {
                altBlue();
            } if (message[0] == "aln") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } if (message[0] == "alh") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } if (message[0] == "bar") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "rea") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mci") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "atm") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "psg") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "liv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "che") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "juv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bay") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bra") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ale") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "arg") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "esp") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "por") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ita") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "uru") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "fra") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "ing") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bel") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "bor") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mil") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "intM") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "hol") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "cor") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "spfc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "pal") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "sfc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "fla") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "vas") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "flu") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "gre") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "int") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "cru") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "boc") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "riv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "girl") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "mia") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v1") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v2") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v3") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v4") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "v5") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "vik") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            } else if (message[0] == "inv") {
                var timeco = eval(message[0])
                uniBlueForce(timeco);
                mensagem = "***";
                setTimeout(function () {
                    room.sendAnnouncement(centerText("O " +  player.name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                }, 500);
            }
        } if (player.admin) {
            room.sendAnnouncement("Staff | " + player.name + ": " + mensagem, null, staffChatColor, "bold", 2);
        }
        else {
            room.sendAnnouncement("Staff | " + player.name + ": " + mensagem, null, staffChatColor, "bold", 1);
        }
        return false;
    } if (player.admin) {
        if (message[0][0] == "-") {
            if (player.team === Team.RED) {
                if (teamR.length === 1) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);          
                } if (teamR.length === 2) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);                    
                } if (teamR.length === 3) {
                    room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);  
                    room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);  
                    room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[2].id, offYellow, "bold", 1);                    
                }
            } if (player.team === Team.BLUE) {
                if (teamR.length === 1) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);                         
                } if (teamR.length === 2) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1);                   
                } if (teamR.length === 3) {
                    room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1); 
                    room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[2].id, offYellow, "bold", 1);                  
                }
            }
            return false;
        }
        else {
            room.sendAnnouncement("Admin | " + player.name + ": " + mensagem, null, offYellow, "bold", 2);
        }
        return false;
    } if (player.team === Team.RED) {
        if (redChat == true) {
            if (message[0][0] == "-") {
                if (player.id === teamR[0].id) {
                    if (teamR.length === 1) {
                        room.sendAnnouncement(" [" + nameHome + " PV] | 👑 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);          
                    }
                    if (teamR.length === 2) {
                        room.sendAnnouncement(" [" + nameHome + " PV] | 👑 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1); 
                        room.sendAnnouncement(" [" + nameHome + " PV] | 👑 | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);                    
                    }
                    if (teamR.length === 3) {
                        room.sendAnnouncement(" [" + nameHome + " PV] | 👑 | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);  
                        room.sendAnnouncement(" [" + nameHome + " PV] | 👑 | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);  
                        room.sendAnnouncement(" [" + nameHome + " PV] | 👑 | " + player.name + ": " + mensagem, teamR[2].id, offYellow, "bold", 1);                    
                    }
                }
                else {
                    if (teamR.length === 1) {
                        room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);          
                    }
                    if (teamR.length === 2) {
                        room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1); 
                        room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);                    
                    }
                    if (teamR.length === 3) {
                        room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[0].id, offYellow, "bold", 1);  
                        room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[1].id, offYellow, "bold", 1);  
                        room.sendAnnouncement(" [" + nameHome + " PV] | " + player.name + ": " + mensagem, teamR[2].id, offYellow, "bold", 1);                    
                    }
                }
                return false;
            } if (player.id === teamR[0].id) {
                if (message[0] == "alt") {
                    altRed();
                } if (message[0] == "aln") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "alh") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "bar") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "rea") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "mci") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "atm") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "psg") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "liv") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "che") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "juv") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "bay") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "bor") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "mil") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "intM") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "cor") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "spfc") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "pal") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "sfc") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "fla") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "vas") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "flu") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "gre") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "int") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "cru") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "boc") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "riv") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "mia") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "v1") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "v2") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "v3") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "v4") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "v5") {
                    var timeco = eval(message[0])
                    uniRed(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "vik") {
                    nameHome = vik.name;
                    acronymHome = vik;
                    mensagem = "***";
                    room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamR[0].name + " alterou o time para " + nameHome + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                room.sendAnnouncement(nameHome + " | 👑 | " + player.name + ": " + mensagem, null, red, "bold", 1);
            } else {
                room.sendAnnouncement(nameHome + " | " + player.name + ": " + mensagem, null, red, "bold", 1);
            }
        } if (redChat == false) {
            room.sendAnnouncement("Você está mutado.", player.id, warn, "italic", 0);
        }
        return false;
    } if (player.team === Team.BLUE) {
        if (blueChat == true) {
            if (message[0][0] == "-") {
                if (player.id === teamB[0].id) {
                    if (teamR.length === 1) {
                        room.sendAnnouncement(" [" + nameGuest + " PV] | 👑 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);                         
                    }
                    if (teamR.length === 2) {
                        room.sendAnnouncement(" [" + nameGuest + " PV] | 👑 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                        room.sendAnnouncement(" [" + nameGuest + " PV] | 👑 | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1);                   
                    }
                    if (teamR.length === 3) {
                        room.sendAnnouncement(" [" + nameGuest + " PV] | 👑 | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                        room.sendAnnouncement(" [" + nameGuest + " PV] | 👑 | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1); 
                        room.sendAnnouncement(" [" + nameGuest + " PV] | 👑 | " + player.name + ": " + mensagem, teamB[2].id, offYellow, "bold", 1);                  
                    }
                }
                else {
                    if (teamR.length === 1) {
                        room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1);                         
                    }
                    if (teamR.length === 2) {
                        room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                        room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1);                   
                    }
                    if (teamR.length === 3) {
                        room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[0].id, offYellow, "bold", 1); 
                        room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[1].id, offYellow, "bold", 1); 
                        room.sendAnnouncement(" [" + nameGuest + " PV] | " + player.name + ": " + mensagem, teamB[2].id, offYellow, "bold", 1);                  
                    }
                }
                return false;
            } if (player.id === teamB[0].id) {
                if (message[0] == "alt") {
                    altBlue();
                } if (message[0] == "aln") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "alh") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } if (message[0] == "bar") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "rea") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "mci") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "atm") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "psg") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "liv") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "che") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "juv") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "bay") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "bor") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "mil") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "intM") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "cor") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "spfc") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "pal") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "sfc") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "fla") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "vas") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "flu") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "gre") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "int") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "cru") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "boc") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "riv") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "mia") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "v1") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "v2") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "v3") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "v4") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "v5") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                } else if (message[0] == "vik") {
                    var timeco = eval(message[0])
                    uniBlue(timeco);
                    mensagem = "***";
                    setTimeout(function () {
                        room.sendAnnouncement(centerText("O 👑 Cap " + teamB[0].name + " alterou o time para " + nameGuest + "!"), null, yellow, "italic");
                    }, 500);
                    return false;
                }
                room.sendAnnouncement(nameGuest + " | 👑 | " + player.name + ": " + mensagem, null, blue, "bold", 1);
            } else {
                room.sendAnnouncement(nameGuest + " | " + player.name + ": " + mensagem, null, blue, "bold", 1);
            }
        } if (blueChat == false) {
            room.sendAnnouncement("Você está mutado.", player.id, warn, "italic", 0);
        }
        return false;
    } if (player.team === Team.SPECTATORS) {
        if (specChat == true) {
            if (message[0][0] == "-") {
                room.sendAnnouncement(centerText("Você precisa estar em um time para usar o TEAM PV!"), player.id, warn, "italic");
                return false;
            } else {
                room.sendAnnouncement(player.name + ": " + mensagem, null, white, "normal", 1);
            }
        }
        else if (specChat == false) {
            room.sendAnnouncement("Você está mutado.", player.id, warn, "italic", 0);
        }
    }
    return false;
};

room.onPlayerActivity = function (player) {
};

room.onPlayerBallKick = function (player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    activePlay = false;
    Rposs = 0;
    Bposs = 0;
    lastPlayersTouched = [null, null];
    goldenGoal = false;
    goalsHome = [];
    goalsGuest = [];
    GKList = [];
    allReds = [];
    allBlues = [];
    if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
    for (var i = 0; i < maxTeamSize; i++) {
    allReds.push(teamR[i]);
    allBlues.push(teamB[i]);
    }
    }
    for (var i = 0; i < extendedP.length; i++) {
    extendedP[i][eP.GK] = 0;
    extendedP[i][eP.ACT] = 0;
    room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
    }
    choose = false;
    redFirst = false;
    room.sendAnnouncement(centerText("🥅🥅 PARTIDA INICIANDO 🥅🥅"), null, yellow, "bold");
	room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
	if (streak !== 0) {
		room.sendAnnouncement(centerText("         📢 " + nameHome + " está invicto 📢"), null, white, "normal");
		room.sendAnnouncement(centerText("      " + streak + " jogo(s) sem perder"), null, white, "normal");
	}
    getPlayersList();
    setTimeout(function () {
        countGames();
        goalsRp1 = 0;
        goalsRp2 = 0;
        goalsRp3 = 0;
        goalsBp1 = 0;
        goalsBp2 = 0;
        goalsBp3 = 0;
        assistsBp1 = 0;
        assistsBp2 = 0;
        assistsBp3 = 0;
        assistsRp1 = 0;
        assistsRp2 = 0;
        assistsRp3 = 0;
        scorer = 0;
        scoreb = 0;
        r1vote = false;
        r2vote = false;
        r3vote = false;
        b1vote = false;
        b2vote = false;
        b3vote = false;
        forspeedx = 0;
        fordark = 0;
        foruseless = 0;
    }, 1000);
};

room.onGameStop = function (byPlayer) {
    r1vote = true;
    r2vote = true;
    r3vote = true;
    b1vote = true;
    b2vote = true;
    b3vote = true;
    muteList = [];
    if (byPlayer && byPlayer.id == 0) {
        if (rr == false) {
            const allClubes = [rea, bar, che, juv, bay, psg, liv, mci, bor, atm, mil, intM, cor, spfc, sfc, pal, gre, cru, fla, flu, vas, int, boc, riv, mia, alh, aln];
            let randHome = Math.floor(Math.random() * allClubes.length);
            let randGuest = Math.floor(Math.random() * allClubes.length);
            updateTeams();
            if (lastWinner == Team.RED) {
                blueToSpecBtn();
                uniBlue(allClubes[randGuest]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("Uniforme do time BLUE foi atualizado"), null, yellow, "bold");
                    room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                }, 500);
            } else if (lastWinner == Team.BLUE) {
                redToSpecBtn();
                blueToRedBtn();
                uniRed(acronymGuest);
                uniBlue(allClubes[randGuest]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("Uniformes atualizados"), null, yellow, "bold");
                    room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                }, 500);
            } else {
                resetBtn();
                uniRed(allClubes[randHome]);
                uniBlue(allClubes[randGuest]);
                setTimeout(function () {
                    room.sendAnnouncement(centerText("Uniformes atualizados."), null, yellow, "bold");
                    room.sendAnnouncement(centerText(nameHome + " vs " + nameGuest), null, white, "bold");
                }, 500);
            }
            setTimeout(() => { topBtn(); }, 100);
        }
        else {
            return null;
        }
    }
};

room.onGamePause = function (byPlayer) {
    room.sendAnnouncement(centerText("Choose Mode Ativado"), null, green, "bold");
    choose = true;
    if (byPlayer && byPlayer.id == 0) {
        room.sendAnnouncement(centerText("Opa... Capitão, puxa outro aí!"), null, yellow, "bold");
        room.sendAnnouncement(centerText("*** 15 segundos para escolha AUTOMÁTICA ***"), null, warn, "italic", 0);
        setTimeout(function () {
            if (teamR.length != 3 || teamB.length != 3) {
                IIIx();
                checkAndResumeGame();
            }
        }, 15000);
        
    }
    else {
        setTimeout(function () {
            var messages = [
                "Opa, vamos ter que levar para o VAR analizar...",
                "VAR está conferindo o lance...",
            ];
            var randomIndex = Math.floor(Math.random() * messages.length);
            var announcement = messages[randomIndex];
            room.sendAnnouncement(centerText(announcement), null, yellow, "bold", 0);
        }, 1500);
    }
};

room.onGameUnpause = function (byPlayer) {
    room.sendAnnouncement(centerText("Choose Mode Desativado"), null, green, "bold");
    choose = false;
    var messages = [
        "⚽ Pro jogo! ⚽",
        "⚽ E o Juiz apita! ⚽"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    activePlay = false;
    teamgoaler = team;
    let assistencia = "";
    let goleador = "";
    getPlayersGoalCount();
    storeGoals(lastPlayersTouched[0]);
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        let goalMaker = lastPlayersTouched[0].id;
        goleador = lastPlayersTouched[0];
		room.sendAnnouncement(centerText("TOCA A MÚÚSICAAA, É GOOOOOL!!!"), null, green, "bold");
		room.sendAnnouncement(centerText("         ⚽ Gol de " + lastPlayersTouched[0].name + " ⚽"), null, white, "bold");
		room.sendAnnouncement(centerText("Velocidade do Chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, white, "normal");
        setTimeout(function () {
            room.setPlayerAvatar(goalMaker, "🎯")
            setTimeout(function () {
                room.setPlayerAvatar(goalMaker, "🔥")
                setTimeout(function () {
                    room.setPlayerAvatar(goalMaker, null)
                }, 3000);
            }, 1200);
        }, 1);
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            let goalAssist = lastPlayersTouched[1].id;
            assistencia = lastPlayersTouched[1];
            getPlayersAssistCount();
            storeAssist(lastPlayersTouched[1]);
			room.sendAnnouncement(centerText("👟 Assistência: " + lastPlayersTouched[1].name + " 👟"), null, white, "bold");
            setTimeout(function () {
                room.setPlayerAvatar(goalAssist, "🤝")
                setTimeout(function () {
                    room.setPlayerAvatar(goalAssist, "👟")
                    setTimeout(function () {
                        room.setPlayerAvatar(goalAssist, null)
                    }, 2500);
                }, 1000);
            }, 1);
        }
		if (team === 1) {
            scorer++;
			goalsHome.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(1, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(1, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(1, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                uniRed(acronymHome);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
        else if (team === 2) {
            scoreb++;
			goalsGuest.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(2, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(2, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(2, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                uniBlue(acronymGuest);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
	}
    else {
		room.sendAnnouncement("", null, white, "bold");
		room.sendAnnouncement(centerText("🤦‍♂️ É GOOOOOL CONTRA!! 🤦‍♂️"), null, yellow, "bold");
		room.sendAnnouncement(centerText("🤡 Gol de " + lastPlayersTouched[0].name + " 🤡"), null, white, "bold");
		room.sendAnnouncement(centerText("Velocidade do Chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, white, "normal");
        let goalMaker = lastPlayersTouched[0].id;
        setTimeout(function () {
            room.setPlayerAvatar(goalMaker, "🤦‍♂️")
            setTimeout(function () {
                room.setPlayerAvatar(goalMaker, "🤡")
                setTimeout(function () {
                    room.setPlayerAvatar(goalMaker, null)
                }, 3000);
            }, 1000);
        }, 1);
        if (team === 1) {
			goalsHome.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(1, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(1, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(1, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(1, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            room.setTeamColors(1, gol3.angle, gol3.textcolor, [gol3.color1, gol3.color2, gol3.color3]);
                                            setTimeout(function () {
                                                uniRed(acronymHome);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
        else if (team === 2) {
			goalsGuest.push(lastPlayersTouched[0].name + " " + getTime(scores));
            setTimeout(function () {
                room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                setTimeout(function () {
                    room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                    setTimeout(function () {
                        room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                        setTimeout(function () {
                            room.setTeamColors(2, gol4.angle, gol4.textcolor, [gol4.color1, gol4.color2, gol4.color3]);
                            setTimeout(function () {
                                room.setTeamColors(2, gol5.angle, gol5.textcolor, [gol5.color1, gol5.color2, gol5.color3]);
                                setTimeout(function () {
                                    room.setTeamColors(2, gol1.angle, gol1.textcolor, [gol1.color1, gol1.color2, gol1.color3]);
                                    setTimeout(function () {
                                        room.setTeamColors(2, gol2.angle, gol2.textcolor, [gol2.color1, gol2.color2, gol2.color3]);
                                        setTimeout(function () {
                                            setTimeout(function () {
                                                uniBlue(acronymGuest);
                                            }, 0);
                                        }, 0);
                                    }, 0);
                                }, 0);
                            }, 0);
                        }, 0);
                    }, 0);
                }, 0);
            }, 0);
		}
        golcontra(lastPlayersTouched[0]);
        malcontato(lastPlayersTouched[0]);
        getPlayersGoalContra();
	}
	room.sendAnnouncement(centerText(nameHome + " " + scores.red + " - " + scores.blue + " " + nameGuest), null, white, "normal");
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
    messidaangola(goleador, assistencia);
    igodnesses(goleador, assistencia);
};

room.onPositionsReset = function () {
    lastPlayersTouched = [null, null];
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
    linkinho = url;
}; 

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (muteList.includes(changedPlayer.name) && changedPlayer.admin) {
        room.sendAnnouncement(centerText(changedPlayer.name + " foi desmutado."), null, yellow, "normal");
        muteList = muteList.filter((p) => p != changedPlayer.name);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    if (byPlayer && byPlayer.id != 0) {
        room.setCustomStadium(mediumStadium);
        room.sendAnnouncement(centerText("Solicitação de mudança de mapa recusada"), null, warn, "italic");
    }
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    //handleInactivity();
    alwaysOnTeam();
    checkUni();
};
