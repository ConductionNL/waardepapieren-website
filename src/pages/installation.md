---
template: "default"
---

# Installatie
De waardepapieren Applicatie bestaat uit een aantal componenten en een/meerdere ui’s opgebouwd volgens het [commonground vijflagen model]. Hierbij kunnen onderliggende componenten worden gedeeld tussen applicaties, we raden daarom aan om alleen nieuwe componenten te instaleren en reeds bestaande componenten te hergebruiken.
 
## Componenten
Het verdient een aanbeveling om de componenten in de hier weergegeven volgorde te innstalleren

|Component |Repository  | Instalation| Requered|
--- | --- | --- | ---
|waardepapieren-service|data2|data3|yes|
|waardepapieren-register|data12|sd|no|
|waardepapieren-ui|data12|data13|no|
|waardepapieren-balie|data12|data13|no|
|DigiD|data12|data13|no|
|BRP|data12|data13|no|

Technisch gesproken is het enige component dat nodig is voor het creëren van waardepapieren de waardepapieren service, deze kan vervolgens worden geintegreerd via de onder (intergatie](/integration) vermelde stappen. Als de service standalone wordt gerdraaid en de te "claimen" data wordt aan de service aangeleverd is een verdere implementatie niet noodzakenlijk. Als je gebruik wilt maken van het opslaan van claims (randvoorwaardelijk voor intrekbare claims) dient teven het waardepapieren register te worden geinstalleerd.

Het is echter ook mogenlijk om de waardepapieren als totaal applicatie te draaien, in dat geval verdient het een aanbeveling om teven de waardepapieren-ui (interface voor burgers / bedrijven) te installeren. 

 
## Configuratie
De configuratie van de verschillende componenten vind plaats via de helm installatie van dat component, volg hiervoor de bij het component aangeleverde handleiding.
 
## Voorbeeld data
Nadat de configuratie is afgehandeld kan er voorwoorden gekozen om een zet met voorbeeld gegevens in te laden (voor bijvoorbeeld demo doeleinden). Voer hiervoor de volgende stappen uit

## Toevoegen van adtionele waarepapieren
Nadat de configuratie is afgehandeld kan er voorwoorden gekozen om een zet met voorbeeld gegevens in te laden (voor bijvoorbeeld demo doeleinden). Voer hiervoor de volgende stappen uit
