const planet = document.getElementById("HO1");
const report = document.getElementById("Traits");
const Sunln = document.getElementById("Sunnum");
const Moonln = document.getElementById("Moonnum");
const Mercuryln = document.getElementById("Mercurynum");
const Venusln = document.getElementById("Venusnum");
const Marsln = document.getElementById("Marsnum");
const Jupiterln = document.getElementById("Jupiternum");
const Saturnln = document.getElementById("Saturnnum");
const Rahuln = document.getElementById("Rahunum");
const Ketuln = document.getElementById("Ketunum");
const lagnan = document.getElementById("lagnanpa");
const yog = document.getElementById("yog");
const result = document.getElementById("Report");
function func1()
{
    
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=-150; 
        document.getElementById("Sunimage").style.left=0;
        report.innerText = report.innerText + "Dynamic and Leading Personality."
        Sunln.innerText = 1
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=-150;  
        document.getElementById("Venusimage").style.left=0;
        report.innerText = report.innerText + "Loving and joyfull nature, Materialistic, Art lover."
        Venusln.innerText = 1
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=-150;  
        document.getElementById("Mercuryimage").style.left=0;
        report.innerText = report.innerText + "expressive, knowledgeable, Expert Communicator."
        Mercuryln.innerText = 1
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=-150;  
        document.getElementById("Marsimage").style.left=0;
        report.innerText = report.innerText + "Energetic, Naturally Aggressive,Passionate."
        Marsln.innerText = 1
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=-150;  
        document.getElementById("Jupiterimage").style.left=0;
        report.innerText = report.innerText + "Wisdom, Guide, Knowledgable, Truth speaking, Dharmic."
        Jupiterln.innerText = 1
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=-150;  
        document.getElementById("Saturnimage").style.left=0;
        report.innerText = report.innerText + "Disciplined, Hardworking, Serious, lawabider."
        Saturnln.innerText = 1
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=-150;  
        document.getElementById("Moonimage").style.left=0;
        report.innerText = report.innerText + "Emotional, Caring, Nurturing ability."
        Moonln.innerText = 1
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=-150;  
        document.getElementById("Rahuimage").style.left=0;
        report.innerText = report.innerText + "Illusionary, Tricky, Cunning and Decietfull."
        Rahuln.innerText = 1
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=-150;  
        document.getElementById("Ketuimage").style.left=0;
        report.innerText = report.innerText + "Spiritual, Abstainer, Weirdo, Detached."
        Ketuln.innerText = 1
    }


}
function func2()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=-200; 
        document.getElementById("Sunimage").style.left=-125;
        report.innerText = report.innerText + "Respected family ,Righteous Wealth."
        Sunln.innerText = 2
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=-200;  
        document.getElementById("Venusimage").style.left=-125;
        report.innerText = report.innerText + "Several Buisness ,Comfortable enviorment ,Loves Luxurious lifestyle."
        Venusln.innerText = 2
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=-200;  
        document.getElementById("Mercuryimage").style.left=-125;
        report.innerText = report.innerText + "Finance and Banking industry can be a good source of income."
        Mercuryln.innerText = 2
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=-200;  
        document.getElementById("Marsimage").style.left=-125;
        report.innerText = report.innerText + "Hardwork and income through Service sectors are benificial."
        Marsln.innerText = 2
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=-200;  
        document.getElementById("Jupiterimage").style.left=-125;
        report.innerText = report.innerText + "Wealthy and Learned family Good Buisness and oppurtunity will come easily."
        Jupiterln.innerText = 2
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=-200;  
        document.getElementById("Saturnimage").style.left=-125;
        report.innerText = report.innerText + "Organisation and Labour work are good method to earn wealth."
        Saturnln.innerText = 2
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=-200;  
        document.getElementById("Moonimage").style.left=-125;
        report.innerText = report.innerText + "Nurturing family ,Mother has significant role for you in gaining wealth."
        Moonln.innerText = 2
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=-200;  
        document.getElementById("Rahuimage").style.left=-125;
        report.innerText = report.innerText + "Technical ,Smart ,Scamartist ,Unexpected gains."
        Rahuln.innerText = 2
        
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=-200;  
        document.getElementById("Ketuimage").style.left=-125;
        report.innerText = report.innerText + "Gains from Hidden sources ,Look out for Buried Treasures ;)."
        Ketuln.innerText = 2
    }
}

