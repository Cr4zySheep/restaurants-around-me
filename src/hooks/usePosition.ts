import { useState, useEffect } from 'react';

import { Status, Position } from 'helpers/types';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export default function usePosition(): {
  position: Position | undefined;
  status: Status;
} {
  const [position, setPosition] = useState<Position>();
  const [status, setStatus] = useState<Status>(Status.PENDING);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setStatus(Status.DONE);
      },
      () => {
        setStatus(Status.ERROR);
      },
      options
    );
  }, []);

  return { position, status };
}
