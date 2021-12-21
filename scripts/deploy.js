const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const JoshPunks = await ethers.getContractFactory("JoshPunks");
  const deployed = await JoshPunks.deploy(10000);

  console.log("Josh Punks address:", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