function func3()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=-125; 
        document.getElementById("Sunimage").style.left=-200;
        report.innerText = report.innerText + "Very Authorative communication skills ,Courageous ,Powerfull commandment."
        Sunln.innerText = 3
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=-125;  
        document.getElementById("Venusimage").style.left=-200;
        report.innerText = report.innerText + "Sweet Speaker,Flirty ,Romance artist."
        Venusln.innerText = 3
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=-125;  
        document.getElementById("Mercuryimage").style.left=-200;
        report.innerText = report.innerText + "Expert Communicator ,Power in Speech."
        Mercuryln.innerText = 3

    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=-125;  
        document.getElementById("Marsimage").style.left=-200;
        report.innerText = report.innerText + "Courageous speaker,Commanding ,Energetic Speech,brave."
        Marsln.innerText = 3
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=-125;  
        document.getElementById("Jupiterimage").style.left=-200;
        report.innerText = report.innerText + "Imparts Wisdom ,Emersive Speech ,Philosphical Speaker."
        Jupiterln.innerText = 3
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=-125;  
        document.getElementById("Saturnimage").style.left=-200;
        report.innerText = report.innerText + "Serious Tone ,Thinks much before speaking ,Lawyers Speech."
        Saturnln.innerText = 3
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=-125;  
        document.getElementById("Moonimage").style.left=-200;
        report.innerText = report.innerText + "Emotional Tone ,Caring & Nurturing Speech."
        Moonln.innerText = 3
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=-125;  
        document.getElementById("Rahuimage").style.left=-200;
        report.innerText = report.innerText + "Cunning Speaker ,Scam Artist."
        Rahuln.innerText = 3
       
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=-125;  
        document.getElementById("Ketuimage").style.left=-200;
        report.innerText = report.innerText + "Hindered Speech , Highly Spirtual Speaker."
        Ketuln.innerText = 3
    }
}
function func4()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=0; 
        document.getElementById("Sunimage").style.left=-125;
        report.innerText = report.innerText + "Authorative and Loving Mother ,Goverment Jobs as public servant ,Royal House ."
        Sunln.innerText = 4
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=0;  
        document.getElementById("Venusimage").style.left=-125;
        report.innerText = report.innerText + "Beautifull and Luxurious House ,Loving Mother ,Creative Home."
        Venusln.innerText = 4
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=0;  
        document.getElementById("Mercuryimage").style.left=-125;
        report.innerText = report.innerText + "Intelligent Mother,Buisness from Home."
        Mercuryln.innerText = 4
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=0;  
        document.getElementById("Marsimage").style.left=-125;
        report.innerText = report.innerText + "Commanding Mother, True Soldier ,Real estate Buisness."
        Marsln.innerText = 4
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=0;  
        document.getElementById("Jupiterimage").style.left=-125;
        report.innerText = report.innerText + "Mother is guru in your life ,Spirtuality and wisdom , Wealthy Family."
        Jupiterln.innerText = 4
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=0;  
        document.getElementById("Saturnimage").style.left=-125;
        report.innerText = report.innerText + "Restricting and Discipline Mother ,Entangled at home."
        Saturnln.innerText = 4
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=0;  
        document.getElementById("Moonimage").style.left=-125;
        report.innerText = report.innerText + "Emotional ,Caring and Nurturing Mother, Comfortable Home."
        Moonln.innerText = 4
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=0;  
        document.getElementById("Rahuimage").style.left=-125;
        report.innerText = report.innerText + "Dynamic, Foriegn, Untraditional Mother ,Foreign Settlement."
        Rahuln.innerText = 4
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=0;  
        document.getElementById("Ketuimage").style.left=-125;
        report.innerText = report.innerText + "Spirtual and Kindhearted Mother,Foreign/Spiritual Home,Dettached from Home Enviorment."
        Ketuln.innerText = 4
    }
}
function func5()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=125; 
        document.getElementById("Sunimage").style.left=-200;
        report.innerText = report.innerText + "Athletic ,Performing artist."
        Sunln.innerText = 5
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=125;  
        document.getElementById("Venusimage").style.left=-200;
        report.innerText = report.innerText + "Creative ,Loves kids ,Attractive ,Entertaining."
        Venusln.innerText = 5
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=125;  
        document.getElementById("Mercuryimage").style.left=-200;
        report.innerText = report.innerText + "Romance usually need some mental pursuit ,Loves conversation in relations ."
        Mercuryln.innerText = 5

    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=125;  
        document.getElementById("Marsimage").style.left=-200;
        report.innerText = report.innerText + "Prone to Desires,Impatience,Sometime be harsh with kids."
        Marsln.innerText = 5
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=125;  
        document.getElementById("Jupiterimage").style.left=-200;
        report.innerText = report.innerText + "Speculations ,Wealth through creative self expression ."
        Jupiterln.innerText = 5
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=125;  
        document.getElementById("Saturnimage").style.left=-200;
        report.innerText = report.innerText + "Restricting to creative self expression ,Romance has deeper meaning and reason for you."
        Saturnln.innerText = 5
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=125;  
        document.getElementById("Moonimage").style.left=-200;
        report.innerText = report.innerText + "Emotional to kids ,Nurturing and caring touch to romance."
        Moonln.innerText = 5
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=125;  
        document.getElementById("Rahuimage").style.left=-200;
        report.innerText = report.innerText + "Prone to Gambling ,Speculative buisness ,Technological Arts."
        Rahuln.innerText = 5
        
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=125;  
        document.getElementById("Ketuimage").style.left=-200;
        report.innerText = report.innerText + "Excessive Emotional ,Secluded from friends ,Tension in relations ."
        Ketuln.innerText = 5
    }
}

