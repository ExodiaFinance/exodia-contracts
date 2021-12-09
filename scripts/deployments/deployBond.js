module.exports = (ethers, ohmAddress, principle, treasuryAddress, daoAddress, bondCalculator) => {
    const bondFactory = ethers.getContractFactory("OlympusBondDepository");
    const bond = await bondFactory.deploy();
    return bond;
}