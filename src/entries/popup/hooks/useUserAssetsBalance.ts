import { useCallback } from 'react';
import { Address } from 'wagmi';

import { SupportedCurrencyKey } from '~/core/references';
import {
  selectUserAssetsBalance,
  selectorFilterByUserChains,
} from '~/core/resources/_selectors/assets';
import { useUserAssets } from '~/core/resources/assets';
import { useCustomNetworkAssets } from '~/core/resources/assets/customNetworkAssets';
import { useCurrentAddressStore, useCurrentCurrencyStore } from '~/core/state';
import {
  computeUniqueIdForHiddenAsset,
  useHiddenAssetStore,
} from '~/core/state/hiddenAssets/hiddenAssets';
import { ParsedUserAsset } from '~/core/types/assets';
import { ChainId } from '~/core/types/chains';
import { add, convertAmountToNativeDisplay } from '~/core/utils/numbers';

export function useUserAssetsBalance(args?: {
  chain?: ChainId;
  currency?: SupportedCurrencyKey;
}) {
  const { chain, currency } = args || {};
  const { currentAddress: address } = useCurrentAddressStore();
  const { currentCurrency } = useCurrentCurrencyStore();
  const { hidden } = useHiddenAssetStore();
  const isHidden = useCallback(
    (asset: ParsedUserAsset) => {
      return !!hidden[address]?.[computeUniqueIdForHiddenAsset(asset)];
    },
    [address, hidden],
  );

  const { data: totalAssetsBalanceKnownNetworks } = useUserAssets(
    {
      address,
      currency: currency || currentCurrency,
    },
    {
      select: (data) =>
        selectorFilterByUserChains({
          data,
          selector: (assetsByChain) => {
            return selectUserAssetsBalance(assetsByChain, isHidden);
          },
          chain,
        }),
    },
  );

  const { data: totalAssetsBalanceCustomNetworks = [] } =
    useCustomNetworkAssets(
      {
        address: address as Address,
        currency: currency || currentCurrency,
      },
      {
        select: (data) =>
          selectorFilterByUserChains({
            data,
            selector: (assetsByChain) => {
              return selectUserAssetsBalance(assetsByChain, isHidden);
            },
            chain,
          }),
      },
    );

  const totalAssetsBalance = add(
    totalAssetsBalanceKnownNetworks as string,
    totalAssetsBalanceCustomNetworks as string,
  );

  return {
    amount: totalAssetsBalance,
    display: convertAmountToNativeDisplay(
      totalAssetsBalance || 0,
      currency || currentCurrency,
    ),
  };
}
