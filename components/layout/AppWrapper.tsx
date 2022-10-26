import {FC, PropsWithChildren} from 'react'
import Head from 'next/head'
import { Nav } from "./Nav";
import { Footer } from "./Footer";

type AppProps = {
    title: string,
    description?:string
}

export const AppWrapper:FC<PropsWithChildren<AppProps>> = ({title, description, children}) => {
  return (
    <div className='flex flex-col bg-gray-900 text-white min-h-screen'>
        <Head>
            <title>{`${title} | App`}</title>
            {description && <meta name='description' content={description} />}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav/>
        <main className='grow flex'>
            {children}
        </main>
        <Footer/>
    </div>
  )
}