const axios = require('axios');
module.exports = async function () {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=120`);
        // console.log(response.data.result)
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
}
// fetchFunc();


// getData = datas => {
//     datas.forEach(async res => {
//         // console.log(res.url);
//         try {
//             const resFet = await axios.get(res.url);
//             //    console.log(resFet.data);
//             creatData(resFet.data);
//         } catch (er) {
//             console.error(er);
//         }

//     });

// }
// let arrayName = [];
// const creatData = resFet => {
//     // console.log(resFet.data.name);
//     if (resFet) {
//         let finalOutput = resFet.name;
//         arrayName.push(finalOutput);
//         console.log(arrayName);
//         // console.log(resFet.name);
//         return arrayName;
//     }
//     //  return   finalVal.name;

// }




// module.exports = creatData();
