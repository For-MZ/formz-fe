import styles from './CommunityPage.module.scss';
import Banner from './_components/Banner';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPosts } from './_lib/getPosts';
import PaginationSection from './_components/PaginationSection';
import FilterablePosts from './_components/FilterablePosts';
import FilterProvider from './_context/FilterProvider';
import CategoryFilter from './_components/CategoryFilter';
import SortingFilter from './_components/SortingFilter';
import SearchFilter from './_components/SearchFilter';

type Props = {
  searchParams: { word?: string; order?: string; category?: string };
};

export default async function CommunityPage({ searchParams }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['community', 'posts', searchParams],
    queryFn: getPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Banner />
      <HydrationBoundary state={dehydratedState}>
        <FilterProvider>
          <section className={styles.posts}>
            <SearchFilter />
            <div className={styles.filters}>
              <CategoryFilter />
              <SortingFilter />
            </div>
            <FilterablePosts searchParams={searchParams} />
            <PaginationSection />
          </section>
        </FilterProvider>
      </HydrationBoundary>
    </>
  );
}
