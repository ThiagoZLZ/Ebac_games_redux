import { PreloadedState } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react';
import { appStore, RootState, configureStore } from '../../store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

interface ExtendedRenderOption extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: appStore
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore(preloadedState),
    ...opcoesAdicionais
  }: ExtendedRenderOption = {}
) {
  function Emcapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, {
      wrapper: Emcapsulador,
      ...opcoesAdicionais
    })
  }
}
