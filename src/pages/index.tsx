import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Header from '../components/Header';
import Link from 'next/link'
import {FiCalendar, FiUser} from 'react-icons/fi'
import Prismic from '@prismicio/client'

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return(
  <>
  
  <main  className={commonStyles.container}>
    <Header />
    <div className={styles.posts}>
      <Link href='/'>
      <a className={styles.post}>
        <strong >Como utilizar Hooks</strong>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>
        <ul>
          <li>
        <FiCalendar />
        15 mar 2022
          </li>
          <li>
        <FiUser />
        Marco Gonzales
          </li>
        </ul>
      </a>

      </Link>
    <button type='button'> Carregar mais</button>
    </div>

  </main>
  </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType([Prismic.predicate.at('document.type')]);

  // TODO
};
