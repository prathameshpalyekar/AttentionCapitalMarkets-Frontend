import { PrivyProvider} from '@privy-io/react-auth';
// import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import {toSolanaWalletConnectors} from '@privy-io/react-auth/solana';

const solanaConnectors = toSolanaWalletConnectors({
  // By default, shouldAutoConnect is enabled
  shouldAutoConnect: true,
});

const PrivyProviderWrapper = ({children}: {children: React.ReactNode}) => {
  // const solanaConnectors = [
  //   new PhantomWalletAdapter(),
  //   new SolflareWalletAdapter(),
  // ];
  return (
    <PrivyProvider
      appId="cm8d3j0a401p09eyjbe4gww6x"
      config={{
        // Display email and wallet as login methods
        loginMethods: ['twitter', 'wallet'],
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          // walletChainType: 'solana-only',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          solana: {
            createOnLogin: 'all-users',
          },
          ethereum: {
            createOnLogin: 'all-users',
          }
        },
        externalWallets: {
          solana: {
            connectors: solanaConnectors,
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
};

export default PrivyProviderWrapper;