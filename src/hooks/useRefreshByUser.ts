import * as React from 'react';

export function useRefreshByUser(refetch: () => Promise<unknown>) {
  const [isRefetchingByUser, setIsRefetchingByUser] = React.useState(false);

  async function refetchByUser() {
    setIsRefetchingByUser(true);

    try {
      await refetch();
    } finally {
      setIsRefetchingByUser(false);
    }
  }

  function refetchSetter(getState: boolean) {
    setIsRefetchingByUser(getState);
  }

  return {
    isRefetchingByUser,
    refetchByUser,
    refetchSetter,
  };
}
