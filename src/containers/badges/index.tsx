import React, { memo } from 'react';
import {
  Pill,
  Pane,
  Badge,
  BadgeOwnProps,
  majorScale,
  Heading,
} from 'evergreen-ui';

type BadgeColor = Exclude<BadgeOwnProps['color'], undefined>;
const colors: BadgeColor[] = [
  'blue',
  'green',
  'neutral',
  'orange',
  'purple',
  'red',
  'teal',
  'yellow',
];

export const BadgesComponent: React.FC = () => (
  <Pane>
    {[true, false].map((isSolid) => (
      <Pane key={String(isSolid)} marginTop={majorScale(2)}>
        <Heading is="h3" size={500}>
          {isSolid ? 'Solid' : 'Subtle'} badges
        </Heading>
        <Pane
          marginTop={majorScale(1)}
          display="flex"
          flexWrap="wrap"
          gap={majorScale(2)}
        >
          {colors.map((color) => (
            <Badge key={color} color={color} isSolid={isSolid}>
              {color}
            </Badge>
          ))}
        </Pane>
      </Pane>
    ))}
    <Pane marginTop={majorScale(3)}>
      <Heading is="h2" size={700}>
        Pills
      </Heading>
      {[true, false].map((isSolid) => (
        <Pane key={String(isSolid)} marginTop={majorScale(2)}>
          <Heading is="h3" size={500}>
            {isSolid ? 'Solid' : 'Subtle'} pills
          </Heading>
          <Pane
            marginTop={majorScale(1)}
            display="flex"
            flexWrap="wrap"
            gap={majorScale(2)}
          >
            {colors.map((color) => (
              <Pill key={color} color={color} isSolid={isSolid}>
                {Math.floor(Math.random() * 100)}
              </Pill>
            ))}
          </Pane>
        </Pane>
      ))}
    </Pane>
  </Pane>
);

const Badges = memo(BadgesComponent);
Badges.displayName = 'Badges';

export default Badges;
