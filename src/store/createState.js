const defaultState = {
  // Settings
  settings: {
    darkMode: true,
  },
  // Web3
  web3Stats: false,
  accounts: false,
  gasPrice: 36,
  activeAccount: false,
  balance: 0,
  // Network
  availableProviders: ['MetaMask'],
  selectedProvider: 'MetaMask',
  // Profile
  dwellerAddress: false,
  username: '',
  profilePictureHash: false,
  recentFiles: 0,
  mainRoute: 'main',
  // Friends
  friends: [],
  peerHealth: {},
  // Audio Video
  audioDevice: 'Default Microphone',
  videoDevice: 'Default Webcam',
  // Internal
  status: 'Alive',
  p2pOnline: false,
};

const createState = customState => Object.assign({}, defaultState, customState);

export default createState;
