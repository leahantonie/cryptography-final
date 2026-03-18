import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();

  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const Token = await ethers.getContractFactory("CABToken");
  const token = await Token.deploy(deployer.address);

  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("CAB token deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});