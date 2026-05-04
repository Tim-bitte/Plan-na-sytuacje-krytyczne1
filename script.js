
const points = [
  { text: "Działanie, gdy liczy się każda sekunda – potrzeba ewakuacji i schronienia. Ucieczka i bezpieczeństwo: Co zabrać w plecaku ucieczkowym i jak sprawnie opuścić budynek. Zanim usłyszysz sygnał, musisz być gotowy. To najważniejszy element logistyczny." },
  { text: "Plecak ewakuacyjny, zwany również bug-out bag (BOB) lub plecak 72h, to zestaw niezbędnych przedmiotów spakowanych w jeden, łatwy do zabrania plecak, który pozwala przetrwać minimum 72 godziny (3 dni) w sytuacji kryzysowej, takiej jak ewakuacja spowodowana katastrofą naturalną, awarią infrastruktury, konfliktem zbrojnym lub inną nagłą sytuacją zagrożenia." },
  { text: "Plecak 72h jest kluczowy, ponieważ w pierwszych godzinach i dniach po zdarzeniu krytycznym służby ratunkowe mogą być przeciążone, a dostęp do sklepów, wody, prądu i pomocy medycznej może być niemożliwy. Dobrze przygotowany plecak zwiększa szanse na przetrwanie i utrzymanie zdrowia, dając czas na dotarcie do bezpiecznego miejsca lub schronienia." },
  { text: "Co powinien zawierać plecak ewakuacyjny? Podstawą jest woda i sposób jej uzdatniania: minimum 3-4 litry na osobę na dobę (w butelkach lub bukłaku), tabletki do uzdatniania wody lub filtr (np. LifeStraw), metalowy kubek lub menażka do gotowania." },
  { text: "Żywność: niepsujące się kaloryczne produkty na minimum 3 dni – batony energetyczne, suszone owoce i mięso, konserwy, liofilizaty, orzechy. Wybieraj lekkie, wysokokaloryczne pozycje z długim terminem ważności. Nie zapomnij o otwieraczu do konserw i sztućcach." },
  { text: "Apteczka pierwszej pomocy: opatrunki, bandaże, gaziki, środki odkażające, leki przeciwbólowe i przeciwbiegunkowe, leki osobiste na receptę (minimum na tydzień), nożyczki, pinceta, rękawiczki lateksowe, koc termiczny (folia NRC), opaska uciskowa." },
  { text: "Odzież i ochrona: zapasowa zmiana bielizny i skarpet, kurtka przeciwdeszczowa lub peleryna, czapka, rękawiczki, solidne buty (jeśli nie masz na nogach), okulary przeciwsłoneczne, maseczka przeciwpyłowa lub przeciwgazowa." },
  { text: "Narzędzia i wielofunkcyjne przedmioty: nóż survivalowy lub multitool, zapalniczka / krzesiwo / zapałki wodoodporne, latarka czołowa z zapasowymi bateriami lub dynamo, taśma duct tape, linka paracord, folia biwakowa, mała saperka lub łopatka." },
  { text: "Dokumenty i komunikacja: kopie dowodu osobistego, paszportu, prawa jazdy, polisy ubezpieczeniowej, aktów własności (w wodoszczelnej kopercie), lista kontaktów awaryjnych, gotówka w małych nominałach, powerbank, radio na baterie lub korbkę (z odbiorem UKF i fal długich)." },
  { text: "Higiena i inne: papier toaletowy, wilgotne chusteczki, mydło, pasta i szczoteczka do zębów, środek dezynfekujący do rąk, worki na śmieci, notes i długopis, mapa okolicy w wersji papierowej, kompas." },
  { text: "Jak przygotować dom do opuszczenia? Przed wyjściem zakręć główny zawór gazu, odłącz prąd (jeśli jest zagrożenie pożarowe lub powodziowe), zakręć wodę. Zamknij szczelnie okna i drzwi. Zostaw wiadomość dla służb lub rodziny z informacją o miejscu docelowym." },
  { text: "Plan ewakuacji budynku: znaj dobrze wszystkie wyjścia awaryjne, klatki schodowe i drogi ewakuacyjne. Ćwicz z rodziną trasę wyjścia – każda sekunda ma znaczenie. W mieszkaniu wielorodzinnym przygotuj plan spotkania w bezpiecznym punkcie poza budynkiem." },
  { text: "Dodatkowe elementy planu na sytuacje krytyczne: przygotuj „go-bag” dla każdego członka rodziny (w tym dzieci i zwierząt), ustal punkty zborne i alternatywne miejsca schronienia (np. u rodziny poza miastem), znaj drogę do najbliższego schronu lub terenu otwartego." },
  { text: "W samochodzie warto mieć dodatkowy zestaw: kanister z paliwem, ładowarkę samochodową, łańcuchy lub mata antypoślizgowa, apteczkę i koc. Regularnie sprawdzaj i rotuj zawartość plecaka co 6 miesięcy, aby produkty nie straciły ważności." },
  { text: "Pamiętaj o sygnale alarmowym: w Polsce sygnał „Alarm” to modulowany dźwięk syreny oznaczający zagrożenie. Po usłyszeniu go natychmiast włącz radio lub telewizor na informacje RCB lub lokalne ostrzeżenia. Działaj spokojnie, ale zdecydowanie według wcześniej przygotowanego planu." },
  { text: "Przygotowanie psychiczne i wiedza są równie ważne jak sprzęt. Ucz się podstawowych umiejętności survivalowych: rozpalanie ognia, budowa schronienia, pierwsza pomoc. Dołącz do grup survivalowych lub kursów, aby podnosić kwalifikacje." },
  { text: "Plan na sytuacje krytyczne powinien być spersonalizowany pod Twoje miejsce zamieszkania, liczbę osób w gospodarstwie i potencjalne zagrożenia (powódź, blackout, pożar lasu, konflikt). Przejrzyj oficjalne wytyczne Rządowego Centrum Bezpieczeństwa (RCB) i dostosuj je do swoich potrzeb." },
  { text: "Systematyczne przygotowanie plecaka ewakuacyjnego i planu ewakuacji znacząco zwiększa bezpieczeństwo Twoje i Twoich bliskich. Lepiej mieć i nie potrzebować, niż potrzebować i nie mieć. Gotowość to podstawa przetrwania w każdych warunkach." }
];

const box = document.getElementById("infoBox");
const title = document.getElementById("infoTitle");
const text = document.getElementById("infoText");

function showPoint(index) {
    title.textContent = points[index].title;
    text.textContent = points[index].text;

    box.classList.remove("show");
    void box.offsetWidth; 
    box.classList.add("show");
}
