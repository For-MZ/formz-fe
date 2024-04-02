import styles from './CommunityPage.module.scss';
import Banner from './_components/Banner';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPosts } from './_services/getPosts';
import PostListPagination from './_components/PostListPagination';
import FilterProvider from './_context/FilterProvider';
import PostList from './_components/PostList';
import SearchFilter from './_components/SearchFilter';

export default async function CommunityPage() {
  const queryClient = new QueryClient();
  // SSR
  await queryClient.prefetchQuery({
    queryKey: ['community', 'posts'],
    queryFn: getPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Banner />
      <section className={styles.container}>
        <HydrationBoundary state={dehydratedState}>
          <FilterProvider>
            <SearchFilter />
            <PostList />
          </FilterProvider>
          <PostListPagination />
        </HydrationBoundary>
      </section>
    </>
  );
}
