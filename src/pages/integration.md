---
template: "default"
---

## Integratie

Naast een volledige [installatie](/instalation) van de waardepapieren applicatie is het ook mogenlijk om een api integratie op te zetten met de waardepapieren service, in dat geval maakt u gebruik van een elders gehoste waardepappieren applicatie. Hiervoor heeft u de volgende gegevens nodig:

- Endpoint (de locatie waar de service is gehost, bijvoorbeeld https://waarderpapieren.demodam.nl/api/v1)
- Authenticatie in de vorm van een JWT token (te verkrijgen bij de host van de waardepaieren service)
- RSIN nummer van de organisatie waarvan u een waardepapier wilt uitdraaien
- Een aanvrager in de vorm van een BSN Nummer van het persoon waarvoor u een waardepapier wilt uitdraaien OF RSIN nummer van de organisatie waarvoor u eeen waardepapier wilt aanvragen

Randvoorwaardenlijk hiervoor is dat de organisatie is geconfigureerd bij de door u gekozen host van waardepapieren
