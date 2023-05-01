/* VARIABLES */

/* ROOM */

const roomName = "🏆 3x3 Futsal ⚽ | Cola na humildade"; // nome sugerido: 🏆 3x3 Futsal ⚽ | Cola na humildade
const botName = "🤖";
const maxPlayers = 15;
const roomPublic = true;
const geo = [{ "lat": -23.646709, "lon": -46.730114, "code": "br" }, { "code": "FR", "lat": 46.2, "lon": 2.2 }, { "code": "PL", "lat": 51.9, "lon": 19.1 }, { "code": "GB", "lat": 55.3, "lon": -3.4 }, { "code": "PT", "lat": 39.3, "lon": -8.2 }];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimit = 3;
const timeLimit = 3;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
var adminPassword = "true";
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;

/* UNIFORMS */

const Uniform = {};
const ale = {'name': 'Alemanha', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 90, "textcolor": 0x000000, "color1": 0xFFFFFF, "color2": 0xFFFFFF, "color3": 0xFFFFFF,};
const arg = {'name': 'Argentina', "type": Uniform, "emoji": '🔵⚪🔵', "angle": 90, "textcolor": 0x1F374B, "color1": 0x75AADB, "color2": 0xFFFFFF, "color3": 0x75AADB};
const bra = {'name': 'Brasil', "type": Uniform, "emoji": '🟢🟡🔵', "angle": 360, "textcolor": 0x27965A, "color1": 0xDBB71B, "color2": 0xDBB71B, "color3": 0xDBB71B};
const esp = {'name': 'Espanha', "type": Uniform, "emoji": '🔴🟡🔴', "angle": 90, "textcolor": 0xFFFF00, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const por = {'name': 'Portugal', "type": Uniform, "emoji": '🟢🔴🔴', "angle": 0, "textcolor": 0x289E1F, "color1": 0xFF0000, "color2": 0xFF0000, "color3": 0xFF0000};
const ita = {'name': 'Italia', "type": Uniform, "emoji": '🟢⚪🔴', "angle": 0, "textcolor": 0xFFFFFF, "color1": 0x3646A9, "color2": 0x3646A9, "color3": 0x3646A9};
const uru = {'name': 'Uruguai', "type": Uniform, "emoji": '⚪🔵⚪', "angle": 0, "textcolor": 0x212124, "color1": 0x66A5D4, "color2": 0x66A5D4, "color3": 0x66A5D4};
const fra = {'name': 'França', "type": Uniform, "emoji": '🔵⚪🔴', "angle": 90, "textcolor": 0xF5F9F6, "color1": 0x265ECF, "color2": 0x384355, "color3": 0x384355};
const ing = {'name': 'Inglaterra', "type": Uniform, "emoji": '⚪🔴⚪', "angle": 0, "textcolor": 0x0549A0, "color1": 0xDEDFE4, "color2": 0xDEDFE4, "color3": 0xDEDFE4};
const bel = {'name': 'Bélgica', "type": Uniform, "emoji": '⚫🔴🟡', "angle": 0, "textcolor": 0xCA9144, "color1": 0xC4212A, "color2": 0xC4212A, "color3": 0xC4212A};
const uniformIds = [ale, arg, bra, esp, por, ita, uru, fra, ing, bel];
let homeUniformId = uniformIds[0];
let guestUniformId = uniformIds[5];
var nameHome = homeUniformId.name;
var acronymHome = homeUniformId;
var emojiHome = homeUniformId.emoji;
var nameGuest = guestUniformId.name;
var acronymGuest = guestUniformId;
var emojiGuest = guestUniformId.emoji;
room.setTeamColors(1, acronymHome.angle, acronymHome.textcolor, [acronymHome.color1, acronymHome.color2, acronymHome.color3]);
room.setTeamColors(2, acronymGuest.angle, acronymGuest.textcolor, [acronymGuest.color1, acronymGuest.color2, acronymGuest.color3]);

/* OPTIONS */

var drawTimeLimit = 1; //minutos
var maxTeamSize = 4;
var yellow = 0xffeb15;
var white = 0xFFFFFF;
var green = 0x19d459;
var red = 0xFF0000;
var blue = 0x0000FF;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched;
var goldenGoal = false;
var activePlay = false;
var muteList = [];

/* STATS */

var GKList = new Array(2 * maxPlayers).fill(0);
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;

/* AUXILIARY */

var checkTimeVariable = false;
var announced = false;

/* FUNCTIONS */

function switchUniforms() {
    if (room.getScores() === null || room.getScores().length < 2) {
      return;
    }
  
    const scoreRed = room.getScores()[0];
    const scoreBlue = room.getScores()[1];
    var oldHomeUniformId = homeUniformId;
    var oldGuestUniformId = guestUniformId;
  
    // Sorteia novos uniformes
    do {
      randomIndex1 = Math.floor(Math.random() * uniformIds.length);
      randomIndex2 = Math.floor(Math.random() * uniformIds.length);
    } while (randomIndex1 === randomIndex2);
  
    homeUniformId = uniformIds[randomIndex1];
    guestUniformId = uniformIds[randomIndex2];
  
    // Verifica se os novos uniformes são iguais aos antigos
    while (homeUniformId === oldGuestUniformId || guestUniformId === oldHomeUniformId) {
      randomIndex1 = Math.floor(Math.random() * uniformIds.length);
      randomIndex2 = Math.floor(Math.random() * uniformIds.length);
      homeUniformId = uniformIds[randomIndex1];
      guestUniformId = uniformIds[randomIndex2];
    }
  
    // Verifica qual time ganhou a partida
    if (scoreBlue > scoreRed) {
      // Se o time blue venceu, seu uniforme será trocado com o do time red
      room.setTeamColors(1, guestUniformId.angle, guestUniformId.textcolor, [guestUniformId.color1, guestUniformId.color2, guestUniformId.color3]);
      room.setTeamColors(2, homeUniformId.angle, homeUniformId.textcolor, [homeUniformId.color1, homeUniformId.color2, homeUniformId.color3]);
      // Atualiza as variáveis globais
      homeUniformId = oldGuestUniformId;
      guestUniformId = oldHomeUniformId;
    } else if (scoreBlue < scoreRed) {
      // Se o time red venceu, só o uniforme do time blue será alterado
      room.setTeamColors(1, homeUniformId.angle, homeUniformId.textcolor, [homeUniformId.color1, homeUniformId.color2, homeUniformId.color3]);
      room.setTeamColors(2, oldGuestUniformId.angle, oldGuestUniformId.textcolor, [oldGuestUniformId.color1, oldGuestUniformId.color2, oldGuestUniformId.color3]);
      // Atualiza a variável global do uniforme do time blue
      guestUniformId = oldGuestUniformId;
    }
};

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

function getUniform(uniformStr) {
    if (uniforms.hasOwnProperty(uniformStr)) return uniformStr;
    for (const [key, value] of Object.entries(uniforms)) {
        for (let i = 0; i < value.aliases.length; i++) {
            if (value.aliases[i] === uniformStr) return key;
        }
    }
    return false;
};

function changeUniforme() {
    var a = nameHome;
    nameHome = nameGuest;
    nameGuest = a;

    var b = acronymHome;
    acronymHome = acronymGuest;
    acronymGuest = b;

    var c = emojiHome;
    emojiHome = emojiGuest;
    emojiGuest = c;

    room.setTeamColors(1, uniforms[acronymHome].angle, uniforms[acronymHome].textcolor, [uniforms[acronymHome].color1, uniforms[acronymHome].color2, uniforms[acronymHome].color3]);

    room.setTeamColors(2, uniforms[acronymGuest].angle, uniforms[acronymGuest].textcolor, [uniforms[acronymGuest].color1, uniforms[acronymGuest].color2, uniforms[acronymGuest].color3]);
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
            room.setPlayerTeam(teamS[0].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
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
        goldenGoal = true;
        var messages = [
            "Se liga, a prorrogação é de " + drawTimeLimit * 60 + " segundos!",
            "Vou dar " + drawTimeLimit * 60 + " segundos de prorrogação, rapa!"
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
        var messagens = [
            "⚽ Primeiro GOL vence! ⚽",
            "⚽ Quem fizer leva! ⚽",
            "⚽ Boraa, decisivo! Fez, ganhou! ⚽",
        ];
        var randomIndex = Math.floor(Math.random() * messagens.length);
        var announcement = messagens[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, white, "bold");
    }
    if (scores.time > scores.timeLimit + drawTimeLimit * 60 - 15 && scores.time <= scores.timeLimit + drawTimeLimit * 60) {
        if (checkTimeVariable == false && announced == false) {
            checkTimeVariable = true;
            announced = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(centerText("⌛ 15 segundos para o empate! ⌛"), null, yellow, "bold");
        }
    }
    if (scores.time > (scores.timeLimit + drawTimeLimit * 60)) {
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
    setTimeout(function () { 
		lastPlayersTouched[0] = { id: 0, team: 0 };
		lastPlayersTouched[1] = undefined;
		goalsHome = [];
		goalsGuest = [];
	}, 8000);
    switchUniforms()
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement(centerText(`🏆 FIM DE PARTIDA 🏆`), null, white, "bold", Notification.CHAT);
	    room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
	    room.sendAnnouncement(centerText(`${emojiHome} ` + (Rposs * 100).toPrecision(2).toString() + `%` + `  Posse de bola  ` + (Bposs * 100).toPrecision(2).toString() + `% ${emojiGuest}`), null, white, "bold", 0);
        if (scores.blue == 0) {
            room.sendAnnouncement(centerText(teamR[GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)))].name + " GK ponta firme!"), null, white, "bold");
        }
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold", 0);
        }
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(centerText(`🏆 FIM DE PARTIDA 🏆`), null, white, "bold", Notification.CHAT);
	    room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
	    room.sendAnnouncement(centerText(`${emojiHome} ` + (Rposs * 100).toPrecision(2).toString() + `%` + `  Posse de bola  ` + (Bposs * 100).toPrecision(2).toString() + `% ${emojiGuest}`), null, white, "bold", 0);
        if (scores.blue == 0) {
            room.sendAnnouncement(centerText(teamB[GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)))].name + " GK ponta firme!"), null, white, "bold");
        }
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold", 0);
        }
    }
    else {
        streak = 0;
        room.sendAnnouncement(centerText(`🏆 FIM DE PARTIDA 🏆`), null, white, "bold", Notification.CHAT);
	    room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, white, "bold", 0);
        if (scores.red == 0) {
            const teamBGKIndex = GKList.slice(maxPlayers, 2 * maxPlayers).findIndex(p => p == Math.max(...GKList.slice(maxPlayers, 2 * maxPlayers)));
            const teamBGKName = (teamBGKIndex >= 0 && teamBGKIndex < teamB.length) ? teamB[teamBGKIndex].name : "o GK do Real";
            const teamRGKIndex = GKList.slice(0, maxPlayers).findIndex(p => p == Math.max(...GKList.slice(0, maxPlayers)));
            const teamRGKName = (teamRGKIndex >= 0 && teamRGKIndex < teamR.length) ? teamR[teamRGKIndex].name : "O Gk do Barça";
            room.sendAnnouncement(centerText(teamRGKName + " e " + teamBGKName + " mandaram muito de GK! "), null, white, "bold");
        }
        for (var i = 0; i < 3; i++) {
            room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, white, "bold", 0);
        }
    }
};

