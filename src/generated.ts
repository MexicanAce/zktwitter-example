import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DecentralizedTwitter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export const decentralizedTwitterABI = [
  {
    constant: true,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllTweets',
    outputs: [
      {
        name: '',
        internalType: 'struct DecentralizedTwitter.Tweet[]',
        type: 'tuple[]',
        components: [
          { name: 'user', internalType: 'address', type: 'address' },
          { name: 'content', internalType: 'string', type: 'string' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    constant: true,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'tweets',
    outputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'content', internalType: 'string', type: 'string' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_content', internalType: 'string', type: 'string' }],
    name: 'writeTweet',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export const decentralizedTwitterAddress = {
  280: '0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96',
} as const

/**
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export const decentralizedTwitterConfig = {
  address: decentralizedTwitterAddress,
  abi: decentralizedTwitterABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link decentralizedTwitterABI}__.
 *
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export function useDecentralizedTwitterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof decentralizedTwitterABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof decentralizedTwitterABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof decentralizedTwitterAddress } = {} as any,
) {
  return useContractRead({
    abi: decentralizedTwitterABI,
    address: decentralizedTwitterAddress[280],
    ...config,
  } as UseContractReadConfig<
    typeof decentralizedTwitterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link decentralizedTwitterABI}__ and `functionName` set to `"getAllTweets"`.
 *
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export function useDecentralizedTwitterGetAllTweets<
  TFunctionName extends 'getAllTweets',
  TSelectData = ReadContractResult<
    typeof decentralizedTwitterABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof decentralizedTwitterABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof decentralizedTwitterAddress } = {} as any,
) {
  return useContractRead({
    abi: decentralizedTwitterABI,
    address: decentralizedTwitterAddress[280],
    functionName: 'getAllTweets',
    ...config,
  } as UseContractReadConfig<
    typeof decentralizedTwitterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link decentralizedTwitterABI}__ and `functionName` set to `"tweets"`.
 *
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export function useDecentralizedTwitterTweets<
  TFunctionName extends 'tweets',
  TSelectData = ReadContractResult<
    typeof decentralizedTwitterABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof decentralizedTwitterABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof decentralizedTwitterAddress } = {} as any,
) {
  return useContractRead({
    abi: decentralizedTwitterABI,
    address: decentralizedTwitterAddress[280],
    functionName: 'tweets',
    ...config,
  } as UseContractReadConfig<
    typeof decentralizedTwitterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link decentralizedTwitterABI}__.
 *
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export function useDecentralizedTwitterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof decentralizedTwitterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof decentralizedTwitterABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof decentralizedTwitterABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof decentralizedTwitterABI, TFunctionName, TMode>(
    {
      abi: decentralizedTwitterABI,
      address: decentralizedTwitterAddress[280],
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link decentralizedTwitterABI}__ and `functionName` set to `"writeTweet"`.
 *
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export function useDecentralizedTwitterWriteTweet<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof decentralizedTwitterAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof decentralizedTwitterABI,
          'writeTweet'
        >['request']['abi'],
        'writeTweet',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'writeTweet' }
    : UseContractWriteConfig<
        typeof decentralizedTwitterABI,
        'writeTweet',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'writeTweet'
      } = {} as any,
) {
  return useContractWrite<typeof decentralizedTwitterABI, 'writeTweet', TMode>({
    abi: decentralizedTwitterABI,
    address: decentralizedTwitterAddress[280],
    functionName: 'writeTweet',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link decentralizedTwitterABI}__.
 *
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export function usePrepareDecentralizedTwitterWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof decentralizedTwitterABI,
      TFunctionName
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof decentralizedTwitterAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: decentralizedTwitterABI,
    address: decentralizedTwitterAddress[280],
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof decentralizedTwitterABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link decentralizedTwitterABI}__ and `functionName` set to `"writeTweet"`.
 *
 * [__View Contract on Zk Sync Era Testnet Zk Explorer__](https://goerli.explorer.zksync.io/address/0x8a4382999Bd502c4B5cceb5fD6e2c0BcBA4f3c96)
 */
export function usePrepareDecentralizedTwitterWriteTweet(
  config: Omit<
    UsePrepareContractWriteConfig<typeof decentralizedTwitterABI, 'writeTweet'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof decentralizedTwitterAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: decentralizedTwitterABI,
    address: decentralizedTwitterAddress[280],
    functionName: 'writeTweet',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof decentralizedTwitterABI,
    'writeTweet'
  >)
}
