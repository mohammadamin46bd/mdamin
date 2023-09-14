import CMSImg from "../assets/CMS.jpg";
import ostersund_mobile_viewer from "../assets/ostersund_mobile_viewer.PNG";
import sorabproject from "../assets/sorabproject.pdf";

export const LiveWorkData = {
  lw: [
    {
      name: "Offertarbete till ett knowledgebase-system för en kund",
      description: [
        {
          p:
            "Syftet för detta projekt var att skapa ett knowledgebase-system baserad på SharePoint-Online, React och TypeScript för att söka och filtrera dokument för en konkurransedyktig budprocess.",
        },
      ],
      url: { img: CMSImg },
      fullscreenText: "",
    },
    {
      name: "Skapa ett bildgalleri med bilder hämtade från flickr",
      description: [
        {
          p:
            "Uppdraget går ut på att skapa ett bildgalleri med VanillaJS som hämtar data från Flickrs publika API och visar upp resultatet på en webbsida.",
        },
      ],
      url: { url: "https://mdamin.se/bildgalleri/" },
      fullscreenText: "Öppna applikationen  till ett nytt fönster",
    },
    {
      name: "Grönplan",
      description: [
        {
          p:
            "Kristianstads kommun är en kommun i Skåne län. Centralort är Kristianstad.",
        },
        {
          p:
            "Uppdraget gick ut på att skapa en dynamik responsiv webbapplikation för att presentera grönplan, översiktsplan, trafikplan med mera med text, kartor och bild. Projektets resultat blev en användarvänlig Digital Platform till kommunens invånare och politiker.",
        },
      ],
      url: { url: "https://kartor.kristianstad.se/op/test/?app=gp" },
      fullscreenText: "Öppna grönplan  till ett nytt fönster",
    },
    {
      name: "Nya generationen interna webbkarta applikation",
      description: [
        {
          p:
            "Kristianstads kommuns interna webbkarta-applikation bygger på gammal teknologi och är inte responsiv. Därför syftet för detta projekt var att bygga en ny responsiv webbkarta-applikation med dagens nya teknik (t.ex. React, Redux och Node)",
        },
        {
          p:
            "Sidan är inte public men jag har lagt sidan ute utan interna data och därför alla funktion fungerar inte",
        },
      ],
      url: { url: "https://md-react-2018.web.app/" },
      fullscreenText: "Öppna kartan  till ett nytt fönster",
    },
    {
      name: "kristiaanstadskartan",
      description: [
        {
          p:
            "Detta är en karta med information över Kristianstads kommun. Här finner du information om bl. a. lediga villatomter, besöksplatser i vattenriket eller skolor upp till gymnasienivå.",
        },
        {
          p:
            "Syftet för detta projekt var att skapa ett nya responsiv webbkarta applikation för kommunen invånare och företagare",
        },
      ],
      url: { url: "https://kartor.kristianstad.se/kristianstadskartan/" },
      fullscreenText: "Öppna kartan till ett nytt fönster",
    },
    {
      name: "Park besiktningkartan",
      description: [
        {
          p:
            "Syftet för detta projekt var att rapportera inspektion resultat och underhålls- och reparationsservice resultat, av lekplatsredskap från fältet digitalt med hjälp av mobil eller tab. Två mobile responsiv webb-applikationer har utvecklat för att nå målet. En för att rapportera inspektion resultat och en för att rapportera reparationsservice resultat.",
        },
      ],
      url: {
        url:
          "https://kartor.kristianstad.se/park/?zoom=9&center=14.18015,56.03182&ol=v_lekplatsredskap,plats&bl=turistkarta",
      },
      fullscreenText: "Öppna applikationen till ett nytt fönster",
    },
    {
      name: "Synpunktskartan",
      description: [
        {
          p:
            "Syftet för detta projekt var att skapa en platsbaserad webbapplikation för medborgarna att kunna lämna synpunkter på planförslag för att stadsutvecklingen ska bli så bra som möjligt.",
        },
      ],
      url: { url: "https://kartor.kristianstad.se/fopkarta2/" },
      fullscreenText: "Öppna Synpunktskartan  till ett nytt fönster",
    },
    {
      name: "Östersund kommun Mobilanpassat webbapplikation",
      description: [
        {
          p:
            "Syftet för detta projekt var att utveckla en ny mobile anpassat webbapplikation från grunden för att presentera VA ledningsnätinformation och annan plats baserad information för Östersund kommun. I den här applikationen kunden har använt annan plats baserad data",
        },
      ],
      url: { img: ostersund_mobile_viewer },
      fullscreenText: "",
    },
    {
      name: "Sörab ledningsnät viewer från AWS",
      description: [
        {
          p:
            "Syftet för detta projekt var att utveckla och vidare utveckla GSViewer webbapplikationen för att presentera Sörab ledningsnätinformation och göra CRUD (Skapa, läsa, uppdatera och ta bort information) operation från där och drifta applikationen från AWS miljön.",
        },
      ],
      url: { url: sorabproject },
      fullscreenText: "",
    },
  ],
};
