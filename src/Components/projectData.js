import stockImg from './img/stockImg.png';
import bartImg from './img/bartLogo.png';

export const projectData = [
    {
        title: "Stock Info",
        description: "Retrieves opening, closing,high, and low values of any stock from any day using polygon.io stock API",
        img: stockImg,
        link: "/stockApi"
    },
    {
        title: "Bart Schedule",
        description: "Real time information on BART arrivals and departures using BART API",
        img: bartImg,
        link: "/bartApi"
    }
];

export default projectData;