function func6()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=200; 
        document.getElementById("Sunimage").style.left=-125;
        report.innerText = report.innerText + "Very Cautious about health ,Bossy for employees."
        Sunln.innerText = 6
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=200;  
        document.getElementById("Venusimage").style.left=-125;
        report.innerText = report.innerText + "Service to partner ,Can settle conflicts with harmony ,Perfectionist."
        Venusln.innerText = 6 
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=200;  
        document.getElementById("Mercuryimage").style.left=-125;
        report.innerText = report.innerText + "Very Entertaining ,Spoken ,Impersonification ,Artistic conversational skill."
        Mercuryln.innerText = 6
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=200;  
        document.getElementById("Marsimage").style.left=-125;
        report.innerText = report.innerText + "Hardworking ,Terrorise their Enemies ,Excellent Warrior capabilities ,Sportsman."
        Marsln.innerText = 6
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=200;  
        document.getElementById("Jupiterimage").style.left=-125;
        report.innerText = report.innerText + "Uses their wisdom to handle competetion , Watchout for enemies."
        Jupiterln.innerText = 6
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=200;  
        document.getElementById("Saturnimage").style.left=-125;
        report.innerText = report.innerText + "Workaholic ,Determination and Hardwork keys you to gain victory."
        Saturnln.innerText = 6
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=200;  
        document.getElementById("Moonimage").style.left=-125;
        report.innerText = report.innerText + "Unknown fear of getting in conflicts ,Minor Health problems."
        Moonln.innerText = 6
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=200;  
        document.getElementById("Rahuimage").style.left=-125;
        report.innerText = report.innerText + "Can Resolve conflict very effectively ,Disruptive behaviour."
        Rahuln.innerText = 6
       
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=200;  
        document.getElementById("Ketuimage").style.left=-125;
        report.innerText = report.innerText + "Lookout for ailments or diseases ,Medical issues ,Injuries ,They know mystery of nature and know secrets of world."
        Ketuln.innerText = 6
    }
}
function func7()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=125; 
        document.getElementById("Sunimage").style.left=0;
        report.innerText = report.innerText + "Authorative spouse ,Robust & Sometimes Arrogant nature of spouse ,Father will somewhat determine the marriage."
        Sunln.innerText = 7
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=125;  
        document.getElementById("Venusimage").style.left=0;
        report.innerText = report.innerText + "Loving Spouse ,Partner can have good amount of artistic talent ,Obeying wife."
        Venusln.innerText = 7
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=125;  
        document.getElementById("Mercuryimage").style.left=0;
        report.innerText = report.innerText + "Good for buisness in partnership ,Intellectual Spouse ,Diplomatic ability are good."
        Mercuryln.innerText = 7
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=125;  
        document.getElementById("Marsimage").style.left=0;
        report.innerText = report.innerText + "Very commanding Spouse ,Duty and Bravery are key points in your partner."
        Marsln.innerText = 7
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=125;  
        document.getElementById("Jupiterimage").style.left=0;
        report.innerText = report.innerText + "Knowlegeable spouse ,Life partner could be professor /Teacher /Spiritual related."
        Jupiterln.innerText = 7
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=125;  
        document.getElementById("Saturnimage").style.left=0;
        report.innerText = report.innerText + "Hardworking ,Disciplined Spouse ,Good for partnership buisness."
        Saturnln.innerText = 7
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=125;  
        document.getElementById("Moonimage").style.left=0;
        report.innerText = report.innerText + "Emotional /Caring /Nurturing wife ,Decison to marry someone will be based on mother."
        Moonln.innerText = 7
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=125;  
        document.getElementById("Rahuimage").style.left=0;
        report.innerText = report.innerText + "Person might get into quarrel or immoral relations ,Spouse will supposively be either from foreign land or other culture."
        Rahuln.innerText = 7
        
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=125;  
        document.getElementById("Ketuimage").style.left=0;
        report.innerText = report.innerText + "Detached from Marriage ,Relations with your partner will be secretive ."
        Ketuln.innerText = 7
    }
}
function func8()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=200; 
        document.getElementById("Sunimage").style.left=125;
        report.innerText = report.innerText + "Long life ,Father might suffered sudden events ,Research related field ."
        Sunln.innerText = 8
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=200;  
        document.getElementById("Venusimage").style.left=125;
        report.innerText = report.innerText + " Interested in mystic and occult world,person might make immoral acts"
        Venusln.innerText = 8
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=200;  
        document.getElementById("Mercuryimage").style.left=125;
        report.innerText = report.innerText + "Looking for hidden knowledge ,Can be interested in creating buisness related to occult world or mysticism."
        Mercuryln.innerText = 8
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=200;  
        document.getElementById("Marsimage").style.left=125;
        report.innerText = report.innerText + "Good Engineer ,Secret Developement ,Might get into accidents."
        Marsln.innerText = 8
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=200;  
        document.getElementById("Jupiterimage").style.left=125;
        report.innerText = report.innerText + "Interest in occult science ,Astrology ,Spirituality ,Hidden knowledge."
        Jupiterln.innerText = 8
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=200;  
        document.getElementById("Saturnimage").style.left=125;
        report.innerText = report.innerText + "Hardworking."
        Saturnln.innerText = 8
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=200;  
        document.getElementById("Moonimage").style.left=125;
        report.innerText = report.innerText + "Mother can face sudden changes ,Mind thinking about near death experiences."
        Moonln.innerText = 8
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=200;  
        document.getElementById("Rahuimage").style.left=125;
        report.innerText = report.innerText + "Can gain a lot of sudden changes in their life ,Various life changing incident are prone."
        Rahuln.innerText = 8
        
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=200;  
        document.getElementById("Ketuimage").style.left=125;
        report.innerText = report.innerText + "May engage in Spiritual practice."
        Ketuln.innerText = 8
    }
}
function func9()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=125; 
        document.getElementById("Sunimage").style.left=200;
        report.innerText = report.innerText + "Father has lot of influence on you,You respect your Culture and Abides by Duty."
        Sunln.innerText = 9
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=125;  
        document.getElementById("Venusimage").style.left=200;
        report.innerText = report.innerText + "Arts related to Religion and can be a good publisher."
        Venusln.innerText = 9
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=125;  
        document.getElementById("Mercuryimage").style.left=200;
        report.innerText = report.innerText + "Sheer amount of knowledge about scriptures and learned higher knowledge like phd,Master's Degree and spirituality."
        Mercuryln.innerText = 9
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=125;  
        document.getElementById("Marsimage").style.left=200;
        report.innerText = report.innerText + "Excellent warrior nature for the Duty and Religion."
        Marsln.innerText = 9
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=125;  
        document.getElementById("Jupiterimage").style.left=200;
        report.innerText = report.innerText + "Higher Knowledge in spirituality and phd and master degree."
        Jupiterln.innerText = 9
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=125;  
        document.getElementById("Saturnimage").style.left=200;
        report.innerText = report.innerText + "."
        Saturnln.innerText = 9
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=125;  
        document.getElementById("Moonimage").style.left=200;
        report.innerText = report.innerText + "."
        Moonln.innerText = 9
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=125;  
        document.getElementById("Rahuimage").style.left=200;
        report.innerText = report.innerText + "."
        Rahuln.innerText = 9
        
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=125;  
        document.getElementById("Ketuimage").style.left=200;
        report.innerText = report.innerText + "."
        Ketuln.innerText = 9
    }
}
function func10()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=0; 
        document.getElementById("Sunimage").style.left=125;
        report.innerText = report.innerText + "."
        Sunln.innerText = 10
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=0;  
        document.getElementById("Venusimage").style.left=125;
        report.innerText = report.innerText + "."
        Venusln.innerText=10
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=0;  
        document.getElementById("Mercuryimage").style.left=125;
        report.innerText = report.innerText + "."
        Mercuryln.innerText= 10
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=0;  
        document.getElementById("Marsimage").style.left=125;
        report.innerText = report.innerText + "."
        Marsln.innerText = 10
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=0;  
        document.getElementById("Jupiterimage").style.left=125;
        report.innerText = report.innerText + "."
        Jupiterln.innerText = 10
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=0;  
        document.getElementById("Saturnimage").style.left=125;
        report.innerText = report.innerText + "."
        Saturnln.innerText = 10
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=0;  
        document.getElementById("Moonimage").style.left=125;
        report.innerText = report.innerText + "."
        Moonln.innerText = 10
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=0;  
        document.getElementById("Rahuimage").style.left=125;
        report.innerText = report.innerText + "."
        Rahuln.innerText = 10
       
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=0;  
        document.getElementById("Ketuimage").style.left=125;
        report.innerText = report.innerText + "."
        Ketuln.innerText = 10
    }
}
function func11()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=-125; 
        document.getElementById("Sunimage").style.left=200;
        report.innerText = report.innerText + "."
        Sunln.innerText = 11
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=-125;  
        document.getElementById("Venusimage").style.left=200;
        report.innerText = report.innerText + "."
        Venusln.innerText = 11
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=-125;  
        document.getElementById("Mercuryimage").style.left=200;
        report.innerText = report.innerText + "."
        Mercuryln.innerText = 11

    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=-125;  
        document.getElementById("Marsimage").style.left=200;
        report.innerText = report.innerText + "."
        Marsln.innerText = 11
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=-125;  
        document.getElementById("Jupiterimage").style.left=200;
        report.innerText = report.innerText + "."
        Jupiterln.innerText = 11
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=-125;  
        document.getElementById("Saturnimage").style.left=200;
        report.innerText = report.innerText + "."
        Saturnln.innerText = 11
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=-125;  
        document.getElementById("Moonimage").style.left=200;
        report.innerText = report.innerText + "."
        Moonln.innerText = 11
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=-125;  
        document.getElementById("Rahuimage").style.left=200;
        report.innerText = report.innerText + "."
        Rahuln.innerText = 11
        
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=-125;  
        document.getElementById("Ketuimage").style.left=200;
        report.innerText = report.innerText + "."
        Ketuln.innerText = 11
    }
}
function func12()
{
    if( planet.value == "Sun") 
    {
        document.getElementById("Sunimage").style.top=-200; 
        document.getElementById("Sunimage").style.left=125;
        report.innerText = report.innerText + "."
        Sunln.innerText = 12
    }
    else if(planet.value =="Venus")
    {
        document.getElementById("Venusimage").style.top=-200;  
        document.getElementById("Venusimage").style.left=125;
        report.innerText = report.innerText + "."
        Venusln.innerText = 12
    }
    else if(planet.value =="Mercury")
    {
        document.getElementById("Mercuryimage").style.top=-200;  
        document.getElementById("Mercuryimage").style.left=125;
        report.innerText = report.innerText + "."
        Mercuryln.innerText = 12
    }
    else if(planet.value =="Mars")
    {
        document.getElementById("Marsimage").style.top=-200;  
        document.getElementById("Marsimage").style.left=125;
        report.innerText = report.innerText + "."
        Marsln.innerText = 12
    }
    else if(planet.value =="Jupiter")
    {
        document.getElementById("Jupiterimage").style.top=-200;  
        document.getElementById("Jupiterimage").style.left=125;
        report.innerText = report.innerText + "Highly Spiritual,Knows secrets of world."
        Jupiterln.innerText = 12
    }
    else if(planet.value =="Saturn")
    {
        document.getElementById("Saturnimage").style.top=-200;  
        document.getElementById("Saturnimage").style.left=125;
        report.innerText = report.innerText + "."
        Saturnln.innerText = 12
    }
    else if(planet.value =="Moon")
    {
        document.getElementById("Moonimage").style.top=-200;  
        document.getElementById("Moonimage").style.left=125;
        report.innerText = report.innerText + "."
        Moonln.innerText = 12
    }
    else if(planet.value =="Rahu")
    {
        document.getElementById("Rahuimage").style.top=-200;  
        document.getElementById("Rahuimage").style.left=125;
        report.innerText = report.innerText + "."
        Rahuln.innerText = 12
        
    }
    else if(planet.value =="Ketu")
    {
        document.getElementById("Ketuimage").style.top=-200;  
        document.getElementById("Ketuimage").style.left=125;
        report.innerText = report.innerText + "."
        Ketuln.innerText = 12
    }
}

