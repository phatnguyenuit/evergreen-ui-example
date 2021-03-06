import React, { memo } from 'react';
import {
  ArrowRightIcon,
  BackButton,
  Button,
  ButtonAppearance,
  EditIcon,
  Heading,
  IconButton,
  IntentTypes,
  majorScale,
  Pane,
  Text,
  TrashIcon,
} from 'evergreen-ui';
import { toTitleCase } from 'utils/string';
import useTheme from 'hooks/useTheme';

const buttonAppearances: ButtonAppearance[] = ['default', 'minimal', 'primary'];

const intents: IntentTypes[] = ['none', 'success', 'warning', 'danger'];

export const ButtonsComponent: React.FC = () => {
  const {
    colors: { intent: intentColors },
  } = useTheme();

  return (
    <Pane>
      <Pane>
        {buttonAppearances.map((appearance) => (
          <Pane key={appearance} marginTop={majorScale(2)}>
            <Heading is="h3" size={500}>{`${toTitleCase(
              appearance,
            )} Appearance`}</Heading>
            <Pane
              marginTop={majorScale(1)}
              display="flex"
              flexWrap="wrap"
              gap={majorScale(2)}
            >
              {intents.map((intent) => (
                <Button key={intent} appearance={appearance} intent={intent}>
                  {toTitleCase(intent)}
                </Button>
              ))}
              <Button appearance={appearance} iconBefore={EditIcon}>
                Icon Before
              </Button>
              <Button appearance={appearance} iconAfter={ArrowRightIcon}>
                Icon After
              </Button>
            </Pane>
          </Pane>
        ))}
      </Pane>
      <Pane marginTop={majorScale(3)}>
        <Heading size={700}>Icon Buttons</Heading>
        {buttonAppearances.map((appearance) => (
          <Pane key={appearance} marginTop={majorScale(2)}>
            <Heading is="h3" size={500}>{`${toTitleCase(
              appearance,
            )} Appearance`}</Heading>
            <Pane
              marginTop={majorScale(1)}
              display="flex"
              flexWrap="wrap"
              gap={majorScale(2)}
            >
              {intents.map((intent) => (
                <Pane key={intent}>
                  <IconButton
                    icon={TrashIcon}
                    appearance={appearance}
                    intent={intent}
                    iconSize={16}
                    height={majorScale(4)}
                  />
                  <Text color={intentColors[intent]}>
                    {toTitleCase(intent)}
                  </Text>
                </Pane>
              ))}
            </Pane>
          </Pane>
        ))}
      </Pane>
      <Pane marginTop={majorScale(3)}>
        <Heading size={700}>Back Buttons</Heading>
        {buttonAppearances.map((appearance) => (
          <Pane key={appearance} marginTop={majorScale(2)}>
            <Heading is="h3" size={500}>{`${toTitleCase(
              appearance,
            )} Appearance`}</Heading>
            <Pane
              marginTop={majorScale(1)}
              display="flex"
              flexWrap="wrap"
              gap={majorScale(2)}
            >
              {intents.map((intent) => (
                <Pane key={intent} display="flex" flexDirection="column">
                  <BackButton
                    key={intent}
                    appearance={appearance}
                    intent={intent}
                  />
                  <Text color={intentColors[intent]}>
                    {toTitleCase(intent)}
                  </Text>
                </Pane>
              ))}
            </Pane>
          </Pane>
        ))}
      </Pane>
      <Pane marginTop={majorScale(3)}>
        <Heading size={700}>Link Buttons</Heading>
        {buttonAppearances.map((appearance) => (
          <Pane key={appearance} marginTop={majorScale(2)}>
            <Heading is="h3" size={500}>{`${toTitleCase(
              appearance,
            )} Appearance`}</Heading>
            <Pane
              marginTop={majorScale(1)}
              display="flex"
              flexWrap="wrap"
              gap={majorScale(2)}
            >
              {intents.map((intent) => (
                <Pane key={intent} display="flex" flexDirection="column">
                  <Button
                    key={intent}
                    is="a"
                    href="#"
                    appearance={appearance}
                    intent={intent}
                  >
                    Link
                  </Button>
                  <Text color={intentColors[intent]}>
                    {toTitleCase(intent)}
                  </Text>
                </Pane>
              ))}
            </Pane>
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
};

const Buttons = memo(ButtonsComponent);
Buttons.displayName = 'Buttons';

export default Buttons;
