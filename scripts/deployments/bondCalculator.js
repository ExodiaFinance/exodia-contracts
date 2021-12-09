module.exports = async (ethers, ohmAddress) => {
    const calcFactory = await ethers.getContractFactory("OlympusBondingCalculator");
    const calc = await calcFactory.deploy(ohmAddress);
    return calc;
}