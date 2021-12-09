module.exports = async (ethers, treasuryAddress, ohmAddress, epochLength, nextEpochBlock) => {
    const distributorFactory = await ethers.getContractFactory('Distributor');
    const distributor = await distributorFactory
        .deploy(treasuryAddress, ohmAddress, epochLength, nextEpochBlock);
    return distributor;
}