const songList = [
    {
        artist: 'Chuck Berry',
        song: 'Johnny B. Goode', 
        lyrics: 
        `Deep down in Louisiana, close to New Orleans,
        Way back up in the woods among the evergreens,
        There stood a log cabin made of earth and wood,
        Where lived a country boy named Johnny B. Goode,
        Who never ever learned to read or write so well,
        But he could play the guitar just a-ringin' a bell,`
      },
      {
        artist: 'Spice Girls',
        song: 'Wannabe',
        lyrics: `Yo I'll tell you what I want,
                what I really really want,
                So tell me what you want,
                what you really really want,
                I'll tell you what I want, 
                what I really really want,`
      },
      {
        artist: 'Queen',
        song: 'We Will Rock You',
        lyrics: `Buddy you're a boy make a big noise,
        Playing in the street,
        gonna be a big man someday,
        You got mud on your face,
        you big disgrace,
        Kicking your can all over the place singin',`
      },
      {
        artist: 'Taylor Swift',
        song: 'Shake it off',
        lyrics: `I stay out too late,
        Got nothing in my brain,
        That's what people say mm-mm,
        That's what people say mm-mm,
        I go on too many dates,
        But I can't make 'em stay,`
      },
      {
        artist: 'Carly Rae Jepsen',
        song: 'Call Me Maybe',
        lyrics: `I threw a wish in the well,
        Don't ask me I'll never tell,
        I looked to you as it fell,
        And now you're in my way,
        I trade my soul for a wish,
        Pennies and dimes for a kiss,`
      },
      {
        artist: 'Vannila Ice',
        song: `Rollin' in my 5.0`,
        lyrics: `Turn up the volume,
                crank up the bass,
                Aww yeah Vanilla Ice is in the place,
                I'm here to tell ya a little story 'bout my 5.0,
                Just a-lettin' ya know I'm in total control,
                Oh yes many people know that I got good taste,`
      },
      {
        artist: 'Backstreet Boys',
        song: 'I Want it That Way',
        lyrics: `Yeah-eh-heah,
                You are my fire,
                The one desire,
                Believe when I say,
                I want it that way,
                But we are two worlds apart,`
      },
      {
        artist: 'Scissor Sisters',
        song: 'Take Your Mama',
        lyrics: `When you grow up,
                 livin' like a good boy oughta,
                And your mama takes a shine to her best son,
                Something different,
                all the girls they seem to like you,
                Cause you're handsome,`
      },
      {
        artist: 'Johnny Cash',
        song: 'Ring of Fire',
        lyrics: `Love is a burnin' thing,
                  And it makes a fiery ring,
                  Bound by wild desire,
                  I fell into a ring of fire,
                  I fell into a burnin' ring of fire,
                  I went down down down,`
      },
      {
        artist: 'David Bowie',
        song: 'Rebel Rebel',
        lyrics: `Doo doo doo-doo doo doo doo doo,
                  Doo doo doo-doo doo doo doo doo,
                  Doo doo doo-doo doo doo doo doo,
                  You've got your mother in a whirl,
                  She's not sure if you're a boy or a girl,
                  Hey babe your hair's alright,`
      },
      {
        artist: 'Twister Sister',
        song: `We're Not Gonna Take It`,
        lyrics: `Oh we're not gonna take it,
                  No, we ain't gonna take it,
                  Oh we're not gonna take it anymore,
                  We've got the right to choose it,
                  There ain't no way we'll lost it,
                  This is our life this is our song,`
      },
      {
        artist: 'Olivia Rodrigo',
        song: 'Drivers Licence',
        lyrics: `I got my driver's license last week,
                  Just like we always talked about,
                  'Cause you were so excited for me,
                  To finally drive up to your house,
                  But today I drove through the suburbs,
                  Crying 'cause you weren't around,
        `
      },
      {
        artist: 'The Doors',
        song: 'Light My Fire',
        lyrics: `You know that it would be untrue,
                  You know that I would be a liar,
                  If I was to say to you,
                  Girl we couldn't get much higher,
                  Come on baby, light my fire,
                  Come on baby, light my fire,`
      },
      {
        artist: 'Eminem ft Beyonce',
        song: 'Walk on Water',
        lyrics: `I walk on water,
                  But I ain't no Jesus,
                  I walk on water,
                  But only when it freezes,
                  Why are expectations so high?,
                  Is it the bar I set?,`
      },
      {
        artist: 'Lewis Capaldi',
        song: 'Someone you Loved',
        lyrics: `I'm going under and this time I fear there's no one to save me,
                  This all or nothing really got a way of driving me crazy,
                  I need somebody to heal,
                  Somebody to know,
                  Somebody to have,
                  Somebody to hold,`
      },
      {
        artist: 'The Libertines',
        song: `Can't Stand me now`,
        lyrics: `An ending fitting for the start,
                  You twist and tore our love apart, 
                  Your light fingers threw the dark,
                  That shattered the lamp and into darkness it cast us,  
                  No, you've got it the wrong way round,
                  You shut me up, and blamed it on the brown,`
      },
      {
        artist: 'Arctic Monkeys',
        song: 'Do I Wanna Know?',
        lyrics: `Have you got color in your cheeks,
                  Do you ever get the feeling that you can't shift the tide,
                  That sticks around like something's in your teeth,
                  And some aces up your sleeve,
                  I had no idea that you're in deep,
                  I dreamt about you near me every night this week,`
      },
      {
        artist: 'Bonnie Tyler',
        song: 'Holding Out for a Hero',
        lyrics: `Where have all the good men gone,
                  And where are all the gods?,
                  Where's the streetwise Hercules to fight the rising odds?,
                  Isn't there a white knight upon a fiery steed?,
                  Late at night I toss and I turn,
                  And I dream of what I need,`
      },
      {
        artist: 'Tina Turner',
        song: `We Don't Need Another Hero`,
        lyrics: `Out of the ruins,
                  Out from the wreckage, 
                  Can't make the same mistake this time, 
                  We are the children,
                  The last generation, 
                  We are the ones they left behind,`
      },
      {
        artist: 'Elton John',
        song: `Rocket Man`,
        lyrics: `She packed my bags last night pre-flight,
                  Zero hour nine AM,
                  And I'm gonna be high as a kite by then,
                  I miss the earth so much I miss my wife,
                  It's lonely out in space,
                  On such a timeless flight,`
      },
      {
        artist: 'Billy Joel',
        song: `Always a Woman`,
        lyrics: `She can kill with a smile,
                  she can wound with her eyes,
                  She can ruin your faith with her casual lies,
                  And she only reveals what she wants you to see,
                  She hides like a child,
                  but she's always a woman to me,`
      },
      {
        artist: 'Prince',
        song: `Little Red Corvette`,
        lyrics: `I guess I should of known,
                  By the way you parked your car sideways,
                  That it wouldn't last,
                  See you're the kinda person,
                  That believes in makin' out once,
                  Love 'em and leave 'em fast,`
      },
      {
        artist: 'The Monkees',
        song: `Daydream Believer`,
        lyrics: `Oh I could hide 'neath the wings,
                  Of the bluebird as she sings,
                  The six-o'clock alarm would never ring,
                  But six rings and I rise,
                  Wipe the sleep out of my eyes,
                  The shaving razor's cold and it stings,`
      },
      {
        artist: 'The Streets',
        song: `Dry Your Eyes`,
        lyrics: `And I'm just standin' there,
                    I can't say a word,
                    'Cause everything's just gone,
                    I've got nothin' absolutely nothin',
                    In one single moment your whole life can turn 'round,
                    I stand there for a minute starin' straight into the ground,`
      },
      {
        artist: 'Kate Bush',
        song: `Wuthering Heights`,
        lyrics: `Out on the wiley windy moors,
                  We'd roll and fall in green,
                  You had a temper like my jealousy,
                  Too hot too greedy,
                  How could you leave me,
                  When I needed to possess you?,`
      },
      {
        artist: 'Muse',
        song: `Supermassive Black Hole`,
        lyrics: `Oh baby don't you know I suffer?,
                  Oh baby can you hear me moan?,
                  You caught me under false pretenses,
                  How long before you let me go?,
                  Ooh you set my soul alight,
                  Ooh you set my soul alight,`
      },
      {
        artist: 'Mark Morrison',
        song: `Return of the Mack`,
        lyrics: `Oooooh…,
                  Come on,
                  Ooh yeah,
                  Well I tried to tell you so,
                  (Yes I did),
                  But I guess you didn't know,`
      },
      {
        artist: 'Sia',
        song: `Chandelier`,
        lyrics: `Party girls don't get hurt,
                  Can't feel anything,
                  when will I learn,
                  I push it down,
                  push it down,
                  I'm the one "for a good time call"`
      },
      {
        artist: 'Black Sabbath',
        song: `War Pigs`,
        lyrics: `Generals gathered in their masses,
                  Just like witches at black masses,
                  Evil minds that plot destruction,
                  Sorcerer of death's construction,
                  In the fields the bodies burning,
                  As the war machine keeps turning,`
      },
      {
        artist: 'Rage Against The Machine',
        song: `Sleep Now in the Fire`,
        lyrics: `The world is my expense,
                  The cost of my desire,
                  Jesus blessed me with its future,
                  And I protect it with fire,
                  So raise your fists,
                  And march around,`
      },
      {
        artist: 'Ariana Grande',
        song: `7 Rings`,
        lyrics: `Yeah breakfast at Tiffany's and bottles of bubbles,
                  Girls with tattoos who like getting in trouble,
                  Lashes and diamonds ATM machines,
                  Buy myself all of my favorite things (Yeah),
                  Been through some bad shit I should be a sad bitch,
                  Who woulda thought it'd turn me to a savage?,`
      },
      {
        artist: 'Joe Walsh',
        song: `Rocky Mountain Way`,
        lyrics: `Spent the last year,
                  Rocky Mountain Way,
                  Couldn't get much higher,
                  Out to pasture,
                  Think it's safe to say,
                  Time to open fire,`
      },
      {
        artist: 'Rainbow',
        song: `Since You've Been Gone`,
        lyrics: `I get the same old dream,
                    same time every night,
                    Fall to the ground and I wake up,
                    So I get out of bed put on my shoes and in my head,
                    Thoughts fly back to the break-up,
                    These four walls are closing in,`
      },
      {
        artist: 'Alice Cooper',
        song: `Poison`,
        lyrics: `Your cruel device,
                    Your blood like ice,
                    One look could kill,
                    My pain your thrill,
                    I wanna love you but I better not touch (don't touch),
                    I wanna hold you but my senses tell me to stop,`
      },
      {
        artist: 'ABBA',
        song: `S.O.S`,
        lyrics: `Where are those happy days,
                  they seem so hard to find,
                  I tried to reach for you,
                  but you have closed your mind,
                  Whatever happened to our love?,
                  I wish I understood,`
      },
      {
        artist: 'Michael Jackson',
        song: `Billie Jean`,
        lyrics: `She was more like a beauty queen from a movie scene,
                  I said don't mind but what do you mean I am the one,
                  Who will dance on the floor in the round,
                  She said I am the one who will dance on the floor in the round,
                  She told me her name was Billie Jean as she caused a scene,
                  Then every head turned with eyes that dreamed of being the one,`
      },
      {
        artist: 'Aretha Franklin',
        song: `Respect`,
        lyrics: `What you want,
                  Baby I got it,
                  What you need,
                  Do you know I got it,
                  All I'm askin',
                  Is for a little respect when you get home (just a little bit),`
      },
      {
        artist: 'Dusty Springfield',
        song: `Son of a Preacher Man`,
        lyrics: `Today I went out on a movie call,
                  I saw a million nervous faces,
                  I knew them all,
                  Hollywood movie girls,
                  We're all wearing our one good interview dress,
                  The one showin' our legs,`
      },
    ]

    export default songList