/* PLAYER FUNCTIONS */

function updateTeams() {
    players = room.getPlayerList().filter((player) => player.id != 0);
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
};

function updateAdmins() {
    if (players.length == 0 || players.find((player) => player.admin) != null) {
        return;
    }
    var copie = [];
    players.forEach(function (element) { copie.push(element.id); });
    room.setPlayerAdmin(arrayMin(copie), true); // Give admin to the player who's played the longest on the room
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

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    var messages = [
        "👋 Salve, " + player.name + "!",
        "👋 Eae, " + player.name + "!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    updateTeams();
    updateAdmins();
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        updateList(Math.max(teamR.findIndex((p) => p.id == changedPlayer.id), teamB.findIndex((p) => p.id == changedPlayer.id), teamS.findIndex((p) => p.id == changedPlayer.id)), changedPlayer.team);
    }
    updateTeams();
};

room.onPlayerLeave = function (player) {
    updateList(Math.max(teamR.findIndex((p) => p.id == player.id), teamB.findIndex((p) => p.id == player.id), teamS.findIndex((p) => p.id == player.id)), player.team);
    updateTeams();
    updateAdmins();
    var messages = [
        "Vixi, " + player.name + " vazou!",
        "Voltaaaaaa, " + player.name + "!",
        "Aaaah, " + player.name + " arregou essas hora!",
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    message = message.split(" ");
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement(centerText("Admin commands: !mute <R/B/S> <team position> <duration = 3>, !unmute all/<nick>, !clearbans", player.id), null, yellow, "normal");
    }
    else if (["!adm"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            adminPassword = "true";
            console.log("adminPassword : " + adminPassword);
        }
    }
    else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 3 || message.length == 4) {
                if (["R", "B", "S"].includes(message[1])) {
                    var timeOut;
                    if (message[1] == "R") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamR.length && Number.parseInt(message[2]) > 0) {
                                if (teamR[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamR[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamR[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamR[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamR[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                    if (message[1] == "B") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamB.length && Number.parseInt(message[2]) > 0) {
                                if (teamB[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamB[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamB[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamB[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamB[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                    if (message[1] == "S") {
                        if (!Number.isNaN(Number.parseInt(message[2]))) {
                            if (Number.parseInt(message[2]) <= teamS.length && Number.parseInt(message[2]) > 0) {
                                if (teamS[Number.parseInt(message[2]) - 1].admin || muteList.filter((p) => p == teamS[Number.parseInt(message[2]) - 1].name).length > 0) {
                                    return false;
                                }
                                if (message.length == 4) {
                                    if (!Number.isNaN(Number.parseInt(message[3]))) {
                                        if (Number.parseInt(message[3]) > 0) {
                                            timeOut = Number.parseInt(message[3]) * 60 * 1000;
                                        }
                                    }
                                }
                                else {
                                    timeOut = 3 * 60 * 1000;
                                }
                                setTimeout(function (name) { muteList = muteList.filter((p) => p != name) }, timeOut, teamS[Number.parseInt(message[2]) - 1].name);
                                muteList.push(teamS[Number.parseInt(message[2]) - 1].name);
                                room.sendAnnouncement(centerText(teamS[Number.parseInt(message[2]) - 1].name + " foi mutado por " + (timeOut / 60000) + " minutos !"), null, yellow, "normal");
                            }
                        }
                    }
                }
            }
        }
    }
    else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 2 && message[1] == "all") {
                muteList = [];
                room.sendAnnouncement(centerText("Desmutado."), null, yellow, "normal");
            }
            if (message.length >= 2) {
                var name = "";
                for (var i = 1; i < message.length; i++) {
                    name += message[i] + " ";
                }
                name = name.substring(0, name.length - 1);
                muteList.length != muteList.filter((p) => p != name).length ? room.sendAnnouncement(centerText(name + " foi desmutado.")) : null;
                muteList = muteList.filter((p) => p != name);
            }
        }
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            room.clearBans();
            room.sendAnnouncement(centerText("Banimentos apagados"), null, yellow, "normal");
        }
    }
    else if (["!bb, !bye, !cya, !gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Flw!", false);
    }
    if (message[0][0] == "!") {
        return false;
    }
    if (muteList.includes(player.name)) {
        room.sendAnnouncement(centerText("Você foi mutado.", player.id), null, yellow, "normal");
        return false;
    }
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
    GKList = new Array(2 * maxPlayers).fill(0);
    activePlay = false;
    Rposs = 0;
    Bposs = 0;
    lastPlayersTouched = [null, null];
    goldenGoal = false;
    room.sendAnnouncement(centerText(emojiHome + nameHome + " vs " + nameGuest + emojiGuest), null, white, "bold");
    var messages = [
        "⚽ Bora pro jogo! ⚽",
        "⚽ Que vença o menos horrível! kkkkk ⚽",
        "⚽ Decisivo, quem perder sai! kkk vamo! ⚽"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onGameStop = function (byPlayer) {
    if (byPlayer && byPlayer.id == 0) {
        updateTeams();
        if (lastWinner == Team.RED) {
            blueToSpecBtn();
        }
        else if (lastWinner == Team.BLUE) {
            redToSpecBtn();
            blueToRedBtn();
        }
        else {
            resetBtn();
        }
        setTimeout(() => { topBtn(); }, 100);
    }
    switchUniforms()
};

room.onGamePause = function (byPlayer) {
    setTimeout(function () {
        var messages = [
            "Calma aê, vamo resolver e já voltamos. Não enche! kkk",
            "VAR ta analizando, calma... kk",
            "Calma aê, rapa. Rapidão já voltamos pro game."
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        var announcement = messages[randomIndex];
        room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
    }, 1500);
};

room.onGameUnpause = function (byPlayer) {
    var messages = [
        "⚽ Bora pro jogo! ⚽",
        "⚽ Simboraaa! ⚽"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, white, "bold");
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    activePlay = false;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            room.sendAnnouncement(centerText("⚽ Gol de " + lastPlayersTouched[0].name + " ! Assistência de " + lastPlayersTouched[1].name + ". Velocidade : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? emojiHome : emojiGuest) + getTime(scores)), null, green, "bold");
        }
        else {
            room.sendAnnouncement(centerText("⚽ Gol de " + lastPlayersTouched[0].name + " ! Velocidade : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? emojiHome : emojiGuest) + getTime(scores)), null, green, "bold");
        }
    }
    else {
        room.sendAnnouncement(centerText("😂 Gol CONTRA de " + lastPlayersTouched[0].name + " 🤡 ! Velocidade : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? emojiHome : emojiGuest) + getTime(scores)), null, yellow, "bold");
    }
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
};

room.onPositionsReset = function () {
    lastPlayersTouched = [null, null];
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (muteList.includes(changedPlayer.name) && changedPlayer.admin) {
        room.sendAnnouncement(centerText(changedPlayer.name + " foi desmutado."), null, yellow, "normal");
        muteList = muteList.filter((p) => p != changedPlayer.name);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    var messages = [
        "Troca de Mapa pra ficar mais esquema.",
        "Mapa mudou, agora da jogão!",
        "Aquele não tava rolando né? Trocamo!"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    room.sendAnnouncement(centerText(announcement), null, yellow, "bold");
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
};