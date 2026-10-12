# Uzdevumi Unlocker
Neliels un viegls Chrome paplašinājums, kas atklāj vietnē uzdevumi.lv iekļauto saturu, kurš var palikt paslēpts, ja ir aktivizēti reklāmu bloķētāji (ad-blockers) vai noraidīta piekrišana sīkdatņu izmantošanai (rejected cookies).

## Ko tas dara
Šis paplašinājums rāda iegulto saturu, kas var būt paslēpts šādu iemeslu dēļ:

- Reklāmu bloķētāju traucējumi, kas bloķē iegultos resursus
- Noraidīti sīkfailu piekrišanas baneri, kas slēpj saistīto saturu

Paplašinājums nodrošina, ka viss iegultais saturs tiek pareizi attēlots neatkarīgi no jūsu konfidencialitātes iestatījumiem.

## Instalēšana
Tā kā šis paplašinājums netiks publicēts Chrome interneta veikalā, tas būs jāielādē manuāli.

1. Lejupielādējiet vai klonējiet paplašinājuma failus savā datorā
2. Atveriet Chrome un dodieties uz adresi `chrome://extensions/`
3. Aktivizējiet **"Izstrādātāja režīmu"** (Developer mode), izmantojot slēdzi augšējā labajā stūrī
4. Noklikšķiniet uz pogas **"Ielādēt neiepakotu"** (Load unpacked)
5. Atlasiet mapi, kurā atrodas paplašinājuma faili
6. Paplašinājums parādīsies jūsu paplašinājumu sarakstā

## Lietošana
1. Pēc instalēšanas apmeklējiet vietni `uzdevumi.lv`
2. Dodieties uz jebkuru lapu, kurā ir iegults saturs
3. Paplašinājums darbojas automātiski – manuāla aktivizēšana nav nepieciešama
4. Atsvaidziniet lapu, ja saturs neparādās uzreiz

## Iekļautie faili
```
paplašinājuma_mape/
├── manifest.json      # Paplašinājuma konfigurācija
├── content.js         # Galvenais skripts, kas modificē lapas darbību
├── styles.css         # Neobligāts stilizēts piespiedu elementiem
└── README.md          # Paplašinājuma apraksts
```

## Nepieciešamās atļaujas
Pārbaudiet failu `manifest.json`, lai redzētu, kādas atļaujas jūsu paplašinājums pieprasa. Biežāk sastopamās ir:

- `activeTab` - piekļuve pašreiz atvērtajai cilnei
- resursdatora atļaujas (host permissions) domēnam `*://*.uzdevumi.lv/*`