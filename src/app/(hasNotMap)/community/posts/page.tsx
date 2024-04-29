import styles from './CommunityPage.module.scss';
import Banner from './_components/Banner';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPosts } from './_services/getPosts';
import PostListSection from './_components/PostListSection';
import CategoryTab from './_components/CategoryTab';
import SearchForm from './_components/SearchForm';
import SortingRadio from './_components/SortingRadio';

type Props = {
  searchParams: { word?: string; category?: string; order?: string };
};

export default async function CommunityPage({ searchParams }: Props) {
  const queryClient = new QueryClient();
  // SSR
  await queryClient.prefetchQuery({
    queryKey: ['community', 'posts', searchParams],
    queryFn: getPosts,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Banner />
      <section className={styles.container}>
        <HydrationBoundary state={dehydratedState}>
          <SearchForm />
          <div className={styles.filterContainer}>
            <CategoryTab />
            <SortingRadio />
          </div>
          <PostListSection searchParams={searchParams} />
        </HydrationBoundary>
      </section>
    </>
  );
}
