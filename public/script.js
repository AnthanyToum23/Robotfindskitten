//overall variables
var rownum = 20;
var colnum = 30;
var itemnum = 15;
var waytogo = '\nWay to go robot! You found kitten!';
var newgame = '\nRefresh the page to play again';

var colors = new Array("red", "blue", "yellow", "#00FF00", "#FF00FF", "#00FFFF", "FF9900");

var message = new Array(201);
message[0] = '"I pity the fool who mistakes me for kitten!", sez Mr. T.';
message[1] = 'That\'s just an old tin can.';
message[2] = 'It\'s an altar to the horse god.';
message[3] = 'A box of dancing mechanical pencils. They dance! They sing!';
message[4] = 'It\'s an old Duke Ellington record.';
message[5] = 'A box of fumigation pellets.';
message[6] = 'A digital clock. It\'s stuck at 2:17 PM.';
message[7] = 'That\'s just a charred human corpse.';
message[8] = 'I don\'t know what that is, but it\'s not kitten.';
message[9] = 'An empty shopping bag. Paper or plastic?';
message[10] = 'Could it be... a big ugly bowling trophy?';
message[11] = 'A coat hanger hovers in thin air. Odd.';
message[12] = 'Not kitten, just a packet of Kool-Aid(tm).';
message[13] = 'A freshly-baked pumpkin pie.';
message[14] = 'A lone, forgotten comma, sits here, sobbing.';
message[15] = 'ONE HUNDRED THOUSAND CARPET FIBRES!!!!!';
message[16] = 'It\'s Richard Nixon\'s nose!';
message[17] = 'It\'s Lucy Ricardo. "Aaaah, Ricky!", she says.';
message[18] = 'You stumble upon Bill Gates\' stand-up act.';
message[19] = 'Just an autographed copy of the Kama Sutra.';
message[20] = 'It\'s the Will Rogers Highway. Who was Will Rogers, anyway?';
message[21] = 'It\'s another robot, more advanced in design than you but strangely immobile.';
message[22] = 'Leonard Richardson is here, asking people to lick him.';
message[23] = 'It\'s a stupid mask, fashioned after a beagle.';
message[24] = 'Your State Farm Insurance(tm) representative!';
message[25] = 'It\'s the local draft board.';
message[26] = 'Seven 1/4" screws and a piece of plastic.';
message[27] = 'An 80286 machine.';
message[28] = 'One of those stupid "Homes of the Stars" maps.';
message[29] = 'A signpost saying "TO KITTEN". It points in no particular direction.';
message[30] = 'A hammock stretched between a tree and a volleyball pole.';
message[31] = 'A Texas Instruments of Destruction calculator.';
message[32] = 'It\'s a dark, amphorous blob of matter.';
message[33] = 'Just a pincushion.';
message[34] = 'It\'s a mighty zombie talking about some love and prosperity.';
message[35] = '"Dear robot, you may have already won our 10 MILLION DOLLAR prize..."';
message[36] = 'It\'s just an object.';
message[37] = 'A mere collection of pixels.';
message[38] = 'A badly dented high-hat cymbal lies on its side here.';
message[39] = 'A marijuana brownie.';
message[40] = 'A plush Chewbacca.';
message[41] = 'Daily hunger conditioner from Australasia';
message[42] = 'Just some stuff.';
message[43] = 'Why are you touching this when you should be finding kitten?';
message[44] = 'A glorious fan of peacock feathers.';
message[45] = 'It\'s some compromising photos of Babar the Elephant.';
message[46] = 'A copy of the Weekly World News. Watch out for the chambered nautilus!';
message[47] = 'It\'s the proverbial wet blanket.';
message[48] = 'A "Get Out of Jail Free" card.';
message[49] = 'An incredibly expensive "Mad About You" collector plate.';
message[50] = 'Paul Moyer\'s necktie.';
message[51] = 'A haircut and a real job. Now you know where to get one!';
message[52] = 'An automated robot-hater. It frowns disapprovingly at you.';
message[53] = 'An automated robot-liker. It smiles at you.';
message[54] = 'It\'s a black hole. Don\'t fall in!';
message[55] = 'Just a big brick wall.';
message[56] = 'You found kitten! No, just kidding.';
message[57] = 'Heart of Darkness brand pistachio nuts.';
message[58] = 'A smoking branding iron shaped like a 24-pin connector.';
message[59] = 'It\'s a Java applet.';
message[60] = 'An abandoned used-car lot.';
message[61] = 'A shameless plug for Herd of Nerds: http://www.herdofnerds.net/.';
message[62] = 'Sherlock Holmes\' pipe, upside down.';
message[63] = 'A can of Spam Lite.';
message[64] = 'This is another fine mess you\'ve gotten us into, Stanley.';
message[65] = 'It\'s scenery for "Waiting for Godot".';
message[66] = 'This grain elevator towers high above you.';
message[67] = 'A Mentos wrapper.';
message[68] = 'It\'s the constellation Pisces.';
message[69] = 'It\'s a fly on the wall. Hi, fly!';
message[70] = 'This kind of looks like kitten, but it\'s not.';
message[71] = 'It\'s a banana! Oh, joy!';
message[72] = 'A helicopter has crashed here.';
message[73] = 'Carlos Tarango stands here, doing his best impression of Pat Smear.';
message[74] = 'A patch of mushrooms grows here.';
message[75] = 'A patch of grape jelly grows here.';
message[76] = 'A spindle, and a grindle, and a bucka-wacka-woom!';
message[77] = 'A geyser sprays water high into the air.';
message[78] = 'A toenail? What good is a toenail?';
message[79] = 'You\'ve found the fish! Not that it does you much good in this game.';
message[80] = 'A Buttertonsils bar.';
message[81] = 'One of the few remaining discoes.';
message[82] = 'Ah, the uniform of a Revolutionary-era minuteman.';
message[83] = 'A punch bowl, filled with punch and lemon slices.';
message[84] = 'It\'s nothing but a G-thang, baby.';
message[85] = 'IT\'S ALIVE! AH HA HA HA HA!';
message[86] = 'This was no boating accident!';
message[87] = 'Wait! This isn\'t the poker chip! You\'ve been tricked! DAMN YOU, MENDEZ!';
message[88] = 'A livery stable! Get your livery!';
message[89] = 'It\'s a perpetual immobility machine.';
message[90] = '"On this spot in 1962, Henry Winkler was sick."';
message[91] = 'There\'s nothing here; it\'s just an optical illusion.';
message[92] = 'The World\'s Biggest Motzah Ball!';
message[93] = 'A tribe of cannibals lives here. They eat Malt-O-Meal for breakfast, you know.';
message[94] = 'This appears to be a rather large stack of trashy romance novels.';
message[95] = 'Look out! Exclamation points!';
message[96] = 'A herd of wild coffee mugs slumbers here.';
message[97] = 'It\'s a limbo bar! How low can you go?';
message[98] = 'It\'s the horizon. Now THAT\'S weird.';
message[99] = 'A vase full of artificial flowers is stuck to the floor here.';
message[100] = 'A large snake bars your way.';
message[101] = 'A pair of saloon-style doors swing slowly back and forth here.';
message[102] = 'It\'s an ordinary bust of Beethoven... but why is it painted green?';
message[103] = 'It\'s TV\'s lovable wisecracking Crow! "Bite me!", he says.';
message[104] = 'Hey, look, it\'s war. What is it good for? Absolutely nothing. Say it again.';
message[105] = 'It\'s the amazing self-referential thing that\'s not kitten.';
message[106] = 'A flamboyant feather boa. Now you can dress up like Carol Channing!';
message[107] = '"Sure hope we get some rain soon," says Farmer Joe.';
message[108] = '"How in heck can I wash my neck if it ain\'t gonna rain no more?" asks Farmer Al.';
message[109] = '"Topsoil\'s all gone, ma," weeps Lil\' Greg.';
message[110] = 'This is a large brown bear. Oddly enough, it\'s currently peeing in the woods.';
message[111] = 'A team of arctic explorers is camped here.';
message[112] = 'This object here appears to be Louis Farrakhan\'s bow tie.';
message[113] = 'This is the world-famous Chain of Jockstraps.';
message[114] = 'A trash compactor, compacting away.';
message[115] = 'This toaster strudel is riddled with bullet holes!';
message[116] = 'It\'s a hologram of a crashed helicopter.';
message[117] = 'This is a television. On screen you see a robot strangely similar to yourself.';
message[118] = 'This balogna has a first name, it\'s R-A-N-C-I-D.';
message[119] = 'A salmon hatchery? Look again. It\'s merely a single salmon.';
message[120] = 'It\'s a rim shot. Ba-da-boom!';
message[121] = 'It\'s creepy and it\'s kooky, mysterious and spooky. It\'s also somewhat ooky.';
message[122] = 'This is an anagram.';
message[123] = 'This object is like an analogy.';
message[124] = 'It\'s a symbol. You see in it a model for all symbols everywhere.';
message[125] = 'The object pushes back at you.';
message[126] = 'A traffic signal. It appears to have been recently vandalized.';
message[127] = '"There is no kitten!" cackles the old crone. You are shocked by her blasphemy.';
message[128] = 'This is a Lagrange point. Don\'t come too close now.';
message[129] = 'The dirty old tramp bemoans the loss of his harmonica.';
message[130] = 'Look, it\'s Fanny the Irishman!';
message[131] = 'What in blazes is this?';
message[132] = 'It\'s the instruction manual for a previous version of this game.';
message[133] = 'A brain cell. Oddly enough, it seems to be functioning.';
message[134] = 'Tea and/or crumpets.';
message[135] = 'This jukebox has nothing but Cliff Richards albums in it.';
message[136] = 'It\'s a Quaker Oatmeal tube, converted into a drum.';
message[137] = 'This is a remote control. Being a robot, you keep a wide berth.';
message[138] = 'It\'s a roll of industrial-strength copper wire.';
message[139] = 'Oh boy! Grub! Er, grubs.';
message[140] = 'A puddle of mud, where the mudskippers play.';
message[141] = 'Plenty of nothing.';
message[142] = 'Look at that, it\'s the Crudmobile.';
message[143] = 'Just Walter Mattheau and Jack Lemmon.';
message[144] = 'Two crepes, two crepes in a box.';
message[145] = 'An autographed copy of "Primary Colors", by Anonymous.';
message[146] = 'Another rabbit? That\'s three today!';
message[147] = 'It\'s a segmentation fault. Core dumped, by the way.';
message[148] = 'A historical marker showing the actual location of /dev/null.';
message[149] = 'Thar\'s Mobius Dick, the convoluted whale. Arrr!';
message[150] = 'It\'s a charcoal briquette, smoking away.';
message[151] = 'A pizza, melting in the sun.';
message[152] = 'It\'s a "HOME ALONE 2: Lost in New York" novelty cup.';
message[153] = 'A stack of 7 inch floppies wobbles precariously.';
message[154] = 'It\'s nothing but a corrupted floppy. Coaster anyone?';
message[155] = 'A section of glowing phosphor cells sings a song of radiation to you.';
message[156] = 'This TRS-80 III is eerily silent.';
message[157] = 'A toilet bowl occupies this space.';
message[158] = 'This peg-leg is stuck in a knothole!';
message[159] = 'It\'s a solitary vacuum tube.';
message[160] = 'This corroded robot is clutching a mitten.';
message[161] = '"Hi, I\'m Anson Williams, TV\'s \'Potsy\'."';
message[162] = 'This subwoofer was blown out in 1974.';
message[163] = 'Three half-pennies and a wooden nickel.';
message[164] = 'It\'s the missing chapter to "A Clockwork Orange".';
message[165] = 'It\'s a burrito stand flyer. "Taqueria El Ranchito".';
message[166] = 'This smiling family is happy because they eat LARD.';
message[167] = 'Roger Avery, persona un famoso de los Estados Unidos.';
message[168] = 'Ne\'er but a potted plant.';
message[169] = 'A parrot, kipping on its back.';
message[170] = 'A forgotten telephone switchboard.';
message[171] = 'A forgotten telephone switchboard operator.';
message[172] = 'It\'s an automated robot-disdainer. It pretends you\'re not there.';
message[173] = 'It\'s a portable hole. A sign reads: "Closed for the winter".';
message[174] = 'Just a moldy loaf of bread.';
message[175] = 'A little glass tub of Carmex. ($.89) Too bad you have no lips.';
message[176] = 'A Swiss-Army knife. All of its appendages are out. (toothpick lost)';
message[177] = 'It\'s a zen simulation, trapped within an ASCII character.';
message[178] = 'It\'s a copy of "The Rubaiyat of Spike Schudy".';
message[179] = 'It\'s "War and Peace" (unabridged, very small print).';
message[180] = 'A willing, ripe tomato bemoans your inability to digest fruit.';
message[181] = 'A robot comedian. You feel amused.';
message[182] = 'It\'s KITT, the talking car.';
message[183] = 'Here\'s Pete Peterson. His batteries seem to have long gone dead.';
message[184] = '"Blup, blup, blup", says the mud pot.';
message[185] = 'More grist for the mill.';
message[186] = 'Grind \'em up, spit \'em out, they\'re twigs.';
message[187] = 'The boom box cranks out an old Ethel Merman tune.';
message[188] = 'It\'s "Finding kitten", published by O\'Reilly and Associates.';
message[189] = 'Pumpkin pie spice.';
message[190] = 'It\'s the Bass-Matic \'76! Mmm, that\'s good bass!';
message[191] = '"Lend us a fiver \'til Thursday", pleas Andy Capp.';
message[192] = 'It\'s a tape of \'70s rock. All original hits! All original artists!';
message[193] = 'You\'ve found the fabled America Online disk graveyard!';
message[194] = 'Empty jewelboxes litter the landscape.';
message[195] = 'It\'s the astounding meta-object.';
message[196] = 'Ed McMahon stands here, lost in thought. Seeing you, he bellows, "YES SIR!"';
message[197] = '...thingy???';
message[198] = 'It\'s 1000 secrets the government doesn\'t want you to know!';
message[199] = 'The letters O and R.';
message[200] = 'A magical... magic thing.';

