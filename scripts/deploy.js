
const hre = require("hardhat");

async function main() {


  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log(
    `Lock with 1 ETH and deployed to ${upload.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0xa18F8F29E4F8FB479d352F884876Ca16573c6fc9