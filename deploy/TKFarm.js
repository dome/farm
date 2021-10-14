module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts()

  
  const { address } = await deploy("TKFarm", {
    from: deployer,
    args: [dev, "13185715"],
    log: true,
    deterministicDeployment: false
  })

}

module.exports.tags = ["TKFarm"]
// module.exports.dependencies = ["UniswapV2Factory", "UniswapV2Router02", "SushiToken"]