//This part is logic build


function Predict()
{
    var relatedto = "Unknown";
    var lagnalord = ""
    if(lagnan.value == "1"|| lagnan.value == "8")
    {
        lagnalord = "Mars"; 
        
    }
    else if(lagnan.value == "2"||lagnan.value =="7")
    {
        lagnalord = "Venus";  
        
    }
    else if(lagnan.value == "3"||lagnan.value =="6")
    {
        lagnalord = "Mercury";  
        
    }
    else if(lagnan.value == "4")
    {
        lagnalord = "Moon"; 
       
    }
    else if(lagnan.value == "5")
    {
        lagnalord = "Sun";  
        
    }
    else if(lagnan.value == "9"||lagnan.value =="12")
    {
        lagnalord = "Jupiter";  
        
    }
    else if(lagnan.value == "10"||lagnan.value =="11")
    {
        lagnalord = "Saturn";  
       
    }
//For Career
    if(lagnan.value == "4"|| lagnan.value == "11")
    {
        lord = "Mars"; 
        result.innerText = lord
    }
    else if(lagnan.value == "5"||lagnan.value =="10")
    {
        lord = "Venus";  
        result.innerText = lord
    }
    else if(lagnan.value == "6"||lagnan.value =="9")
    {
        lord = "Mercury";  
        result.innerText = lord
    }
    else if(lagnan.value == "7")
    {
        lord = "Moon"; 
        result.innerText = lord 
    }
    else if(lagnan.value == "8")
    {
        lord = "Sun";  
        result.innerText = lord
    }
    else if(lagnan.value == "12"||lagnan.value =="3")
    {
        lord = "Jupiter";  
        result.innerText = lord
    }
    else if(lagnan.value == "1"||lagnan.value =="2")
    {
        lord = "Saturn";  
        result.innerText = lord
    }

// This is function to get all lord position in chart
    if (true)
    {
    var nameofplanet = result.innerText;
    const idcreated = nameofplanet.concat('num') ;
    var placementplanet = document.getElementById(idcreated);
    result.innerText = placementplanet.innerText + lord
    }

// Creating positional importance or related data
    if (placementplanet.innerText == 1)
    {
        relatedto = "Self ,Personality ,Influencing"
    }
    else if (placementplanet.innerText == 2)
    {
        relatedto = "Family Buisness ,Food ,Finance"
    }
    else if (placementplanet.innerText == 3)
    {
        relatedto = "Marketing ,Enterprenur ,Sales ,Communication"
    }
    else if (placementplanet.innerText== 4)
    {
        relatedto = "Home ,Real-Estate ,Homefurnish ,Automobiles"
    }
    else if (placementplanet.innerText == 5)
    {
        relatedto ="Thrill ,Adventure ,Risk ,Education ,Stockmarket ,Engineering"
    }
    else if (placementplanet.innerText == 6)
    {
        relatedto = "Routined job ,Lawyer ,Medical ,Bank ,Socialwork ,Armed Service"
    }
    else if (placementplanet.innerText == 7)
    {
        relatedto = "Buisness ,Partnership ,Marriage ,Councils"
    }
    else if (placementplanet.innerText == 8)
    {
        relatedto =  "Research ,Investigation ,Farming ,Occult Science"
    }
    else if (placementplanet.innerText == 9)
    {
        relatedto = "Masterdegree ,Phd ,Religion ,Spirituality ,HigherLearning"
    }
    else if (placementplanet.innerText == 10)
    {
        relatedto = "Authority ,Goverment ,Father"
    }
    else if (placementplanet.innerText == 11)
    {
        relatedto= "Big Companies ,Enterprenur ,Humanity ,Huge Organisation"
    }
    else if (placementplanet.innerText == 12)
    {
        relatedto = "Foreign ,Hospital ,Prison ,Spiritual ,Ashrams"
    }
    //this part is for getting type of work field
    if (lord== "Mars")
    {
        fieldof = "Armed Services ,Mechanics ,MartialArts ,Engineering ,Real-Estate ,Land ,Physical-Land-Competetion "
    } 
    else if (lord =="Moon")
    {
        fieldof ="Doctor ,Surgeon ,Accountant ,Psycology ,Writer ,Caretaker ,Water-Milk "
    }
    else if (lord == "Mercury")
    {
        fieldof="Communications ,Sales ,Promoting ,Journalism ,press ,Negotiations ,Computer ,Buisness"
    }
    else if (lord =="Venus")
    {
        fieldof="Arts ,Creativity ,Drama ,Games ,Beauty ,Fashion ,Women-products ,Entertainment ,Finance"
    }
    else if (lord =="Jupiter")
    {
        fieldof="Teaching ,Spirituality ,Religion ,HigherLearning ,Education ,Technology ,Research"
    }
    else if (lord =="Saturn")
    {
        fieldof ="Farming ,Labour ,Hardworking ,Engineering ,Civil-work"
    }
    else if (lord =="Sun")
    {
        fieldof ="Goverment ,Adminsitration ,Law and order ,Politics"
    }
//This part is core logic building
//Checking the core aim of the person
const lagnalordplace = lagnalord.concat('num');
const lagnalordplacement = document.getElementById(lagnalordplace);
    if (lagnalordplacement.innerText == 1)
    {
     aim = "Building personality & Self"
    }
     else if (lagnalordplacement.innerText == 2)
    {
     aim = "Generating Wealth ,Looking in family"
    }
    else if (lagnalordplacement.innerText == 3)
    {
     aim = "Bravery ,Relations with Siblings ,Impacting masses"
    }
    else if (lagnalordplacement.innerText == 4)
    {
     aim = "land ,House ,Cars ,Automobiles ,Mother"
    }
    else if (lagnalordplacement.innerText == 5)
    {
     aim = "Creative self expression ,Kids ,Education"
    }
    else if (lagnalordplacement.innerText == 6)
    {
     aim = "Competetion ,Atorney ,Dealing with Enemies ,Medical"
    }
    else if (lagnalordplacement.innerText == 7)
    {
     aim = "Partner ,Buisness ,Marriage ,Love"
    }
    else if (lagnalordplacement.innerText == 8)
    {
     aim = "Investigation ,Secretplaces ,Sudden moments"
    }
    else if (lagnalordplacement.innerText == 9)
    {
     aim = "Dharma ,Righteosness ,Religion ,Philosophy ,Higherlearning"
    }
    else if (lagnalordplacement.innerText == 10)
    {
     aim = "Career ,Goverment ,Fame ,Father"
    }
    else if (lagnalordplacement.innerText == 11)
    {
     aim = "Social Circle ,Friends ,Organisations ,Gaining income "
    }
    else if (lagnalordplacement.innerText == 12)
    {
     aim = "Foreign ,Spiritual ,Another dimensions"
    }


// Rahu conditions to check for technical education

let n = parseInt(lagnan.value);
let k = n-1;
let rahupostin = parseInt(Rahuln.innerText);
let Rahupos = rahupostin + k;

if (Rahupos == 1|| Rahupos ==13) 
{
keywordrahu = "Technical interest related to mechanics or civil ,Engineering ,Mechanics ,Machine Related works ,Metallurgy ,Computer Hardware."
}
else if (Rahupos == 2 || Rahupos == 14)
{
keywordrahu="Technical interest related to creative and Program building ,AIML ,Visual Arts ,Graphics designing ,UI Developement,Game Developement."
} 
else if (Rahupos ==3|| Rahupos == 15) 
{        
keywordrahu ="Technical interest related to IT ,Fintech ,Computer Software ,Online Communication ,Website Developement."
}
else if (Rahupos ==8 || Rahupos == 20)
{
keywordrahu ="This person might get a bit difficult in purusing technical education."
}
else
{
keywordrahu = "..Normal technical knowledge"
}

//This Part Displays the Love Prediction
if(lagnan.value == "1"|| lagnan.value == "8")
    {
        partlord = "Venus"; 
    }
    else if(lagnan.value == "2"||lagnan.value =="7")
    {
        partlord = "Mars";    
    }
    else if(lagnan.value == "3"||lagnan.value =="6")
    {
        partlord = "Jupiter";    
    }
    else if(lagnan.value == "4")
    {
        partlord = "Saturn";    
    }
    else if(lagnan.value == "5")
    {
        partlord = "Saturn";     
    }
    else if(lagnan.value == "9"||lagnan.value =="12")
    {
        partlord = "Mercury";  
    }
    else if(lagnan.value == "10")
    {
        partlord = "Moon";     
    }
    else if(lagnan.value == "11")
    {
        partlord = "Sun";     
    }
    const partlordplace = partlord.concat('num');
    const partlordplacement = document.getElementById(partlordplace);
    if (partlordplacement.innerText == 1)
    {
     partner = "Spouse will have most influence on your personality and decision making ,Chances of Early marriage."
    }
     else if (partlordplacement.innerText == 2)
    {
     partner = "Wealth through marriage ,Your spouse will have good family background ,Higher chances the partner will enhance your wealth."
    }
    else if (partlordplacement.innerText == 3)
    {
     partner = "You like your partner will be quite philsophical ,Major influence on your duty ,Your spouse is in association with friends of sibling ,Newspaper ,Travels."
    }
    else if (partlordplacement.innerText == 4)
    {
     partner = "Your partner will help you to gain House/cars ,You may like a partner who has all comfort of life ,Good moraled spouse."
    }
    else if (partlordplacement.innerText == 5)
    {
     partner = "Pretty Romantic relationship ,Knowlegeable ,well-educated partner."
    }
    else if (partlordplacement.innerText == 6)
    {
     partner = "Same career choices ,might be from foreign origin or different cultural background ,spouse can be a doctor/lawyer or a social worker."
    }
    else if (partlordplacement.innerText == 7)
    {
     partner = "Trustworthy and Dependable spouse, Stable married life ,Overall your spouse will help you in good relations with areas in diplomacy and people."
    }
    else if (partlordplacement.innerText == 8)
    {
     partner = "Marriage will bring Transformation ,Secretive/Private married life ,Spouse might be working in the field of Research / Mysticism."
    }
    else if (partlordplacement.innerText == 9)
    {
     partner = "Well-Educated Spouse ,Travelling be a keypoint in your relation ,Can meet when you are travelling long ,Discussion about higher knowledge is base in this relation."
    }
    else if (partlordplacement.innerText == 10)
    {
     partner = "Spouse will be of higher status ,Career will be a adjoin base of your relation ,Spouse can be famous."
    }
    else if (partlordplacement.innerText == 11)
    {
     partner = "What you will desire will be fullfilled after marriage ,Spouse will bring money in your life ,your Partner can be part of huge social organisation ,Working for people ,Fun marriage"
    }
    else if (partlordplacement.innerText == 12)
    {
     partner = "Spouse of foreign origin ,Settling foreign lands after marriage is high ,Spiritual Spouse ,Might be working in Research/Hospital/Spiritual/Airport sectors."
    }
//this part is for motherlord
if(lagnan.value == "1")
    {
        motherlord = "moon"; 
    }
    else if(lagnan.value == "2")
    {
        motherlord = "Sun";    
    }
    else if(lagnan.value == "3"||lagnan.value =="12")
    {
        motherlord = "Mercury";    
    }
    else if(lagnan.value == "4"||lagnan.value =="11")
    {
        motherlord = "Venus";    
    }
    else if(lagnan.value == "5"||lagnan.value=="10")
    {
        motherlord = "Mars";     
    }
    else if(lagnan.value == "6"||lagnan.value =="9")
    {
        motherlord = "Jupiter";  
    }
    else if(lagnan.value == "7"||lagnan.value =="8")
    {
        motherlord = "Saturn";     
    }
    const motherlordplace = motherlord.concat('num');
    const motherlordplacement = document.getElementById(motherlordplace);
//This part is for ayabhav
if(lagnan.value == "1"||lagnan.value =="12")
    {
        ayalord = "Saturn"; 
    }
    else if(lagnan.value == "2"||lagnan.value =="11")
    {
        ayalord = "Jupiter";    
    }
    else if(lagnan.value == "3"||lagnan.value =="10")
    {
        ayalord = "Mars";    
    }
    else if(lagnan.value == "4"||lagnan.value =="9")
    {
        ayalord = "Venus";    
    }
    else if(lagnan.value == "5"||lagnan.value=="8")
    {
        ayalord = "Mercury";     
    }
    else if(lagnan.value == "6")
    {
        ayalord = "Moon";  
    }
    else if(lagnan.value == "7")
    {
        ayalord = "Sun";     
    }

    else if(lagnan.value == "11")
    {
        ayalord = "Mercury";     
    }

    const ayalordplace = ayalord.concat('num');
    const ayalordplacement = document.getElementById(ayalordplace);
//this is for bhagyalord
if(lagnan.value == "1"||lagnan.value =="4")
    {
        bhagyalord = "Jupiter";
    }
    else if(lagnan.value == "2"||lagnan.value=="3")
    {
        bhagyalord = "Saturn";    
    }
    else if(lagnan.value == "12"||lagnan.value =="5")
    {
        bhagyalord = "Mars";    
    }
    else if(lagnan.value == "11"||lagnan.value=="6")
    {
        bhagyalord = "Venus";    
    }
    else if(lagnan.value == "10"||lagnan.value=="7")
    {
        bhagyalord = "Mercury";     
    }
    else if(lagnan.value == "9")
    {
        bhagyalord = "Sun";  
    }
    else if(lagnan.value == "8")
    {
        bhagyalord = "Moon";     
    }
    const bhagyalordplace = bhagyalord.concat('num');
    const bhagyalordplacement = document.getElementById(bhagyalordplace);
//this is for sukhlord
if(lagnan.value == "1")
    {
        sukhlord = "Sun"
    }
    else if(lagnan.value == "12")
    {
        sukhlord = "Moon";    
    }
    else if(lagnan.value == "11"||lagnan.value =="2")
    {
        sukhlord = "Mercury";    
    }
    else if(lagnan.value == "10"||lagnan.value =="3")
    {
        sukhlord = "Venus";    
    }
    else if(lagnan.value == "9"||lagnan.value=="4")
    {
        sukhlord = "Mars";     
    }
    else if(lagnan.value == "8"||lagnan.value =="5")
    {
        sukhlord = "Jupiter";  
    }
    else if(lagnan.value == "7"||lagnan.value=="6")
    {
        sukhlord = "Saturn";     
    }
    const sukhlordplace = sukhlord.concat('num');
    const sukhlordplacement = document.getElementById(sukhlordplace);
//This part is for Kundaliyoga
var goodyog = "";
var badyog = "";
    if (Sunln.innerText == Mercuryln.innerText)
    {
        yog.innerText = yog.innerText + "\n Budha-Aditya yog";
        goodyog = goodyog + "\n Budha-Aditya yog";
    }
    if (Sunln.innerText == Jupiterln.innerText)
    {
        yog.innerText = yog.innerText + "\n Guru-Aditya yog";
        goodyog = goodyog + "\n Guru-Aditya yog";
    }
    if (Jupiterln.innerText == Marsln.innerText)
    {
        yog.innerText = yog.innerText + "\n Guru-Mangal yog";
        goodyog = goodyog + "\n Guru-Mangal yog";
    }
    if (Jupiterln.innerText == Moonln.innerText)
    {
        yog.innerText = yog.innerText + "\n Gajkesari yog";
        goodyog = goodyog + "\n Gajkesari yog";
    }
    if (Jupiterln.innerText == Venusln.innerText)
    {
        goodyog = goodyog + "\n Guru-Shukra yog";
    }
    if (Jupiterln.innerText == Mercuryln.innerText)
    {
        goodyog = goodyog + "\n Guru-Buddha yog";
    }
    if (Jupiterln.innerText == Rahuln.innerText ||Jupiterln.innerText == Ketuln.innerText)
    {
        badyog = badyog + "\n Guru-Chandal yog";
    }
    if (Sunln.innerText == Rahuln.innerText ||Sunln.innerText == Ketuln.innerText)
    {
        badyog = badyog + "\n Surya-Grahan yog";
    }
    if (Moonln.innerText == Rahuln.innerText ||Moonln.innerText == Ketuln.innerText)
    {
        badyog = badyog + "\n Chandra-Grahan yog";
    }
    if (Mercuryln.innerText == Venusln.innerText)
    {
        goodyog = goodyog +"\n Laxmi-Narayan yog"
    }
    if (Marsln.innerText == Moonln.innerText)
    {
        goodyog = goodyog +"\n Chandra-Mangal yog"
    }
    if (Moonln.innerText == Saturnln.innerText)
    {
        badyog = badyog + "\n Vish yog";
    }
//this part is now for rajyogas
//Kendra-Trikon

//Dharma karma

if (placementplanet.innerText == "9"||bhagyalordplacement.innerText == "10" && placementplanet.innerText == bhagyalordplacement.innerText)
{
    yog.innerText = yog.innerText + "\n Dharmakarma-adhipati yog";
    goodyog = goodyog + "\n Dharmakarma-adhipati yog";
}


//Dhan 
if (ayalordplacement.innerText == "9"||ayalordplacement.innerText == "2" && bhagyalordplacement.innerText == ayalordplacement.innerText)
{
    yog.innerText = yog.innerText + "\n Dhan yog";
    goodyog = goodyog + "\n Dhan yog";
}

//This part Displays the result
    result.innerText = "The Predictions for the chart is :\n\n\n";
    result.innerText = result.innerText+"*The Work Enviorment and Possible choices*:\n\n";
    result.innerText =result.innerText+ "The Native's work enviorment is in the field of"+" "+fieldof+" "+"which will be related to"+" "+ relatedto;
    result.innerText = result.innerText +"This person will have their major lookout for "+aim +"\n Apart from this the person has "+ keywordrahu;
    result.innerText = result.innerText + "\n\n\n *The Marriage and Spouse Predictions*:\n\n"
    result.innerText = result.innerText + "The Native's love life would be: "+partner;
    result.innerText = result.innerText + "\n\n *Benefic Yog occuring in your chart are *\n:"+goodyog;
    result.innerText = result.innerText + "\n *Malefic Yog occuring in your chart are *\n:"+badyog;
}