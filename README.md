# Sorting-visual
## Ferli mitt að gera vizualized sorting algorithma
## Fannar Örn Ragnarsson - FORR3FV05EU-Hát - Tækniskólinn
# Verkefnalýsing
Grunn pælinginn var í raun að mig hefur alltaf langað að gera eitthvað sem tengist svona sorting algorithm sem yrði samt hækkt að interacta með á einnhvern hátt
sem var sirka það sem ég gerði í þessu verkenfi
# algoriðminn
algoriðminn er í raun bara basic bubble sort algoriðmi sem gengur út á að færa eða swappa þeim int sem þú varst seinnast með við annan, þannig i-1 = 0.81 eða eitthvað slíkt en næsti i = 0.91 þá myndi það velja i því það er stæra og fer síðan alla leiðina í enda og skilur það eftir þar 
![verk 5 protomynd.PNG](https://github.com/fannarfent/Sorting-visual/blob/main/verk%205%20protomynd.PNG?raw=true))
### > // i startar á 0  í arrayinu og skoðar hvort i-1 sé stærri en i
### > // ef i er stærri en i-1(i = næsta column í arrayinu)þá byrjar það að færa það í staðin aka swappar yfir í það column
### > // ef i-1 (sem er stæðsta númerið í arrayinu upp að þeim punkt sem það er komið)er stærra en i heldur það áfram að færa sig niður línuna
síðan fór ég í það að gera þetta aðeins meira dínamískt að því leiti að geta valið magn af columns
![verk 5 final unsorted](https://github.com/fannarfent/Sorting-visual/blob/main/verk%205%20final%20unsorted.PNG?raw=true)
# Útkomann
mér fannst koma ágættlega út úr þessu samt lenti ég í veseni með að gera  en það næsta sem væri á dagskrá er að gera það hægt að velja hraðan á sortinu með lista á síðuni sjálfri, gera cssið aðeins meira scaleable með missmunandi tækjum og síðast en ekki síðst koma upp einnhverji virkni með touch eða eitthvað slíkt, mögulega gera manni kleift að stækka magnið af columns með pinch eða eitthvað slíkt og swipe til að breyta hraðanum
