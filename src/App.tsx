import {
  lazy,
  Suspense,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  Card,
  Heading,
  majorScale,
  Pane,
  Paragraph,
  Text,
  ThemeContext,
} from 'evergreen-ui';
import { toTitleCase } from './utils/string';

const pages = ['buttons', 'badges', 'tabs', 'avatars'] as const;
type Page = typeof pages[number];

const getRandomPage = (): Page => {
  return pages[Math.floor(Math.random() * pages.length)];
};

function App() {
  const [activePage, setActivePage] = useState(getRandomPage);
  const handleClickPage = useCallback(
    (page: Page) => () => {
      setActivePage(page);
    },
    [],
  );
  const {
    colors: { text: textColors },
  } = useContext(ThemeContext);

  const getTextColor = useCallback(
    (page: Page) => {
      if (page === activePage) return textColors.success;
      return textColors.default;
    },
    [activePage, textColors.default, textColors.success],
  );

  const ActivePage = useMemo(
    () => lazy(() => import(`./containers/${activePage}`)),
    [activePage],
  );
  return (
    <main>
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
              onClick={handleClickPage(page)}
            >
              <Text fontWeight="bold" color={getTextColor(page)}>
                {toTitleCase(page)}
              </Text>
            </Card>
          ))}
        </Pane>
        <Pane marginTop={majorScale(3)}>
          <Heading is="h2" size={700}>
            {toTitleCase(activePage)}
          </Heading>
          <Suspense
            fallback={<Paragraph>{`Loading page "${activePage}"`}</Paragraph>}
          >
            <ActivePage />
          </Suspense>
        </Pane>
      </Pane>
    </main>
  );
}

export default App;
