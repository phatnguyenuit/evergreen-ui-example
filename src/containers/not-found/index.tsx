import React, { memo } from 'react';
import { Pane, Image } from 'evergreen-ui';
import { getStaticPath } from 'utils/string';

export const NotFoundComponent: React.FC = () => (
  <Pane display="flex" alignItems="center" justifyContent="center">
    <Image src={getStaticPath('/images/undraw_page_not_found.svg')} />
  </Pane>
);

const NotFound = memo(NotFoundComponent);
NotFound.displayName = 'NotFound';

export default NotFound;
