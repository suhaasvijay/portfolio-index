"use strict";

import App from 'next/app'
import Head from 'next/head';

import Header from '../components/Header'
import Footer from '../components/Footer'
import "../app/globals.css"

export default class MyApp extends App {
  render() {
    const { Component, pages } = this.props

    return (
      <>
        <Head>
          <link rel="icon" href="/icon.svg" sizes="any" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Portfolio</title>
        </Head>
        {/* <Header /> */}
        <Component {...pages} />
        {/* <Footer /> */}
      </>

    )
  }
}