var symbol = new Array(88);
symbol[0] = '0';
symbol[1] = '1';
symbol[2] = '2';
symbol[3] = '3';
symbol[4] = '4';
symbol[5] = '5';
symbol[6] = '6';
symbol[7] = '7';
symbol[8] = '8';
symbol[9] = '9';
symbol[10] = ',';
symbol[11] = 'a';
symbol[12] = 'b';
symbol[13] = 'c';
symbol[14] = 'd';
symbol[15] = 'e';
symbol[16] = 'f';
symbol[17] = 'g';
symbol[18] = 'h';
symbol[19] = 'i';
symbol[20] = 'j';
symbol[21] = 'k';
symbol[22] = 'l';
symbol[23] = 'm';
symbol[24] = 'n';
symbol[25] = 'o';
symbol[26] = 'p';
symbol[27] = 'q';
symbol[28] = 'r';
symbol[29] = 's';
symbol[30] = 't';
symbol[31] = 'u';
symbol[32] = 'v';
symbol[33] = 'w';
symbol[34] = 'x';
symbol[35] = 'y';
symbol[36] = 'z';
symbol[37] = 'A';
symbol[38] = 'B';
symbol[39] = 'C';
symbol[40] = 'D';
symbol[41] = 'E';
symbol[42] = 'F';
symbol[43] = 'G';
symbol[44] = 'H';
symbol[45] = 'I';
symbol[46] = 'J';
symbol[47] = 'K';
symbol[48] = 'L';
symbol[49] = 'M';
symbol[50] = 'N';
symbol[51] = 'O';
symbol[52] = '<';
symbol[53] = 'P';
symbol[54] = 'Q';
symbol[55] = 'R';
symbol[56] = 'S';
symbol[57] = 'T';
symbol[58] = 'U';
symbol[59] = 'V';
symbol[60] = 'W';
symbol[61] = 'X';
symbol[62] = 'Y';
symbol[63] = 'Z';
symbol[64] = '!';
symbol[65] = '£';
symbol[66] = '$';
symbol[67] = '|';
symbol[68] = '%';
symbol[69] = '^';
symbol[70] = '&';
symbol[71] = '*';
symbol[72] = '(';
symbol[73] = ')';
symbol[74] = '-';
symbol[75] = '+';
symbol[76] = '=';
symbol[77] = '[';
symbol[78] = ']';
symbol[79] = '{';
symbol[80] = '}';
symbol[81] = '~';
symbol[82] = '@';
symbol[83] = '.';
symbol[84] = ':';
symbol[85] = '?';
symbol[86] = '/';
symbol[87] = '>';

