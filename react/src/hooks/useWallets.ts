import type { WalletState } from 'web3-onboardcore-scsnpnt'

import { useAppState } from './useAppState.js'

export const useWallets = (): WalletState[] => useAppState('wallets')
