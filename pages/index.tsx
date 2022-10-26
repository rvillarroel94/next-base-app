import type { NextPage } from 'next'
import { AppWrapper } from "../components/layout/AppWrapper";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  return (
    <AppWrapper title='Inicio' description='Catalogo de Productos'>
      <div className='grow flex'>
        <div className='grow flex justify-center items-center bg-black dark:bg-rdatos-accent bg-opacity-70'>
        <h1 className='font-bold text-6xl'>t</h1>
        </div>
      </div>
    </AppWrapper>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});


export default Home
