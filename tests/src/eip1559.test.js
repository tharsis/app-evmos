import "core-js/stable";
import "regenerator-runtime/runtime";
import { waitForAppScreen, zemu } from './test.fixture';

test('[Nano S] Transfer eip1559', zemu("nanos", async (sim, eth) => {

  const tx = eth.signTransaction(
    "44'/60'/0'/0/0",
    '02f87001018502540be4008502540be40086246139ca800094cccccccccccccccccccccccccccccccccccccccc8000c001a0e07fb8a64ea3786c9a6649e54429e2786af3ea31c6d06165346678cf8ce44f9ba00e4a0526db1e905b7164a858fd5ebd2f1759e22e6955499448bd276a6aa62830',
  );

  await waitForAppScreen(sim);
  await sim.navigateAndCompareSnapshots('.', 'nanos_transfer_eip1559', [6, 0]);

  await expect(tx).resolves.toEqual({
    "r": "3d6dfabc6c52374bfa34cb2c433856a0bcd9484870dd1b50249f7164a5fce052",
    "s": "0548a774dd0b63930d83cb2e1a836fe3ef24444e8b758b00585d9a076c0e98a8",
    "v": "01"
  });

}));

test.skip('[Nano X] Transfer eip1559', zemu("nanox", async (sim, eth) => {

  const tx = eth.signTransaction(
    "44'/60'/0'/0/0",
    '02f87001018502540be4008502540be40086246139ca800094cccccccccccccccccccccccccccccccccccccccc8000c001a0e07fb8a64ea3786c9a6649e54429e2786af3ea31c6d06165346678cf8ce44f9ba00e4a0526db1e905b7164a858fd5ebd2f1759e22e6955499448bd276a6aa62830',
  );

  await waitForAppScreen(sim);
  await sim.navigateAndCompareSnapshots('.', 'nanox_transfer_eip1559', [4, 0]);

  await expect(tx).resolves.toEqual({
    "r": "3d6dfabc6c52374bfa34cb2c433856a0bcd9484870dd1b50249f7164a5fce052",
    "s": "0548a774dd0b63930d83cb2e1a836fe3ef24444e8b758b00585d9a076c0e98a8",
    "v": "01"
  });

}));
