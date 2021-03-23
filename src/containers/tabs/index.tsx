import React, { memo } from 'react';
import {
  Pane,
  Tablist,
  Tab,
  SidebarTab,
  Paragraph,
  majorScale,
  Heading,
} from 'evergreen-ui';
import StateWrapper from 'components/state-wrapper';

export const TabsComponent: React.FC = () => (
  <Pane>
    <StateWrapper
      initialState={{
        selectedIndex: 0,
        tabs: ['Traits', 'Event History', 'Identities'],
      }}
    >
      {({ state: { selectedIndex, tabs }, setState }) => (
        <Pane>
          <Pane marginTop={majorScale(3)}>
            <Heading is="h3" size={500}>
              Regular Tabs
            </Heading>
            <Pane marginTop={majorScale(1)}>
              <Tablist marginBottom={16} marginRight={majorScale(3)}>
                {tabs.map((tab, index) => (
                  <Tab
                    key={tab}
                    id={tab}
                    isSelected={index === selectedIndex}
                    aria-controls={`panel-${tab}`}
                    onSelect={() =>
                      setState((prev) => ({ ...prev, selectedIndex: index }))
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tablist>
              <Pane padding={majorScale(2)} background="tint1" flex="1">
                {tabs.map((tab, index) => (
                  <Pane
                    key={tab}
                    id={`panel-${tab}`}
                    role="tabpanel"
                    aria-labelledby={tab}
                    aria-hidden={index !== selectedIndex}
                    display={index === selectedIndex ? 'block' : 'none'}
                  >
                    <Paragraph>Panel {tab}</Paragraph>
                  </Pane>
                ))}
              </Pane>
            </Pane>
          </Pane>
          <Pane marginTop={majorScale(3)}>
            <Heading is="h3" size={500}>
              Sidebar Tabs
            </Heading>
            <Pane marginTop={majorScale(1)} display="flex">
              <Tablist marginBottom={majorScale(2)} marginRight={majorScale(3)}>
                {tabs.map((tab, index) => (
                  <SidebarTab
                    key={tab}
                    id={tab}
                    isSelected={index === selectedIndex}
                    aria-controls={`panel-${tab}`}
                    onSelect={() =>
                      setState((prev) => ({ ...prev, selectedIndex: index }))
                    }
                  >
                    {tab}
                  </SidebarTab>
                ))}
              </Tablist>
              <Pane padding={majorScale(2)} background="tint1" flex="1">
                {tabs.map((tab, index) => (
                  <Pane
                    key={tab}
                    id={`panel-${tab}`}
                    role="tabpanel"
                    aria-labelledby={tab}
                    aria-hidden={index !== selectedIndex}
                    display={index === selectedIndex ? 'block' : 'none'}
                  >
                    <Paragraph>Panel {tab}</Paragraph>
                  </Pane>
                ))}
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      )}
    </StateWrapper>
  </Pane>
);

const Tabs = memo(TabsComponent);
Tabs.displayName = 'Tabs';

export default Tabs;
