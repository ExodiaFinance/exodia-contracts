module.exports = async (ethers) => {
    const OHM = await ethers.getContractFactory('OlympusERC20Token');
    const ohm = await OHM.deploy();
    return ohm;
}