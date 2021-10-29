# Challenge du week-end (29/10/2021)
## Objectif
Créer une liste de destinations populaires de façon dynamique en utilisant le méthode **Array map de Javascript**. 

Faites la copie du projet et commencez à partir de la branche **dynamic-start**.
<p align="center">
<img width="304" alt="Screen Shot 2021-10-29 at 10 25 31 AM" src="https://user-images.githubusercontent.com/84252935/139452307-61728467-da65-4cdb-af1d-e82e51dae84c.png">
</p>

Vous pouvez naviguer vers **/Afrostream/Arrays/array-map** et en utilisant un serveur en local, afficher la page d'accueil sur le navigateur Chrome, Firefox ou Edge et vous verrez une liste avec le même carte qui se répéte indiquant ainsi la partie statique de notre page.

<img width="1600" alt="Screen Shot 2021-10-29 at 10 14 01 AM" src="https://user-images.githubusercontent.com/84252935/139450541-6a4525d7-a1c9-4b89-b519-b78c1eab80b0.png">

Utilisez les données d'entrées fournies ci-après et ajouter votre programme dans le fichier **_/array-map/main.js_** et faites en sorte que le contenu statique de votre page d'acceuil soit remplacé de façon dynamique avec les cartes contenues dans le tableau **destinations**

**Au final votre page devrait s'afficher telle que l'image ci-dessous**

<img width="1600" alt="Screen Shot 2021-10-29 at 10 20 17 AM" src="https://user-images.githubusercontent.com/84252935/139451609-f9211c31-c0a0-4ff7-a0da-ad0651896313.png">

## Données d'entrée

```javascript
const destinations = [
    {
      name: "Temeri Jant",
      country: "Senegal",
      address: "3 Boulevard des Palmiers, Dakar, Senegal",
      phone: "221775554655",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
      imgUrl: "https://source.unsplash.com/2gOxKj594nM/600x400",
    },
    {
      name: "The Golden Thread",
      country: "USA",
      address: "5 Maple Street, Los Angeles, CA, 90000",
      phone: "2125552345",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
      imgUrl: "https://source.unsplash.com/UBe-M4bBxjw/600x400",
    },
    {
      name: "Sine Sine",
      country: "usa",
      address: "3669 Elm Street, New York, 30000",
      phone: "7075559087",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
      imgUrl: "https://source.unsplash.com/RDnYlufMFAw/600x400",
    },
    {
      name: "Petites Caraïbes",
      country: "USA",
      address: "1 Kings Place, Atlanta, GA, 30000",
      phone: "6785553125",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
      imgUrl: "https://source.unsplash.com/O5rFo-cJu94/600x400",
    },
    {
      name: "Dragon Shower",
      country: "Senegal",
      address: "3 Boulevard des Palmiers, Dakar, Senegal",
      phone: "221775554655",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
      imgUrl: "https://source.unsplash.com/pHANr-CpbYM/600x400",
    },
    {
      name: "The 3 Queens",
      country: "USA",
      address: "5 Maple Street, Los Angeles, CA, 90000",
      phone: "2125552345",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
      imgUrl: "https://source.unsplash.com/lWAOc0UuJ-A/600x400",
    },
    {
      name: "Tooth Peak",
      country: "usa",
      address: "3669 Elm Street, New York, 30000",
      phone: "7075559087",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
      imgUrl: "https://source.unsplash.com/_A7H-ujstEc/600x400",
    },
    {
      name: "Tuxedo Beach",
      country: "USA",
      address: "1 Kings Place, Atlanta, GA, 30000",
      phone: "6785553125",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
      imgUrl: "https://source.unsplash.com/EjW1VKoaHMs/600x400",
    },
  ];
```
## Ressources sur Youtube

**Array Map - Comment créer une interface dynamique** (https://www.youtube.com/watch?v=GUwZNZaR4oM)

![array-map-interface](https://user-images.githubusercontent.com/84252935/139447021-83cdca87-3948-40b4-a9bb-fee64f14a2af.jpg)

**Array Map - Alphabet du Javascript** (https://youtu.be/N0-aDqiRLt0)

<img width="1600" alt="Screen Shot 2021-10-29 at 9 54 25 AM" src="https://user-images.githubusercontent.com/84252935/139447517-de2e0242-b331-4101-ac8f-09ebe1dd26be.png">


## Comment partager votre solution
Apres avoir fini prenez une capture d'écran et partager sur **Twitter** suivant le format ci-dessous:
<p align="center">
<img width="603" alt="Screen Shot 2021-10-29 at 9 36 18 AM" src="https://user-images.githubusercontent.com/84252935/139444672-37318191-8178-4b7f-8f11-4bcc817bbad9.png">
</p>

**IMPORTANT: Utiliser les hashtags #darajischool #challengeDuWeekend**

## Pour aller plus loin
Félicitations si vous avez déjà complété le challenge. 

Comme bonus vous pourriez vous attaquer à dynamiser les données d'entrée en créant une API qui les fournit via **JSON**. Vous pouvez utiliser n'importe quel format backend ou suivre notre example avec **JSON server** 

**Créer une API Rest avec JSON Server** (https://youtu.be/_9UG4KoLdkE). 

![poster-json-server-api](https://user-images.githubusercontent.com/84252935/139453265-a604b210-8f5e-4495-8050-620f6c49153f.jpg)


Faites la modification au niveau de **_main.js_** pour maintenant utiliser la réponse de votre API au lieu du contenu statique. 

N'oubliez pas de partager également cette solution suivant le même format sur **Twitter!**
