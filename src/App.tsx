/** @jsxRuntime classic */
/** @jsx jsx */
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { jsx } from '@emotion/react';
import useRestaurants from 'hooks/useRestaurants';
import { Status } from 'hooks/usePosition';

import Divider from 'components/Divider';
import Header from 'components/Header';
import MainContent from 'components/MainContent';
import Footer from 'components/Footer';
import Loading from 'components/Loading';
import ErrorContent from 'components/ErrorContent';

export default function App(): EmotionJSX.Element {
  const { places, status } = useRestaurants();

  return (
    <div
      css={theme => ({
        padding: theme.spacing(4),
        height: '100%',
      })}
    >
      <div
        css={theme => ({
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '70%',
          minWidth: 1280,
          margin: 'auto',
          background: 'white',
          borderRadius: theme.spacing(2),
          padding: theme.spacing(2),
          paddingBottom: theme.spacing(1),
        })}
      >
        <Header />

        <Divider />

        {(status === Status.PENDING || (status === Status.DONE && !places)) && (
          <Loading />
        )}

        {status === Status.ERROR && <ErrorContent />}

        {status === Status.DONE && places && <MainContent />}

        <Divider styles={{ marginTop: 0, marginBottom: 8 }} />

        <Footer />
      </div>
    </div>
  );
}
