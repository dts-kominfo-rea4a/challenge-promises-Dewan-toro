const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const joinTheater = theaterIXX.concat(theaterVGC);

    var countEmosi = 0;

    for (let i=0; i<joinTheater.length; i++){
      if (joinTheater[i].hasil === emosi) {
        countEmosi++;
      }
    }

    return countEmosi;

  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  promiseOutput,
};
