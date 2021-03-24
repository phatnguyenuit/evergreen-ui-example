import { lazy, Suspense, useCallback, useMemo, memo } from 'react';
import { Switch, Route, Link, useLocation, Redirect } from 'react-router-dom';
import { Card, Heading, majorScale, Pane, Paragraph, Text } from 'evergreen-ui';
import useTheme from 'hooks/useTheme';
import { toTitleCase } from 'utils/string';

const pages = ['buttons', 'badges', 'tabs', 'avatars', 'canvas'] as const;
type Page = typeof pages[number];

export const AppLayoutComponent: React.FC = () => {
  const { pathname } = useLocation();
  const {
    colors: { text: textColors },
  } = useTheme();
  const activePage = useMemo(() => pathname.substr(1), [pathname]);

  const getTextColor = useCallback(
    (page: Page) => {
      if (page === activePage) return textColors.success;
      return textColors.default;
    },
    [activePage, textColors.default, textColors.success],
  );
  return (
    <Pane paddingX={majorScale(2)} paddingY={majorScale(3)}>
      <Heading is="h1" size={800}>
        Evergreen UI
      </Heading>
      <Pane
        marginTop={majorScale(2)}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap={majorScale(2)}
      >
        {pages.map((page) => (
          <Card
            key={page}
            elevation={1}
            cursor="pointer"
            padding={majorScale(2)}
            is={Link}
            to={page}
            textDecoration="none"
          >
            <Text fontWeight="bold" color={getTextColor(page)}>
              {toTitleCase(page)}
            </Text>
          </Card>
        ))}
      </Pane>
      <Pane marginTop={majorScale(3)}>
        <Heading is="h2" size={700}>
          {pages.includes(activePage as Page)
            ? toTitleCase(activePage)
            : 'Not Found'}
        </Heading>
        <Suspense
          fallback={<Paragraph>{`Loading page "${activePage}"`}</Paragraph>}
        >
          <Switch>
            <Redirect from="/" to="/buttons" exact />
            {pages.map((page) => (
              <Route
                exact
                key={page}
                path={`/${page}`}
                component={lazy(() => import(`containers/${page}`))}
              />
            ))}
            <Route component={lazy(() => import(`containers/not-found`))} />
          </Switch>
        </Suspense>
      </Pane>
    </Pane>
  );
};

const AppLayout = memo(AppLayoutComponent);
AppLayout.displayName = 'AppLayout';

export default AppLayout;