function drawboard() {
    //write the cells
    for (i = 0; i < rownum; i++) {
        document.write('<div id="row' + i + '">');
        for (j = 0; j < colnum; j++) {
            document.write('<input type="text" readonly="readonly" id="r' + i + 'c' + j + '" />');
        }
        document.write('</div>');
    }
}

function hiddenfields() {
    //make sure we can store info
    for (i = 0; i < itemnum; i++) {
        document.write('<input type="hidden" id="item' + i + 'r" />');
        document.write('<input type="hidden" id="item' + i + 'c" />');
        document.write('<input type="hidden" id="item' + i + 'm" />');
    }
}

function pickmessage() {
    //make sure no message is used more than once
    var mess = Math.round(Math.random() * (message.length - 1));
    for (a = 1; a < i; a++) {
        if (document.getElementById('item' + a + 'm').value == mess) {
            pickmessage();
        }
    }
    return mess;
}

function additem(type) {
    //pick a symbol for the object
    var itemsym = symbol[Math.round(Math.random() * (symbol.length - 1))];
    if (type == 'robot') {
        itemsym = '#';
    }

    //where to put it
    row = Math.round(Math.random() * (rownum - 1));
    col = Math.round(Math.random() * (colnum - 1));

    if (document.getElementById('r' + row + 'c' + col).value == '') {
        document.getElementById('r' + row + 'c' + col).value = itemsym;
    } else {
        additem(type);
    }

    //add the relevant information for each item
    if (type == 'robot') {
        document.getElementById('robotr').value = row;
        document.getElementById('robotc').value = col;
    }
    if (i == 0) {
        document.getElementById('item0r').value = row;
        document.getElementById('item0c').value = col;
        document.getElementById('item0m').value = 'k';
        document.getElementById('r' + row + 'c' + col).style.color = colors[Math.round(Math.random() * (colors.length - 1))];
        document.getElementById('kittens').value = itemsym;
    }
    if ((i != 0) && !(type == 'robot')) {
        document.getElementById('item' + i + 'r').value = row;
        document.getElementById('item' + i + 'c').value = col;
        document.getElementById('item' + i + 'm').value = pickmessage();
        document.getElementById('r' + row + 'c' + col).style.color = colors[Math.round(Math.random() * (colors.length - 1))];
    }
}

