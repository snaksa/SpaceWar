var levels = [
	new Level(150, 2, 80, -10, 4, 0.4, 10,
		"Начало на битката",
		"Първата ти задача е да освободите Марс. След като прогоните злите ни врагове ще разберете какви тайни крие тази странна планета."),

	new Level(130, 2, 75, -10, 4, 0.4, 8,
		"Марс",
		"<img src='images/mars.png' class='contentImage' style='border:none;width:190px;' />"+
		"Добра работа! Нека сега да видим малко информация за Марс. <br />"+
		"Това име идва от Марс, римския бог на войната, но също така често се нарича Червената планета,"+
		"тъй като има червен външен вид, причинени от железен оксид, който често се намира на повърхността "+
		"на планетата.Общата площ на повърхността на планетата е почти 144.8 млн. кв. км, което е само малко "+
		"над 28% от тази на Земята. Има два спътника в орбитата на Марс, Деймос и Фобос."+
		"Тя е планета, която е подобна на Земята в много отношения, въпреки че има тънка атмосфера и доста кратери. "+
		"Можете да намерите там,пустини, полярни ледени шапки, долини и вулкани, които, "+
		"когато се комбинират не предлагат най-дружелюбната среда. <br /><hr />" +
		"Ето и няколко интересни факта за Марс: <br />"+
		"1. През 1965г. се проведе първата мисия на Марс, която е била успешна. Маринър 4 е сонда, която достига Червената планета и изпраща на Земята общо 22 снимки.<br /><hr />"+
		"2. Първата страна, която успя да се приземи успешно е URSS, със сонда, на  име Марс 2 и 3. И в двата случая е изгубен контакт с сондите само няколко секунди след приземяването.<br /><hr />"+
		"3. В миналото върху Северното полукълбо на Марс е имало огромен океан. В грамадната територия вода са се вливали реки и ручеи, образувани от обилните валежи над Червената планета.<br /><hr />"+
		"<div style='text-align:center;width: 100%;'>Спрявяш се чудесно!<br />Да продължим към Юпитер!</div>"),
	
	new Level(100, 3, 70, -11, 4, 0.5, 8,
		"Юпитер",
		"<img src='images/jupiter.png' class='contentImage' style='border:none;width:190px;' />"+
		"Юпитер е петата по отдалеченост от Слънцето планета и най-голямата в Слънчевата система."+
		"Тя е известна на човечеството още от древни времена, и присъства във вярванията и "+
		"митологиите на много култури. Планетата е именувана от римляните и носи името на бог Юпитер от тяхната митология. "+
		"В гръцката митология това е главният бог, гръмовержецът Зевс. Затова астрономическият символ е стилизирано изображение на светкавица."+
		"Юпитер е бил обект на изследвания от няколко непилотирани космически апарата, а част от големите му луни, например Европа, "+
		"представляват интерес за астрономите поради вероятностите под повърхността им да има лед.<hr />"+
		"Ето и няколко интересни факта за Марс: <br />"+
		"1.Самият Юпитер е бил близо до това да стане звезда. Ако беше само 80 пъти по-масивен най-вероятно щеше да стане второ слънце в Слънчевата система.<br /><hr />"+
		"2. Околоността на Юпитер е сама по себе си една мини Слънчева система с 63 регистрирани луни, кръжащи около газовия гигант. <br /><hr />"+
		"3. Луната на Юпитер, Ганимед, е най-голямата в Слънчевата система, по-голяма дори от Меркурий. Още няколко от луните на Юпитер са по-големи от бившата планета Плутон.<br /><hr />"+
		"4. Счита се, че на луната на Юпитер, Еурора, има два пъти повече вода отколкото на Земята и че следователно там се крие най-големият шанс за извънземен живот в Слънчевата система.<br /><hr />"+
		"Извънземните започнаха да се питат какво се случва. Дали можем да им покажем, че сме непобедими?<br />"+
		"<div style='text-align:center;width: 100%;'>Напред към Сатурн!</div>"),
	new Level(80, 3, 70, -11, 5, 0.5, 6, 
		"Сатурн",
		"<img src='images/saturn.png' class='contentImage' style='border:none;width:190px;' />"+
		"Сатурн е може би най-известната и най-красивата от всичките планети в Слънчевата система. Макар,"+
		" че не е единствената планета с пръстени, при нея те са с голям диаметър и ширина и могат лесно да се"+
		" видят при наблюдение с телескоп или бинокъл, за разлика от останалите планети. Именно тази система от"+
		" пръстени прави Сатурн толкова красив. Сатурн, подобно на Юпитер, е сформирана основно от водород и хелий."+
		" Облаците в дебелата около 1000 км. атмосфера формират релефа на повърхността при наблюденията на Сатурн. Планетата"+
		" се състоя от 94% водород и 6% хелий, вода, амоняк и метан."+
		"Ето и няколко интересни факта за Сатурн: <br />"+
		"1. Вместо да се върти ритмично по оста си като всеки нормален свят, луната на Сатурн, Хиперион, се премята хаотично в космическото пространство."+
		"Ако стоиш на повърхността й никога няма да си сигурен от къде ще изгрее Слънцето.<br /><hr />"+
		"2. Космическият кораб на НАСА, Касини, откри, че светкавицата на Сатурн е около 1 милион пъти по-силна от светкавицата на Земята. <br /><hr />"+
		"3. Според някои стари теории, близо до центъра на Сатурн може да се образува диамантен дъжд.<br /><hr />"+
		"<div style='text-align:center;width: 100%;'>Останаха само две планети!<br /> Краят е близо!<br /> Напред към Уран!</div>"),
	new Level(60, 4, 65, -12, 5, 0.6, 6,
		"Уран",
		"<img src='images/uranus.png' class='contentImage' style='border:none;width:190px;' />"+
		"Уран е седмата планета в Слънчевата система и третата по диаметър."+
		"Продължителността на деня й е 17 часа и 14 минути, а годината й е с продължителност"+
		" 84.01 земни години. От Земята Уран може да се види с малък телескоп. Но единственото, което се вижда,"+
		" е малкият зеленикав диск без никакви детайли по повърхността. Неговият диаметър е четири пъти по-голям от земния. "+
		"Уран е открита през 1781 г. от Уилям Хершел, който първоначално я смята за комета. "+
		"От наблюдения на Уран не се виждат никакви детайли. Дори на изображение на Voyager той се появява като синьо-зелено кълбо, точно така, както се наблюдава и от Земята. "+
		"Уран е един от четирите газови гиганти в нашата слънчева система и е съставена предимно от скали и вода, а водородът, хелият и метана са нейната плътна атмосфера."+
		" Астрономите считат, че Уран е формирана от същият материал - замръзнала вода и скали, от който са съставени и повечето луни на планетата."+
		"Ето и няколко интересни факта за Сатурн: <br />"+
		"1. Учените смятат, че е възможно дълбоко във вътрешността на планетата да има океан от течна вода, съдържаща разтворен амоняк."+
		"Ако стоиш на повърхността й никога няма да си сигурен от къде ще изгрее Слънцето.<br /><hr />"+
		"2. Уран си е полегнал! Наклонът на повечето планети е около 30 градуса, докато на Уран е 98 градуса. Той е толкова наклонен на една страна, че оста му лежи почти на нивото на пътя му около Слънцето. <br /><hr />"+
		"<div style='text-align:center;width: 100%;'>Извънземните се изтеглят!<br /> Последен напън!<br /> Напред към Нептун!</div>"),
	new Level(50, 4, 60, -13, 5, 0.6, 5,
		"Нептун",
		"<img src='images/neptune.png' class='contentImage' style='border:none;width:190px;' />"+
		"Нептун е осмата планета от Слънчевата система и най-външният газов гигант в нея. Тя е "+
		"четвъртата по размери и третата по маса. Нептун е най-отдалечената от Слънцето планета. "+
		"Носи името на римския бог на морето Нептун. Символът на планетата е стилизирано изображение на тризъбеца на Нептун."+
		"Открит на 23 септември 1846 г., Нептун е първата планета, чието съществуване е доказано чрез математически изчисления, а не от емпирични наблюдения."+
		"Атмосферата на Нептун е съставена основно от водород и хелий със следи от метан. Метанът в атмосферата е "+
		"причината за синия цвят на планетата, но понеже цветът на Нептун е много по-ярък от този на Уран, който "+
		"има същото количество метан, се смята, че има друга съставка, която му придава такъв наситен цвят. "+
		"Единственият апарат, посетил Нептун, е Вояджър 2, който се сближи максимално с планетата на 25 август 1989 г."+
		"Ето и няколко интересни факта за Нептун: <br />"+
		"1. Годината на Нептун е много дълга. Толкова е дълга, че всъщност през 2011 година той ще направи първата си пълна обиколка около Слънцето откакто е открит през 1846 година.<br /><hr />"+
		"2. Ветровете на Нептун са най-бързите в Слънчевата система. Скоростта им се изчислява на около 1100 км/ч. <br /><hr />"+
		"3. Нептун е най-студената планета в Слънчевата система. Високо над облаците, температурите могат да стигнат до -221.4 градуса по Целзий.<br /><hr />"+
		"4. Откритието на Тритон - луната на Нептун - дължим на бирата! Уилиам Ласел, който забелязал Тритон на 10 октомври 1846 година, използвал натрупаното от пивоварския си бизнес богатство, за да си купи телескоп.  <br /><hr />"+
		"<div style='text-align:center;width: 100%;'>Това беше!<br /> Всички нашественици са отблъснати!<br /> Нека сега да разгледаме малко информация за планетите, които не бяха засегнати от инвазията!</div>"),
	new Level(50, 4, 60, -14, 6, 0.6, 8,
		"Меркурий",
		"<img src='images/mercury.png' class='contentImage' style='border:none;width:190px;' />"+
		"Меркурий е най-малката планета в Слънчевата система и най-близката до Слънцето, около което прави по една обиколка на всеки 87,969 земни денонощия. "+
		"Тя прави три завъртания около оста си на всеки две обиколки около Слънцето. "+
		"Първият от двата космически апарата, посетили планетата, е Маринър 10, който успява да заснеме около 45% от повърхността на планетата. "+
		"Физическите характеристики на планетата са подобни на тези на Луната. По повърхността на Меркурий има множество кратери и гладки равнинни "+
		"области, подобно на Луната няма естествени спътници и почти никаква атмосфера. За разлика от Луната, Меркурий има голямо планетно ядро от "+
		"желязо, което създава магнитно поле със сила около 1% от тази на магнитното поле на Земята. "+
		"Температурата на повърхността варира от −180 до 430°C,[5] като най-гореща е подслънчевата точка, а най-студени са кратерите около полюсите. "+
		"Регистрираните наблюдения на Меркурий датират поне от първото хилядолетие пр.н.е. Преди 4 век пр.н.е. древногръцките астрономи смятат планетата "+
		"за два отделни обекта — единият видим при изгрев, който те наричат Аполон, а другият — при залез, наричан Хермес. Българското наименование "+
		"на планетата идва от името на бога Меркурий, римският аналог на Хермес."),
	new Level(50, 4, 60, -14, 6, 0.6, 8,
		"Венера",
		"<img src='images/venus2.png' class='contentImage' style='border:none;width:190px;' />"+
		"Венера е втората по ред планета от Слънчевата система и носи името на богинята Венера от "+
		"римската митология. Тя е земеподобна планета, много близка по големина и общи качества до Земята; "+
		"понякога е наричана „планетата-сестра на Земята“. Тя е била известна на древните вавилонци и вероятно "+
		"е била позната и в праисторически времена поради високата си яркост. Неин символ е стилизираният образ на "+
		"огледалото на богинята Венера: окръжност с малък кръст отдолу. Гъстата атмосфера на Венера успешно „омекотява“ "+
		"сблъсъците на метеорити с повърхността; метеоритни кратери с диаметър по-малък от 3,2 km не могат да се формират."+
		"Почти 90% от повърхността на Венера се състои от сравнително скорошно (в геологичен план) изстинала базалтова "+
		"лава и много малко метеоритни кратери. Предполага се, че причината за това са интензивни вулканични изригвания, "+
		"които са променили почти изцяло повърхността на планетата."+
		"Ето и няколко интересни факта за Нептун: <br />"+
		"1. Смята се, че през първия милиард, или дори два милиарда години, на Венера е имало застояла вода. Някои от последните наблюдения на кораба Венера Експрес потвърждават това.<br /><hr />"+
		"2. Изследването на горния атмосферен слой на Венера води до откритието на дупката в озоновия слой на Земята.<br /><hr />"+
		"3. Колкото повече знаем за това как вулканичната дейност и химическите реакции се отразяват на атмосферата и облаците на Венера толкова по-наясно ще сме как измененията влиаят на климата на Земята.<br /><hr />"+
		"4. Облаците на Венера не са като тези на Земята. Вместо от водни молекули те са предимно съставени от сярна киселина, което прави атмосферата на Венера не само изключително гореща, но и корозивна.<br />"),
	new Level(50, 4, 60, -14, 6, 0.6, 8,
		"Земя",
		"<img src='images/earth.png' class='contentImage' style='border:none;width:190px;' />"+
		"Земята е третата планета в Слънчевата система. Тя е най-голямата от земеподобните планети в тази система "+
		"и единствената, на която според съвременните научни схващания има живот. Земята е формирана преди около "+
		"4,5 милиарда години и скоро след това придобива единствения си естествен спътник – Луната. От всички животински "+
		"видове, които са се развили на Земята, човекът е единственият, който е развил интелигентност. "+
		"Външната обвивка на Земята е разделена на няколко твърди сегмента или тектонски плочи, които постепенно "+
		"мигрират под повърхността през периоди от милиони години. Около 71% от повърхността е покрита от соленоводни океани, "+
		"а останалото са континентите, островите, реките и езерата. "+
		"Населението на Земята надхвърля 7 млрд. жители. Прогнозите сочат, че населението на "+
		"Земята ще достигне 9,2 млрд. през 2050 г.")
];