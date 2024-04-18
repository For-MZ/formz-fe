import styles from './SearchPage.module.scss';
import SearchForm from '../_components/SearchForm';
import SearchResult from './_components/SearchResult/SearchResult';
import SearchResultPagination from './_components/SearchResultPagination';
import CategoryFilter from './_components/CategoryFilter';
import SortingFilter from './_components/SortingFilter';

type Props = {
  searchParams: { word: string };
};

export default async function SearchPage({ searchParams }: Props) {
  return (
    <>
      <section className={styles.searchFilterContainer}>
        <SearchForm />
        <CategoryFilter />
        <SortingFilter />
      </section>
      <SearchResult searchParams={searchParams} />
      <SearchResultPagination />
    </>
  );
}