function move(direction) {
    //get robot's location
    var row = parseInt(document.getElementById('robotr').value);
    var col = parseInt(document.getElementById('robotc').value);

    //where are we going?
    if (direction == 'up') {
        var rchange = row - 1;
        var cchange = col;
    }
    if (direction == 'left') {
        var rchange = row;
        var cchange = col - 1;
    }
    if (direction == 'down') {
        var rchange = row + 1;
        var cchange = col;
    }
    if (direction == 'right') {
        var rchange = row;
        var cchange = col + 1;
    }

    //move robot into empty squares
    if (document.getElementById('r' + rchange + 'c' + cchange).value == '') {
        document.getElementById('robotr').value = rchange;
        document.getElementById('robotc').value = cchange;
        document.getElementById('r' + rchange + 'c' + cchange).value = '#';
        document.getElementById('r' + row + 'c' + col).value = '';

//*****************************************************************************
//function:                     window.stepTracker
//purpose: keeps track of how many steps taken window.stepTracker is null the
//         first time we move window.stepTracker and 0 is the operand while ??
//         is the operator, which produces the input.

        window.stepTracker = (window.stepTracker ?? 0) + 1;
        console.log(window.stepTracker);
    } else {
        //write messages for squares with items
        for (a = 0; a < itemnum; a++) {
            if ((rchange == document.getElementById('item' + a + 'r').value) && (cchange == document.getElementById('item' + a + 'c').value)) {
                var thisitem = a;
            }
        }

// win condition
        if (document.getElementById('item' + thisitem + 'm').value != 'k') {
            document.getElementById('stat').value = message[document.getElementById('item' + thisitem + 'm').value];
        } else {
            //way to go robot!


            document.getElementById('up').disabled = true;
            document.getElementById('left').disabled = true;
            document.getElementById('right').disabled = true;
            document.getElementById('down').disabled = true;
            document.getElementById('stat').value = '#      ' + document.getElementById('kittens').value;
            setTimeout("document.getElementById('stat').value = ' #    ' + document.getElementById('kittens').value", 1000);
            setTimeout("document.getElementById('stat').value = '  #  ' + document.getElementById('kittens').value", 2000);
            setTimeout("document.getElementById('stat').value = '   #' + document.getElementById('kittens').value + waytogo + newgame", 3000);

//*****************************************************************************
//function:                     setTimeout
//purpose: runs the supplied code after 4000 milliseconds (adding delay)
            setTimeout(async () => {
                const initials = prompt("Congratulations! You win! What are your initials?");
                const highscores = await (await fetch('/api/register_highscore', {
                    body: JSON.stringify({
                        score: window.stepTracker,
                        initials: initials
                    }),
                    method: "POST",
                    headers: { "Content-Type": "application/json" }
                })).json();
                console.log(highscores);

//table for high score
                const table = $('<table style="position: absolute">');

                table.append($('<tr><th>Rank</th><th>Score</th><th>Name</th></tr>'));

//switch high score to the object entry structure
                const sortedScores = Object.entries(highscores)

//map converts to object entry structure to { score, initials }
                    .map(a => ({ score: a[1], initials: a[0] }))

//sorts are objects according to the score property (least to most)
                    .sort((a1, a2) => a1.score > a2.score ? 1 : -1)

//add rank property to existing object
                    .map((s, i) => ({...s, rank: i + 1}));

                console.log(sortedScores);

                for (let entry of sortedScores) {
                    table.append(`<tr><td>${entry.rank}</td><td>${entry.score}</td><td>${entry.initials}</td></tr>`)
                }

                $('body').empty().append(table);
            }, 4000);
        }
    }
}

function startgame() {
    // clear the board to start
    document.forms.rfk.reset();
    document.forms.hidden.reset();

    //add the items
    for (i = 0; i < itemnum; i++) {
        additem();
    }

    //add robot
    additem('robot');
}
