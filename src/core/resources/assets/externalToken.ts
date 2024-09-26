import { useQuery } from '@tanstack/react-query';
import { Address } from 'viem';

import { metadataClient } from '~/core/graphql';
import { Token } from '~/core/graphql/__generated__/metadata';
import {
  QueryConfig,
  QueryFunctionArgs,
  QueryFunctionResult,
  createQueryKey,
  queryClient,
} from '~/core/react-query';
import { SupportedCurrencyKey } from '~/core/references';
import {
  AddressOrEth,
  ParsedAsset,
  ParsedUserAsset,
} from '~/core/types/assets';
import { ChainId, chainIdToNameMapping } from '~/core/types/chains';
import { isNativeAsset } from '~/core/utils/chains';
import {
  convertAmountAndPriceToNativeDisplay,
  convertAmountToPercentageDisplay,
} from '~/core/utils/numbers';

export const EXTERNAL_TOKEN_CACHE_TIME = 1000 * 60 * 60 * 24; // 24 hours
export const EXTERNAL_TOKEN_STALE_TIME = 1000 * 60; // 1 minute

// need to keep these queried tokens up to date
//   ETH_ADDRESS,
// MATIC_MAINNET_ADDRESS,
// BNB_MAINNET_ADDRESS,
// OP_ADDRESS

// Types
type ExternalToken = Pick<
  Token,
  'decimals' | 'iconUrl' | 'name' | 'networks' | 'symbol' | 'price'
>;
// export type FormattedExternalAsset = ExternalToken & {
//   address: string;
//   icon_url?: string;
//   isNativeAsset: boolean;
//   native: {
//     change: string;
//     price: {
//       amount: string;
//       display: string;
//     };
//   };
//   networks?: {
//     [chainId in ChainId]?: {
//       address: chainId extends ChainId.mainnet ? AddressOrEth : Address;
//       decimals: number;
//     };
//   };
// };

// Query Types for External Token
type ExternalTokenArgs = {
  address: string;
  chainId: ChainId;
  currency: SupportedCurrencyKey;
};

// Query Key for Token Price
export const externalTokenQueryKey = ({
  address,
  chainId,
  currency,
}: ExternalTokenArgs) =>
  createQueryKey(
    'externalToken',
    { address, chainId, currency },
    { persisterVersion: 1 },
  );

type externalTokenQueryKey = ReturnType<typeof externalTokenQueryKey>;

// Helpers
const formatExternalAsset = (
  address: string,
  chainId: ChainId,
  asset: ExternalToken,
  nativeCurrency: SupportedCurrencyKey,
): ParsedAsset => {
  return {
    ...asset,
    chainId,
    chainName: chainIdToNameMapping[chainId],
    uniqueId: `${address}_${chainId}`,
    address: address as Address,
    isNativeAsset: isNativeAsset(address as AddressOrEth, chainId),
    native: {
      price: {
        change: asset?.price?.relativeChange24h
          ? convertAmountToPercentageDisplay(
              `${asset?.price?.relativeChange24h}`,
            )
          : '',
        amount: asset?.price?.value ?? 0,
        display: convertAmountAndPriceToNativeDisplay(
          1,
          asset?.price?.value ?? 0,
          nativeCurrency,
        ).display,
      },
    },
    price: {
      value: asset?.price?.value ?? 0,
      relative_change_24h: asset?.price?.relativeChange24h ?? 0,
    },
    icon_url: asset?.iconUrl || undefined,
  };
};

// Query Function for Token Price
export async function fetchExternalToken({
  address,
  chainId,
  currency,
}: ExternalTokenArgs) {
  const response = await metadataClient.externalToken({
    address,
    chainId,
    currency,
  });
  if (response?.token) {
    return formatExternalAsset(address, chainId, response.token, currency);
  } else {
    return null;
  }
}

export async function externalTokenQueryFunction({
  queryKey: [{ address, chainId, currency }],
}: QueryFunctionArgs<
  typeof externalTokenQueryKey
>): Promise<ParsedAsset | null> {
  if (!address || !chainId) return null;
  return fetchExternalToken({ address, chainId, currency });
}

export type ExternalTokenQueryFunctionResult = QueryFunctionResult<
  typeof externalTokenQueryFunction
>;

// Prefetch function for Token Price
export async function prefetchExternalToken({
  address,
  chainId,
  currency,
}: ExternalTokenArgs) {
  await queryClient.prefetchQuery({
    queryKey: externalTokenQueryKey({ address, chainId, currency }),
    queryFn: externalTokenQueryFunction,
    staleTime: EXTERNAL_TOKEN_STALE_TIME,
    gcTime: EXTERNAL_TOKEN_CACHE_TIME,
  });
}

// Query Hook for Token Price
export function useExternalToken(
  { address, chainId, currency }: ExternalTokenArgs,
  config: QueryConfig<
    ExternalTokenQueryFunctionResult,
    Error,
    ParsedUserAsset,
    externalTokenQueryKey
  > = {},
) {
  return useQuery({
    queryKey: externalTokenQueryKey({ address, chainId, currency }),
    queryFn: externalTokenQueryFunction,
    staleTime: EXTERNAL_TOKEN_STALE_TIME,
    gcTime: EXTERNAL_TOKEN_CACHE_TIME,
    enabled: !!address && !!chainId,
    ...config,
  });
}
