module.exports = async (ethers) => {
    const sOHM = await ethers.getContractFactory('sOlympus');
    const sohm = await sOHM.deploy();
    return sohm;
}