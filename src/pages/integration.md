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

## Opvragen van beschikbare waarde papieren
U kunt de voor uw aanvrager beschickbare waarepapieren opvragen op het /types endpoint door middel van een ``GET`` request, hierbij dient u de applicant (BSN of KVK nummer) en organization (RSIN nummer van de verstrekkende organizatie) op te geven als query parameters, bijvoorbeeld ``https://waarderpapieren.demodam.nl/api/v1/types?applicant={BNS}&organizaiton={rsin}``. U ontvangt vervolgens als resultaat een JSON bericht met daarin een lijst van beschikbare waardepapieren.  

Onderstaande een voorbeeld van de ``JSON`` ``RESPONSE``

```json 
"types":[
    "geboorte-akte",
    "uittreksel",
    "historisch-uittreksel"
]
```

## Genereren van een waardepapier
Aan de hand van bovenstaande gegeven kunt u vervolgens een waardepapier aanvragen, dit dient te gebeuren door het maken van een POST request op het /certificate endpoint. Waarbij u de applicant, type en organizatie die het 
                                                                                                        
```JSON
{
    "applicant":"999999928",
    "type": "akte_van_geboorte",
    "organization": "001516814"
}
```

## Opvragen van reeds afgegeven waardepapieren
Indien uw host teven het waardepapieren register heeft geimplementeerd kun u ook in het verleden uitgegeven waardepapieren voor een aanvraager ophalen.

