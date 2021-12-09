module.exports = async (ethers, ohmAddress, daiAddress) => {
    const treasuryFactory = await ethers.getContractFactory("OlympusTreasury");
    const treasury = await treasuryFactory.deploy(ohmAddress, daiAddress, 0)
    return treasury;
}