# functional-programming-rdw
 
## Onderzoeksvraag <br>
**Hoofdvraag**<br>
Waar en hoeveel parkeer verkooppunten komen er jaarlijks bij? 

**Deelvragen en assumptie**<br>
- komen er sommige jaren meer bij dan andere jaren? (Ik denk dat er ieder jaar meer bijkomen, zeker als we kijken naar de grotere steden)
- Zijn er plaatsen waar de toename groter is dan andere plaatsen? (Ik denk dat de toename in grote steden en daar omheen fors toeneemt)
- Moet ik hier het hele daar door betaald parkeren of alleen in bepaalde maanden? (In de voorbeeld datarijen zag ik veel colommen staan waar je een aantal maanden niet hoeft te betalen)
- Amsterdam wilt steeds minder auto's in de stad hebben, heeft dit invloed op de aantal verkoop punten die er worden neergezet?
- Worden er ook verkooppunten weggehaald?

extra - Zitten er overeenkomsten of een verschillen in de metaalmethode en de verkooppunten? (In de grote steden kan je meestal niet meer met cash betalen dus dit zal een verschil zijn.)

## Dataset(s)

**Dataset #1**<br>
https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp/ 

**Wat krijg ik uit deze dataset?** 
- AreaManagerId
- SellingPointId
- StartDateSellingPoint
- EndDateSellingPoint
- SellingPointDesc
- Location

**Wat ga ik gebruiken?** 
Ik wil uit deze dataset de location gebruiken om te laten zien waar en hoeveel verkooppunten er in Nederland zijn. Ook wil ik de StartDateSellingPoint en de EndDateSellingPoint gebruiken om aan de hand van een timeline weer te geven wanneer deze punten zijn neergezet.

**Dataset #2**<br>
https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-VERKOOPPUNT/j96a-7nhx

**Wat krijg ik uit deze dataset?** 
- SellingPointNumber
- PaymentMethod
- StartDatePaymentMethod
- EndDatePaymentMethod

**Wat ga ik gebruiken?** 
Met deze dataset kan ik zien hoe er voornamelijk wordt betaald bij verschillende verkooppunten. Hier kan ik weer nieuwe vraagstukken uit halen, zoals: Waarom wordt er in steden meer met mobiel betaald dan op het platteland? of Hoe zal het komen dat er na 2018 helemaal niet meer wordt betaald met cash in Amsterdam?

Als het goed is kan ik deze linken met de verkooppunten van dataset 1 en kan ik deze visualisaties samenvoegen.



