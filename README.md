# **Projektopgave HI-FI Corner**

## Om opgaven
Denne opgave omhandler opsætning af en react applikation, routing og hentning og præsentation af data i henholdsvis liste- og detaljevisning. Læs hele opgavebeskrivelsen grundigt igennem inden I stiller spørgsmål.

## Opgavebeskrivelse

I skal fremstille en webapplikation til en HI-FI webbutik, som præsenterer butikkens produkter inddelt efter kategori eller producent. Brugeren af sitet skal nemt og overskueligt kunne finde rundt i de forskellige produkter og kunne fremsøge produkter vha. søgeord. Der er **udelukkende** tale om præsentation af produkterne, man skal ikke kunne handle produkter på siden.

Opgaven varer ca. 3 uger og omhandler både planlægningen og produktionen af client-side produktet. Opgaven skal planlægges, der skal udarbejdes designanalyse (identifikation af komponenter/moduler). Der skal udarbejdes issues til de identificerede komponenter og moduler. I skal i denne proces huske at tage stiling til de enkelte issues kompleksitet, og om et issue muligvis skal opdeles i flere issues. I skal samarbejde om projektet digitalt ved hjælp af GitHub Projects, men det er også et krav, at I undervejs i processen vedligeholder et fysisk kanban-board, som kan bruges ved statusmøder med jeres product-owner (lærer) scrum-møder.

Tag jer god tid til den indledende planlægning.

Det arbejde der forventes udført når projektet er slut, er en funktionel offentlig tilgængelig (fx. netlify) client-side som henter data og billeder fra en (eller flere) JSON-datakilde(r). Applikationen skal være sat op, så den matcher det udleverede design.

Et HI-FI produkt består af et navn, en beskrivelse, en pris, et billede, samt hører til i en kategori og er knyttet til en producent. I skal selv udtænke hvordan datastrukturen stilles op i JSON.
*(billederne findes i den medfølgende .zip fil, men ved alle de andre produktdata finder I selv på noget, benyt evt https://lipsum.com/feed/html )*

### Tekniske krav
**Client-Side** skal løses vha. react, og hente data fra en ekstern kilde (json-server). Jeres CSS skal være modulær, og I bør overveje brug af navngivningskonventioner som fx BEM. Produktet **kan** designes efter mobile first princippet, men ikke nødvendigvis implementeret til begge medier *(prioriter browser varianten som den primære der produceres)*.


### Planlægning
* Layoutanalyse - identificer komponenter/moduler i layoutet.
* Udarbejd 'definition of done' på de enkelte issues/komponenter/moduler. Hvilke kriterier skal komponentet/modulet opfylde for at være færdigt? Hvad skal den som laver review kontrollere om er i orden?


### Forslag til arbejdsprocess
* Opsæt applikationen med dummy-data (som et statisk site)
* Design datastrukturer i JSON, og opret json-server (vær opmærksom på muligheden for at oprette relationer)
* Programmér funktionaliteten til dataudtræk
* Byg alle nødvendige fetch, og udskriv data fra fetch.


### Sider og indhold
* Forside
* Liste visning af produkter med mulighed for sortering (se nedenfor)
* Detaljevisning af et enkelt produkt
* Sammenligning af flere produkter
* Kontakt
* "Our History"
* FAQ
* Indkøbskurv

**Ekstra opgaver_**
* "Checkout flow" (Paymentpage + invoicepage)
* Login / opret bruger / Brugerprofil / ordrer
* en simuleret chat funktion
 
### Forsiden 
* Forsidetekst og billeder af produkter
* Visning af ét eller flere udvalgte produkter (kan være de senest oprettede, et tilfældige produkter eller andet I finder relevant)
 
### Listevisning af produkter
Der er flere forskellige funktioner under produkter:
* Visning af alle produkter inden for en bestemt kategori, uden produkt beskrivelse
* Visning af alle produkter der hører til en bestemt producent, uden produkt beskrivelse
* Visning af alle produkter i en bestemt farve
* Visning af alle produkter i et bestemt pris-interval
* Visning af alle produkter som matcher brugerens søgning 
* Viderestilling til detaljevisning ved klik på et produkt fra listerne

Alle data hentes fra en json-server og udskrives ved hjælp af fetch/axios, alle produkter vises med deres billede.
 
### Alle sider 
* Menu 
* Fritekst-søgefunktion (visning på produktsiden) 
* Footer med kontaktinfo 

### Github
* Projektet accepteres som en GitHub assignment.
* Der skal *committes ved væsentlige ændringer eller færdiggørelse af en funktionalitet* - og altid inden fyraften.
* Alle commit tekster på GitHub skal kort beskrive ændringerne. **Der må ikke skrives ligegyldige beskrivelser!**.

### Billedfiler
Alle billeder ligger i en zippet fil fordelt i mapper.

I vælger om alle billeder skal ligge i én mappe eller om I vil bevare mappestrukturen.

Brug følgende liste, hvis I er i tvivl om hvilke kategorier de forskellige billeder tilhører:

  
**CD Afspillere**

    * creek_classic_cd.jpg
    * creek_Destiny_CD.jpg
    * creek_evo_cd.jpg
    * Exp_2010S_CD.gif


**DVD Afspillere**

    * creek_classic.jpg
    * exposure_2010S.jpg
    * parasound_d200.jpg
    * parasound_halod3.jpg

**Effektforstærkere**

    * manley_mahi.jpg
    * manley_neoclassic300b.jpg
    * manley_snapper.jpg
    * parasound_haloa23.jpg


**Forforstærkere**

    * Creek_OBH_22_Passive_Preamp.jpg
    * parasound_classic7100.jpg
    * parasound_halop3.jpg
    * Project_prebox.jpg


**Højtalere**

    * boesendorfer_vcs_wall.gif
    * epos_m5.gif
    * harbeth_hl7es2.jpg
    * harbeth_monitor30.jpg
    * harbeth_p3es2.jpg


**Int. Forstærkere**

    * creek_a50I.jpg
    * creek_classic5350SE.jpg
    * creek_destinyamp.jpg
    * manley_snapper.jpg
    * Manley_Stingray.jpg


**Pladespillere**

    * Pro_ject_Debut_3_bl.jpg
    * Pro_ject_Debut_III_red_1.jpg
    * Pro_ject_Debut_III_yellow_1.jpg
    * Pro_ject_rpm_5.jpg
    * Pro_ject_rpm10.jpg


**Rørforstærkere**

    * jolida_JD102b.jpg
    * jolida_JD202a.jpg
    * jolida_JD300b.jpg
    * jolida_JD302b.jpg
    * jolida_JD502b.jpg 
 
## EKSTRA-EKSTRAOPGAVE
Hvis I har mega overskud!

Indsæt reklmebannere på hjemmesiden. I skal selv beslutte hvor på siden reklamebannere vil passe ind. Find et API på nettet, som lader jer fetche bannere og indsæt vilkårlige bannere på hjemmesiden.
