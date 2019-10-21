const constants = {}
constants.organization = 'DeepitAG'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json',
  PoaNetworkConsensus: 'PoaNetworkConsensus.abi.json',
  ValidatorMetadata: 'ValidatorMetadata.abi.json',
  ProofOfPhysicalAddress: 'ProofOfPhysicalAddress.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'
constants.rootPath = '/poa-dapps-validators'
constants.branches = {
  PCHAIN: 'pchain'
}

constants.navigationData = [
  {
    icon: 'all',
    title: 'All',
    url: constants.rootPath
  },
  {
    icon: 'set',
    title: 'Set Metadata',
    url: `${constants.rootPath}/set`
  },
  {
    icon: 'pending',
    title: 'Pending Changes',
    url: `${constants.rootPath}/pending-changes`
  }
]

constants.NETWORKS = {
  '191': {
    NAME: 'Pchain',
    RPC: 'http://bootnode-balancer-820434300.us-east-1.elb.amazonaws.com',
    BRANCH: constants.branches.PCHAIN,
    TESTNET: false
  }
}

module.exports = {
  constants
}
